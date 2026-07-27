import fs from "node:fs";
import path from "node:path";

const mode = process.argv[2];
const repo = process.env.GITHUB_REPOSITORY;
const issueNumber = process.env.ISSUE_NUMBER;
const githubToken = process.env.GITHUB_TOKEN;
const openaiKey = process.env.OPENAI_API_KEY;
const model = process.env.OPENAI_MODEL || "gpt-5";

if (!mode || !["draft", "revision", "report"].includes(mode)) {
  throw new Error("Cách dùng: node .github/scripts/openai-collab.mjs draft|revision|report");
}
if (!repo || !issueNumber || !githubToken || !openaiKey) {
  throw new Error("Thiếu GITHUB_REPOSITORY, ISSUE_NUMBER, GITHUB_TOKEN hoặc OPENAI_API_KEY");
}

const workDir = ".ai-work";
fs.mkdirSync(workDir, { recursive: true });

function readLimited(file, maxChars = 16000) {
  if (!fs.existsSync(file)) return "[Không có file]";
  const text = fs.readFileSync(file, "utf8");
  return text.length > maxChars ? `${text.slice(0, maxChars)}\n\n[Đã cắt bớt]` : text;
}

async function githubApi(endpoint, options = {}) {
  const response = await fetch(`https://api.github.com${endpoint}`, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${githubToken}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  if (!response.ok) {
    throw new Error(`GitHub API ${response.status}: ${await response.text()}`);
  }
  return response.status === 204 ? null : response.json();
}

async function postComment(body) {
  return githubApi(`/repos/${repo}/issues/${issueNumber}/comments`, {
    method: "POST",
    body: JSON.stringify({ body }),
  });
}

function extractOutputText(data) {
  if (typeof data.output_text === "string" && data.output_text.trim()) {
    return data.output_text.trim();
  }
  const chunks = [];
  for (const item of data.output || []) {
    for (const content of item.content || []) {
      if ((content.type === "output_text" || content.type === "text") && content.text) {
        chunks.push(content.text);
      }
    }
  }
  return chunks.join("\n").trim();
}

async function callOpenAI(instructions, input) {
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${openaiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      store: false,
      instructions,
      input,
    }),
  });
  if (!response.ok) {
    throw new Error(`OpenAI API ${response.status}: ${await response.text()}`);
  }
  const data = await response.json();
  const text = extractOutputText(data);
  if (!text) throw new Error("OpenAI không trả về nội dung văn bản");
  return text;
}

const issue = await githubApi(`/repos/${repo}/issues/${issueNumber}`);
const comments = await githubApi(`/repos/${repo}/issues/${issueNumber}/comments?per_page=100`);
const context = {
  issue: `# ${issue.title}\n\n${issue.body || "[Không có mô tả]"}`,
  agents: readLimited("AGENTS.md", 22000),
  discussion: readLimited("THAO-LUAN.md", 14000),
  process: readLimited("docs/quy-trinh-phoi-hop-github.md", 14000),
  recentComments: comments
    .slice(-12)
    .map((comment) => `### ${comment.user?.login || "unknown"}\n${comment.body}`)
    .join("\n\n"),
};

const commonInstructions = `
Bạn là ChatGPT/Codex, tác nhân thực hiện và báo cáo trong repo ${repo}.
Luôn viết bằng tiếng Việt. AGENTS.md là nguồn ưu tiên.
Không tự quyết thay anh Đức. Tách rõ dữ liệu thật, giả định và suy luận.
Không trình bày doanh thu gộp như lợi nhuận. Không bỏ qua chi phí và trần vận hành.
Đầu ra phải ngắn, rõ, có thể kiểm tra trên GitHub.
`;

if (mode === "draft") {
  const input = `
NHIỆM VỤ GỐC:\n${context.issue}

AGENTS.MD:\n${context.agents}

QUY TRÌNH GITHUB:\n${context.process}

THẢO LUẬN LIÊN QUAN:\n${context.discussion}

Hãy tạo bản thực hiện vòng 1. Bao gồm:
1. Hiểu yêu cầu và đầu ra.
2. Phương án thực hiện.
3. Nội dung hoặc thay đổi đề xuất.
4. Giả định và dữ liệu còn thiếu.
5. Việc cần Claude kiểm tra.
Không tạo báo cáo cuối ở bước này.
`;
  const result = await callOpenAI(commonInstructions, input);
  fs.writeFileSync(path.join(workDir, "gpt-draft.md"), result, "utf8");
  await postComment(`## GPT DRAFT — VÒNG 1\n\n${result}`);
  console.log("Đã đăng GPT DRAFT vòng 1");
}

if (mode === "revision") {
  const draft = readLimited(path.join(workDir, "gpt-draft.md"), 24000);
  const claudeReview = readLimited(path.join(workDir, "claude-review.json"), 16000);
  const input = `
NHIỆM VỤ GỐC:\n${context.issue}

BẢN GPT VÒNG 1:\n${draft}

PHẢN BIỆN CLAUDE:\n${claudeReview}

Hãy tạo bản sửa vòng 1:
- Xử lý từng lỗi bắt buộc của Claude.
- Giữ lại nhận xét đúng.
- Với nhận xét không áp dụng, giải thích ngắn gọn.
- Không tự quyết các mục Claude đánh dấu HUMAN_DECISION.
- Đưa ra bản nội dung hoàn chỉnh sau sửa.
- Cuối cùng thêm bảng đối chiếu nhận xét → cách xử lý.
`;
  const result = await callOpenAI(commonInstructions, input);
  fs.writeFileSync(path.join(workDir, "gpt-revision.md"), result, "utf8");
  await postComment(`## GPT REVISION — VÒNG 1\n\n${result}`);
  console.log("Đã đăng GPT REVISION vòng 1");
}

if (mode === "report") {
  const draft = readLimited(path.join(workDir, "gpt-draft.md"), 16000);
  const revision = readLimited(path.join(workDir, "gpt-revision.md"), 22000);
  const review = readLimited(path.join(workDir, "claude-review.json"), 12000);
  const verification = readLimited(path.join(workDir, "claude-verification.json"), 12000);
  const input = `
NHIỆM VỤ GỐC:\n${context.issue}

GPT DRAFT:\n${draft}

CLAUDE REVIEW:\n${review}

GPT REVISION:\n${revision}

CLAUDE VERIFY:\n${verification}

Hãy viết báo cáo cuối dành cho anh Đức, đọc trong khoảng 2 phút, theo đúng cấu trúc:
1. Đã hoàn thành.
2. Kết quả chính, tối đa 5 ý.
3. Claude đã kiểm tra gì và GPT đã xử lý thế nào.
4. Hai AI thống nhất ở đâu; ghi rõ đồng ý không phải bằng chứng tuyệt đối.
5. Điểm còn bất đồng và đánh đổi.
6. Việc cần anh quyết.
7. Rủi ro lớn nhất, đúng 1 rủi ro.
8. Trạng thái: SẴN SÀNG / CẦN ANH QUYẾT / CHƯA ĐẠT.
Không thêm lời chào dài.
`;
  const result = await callOpenAI(commonInstructions, input);
  await postComment(`# BÁO CÁO CUỐI CHO ANH ĐỨC\n\n${result}`);
  console.log("Đã đăng báo cáo cuối");
}
