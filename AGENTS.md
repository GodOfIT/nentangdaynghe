# AGENTS.md — Bối cảnh chung cho các trợ lý AI làm việc trên repo này

> **Đọc file này trước tiên, trước mọi file khác trong repo.**
>
> Đây là nguồn sự thật điều hành. Khi mâu thuẫn với tài liệu khác, ưu tiên file này cho đến khi tài liệu kia được sửa.

Cập nhật lần cuối: 2026-08-05  
Người chủ trì: Bùi Minh Đức

---

## 1. Quyết định điều hành mới nhất

### 1.1. Chỉ kế thừa chương trình giảng dạy

Dự án **chỉ kế thừa các chương trình giảng dạy do anh Đức đã soạn**.

Các thành phần được phép kế thừa:

- đề cương và nội dung khóa học;
- cấu trúc buổi học;
- slide, video, bài đọc và học liệu;
- bài tập, rubric và ngân hàng câu hỏi;
- sản phẩm đầu ra và tiêu chí đánh giá;
- khung năng lực và phương pháp giảng dạy đã được chốt.

Không mặc định kế thừa:

- source code hoặc nền tảng phần mềm cũ;
- cơ sở dữ liệu, tài khoản và dữ liệu người dùng cũ;
- hạ tầng cloud, domain, thanh toán hoặc nhắn tin;
- workflow, SOP hoặc quy trình từ dự án khác;
- kho tri thức, RAG, MCP hoặc AI agent cũ;
- CRM, LMS, lịch, booking hoặc dashboard cũ;
- thương hiệu, giấy phép, hợp đồng hoặc quyền truy cập của đơn vị khác.

**SOPai, Arkon và henlich.vn không thuộc phạm vi kế thừa và không được đưa vào kiến trúc hoặc kế hoạch hiện hành.**

### 1.2. Grapuco là đối tác bên ngoài

Grapuco là **đối tác công nghệ độc lập**, không phải tài sản nội bộ và không phải dependency bắt buộc.

Vai trò dự kiến:

- công cụ bổ sung cho các khóa Vibe Coding và AI coding;
- trực quan hóa module, dependency, call graph và flow;
- hỗ trợ spec-first và phân tích tác động thay đổi;
- cung cấp context có cấu trúc cho AI coding tools;
- hỗ trợ đội kỹ thuật hiểu codebase mới.

Nguyên tắc bắt buộc:

- tích hợp qua API, MCP, tài khoản riêng hoặc cơ chế được hai bên thỏa thuận;
- có hợp đồng, phạm vi, giá, SLA và trách nhiệm hỗ trợ riêng;
- không mặc định chia sẻ dữ liệu cá nhân người học;
- chỉ gửi code hoặc dữ liệu dự án được cho phép;
- lớp học và nền tảng vẫn vận hành khi Grapuco chưa tích hợp hoặc gián đoạn;
- quyền sở hữu code, học liệu và dữ liệu phải được quy định rõ.

### 1.3. Chiến lược thị trường: program-first, đa kênh

Dự án không chia sản phẩm thành “khóa dành riêng cho trường” và “khóa dành riêng cho doanh nghiệp” một cách cứng nhắc.

Một chương trình có thể được triển khai cho:

- trường đại học, cao đẳng, trung cấp và trường phổ thông;
- doanh nghiệp và các phòng ban;
- trung tâm hoặc tổ chức đào tạo;
- lớp cộng đồng;
- nhóm người học hoặc người đi làm.

Điều chỉnh nằm ở:

- tình huống thực hành;
- sản phẩm đầu ra;
- dữ liệu và quy trình sử dụng;
- thời lượng;
- hình thức tổ chức;
- giá và phạm vi dịch vụ.

**Vibe Coding là một chương trình đào tạo thông thường**, tương tự các khóa AI khác. Nó không phải một dự án kỹ thuật cao cấp và không cần chờ Grapuco, Path Engine hoặc nền tảng hoàn chỉnh mới tổ chức.

Vibe Coding có thể triển khai cho:

- sinh viên và học sinh;
- giảng viên và giáo viên;
- người đi làm;
- doanh nghiệp muốn nhân sự tạo website, ứng dụng, workflow hoặc công cụ nội bộ;
- lớp cộng đồng.

### 1.4. Trạng thái triển khai

- Đã có các trường và cơ sở giáo dục sẵn sàng phối hợp.
- Không bắt đầu từ bước tìm trường đầu tiên.
- Doanh nghiệp cũng là khách hàng đào tạo ngay từ đầu khi có nhu cầu phù hợp.
- Không chờ nền tảng hoàn chỉnh mới khai giảng.
- Các khóa đầu có thể vận hành hoàn toàn ngoài nền tảng mới.
- Nền tảng được xây song song, sau đó tiếp nhận dần dữ liệu và quy trình từ các lớp đang chạy.

### 1.5. Đào tạo không phụ thuộc nền tảng

Trong các tuần đầu, lớp học có thể sử dụng:

- Google Forms hoặc biểu mẫu tương đương để đăng ký và nộp bài;
- Google Sheets hoặc bảng quản lý để theo dõi người học;
- Google Drive hoặc cloud storage để chứa học liệu;
- Zoom, Google Meet hoặc nền tảng họp trực tuyến;
- nhóm Zalo, email hoặc kênh nhắn tin;
- GitHub, IDE và công cụ AI cho Vibe Coding;
- LMS/SaaS tạm thời nếu cần.

Yêu cầu bắt buộc là dữ liệu tối thiểu phải được ghi nhận có cấu trúc để sau này nhập hoặc migrate vào nền tảng:

- người học;
- chương trình và cohort;
- điểm danh;
- bài tập và sản phẩm;
- rubric và kết quả;
- phản hồi;
- học phí hoặc trạng thái thanh toán khi có.

Không được biến tiến độ phát triển phần mềm thành lý do hoãn bán hàng hoặc hoãn khai giảng.

### 1.6. Quy tắc định giá

Giá và phạm vi sản phẩm phải được chốt **trước khi mở bán, gửi proposal hoặc ký hợp đồng**.

Với mỗi khóa cần có tối thiểu:

- đối tượng;
- số buổi và thời lượng;
- hình thức đào tạo;
- số người học hoặc quy mô lớp;
- nội dung và đầu ra;
- phần tùy chỉnh;
- trách nhiệm của hai bên;
- mức giá;
- lịch thanh toán;
- chi phí ngoài phạm vi.

Tuần 4 chỉ dùng để:

- đối chiếu giá với chi phí thật;
- đánh giá hiệu quả;
- điều chỉnh giá cho đợt sau;
- tạo gói hoặc phiên bản mới.

**Không để tới tuần 4 mới định giá khóa 4 buổi hoặc bất kỳ khóa nào đã bán trong tháng.**

### 1.7. KPI tháng đầu

Ưu tiên:

- kích hoạt 2–3 trường/cơ sở đã sẵn sàng;
- triển khai các lớp cộng đồng hoặc lớp doanh nghiệp phù hợp khi có khách;
- bắt đầu đào tạo từ tuần thứ hai hoặc sớm hơn nếu lịch đã chốt;
- 200–300 sinh viên thanh toán và bắt đầu học;
- tối thiểu 2 lớp/hợp đồng đào tạo đã chốt, không giới hạn chỉ ở trường;
- tối thiểu 1 khóa ngắn hạn 4 buổi được mở hoặc bán;
- ít nhất 1 chương trình sinh viên được triển khai, bán hoặc cấp quyền;
- có dữ liệu vận hành đủ để xây nền tảng theo nhu cầu thật.

`ke-hoach/muc-tieu-thang-1.md` là nguồn ưu tiên cho KPI chi tiết.

---

## 2. Bối cảnh sản phẩm

### 2.1. Các chương trình cốt lõi

1. **Ứng dụng AI theo khung năng lực** — khoảng 12–15 buổi.
2. **Phát triển ứng dụng và tự động hóa với AI – Vibe Coding** — khoảng 12–15 buổi.
3. AI cho giáo viên phổ thông — bản 4 buổi và bản 12 buổi.
4. AI cho giảng viên đại học, cao đẳng và giáo dục nghề nghiệp.
5. AI cho doanh nghiệp và các phòng ban.
6. AI+ / AIx trong chương trình đào tạo.
7. STEAM và các môn mới theo đơn đặt hàng.

### 2.2. Nguyên tắc sản phẩm

Mỗi chương trình có thể được bán dưới nhiều hình thức:

- lớp cộng đồng;
- lớp cho một trường hoặc nhiều trường;
- lớp cho doanh nghiệp;
- đào tạo nội bộ;
- lớp online hoặc trực tiếp;
- cấp quyền nội dung;
- đào tạo giảng viên nguồn;
- nền tảng và báo cáo đi kèm;
- triển khai tùy chỉnh.

Không nâng một chương trình thành “sản phẩm cao cấp” chỉ vì nó có nội dung kỹ thuật. Mức độ phức tạp thương mại phụ thuộc phạm vi triển khai, không phụ thuộc tên khóa học.

### 2.3. Nền tảng mới

Nền tảng được xây greenfield nhưng không phải điều kiện để đào tạo.

Phạm vi lõi dài hạn:

- quản lý đơn vị, chương trình, cohort và người học;
- học liệu, nhiệm vụ, bài tập và nộp sản phẩm;
- rubric, chấm điểm và hồ sơ minh chứng;
- điểm danh, tiến độ và báo cáo;
- phân quyền;
- tích hợp dịch vụ ngoài;
- nhật ký hoạt động và kiểm soát truy cập;
- lộ trình học và dữ liệu năng lực khi đủ dữ liệu.

### 2.4. Nguyên tắc kiến trúc

- **Greenfield:** xây mới, không phụ thuộc codebase cũ.
- **Modular:** phân hệ có thể phát triển và thay thế độc lập.
- **API-first:** sẵn sàng kết nối đối tác.
- **Data ownership:** dữ liệu cốt lõi do dự án và khách hàng kiểm soát theo thỏa thuận.
- **Human-in-the-loop:** AI hỗ trợ, con người chịu trách nhiệm cuối cùng.
- **Vendor independence:** không để đối tác ngoài trở thành điểm lỗi duy nhất.
- **Platform-optional at launch:** lớp học có thể bắt đầu trước phần mềm.

---

## 3. Nguyên tắc phối hợp kinh doanh và kỹ thuật

1. Kinh doanh bán chương trình và đầu ra, không bán danh sách tính năng phần mềm.
2. Kỹ thuật ưu tiên các vấn đề xuất hiện trong lớp thật.
3. Không yêu cầu một lớp thông thường phải có Path Engine, portfolio nâng cao hoặc tích hợp Grapuco.
4. Dữ liệu từ vận hành thủ công phải được chuẩn hóa để migrate sau.
5. Một tính năng chỉ được ưu tiên khi giúp:
   - tăng khả năng bán;
   - giảm tải vận hành;
   - nâng chất lượng;
   - tăng khả năng mở rộng;
   - tạo doanh thu lặp lại.
6. Không trì hoãn đào tạo vì thiếu dashboard, thanh toán tự động, AI tutor hoặc mobile app.

---

## 4. Điều các trợ lý AI phải tránh

- Coi Vibe Coding là dự án cao cấp hoặc khó triển khai hơn các khóa học khác.
- Chỉ mô tả khách hàng là trường học và bỏ qua doanh nghiệp, cộng đồng hoặc người đi làm.
- Đặt nền tảng làm điều kiện bắt buộc để khai giảng.
- Để tới tuần 4 mới định giá một sản phẩm đã bán.
- Gắn Vibe Coding bắt buộc với Grapuco.
- Gắn doanh thu với tính năng phần mềm chưa có.
- Tự tạo giá, chi phí hoặc tỷ lệ chia sẻ khi anh Đức chưa chốt.
- Nhầm giá trị hợp đồng, tiền đã thu, doanh thu và lợi nhuận.

---

## 5. Quy ước tài liệu

- Mọi số chưa kiểm chứng ghi `[giả định]`.
- Dữ liệu thật ghi nguồn và ngày.
- Tài liệu lịch sử được giữ để truy vết nhưng không thắng `AGENTS.md`.
- Khi bất đồng, ghi rõ phương án, đánh đổi và dữ liệu cần thêm.
- Chỉ anh Đức quyết định các vấn đề kinh doanh chưa chốt.