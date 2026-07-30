# AGENTS.md — Bối cảnh chung cho các trợ lý AI làm việc trên repo này

> **Đọc file này trước tiên, trước mọi file khác trong repo.**
>
> File này là nguồn sự thật điều hành. Khi mâu thuẫn với tài liệu khác, ưu tiên file này cho đến khi tài liệu kia được sửa.

Cập nhật lần cuối: 2026-07-30  
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

Không được mặc định kế thừa:

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

- add-on cho chương trình Vibe Coding;
- trực quan hóa module, dependency, call graph và flow;
- hỗ trợ spec-first và phân tích tác động thay đổi;
- cung cấp context có cấu trúc cho AI coding tools;
- hỗ trợ đội kỹ thuật hiểu codebase mới.

Nguyên tắc bắt buộc:

- tích hợp qua API, MCP hoặc cơ chế được hai bên thỏa thuận;
- có hợp đồng, phạm vi, giá, SLA và trách nhiệm hỗ trợ riêng;
- không mặc định chia sẻ dữ liệu cá nhân người học;
- chỉ gửi code hoặc dữ liệu dự án được cho phép;
- nền tảng vẫn vận hành khi Grapuco chưa tích hợp hoặc gián đoạn;
- quyền sở hữu code, học liệu và dữ liệu phải được quy định rõ.

### 1.3. Chiến lược thị trường: education-first

Trong giai đoạn đầu, dự án **không đặt doanh nghiệp làm nguồn doanh thu chính** vì:

- khó tiếp cận số lượng lớn trong thời gian ngắn;
- chu kỳ ra quyết định và ký hợp đồng thường dài;
- yêu cầu khảo sát, tùy chỉnh và hỗ trợ cao;
- doanh thu ban đầu không chắc tương xứng với chi phí bán hàng và triển khai;
- chưa có đủ case study để bán các gói có giá trị cao.

Thứ tự ưu tiên thị trường:

1. **Cá nhân và lớp cộng đồng trong giáo dục:** giáo viên, giảng viên, sinh viên và người đi làm.
2. **Trường học, trung tâm và tổ chức giáo dục:** đóng vai trò kênh phân phối B2B2C và khách hàng tổ chức.
3. **Cấp quyền chương trình, đào tạo giảng viên nguồn và nền tảng:** tạo doanh thu lặp lại từ tổ chức giáo dục.
4. **Doanh nghiệp:** tiếp cận có chọn lọc bằng workshop, khảo sát và pilot nhỏ; chỉ mở rộng sau khi có case study.

Mục tiêu là dùng giáo dục để tạo dòng tiền, dữ liệu vận hành, uy tín và sản phẩm chuẩn hóa; doanh nghiệp là tầng doanh thu giá trị cao phát triển sau.

### 1.4. Trạng thái triển khai

- Đã có các trường đại học, cao đẳng và cơ sở giáo dục sẵn sàng phối hợp.
- Không bắt đầu từ bước tìm trường đầu tiên.
- Nhiệm vụ trước mắt là kích hoạt các đơn vị đã sẵn sàng, tổ chức lớp, thu học phí/doanh thu và xây nền tảng song song.
- Không chờ nền tảng hoàn chỉnh mới khai giảng.
- Các cơ hội doanh nghiệp vẫn được tiếp nhận, nhưng không được dùng làm giả định nền cho dòng tiền tháng đầu.

### 1.5. KPI tháng đầu

Ưu tiên chính thức:

- kích hoạt 2–3 trường/cơ sở giáo dục;
- bắt đầu đào tạo từ tuần thứ hai;
- 200–300 sinh viên thanh toán và bắt đầu học;
- tối thiểu 2 khóa dành cho giáo viên/giảng viên hoặc cán bộ giáo dục được ký và có lịch;
- tối thiểu 1 lớp ngắn hạn 4 buổi được mở hoặc bán cho đơn vị giáo dục;
- ít nhất 1 gói chương trình sinh viên được bán, cấp quyền hoặc triển khai theo thỏa thuận;
- doanh nghiệp: thực hiện 3–5 cuộc trao đổi nhu cầu và tối đa 1 pilot nếu có cơ hội phù hợp; **không đặt KPI bắt buộc phải có doanh thu doanh nghiệp trong tháng đầu**.

`ke-hoach/muc-tieu-thang-1.md` là nguồn ưu tiên cho KPI chi tiết.

---

## 2. Bối cảnh sản phẩm

### 2.1. Chương trình cốt lõi

Hai chương trình sinh viên:

1. **Ứng dụng AI theo khung năng lực** — 12–15 buổi, dành cho sinh viên không chuyên.
2. **Phát triển ứng dụng và tự động hóa với AI – Vibe Coding** — 12–15 buổi, tạo website, ứng dụng, workflow hoặc AI agent có thể chạy.

Các nhóm chương trình giáo dục:

- AI cho giáo viên phổ thông: bản 4 buổi và bản 12 buổi;
- AI cho giảng viên đại học, cao đẳng và giáo dục nghề nghiệp;
- AI+ / AIx trong chương trình đào tạo;
- đào tạo giảng viên nguồn;
- STEAM và các môn mới theo đơn đặt hàng;
- workshop và khóa ngắn hạn có sản phẩm đầu ra.

Các chương trình doanh nghiệp được giữ trong danh mục nhưng ở trạng thái phát triển có chọn lọc:

- workshop nhận thức và AI foundation;
- khảo sát quy trình/AI readiness;
- đào tạo theo phòng ban;
- pilot workflow, agent hoặc công cụ nội bộ;
- triển khai mở rộng sau khi pilot được nghiệm thu.

### 2.2. Thang sản phẩm

Mỗi nhóm khách hàng nên được dẫn qua thang sản phẩm:

> Nội dung miễn phí → workshop ngắn → khóa 4 buổi → khóa chuyên sâu → cấp quyền/nền tảng → tư vấn hoặc triển khai riêng.

Với giáo dục, ưu tiên chuẩn hóa để một chương trình có thể được bán theo nhiều cấu hình:

- lớp cộng đồng;
- lớp do trường tập hợp người học;
- trường mua trọn gói;
- trường cấp quyền và tự tổ chức;
- đào tạo giảng viên nguồn;
- nền tảng và báo cáo đi kèm.

### 2.3. Nền tảng mới

Phạm vi lõi giai đoạn đầu:

- quản lý đơn vị, chương trình, cohort và người học;
- học liệu, nhiệm vụ, bài tập và nộp sản phẩm;
- rubric, chấm điểm và hồ sơ minh chứng;
- điểm danh, tiến độ và báo cáo;
- phân quyền quản trị, giảng viên, điều phối viên và người học;
- hỗ trợ tích hợp dịch vụ ngoài qua API/MCP;
- nhật ký hoạt động và kiểm soát truy cập.

Không biến danh sách tính năng thành lý do trì hoãn lớp. Giai đoạn đầu có thể dùng quy trình thủ công hoặc SaaS tạm thời.

### 2.4. Nguyên tắc kiến trúc

- **Greenfield:** xây mới, không phụ thuộc codebase cũ.
- **Modular:** phân hệ có thể phát triển và thay thế độc lập.
- **API-first:** sẵn sàng kết nối đối tác.
- **Data ownership:** dữ liệu học tập do dự án và đơn vị giáo dục kiểm soát theo thỏa thuận.
- **Human-in-the-loop:** AI hỗ trợ, con người chịu trách nhiệm cuối cùng.
- **Vendor independence:** không để đối tác ngoài trở thành điểm lỗi duy nhất.

---

## 3. Mô hình thương mại ưu tiên

### 3.1. Dòng doanh thu chính giai đoạn đầu

1. Lớp cộng đồng và lớp theo cohort cho giáo viên, giảng viên, sinh viên.
2. Đào tạo trực tiếp cho trường, khoa, trung tâm và tổ chức giáo dục.
3. Cấp quyền chương trình, học liệu và đào tạo giảng viên nguồn.
4. Phí nền tảng, báo cáo và hỗ trợ vận hành đi kèm các chương trình giáo dục.

### 3.2. Dòng doanh thu phát triển sau

- đào tạo và tư vấn doanh nghiệp;
- khảo sát AI readiness;
- pilot workflow/agent;
- triển khai công cụ nội bộ;
- gói Vibe Coding có Grapuco;
- white-label và tích hợp sâu.

### 3.3. Tỷ trọng định hướng

Các tỷ trọng dưới đây là `[giả định quản trị]`, không phải cam kết doanh thu:

- giai đoạn đầu: 50–60% từ cá nhân/cohort, 25–35% từ tổ chức giáo dục, 10–20% tối đa từ doanh nghiệp và nguồn khác;
- khi đã có case study: tăng dần tỷ trọng tổ chức và doanh nghiệp, giảm phụ thuộc vào lớp bán lẻ.

Không được đưa doanh thu doanh nghiệp chưa có hợp đồng vào kịch bản cơ sở.

### 3.4. Nguyên tắc ghi nhận

Không được nhầm:

- học phí gộp với doanh thu dự án;
- giá trị hợp đồng với tiền đã thu;
- doanh thu với đóng góp;
- hợp đồng đã ký với khóa đã giao xong;
- cơ hội bán hàng với doanh thu dự kiến chắc chắn.

---

## 4. Cách tiếp cận doanh nghiệp

Doanh nghiệp đi theo lộ trình giảm rủi ro:

1. Workshop hoặc buổi chia sẻ ngắn.
2. Khảo sát nhu cầu và quy trình.
3. Đào tạo nhóm nhỏ hoặc theo phòng ban.
4. Pilot một workflow, agent hoặc công cụ nội bộ.
5. Đo kết quả, nghiệm thu và xây case study.
6. Chỉ sau đó mới mở rộng triển khai.

Không bán ngay dự án lớn khi chưa hiểu dữ liệu, quy trình, người chịu trách nhiệm và tiêu chí thành công.

KPI doanh nghiệp giai đoạn đầu nên là:

- số cuộc trao đổi chất lượng;
- số bài toán được xác định rõ;
- số pilot có phạm vi và tiêu chí nghiệm thu;
- số case study đủ điều kiện công bố;
- doanh thu và đóng góp thực thu, không phải tổng pipeline.

---

## 5. Nguyên tắc lập kế hoạch

1. Bắt đầu từ các trường và cộng đồng giáo dục đã sẵn sàng.
2. Dùng chương trình đã soạn để khai giảng nhanh.
3. Ưu tiên khóa ngắn hạn để tạo dòng tiền và dẫn sang khóa chuyên sâu.
4. Tổ chức giáo dục là khách hàng và đồng thời là kênh phân phối.
5. Doanh nghiệp không phải KPI doanh thu bắt buộc trong tháng đầu.
6. Nền tảng mới được xây song song, ưu tiên tính năng phục vụ lớp thật.
7. Tích hợp đối tác ngoài theo hợp đồng và interface rõ ràng.
8. Mọi số chưa có căn cứ phải ghi `[giả định]`.
9. Mọi số thực tế phải ghi nguồn, ngày và trạng thái thu tiền.
10. Không mở rộng sản phẩm khi chưa đo được chi phí giao hàng và chất lượng.

---

## 6. Tài liệu ưu tiên

1. `AGENTS.md`.
2. `ke-hoach/muc-tieu-thang-1.md`.
3. `ke-hoach/ke-hoach-kinh-doanh-12-thang.md`.
4. `docs/mo-hinh-doanh-thu.md`.
5. `ke-hoach/unit-economics.md`.
6. `ke-hoach/chi-phi-va-dong-tien.md`.
7. `san-pham/danh-muc-san-pham-dao-tao.md`.
8. `nen-tang/mo-hinh-nen-tang.md`.
9. `docs/doi-tac-grapuco.md`.

Các tài liệu trong `trao-doi/` dùng để truy vết quyết định, không thay thế nguồn điều hành hiện hành.