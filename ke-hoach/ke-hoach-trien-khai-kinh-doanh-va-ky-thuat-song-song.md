# Kế hoạch triển khai kinh doanh song song với kỹ thuật

> **Phiên bản điều hành:** 2026-08-05  
> **Phạm vi:** 12 tháng đầu; trọng tâm 90 ngày đầu và 6 tuần triển khai đầu tiên.  
> **Nguyên tắc nguồn:** đọc cùng `AGENTS.md`, `ke-hoach/muc-tieu-thang-1.md`, các chương trình giảng dạy đã soạn và tài liệu nghiên cứu TUMO.  
> **Ràng buộc:** chỉ kế thừa chương trình giảng dạy; nền tảng, dữ liệu và hạ tầng được xây mới; đào tạo có thể diễn ra hoàn toàn ngoài nền tảng trong giai đoạn đầu; Grapuco là đối tác ngoài tùy chọn.

---

## 1. Tóm tắt điều hành

Dự án được triển khai theo hai đường chạy song song:

1. **Kinh doanh – đào tạo:** bán, tổ chức và giao các chương trình cho trường, doanh nghiệp, trung tâm đào tạo, lớp cộng đồng và người đi làm.
2. **Sản phẩm – kỹ thuật:** xây nền tảng Learning Operating System từ dữ liệu, quy trình và vấn đề phát sinh trong các lớp thật.

Hai đường phối hợp nhưng không được chặn nhau:

- không chờ nền tảng mới mở bán hoặc khai giảng;
- không ép lớp đang chạy chuyển sang phần mềm chưa ổn định;
- các lớp đầu có thể dùng Forms, Sheets, Drive, Meet, Zalo, GitHub hoặc LMS có sẵn;
- mọi dữ liệu vận hành tạm thời phải được ghi theo mẫu chuẩn để nhập lên nền tảng sau;
- kỹ thuật chỉ ưu tiên chức năng giúp bán tốt hơn, giao tốt hơn, giảm tải, tăng công suất hoặc tạo doanh thu lặp lại;
- không xây Path Engine, AI co-learner hay tích hợp Grapuco chỉ vì mô hình TUMO có các thành phần tương tự;
- Vibe Coding là một chương trình đào tạo bình thường, có thể bán cho mọi phân khúc phù hợp.

### Mục tiêu 12 tháng

Đến cuối năm đầu, dự án cần chứng minh được mô hình:

> **Chương trình đào tạo chuẩn hóa + nhiều kênh bán hàng + vận hành lớp linh hoạt + nền tảng quản lý đa đơn vị + dữ liệu sản phẩm và năng lực + doanh thu lặp lại từ cấp quyền, nền tảng và hỗ trợ.**

Không đặt mục tiêu xây toàn bộ một “TUMO phiên bản Việt Nam” trong năm đầu. Chỉ xây các năng lực đã có nhu cầu sử dụng và khả năng tạo giá trị rõ ràng.

---

## 2. Điểm xuất phát và giả định điều hành

### 2.1. Những gì đã có

- Các trường/cơ sở giáo dục đã sẵn sàng phối hợp triển khai.
- Các chương trình giảng dạy cốt lõi đã được anh Đức soạn.
- Có thể bắt đầu đào tạo trước khi nền tảng mới hoàn thiện.
- Có khả năng triển khai cho trường, doanh nghiệp, cộng đồng và người đi làm.
- Grapuco có thể hợp tác như đối tác công nghệ ngoài cho Vibe Coding và AI coding.

### 2.2. Những gì chưa được coi là đã có

- Nền tảng phần mềm hoàn chỉnh.
- Database, tài khoản, workflow hoặc hệ thống thanh toán cũ.
- Khả năng tự động hóa lớp học ở quy mô lớn.
- Bảng giá chính thức cho mọi cấu hình sản phẩm.
- Dữ liệu unit economics thực tế.
- Trần công suất giảng viên, coach và đội hỗ trợ.

### 2.3. Những quyết định phải chốt trước ngày mở bán

Mỗi chương trình được bán phải có:

- đối tượng;
- thời lượng và số buổi;
- hình thức online/trực tiếp/hybrid;
- quy mô lớp;
- nội dung;
- sản phẩm đầu ra;
- rubric và tiêu chí hoàn thành;
- mức tùy chỉnh;
- trách nhiệm hai bên;
- mức giá;
- lịch thanh toán;
- chính sách hỗ trợ;
- chi phí ngoài phạm vi.

Không để tới tuần 4 mới định giá một khóa đã mở bán.

---

## 3. Mô hình kinh doanh

## 3.1. Một chương trình, nhiều thị trường

Dự án không tạo một khóa hoàn toàn mới cho mỗi phân khúc. Một chương trình lõi có thể được điều chỉnh để triển khai cho:

- trường đại học, cao đẳng, trung cấp và phổ thông;
- doanh nghiệp và phòng ban;
- trung tâm đào tạo;
- lớp cộng đồng;
- người đi làm;
- đối tác muốn cấp quyền hoặc đồng tổ chức.

Phần được điều chỉnh gồm:

- ví dụ và tình huống;
- dữ liệu thực hành;
- sản phẩm đầu ra;
- số buổi;
- mức hỗ trợ;
- hình thức tổ chức;
- quy mô lớp;
- báo cáo và tài liệu bàn giao.

## 3.2. Danh mục chương trình ưu tiên

### A. Ứng dụng AI theo khung năng lực

- Bản cốt lõi: khoảng 12–15 buổi.
- Đối tượng: sinh viên, giáo viên, người đi làm, doanh nghiệp.
- Đầu ra: workflow, bộ bài tập, sản phẩm ứng dụng và hồ sơ minh chứng.
- Phiên bản tùy chỉnh theo ngành, vai trò hoặc phòng ban.

### B. Vibe Coding

- Bản cốt lõi: khoảng 12–15 buổi; có thể có bản ngắn hơn.
- Đối tượng: sinh viên, giáo viên, người đi làm và doanh nghiệp.
- Đầu ra: website, ứng dụng, workflow, công cụ nội bộ hoặc AI agent.
- Công cụ tối thiểu: AI coding tool, GitHub hoặc nơi lưu source, môi trường chạy và rubric.
- Không cần nền tảng riêng, Path Engine hay Grapuco mới mở lớp.
- Grapuco là add-on tùy chọn để hỗ trợ hiểu codebase, dependency, call graph và flow.

### C. AI cho giáo viên và giảng viên

- Khóa 4 buổi.
- Khóa 12 buổi.
- AI-Powered Teaching.
- Faculty AI Builder.
- AI+ Curriculum Sprint.
- Đào tạo giảng viên/coach nguồn.

### D. AI cho doanh nghiệp

Có thể tái sử dụng chương trình lõi và đóng gói thành:

- AI Foundation;
- AI Productivity;
- AI cho từng phòng ban;
- AI Workflow;
- Vibe Coding for Internal Tools;
- AI Agent Builder;
- chương trình theo nghiệp vụ.

Khóa tiêu chuẩn có thể bán trực tiếp. Chỉ dự án tư vấn hoặc triển khai hệ thống riêng mới cần discovery, pilot và nghiệm thu kỹ thuật riêng.

### E. Cấp quyền và gói tổ chức

- Nội dung.
- Nội dung + đào tạo giảng viên nguồn.
- Nội dung + nền tảng.
- Triển khai đầy đủ.
- White-label hoặc tùy chỉnh theo hợp đồng.

## 3.3. Các kênh doanh thu

### Doanh thu giao dịch

- Học phí lớp cộng đồng.
- Hợp đồng đào tạo cho trường.
- Hợp đồng đào tạo cho doanh nghiệp.
- Workshop và khóa ngắn hạn.
- Phí tùy chỉnh chương trình.
- Phí chuyên gia hoặc lab nâng cao.

### Doanh thu lặp lại

- Phí cấp quyền chương trình theo thời hạn.
- Phí nền tảng theo đơn vị hoặc quy mô sử dụng.
- Phí theo active learner hoặc capacity band.
- Phí báo cáo và hỗ trợ vận hành.
- Phí cập nhật học liệu.
- Phí gia hạn.

### Doanh thu bổ sung

- Add-on Grapuco.
- White-label.
- Tích hợp riêng.
- AI co-learner khi có sản phẩm đủ ổn định.
- Phát triển chương trình theo đặt hàng.

## 3.4. Kênh bán hàng

### Trường và tổ chức giáo dục

- Quan hệ sẵn có.
- Khoa/phòng/ban.
- Trung tâm đào tạo.
- Hội và hiệp hội chuyên môn.
- Đối tác có tệp người học.
- Đào tạo giảng viên nguồn.
- Cấp quyền chương trình.

### Doanh nghiệp

- Quan hệ sẵn có.
- Giới thiệu từ đối tác và học viên.
- Workshop trực tiếp.
- Khóa tiêu chuẩn cho đội nhóm.
- Chương trình theo phòng ban.
- Vibe Coding tạo công cụ nội bộ.

### Cộng đồng và cá nhân

- Thương hiệu cá nhân.
- Nội dung chuyên môn.
- Webinar.
- Nhóm Zalo/Facebook.
- Lớp thử.
- Giới thiệu từ học viên.

### Đối tác đào tạo

- Đồng tổ chức.
- Chia sẻ doanh thu.
- Cấp quyền.
- Đào tạo giảng viên nguồn.
- Dùng nền tảng và báo cáo.

## 3.5. Cấu trúc bảng giá

Mỗi chương trình cần có Price Book V1 trước ngày mở bán, tối thiểu gồm:

| Cấu hình | Cách tính |
|---|---|
| Lớp cộng đồng | giá/người hoặc giá/cohort |
| Trường mua lớp | giá/cohort theo quy mô và mức tùy chỉnh |
| Doanh nghiệp mua lớp | giá/cohort theo quy mô, dữ liệu và đầu ra |
| Cấp quyền nội dung | phí thời hạn + giới hạn người học/phạm vi |
| Nội dung + nền tảng | phí quyền + phí nền tảng + hỗ trợ |
| Đào tạo nguồn | phí chương trình + phí đánh giá + hỗ trợ |
| Add-on | Grapuco, chuyên gia, white-label, tích hợp riêng |

Bảng giá được rà soát sau mỗi đợt dựa trên chi phí thật, nhưng không thay đổi tùy tiện với các hợp đồng đã ký.

---

## 4. Mô hình vận hành đào tạo

## 4.1. Ba tầng nhân sự

1. **Điều phối viên/coach:** quản lý danh sách, nhắc tiến độ, hỗ trợ phổ thông và xử lý tình huống.
2. **Giảng viên/workshop leader:** giảng dạy, hướng dẫn thực hành và đánh giá sản phẩm.
3. **Chuyên gia/lab leader:** tham gia nội dung nâng cao hoặc dự án đặc thù.

Không sử dụng chuyên gia đắt tiền cho mọi hoạt động hỗ trợ hằng ngày.

## 4.2. Bộ công cụ vận hành trước nền tảng

Các lớp đầu có thể dùng:

- Google Forms hoặc công cụ biểu mẫu;
- Google Sheets;
- Google Drive hoặc object storage;
- Zoom, Google Meet hoặc nền tảng họp;
- Zalo, email hoặc kênh nhắn tin;
- GitHub, IDE và AI coding tool;
- Notion, Trello hoặc LMS/SaaS sẵn có.

## 4.3. Dữ liệu tối thiểu bắt buộc

Mỗi lớp phải có dữ liệu chuẩn:

- mã khách hàng/đơn vị;
- mã chương trình;
- mã cohort;
- mã người học;
- thông tin liên hệ tối thiểu;
- trạng thái đăng ký;
- trạng thái thanh toán;
- điểm danh;
- bài tập;
- sản phẩm;
- rubric;
- kết quả;
- phản hồi;
- sự cố và cách xử lý.

## 4.4. Playbook mở lớp

Mỗi lớp phải hoàn thành checklist:

### Trước khai giảng

- hợp đồng/đăng ký;
- tiền ứng trước hoặc phương án thu;
- danh sách người học;
- lịch;
- giảng viên;
- điều phối viên;
- học liệu;
- bài tập;
- rubric;
- công cụ vận hành;
- kênh hỗ trợ;
- kế hoạch báo cáo.

### Trong khóa

- điểm danh;
- nhắc tiến độ;
- xử lý hỗ trợ;
- thu sản phẩm;
- đánh giá;
- ghi nhận dữ liệu chi phí và thời gian.

### Sau khóa

- kết quả;
- báo cáo;
- đối soát;
- phản hồi;
- case study;
- đề xuất mua tiếp;
- cập nhật chương trình và bảng giá.

---

## 5. Kế hoạch kỹ thuật

## 5.1. Mục tiêu kỹ thuật năm đầu

Xây một nền tảng modular, đa đơn vị, có thể:

- quản lý khách hàng, trường, doanh nghiệp và đối tác;
- quản lý chương trình, phiên bản và quyền sử dụng;
- quản lý cohort và người học;
- phân phối học liệu;
- giao và thu bài;
- chấm theo rubric;
- quản lý điểm danh và tiến độ;
- lưu sản phẩm và hồ sơ minh chứng;
- xuất báo cáo;
- hỗ trợ cấp quyền và tính phí;
- tích hợp dịch vụ ngoài;
- phát triển Path Engine khi đủ dữ liệu.

## 5.2. Kiến trúc đề xuất

Chọn **modular monolith** trong 12 tháng đầu.

Các module:

1. Identity & Access.
2. Organization & Customer.
3. Program & Curriculum.
4. Program Version & Licensing.
5. Cohort & Session.
6. Learner & Enrollment.
7. Content & Activity.
8. Assignment & Submission.
9. Assessment & Rubric.
10. Attendance & Progress.
11. Portfolio & Evidence.
12. Reporting & Analytics.
13. Commercial & Billing.
14. Integration Gateway.
15. Path Engine khi đủ dữ liệu.

## 5.3. Stack tham chiếu

- Frontend: React/Next.js hoặc TypeScript framework tương đương.
- Backend: TypeScript/NestJS modular monolith.
- Database: PostgreSQL.
- Object storage: S3-compatible.
- Queue: Redis/BullMQ hoặc managed queue khi cần.
- AI worker: Python cho tác vụ AI riêng.
- Deployment: Docker trên managed container platform.
- Observability: log, metric, error tracking và audit trail.
- Responsive web trước; mobile app native để sau.

## 5.4. Thứ tự phát triển

1. Data schema và import.
2. Organization, program, cohort và learner.
3. Content, assignment và submission.
4. Rubric, result và report.
5. Role, permission, audit và backup.
6. Program template và content versioning.
7. Licensing/entitlement.
8. Portfolio và evidence.
9. Commercial/billing nếu cần.
10. Integration Gateway.
11. Path Engine.
12. AI co-learner và các tính năng nâng cao.

Grapuco không đứng trước các chức năng vận hành lớp cơ bản.

## 5.5. Nguyên tắc chuyển lớp lên nền tảng

Một cohort chỉ chuyển lên nền tảng khi:

- đăng nhập ổn định;
- phân quyền đúng;
- import danh sách chính xác;
- học liệu truy cập được;
- nộp bài không mất dữ liệu;
- có backup;
- có người hỗ trợ;
- có phương án quay về công cụ tạm thời;
- giảng viên và điều phối viên đã được hướng dẫn.

Cohort đang chạy không bắt buộc chuyển giữa chừng.

---

## 6. Hai track triển khai song song

| Mốc kinh doanh/đào tạo | Vận hành ngay | Năng lực kỹ thuật xây song song |
|---|---|---|
| Mở lớp | Forms, Sheets, Drive, Meet | organization, program, cohort, learner |
| Quản lý điểm danh | Sheet chuẩn | attendance, progress |
| Giao và thu bài | Drive/GitHub | assignment, submission |
| Chấm và phản hồi | rubric file/Sheet | assessment, rubric, feedback |
| Báo cáo khách hàng | Sheet/slide/PDF | dashboard, export |
| Bán nhiều lớp | template thủ công | program template, bulk import |
| Cấp quyền | hợp đồng + quyền file | versioning, entitlement, usage report |
| Vibe Coding | GitHub + AI coding tool | project evidence, portfolio |
| Grapuco | tài khoản/link ngoài | adapter API/MCP khi cần |
| Đào tạo doanh nghiệp | lớp tiêu chuẩn | chỉ xây module riêng khi có nhu cầu thật |
| Cá nhân hóa | giảng viên/coach điều chỉnh | curriculum graph và Path Engine sau |

---

## 7. Kế hoạch 6 tuần đầu

## Tuần 1 — Chốt thương mại và chuẩn bị vận hành

### Kinh doanh

- Chốt danh sách trường, doanh nghiệp, trung tâm và lớp cộng đồng có thể triển khai ngay.
- Chốt chương trình phù hợp cho từng khách hàng.
- Hoàn thành Price Book V1.
- Hoàn thiện proposal, hợp đồng mẫu, chính sách thanh toán và tài liệu bán hàng.
- Chốt lịch, giảng viên, điều phối viên và đầu mối khách hàng.

### Đào tạo

- Hoàn thiện học liệu cần dùng ngay.
- Chốt bài tập, sản phẩm và rubric.
- Tạo Forms, Sheets, Drive/GitHub và kênh hỗ trợ.
- Chốt playbook mở lớp.

### Kỹ thuật

- Chốt domain model và data dictionary.
- Tạo repo, CI/CD, database và môi trường.
- Chuẩn hóa file import.
- Bắt đầu organization, customer, program và cohort.

### Đầu ra tuần 1

- Bảng giá có hiệu lực.
- Danh sách lớp có lịch.
- Bộ công cụ vận hành tạm thời.
- Schema dữ liệu và repo kỹ thuật.

## Tuần 2 — Khai giảng không phụ thuộc nền tảng

### Kinh doanh và đào tạo

- Khai giảng các lớp đã chốt.
- Có thể chạy đồng thời lớp trường, doanh nghiệp và cộng đồng.
- Vibe Coding được triển khai như các khóa khác.
- Thu tiền và ghi nhận công nợ theo thỏa thuận.
- Theo dõi chi phí và thời gian thực tế.

### Kỹ thuật

- Xây learner, enrollment, content, assignment và submission.
- Thử import dữ liệu mẫu.
- Alpha chỉ dùng nội bộ; không ép học viên sử dụng.

### Đầu ra tuần 2

- Lớp thật đã chạy.
- Dữ liệu cohort được ghi đúng mẫu.
- Có bản alpha nội bộ cho dữ liệu lõi.

## Tuần 3 — Mở thêm lớp và hoàn thiện dữ liệu

### Kinh doanh và đào tạo

- Mở các lớp/cohort tiếp theo.
- Tiếp tục bán theo bảng giá đã chốt.
- Thu bài, sản phẩm và phản hồi.
- Chuẩn bị báo cáo cho khách hàng.

### Kỹ thuật

- Hoàn thiện rubric, result, attendance và export.
- Kiểm thử import và phân quyền.
- Ghi nhận lỗi vận hành để sắp backlog.

### Đầu ra tuần 3

- Có dữ liệu sản phẩm và đánh giá đầu tiên.
- Có mẫu báo cáo khách hàng.
- Có alpha quản lý lớp ở mức nội bộ.

## Tuần 4 — Đối soát, đánh giá và điều chỉnh

### Kinh doanh

- Tổng hợp hợp đồng, tiền đã thu, công nợ và chi phí trực tiếp.
- Đánh giá hiệu quả từng chương trình và kênh bán.
- Điều chỉnh giá cho đợt sau nếu cần.
- Chốt lịch và pipeline tháng tiếp theo.

### Đào tạo

- Hoàn thiện phản hồi và case study bước đầu.
- Không đổi công cụ giữa khóa nếu không thật sự cần.
- Cập nhật playbook và học liệu.

### Kỹ thuật

- Chọn cohort mới phù hợp để thử nền tảng.
- Hoàn thiện import/migrate, backup và audit.
- Sắp backlog tháng hai theo vấn đề thật.

### Đầu ra tuần 4

- Báo cáo kinh doanh và unit economics sơ bộ.
- Price Book V1.1 cho đợt sau.
- Quyết định rõ cohort nào dùng nền tảng.

## Tuần 5 — Thử nghiệm nền tảng với cohort mới

### Kinh doanh và đào tạo

- Khởi động đợt lớp mới.
- Tiếp tục mở lớp ngoài nền tảng khi phù hợp.
- Chuẩn hóa tài liệu bán hàng và playbook onboarding.

### Kỹ thuật

- Đưa một cohort mới hoặc nhóm nội bộ lên nền tảng.
- Hoàn thiện report/export.
- Theo dõi lỗi, ticket và hành vi sử dụng.

### Đầu ra tuần 5

- Cohort thử nghiệm có rollback.
- Báo cáo lỗi và usability.
- Không ảnh hưởng lớp đang chạy ổn định.

## Tuần 6 — Chuẩn hóa lần lặp thứ hai

### Kinh doanh và đào tạo

- Tái bán các chương trình có kết quả tốt.
- Chuẩn hóa gói cho trường, doanh nghiệp và cộng đồng.
- Chuẩn bị gói cấp quyền đầu tiên.

### Kỹ thuật

- Hoàn thiện program template, bulk import và customer dashboard cơ bản.
- Xây portfolio V1 nếu cần cho chương trình có sản phẩm.
- Hardening phân quyền, logging và backup.

### Đầu ra tuần 6

- Playbook có thể lặp lại.
- Gói sản phẩm đã chuẩn hóa.
- Nền tảng đủ dùng cho một số cohort mới.

---

## 8. Kế hoạch 90 ngày

## Giai đoạn 1 — Ngày 1–30: bán và giao đào tạo

### Kinh doanh

- Kích hoạt các đơn vị đã sẵn sàng.
- Bán cho cả trường, doanh nghiệp, trung tâm và cộng đồng.
- Chốt giá trước bán.
- Giao các chương trình cốt lõi.
- Có dữ liệu doanh thu, công nợ và chi phí trực tiếp.

### Kỹ thuật

- Domain model.
- Data dictionary và import schema.
- CI/CD, database, storage và backup.
- Module organization, program, cohort và learner ở mức alpha.
- Không bắt buộc người học dùng nền tảng.

### Gate 30 ngày

Chuyển sang giai đoạn 2 khi:

- có lớp thật và dữ liệu vận hành;
- có ít nhất một chương trình được giao ổn định;
- dữ liệu có thể import;
- không có lỗi nghiêm trọng về auth, phân quyền hoặc mất dữ liệu;
- có người chịu trách nhiệm hỗ trợ nền tảng.

## Giai đoạn 2 — Ngày 31–60: platform alpha cho cohort mới

### Kinh doanh

- Mở đợt cohort tiếp theo.
- Tái bán chương trình đã chuẩn hóa.
- Bắt đầu cấp quyền hoặc đồng tổ chức.
- Tiếp tục bán khóa cho doanh nghiệp khi có nhu cầu phù hợp.

### Kỹ thuật

- Enrollment.
- Content/activity.
- Assignment/submission.
- Rubric/result.
- Attendance/progress.
- Report/export.
- Tenant isolation và audit cơ bản.

### Gate 60 ngày

Chuyển sang giai đoạn 3 khi:

- cohort mới có thể chạy trên nền tảng mà không tăng tải hỗ trợ bất thường;
- báo cáo khách hàng đúng;
- import và backup ổn định;
- quyền truy cập được kiểm soát;
- có phương án fallback.

## Giai đoạn 3 — Ngày 61–90: chuẩn hóa và nhân rộng

### Kinh doanh

- Hình thành gói nhiều cohort.
- Xây playbook triển khai cho trường, doanh nghiệp và đối tác.
- Chuẩn hóa đào tạo giảng viên/coach nguồn.
- Thử nghiệm cấp quyền có nền tảng.

### Kỹ thuật

- Program template.
- Content versioning.
- Bulk import.
- Customer dashboard.
- Portfolio V1.
- Entitlement V1.
- Integration Gateway cơ bản.

### Gate 90 ngày

Được mở rộng nhiều đơn vị hơn khi:

- onboarding đơn vị mới có playbook;
- chi phí hỗ trợ/cohort nằm trong trần đã chốt;
- tenant isolation và backup đã kiểm thử;
- dữ liệu báo cáo đủ tin cậy;
- có ít nhất một dòng doanh thu lặp lại được thử nghiệm.

Path Engine và Grapuco chỉ được đưa vào backlog ưu tiên khi đã có nhu cầu thật, người dùng thật và tiêu chí thành công rõ.

---

## 9. Lộ trình tháng 4–12

## Tháng 4–6 — Chuẩn hóa và cấp quyền

### Kinh doanh

- Tăng số lớp từ các chương trình đã chuẩn hóa.
- Mở rộng trường, doanh nghiệp, trung tâm và cộng đồng.
- Bán gói nhiều cohort.
- Cấp quyền nội dung.
- Đào tạo giảng viên nguồn.
- Bắt đầu thu phí nền tảng khi sản phẩm đủ ổn định.

### Kỹ thuật

- Program/content versioning.
- Entitlement.
- Usage report.
- Customer/partner dashboard.
- Portfolio và evidence.
- Commercial/billing theo nhu cầu thật.

## Tháng 7–9 — Tăng công suất

### Kinh doanh

- Mở rộng đối tác phân phối.
- Tổ chức workshop/lab chuyên gia khi có khách.
- Bán Vibe Coding cho nhiều phân khúc.
- Triển khai hợp đồng doanh nghiệp lớn hơn khi có nhu cầu thật.
- Phát triển gói nâng cấp và mua tiếp.

### Kỹ thuật

- Tự động hóa các bước lặp lại.
- Support workflow.
- Analytics.
- Path Engine V1 nếu có đủ chương trình và dữ liệu.
- Grapuco adapter nếu đã có hợp đồng và use case rõ.

## Tháng 10–12 — Doanh thu lặp lại và tối ưu

### Kinh doanh

- Gia hạn chương trình và nền tảng.
- Tăng tỷ trọng cấp quyền và gói tổ chức.
- Mở rộng doanh nghiệp và đối tác.
- Chuẩn hóa bảng giá năm hai.
- Xác định chương trình nào nên nhân rộng hoặc dừng.

### Kỹ thuật

- Licensing nâng cao.
- Reporting và analytics.
- Security review.
- Disaster recovery.
- Path Engine V2 nếu dữ liệu đủ.
- AI co-learner pilot nếu có use case rõ.

---

## 10. KPI điều hành

## 10.1. Kinh doanh

- Số cơ hội đủ điều kiện.
- Số proposal đã gửi.
- Số lớp/hợp đồng đã chốt.
- Số lớp đã khai giảng.
- Số người học.
- Giá trị hợp đồng.
- Tiền đã thu.
- Công nợ.
- Chi phí trực tiếp.
- Đóng góp theo chương trình.
- Tỷ lệ mua tiếp/gia hạn.
- Thời gian từ cơ hội tới khai giảng.

## 10.2. Đào tạo

- Tỷ lệ tham gia.
- Tỷ lệ hoàn thành.
- Tỷ lệ nộp sản phẩm.
- Chất lượng theo rubric.
- Mức hài lòng.
- Số giờ giảng viên/coach.
- Số sự cố.
- Thời gian xử lý hỗ trợ.
- Tỷ lệ khách hàng chấp nhận case study.

## 10.3. Kỹ thuật

- Tiến độ release.
- Số lỗi nghiêm trọng.
- Tỷ lệ import thành công.
- Tỷ lệ dữ liệu hợp lệ.
- Uptime khi bắt đầu dùng thật.
- Ticket/người học hoặc ticket/cohort.
- Thời gian xử lý lỗi.
- Số cohort dùng nền tảng.
- Số cohort vận hành ngoài nền tảng.
- Chi phí hạ tầng/cohort hoặc active learner.

## 10.4. Sản phẩm

- Tỷ lệ tái sử dụng nội dung.
- Thời gian tạo một cohort mới.
- Thời gian onboarding một đơn vị mới.
- Tỷ lệ chương trình có rubric và sản phẩm chuẩn.
- Tỷ lệ báo cáo được tạo từ dữ liệu hệ thống.
- Số gói cấp quyền/gia hạn.

---

## 11. Phân công đội core

| Vai trò | Trách nhiệm chính |
|---|---|
| Founder/Product Owner | sản phẩm, giá, đối tác, hợp đồng, ưu tiên |
| Business/Growth | pipeline, proposal, tuyển sinh, đối tác |
| Learning Product Lead | chương trình, học liệu, rubric, chuẩn chất lượng |
| Operations/Customer Success | mở lớp, dữ liệu, hỗ trợ, báo cáo, đối soát |
| Tech Lead/Developer | kiến trúc, phát triển, vận hành và an toàn hệ thống |

Giảng viên, coach, chuyên gia, thiết kế và kỹ thuật bổ sung được thuê theo lớp hoặc hợp đồng khi cần.

---

## 12. Stage-Gate bắt buộc

## Gate A — Được phép mở bán

- Chương trình và đầu ra rõ.
- Giá đã chốt.
- Phạm vi và trách nhiệm rõ.
- Có proposal/landing/đăng ký.
- Có giảng viên và lịch dự kiến.

## Gate B — Được phép khai giảng

- Danh sách người học.
- Phương án thu tiền.
- Học liệu và rubric.
- Công cụ vận hành.
- Kênh hỗ trợ.
- Người chịu trách nhiệm.

## Gate C — Được phép dùng nền tảng mới

- Auth và phân quyền ổn định.
- Import chính xác.
- Content và submission hoạt động.
- Backup và fallback.
- Có hỗ trợ.

## Gate D — Được phép mở rộng nhiều đơn vị

- Onboarding có playbook.
- Báo cáo đúng.
- Tenant isolation ổn định.
- Tải hỗ trợ trong trần.
- Unit economics không xấu đi nghiêm trọng.

## Gate E — Được phép tích hợp Grapuco

- Có hợp đồng/phạm vi.
- Có giá, quota và SLA.
- Có consent và chính sách dữ liệu.
- Có quyền sở hữu code rõ ràng.
- Có fallback.
- Vibe Coding vẫn hoàn thành được khi Grapuco gián đoạn.

---

## 13. Các quyết định anh Đức cần chốt

1. Ngày bắt đầu tuần 1.
2. Danh sách khách hàng/lớp triển khai đợt đầu.
3. Bảng giá khóa 4 buổi, 12–15 buổi và Vibe Coding.
4. Cách thu tiền và chia sẻ doanh thu theo từng kênh.
5. Tên người phụ trách từng vai trò core.
6. Trần số lớp có thể giao đồng thời.
7. Trần ngân sách kỹ thuật 90 ngày.
8. Công cụ tạm thời được chọn làm chuẩn.
9. Phạm vi gói cấp quyền đầu tiên.
10. Đầu mối và mô hình thương mại với Grapuco.

Những điểm chưa chốt không làm dừng việc hoàn thiện chương trình, tạo Price Book, chuẩn hóa dữ liệu, chuẩn bị lớp và dựng nền kỹ thuật.

---

## 14. Kết luận

Kế hoạch này không đặt kinh doanh phía trước kỹ thuật hoặc kỹ thuật phía trước kinh doanh. Hai đường chạy đồng thời nhưng có vai trò khác nhau:

- **Kinh doanh và đào tạo tạo doanh thu, dữ liệu, nhu cầu và case study.**
- **Kỹ thuật giảm tải, nâng chất lượng, chuẩn hóa và tạo khả năng nhân rộng.**

Ba nguyên tắc không được thay đổi:

1. **Vibe Coding là một khóa đào tạo thông thường và có thể bán cho mọi phân khúc phù hợp.**
2. **Khách hàng gồm trường, doanh nghiệp, trung tâm, cộng đồng và người đi làm.**
3. **Đào tạo không phụ thuộc nền tảng; nền tảng được xây song song và tiếp nhận dần các lớp mới khi đủ ổn định.**