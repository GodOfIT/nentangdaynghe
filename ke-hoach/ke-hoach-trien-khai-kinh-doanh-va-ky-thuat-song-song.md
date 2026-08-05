# Kế hoạch triển khai kinh doanh song song kỹ thuật

> **Phiên bản điều hành:** 2026-08-05  
> **Phạm vi:** 12 tháng đầu, ưu tiên kế hoạch 90 ngày và 6 tuần triển khai đầu tiên.  
> **Nguồn:** `AGENTS.md`, `ke-hoach/muc-tieu-thang-1.md`, `docs/nghien-cuu-tumo-mo-hinh-kinh-doanh-va-cong-nghe.md`, `nen-tang/phuong-an-trien-khai-ky-thuat-hoc-tu-tumo.md`.  
> **Ràng buộc:** chỉ kế thừa các chương trình giảng dạy do anh Đức đã soạn; nền tảng, dữ liệu và hạ tầng xây mới; Grapuco là đối tác ngoài.

---

## 1. Kết luận điều hành

Dự án vận hành theo hai đường chạy song song:

1. **Đường kinh doanh và triển khai giáo dục:** kích hoạt trường đã sẵn sàng, mở lớp, thu tiền, giao chương trình, tạo case study, cấp quyền và mở rộng mạng lưới.
2. **Đường sản phẩm và kỹ thuật:** xây Learning Operating System theo đúng nhu cầu của các lớp thật, bắt đầu bằng MVP tối thiểu rồi phát triển curriculum graph, competency graph, Path Engine, portfolio, coach console và các tích hợp đối tác.

Hai đường không độc lập:

- một mốc kinh doanh phải xác định tính năng kỹ thuật cần có;
- một tính năng kỹ thuật chỉ được ưu tiên khi phục vụ doanh thu, chất lượng, công suất hoặc khả năng nhân rộng;
- không chờ nền tảng hoàn thiện mới mở lớp;
- không mở rộng số trường/người học nếu vận hành và hệ thống chưa chịu được tải;
- không xây sản phẩm doanh nghiệp lớn trước khi có bài toán, người chịu trách nhiệm và tiêu chí nghiệm thu;
- Grapuco được tích hợp như add-on cho Vibe Coding, không phải dependency bắt buộc.

Mục tiêu của năm đầu không phải xây toàn bộ TUMO phiên bản Việt Nam. Mục tiêu là chứng minh được một mô hình nhỏ nhưng đầy đủ:

> **Chương trình tập trung + trường/điểm triển khai địa phương + coach/giảng viên phân tầng + nền tảng điều phối lộ trình, sản phẩm và minh chứng + doanh thu lặp lại từ cấp quyền và nền tảng.**

---

## 2. Mô hình vận hành đích

## 2.1. Trung tâm lõi

Đội trung tâm chịu trách nhiệm:

- sở hữu và phiên bản hóa chương trình;
- chuẩn hóa học liệu, activity, prerequisite, rubric và sản phẩm;
- đào tạo giảng viên/coach nguồn;
- vận hành nền tảng và dữ liệu;
- phát triển Path Engine;
- kiểm soát chất lượng;
- bán hàng, hợp đồng và cấp quyền;
- quản lý đối tác ngoài như Grapuco.

## 2.2. Trường/đơn vị triển khai

Mỗi trường hoặc đơn vị là một node triển khai, chịu trách nhiệm phối hợp:

- danh sách người học;
- truyền thông và tuyển sinh nội bộ;
- phòng học, thiết bị và lịch học nếu học trực tiếp;
- đầu mối điều phối;
- xử lý tình huống tại chỗ;
- xác nhận báo cáo và nghiệm thu.

Không bắt buộc mỗi trường có một đội công nghệ riêng.

## 2.3. Nhân sự giảng dạy ba tầng

Học từ TUMO nhưng điều chỉnh theo bối cảnh Việt Nam:

1. **Coach/điều phối viên:** hỗ trợ phổ thông, nhắc tiến độ, xử lý bế tắc, theo dõi mức tham gia.
2. **Giảng viên/workshop leader:** dạy nội dung cốt lõi, phản hồi và đánh giá sản phẩm.
3. **Chuyên gia/lab leader:** tham gia workshop nâng cao, dự án thật hoặc nội dung chuyên ngành.

Chuyên gia không xử lý toàn bộ tương tác thường ngày. Điều này giúp mở rộng mà không làm chi phí tăng tuyến tính theo số người học.

## 2.4. Sản phẩm học tập

Mỗi chương trình phải được chuyển từ “danh sách buổi học” thành dữ liệu có cấu trúc:

- activity;
- prerequisite;
- competency;
- workshop;
- assignment;
- rubric;
- product/evidence;
- progression rule;
- portfolio item.

Chứng chỉ chỉ là đầu ra phụ. Sản phẩm và hồ sơ minh chứng là đầu ra chính.

---

## 3. Mô hình kinh doanh song song với sản phẩm

## 3.1. Thang sản phẩm giáo dục

### Tầng 1 — Thu hút

- nội dung miễn phí;
- webinar;
- workshop trải nghiệm;
- bài học mẫu;
- đánh giá năng lực đầu vào.

### Tầng 2 — Sản phẩm đầu vào

- khóa AI cho giáo viên 4 buổi;
- workshop AI/Vibe Coding cho sinh viên;
- lớp cộng đồng ngắn hạn;
- workshop dành cho lãnh đạo hoặc khoa/phòng.

### Tầng 3 — Chương trình cốt lõi

- AI cho giáo viên 12 buổi;
- Ứng dụng AI theo khung năng lực 12–15 buổi;
- Vibe Coding 12–15 buổi;
- AI cho giảng viên và giáo dục nghề nghiệp;
- Faculty AI Builder.

### Tầng 4 — Gói tổ chức

- trường mua trọn gói một hoặc nhiều cohort;
- đào tạo giảng viên/coach nguồn;
- AI+ Curriculum Sprint;
- AI Pedagogy Lab;
- báo cáo và dashboard cho trường.

### Tầng 5 — Doanh thu lặp lại

- cấp quyền chương trình theo thời hạn;
- phí nền tảng theo trường hoặc capacity band;
- phí active learner;
- phí báo cáo nâng cao;
- phí hỗ trợ vận hành;
- gia hạn nội dung và nền tảng.

### Tầng 6 — Add-on và dự án nâng cao

- Grapuco cho Vibe Coding;
- workshop/lab chuyên gia;
- AI co-learner;
- white-label;
- tích hợp riêng;
- chương trình theo đặt hàng.

## 3.2. Thang sản phẩm doanh nghiệp

Doanh nghiệp không phải nguồn nền trong ba tháng đầu.

> Workshop → khảo sát → đào tạo nhóm nhỏ → pilot → case study → triển khai mở rộng.

Chỉ nhận pilot khi có:

- bài toán rõ;
- dữ liệu hoặc môi trường thử nghiệm;
- người phụ trách phía khách hàng;
- đầu ra;
- thời gian;
- tiêu chí nghiệm thu;
- ngân sách.

## 3.3. Cơ cấu doanh thu định hướng

Các tỷ trọng là `[giả định quản trị]`, tính trên tiền thực thu:

| Giai đoạn | Cá nhân/cohort | Trường/tổ chức/cấp quyền | Doanh nghiệp/add-on/nguồn khác |
|---|---:|---:|---:|
| Tháng 1–3 | 50–60% | 25–40% | 0–15% |
| Tháng 4–6 | 35–50% | 35–50% | 5–20% |
| Tháng 7–12 | 20–40% | 40–60% | 10–25% |

Đích cuối năm là giảm phụ thuộc vào việc mở từng lớp bán lẻ và tăng phần doanh thu cấp quyền, nền tảng, gia hạn và gói tổ chức.

---

## 4. Kiến trúc kỹ thuật đích

## 4.1. Lựa chọn kiến trúc

Chọn **modular monolith** trong 12 tháng đầu.

Không chọn microservice sớm vì:

- đội kỹ thuật nhỏ;
- domain còn thay đổi;
- tải thật chưa được đo;
- distributed transaction và DevOps sẽ làm chậm MVP.

Các module trong cùng codebase nhưng có boundary rõ:

1. Identity & Tenant.
2. Organization & Partnership.
3. Curriculum & Competency.
4. Cohort & Session.
5. Path Engine.
6. Assignment & Assessment.
7. Portfolio & Evidence.
8. Coach & Support.
9. Notification.
10. Commercial & Billing.
11. Analytics & Reporting.
12. Integration Gateway.

## 4.2. Stack đề xuất

- **Frontend:** React/Next.js hoặc TypeScript framework tương đương.
- **Backend:** TypeScript/NestJS modular monolith.
- **AI worker:** Python khi cần xử lý AI, multimodal, chấm sơ bộ hoặc pipeline dữ liệu.
- **Database:** PostgreSQL.
- **Graph V1:** node/edge trong PostgreSQL; chưa cần Neo4j.
- **Object storage:** S3-compatible.
- **Queue:** Redis/BullMQ, RabbitMQ hoặc managed queue.
- **Deployment:** Docker trên managed container platform.
- **Observability:** log, metric, trace và audit trail.
- **Mobile:** responsive web trước; native app sau khi có dữ liệu sử dụng.

## 4.3. Integration Gateway

Mọi dịch vụ ngoài đi qua một lớp tích hợp:

- Grapuco;
- cổng thanh toán;
- email/SMS/Zalo;
- video conference;
- cloud storage;
- AI model/API;
- analytics.

Gateway phải quản lý:

- credential;
- consent;
- scope dữ liệu;
- quota;
- webhook;
- retry;
- timeout;
- log;
- thu hồi quyền;
- fallback.

## 4.4. Path Engine

### V1 — Rule-based

Được triển khai trước vì dễ giải thích và kiểm soát:

- prerequisite;
- năng lực chưa đạt;
- hoạt động đã hoàn thành;
- lịch phù hợp;
- capacity;
- deadline;
- quy định trường;
- mức hứng thú do người học chọn.

### V2 — Data-informed

Sau khi có dữ liệu nhiều cohort:

- tỷ lệ hoàn thành;
- thời gian thực hiện;
- chất lượng sản phẩm;
- mức tham gia;
- tải coach;
- nguy cơ bỏ học;
- lựa chọn của người học tương đồng.

### V3 — Optimization/recommendation

Chỉ nghiên cứu sau khi V1 và V2 ổn định. Model không được phá prerequisite, capacity hoặc quy định học vụ.

---

## 5. Nguyên tắc gắn kinh doanh với kỹ thuật

| Mốc kinh doanh | Năng lực kỹ thuật bắt buộc |
|---|---|
| Mở cohort đầu tiên | tenant, cohort, người học, học liệu, nhiệm vụ, nộp bài, điểm danh cơ bản |
| Báo cáo cho trường | rubric, tiến độ, kết quả, export báo cáo, phân quyền |
| Bán gói nhiều cohort | multi-cohort, template chương trình, import hàng loạt, dashboard |
| Cấp quyền chương trình | content versioning, entitlement, phạm vi sử dụng, usage report |
| Đào tạo coach/giảng viên nguồn | coach console, guide, escalation, quality checklist |
| Nhân rộng nhiều trường | tenant isolation, role matrix, monitoring, support workflow |
| Vibe Coding nâng cao | repository link, project evidence, demo, code rubric |
| Tích hợp Grapuco | consent, async job, webhook, cache, fallback, audit |
| Cá nhân hóa lộ trình | curriculum graph, competency graph, Path Engine |
| AI co-learner | source control, guardrail, cost metering, human handoff |
| Hub–Node | scheduling, capacity, workshop allocation, coach load |

Một feature không gắn được với ít nhất một mốc trong bảng trên thì không thuộc backlog ưu tiên.

---

## 6. Kế hoạch 6 tuần đầu

## Tuần 1 — Kích hoạt thương mại và dựng nền

### Kinh doanh

- Chốt 2–3 trường/cơ sở đợt 1.
- Chốt số người học, chương trình, cơ chế học phí và đầu mối.
- Hoàn thiện proposal cho khóa giáo viên 4 buổi và 12 buổi.
- Chốt tối thiểu hai lớp/hợp đồng giáo dục có lịch.
- Chuẩn bị gói cấp quyền chương trình sinh viên.
- Lập danh sách 3–5 cuộc trao đổi doanh nghiệp nhưng không đưa vào doanh thu cơ sở.

### Chương trình và vận hành

- Đóng gói hai chương trình sinh viên đã soạn.
- Chuyển buổi học thành activity, assignment, rubric và evidence.
- Chuẩn hóa checklist giảng viên/coach.
- Chuẩn bị quy trình thủ công dự phòng cho danh sách, điểm danh, nộp bài và hỗ trợ.

### Kỹ thuật

- Chốt domain model và module boundary.
- Tạo repo, CI/CD, môi trường dev/staging/production.
- Xây identity, tenant, organization, program và cohort.
- Thiết kế PostgreSQL, object storage và audit log.
- Tạo learner/admin shell.

### Kết quả cuối tuần

- Các trường đợt 1 có lịch và đầu mối.
- Có dữ liệu chương trình đủ để nhập hệ thống.
- Có bản staging cho quản trị trường, chương trình và cohort.

## Tuần 2 — Khai giảng và MVP lớp học

### Kinh doanh

- Khai giảng cohort đầu tiên.
- Mở hoặc ký khóa giáo viên 4 buổi.
- Thu học phí/ứng trước theo thỏa thuận.
- Chốt lịch các cohort còn lại trong đợt 1.

### Vận hành

- Import danh sách người học.
- Gửi hướng dẫn truy cập.
- Theo dõi hỗ trợ, lỗi tài khoản và điểm danh.
- Ghi lại toàn bộ thao tác thủ công để chuyển thành backlog.

### Kỹ thuật

- Học liệu và cấu trúc buổi học.
- Assignment và submission.
- Điểm danh/trạng thái tham gia.
- Role: admin, school coordinator, instructor, coach, learner.
- Export danh sách và trạng thái.

### Kết quả cuối tuần

- Người học truy cập được.
- Có thể xem học liệu, nhận nhiệm vụ và nộp sản phẩm.
- Điều phối viên xem được danh sách và trạng thái cơ bản.

## Tuần 3 — Đánh giá, báo cáo và mở các lớp tiếp theo

### Kinh doanh

- Kích hoạt trường/cohort thứ hai và thứ ba.
- Tiếp cận hai đối tác phân phối giáo dục.
- Gửi tối thiểu một đề xuất cấp quyền chương trình.
- Thực hiện các cuộc trao đổi doanh nghiệp đã lên lịch.

### Vận hành

- Thu bài tập/sản phẩm đầu tiên.
- Dùng rubric chung.
- Đo ticket, giờ hỗ trợ và lỗi phổ biến.
- Xây FAQ và guide cho coach.

### Kỹ thuật

- Rubric, grading và feedback.
- Product/evidence storage.
- Dashboard tiến độ cơ bản.
- Báo cáo theo trường/cohort.
- Notification job đầu tiên.

### Kết quả cuối tuần

- Trường nhận được báo cáo tiến độ có thể sử dụng.
- Sản phẩm người học được lưu thành evidence.

## Tuần 4 — Đối soát, chất lượng và quyết định tháng 2

### Kinh doanh

- Đối soát tiền đã thu, công nợ và chia sẻ.
- Đánh giá hiệu quả khóa 4 buổi.
- Chốt trường và cohort đợt 2.
- Quyết định có nhận pilot doanh nghiệp hay không.

### Vận hành

- Báo cáo tỷ lệ tham gia, tiến độ, hoàn thành sớm và ngoại lệ.
- Phân loại yêu cầu hỗ trợ.
- Đánh giá chất lượng giảng viên/coach.
- Xác định việc nào phải tự động hóa trước.

### Kỹ thuật

- Hardening authentication và tenant isolation.
- Audit log.
- Import/export ổn định.
- Basic monitoring và alert.
- Sửa các lỗi tạo tải vận hành lớn.

### Kết quả cuối tuần

- Có báo cáo kinh doanh–vận hành–kỹ thuật tháng đầu.
- Có backlog tháng 2 dựa trên dữ liệu thật.

## Tuần 5–6 — Lặp lại và chuẩn hóa

### Kinh doanh

- Mở đợt cohort thứ hai.
- Chuyển khóa/lớp đầu thành case study.
- Chuẩn hóa gói trường mua trọn cohort.
- Tiến tới hợp đồng cấp quyền hoặc nhiều cohort.

### Kỹ thuật

- Program template và content versioning.
- Portfolio V1.
- Competency/evidence mapping.
- School dashboard V1.
- Commercial entitlement V1.
- Event tracking V1.

### Grapuco

- Chỉ bắt đầu technical discovery nếu đã chốt đầu mối, scope, dữ liệu và thương mại.
- Chưa tích hợp sâu vào critical path.

---

## 7. Kế hoạch 90 ngày

## Giai đoạn 1 — Ngày 1–30: kích hoạt và MVP

### Mục tiêu kinh doanh

- 2–3 trường/cơ sở hoạt động.
- 200–300 sinh viên thanh toán và bắt đầu học.
- Tối thiểu hai khóa/lớp giáo viên, giảng viên hoặc cán bộ giáo dục được chốt.
- Tối thiểu một khóa giáo viên phổ thông 4 buổi.
- Ít nhất một gói chương trình sinh viên được triển khai hoặc cấp quyền.
- 3–5 cuộc trao đổi doanh nghiệp; pilot 0–1, không bắt buộc.

### Mục tiêu kỹ thuật

Release 1 — Classroom MVP:

- multi-tenant cơ bản;
- program/cohort/user;
- content/activity;
- assignment/submission;
- attendance;
- rubric/result;
- school report;
- role/permission;
- audit tối thiểu.

### Cổng chuyển giai đoạn

- Không có lỗi truy cập hoặc mất dữ liệu nghiêm trọng.
- Báo cáo cho trường khớp dữ liệu vận hành.
- Đội có thể vận hành cohort tiếp theo mà không tăng người theo tỷ lệ 1:1.
- Đã biết ba vấn đề kỹ thuật tạo tải lớn nhất.

## Giai đoạn 2 — Ngày 31–60: chuẩn hóa và cấp quyền

### Mục tiêu kinh doanh

- Mở cohort đợt 2.
- Có 4–6 trường/cơ sở lũy kế đang triển khai, đã ký hoặc đã chốt lịch `[mục tiêu điều hành]`.
- Có ít nhất hai đối tác phân phối giáo dục hoạt động.
- Chốt cấu hình cấp quyền chương trình.
- Có tối thiểu một khách hàng mua nhiều cohort hoặc cấp quyền.
- Chọn tối đa một pilot doanh nghiệp có tiêu chí rõ.

### Mục tiêu kỹ thuật

Release 2 — Reusable Program Platform:

- program template;
- content versioning;
- entitlement;
- portfolio V1;
- competency/evidence mapping;
- school dashboard;
- notification;
- support/coach console cơ bản;
- product analytics;
- payment/reconciliation integration nếu dự án trực tiếp thu tiền.

### Cổng chuyển giai đoạn

- Một chương trình được tái sử dụng cho ít nhất hai đơn vị mà không copy dữ liệu thủ công.
- Trường xem được dashboard và báo cáo.
- Có số liệu thời gian onboarding một trường mới.
- Có bảng chi phí phục vụ theo cohort và theo người học.

## Giai đoạn 3 — Ngày 61–90: Learning OS V1

### Mục tiêu kinh doanh

- Chuyển ít nhất một đối tác từ lớp đơn sang gói nhiều cohort/cấp quyền.
- Có case study giáo dục được phép công bố.
- Có lịch triển khai quý tiếp theo.
- Hoàn tất quyết định thương mại về Grapuco nếu hai bên tiếp tục.
- Có 0–1 pilot doanh nghiệp được nghiệm thu hoặc đang chạy.

### Mục tiêu kỹ thuật

Release 3 — Path & Evidence V1:

- curriculum graph;
- competency graph;
- prerequisite;
- Path Engine rule-based;
- portfolio/evidence V1 hoàn chỉnh;
- coach load và escalation;
- event stream;
- report accuracy check;
- integration gateway V1;
- repository/project evidence cho Vibe Coding.

### Cổng kết thúc 90 ngày

- Có thể kích hoạt một trường mới theo playbook chuẩn.
- Chương trình, dữ liệu và báo cáo không phụ thuộc thao tác copy thủ công.
- Có Path V1 chạy được cho ít nhất một chương trình.
- Có unit economics sơ bộ theo từng dòng sản phẩm.
- Có quyết định rõ: tăng tốc, giữ quy mô hoặc sửa mô hình.

---

## 8. Lộ trình tháng 4–12

## Giai đoạn 4 — Tháng 4–6: đóng gói và nhân rộng có kiểm soát

### Kinh doanh

- Chuẩn hóa gói trường mua cohort, cấp quyền, nền tảng và đào tạo coach nguồn.
- Mở rộng qua đối tác phân phối giáo dục.
- Xây một node triển khai mẫu tại trường/đơn vị đối tác.
- Chuyển doanh thu từ lớp đơn sang gói nhiều cohort và gia hạn.
- Chỉ phát triển doanh nghiệp bằng các case/pilot có khả năng lặp lại.

### Kỹ thuật

Release 4:

- Path Engine V1 ổn định;
- coach console;
- capacity và workshop scheduling cơ bản;
- licensing/usage report;
- partner onboarding;
- multi-cohort analytics;
- portfolio showcase;
- data export và retention control;
- tenant isolation hardening.

### Kết quả cần có

- Thời gian kích hoạt trường mới giảm rõ so với tháng đầu.
- Trường có thể tự thực hiện một phần onboarding và theo dõi.
- Nội dung được phiên bản hóa và cấp quyền đúng phạm vi.

## Giai đoạn 5 — Tháng 7–9: Hub–Node và add-on

### Kinh doanh

- Thử nghiệm Hub–Node: một trung tâm lõi hỗ trợ nhiều điểm triển khai.
- Bán workshop/lab chuyên gia.
- Bán add-on Vibe Coding nâng cao nếu Grapuco sẵn sàng.
- Chuyển đối tác tốt thành hợp tác năm học hoặc nhiều chương trình.
- Phát triển tài trợ cohort hoặc lab từ doanh nghiệp có chọn lọc.

### Kỹ thuật

Release 5:

- scheduling/capacity nâng cao;
- coach load balancing;
- workshop/lab management;
- Grapuco adapter nếu hợp đồng đã ký;
- repository consent;
- async job, webhook, cache và fallback;
- Path Engine V2 data-informed thử nghiệm;
- event warehouse/dashboard chất lượng.

### Kết quả cần có

- Nền tảng vận hành được khi Grapuco tắt.
- Có báo cáo tải coach và specialist.
- Có sản phẩm Vibe Coding với codebase map được lưu như evidence.

## Giai đoạn 6 — Tháng 10–12: doanh thu lặp lại và AI co-learner pilot

### Kinh doanh

- Gia hạn chương trình/nền tảng theo năm học.
- Chuẩn hóa bảng giá theo capacity, active learner và phạm vi dịch vụ.
- Chọn các sản phẩm đủ điều kiện mở rộng năm hai.
- Dừng hoặc hợp tác ngoài với sản phẩm không tạo lợi thế.
- Có kế hoạch Hub–Node năm hai dựa trên dữ liệu thật.

### Kỹ thuật

Release 6:

- advanced licensing;
- partner portal;
- white-label nhẹ nếu có hợp đồng;
- Path Engine V2;
- AI co-learner pilot có source control, guardrail, cost metering và human handoff;
- data warehouse/reporting;
- disaster recovery và security review;
- đánh giá module cần tách service.

### Kết quả cuối năm

- Có Learning OS V1 vận hành đa trường.
- Có doanh thu lặp lại từ cấp quyền/nền tảng/gia hạn.
- Có curriculum graph, competency graph, Path Engine và portfolio.
- Có playbook kích hoạt trường và đào tạo coach.
- Có dữ liệu để chốt kế hoạch quy mô năm hai.

---

## 9. Tổ chức đội ngũ

Cơ cấu 5 người core `[cần anh Đức gán tên cụ thể]`:

| Vai trò | Trách nhiệm chính |
|---|---|
| Founder/CEO/Product Owner | quan hệ trường, sản phẩm, giá, hợp đồng lớn, quyết định ưu tiên |
| Tech Lead/Full-stack | kiến trúc, backend/frontend, CI/CD, chất lượng kỹ thuật |
| Learning Product Lead | chuyển chương trình thành activity/rubric/evidence, kiểm soát học thuật |
| Operations & Customer Success | onboarding trường/người học, coach, hỗ trợ, báo cáo, đối soát |
| Growth & Partnership | tuyển sinh, lớp cộng đồng, đối tác phân phối, case study, pipeline |

Mạng lưới ngoài:

- giảng viên/workshop leader;
- coach/trợ giảng;
- chuyên gia nội dung;
- pháp lý/kế toán;
- nhà cung cấp hạ tầng;
- Grapuco và các đối tác công nghệ.

Một người có thể kiêm nhiệm trong giai đoạn đầu, nhưng mỗi deliverable phải có một người chịu trách nhiệm cuối cùng.

---

## 10. Nhịp quản trị hằng tuần

## 10.1. Họp điều hành đầu tuần

Chốt:

- trường/lớp nào phải kích hoạt;
- tiền nào phải thu;
- sản phẩm/học liệu nào phải giao;
- release kỹ thuật nào phục vụ mốc đó;
- rủi ro và người xử lý.

## 10.2. Release giữa hoặc cuối tuần

- release nhỏ, có rollback;
- không dồn nhiều tính năng vào cuối tháng;
- ưu tiên sửa lỗi tạo tải vận hành.

## 10.3. Báo cáo cuối tuần

Một dashboard thống nhất gồm:

### Kinh doanh

- trường/cơ sở ở từng trạng thái;
- lớp đã mở;
- người thanh toán;
- tiền đã thu;
- công nợ;
- đề xuất/cấp quyền;
- tỷ lệ nâng cấp sản phẩm.

### Vận hành giáo dục

- người bắt đầu;
- tham gia;
- nộp bài;
- hoàn thành;
- ticket;
- giờ coach;
- chất lượng sản phẩm;
- ngoại lệ.

### Kỹ thuật

- active user;
- lỗi;
- uptime;
- thời gian phản hồi;
- deploy;
- ticket kỹ thuật;
- thời gian dev theo module;
- chi phí cloud/API;
- event coverage.

---

## 11. Stage-Gate kép

Không tăng quy mô chỉ dựa trên doanh số hoặc chỉ dựa trên việc phần mềm chạy được.

## Gate A — Mở đợt cohort tiếp theo

Cần đồng thời:

- trường và danh sách người học đã chốt;
- học phí/hợp đồng rõ;
- giảng viên/coach sẵn sàng;
- học liệu và rubric đủ dùng;
- hệ thống hoặc quy trình dự phòng phục vụ được;
- không có lỗi dữ liệu nghiêm trọng.

## Gate B — Mở rộng lên nhiều trường

Cần đồng thời:

- onboarding có playbook;
- báo cáo trường chính xác;
- tenant isolation ổn định;
- ticket/người và giờ hỗ trợ nằm trong trần do đội chốt;
- dòng tiền không âm vì tăng số người học;
- có người phụ trách mỗi trường.

## Gate C — Bán cấp quyền/nền tảng

Cần đồng thời:

- chương trình có version;
- entitlement và phạm vi quyền rõ;
- có báo cáo usage;
- có chính sách hỗ trợ;
- hợp đồng quy định IP, dữ liệu và gia hạn;
- chi phí phục vụ đã được đo.

## Gate D — Tích hợp Grapuco

Cần đồng thời:

- hợp đồng/scope;
- giá/quota/SLA;
- consent và loại dữ liệu;
- quyền sở hữu code;
- webhook/API ổn định;
- fallback;
- lớp Vibe Coding không phụ thuộc tích hợp.

## Gate E — AI co-learner

Cần đồng thời:

- curriculum/evidence có cấu trúc;
- nguồn học liệu kiểm soát được;
- logging;
- guardrail;
- human handoff;
- cost metering;
- tiêu chí đánh giá tác động học tập.

---

## 12. Quản trị tài chính

Không sử dụng lại các con số chi phí từ hệ thống cũ.

Phải tách:

1. Chi phí trực tiếp giao lớp.
2. Chi phí phát triển nền tảng.
3. Chi phí vận hành nền tảng.
4. Chi phí bán hàng và kích hoạt đối tác.
5. Chi phí chuyên gia/coach.
6. Chi phí nhà cung cấp ngoài và Grapuco.
7. Chi phí pháp lý, thuế, hóa đơn và thanh toán.

Nguyên tắc:

- không lấy giá trị hợp đồng thay cho tiền đã thu;
- không dùng doanh thu cohort để che chi phí build nền tảng;
- mỗi release lớn phải có business milestone đi kèm;
- ngân sách kỹ thuật được rà soát theo tiền thực thu, runway và tải thật;
- phí Grapuco là chi phí đối tác/add-on riêng;
- không bán add-on dưới giá thành chỉ để tăng số người dùng.

Bảng cần cập nhật hằng tháng:

| Dòng | Tiền đã thu | Chi phí trực tiếp | Đóng góp | Chi phí build/run phân bổ | Công nợ |
|---|---:|---:|---:|---:|---:|
| Lớp cộng đồng | | | | | |
| Trường/tổ chức | | | | | |
| Cấp quyền/nền tảng | | | | | |
| Doanh nghiệp | | | | | |
| Add-on/Grapuco | | | | | |

---

## 13. Rủi ro chính

| Rủi ro | Kiểm soát |
|---|---|
| Bán nhanh hơn khả năng giao | Stage-Gate kép; tách KPI ký, thu và giao |
| Nền tảng chậm làm trì hoãn lớp | quy trình/SaaS tạm thời; MVP theo nhu cầu thật |
| Xây quá nhiều tính năng | feature phải gắn business milestone |
| Một dev trở thành nút thắt | modular monolith; giới hạn WIP; thuê theo module khi cần |
| Chương trình khó nhập nền tảng | curriculum schema và migration từ tài liệu ngay tuần 1 |
| Báo cáo sai | event/audit; đối chiếu thủ công giai đoạn đầu |
| Coach quá tải | đo ticket, giờ hỗ trợ và escalation |
| Cấp quyền làm rò rỉ IP | entitlement, version, hợp đồng và usage log |
| Grapuco gián đoạn | adapter và fallback; không critical path |
| Chi phí AI/cloud tăng | metering, quota và model routing |
| AI làm thay người học | co-learner design, rubric và human review |
| Doanh nghiệp kéo lệch roadmap | pilot nhỏ, backlog riêng, không tùy chỉnh lõi miễn phí |
| Dữ liệu cá nhân bị chia sẻ sai | consent, tenant isolation, scope và audit |

---

## 14. Các quyết định anh Đức cần chốt

1. Ngày bắt đầu chính thức của tuần 1.
2. Danh sách 2–3 trường đợt đầu và số người học từng trường.
3. Trường hay dự án trực tiếp thu học phí.
4. Giá cụ thể của khóa 4 buổi, 12 buổi và hai chương trình sinh viên.
5. Phạm vi gói cấp quyền đầu tiên.
6. Tên và vai trò cụ thể của 5 người core.
7. Trần ngân sách build nền tảng trong 90 ngày.
8. Stack kỹ thuật cuối cùng nếu khác đề xuất.
9. Đầu mối và mô hình thương mại với Grapuco.
10. Trần tải hỗ trợ/coach trước khi mở rộng.

Các điểm chưa chốt không được tự điền thành dữ liệu thật. Tuy nhiên chúng không làm dừng các việc có thể thực hiện ngay: chuẩn hóa chương trình, chốt trường, xây domain model và Classroom MVP.

---

## 15. Tiêu chí thành công sau 12 tháng

Kế hoạch được xem là thành công khi đạt phần lớn các điều kiện sau:

- các chương trình cốt lõi được triển khai lặp lại tại nhiều trường;
- có doanh thu từ cohort và tổ chức giáo dục;
- có doanh thu lặp lại từ cấp quyền, nền tảng hoặc gia hạn;
- thời gian kích hoạt trường mới giảm theo từng quý;
- nền tảng quản lý được đa trường, đa cohort và đa chương trình;
- chương trình được biểu diễn thành graph hoạt động–năng lực–prerequisite;
- Path Engine V1 hoạt động trong ít nhất một chương trình;
- người học có portfolio và evidence;
- trường có dashboard và báo cáo;
- coach/giảng viên nguồn có playbook;
- Grapuco được tích hợp an toàn hoặc được xác định rõ là chưa cần;
- có dữ liệu unit economics, chất lượng và công suất để lập kế hoạch năm hai.

**Nguyên tắc cuối cùng:** kinh doanh tạo dữ liệu và nguồn lực cho kỹ thuật; kỹ thuật làm tăng chất lượng, công suất và doanh thu lặp lại cho kinh doanh. Không bên nào được chạy tách khỏi bên còn lại.