# Cấu hình quy trình AI Collaboration trên GitHub

## Trạng thái hiện tại

Repo đã có bản MVP gồm:

- Issue Form: `.github/ISSUE_TEMPLATE/ai-task.yml`
- Workflow: `.github/workflows/ai-collaboration.yml`
- Script OpenAI: `.github/scripts/openai-collab.mjs`
- Quy trình vận hành: `docs/quy-trinh-phoi-hop-github.md`

Luồng hiện tại:

```text
ChatGPT tạo bản đầu
→ Claude phản biện
→ ChatGPT sửa
→ Claude xác minh
→ ChatGPT đăng báo cáo cuối vào Issue
```

Bản MVP làm việc hoàn toàn qua Issue comment và GitHub Actions. Nó chưa tự động sửa file nghiệp vụ hoặc tạo Pull Request cho từng nhiệm vụ.

## 1. Thêm GitHub Actions secrets

Mở repo rồi vào:

```text
Settings
→ Secrets and variables
→ Actions
→ New repository secret
```

Tạo hai secret:

### `OPENAI_API_KEY`

API key dùng để gọi OpenAI Responses API.

### `ANTHROPIC_API_KEY`

API key dùng cho `anthropics/claude-code-action@v1`.

Không đưa API key vào Issue, comment, workflow YAML hoặc file trong repo.

## 2. Cấu hình model OpenAI

Vào:

```text
Settings
→ Secrets and variables
→ Actions
→ Variables
→ New repository variable
```

Tạo biến tùy chọn:

```text
OPENAI_MODEL
```

Nếu không tạo, workflow mặc định dùng `gpt-5`.

## 3. Kiểm tra quyền GitHub Actions

Vào:

```text
Settings
→ Actions
→ General
```

Bảo đảm:

- GitHub Actions được bật cho repo.
- Workflow được phép dùng action từ GitHub Marketplace.
- `GITHUB_TOKEN` được phép ghi Issue comment.
- Chính sách của tổ chức không chặn `anthropics/claude-code-action@v1`.

Workflow đã khai báo quyền tối thiểu:

- `contents: read`
- `issues: write`
- `pull-requests: write`
- `id-token: write`

## 4. Cấu hình Claude Code Action

Workflow sử dụng:

```yaml
uses: anthropics/claude-code-action@v1
```

và truyền:

```yaml
anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
github_token: ${{ secrets.GITHUB_TOKEN }}
```

Với workflow automation hiện tại, Claude được gọi trực tiếp bằng prompt trong GitHub Actions; không cần mở giao diện Claude để bàn giao.

Nếu action báo lỗi xác thực GitHub hoặc quyền truy cập, cài Claude GitHub App chính thức cho repo, sau đó chạy lại workflow.

## 5. Tạo nhiệm vụ đầu tiên

1. Mở tab **Issues**.
2. Chọn **New issue**.
3. Chọn mẫu **Nhiệm vụ cộng tác AI**.
4. Điền mục tiêu, đầu ra, file liên quan và tiêu chí nghiệm thu.
5. Tạo Issue và ghi lại số Issue, ví dụ `#12`.

Không đưa API key, mật khẩu hoặc dữ liệu bí mật vào Issue vì repo đang public.

## 6. Chạy workflow

1. Mở tab **Actions**.
2. Chọn workflow **AI Collaboration**.
3. Chọn **Run workflow**.
4. Nhập số Issue, chỉ nhập số, ví dụ `12`.
5. Chọn **Run workflow**.

Workflow sẽ đăng lần lượt vào Issue:

- `GPT DRAFT — VÒNG 1`
- `GPT REVISION — VÒNG 1`
- `BÁO CÁO CUỐI CHO ANH ĐỨC`

Phản biện của Claude được truyền bằng structured output giữa các bước và được ChatGPT tổng hợp vào báo cáo cuối.

## 7. Cách kiểm tra lỗi

Nếu workflow thất bại:

1. Mở tab **Actions**.
2. Mở workflow run bị lỗi.
3. Mở step màu đỏ.
4. Kiểm tra các lỗi thường gặp:
   - Thiếu `OPENAI_API_KEY`.
   - Thiếu `ANTHROPIC_API_KEY`.
   - API key chưa có billing hoặc hết hạn mức.
   - GitHub Actions bị chặn bởi policy.
   - Claude action không có quyền đọc repo hoặc ghi comment.
   - Model trong `OPENAI_MODEL` không tồn tại hoặc tài khoản không có quyền dùng.

Không chụp hoặc đăng log có chứa secret lên Issue public.

## 8. Chi phí và giới hạn

Mỗi lần chạy hiện gọi:

- OpenAI ba lần: draft, revision, report.
- Claude hai lần: review và verify.

Workflow có:

- Timeout 45 phút.
- Claude vòng đầu tối đa 4 lượt.
- Claude vòng xác minh tối đa 3 lượt.
- `store: false` khi gọi OpenAI Responses API.
- Concurrency theo số Issue để tránh chạy đè cùng nhiệm vụ.

Nên thử bằng một Issue nhỏ trước khi dùng cho tài liệu dài.

## 9. Giới hạn của bản MVP

Bản hiện tại:

- Làm việc và báo cáo hoàn toàn trên GitHub.
- Lưu lịch sử trong Issue và Actions.
- Có hai vòng kiểm tra giữa hai AI.
- Chưa tự động tạo nhánh, sửa file và mở Pull Request.
- Chưa tự động gắn nhãn theo trạng thái.
- Chưa dừng sớm khi Claude trả `HUMAN_DECISION`.

Giai đoạn tiếp theo có thể bổ sung:

1. ChatGPT/Codex tạo nhánh theo Issue.
2. AI sửa file trên nhánh và mở PR.
3. Claude review trực tiếp diff của PR.
4. Workflow dừng khi cần anh quyết.
5. Sau khi Claude duyệt, ChatGPT đăng báo cáo cuối và chờ anh merge.
