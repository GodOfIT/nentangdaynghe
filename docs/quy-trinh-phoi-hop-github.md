# Quy trình phối hợp AI hoàn toàn trên GitHub

## 1. Quyết định vận hành

Toàn bộ quá trình giao việc, thực hiện, phản biện, sửa đổi, phê duyệt và báo cáo được thực hiện trên GitHub.

- Không dùng giao diện Claude làm nơi trao đổi hoặc bàn giao.
- Không dùng các cuộc chat riêng làm nguồn sự thật của dự án.
- Claude được gọi như một tác nhân trong GitHub Actions hoặc qua GitHub App.
- ChatGPT/Codex được gọi như một tác nhân trong GitHub Actions, Codex CLI hoặc tích hợp GitHub.
- Issue, Pull Request, commit, review và comment là lịch sử chính thức.
- Một tác nhân duy nhất tổng hợp và đăng báo cáo cuối cho anh Đức trên Issue.

GitHub là nơi làm việc; các mô hình AI chỉ là những người thực hiện trong quy trình đó.

## 2. Phân vai

### ChatGPT/Codex — tác nhân thực hiện và báo cáo

- Đọc Issue, `AGENTS.md` và các file liên quan.
- Lập phương án, tạo hoặc sửa file trên nhánh của nhiệm vụ.
- Mở Pull Request.
- Xử lý từng nhận xét bắt buộc của Claude.
- Đăng báo cáo cuối trên Issue sau khi vòng kiểm tra hoàn tất.
- Không tự quyết các vấn đề thuộc quyền anh Đức.

### Claude — tác nhân phản biện trong GitHub

- Chạy bằng Claude Code GitHub Action hoặc GitHub App.
- Đọc yêu cầu gốc, `AGENTS.md`, diff của PR và các bằng chứng liên quan.
- Kiểm tra giả định, số liệu, rủi ro, mâu thuẫn và tiêu chí nghiệm thu.
- Trả review ngay trên Pull Request.
- Không sử dụng giao diện Claude để bàn giao công việc.
- Không phải tác nhân báo cáo cuối cho anh Đức.

### Anh Đức — người quyết định

Anh chỉ cần làm việc trên GitHub để:

- Tạo hoặc duyệt Issue.
- Trả lời các câu hỏi nội bộ mà AI không thể tự biết.
- Chọn phương án khi hai AI bất đồng.
- Phê duyệt và merge các thay đổi quan trọng.
- Đọc bình luận `BÁO CÁO CUỐI` trên Issue.

## 3. Đơn vị công việc

Mỗi nhiệm vụ phải là một GitHub Issue độc lập.

Issue phải có:

- Mục tiêu.
- Đầu ra cần nhận.
- File hoặc khu vực được phép thay đổi.
- Tiêu chí nghiệm thu.
- Dữ liệu đã có.
- Các quyết định không được AI tự đưa ra.
- Mức độ cho phép tự động merge.

Mỗi Issue tạo một nhánh:

```text
ai/issue-<so-issue>-<ten-ngan>
```

Mỗi nhiệm vụ chỉ có một Pull Request chính. Toàn bộ phản biện và sửa đổi diễn ra trên PR đó.

## 4. Trạng thái chuẩn

| Trạng thái | Ý nghĩa |
|---|---|
| `ai:new` | Issue mới, chưa khóa bối cảnh |
| `ai:gpt-working` | ChatGPT/Codex đang thực hiện |
| `ai:claude-review` | Claude đang phản biện PR |
| `ai:gpt-revise` | ChatGPT/Codex đang sửa theo review |
| `ai:claude-verify` | Claude chỉ xác minh các lỗi bắt buộc đã được xử lý |
| `ai:human-decision` | Cần anh Đức quyết |
| `ai:ready-to-report` | Đã đủ điều kiện báo cáo |
| `ai:reported` | Đã đăng báo cáo cuối |
| `ai:closed` | Anh Đức đã đóng hoặc PR đã merge |

## 5. Luồng tự động

```text
Issue được tạo
→ GitHub Action khóa bối cảnh
→ ChatGPT/Codex tạo bản nháp và PR
→ Claude review PR
→ ChatGPT/Codex sửa
→ Claude xác minh
→ ChatGPT/Codex đăng BÁO CÁO CUỐI trên Issue
→ Anh Đức quyết định merge hoặc yêu cầu thêm
```

Giới hạn mặc định:

- Tối đa hai vòng Claude phản biện — ChatGPT/Codex sửa.
- Sau hai vòng vẫn bất đồng thì chuyển `ai:human-decision`.
- Không cho hai tác nhân sửa cùng một file đồng thời.
- Không tự động merge thay đổi về giá, KPI, ngân sách, pháp lý, chiến lược hoặc phần quyết định trong `AGENTS.md`.

## 6. Bối cảnh bắt buộc

Trước mỗi nhiệm vụ, workflow phải đọc tối thiểu:

1. `AGENTS.md`.
2. Nội dung Issue.
3. Các file được chỉ định trong Issue.
4. `THAO-LUAN.md` nếu nhiệm vụ có yếu tố chiến lược hoặc đang có bất đồng.
5. Commit SHA tại thời điểm bắt đầu.

Không truyền toàn bộ repo vào prompt nếu không cần. Chỉ lấy đúng file liên quan để giảm chi phí và tránh nhiễu.

## 7. Định dạng phản biện của Claude

Claude đăng review trên PR theo mẫu:

```markdown
## CLAUDE REVIEW — VÒNG <n>

**Trạng thái:** APPROVE / REVISE / HUMAN_DECISION
**Mức tin cậy:** cao / trung bình / thấp

### Lỗi bắt buộc sửa
1. ...

### Giả định cần kiểm chứng
1. ...

### Cải thiện tùy chọn
1. ...

### Điểm cần anh Đức quyết
1. ...
```

Claude không sửa hoặc xóa lập luận của ChatGPT/Codex. Review phải gắn vào đúng PR và đúng vòng.

## 8. Định dạng phản hồi của ChatGPT/Codex

Sau review, ChatGPT/Codex trả lời từng mục:

```markdown
## GPT REVISION — VÒNG <n>

| Nhận xét của Claude | Xử lý | Commit |
|---|---|---|
| ... | Đã sửa / Không áp dụng, kèm lý do | ... |
```

Không được đánh dấu “đã xử lý” nếu chưa có commit hoặc bằng chứng tương ứng.

## 9. Báo cáo duy nhất cho anh Đức

ChatGPT/Codex là tác nhân báo cáo mặc định. Báo cáo được đăng thành một comment trên Issue với tiêu đề:

```markdown
# BÁO CÁO CUỐI CHO ANH ĐỨC
```

Báo cáo phải đọc được trong khoảng hai phút và gồm:

1. **Đã hoàn thành:** file, commit và PR.
2. **Kết quả chính:** tối đa năm ý.
3. **Claude đã kiểm tra gì:** lỗi phát hiện và cách đã xử lý.
4. **Hai AI thống nhất:** ghi rõ nhưng không coi là bằng chứng tuyệt đối.
5. **Điểm còn bất đồng:** phương án và đánh đổi.
6. **Việc cần anh quyết:** chỉ những việc AI không có quyền hoặc dữ liệu để quyết.
7. **Rủi ro lớn nhất:** đúng một rủi ro.
8. **Trạng thái:** sẵn sàng merge / cần quyết / chưa đạt.

Sau khi đăng báo cáo, gắn nhãn `ai:reported`. Không gửi thêm một báo cáo riêng qua giao diện Claude.

## 10. Vai trò của `THAO-LUAN.md`

Không dùng `THAO-LUAN.md` để lưu mọi trao đổi kỹ thuật.

Chỉ cập nhật file này khi:

- Có bất đồng ảnh hưởng nhiều nhiệm vụ.
- Có quyết định chiến lược đang chờ anh Đức.
- Có giả định chung cần lưu lâu dài.
- Có dữ liệu mới làm thay đổi `AGENTS.md` hoặc kế hoạch.

Trao đổi của một nhiệm vụ cụ thể phải nằm trong Issue và PR tương ứng.

## 11. GitHub Actions và secrets

Các workflow dự kiến dùng:

- `OPENAI_API_KEY` cho ChatGPT/Codex chạy trong CI.
- `ANTHROPIC_API_KEY` cho Claude Code GitHub Action.
- `GITHUB_TOKEN` hoặc GitHub App token với quyền tối thiểu cần thiết.

Nguyên tắc:

- Không commit API key vào repo.
- Giới hạn quyền `contents`, `issues` và `pull-requests` theo từng job.
- Dùng `concurrency` theo số Issue để tránh hai workflow chạy đè nhau.
- Đặt timeout và giới hạn số vòng.
- Ghi model, thời gian chạy và chi phí ước tính vào log hoặc comment.

## 12. Mức tự động hóa

### Có thể tự động hoàn toàn

- Phân tích và tổng hợp tài liệu.
- Sửa chính tả, cấu trúc và liên kết.
- Cập nhật số liệu đã được anh Đức chốt.
- Tạo bản nháp tài liệu, checklist và báo cáo.
- Review tính nhất quán giữa các file.

### Bắt buộc anh Đức phê duyệt

- Giá bán và cơ chế chia sẻ.
- KPI và ngân sách.
- Phạm vi chiến lược.
- Nội dung pháp lý.
- Thay đổi phần quyết định điều hành trong `AGENTS.md`.
- Đóng một bất đồng giữa hai AI.
- Merge thay đổi có tác động kinh doanh lớn.

## 13. Cách khởi động thực tế

Giai đoạn đầu triển khai theo ba bước:

1. Tạo Issue Form chuẩn và bộ nhãn trạng thái.
2. Cài Claude Code GitHub Action và cấu hình Codex/OpenAI trong GitHub Actions bằng secrets.
3. Chạy thử với một nhiệm vụ tài liệu nhỏ trước khi cho phép workflow sửa nhiều file hoặc tự tạo PR lớn.

Mục tiêu cuối cùng là anh chỉ cần tạo một Issue và đọc một báo cáo cuối; toàn bộ quá trình giữa hai AI được lưu, kiểm tra và truy vết ngay trên GitHub.
