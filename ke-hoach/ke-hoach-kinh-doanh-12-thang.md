# Kế hoạch kinh doanh và triển khai 12 tháng

> **Phiên bản điều hành:** 2026-07-30  
> **Phạm vi:** 12 tháng vận hành đầu tiên kể từ ngày dự án chính thức bắt đầu.  
> **Nguồn ưu tiên:** `AGENTS.md` và `ke-hoach/muc-tieu-thang-1.md`.  
> **Nguyên tắc:** khi tài liệu này mâu thuẫn với quyết định mới hơn trong `AGENTS.md`, ưu tiên `AGENTS.md`.

---

## 1. Tóm tắt điều hành

Dự án được phát triển theo định vị:

> **Nền tảng công nghệ, đào tạo, đánh giá năng lực và điều phối dữ liệu giúp nhà trường, người học và doanh nghiệp triển khai các chương trình AI, vibe coding và giáo dục nghề nghiệp có sản phẩm đầu ra.**

Trong 12 tháng đầu, dự án không cố triển khai toàn bộ tầm nhìn hệ sinh thái. Trọng tâm là xây được một mô hình kinh doanh có doanh thu sớm, vận hành được với đội core 5 người và tạo ra tài sản có khả năng tái sử dụng.

Sáu hướng triển khai năm đầu:

1. Đào tạo AI trực tiếp cho giảng viên và cơ sở giáo dục.
2. Đào tạo, tư vấn và triển khai AI cho doanh nghiệp.
3. Tự vận hành lớp AI online dành cho sinh viên.
4. Cấp quyền sử dụng khóa học cho trường hoặc đối tác.
5. Mở các chương trình vibe coding có sản phẩm đầu ra.
6. Thí điểm đào tạo năng lực giáo viên dạy STEAM trong phạm vi 1–2 môn khi có người trả tiền và phạm vi rõ ràng.

Kiến trúc vận hành mục tiêu là **AI-first**, nhưng luôn có cấu hình **hybrid dự phòng**. Không mở rộng quy mô chỉ vì bảng giả định cho kết quả tốt; mọi quyết định tăng trưởng phải dựa trên dữ liệu cohort, hợp đồng, tiền thực thu và năng lực giao hàng.

---

## 2. Mục tiêu của 12 tháng đầu

### 2.1. Mục tiêu kinh doanh

- Kiểm chứng được bốn dòng doanh thu chính:
  - đào tạo giảng viên;
  - đào tạo doanh nghiệp;
  - lớp sinh viên online;
  - cấp quyền sử dụng khóa học.
- Chuẩn hóa các sản phẩm có khả năng bán lặp lại.
- Xây được pipeline B2B có thể theo dõi từ cơ hội đến tiền thực thu.
- Chuyển một phần khách hàng đào tạo sang tư vấn, triển khai, gia hạn hoặc cấp quyền dài hạn.
- Không đặt chỉ tiêu doanh thu năm bằng phép nhân từ các giả định chưa kiểm chứng.

### 2.2. Mục tiêu sản phẩm

- Có tối thiểu một chương trình AI nền tảng dành cho sinh viên được kiểm chứng qua cohort thật.
- Có một chương trình vibe coding tạo được sản phẩm trình diễn.
- Chuẩn hóa 2–3 gói dành cho giảng viên và cơ sở giáo dục.
- Chuẩn hóa 2–3 gói dành cho doanh nghiệp.
- Có ba cấu hình cấp quyền khóa học rõ phạm vi và dịch vụ.
- Thí điểm 1–2 gói AI+ / AIx theo khoa, ngành hoặc nhóm học phần.
- Chỉ triển khai AI Tutor hoặc Learning Data Pilot sau khi tài sản kỹ thuật đã được audit.

### 2.3. Mục tiêu vận hành

- Audit và tái sử dụng SOPai, Arkon và henlich.vn.
- Tự động hóa các bước có tải lặp lại cao: đăng ký, mã học viên, đối soát, nhắc lịch, hỗ trợ tuyến đầu và chấm sơ bộ.
- Duy trì phương án hybrid để xử lý ngoại lệ và bảo vệ chất lượng.
- Theo dõi riêng tải vận hành, chi phí API, giờ điều phối, thời gian duyệt bài và tỷ lệ chuyển người thật.
- Không để một dev phải đồng thời xây mọi phân hệ.

### 2.4. Mục tiêu dữ liệu và chất lượng

Mỗi chương trình phải tạo được:

- dữ liệu đầu vào;
- dữ liệu tham gia;
- bài tập và sản phẩm;
- rubric và kết quả đánh giá;
- phản hồi của người dạy hoặc người duyệt;
- năng lực được minh chứng;
- nhu cầu học tiếp hoặc áp dụng tiếp.

Dữ liệu chỉ được thu khi có mục đích rõ ràng, phân quyền phù hợp và nguyên tắc bảo vệ thông tin cá nhân.

---

## 3. Định vị chiến lược

### 3.1. Không chỉ là một LMS

Nền tảng không cạnh tranh bằng việc phát video và làm bài trắc nghiệm. Giá trị khác biệt nằm ở:

- chương trình có sản phẩm đầu ra;
- trợ lý AI trên học liệu có kiểm soát nguồn;
- đánh giá bằng rubric;
- hồ sơ minh chứng năng lực;
- dữ liệu tiến độ và ngoại lệ;
- kết nối giữa đào tạo, ứng dụng thực tế và nhu cầu doanh nghiệp.

### 3.2. Định vị đối với cơ sở giáo dục

> **Đối tác giúp cơ sở giáo dục tích hợp AI vào chuẩn đầu ra, chương trình, phương pháp sư phạm, học liệu, đánh giá và dữ liệu học tập.**

Thông điệp bán hàng không chỉ là “học dùng công cụ AI”, mà là:

- AI+ / AIx theo ngành và môn học;
- đổi mới phương pháp dạy học;
- sản phẩm và rubric;
- trợ lý môn học;
- dữ liệu năng lực;
- cơ chế sử dụng AI có trách nhiệm.

### 3.3. Định vị đối với doanh nghiệp

> **Đào tạo gắn với quy trình thật, dữ liệu thật và đầu ra có thể áp dụng.**

Khóa doanh nghiệp không chỉ gồm giờ học. Giá trị có thể bao gồm:

- khảo sát nhu cầu;
- thiết kế tình huống theo phòng ban;
- quy tắc sử dụng AI;
- workflow hoặc agent mẫu;
- tài liệu vận hành;
- hỗ trợ áp dụng sau đào tạo.

### 3.4. Vai trò pháp lý

Nền tảng giữ vai trò:

> **Công nghệ + đào tạo + đánh giá năng lực + điều phối dữ liệu.**

Nền tảng không tự nhận là đơn vị cung ứng việc làm, xuất khẩu lao động hoặc cấp văn bằng ngoài phạm vi pháp lý. Các hoạt động việc làm, cấp bằng và đưa người lao động đi nước ngoài chỉ thực hiện qua đối tác có thẩm quyền hoặc giấy phép phù hợp.

---

## 4. Nhóm khách hàng ưu tiên

| Nhóm khách hàng | Nhu cầu chính | Sản phẩm ưu tiên |
|---|---|---|
| Trường đại học, cao đẳng, trường sư phạm | Năng lực AI cho giảng viên, AI+ / AIx, trợ lý môn học, dữ liệu học tập | AI Essentials, AI-Powered Teaching, Faculty AI Builder, AI+ Curriculum Sprint |
| Trường trung cấp và cơ sở giáo dục nghề nghiệp | AI cho giảng viên nghề, số hóa học liệu, vibe coding, AI nghề nghiệp | Vocational AI, Faculty AI Builder, Vibe Coding Foundation |
| Doanh nghiệp | Năng suất, workflow, agent, quy tắc sử dụng AI | Enterprise AI, AI Workflow, AI Agent Builder |
| Sinh viên đại học, cao đẳng | AI cho học tập và công việc, sản phẩm số | AI Fluency, AI for Study and Work, Vibe Coding Foundation |
| Trường phổ thông và cụm trường | Năng lực AI cho giáo viên, STEAM, hoạt động học có sản phẩm | AI School Starter, STEAM Teacher Pilot |
| Đối tác đào tạo | Nội dung, nền tảng, báo cáo và quyền vận hành | Gói cấp quyền khóa học |

Ưu tiên bán qua mạng lưới và đầu mối có khả năng kích hoạt nhiều đơn vị, nhưng mỗi cơ hội phải được chuyển thành đề xuất, hợp đồng, lịch triển khai hoặc tiền thực thu cụ thể.

---

## 5. Danh mục sản phẩm năm đầu

## 5.1. Nhóm sản phẩm dành cho giảng viên và cơ sở giáo dục

### Gói 1 — AI Essentials for Educators

- Thời lượng tham chiếu: 2 buổi.
- Đối tượng: giáo viên, giảng viên và cán bộ quản lý.
- Nội dung:
  - hiểu đúng về AI;
  - mô tả yêu cầu và kiểm chứng kết quả;
  - đạo đức, dữ liệu và liêm chính học thuật;
  - thiết kế học liệu và hỗ trợ công việc;
  - hướng dẫn người học dùng AI có trách nhiệm.
- Đầu ra:
  - bộ quy tắc sử dụng AI;
  - bài tập thực hành;
  - kế hoạch áp dụng cá nhân hoặc đơn vị.
- Khung giá B2B hiện hành: **20–50 triệu đồng/khóa**, tùy quy mô và phạm vi.

### Gói 2 — AI-Powered Teaching

- Thời lượng tham chiếu: 4–6 buổi.
- Nội dung:
  - thiết kế hoạt động học;
  - học liệu ngắn và nội dung số;
  - câu hỏi, rubric và đánh giá quá trình;
  - học tập theo dự án;
  - trợ lý AI cho môn học;
  - đánh giá sản phẩm có sử dụng AI.
- Đầu ra:
  - một bộ công cụ AI cho môn học;
  - một hoạt động học có sản phẩm;
  - rubric và kế hoạch áp dụng.

### Gói 3 — Faculty AI Builder

- Thời lượng tham chiếu: 8–12 buổi.
- Nội dung:
  - skill;
  - agent;
  - kho tri thức;
  - quy trình sản xuất học liệu;
  - trợ lý nghiên cứu hoặc trợ lý môn học;
  - workflow đánh giá và hỗ trợ sinh viên.
- Đầu ra: một hệ thống hoặc quy trình AI có thể vận hành thử.

### Gói 4 — AI+ Curriculum Sprint

Đây là gói tư vấn và thiết kế, không mặc định nằm trong giá khóa đào tạo cơ bản.

- Rà soát chuẩn đầu ra của một chương trình hoặc nhóm học phần.
- Xác định năng lực AI phù hợp với chuyên ngành.
- Xây ma trận năng lực – học phần – hoạt động – đánh giá.
- Thiết kế 1–3 học phần thí điểm.
- Bàn giao rubric và hồ sơ minh chứng.

Giá được báo theo phạm vi, số chương trình, số học phần và đầu ra cần bàn giao.

### Gói 5 — AI Pedagogy Lab

- Đào tạo giảng viên nguồn.
- Đồng thiết kế học liệu, dự án và cách đánh giá mới.
- Xây trợ lý môn học hoặc workflow hỗ trợ.
- Chạy lớp thí điểm.
- Thu dữ liệu và báo cáo kết quả.

### Gói 6 — AI Tutor & Learning Data Pilot

Chỉ bán sau khi audit tài sản kỹ thuật.

- Kho học liệu có cấu trúc.
- Trợ lý hỏi đáp có nguồn.
- Workflow điểm danh, nhắc lịch và nộp bài.
- Thu sản phẩm và chấm sơ bộ theo rubric.
- Dashboard tiến độ và ngoại lệ.
- Cơ chế người trong vòng kiểm soát.

---

## 5.2. Nhóm sản phẩm dành cho doanh nghiệp

### Enterprise AI Foundation

- Thời lượng: 1–3 buổi.
- Đầu ra:
  - bộ quy tắc sử dụng AI;
  - danh sách tình huống áp dụng theo phòng ban;
  - hướng dẫn kiểm chứng và bảo vệ dữ liệu.

### AI Workflow for Teams

- Thời lượng: 3–6 buổi.
- Gắn với quy trình thật.
- Đầu ra:
  - workflow mẫu;
  - tài liệu vận hành;
  - kế hoạch thử nghiệm tại phòng ban.

### AI Agent Builder for Business

- Khảo sát nhu cầu.
- Thiết kế hoặc dựng agent mẫu.
- Đào tạo đội nội bộ sử dụng và kiểm soát agent.
- Có thể chuyển thành dự án triển khai riêng.

Khung giá đào tạo doanh nghiệp hiện hành: **20–100 triệu đồng/khóa**. Phần tư vấn hoặc triển khai ngoài phạm vi đào tạo được báo giá riêng.

---

## 5.3. Sinh viên online — AI Fluency

### Mục tiêu

Giúp sinh viên không chuyên sử dụng AI trong học tập và công việc mà vẫn giữ trách nhiệm, khả năng kiểm chứng và tư duy độc lập.

### Cấu trúc đề xuất

- 4 buổi online.
- Nội dung:
  - hiểu AI và giới hạn;
  - mô tả yêu cầu;
  - đánh giá kết quả;
  - phân công nhiệm vụ cho AI;
  - trách nhiệm, dữ liệu và liêm chính;
  - ứng dụng vào học tập và công việc.
- Đầu ra:
  - bộ bài tập;
  - một sản phẩm ứng dụng;
  - hồ sơ minh chứng cơ bản.

### Mô hình thương mại

- Học phí 220.000 đồng/người là `[giả định]` dùng cho tháng đầu.
- Phần dự án sau chia sẻ 60% là `[giả định]`.
- Không dùng đặt cọc hoàn lại trong tháng đầu.
- Tỷ lệ hoàn thành:
  - 50–60% cho kịch bản ngân sách;
  - khoảng 70% cho mục tiêu vận hành nội bộ.

---

## 5.4. Cấp quyền sử dụng khóa học

Ba cấu hình thương mại:

| Cấu hình | Nội dung |
|---|---|
| Nội dung | Đề cương, video, slide, bài tập, rubric và tài liệu giảng viên |
| Nội dung + nền tảng | Thêm quản lý người học, báo cáo, cập nhật và hỗ trợ kỹ thuật |
| Triển khai đầy đủ | Tùy chỉnh, onboarding, đào tạo giảng viên nguồn, nền tảng và hỗ trợ vận hành |

Nguyên tắc:

- Cấp quyền có thời hạn.
- Giới hạn số người học hoặc số đơn vị.
- Quy định rõ white-label, file nguồn và quyền chỉnh sửa.
- Không chuyển toàn bộ quyền sở hữu trí tuệ nếu chưa có định giá phù hợp.
- Giá chỉ được chốt sau khi xác định phạm vi và chi phí phục vụ.

---

## 5.5. Vibe Coding Foundation

- Thời lượng: 6–8 buổi.
- Đối tượng: sinh viên và người học không chuyên lập trình.
- Nội dung:
  - chuyển nhu cầu thành đặc tả;
  - dùng AI để xây giao diện và logic;
  - quản lý phiên bản và dữ liệu;
  - kiểm thử và sửa lỗi;
  - triển khai sản phẩm.
- Đầu ra:
  - website;
  - ứng dụng nhỏ;
  - workflow;
  - hoặc sản phẩm số có thể trình diễn.

Không chốt giá hoặc biên trước cohort đầu.

---

## 5.6. STEAM Teacher Pilot

Năm đầu, STEAM được hiểu là:

- đào tạo giáo viên dạy STEAM;
- học liệu và hướng dẫn cho 1–2 môn thí điểm;
- hướng dẫn tổ chức hoạt động cho học sinh;
- hỗ trợ từ xa sau đào tạo;
- có thể kèm công cụ số hoặc trợ lý AI nếu phạm vi được chốt.

Không tự xây thư viện 40–60 khóa phần cứng.

Chỉ kích hoạt khi chốt được:

- người trả tiền;
- môn thí điểm;
- số trường và giáo viên;
- đầu ra cần đạt;
- hướng dẫn học sinh là tài liệu hay phần mềm;
- chuyên gia nghiệm thu;
- người điều phối tại chỗ.

Phân khúc vùng khó phải có unit economics riêng. AI hỗ trợ người điều phối, không thay hoàn toàn người tại chỗ.

---

## 6. Mô hình doanh thu và nguyên tắc tài chính

## 6.1. Bốn dòng doanh thu chính

| Dòng | Công thức |
|---|---|
| Giảng viên | Giá trị từng hợp đồng đào tạo/tư vấn đã ký và thực thu |
| Doanh nghiệp | Phí khảo sát + đào tạo + tùy chỉnh + triển khai/hỗ trợ nếu có |
| Cấp quyền khóa học | Phí quyền sử dụng + tùy chỉnh + nền tảng + onboarding + hỗ trợ |
| Sinh viên online | Số người thanh toán × học phí thực thu, sau đó trừ phần đối tác, phí và chi phí trực tiếp |

### Khái niệm phải tách riêng

- Giá trị hợp đồng.
- Tiền đã thu.
- Doanh thu ghi nhận.
- Chi phí trực tiếp.
- Đóng góp.
- Công nợ.
- Dòng tiền.

Không dùng từ “doanh thu” một mình khi có nguy cơ nhầm các khái niệm trên.

## 6.2. Khung giá đã được xác nhận

- Khóa giảng viên: **20–50 triệu đồng/khóa**.
- Khóa doanh nghiệp: **20–100 triệu đồng/khóa**.

Chưa có giá chính thức cho:

- cấp quyền khóa học;
- AI+ Curriculum Sprint;
- AI Pedagogy Lab;
- AI Tutor & Learning Data Pilot;
- Vibe Coding Foundation;
- STEAM Teacher Pilot.

## 6.3. Quy mô thương mại tham chiếu tháng đầu

Với 200–300 sinh viên và bốn hợp đồng B2B theo khung giá:

- Phần dự án sau chia sẻ từ sinh viên online: **26,4–39,6 triệu đồng** `[giả định]`.
- Giá trị 2 khóa giảng viên: **40–100 triệu đồng**.
- Giá trị 2 khóa doanh nghiệp: **40–200 triệu đồng**.
- Tổng quy mô thương mại tham chiếu: **106,4–339,6 triệu đồng**.

Các tổng trên:

- chưa tính cấp quyền khóa học;
- chưa trừ chi phí;
- không mặc định toàn bộ tiền B2B về trong tháng;
- không phải dự báo lợi nhuận hoặc dòng tiền.

## 6.4. Nguyên tắc bảo vệ dòng tiền

- Có ứng trước trước khi tùy chỉnh hoặc đặt lịch chuyên gia.
- Tiền ứng trước tối thiểu nên đủ chi phí trực tiếp đã cam kết.
- Chia thanh toán theo các mốc có đầu ra rõ.
- Không để toàn bộ tiền sau nghiệm thu nếu dự án phải ứng chi lớn.
- Theo dõi công nợ theo từng hợp đồng.
- Không dựng dự báo 12 tháng trước khi có dữ liệu cohort và trần giao B2B.

---

## 7. Kiến trúc vận hành AI-first và hybrid

## 7.1. Tài sản kỹ thuật phải tái sử dụng

| Tài sản | Vai trò dự kiến |
|---|---|
| SOPai | Workflow, trạng thái cohort, nhắc lịch, nộp bài và xử lý vòng đời |
| Arkon | Kho tri thức, RAG, trợ lý AI, logging và chấm sơ bộ |
| henlich.vn | Landing page, đăng ký, lịch học, booking và điểm danh |

Không xây lại trước khi audit.

## 7.2. Cấu hình AI-first

- Đăng ký và cấp mã học viên tự động.
- Thanh toán định danh và đối soát tự động.
- Trợ lý AI tuyến đầu trên kho học liệu.
- Workflow nhắc lịch, điểm danh và nộp bài.
- LLM chấm sơ bộ theo rubric.
- Người duyệt vòng cuối.
- Dashboard theo dõi ticket, ngoại lệ, chi phí và chất lượng.

## 7.3. Cấu hình hybrid dự phòng

- AI gợi ý, người vận hành duyệt.
- Đối soát bán tự động.
- Người xử lý ngoại lệ, tài khoản, khiếu nại và hoàn tiền.
- Người kiểm tra các bài chấm có rủi ro.
- Hạn chế quy mô khi tải vận hành vượt trần.

## 7.4. Giả định chưa được coi là dữ liệu thật

- Phí thanh toán/đối soát 0,8%.
- LLM API 14.000 đồng/người/khóa.
- Nền tảng và lưu trữ 6.000 đồng/người.
- Một điều phối viên 4 triệu đồng/cohort.
- Một điều phối viên phục vụ 1.000 người.

Các giả định chỉ dùng chạy độ nhạy.

## 7.5. Thứ tự phát triển kỹ thuật

Hoàn thành audit trong 2–3 ngày, sau đó ưu tiên theo nút thắt thật.

Nếu dự án tự thu hàng trăm giao dịch:

1. Đăng ký, mã học viên và đối soát.
2. FAQ/RAG tuyến đầu ở chế độ hybrid.
3. Nhắc lịch, điểm danh và nộp bài.
4. Chấm sơ bộ theo rubric.
5. Các chức năng STEAM sau khi chốt tài liệu hay phần mềm.

Nếu đối tác thu tiền và đối soát, thứ tự có thể thay đổi.

---

## 8. Tổ chức và nguồn lực

## 8.1. Đội core 5 người

| Vai trò | Trách nhiệm chính |
|---|---|
| Điều hành, đối tác và bán hàng | Pipeline, hợp đồng, quan hệ, có thể dạy chính giai đoạn đầu |
| Phát triển nền tảng | Audit, tích hợp, workflow và tính năng khác biệt |
| Nội dung/thiết kế học tập 1 | Chương trình, hoạt động, rubric và học liệu |
| Nội dung/thiết kế học tập 2 | Sản xuất nội dung, quản lý phiên bản và hỗ trợ lớp |
| Hành chính/vận hành | Đăng ký, lịch, đối soát, hỗ trợ và báo cáo |

Cơ cấu cụ thể 4 hay 5 người và chi phí thật cần được chốt bằng dữ liệu nội bộ.

## 8.2. Mạng lưới chuyên gia

Chuyên gia thuê theo cohort hoặc hợp đồng, với cơ chế rõ về:

- phí cố định hoặc chia theo hợp đồng;
- quyền sở hữu học liệu;
- bảo mật và không đi vòng;
- tiêu chuẩn nghiệm thu;
- thời gian sẵn sàng;
- phạm vi hỗ trợ sau khóa.

Không dùng một tỷ lệ chia chung cho tất cả chuyên gia.

## 8.3. Quy trình sản xuất chương trình rút gọn

1. Tiếp nhận nhu cầu.
2. Xác định người học, đầu ra và tiêu chí nghiệm thu.
3. AI tạo bản nháp chương trình và ma trận năng lực.
4. Chuyên gia duyệt chuẩn chuyên môn.
5. Thiết kế hoạt động, học liệu, bài tập và rubric.
6. Tạo sản phẩm mẫu.
7. Chạy thử nội bộ.
8. Phát hành phiên bản pilot.
9. Thu dữ liệu lớp học.
10. Cập nhật phiên bản và đóng gói để bán lại.

---

## 9. Kế hoạch 30 ngày đầu

## 9.1. KPI chính thức

| Dòng sản phẩm | KPI 30 ngày đầu |
|---|---:|
| Hợp đồng khóa giảng viên đã ký và có lịch | **2** |
| Hợp đồng khóa doanh nghiệp đã ký và có lịch | **2** |
| Khóa giảng viên đã khai giảng/hoàn thành | Theo dõi riêng, mục tiêu giao đủ 2 nếu lịch cho phép |
| Khóa doanh nghiệp đã khai giảng/hoàn thành | Theo dõi riêng, mục tiêu giao đủ 2 nếu lịch cho phép |
| Sinh viên thanh toán và bắt đầu học | **200–300** |
| Hoàn thành theo kịch bản ngân sách | **100–180** |
| Mục tiêu hoàn thành nội bộ | **140–210** |
| Gói khóa sinh viên bán hoặc thử nghiệm | **Ít nhất 1** |
| Audit SOPai, Arkon và henlich.vn | Hoàn thành tuần 1 |
| Báo cáo chi phí API và tải hỗ trợ | Có sau cohort đầu |
| Thời điểm bắt đầu đào tạo | Từ tuần thứ hai |

## 9.2. Tuần 1 — Audit, chốt sản phẩm và hợp đồng

- Audit SOPai, Arkon và henlich.vn.
- Xác định chức năng dùng ngay, chạy hybrid và phải xây.
- Hoàn thiện AI Fluency ở hai phiên bản: tự vận hành và cấp quyền.
- Hoàn thiện ít nhất một gói giảng viên và một gói doanh nghiệp.
- Rà soát khóa giảng viên theo định hướng AI+ / AIx.
- Chốt người dạy, lịch, đầu ra, chi phí trực tiếp và điều khoản thanh toán.
- Gửi đề xuất cho các đầu mối đủ điều kiện.
- Mở đăng ký cohort sinh viên.
- Chốt bộ câu hỏi và bài làm dùng test chi phí trợ giảng AI.

## 9.3. Tuần 2 — Bắt đầu đào tạo

- Khai giảng cohort sinh viên đầu tiên.
- Khai giảng hoặc chốt lịch khóa giảng viên đầu tiên.
- Chạy AI-first ở phần đã kiểm thử, phần còn lại chạy hybrid.
- Theo dõi thanh toán, tài khoản, ticket, chi phí API và lỗi vận hành.
- Thu dữ liệu đầu vào và mức tham gia buổi đầu.

## 9.4. Tuần 3 — Giao B2B và đo tải

- Triển khai khóa doanh nghiệp hoặc khóa giảng viên tiếp theo.
- Thu bài tập và sản phẩm sinh viên.
- Đo tỷ lệ chuyển người thật, số giờ hỗ trợ và thời gian duyệt bài.
- Tiếp tục bán gói cấp quyền khóa học.
- Không mở thêm cohort nếu ngoại lệ chưa được kiểm soát.

## 9.5. Tuần 4 — Hoàn thành và quyết định quy mô

- Hoàn thành các khóa ngắn theo lịch.
- Thu phản hồi và case study.
- Đối soát tiền đã thu, công nợ và chi phí trực tiếp.
- So sánh AI-first với hybrid.
- Chốt sản phẩm cần chuẩn hóa.
- Quyết định quy mô tháng thứ hai bằng dữ liệu thật.

---

## 10. Lộ trình 12 tháng

## Giai đoạn 1 — Tháng vận hành 1–3: kiểm chứng mô hình

### Mục tiêu

- Bán và giao các khóa AI cho giảng viên và doanh nghiệp.
- Chạy cohort sinh viên 200–300 người.
- Thử nghiệm ít nhất một cấu hình cấp quyền khóa học.
- Hoàn thiện dashboard ký–thu–giao–công nợ.
- Xác định cấu hình AI-first có thể vận hành thật.
- Kích hoạt STEAM chỉ khi phạm vi và người trả tiền đã chốt.

### Kết quả phải có

- Tối thiểu một case giảng viên hoàn thành.
- Tối thiểu một case doanh nghiệp hoàn thành.
- Một báo cáo cohort sinh viên đầy đủ.
- Một bảng unit economics AI-first và hybrid dựa trên số thật.
- Một bản đồ tái sử dụng SOPai, Arkon và henlich.vn.
- Một cấu trúc giá cấp quyền thử nghiệm.

### Cổng chuyển giai đoạn

- Có dữ liệu thật về hoàn thành, chi phí và tải vận hành.
- Quy trình thanh toán, hỗ trợ và chấm bài nằm trong trần.
- Có case B2B đủ dùng làm minh chứng bán hàng.
- AI-first chứng minh được lợi ích so với hybrid.

## Giai đoạn 2 — Tháng vận hành 4–6: chuẩn hóa và đóng gói

### Mục tiêu

- Chuẩn hóa 2–3 gói giảng viên.
- Chuẩn hóa 2–3 gói doanh nghiệp.
- Hoàn thiện ba cấu hình cấp quyền khóa học.
- Mở Vibe Coding Foundation ở quy mô nhỏ.
- Xây khung hợp tác chuyên gia.
- Thử nghiệm AI+ Curriculum Sprint ở một khoa hoặc nhóm học phần.
- Chuẩn hóa STEAM Teacher Pilot nếu có nguồn chi trả và pilot phù hợp.

### Kết quả phải có

- Bộ proposal và scope chuẩn.
- Bảng dự toán theo từng loại hợp đồng.
- Bộ template hợp đồng/biên bản nghiệm thu phù hợp.
- Học liệu, rubric và case có thể tái sử dụng.
- Một quy trình onboarding đối tác hoặc giảng viên nguồn.

### Cổng chuyển giai đoạn

- Có tỷ lệ ký hợp đồng và thời gian bán hàng thực tế.
- Có trần giao khóa B2B của đội core và chuyên gia.
- Có dữ liệu gia hạn, mua tiếp hoặc triển khai tiếp.
- Cấp quyền khóa học có phạm vi và chi phí phục vụ rõ.

## Giai đoạn 3 — Tháng vận hành 7–9: nhân rộng có kiểm soát

### Mục tiêu

- Nhân rộng các sản phẩm có case và unit economics phù hợp.
- Mở rộng qua mạng lưới nhưng quản lý hợp đồng theo đơn vị.
- Tăng tự động hóa dựa trên dữ liệu ticket thật.
- Thử nghiệm AI Pedagogy Lab hoặc AI Tutor Pilot trong phạm vi nhỏ.
- Mở rộng vibe coding nếu tỷ lệ hoàn thành và chất lượng đạt yêu cầu.
- Mở rộng STEAM theo cụm nếu có điều phối viên tại chỗ và nguồn tiền rõ.

### Kết quả phải có

- Dashboard đa cohort.
- Quy trình quản lý chuyên gia và giảng viên nguồn.
- Báo cáo chất lượng theo sản phẩm.
- Bộ dữ liệu năng lực cơ bản và hồ sơ minh chứng.
- Cơ chế hỗ trợ theo tầng: tự phục vụ, AI, điều phối viên và chuyên gia.

### Cổng chuyển giai đoạn

- Chất lượng không giảm khi tăng quy mô.
- Tỷ lệ ngoại lệ và chi phí hỗ trợ nằm trong trần.
- Dòng tiền không phụ thuộc vào một khách hàng hoặc một đầu mối duy nhất.
- Có ít nhất một sản phẩm tạo được doanh thu lặp lại hoặc gia hạn.

## Giai đoạn 4 — Tháng vận hành 10–12: gia hạn và chuẩn bị năm hai

### Mục tiêu

- Bán gia hạn quyền sử dụng theo năm học.
- Chuyển khách B2B sang đào tạo định kỳ hoặc dự án triển khai.
- Chuẩn hóa thư viện case, rubric, học liệu và portfolio.
- Đánh giá khả năng mở rộng AI Tutor, STEAM và dữ liệu năng lực.
- Xây kế hoạch năm hai dựa trên dữ liệu thật.

### Kết quả phải có

- Danh mục sản phẩm chính thức năm hai.
- Báo cáo doanh thu, đóng góp, tiền thực thu và công nợ theo từng dòng.
- Báo cáo chất lượng và tác động.
- Quyết định trục nào mở rộng, giữ nguyên, hợp tác hoặc dừng.
- Kế hoạch nhân sự và nền tảng gắn với nhu cầu thật.

---

## 11. Dashboard điều hành

## 11.1. B2B

- Cơ hội đủ điều kiện.
- Đề xuất đã gửi.
- Hợp đồng đã ký.
- Giá trị hợp đồng.
- Tiền ứng trước và tiền đã thu.
- Khóa đã khai giảng và hoàn thành.
- Sản phẩm đã bàn giao.
- Chi phí trực tiếp.
- Đóng góp.
- Công nợ.
- Cơ hội gia hạn hoặc triển khai tiếp.

## 11.2. Sinh viên online

- Đăng ký.
- Thanh toán.
- Bắt đầu học.
- Tham gia từng buổi.
- Hoàn thành.
- Học phí gộp và phần đối tác.
- Chi phí API, nền tảng, điều phối và hỗ trợ.
- Ticket/người.
- Tỷ lệ chuyển người thật.
- Thời gian duyệt bài.
- Đóng góp AI-first/hybrid.
- Tỷ lệ chuyển sang khóa tiếp theo.

## 11.3. Cấp quyền khóa học

- Đề xuất đã gửi.
- Gói đã ký hoặc thử nghiệm.
- Phạm vi quyền sử dụng.
- Số người học được kích hoạt.
- Tiền đã thu.
- Chi phí onboarding, hỗ trợ và nền tảng.
- Lỗi hoặc yêu cầu ngoài phạm vi.
- Tỷ lệ gia hạn.

## 11.4. Sản phẩm và nền tảng

- Sản phẩm đang thiết kế.
- Sản phẩm đang pilot.
- Phiên bản đã phát hành.
- Ticket kỹ thuật.
- Thời gian dev theo hạng mục.
- Chi phí API và hạ tầng.
- Tỷ lệ tự động xử lý.
- Lỗi chất lượng hoặc dữ liệu.

## 11.5. STEAM

- Người trả tiền hoặc đơn vị bảo trợ.
- Môn thí điểm.
- Trường và giáo viên tham gia.
- Chuyên gia nghiệm thu.
- Điều phối viên tại chỗ.
- Chi phí hỗ trợ trực tiếp và từ xa.
- Số giáo viên hoàn thành.
- Số hoạt động được triển khai với học sinh.

---

## 12. Quản trị chất lượng

Mỗi khóa phải có:

- mục tiêu và đối tượng rõ;
- chuẩn đầu ra;
- sản phẩm cuối khóa;
- rubric;
- cơ chế kiểm chứng;
- trách nhiệm của người dạy, AI và người duyệt;
- dữ liệu cần thu;
- tiêu chí nghiệm thu;
- kế hoạch cập nhật sau pilot.

Mọi khóa dành cho giảng viên cần kiểm tra:

- Có gắn với chuẩn đầu ra hoặc năng lực nghề nghiệp không?
- Có tình huống theo ngành hoặc môn học không?
- Có đạo đức, dữ liệu và liêm chính học thuật không?
- Có sản phẩm và rubric không?
- Có kế hoạch áp dụng sau khóa không?
- Có hồ sơ minh chứng không?

Không gọi một chatbot đơn giản là “gia sư AI” nếu chưa có nguồn kiểm soát, tiến trình học tập, đánh giá và cơ chế chuyển người thật.

---

## 13. Rủi ro chính và phương án kiểm soát

| Rủi ro | Tác động | Kiểm soát |
|---|---|---|
| Ký hợp đồng nhưng tiền về chậm | Thiếu dòng tiền | ứng trước, thanh toán theo mốc, theo dõi công nợ |
| Bán nhiều hơn khả năng giao | Chất lượng giảm | tách KPI ký và giao; xác định trần B2B |
| AI-first chưa sẵn sàng | Tải vận hành tăng | audit, chạy hybrid, giới hạn quy mô |
| Chi phí API cao hơn giả định | Biên giảm | test 20–50 bộ câu hỏi/bài làm, theo dõi thực tế |
| Một điều phối viên không đủ | Chậm hỗ trợ và khiếu nại | đo ticket, giờ xử lý và tỷ lệ ngoại lệ |
| Phụ thuộc một đầu mối | Pipeline đứt | đa dạng mạng lưới và hợp đồng trực tiếp |
| Thiếu chuyên gia | Không giao được B2B/STEAM | hợp đồng khung và danh sách chuyên gia dự phòng |
| Sản phẩm giống khóa miễn phí | Khó bán | tập trung AI+ / AIx, sản phẩm, rubric, dữ liệu và áp dụng |
| Cấp quyền làm rò rỉ học liệu | Mất tài sản trí tuệ | thời hạn, giới hạn người học, điều khoản sử dụng và nền tảng |
| Thu phí trong trường công không phù hợp | Chậm triển khai | cấu trúc hợp đồng rõ và tư vấn luật sư |
| Thu dữ liệu quá mức | Rủi ro pháp lý và uy tín | mục đích rõ, phân quyền, thời hạn lưu trữ và minh bạch |
| STEAM vùng khó thiếu người tại chỗ | Pilot thất bại | đào tạo theo cụm, giáo viên cốt cán và hỗ trợ từ xa |

---

## 14. Các quyết định cần anh Đức chốt

1. Ngày bắt đầu chính thức của 30 ngày vận hành đầu tiên.
2. Trần số khóa B2B có thể giao mỗi tháng.
3. Mức hoàn thiện của SOPai, Arkon và henlich.vn.
4. Founder có nhận lương trong 6 tháng đầu hay không.
5. Chi phí cố định thực tế và runway.
6. Mạng lưới chuyên gia đã sẵn sàng tới đâu.
7. Pháp nhân, hóa đơn, thuế và cơ chế thu học phí.
8. Giá và phạm vi ba cấu hình cấp quyền khóa học.
9. STEAM:
   - ai trả tiền;
   - môn thí điểm;
   - số trường và giáo viên;
   - mốc cần đạt;
   - tài liệu hay phần mềm;
   - chuyên gia nghiệm thu;
   - người điều phối tại chỗ.

Không tự điền các dữ liệu này bằng giả định.

---

## 15. Dữ liệu cần đo trong cohort và hợp đồng đầu tiên

### Sinh viên online

- Chi phí API/người/khóa.
- Token và số lượt hỏi trung bình.
- Tỷ lệ câu hỏi cần RAG.
- Tỷ lệ chuyển người thật.
- Ticket/người.
- Giờ điều phối.
- Lỗi tài khoản và thanh toán.
- Thời gian chấm và duyệt bài.
- Tỷ lệ hoàn thành.
- Chất lượng câu trả lời và chấm sơ bộ.

### B2B

- Thời gian từ cơ hội đến đề xuất.
- Tỷ lệ đề xuất thành hợp đồng.
- Số giờ khảo sát và tùy chỉnh.
- Phí chuyên gia.
- Đi lại, địa điểm và vận hành.
- Thời gian hỗ trợ sau khóa.
- Tiền ứng trước và thời gian thu công nợ.
- Cơ hội mua tiếp hoặc triển khai tiếp.

### Cấp quyền

- Thời gian bán hàng.
- Chi phí onboarding.
- Số yêu cầu hỗ trợ.
- Chi phí nền tảng và báo cáo.
- Mức sử dụng học liệu.
- Tỷ lệ gia hạn.

---

## 16. Nguyên tắc điều chỉnh kế hoạch

- Kế hoạch được rà soát hằng tuần trong tháng đầu.
- Từ tháng thứ hai, rà soát theo tháng và sau mỗi cohort/hợp đồng quan trọng.
- Không tăng KPI khi chưa biết nguyên nhân của kết quả hiện tại.
- Không mở sản phẩm mới nếu sản phẩm cũ chưa có người chịu trách nhiệm và tiêu chí nghiệm thu.
- Không dùng doanh thu ký mới để che rủi ro tiền chưa thu.
- Không dùng tăng số người học để che chất lượng hoặc tỷ lệ hoàn thành thấp.
- Mọi số chưa kiểm chứng phải ghi `[giả định]`.
- Mọi số thực tế phải ghi nguồn và ngày.

---

## 17. Kết luận

Năm đầu không phải cuộc chạy đua xây thật nhiều khóa học hoặc tính doanh thu bằng các phép nhân đẹp. Nhiệm vụ quan trọng là chứng minh được một hệ thống có thể:

- bán được sản phẩm B2B có giá trị;
- giao được đúng chất lượng;
- vận hành cohort sinh viên bằng AI-first có phương án hybrid;
- thu được dữ liệu năng lực và hồ sơ minh chứng;
- tái sử dụng nội dung, quy trình và nền tảng;
- tạo doanh thu lặp lại qua cấp quyền, gia hạn và triển khai tiếp;
- mở rộng mà không vượt trần của đội core 5 người.

Chỉ sau khi có dữ liệu thật về unit economics, dòng tiền, chất lượng và năng lực giao hàng, dự án mới chốt các chỉ tiêu quy mô và doanh thu cho phần còn lại của năm.