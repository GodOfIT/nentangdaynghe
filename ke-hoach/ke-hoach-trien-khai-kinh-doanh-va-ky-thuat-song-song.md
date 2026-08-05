# Kế hoạch triển khai kinh doanh song song kỹ thuật

> **Phiên bản điều hành:** 2026-08-05  
> **Phạm vi:** 12 tháng đầu, ưu tiên 90 ngày và 6 tuần đầu.  
> **Ràng buộc:** chỉ kế thừa chương trình giảng dạy; nền tảng được xây mới; đào tạo không phụ thuộc tiến độ phần mềm; Grapuco là đối tác ngoài tùy chọn.

---

## 1. Kết luận điều hành

Dự án chạy song song hai dòng công việc:

1. **Kinh doanh và đào tạo:** bán, tổ chức và giao các chương trình cho trường, doanh nghiệp, trung tâm, lớp cộng đồng và người đi làm.
2. **Sản phẩm và kỹ thuật:** xây nền tảng mới từ dữ liệu và vấn đề của các lớp thật.

Hai dòng hỗ trợ nhau nhưng không chặn nhau:

- lớp học có thể bắt đầu trước nền tảng;
- nền tảng không phải điều kiện để ký hợp đồng hoặc khai giảng;
- dữ liệu lớp chạy ngoài nền tảng phải được ghi có cấu trúc để migrate;
- kỹ thuật chỉ ưu tiên tính năng giúp tăng doanh thu, chất lượng, công suất hoặc khả năng nhân rộng;
- không ép cohort đang chạy chuyển hệ thống nếu gây rủi ro;
- không xây các tính năng dài hạn chỉ vì TUMO có chúng.

### Nguyên tắc sản phẩm

- Vibe Coding là một khóa đào tạo thông thường.
- Nó có thể bán cho trường, doanh nghiệp, lớp cộng đồng và người đi làm.
- Nó không cần Path Engine, Grapuco hoặc Learning OS hoàn chỉnh mới triển khai.
- Grapuco chỉ làm tăng trải nghiệm ở một số nội dung; không phải điều kiện hoàn thành khóa.
- Doanh nghiệp có thể mua trực tiếp các khóa tiêu chuẩn, không phải mọi giao dịch đều cần workshop–khảo sát–pilot phức tạp.

---

## 2. Mô hình kinh doanh đa kênh

## 2.1. Một chương trình, nhiều phân khúc

Mỗi chương trình được xem là một sản phẩm lõi. Khi triển khai cho từng nhóm, dự án điều chỉnh:

- tình huống thực hành;
- sản phẩm đầu ra;
- dữ liệu sử dụng;
- hình thức tổ chức;
- số người học;
- thời lượng;
- tài liệu bàn giao;
- mức giá;
- dịch vụ hỗ trợ.

Không tạo quá nhiều khóa mới chỉ vì khách hàng thuộc phân khúc khác.

## 2.2. Các kênh bán hàng

### Trường và tổ chức giáo dục

- lớp sinh viên;
- khóa giáo viên/giảng viên;
- đào tạo giảng viên nguồn;
- cấp quyền chương trình;
- báo cáo và nền tảng;
- AI+ / AIx;
- STEAM theo đặt hàng.

### Doanh nghiệp

- Ứng dụng AI theo khung năng lực;
- AI Productivity;
- AI cho phòng ban;
- Vibe Coding;
- automation;
- AI agent;
- workshop hoặc khóa ngắn hạn;
- tư vấn và triển khai riêng khi cần.

Khóa đào tạo tiêu chuẩn có thể bán trực tiếp. Chỉ các dự án triển khai hệ thống riêng mới cần khảo sát, pilot và nghiệm thu kỹ thuật.

### Lớp cộng đồng và cá nhân

- khóa 4 buổi;
- khóa 12–15 buổi;
- workshop trải nghiệm;
- lớp online;
- khóa theo nhóm nghề;
- Vibe Coding;
- chương trình nâng cao.

### Trung tâm và đối tác đào tạo

- đồng tổ chức;
- chia sẻ doanh thu;
- cấp quyền nội dung;
- đào tạo giảng viên nguồn;
- sử dụng nền tảng và báo cáo.

---

## 3. Danh mục chương trình ưu tiên

## 3.1. Ứng dụng AI theo khung năng lực

- 12–15 buổi.
- Có thể triển khai cho sinh viên, giáo viên, người đi làm và doanh nghiệp.
- Điều chỉnh bài tập theo ngành, phòng ban hoặc vai trò.

## 3.2. Vibe Coding

- 12–15 buổi hoặc bản ngắn hơn.
- Đầu ra: website, ứng dụng, workflow, công cụ nội bộ hoặc AI agent.
- Có thể dạy cho sinh viên, giáo viên, người đi làm và doanh nghiệp.
- Vận hành bằng AI coding tool, GitHub hoặc nơi lưu source, môi trường chạy và rubric.
- Không yêu cầu nền tảng riêng.
- Grapuco là add-on tùy chọn để hiểu codebase, dependency và flow.

## 3.3. AI cho giáo viên và giảng viên

- bản 4 buổi;
- bản 12 buổi;
- AI-Powered Teaching;
- Faculty AI Builder;
- AI+ Curriculum Sprint;
- đào tạo giảng viên nguồn.

## 3.4. AI cho doanh nghiệp

Có thể sử dụng lại các chương trình lõi hoặc đóng gói thành:

- AI Foundation;
- AI Productivity;
- AI Workflow;
- Vibe Coding for Internal Tools;
- AI Agent Builder;
- khóa theo phòng ban.

## 3.5. Cấp quyền và gói tổ chức

- nội dung;
- nội dung + đào tạo nguồn;
- nội dung + nền tảng;
- triển khai đầy đủ;
- white-label hoặc tùy chỉnh nếu có hợp đồng.

---

## 4. Quy tắc định giá và bán hàng

## 4.1. Giá phải có trước bán

Mỗi sản phẩm phải có bảng phạm vi và mức giá trước khi:

- chạy quảng cáo;
- gửi proposal;
- mời đăng ký;
- ký hợp đồng;
- chốt lịch giảng viên.

Không để tới tuần 4 mới định giá khóa 4 buổi hoặc bất kỳ khóa đang triển khai nào.

## 4.2. Cấu trúc giá

Có thể có nhiều phiên bản giá:

- giá cá nhân/lớp cộng đồng;
- giá cho trường;
- giá cho doanh nghiệp;
- giá theo quy mô lớp;
- giá đào tạo trực tiếp/online;
- phí tùy chỉnh;
- phí cấp quyền;
- phí nền tảng;
- phí hỗ trợ sau khóa;
- add-on Grapuco hoặc công cụ ngoài nếu có.

Giá khác nhau vì phạm vi dịch vụ, không phải vì khóa học được coi là “cao cấp” hay “thấp cấp”.

## 4.3. Tuần 4 dùng để làm gì

- so sánh giá bán với chi phí thật;
- đánh giá biên đóng góp;
- điều chỉnh giá cho đợt tiếp theo;
- bỏ các hạng mục tốn nhiều nhưng ít giá trị;
- tạo bundle hoặc gói mới.

---

## 5. Vận hành đào tạo trước nền tảng

## 5.1. Bộ công cụ tạm thời

Các lớp đầu có thể sử dụng:

- Google Forms;
- Google Sheets;
- Google Drive;
- Zoom hoặc Google Meet;
- Zalo hoặc email;
- GitHub và công cụ AI coding;
- Notion, Trello hoặc công cụ quản lý;
- LMS/SaaS có sẵn.

## 5.2. Dữ liệu phải chuẩn hóa ngay

Mọi cohort phải có:

- mã đơn vị;
- mã chương trình;
- mã cohort;
- mã người học;
- trạng thái đăng ký và thanh toán;
- điểm danh;
- bài tập;
- sản phẩm;
- rubric;
- kết quả;
- phản hồi;
- các sự cố quan trọng.

## 5.3. Nguyên tắc chuyển lên nền tảng

- nền tảng alpha được dùng nội bộ trước;
- cohort mới có thể lên nền tảng khi ổn định;
- cohort đang chạy không bắt buộc chuyển giữa chừng;
- dữ liệu được import sau theo mẫu chuẩn;
- người học không phải nhập lại dữ liệu đã có;
- luôn có bản backup trước khi migrate.

---

## 6. Mô hình kỹ thuật song song

## 6.1. Kiến trúc đích

Chọn modular monolith trong 12 tháng đầu.

Các module dự kiến:

1. Identity & Access.
2. Organization & Customer.
3. Program & Curriculum.
4. Cohort & Session.
5. Learner & Enrollment.
6. Assignment & Submission.
7. Assessment & Rubric.
8. Attendance & Progress.
9. Portfolio & Evidence.
10. Reporting.
11. Commercial & Billing.
12. Integration Gateway.
13. Path Engine khi đủ dữ liệu.

## 6.2. Stack tham chiếu

- Frontend: React/Next.js hoặc TypeScript framework tương đương.
- Backend: TypeScript/NestJS modular monolith.
- Database: PostgreSQL.
- Object storage: S3-compatible.
- Queue: Redis/BullMQ hoặc managed queue khi cần.
- AI worker: Python khi có tác vụ AI riêng.
- Deployment: Docker trên managed platform.
- Observability: log, metric, audit trail.

## 6.3. Thứ tự kỹ thuật đúng

Ưu tiên:

1. dữ liệu và import;
2. tổ chức, chương trình, cohort và người học;
3. học liệu, bài tập và nộp bài;
4. rubric, kết quả và báo cáo;
5. phân quyền và audit;
6. thanh toán/đối soát khi có nhu cầu;
7. portfolio;
8. cấp quyền;
9. Path Engine;
10. AI co-learner và các tính năng nâng cao.

Không ưu tiên Grapuco trước các chức năng vận hành lớp cơ bản.

---

## 7. Mối liên hệ giữa kinh doanh và kỹ thuật

| Nhu cầu kinh doanh | Cách vận hành ban đầu | Kỹ thuật phát triển sau |
|---|---|---|
| Mở lớp ngay | Forms, Sheets, Drive, Meet | cohort, user, content |
| Điểm danh và tiến độ | Sheet chuẩn | attendance, progress |
| Thu bài và chấm | Drive/GitHub + rubric | assignment, submission, assessment |
| Báo cáo khách hàng | Sheet/slide/PDF | dashboard và export |
| Bán nhiều lớp | template thủ công | program template, bulk import |
| Cấp quyền nội dung | hợp đồng + file phân quyền | entitlement và usage report |
| Vibe Coding | GitHub + AI coding tool | project evidence và portfolio |
| Dùng Grapuco | liên kết ngoài/tài khoản riêng | adapter API/MCP nếu cần |
| Đào tạo doanh nghiệp | lớp tiêu chuẩn | module doanh nghiệp chỉ khi có nhu cầu riêng |
| Cá nhân hóa | giảng viên/coach điều chỉnh | Path Engine sau khi có dữ liệu |

Kỹ thuật không phải điều kiện để giao sản phẩm đào tạo; kỹ thuật là công cụ giúp giao tốt hơn và mở rộng hơn.

---

## 8. Kế hoạch 6 tuần đầu

## Tuần 1 — Chốt sản phẩm, giá và lịch

### Kinh doanh

- Chốt 2–3 trường/cơ sở đợt đầu.
- Chốt các cơ hội doanh nghiệp, trung tâm và lớp cộng đồng đang có.
- Chốt giá cho khóa 4 buổi, 12–15 buổi, Vibe Coding và các gói tổ chức.
- Hoàn thiện proposal, hợp đồng mẫu, chính sách thanh toán và tài liệu bán hàng.
- Chốt lịch, giảng viên, điều phối viên và công cụ vận hành tạm thời.

### Đào tạo

- Hoàn thiện học liệu cần dùng ngay.
- Chốt bài tập, sản phẩm và rubric.
- Tạo Forms, Sheets, Drive và nhóm hỗ trợ cho từng cohort.

### Kỹ thuật

- Chốt domain model.
- Tạo repo, CI/CD, database và môi trường.
- Chuẩn hóa schema import.
- Bắt đầu module organization, program và cohort.

## Tuần 2 — Khai giảng không phụ thuộc nền tảng

### Kinh doanh và đào tạo

- Khai giảng các lớp đã chốt.
- Có thể chạy đồng thời lớp trường, doanh nghiệp và cộng đồng.
- Vibe Coding được triển khai như các khóa khác.
- Dùng bộ công cụ tạm thời nếu nền tảng chưa sẵn sàng.

### Kỹ thuật

- Xây learner, enrollment, content, assignment và submission.
- Thử import dữ liệu mẫu.
- Không ép lớp thật sử dụng bản chưa ổn định.

## Tuần 3 — Mở rộng lớp và hoàn thiện dữ liệu

### Kinh doanh và đào tạo

- Mở các lớp/cohort tiếp theo.
- Thu bài tập và sản phẩm.
- Tiếp tục bán các khóa theo bảng giá đã chốt.
- Thu phản hồi từ trường, doanh nghiệp và người học.

### Kỹ thuật

- Hoàn thiện rubric, result, attendance và export.
- Đội nội bộ dùng alpha.
- Sửa lỗi import, phân quyền và dữ liệu.

## Tuần 4 — Đối soát và điều chỉnh

### Kinh doanh

- Tổng hợp doanh thu, tiền đã thu, công nợ và chi phí thật.
- Đánh giá hiệu quả từng phân khúc.
- Điều chỉnh giá cho đợt sau nếu cần.
- Chốt lịch tháng hai.

### Đào tạo

- Hoàn thiện case study và phản hồi.
- Không đổi công cụ giữa khóa nếu không cần thiết.

### Kỹ thuật

- Chốt cohort nào sẽ lên nền tảng.
- Hoàn thiện import/migrate.
- Xếp backlog tháng hai theo vấn đề thật.

## Tuần 5–6 — Bắt đầu sử dụng nền tảng có kiểm soát

### Kinh doanh và đào tạo

- Khởi động đợt hai.
- Tiếp tục triển khai trường, doanh nghiệp và lớp cộng đồng.
- Chuẩn hóa playbook mở lớp.

### Kỹ thuật

- Đưa một cohort mới lên nền tảng nếu đủ ổn định.
- Hoàn thiện school/customer dashboard cơ bản.
- Xây portfolio V1 nếu sản phẩm đầu ra cần lưu.
- Hoàn thiện logging, backup và phân quyền.

---

## 9. Kế hoạch 90 ngày

## Giai đoạn 1 — Ngày 1–30: giao đào tạo và dựng nền

### Kinh doanh

- kích hoạt các trường đã sẵn sàng;
- bán cho cả trường, doanh nghiệp và cộng đồng;
- chốt giá trước bán;
- triển khai các chương trình cốt lõi;
- xây case study và dữ liệu chi phí.

### Kỹ thuật

- domain model;
- CI/CD;
- database;
- import schema;
- các module nền ở mức alpha;
- không bắt buộc người học dùng nền tảng.

## Giai đoạn 2 — Ngày 31–60: platform alpha cho cohort mới

### Kinh doanh

- mở đợt cohort tiếp theo;
- tái bán các khóa đã chuẩn hóa;
- cấp quyền hoặc đồng tổ chức;
- bán đào tạo cho doanh nghiệp khi có nhu cầu.

### Kỹ thuật

- user và enrollment;
- content;
- assignment/submission;
- rubric/result;
- attendance/progress;
- report/export;
- tenant isolation và audit cơ bản.

## Giai đoạn 3 — Ngày 61–90: chuẩn hóa và nhân rộng

### Kinh doanh

- hình thành gói nhiều cohort;
- xây playbook triển khai cho trường và doanh nghiệp;
- chuẩn hóa đào tạo giảng viên/coach;
- thử cấp quyền có nền tảng.

### Kỹ thuật

- program template;
- content versioning;
- bulk import;
- dashboard khách hàng;
- portfolio V1;
- entitlement V1;
- integration gateway cơ bản.

Path Engine và Grapuco chỉ được đưa vào khi phục vụ một nhu cầu thật đã xác định.

---

## 10. Lộ trình tháng 4–12

## Tháng 4–6 — Tái sử dụng và cấp quyền

### Kinh doanh

- tăng số lớp từ các chương trình đã chuẩn hóa;
- mở rộng trường, doanh nghiệp, trung tâm và cộng đồng;
- bán gói nhiều cohort;
- cấp quyền nội dung;
- đào tạo giảng viên nguồn;
- xây doanh thu nền tảng nếu sản phẩm đủ ổn định.

### Kỹ thuật

- content versioning;
- entitlement;
- usage report;
- partner/customer dashboard;
- portfolio và evidence;
- commercial/billing theo nhu cầu thật.

## Tháng 7–9 — Tăng công suất

### Kinh doanh

- mở rộng mạng lưới đối tác;
- tổ chức workshop/lab chuyên gia khi có khách;
- bán Vibe Coding cho nhiều phân khúc;
- triển khai các hợp đồng doanh nghiệp lớn hơn khi có nhu cầu.

### Kỹ thuật

- automation cho các bước lặp lại;
- support workflow;
- analytics;
- Path Engine V1 nếu có đủ chương trình và dữ liệu;
- Grapuco adapter nếu hợp đồng và nhu cầu đã chốt.

## Tháng 10–12 — Doanh thu lặp lại và tối ưu

### Kinh doanh

- gia hạn chương trình và nền tảng;
- tăng tỷ trọng cấp quyền và gói tổ chức;
- mở rộng doanh nghiệp và đối tác;
- chuẩn hóa bảng giá năm hai.

### Kỹ thuật

- licensing nâng cao;
- reporting;
- security review;
- disaster recovery;
- Path Engine V2 nếu dữ liệu đủ;
- AI co-learner pilot nếu có use case rõ.

---

## 11. KPI điều hành chung

### Kinh doanh

- số lớp đã chốt;
- số lớp đã khai giảng;
- số người học;
- doanh thu và tiền đã thu;
- công nợ;
- chi phí trực tiếp;
- tỷ lệ mua tiếp;
- số hợp đồng trường, doanh nghiệp, cộng đồng và đối tác;
- doanh thu theo chương trình, không chỉ theo phân khúc.

### Đào tạo

- điểm danh;
- hoàn thành;
- sản phẩm;
- chất lượng theo rubric;
- phản hồi;
- số giờ giảng viên/coach;
- số sự cố và thời gian xử lý.

### Kỹ thuật

- tiến độ module;
- lỗi nghiêm trọng;
- thời gian import;
- tỷ lệ dữ liệu hợp lệ;
- uptime khi bắt đầu dùng thật;
- ticket;
- thời gian xử lý;
- số cohort dùng nền tảng;
- số cohort vẫn vận hành ngoài nền tảng.

---

## 12. Điều kiện chuyển lớp lên nền tảng

Một cohort chỉ nên dùng nền tảng mới khi:

- đăng nhập và phân quyền ổn định;
- import danh sách chính xác;
- học liệu và bài tập truy cập được;
- submission không làm mất dữ liệu;
- backup hoạt động;
- có người hỗ trợ;
- có phương án quay về công cụ tạm thời;
- giảng viên và điều phối viên đã được hướng dẫn.

Không chuyển chỉ để đạt KPI kỹ thuật.

---

## 13. Vai trò Grapuco

Grapuco là công cụ ngoài có thể hỗ trợ:

- bản đồ codebase;
- dependency và call graph;
- spec-first;
- phân tích tác động;
- context cho AI coding tools.

Nguyên tắc:

- Vibe Coding không phụ thuộc Grapuco;
- người học có thể hoàn thành khóa bằng GitHub và AI coding tool thông thường;
- chỉ tích hợp khi có giá, quota, SLA, consent và hợp đồng;
- luôn có fallback;
- không gửi dữ liệu người học mặc định.

---

## 14. Kết luận

Kinh doanh phải bắt đầu từ chương trình và khách hàng đã có, không chờ nền tảng. Kỹ thuật xây song song để giảm tải, nâng chất lượng và tạo khả năng nhân rộng.

Ba điều không được nhầm lại:

1. **Vibe Coding là khóa học bình thường**, không phải dự án kỹ thuật cao cấp.
2. **Khách hàng gồm trường, doanh nghiệp, cộng đồng và người đi làm**, không chỉ trường học.
3. **Các lớp đầu có thể chạy hoàn toàn ngoài nền tảng**, miễn dữ liệu được quản lý có cấu trúc để chuyển lên sau.