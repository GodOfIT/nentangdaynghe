# Kế hoạch kinh doanh và triển khai 12 tháng

> **Phiên bản điều hành:** 2026-07-30  
> **Phạm vi:** 12 tháng vận hành đầu tiên.  
> **Nguồn ưu tiên:** `AGENTS.md` và `ke-hoach/muc-tieu-thang-1.md`.

## 1. Tóm tắt điều hành

Dự án đã có:

- các trường đại học, cao đẳng và cơ sở giáo dục sẵn sàng phối hợp;
- các chương trình giảng dạy do anh Đức đã soạn;
- khả năng triển khai khóa AI, vibe coding, chương trình cho giảng viên và doanh nghiệp.

Dự án **không kế thừa** nền tảng, source code, dữ liệu, workflow, tài khoản hoặc hệ thống từ dự án khác. SOPai, Arkon và henlich.vn không thuộc kế hoạch này.

Nền tảng được xây mới hoàn toàn và phát triển song song với lớp học thật. Trong giai đoạn đầu, phần mềm chưa có có thể được thay bằng quy trình thủ công hoặc công cụ SaaS tạm thời, nhưng kiến trúc đích phải do dự án kiểm soát.

Grapuco được đưa vào với tư cách **đối tác công nghệ bên ngoài**. Grapuco có thể hỗ trợ chương trình Vibe Coding và quá trình phát triển codebase, nhưng không phải tài sản nội bộ, không nắm dữ liệu người học mặc định và không được trở thành dependency bắt buộc.

### Sáu dòng triển khai năm đầu

1. Ứng dụng AI theo khung năng lực cho sinh viên không chuyên.
2. Phát triển ứng dụng và tự động hóa với AI – Vibe Coding.
3. Đào tạo AI trực tiếp cho giảng viên và cơ sở giáo dục.
4. Đào tạo, tư vấn và triển khai AI cho doanh nghiệp.
5. Cấp quyền sử dụng chương trình và nền tảng cho trường/đối tác.
6. Đào tạo giáo viên triển khai STEAM và các môn mới khi có đơn vị đặt hàng.

---

## 2. Nguyên tắc nền tảng

### 2.1. Chỉ kế thừa chương trình giảng dạy

Tài sản kế thừa gồm:

- đề cương;
- nội dung và cấu trúc buổi học;
- slide, video, bài đọc;
- bài tập, rubric và ngân hàng câu hỏi;
- sản phẩm đầu ra;
- khung năng lực và phương pháp đánh giá.

Không kế thừa:

- source code;
- database;
- hạ tầng;
- tài khoản;
- domain;
- CRM/LMS;
- RAG/MCP/agent;
- workflow/SOP;
- quy trình thanh toán hoặc booking.

### 2.2. Triển khai trước, hoàn thiện nền tảng song song

- Không dành nhiều tháng để xây phần mềm rồi mới khai giảng.
- Dùng lớp học thật để xác định thứ tự phát triển tính năng.
- Mỗi chức năng mới phải gắn với một vấn đề vận hành thật.
- Không xây tính năng dài hạn nếu chưa có người dùng hoặc đơn vị yêu cầu.

### 2.3. Greenfield nhưng không xây mọi thứ từ đầu

Greenfield nghĩa là không phụ thuộc hệ thống cũ, không có nghĩa là phải tự code toàn bộ.

Dự án có thể:

- dùng dịch vụ cloud;
- tích hợp cổng thanh toán;
- dùng email/SMS/Zalo của nhà cung cấp;
- dùng công cụ video, storage, analytics;
- tích hợp Grapuco;
- mua hoặc thuê các module phổ thông.

Dự án tự xây phần tạo khác biệt:

- quản lý chương trình và cohort đa trường;
- rubric và hồ sơ minh chứng;
- dữ liệu năng lực;
- báo cáo cho trường;
- orchestration các dịch vụ AI và đối tác;
- trải nghiệm Vibe Coding và sản phẩm đầu ra.

### 2.4. Độc lập nhà cung cấp

- Mọi tích hợp phải có interface rõ ràng.
- Có phương án thay thế hoặc tắt tích hợp.
- Dữ liệu cốt lõi nằm trong hệ thống do dự án kiểm soát.
- Không để Grapuco hoặc một dịch vụ ngoài trở thành điểm lỗi duy nhất.

---

## 3. Khách hàng và thị trường

### 3.1. Khối trường học

- Đại học.
- Cao đẳng.
- Trung cấp và cơ sở giáo dục nghề nghiệp.
- Trường phổ thông khi triển khai STEAM hoặc AI.

Trường có thể mua:

- lớp sinh viên;
- khóa giảng viên;
- quyền sử dụng chương trình;
- nền tảng;
- gói AI+ / AIx;
- báo cáo và dữ liệu năng lực;
- đào tạo giảng viên nguồn.

### 3.2. Doanh nghiệp

Doanh nghiệp mua:

- đào tạo AI theo phòng ban;
- đào tạo Vibe Coding;
- workflow/agent mẫu;
- tư vấn áp dụng;
- triển khai sau đào tạo.

### 3.3. Người học

- Sinh viên không chuyên AI/công nghệ.
- Sinh viên muốn tạo sản phẩm số.
- Người lao động cần năng lực AI và tự động hóa.
- Giáo viên/giảng viên cần tích hợp AI vào giảng dạy.

---

## 4. Danh mục sản phẩm

## 4.1. Ứng dụng AI theo khung năng lực

### Đối tượng

Sinh viên đại học, cao đẳng và trung cấp không chuyên AI.

### Thời lượng

12–15 buổi.

### Cấu trúc định hướng

1. Hiểu AI, khả năng và giới hạn.
2. Mô tả yêu cầu và giao việc cho AI.
3. Tìm kiếm, nghiên cứu và tổng hợp.
4. Kiểm chứng và nhận diện lỗi.
5. AI trong học tập và nghiên cứu.
6. AI trong công việc văn phòng và nghề nghiệp.
7. Làm việc với dữ liệu và tài liệu.
8. Sản xuất nội dung và thuyết trình.
9. Phối hợp AI với công cụ làm việc nhóm.
10. Đạo đức, dữ liệu, bản quyền và liêm chính học thuật.
11. Workflow cá nhân.
12. Dự án cuối khóa.
13–15. Hoàn thiện sản phẩm và đánh giá.

### Đầu ra

- bài tập có minh chứng;
- sản phẩm hoặc workflow ứng dụng AI;
- kết quả đánh giá theo khung năng lực;
- hồ sơ năng lực cơ bản;
- đề xuất lộ trình tiếp theo.

## 4.2. Vibe Coding

### Đối tượng

Sinh viên và người học không chuyên lập trình.

### Thời lượng

12–15 buổi.

### Nội dung

- xác định vấn đề và người dùng;
- viết yêu cầu và đặc tả;
- thiết kế dữ liệu và luồng;
- dùng AI tạo giao diện và chức năng;
- Git/GitHub;
- kiểm thử và sửa lỗi;
- tích hợp API;
- bảo mật và quyền truy cập cơ bản;
- triển khai sản phẩm;
- tài liệu hóa;
- trình bày kiến trúc và demo.

### Đầu ra

Một trong các sản phẩm:

- website;
- ứng dụng nhỏ;
- công cụ nội bộ;
- workflow tự động hóa;
- AI agent;
- sản phẩm số theo chuyên ngành.

### Liên kết Grapuco

Grapuco có thể được dùng như lớp công cụ bổ sung để:

- kết nối repository;
- hiển thị cấu trúc codebase;
- phân tích module, dependency, call graph và flow;
- hỗ trợ spec-first;
- phân tích tác động thay đổi;
- hỗ trợ AI coding tools nhận context;
- trình bày kiến trúc sản phẩm cuối khóa.

Grapuco không thay thế:

- GitHub;
- môi trường phát triển;
- công cụ deploy;
- tiêu chí đánh giá;
- trách nhiệm kiểm tra code của giảng viên/người học.

## 4.3. Đào tạo giảng viên

Các gói:

- AI Essentials for Educators;
- AI-Powered Teaching;
- Faculty AI Builder;
- AI+ Curriculum Sprint;
- AI Pedagogy Lab;
- AI Tutor & Learning Data Pilot.

Khung giá đào tạo trực tiếp: **20–50 triệu đồng/khóa**.

Các gói tư vấn, thiết kế chương trình, nền tảng hoặc trợ lý AI được báo giá riêng.

## 4.4. Đào tạo doanh nghiệp

Các gói:

- Enterprise AI Foundation;
- AI Workflow for Teams;
- AI Agent Builder;
- Vibe Coding for Internal Tools;
- đào tạo + triển khai theo phòng ban.

Khung giá: **20–100 triệu đồng/khóa**, chưa gồm dự án triển khai riêng.

## 4.5. Cấp quyền chương trình

Ba cấu hình:

1. **Nội dung:** quyền sử dụng chương trình và học liệu.
2. **Nội dung + nền tảng:** thêm quản lý người học, bài tập, rubric và báo cáo.
3. **Triển khai đầy đủ:** tùy chỉnh, đào tạo giảng viên nguồn, hỗ trợ và báo cáo.

Không chuyển toàn bộ quyền sở hữu trí tuệ nếu chưa có giá và thỏa thuận tương ứng.

## 4.6. STEAM và môn mới

- Đào tạo năng lực giáo viên.
- Học liệu và hướng dẫn tổ chức lớp.
- Thí điểm 1–2 môn theo đơn đặt hàng.
- Chuyên gia thuê ngoài kiểm duyệt.
- Không mặc định xây thư viện hàng chục môn ngay năm đầu.

---

## 5. Mô hình thương mại

### 5.1. Đào tạo giảng viên

> Giá trị hợp đồng = phí đào tạo + phí tùy chỉnh + phí sản phẩm/hỗ trợ bổ sung.

### 5.2. Đào tạo doanh nghiệp

> Giá trị hợp đồng = phí khảo sát + phí đào tạo + phí tư vấn/triển khai/hỗ trợ.

### 5.3. Sinh viên online

> Học phí gộp = số người thanh toán × học phí thực thu.

> Doanh thu dự án = học phí gộp - phần chia sẻ - hoàn trả - phí thanh toán.

### 5.4. Cấp quyền

> Giá trị hợp đồng = phí quyền sử dụng + tùy chỉnh + nền tảng + onboarding + hỗ trợ.

### 5.5. Grapuco

Các mô hình có thể đàm phán:

- dự án mua license/quota từ Grapuco;
- trường/người học mua trực tiếp;
- bundle trong học phí;
- chia sẻ doanh thu;
- referral;
- gói doanh nghiệp riêng.

Chưa cộng doanh thu hoặc chi phí Grapuco vào dự báo trước khi có thỏa thuận chính thức.

---

## 6. Kiến trúc nền tảng mới

### 6.1. Các phân hệ lõi

1. Quản lý tổ chức và trường.
2. Quản lý chương trình và phiên bản.
3. Quản lý cohort và lớp.
4. Quản lý người học và phân quyền.
5. Học liệu và nhiệm vụ.
6. Nộp bài và sản phẩm.
7. Rubric và đánh giá.
8. Hồ sơ minh chứng và portfolio.
9. Điểm danh và tiến độ.
10. Báo cáo từng trường.
11. Thanh toán và đối soát hoặc tích hợp nhà cung cấp.
12. API/MCP integration gateway.
13. Audit log và quản trị dữ liệu.

### 6.2. Lớp tích hợp Grapuco

Nền tảng chỉ giữ:

- thông tin liên kết tài khoản hoặc project;
- trạng thái kết nối;
- metadata tối thiểu phục vụ lớp học;
- đường dẫn hoặc kết quả được phép lưu;
- quyền truy cập theo người dùng/cohort.

Không lưu hoặc chuyển code vượt quá phạm vi đã được cho phép.

### 6.3. Nguyên tắc dữ liệu

- dữ liệu người học không gửi cho Grapuco theo mặc định;
- repository chỉ kết nối khi người dùng/đơn vị cho phép;
- có cơ chế thu hồi quyền;
- ghi log hoạt động tích hợp;
- quy định rõ quyền sở hữu sản phẩm;
- có chính sách xóa và lưu trữ.

### 6.4. MVP tháng đầu

- trường, chương trình, cohort;
- người học và vai trò;
- học liệu;
- bài tập/nộp sản phẩm;
- rubric và điểm;
- tiến độ/điểm danh;
- báo cáo cơ bản;
- audit log tối thiểu.

Grapuco không phải điều kiện để MVP hoạt động.

---

## 7. Cơ cấu triển khai

### 7.1. Nhóm điều hành

- điều hành và quan hệ trường;
- quản lý sản phẩm/chương trình;
- vận hành lớp;
- tài chính và đối soát;
- quản lý đối tác.

### 7.2. Nhóm giảng dạy

- giảng viên chính;
- trợ giảng/điều phối viên;
- chuyên gia kiểm duyệt;
- giảng viên nguồn tại trường.

### 7.3. Nhóm nền tảng

- product owner;
- developer;
- thiết kế UX/UI khi cần;
- QA/test;
- hạ tầng và bảo mật có thể thuê ngoài.

Không mặc định kế thừa nhân sự hoặc vai trò từ dự án cũ. Quy mô đội được chốt riêng theo ngân sách và lịch trường.

### 7.4. Grapuco

Đầu mối đối tác ngoài chịu trách nhiệm:

- tài khoản và quyền truy cập;
- tài liệu tích hợp;
- hỗ trợ kỹ thuật;
- quota và billing;
- SLA;
- xử lý sự cố phía Grapuco.

Dự án chịu trách nhiệm:

- trải nghiệm trong khóa học;
- nội dung giảng dạy;
- hỗ trợ người học tuyến đầu;
- quyền và dữ liệu phía nền tảng;
- phương án thay thế khi dịch vụ gián đoạn.

---

## 8. Mục tiêu tháng đầu

| Nhóm | KPI |
|---|---:|
| Trường/cơ sở kích hoạt | **2–3** |
| Sinh viên thanh toán và bắt đầu học | **200–300** |
| Hợp đồng khóa giảng viên đã ký và có lịch | **2** |
| Hợp đồng khóa doanh nghiệp đã ký và có lịch | **2** |
| Gói chương trình sinh viên được cấp quyền/triển khai | **Ít nhất 1** |
| Nền tảng MVP mới | **Vận hành được cho đợt 1** |
| Phạm vi Grapuco | **Có quyết định/thỏa thuận hoặc kết luận chưa tích hợp** |
| Khai giảng | **Từ tuần thứ hai** |

Chi tiết tại `ke-hoach/muc-tieu-thang-1.md`.

---

## 9. Lộ trình 12 tháng

## Giai đoạn 1 — Tháng 1: triển khai đợt đầu

### Kinh doanh và đào tạo

- Kích hoạt 2–3 trường.
- Khai giảng 200–300 sinh viên.
- Ký và triển khai khóa giảng viên/doanh nghiệp.
- Chốt một gói cấp quyền hoặc triển khai chương trình.

### Nền tảng

- Xây MVP greenfield.
- Dùng quy trình thủ công cho phần chưa có.
- Thu yêu cầu từ lớp thật.

### Grapuco

- Chốt phạm vi kỹ thuật và thương mại.
- Thử nghiệm nhỏ trong Vibe Coding nếu đủ điều kiện.
- Không làm chậm khai giảng nếu tích hợp chưa xong.

## Giai đoạn 2 — Tháng 2–3: mở rộng các trường đã sẵn sàng

### Mục tiêu điều hành

- Tháng 2: 4–6 trường lũy kế, 400–600 sinh viên mới.
- Tháng 3: 8–12 trường lũy kế, 600–1.000 sinh viên mới.

Các số trên là mục tiêu công suất, được điều chỉnh theo danh sách trường và lịch thực tế; không phải phép kiểm chứng nhu cầu.

### Công việc

- chuẩn hóa onboarding trường;
- chuẩn hóa báo cáo;
- nâng cấp nền tảng đa trường/đa cohort;
- chuẩn hóa hai chương trình sinh viên;
- xây dashboard tài chính và công nợ;
- hoàn thiện tích hợp Grapuco nếu thử nghiệm đạt yêu cầu;
- xây phương án thanh toán/license Grapuco.

## Giai đoạn 3 — Tháng 4–6: đóng gói và nhân rộng

- 15–25 trường lũy kế `[mục tiêu công suất]`;
- 1.000–2.000 sinh viên mới/tháng `[mục tiêu công suất]`;
- chuẩn hóa 2–3 gói giảng viên;
- chuẩn hóa 2–3 gói doanh nghiệp;
- hoàn thiện ba cấu hình cấp quyền;
- triển khai AI+ Curriculum Sprint ở các trường phù hợp;
- xây mạng lưới chuyên gia;
- phát triển báo cáo năng lực;
- đưa Grapuco thành tùy chọn chính thức của Vibe Coding nếu hợp đồng và chất lượng đạt yêu cầu.

## Giai đoạn 4 — Tháng 7–9: mở rộng có kiểm soát

- 25–40 trường lũy kế `[mục tiêu công suất]`;
- 2.000–3.000 sinh viên mới/tháng `[mục tiêu công suất]`;
- mở thêm môn mới theo đơn đặt hàng;
- phát triển portfolio và hồ sơ minh chứng;
- triển khai AI Pedagogy Lab;
- thử nghiệm AI Tutor/Learning Data ở phạm vi phù hợp;
- mở rộng Grapuco sang gói doanh nghiệp hoặc giảng viên khi có nhu cầu.

## Giai đoạn 5 — Tháng 10–12: gia hạn và chuẩn bị năm hai

- 40–60 trường lũy kế `[mục tiêu công suất]`;
- 3.000–5.000 sinh viên mới/tháng `[mục tiêu công suất]`;
- bán gia hạn chương trình và nền tảng;
- chuyển khách đào tạo sang triển khai dài hạn;
- chuẩn hóa thư viện chương trình, rubric và case;
- đánh giá hiệu quả tài chính của Grapuco;
- chốt sản phẩm nào tự xây, mua, tích hợp hoặc dừng;
- lập kế hoạch năm hai từ dữ liệu thật.

---

## 10. Dashboard điều hành

### 10.1. Trường

- trường đã đồng ý;
- trường đã ký;
- trường đã khai giảng;
- số cohort;
- số người học;
- mức sử dụng nền tảng;
- báo cáo đã gửi.

### 10.2. B2B

- phạm vi đã chốt;
- hợp đồng;
- giá trị hợp đồng;
- tiền đã thu;
- khóa đã giao;
- chi phí trực tiếp;
- công nợ;
- gia hạn.

### 10.3. Sinh viên

- đăng ký;
- thanh toán;
- bắt đầu;
- điểm danh;
- nộp bài;
- hoàn thành;
- sản phẩm;
- phản hồi;
- học phí và chi phí.

### 10.4. Nền tảng

- tính năng đã phát hành;
- uptime;
- lỗi;
- ticket;
- thời gian dev;
- chi phí cloud;
- bảo mật và dữ liệu;
- mức sử dụng từng phân hệ.

### 10.5. Grapuco

- trạng thái hợp đồng;
- trạng thái tích hợp;
- người dùng/cohort sử dụng;
- quota;
- chi phí;
- lỗi và SLA;
- phản hồi;
- tác động tới chất lượng sản phẩm;
- doanh thu liên quan nếu có.

---

## 11. Tài chính

### 11.1. Nguyên tắc

- Không sử dụng chi phí hệ thống cũ.
- Toàn bộ chi phí nền tảng mới phải được dự toán lại.
- Chi phí Grapuco được ghi như chi phí nhà cung cấp/đối tác ngoài.
- Không coi giờ dev là miễn phí.
- Không nhầm giá trị hợp đồng với tiền mặt.

### 11.2. Nhóm chi phí

- đội ngũ;
- giảng viên/chuyên gia;
- nội dung và kiểm duyệt;
- phát triển nền tảng mới;
- cloud và công cụ;
- thanh toán và nhắn tin;
- hỗ trợ người học;
- bán hàng và đi lại;
- pháp lý, kế toán và thuế;
- Grapuco/license/API/support;
- đối tác khác.

### 11.3. Dự toán bắt buộc

Mỗi cohort/hợp đồng phải có:

- doanh thu dự kiến;
- lịch thu tiền;
- chi phí trực tiếp;
- phân bổ chi phí nền tảng;
- chi phí đối tác ngoài;
- đóng góp;
- công nợ.

---

## 12. Chất lượng

Mỗi chương trình phải có:

- chuẩn đầu ra;
- sản phẩm cuối khóa;
- rubric;
- tiêu chí hoàn thành;
- cơ chế khiếu nại/chấm lại;
- hồ sơ minh chứng;
- quy định dùng AI;
- dữ liệu cần thu;
- người chịu trách nhiệm cuối cùng.

Với Vibe Coding có Grapuco:

- không đánh giá chỉ dựa trên bản đồ code đẹp;
- phải chạy được sản phẩm;
- người học phải giải thích được cấu trúc và quyết định;
- phải kiểm tra quyền sử dụng code và dependency;
- phải có phương án không dùng Grapuco.

---

## 13. Rủi ro và kiểm soát

| Rủi ro | Kiểm soát |
|---|---|
| Xây nền tảng quá lớn trước khi cần | MVP theo lớp thật, backlog theo giá trị |
| Phần mềm mới chậm nhưng lớp phải chạy | quy trình thủ công/SaaS tạm thời |
| Bán vượt khả năng giao | tách KPI ký và giao; kế hoạch giảng viên |
| Thu tiền chậm | ứng trước, mốc thanh toán, dashboard công nợ |
| Dữ liệu người học không an toàn | phân quyền, log, tối thiểu hóa dữ liệu |
| Phụ thuộc Grapuco | optional integration, fallback, SLA |
| Grapuco làm tăng học phí/chi phí | thử nghiệm, quota, đo giá trị thực |
| Code người học bị chia sẻ ngoài phạm vi | consent, quyền truy cập tối thiểu, chính sách xóa |
| Tích hợp làm chậm khai giảng | không đặt Grapuco làm điều kiện bắt buộc |
| Nội dung mới thiếu chất lượng | chuyên gia kiểm duyệt và rubric |
| Nhiều trường nhưng vận hành phân tán | chuẩn hóa onboarding và báo cáo |

---

## 14. Các quyết định anh Đức cần chốt

1. Danh sách và lịch các trường đợt đầu.
2. Số sinh viên từng trường.
3. Cơ chế thu học phí/chia sẻ.
4. Pháp nhân ký hợp đồng và xuất hóa đơn.
5. Quy mô và ngân sách đội xây nền tảng mới.
6. Mức giá cấp quyền chương trình và nền tảng.
7. Grapuco là công cụ bắt buộc hay tùy chọn trong Vibe Coding.
8. Hình thức thương mại với Grapuco.
9. Dữ liệu/code nào được phép gửi sang Grapuco.
10. Điều khoản quyền sở hữu sản phẩm người học.
11. Phạm vi STEAM và các môn mới năm đầu.

Không AI nào tự điền các quyết định này.

---

## 15. Kết luận

Năm đầu được triển khai theo ba nguyên tắc:

1. **Dùng ngay các chương trình đã soạn để kích hoạt các trường đã sẵn sàng.**
2. **Xây nền tảng mới hoàn toàn, không kế thừa hệ thống cũ.**
3. **Hợp tác với Grapuco như một đối tác ngoài có ranh giới rõ, không biến thành phụ thuộc bắt buộc.**

Thành công không chỉ là số người học. Dự án phải chứng minh được khả năng triển khai nhiều trường, giao chương trình có chất lượng, vận hành nền tảng mới, tạo dữ liệu năng lực, kiểm soát dòng tiền và sử dụng đối tác ngoài mà vẫn giữ quyền kiểm soát sản phẩm và dữ liệu.
