# Kế hoạch kinh doanh và triển khai 12 tháng

> **Phiên bản điều hành:** 2026-07-30  
> **Phạm vi:** 12 tháng vận hành đầu tiên kể từ ngày dự án chính thức bắt đầu.  
> **Nguồn ưu tiên:** `AGENTS.md`, `ke-hoach/muc-tieu-thang-1.md` và các quyết định đã thống nhất trong các cuộc trao đổi trước.  
> **Nguyên tắc quan trọng:** dự án **không bắt đầu từ bước tìm trường hoặc kiểm chứng nhu cầu**. Đã có các trường đại học, cao đẳng và cơ sở giáo dục sẵn sàng phối hợp triển khai; chương trình đào tạo cốt lõi đã có. Nhiệm vụ hiện tại là tổ chức triển khai nhanh, nhiều trường song song và hoàn thiện nền tảng trong quá trình vận hành.

---

## 1. Tóm tắt điều hành

Dự án được định vị là:

> **Nền tảng công nghệ, đào tạo, đánh giá năng lực và điều phối dữ liệu giúp nhà trường triển khai nhanh các chương trình AI, vibe coding, STEAM và giáo dục nghề nghiệp có sản phẩm đầu ra.**

Trong 12 tháng đầu, dự án tập trung vào việc biến mạng lưới trường đã sẵn sàng thành các lớp học, hợp đồng và dữ liệu vận hành thật. Không dành nhiều tháng để nghiên cứu thị trường hoặc xây nền tảng hoàn chỉnh rồi mới mở lớp.

Mô hình triển khai:

1. Trường đã đồng ý tham gia được xếp lịch theo từng đợt.
2. Chương trình và đội ngũ trung tâm được dùng chung cho nhiều trường.
3. Mỗi trường có một đầu mối hoặc điều phối viên phối hợp danh sách, lịch, điểm danh và truyền thông.
4. Lớp học được vận hành tập trung trên nền tảng chung.
5. Nền tảng được hoàn thiện dần từ nhu cầu phát sinh trong các lớp thật.
6. Nội dung mới được sản xuất bằng AI, sau đó chuyên gia kiểm duyệt.
7. Các môn mới ngoài năng lực lõi được phát triển bằng chuyên gia thuê theo chương trình.

Sáu dòng triển khai năm đầu:

1. Chương trình **Ứng dụng AI theo khung năng lực** cho sinh viên không chuyên.
2. Chương trình **Phát triển ứng dụng và tự động hóa với AI – Vibe Coding**.
3. Đào tạo AI trực tiếp cho giảng viên và cơ sở giáo dục.
4. Đào tạo, tư vấn và triển khai AI cho doanh nghiệp.
5. Cấp quyền sử dụng chương trình và nền tảng cho trường hoặc đối tác.
6. Đào tạo giáo viên triển khai STEAM và các môn mới khi có đơn vị đặt hàng.

Kiến trúc vận hành mục tiêu là **AI-first**, có cấu hình **hybrid dự phòng** để bảo đảm lớp vẫn chạy ngay cả khi một số tính năng tự động chưa hoàn thiện.

---

## 2. Trạng thái xuất phát đã xác nhận

### 2.1. Nhu cầu thị trường

- Đã có quan hệ với các trường đại học, cao đẳng và cơ sở giáo dục nghề nghiệp.
- Đã có các trường đồng ý hoặc sẵn sàng phối hợp triển khai.
- Không xây kế hoạch theo giả định phải mất nhiều tháng đi tìm trường đầu tiên.
- Ưu tiên kích hoạt các trường sẵn có trước, sau đó dùng case và dữ liệu để mở rộng mạng lưới.

### 2.2. Chương trình

Hai chương trình sinh viên đầu tiên đã được xác định:

1. **Ứng dụng AI theo khung năng lực**.
2. **Phát triển ứng dụng và tự động hóa với AI – Vibe Coding**.

Chương trình cho sinh viên không chuyên được thiết kế theo thời lượng khoảng **12–15 buổi**, có đánh giá đầu vào, bài tập thực hành, sản phẩm cuối khóa và hồ sơ minh chứng. Khung năng lực 6 bậc đã thống nhất được dùng để đánh giá mức tiến bộ, không biến thành sáu học phần lý thuyết tách rời.

Các khóa cho giảng viên và doanh nghiệp cũng đã có khung nội dung và có thể triển khai từ tuần thứ hai.

### 2.3. Nền tảng

- Không chờ nền tảng hoàn chỉnh mới mở lớp.
- Nền tảng được phát triển dần từ nhu cầu thật.
- Ngay từ đầu, kiến trúc phải đủ tổng quát để vừa quản lý STEAM, vừa hoạt động như LMS cho AI, vibe coding và các môn khác.
- SOPai, Arkon và henlich.vn được ưu tiên tái sử dụng.
- Các chức năng chưa hoàn thiện được vận hành hybrid, không trở thành lý do trì hoãn khai giảng.

### 2.4. Nguồn lực

- Đội core: 5 người.
- Bổ sung giảng viên, chuyên gia và cộng tác viên theo cohort hoặc hợp đồng.
- Mỗi trường cần một đầu mối phối hợp tại chỗ; không nhất thiết là nhân sự toàn thời gian của dự án.
- Nội dung mới được sản xuất nhanh bằng AI nhưng bắt buộc có chuyên gia duyệt.

---

## 3. Mục tiêu 12 tháng

### 3.1. Mục tiêu kinh doanh

- Kích hoạt nhanh các trường đã sẵn sàng thay vì tiếp tục nghiên cứu nhu cầu.
- Tạo doanh thu ngay từ tháng đầu bằng đào tạo giảng viên, doanh nghiệp và lớp sinh viên.
- Xây mô hình triển khai nhiều trường song song.
- Tạo doanh thu lặp lại từ khóa học online, cấp quyền, gia hạn và dịch vụ nền tảng.
- Chuyển khách hàng đào tạo sang tư vấn, triển khai, xây trợ lý AI, workflow hoặc chương trình AI+ / AIx.

### 3.2. Mục tiêu quy mô

| Giai đoạn | Trường/cơ sở được kích hoạt | Sinh viên mới | Khóa B2B giảng viên + doanh nghiệp | Cấp quyền chương trình |
|---|---:|---:|---:|---:|
| Tháng 1 | 2–3 trường | 200–300 | 4 khóa | Ít nhất 1 gói |
| Tháng 2 | 4–6 trường lũy kế | 400–600 | 4–6 khóa | 1–2 gói |
| Tháng 3 | 8–12 trường lũy kế | 600–1.000 | 6–8 khóa | 2–3 gói |
| Tháng 4–6 | 15–25 trường lũy kế | 1.000–2.000/tháng | 6–10 khóa/tháng | 3–5 gói/quý |
| Tháng 7–9 | 25–40 trường lũy kế | 2.000–3.000/tháng | 8–12 khóa/tháng | 5–8 gói/quý |
| Tháng 10–12 | 40–60 trường lũy kế | 3.000–5.000/tháng | 10–15 khóa/tháng | Gia hạn và mở rộng |

Đây là mục tiêu điều hành theo mô hình triển khai song song. Trường đã sẵn sàng được ưu tiên xếp lịch trước; quy mô thực tế được điều chỉnh theo lịch học và công suất giảng viên, không quay lại bước kiểm chứng xem thị trường có nhu cầu hay không.

### 3.3. Mục tiêu sản phẩm

- Hoàn thiện và triển khai chương trình 12–15 buổi **Ứng dụng AI theo khung năng lực**.
- Hoàn thiện và triển khai chương trình 12–15 buổi **Vibe Coding**.
- Chuẩn hóa 2–3 gói cho giảng viên và cơ sở giáo dục.
- Chuẩn hóa 2–3 gói cho doanh nghiệp.
- Có ba cấu hình cấp quyền khóa học.
- Phát triển AI+ Curriculum Sprint, AI Pedagogy Lab và AI Tutor theo nhu cầu của trường.
- Mở thêm môn mới bằng chuyên gia thuê ngoài mà không phải thay đổi kiến trúc nền tảng.

### 3.4. Mục tiêu vận hành và dữ liệu

- Quản lý đa trường, đa cohort và đa chương trình trên một hệ thống.
- Có danh sách học viên, lịch, điểm danh, bài tập, rubric, kết quả và hồ sơ minh chứng.
- Tự động hóa đăng ký, nhắc lịch, hỗ trợ tuyến đầu và báo cáo.
- Theo dõi riêng chất lượng, chi phí, ticket và công suất theo từng trường.
- Tạo báo cáo cho trường và dữ liệu để mở cohort tiếp theo.

---

## 4. Danh mục sản phẩm triển khai

## 4.1. Chương trình sinh viên 1 — Ứng dụng AI theo khung năng lực

### Đối tượng

Sinh viên đại học, cao đẳng và trung cấp không chuyên AI hoặc công nghệ.

### Thời lượng

- Khoảng 12–15 buổi.
- Có thể tổ chức 2 buổi/tuần hoặc theo lịch riêng của từng trường.
- Nội dung chung được dạy tập trung; bài tập và tình huống được điều chỉnh theo nhóm ngành.

### Cấu trúc

1. Hiểu AI, khả năng và giới hạn.
2. Mô tả yêu cầu và giao việc cho AI.
3. Tìm kiếm, nghiên cứu và tổng hợp thông tin.
4. Kiểm chứng kết quả và nhận diện lỗi.
5. AI trong học tập và nghiên cứu.
6. AI trong công việc văn phòng và nghề nghiệp.
7. Làm việc với dữ liệu và tài liệu.
8. Sản xuất nội dung và thuyết trình.
9. Phối hợp AI với công cụ lưu trữ và làm việc nhóm.
10. Đạo đức, quyền riêng tư, bản quyền và liêm chính học thuật.
11. Xây workflow cá nhân.
12. Dự án cuối khóa.
13–15. Thực hành, hoàn thiện sản phẩm và đánh giá nếu chương trình dùng phiên bản 15 buổi.

### Đầu ra

- Một bộ bài tập có minh chứng.
- Một workflow hoặc sản phẩm ứng dụng AI.
- Điểm đánh giá theo khung năng lực.
- Hồ sơ năng lực cơ bản.
- Đề xuất học tiếp hoặc định hướng ứng dụng nghề nghiệp.

## 4.2. Chương trình sinh viên 2 — Vibe Coding

### Đối tượng

Sinh viên và người học không chuyên lập trình.

### Thời lượng

Khoảng 12–15 buổi, đủ thời gian để người học đi từ yêu cầu đến sản phẩm hoạt động.

### Nội dung chính

- Chuyển ý tưởng thành đặc tả.
- Thiết kế giao diện và luồng người dùng.
- Dùng AI tạo code và cấu trúc dự án.
- Quản lý dữ liệu.
- Tích hợp API và automation.
- Quản lý phiên bản.
- Kiểm thử, sửa lỗi và bảo mật cơ bản.
- Triển khai website hoặc ứng dụng.
- Hoàn thiện sản phẩm cuối khóa.

### Đầu ra

- Website, ứng dụng nhỏ, workflow hoặc AI agent có thể trình diễn.
- Repo hoặc hồ sơ sản phẩm.
- Rubric đánh giá chức năng, khả năng sử dụng và mức độ làm chủ.

## 4.3. Khóa dành cho giảng viên và cơ sở giáo dục

### AI Essentials for Educators

- 2 buổi.
- Năng lực AI nền tảng, an toàn, dữ liệu, liêm chính học thuật.
- Đầu ra: bộ quy tắc và kế hoạch áp dụng.

### AI-Powered Teaching

- 4–6 buổi.
- Thiết kế bài giảng, học liệu, hoạt động dự án, rubric, trợ lý môn học.
- Đầu ra: bộ công cụ AI dùng cho một môn học thật.

### Faculty AI Builder

- 8–12 buổi.
- Skill, agent, kho tri thức, workflow và hệ thống hỗ trợ giảng dạy.
- Đầu ra: một hệ thống có thể vận hành thử.

### AI+ Curriculum Sprint

- Rà soát chuẩn đầu ra.
- Xây ma trận năng lực AI – học phần – hoạt động – đánh giá.
- Thiết kế học phần thí điểm.
- Báo giá riêng theo phạm vi tư vấn.

Khung giá đào tạo giảng viên hiện hành: **20–50 triệu đồng/khóa**.

## 4.4. Khóa dành cho doanh nghiệp

- Enterprise AI Foundation.
- AI Workflow for Teams.
- AI Agent Builder for Business.

Khóa phải gắn với phòng ban, dữ liệu, quy trình và đầu ra thật. Khung giá hiện hành: **20–100 triệu đồng/khóa**. Phần tư vấn hoặc triển khai ngoài đào tạo được báo giá riêng.

## 4.5. Cấp quyền sử dụng chương trình

Ba cấu hình:

1. **Nội dung:** đề cương, video, slide, bài tập, rubric và hướng dẫn giảng viên.
2. **Nội dung + nền tảng:** thêm quản lý học viên, báo cáo và hỗ trợ kỹ thuật.
3. **Triển khai đầy đủ:** tùy chỉnh, onboarding, đào tạo giảng viên nguồn và vận hành.

Nguyên tắc:

- Cấp quyền theo thời hạn.
- Giới hạn số người học hoặc số cơ sở.
- Quy định rõ white-label, file nguồn và quyền chỉnh sửa.
- Không chuyển toàn bộ quyền sở hữu trí tuệ nếu chưa định giá phù hợp.

## 4.6. STEAM và các môn mới

- Nền tảng hỗ trợ quản lý STEAM từ đầu nhưng không chỉ phục vụ STEAM.
- Sản phẩm năm đầu ưu tiên đào tạo giáo viên triển khai STEAM và hướng dẫn học sinh.
- Chỉ bắt đầu với 1–2 môn có đơn vị đặt hàng rõ.
- Các môn mới được xây bởi chuyên gia thuê ngoài kết hợp Course Factory và AI.
- Hệ thống không phải xây lại khi thêm môn mới.

---

## 5. Mô hình triển khai nhiều trường song song

### 5.1. Tầng trung tâm

Đội dự án chịu trách nhiệm:

- chương trình và chuẩn đầu ra;
- giảng viên chính;
- nền tảng;
- học liệu, bài tập và rubric;
- trợ lý AI;
- báo cáo;
- kiểm soát chất lượng;
- vận hành chung nhiều trường.

### 5.2. Tầng trường

Mỗi trường bố trí một đầu mối phụ trách:

- danh sách học viên;
- lịch học;
- truyền thông nội bộ;
- nhắc học viên;
- phối hợp xử lý trường hợp đặc biệt;
- xác nhận kết quả và phản hồi.

### 5.3. Cách tổ chức lớp

- Một cohort có thể gồm sinh viên từ một trường hoặc nhiều trường.
- Có thể dùng nội dung chung kết hợp buổi thực hành theo ngành.
- Lớp quy mô lớn dùng trợ lý AI và workflow làm tuyến đầu.
- Các vấn đề chuyên môn, khiếu nại hoặc ngoại lệ được chuyển cho người phụ trách.
- Không yêu cầu mỗi trường phải có một bộ máy đào tạo riêng.

### 5.4. Quy trình kích hoạt một trường

1. Xác nhận chương trình và nhóm người học.
2. Chốt lịch, học phí, cách thu tiền và đầu mối.
3. Nhận danh sách hoặc mở form đăng ký.
4. Tạo mã lớp và tài khoản.
5. Tổ chức buổi định hướng ngắn.
6. Khai giảng.
7. Theo dõi điểm danh, bài tập và hỗ trợ.
8. Thu sản phẩm cuối khóa.
9. Báo cáo kết quả cho trường.
10. Chốt cohort tiếp theo hoặc chương trình nâng cao.

Mục tiêu là hoàn thành bước 1–6 trong **7–10 ngày**, không kéo dài thành quy trình bán hàng nhiều tháng với các trường đã đồng ý.

---

## 6. Kế hoạch 30 ngày đầu

## 6.1. KPI chính thức

| Dòng sản phẩm | KPI 30 ngày đầu |
|---|---:|
| Trường được kích hoạt | **2–3 trường** |
| Hợp đồng khóa giảng viên đã ký và có lịch | **2** |
| Hợp đồng khóa doanh nghiệp đã ký và có lịch | **2** |
| Sinh viên thanh toán và bắt đầu học | **200–300** |
| Gói khóa sinh viên bán hoặc triển khai theo quyền sử dụng | **Ít nhất 1** |
| Chương trình sinh viên được khai giảng | **Ứng dụng AI theo khung năng lực** |
| Chương trình Vibe Coding | Hoàn thiện lịch mở đợt tiếp theo hoặc mở cohort đầu nếu trường sẵn sàng |
| Thời điểm bắt đầu đào tạo | **Từ tuần thứ hai** |

Tỷ lệ hoàn thành được theo dõi bằng hai lớp:

- 50–60% cho ngân sách.
- Khoảng 70% cho mục tiêu vận hành nội bộ.

### Tuần 1 — Chốt danh sách và xếp lịch

- Lập danh sách toàn bộ trường đã đồng ý hoặc sẵn sàng triển khai.
- Chọn 2–3 trường cho đợt khai giảng đầu tiên.
- Chốt số sinh viên, lịch và đầu mối từng trường.
- Chốt cơ chế thu học phí và chia sẻ.
- Chốt lịch 2 khóa giảng viên và 2 khóa doanh nghiệp.
- Hoàn thiện phiên bản triển khai của chương trình 12–15 buổi.
- Tạo lớp, landing page, form đăng ký và bộ thông tin học viên.
- Cấu hình nền tảng ở mức đủ dùng; chức năng chưa xong vận hành hybrid.

### Tuần 2 — Khai giảng đồng loạt

- Khai giảng chương trình sinh viên tại các trường đợt 1.
- Khai giảng hoặc triển khai khóa giảng viên đầu tiên.
- Chạy trợ lý AI và kênh hỗ trợ tập trung.
- Theo dõi đăng nhập, thanh toán, điểm danh và vấn đề kỹ thuật.
- Mở đăng ký Vibe Coding hoặc đợt trường tiếp theo.

### Tuần 3 — Mở đợt 2 và giao B2B

- Kích hoạt thêm trường đã sẵn sàng.
- Triển khai khóa doanh nghiệp.
- Thu bài tập và dữ liệu học tập.
- Chốt gói cấp quyền đầu tiên.
- Chuẩn hóa các câu hỏi và quy trình hỗ trợ thường gặp.

### Tuần 4 — Củng cố và mở rộng

- Đánh giá tiến độ, không chờ khóa 12–15 buổi kết thúc mới mở rộng.
- Chốt lịch tháng thứ hai cho toàn bộ trường còn lại.
- Thu tiền, đối soát và theo dõi công nợ.
- Mở cohort tiếp theo.
- Chốt lịch Vibe Coding.
- Công bố case ban đầu: số người tham gia, sản phẩm, mức độ tiến bộ và phản hồi.

---

## 7. Lộ trình 12 tháng theo tốc độ triển khai

## Giai đoạn 1 — Tháng 1–3: triển khai nhanh mạng lưới sẵn có

### Mục tiêu

- Kích hoạt 8–12 trường lũy kế.
- Tăng từ 200–300 sinh viên tháng đầu lên 600–1.000 sinh viên mới trong tháng 3.
- Vận hành hai chương trình sinh viên cốt lõi.
- Giao đều các khóa giảng viên và doanh nghiệp.
- Hoàn thiện mô hình quản lý nhiều trường.
- Có gói cấp quyền đầu tiên.

### Kết quả phải có

- Lịch triển khai theo trường và theo tháng.
- Tối thiểu một case hoàn chỉnh cho mỗi dòng sản phẩm chính.
- Dashboard nhiều trường.
- Bộ học liệu và rubric dùng chung.
- Quy trình hỗ trợ và báo cáo tiêu chuẩn.
- Danh sách trường sẵn sàng cho quý tiếp theo.

## Giai đoạn 2 — Tháng 4–6: nhân rộng và chuẩn hóa

### Mục tiêu

- Kích hoạt 15–25 trường lũy kế.
- Vận hành 1.000–2.000 sinh viên mới mỗi tháng.
- Chuẩn hóa 2–3 gói giảng viên và 2–3 gói doanh nghiệp.
- Mở Vibe Coding định kỳ.
- Bán cấp quyền theo học kỳ hoặc năm học.
- Mở AI+ Curriculum Sprint tại các trường có nhu cầu.
- Bắt đầu mạng lưới chuyên gia theo môn và ngành.

### Kết quả phải có

- Proposal, hợp đồng, lịch và báo cáo chuẩn.
- Course Factory có khả năng thêm môn mới.
- Quy trình onboarding giảng viên nguồn.
- Các gói học có thể triển khai lại mà không phải thiết kế từ đầu.

## Giai đoạn 3 — Tháng 7–9: mở rộng quy mô và sản phẩm nâng cao

### Mục tiêu

- Kích hoạt 25–40 trường lũy kế.
- Vận hành 2.000–3.000 sinh viên mới mỗi tháng.
- Mở AI Pedagogy Lab, AI Tutor hoặc Learning Data Pilot tại một số trường.
- Mở rộng Vibe Coding và chương trình theo ngành.
- Triển khai STEAM theo cụm nếu có đơn vị đặt hàng và người điều phối tại chỗ.
- Tăng số sản phẩm cấp quyền và doanh thu gia hạn.

### Kết quả phải có

- Dashboard đa chương trình và đa trường.
- Hồ sơ năng lực của người học.
- Cơ chế hỗ trợ theo tầng: tự phục vụ, AI, điều phối viên, chuyên gia.
- Mạng lưới giảng viên và chuyên gia đủ để không phụ thuộc một người.

## Giai đoạn 4 — Tháng 10–12: phủ mạng lưới và tạo doanh thu lặp lại

### Mục tiêu

- Kích hoạt 40–60 trường lũy kế.
- Vận hành 3.000–5.000 sinh viên mới mỗi tháng.
- Gia hạn quyền sử dụng cho năm học tiếp theo.
- Chuyển các trường từ khóa học đơn lẻ sang gói chương trình và nền tảng.
- Chuyển khách doanh nghiệp từ đào tạo sang triển khai.
- Chốt danh mục môn và đối tác chuyên gia cho năm hai.

### Kết quả phải có

- Danh mục sản phẩm năm hai.
- Hợp đồng gia hạn và doanh thu lặp lại.
- Báo cáo quy mô, chất lượng, tài chính và năng lực vận hành.
- Quyết định trục nào tự làm, hợp tác, cấp quyền hoặc mở rộng.

---

## 8. Mô hình doanh thu

## 8.1. Bốn dòng doanh thu chính

| Dòng | Công thức |
|---|---|
| Giảng viên | Số khóa × giá trị từng hợp đồng, khung 20–50 triệu đồng/khóa |
| Doanh nghiệp | Phí khảo sát + đào tạo + tùy chỉnh + triển khai, khung đào tạo 20–100 triệu đồng/khóa |
| Sinh viên online | Số người thanh toán × học phí thực thu, trừ phần đối tác và chi phí trực tiếp |
| Cấp quyền | Phí nội dung + nền tảng + tùy chỉnh + onboarding + hỗ trợ |

## 8.2. Quy mô thương mại tháng đầu

Với 200–300 sinh viên, 2 khóa giảng viên và 2 khóa doanh nghiệp:

- Phần dự án sau chia sẻ từ sinh viên: **26,4–39,6 triệu đồng** `[giả định]`.
- Giá trị khóa giảng viên: **40–100 triệu đồng**.
- Giá trị khóa doanh nghiệp: **40–200 triệu đồng**.
- Tổng quy mô thương mại: **106,4–339,6 triệu đồng**, chưa tính cấp quyền.

Mục tiêu tháng đầu không phải chỉ có hợp đồng trên giấy. Báo cáo phải tách:

- hợp đồng đã ký;
- tiền đã thu;
- lớp đã khai giảng;
- khóa đã hoàn thành;
- công nợ;
- chi phí trực tiếp;
- đóng góp.

## 8.3. Nguyên tắc dòng tiền

- Có ứng trước trước khi đặt lịch chuyên gia hoặc tùy chỉnh lớn.
- Đối với sinh viên, chốt rõ đơn vị thu tiền và lịch đối soát.
- Không để toàn bộ B2B thanh toán sau nghiệm thu.
- Các trường đã sẵn sàng cần được đưa vào lịch thu và lịch học cụ thể, không chỉ nằm trong pipeline.

---

## 9. Nền tảng và công nghệ

## 9.1. Yêu cầu kiến trúc ngay từ đầu

Nền tảng phải hỗ trợ:

- nhiều trường;
- nhiều chương trình;
- nhiều cohort;
- AI, vibe coding, STEAM và môn khác;
- giảng viên nội bộ và chuyên gia ngoài;
- học liệu, video, bài tập và rubric;
- sản phẩm đầu ra và portfolio;
- báo cáo theo trường;
- quyền truy cập và cấp quyền học liệu.

## 9.2. Tài sản tái sử dụng

| Tài sản | Vai trò |
|---|---|
| SOPai | Workflow, trạng thái học viên, lịch, nhắc việc và nộp bài |
| Arkon | Kho tri thức, trợ lý AI, RAG, hỗ trợ và chấm sơ bộ |
| henlich.vn | Landing page, đăng ký, lịch, booking và điểm danh |

## 9.3. Thứ tự phát triển

1. Quản lý trường, cohort và danh sách học viên.
2. Đăng ký, mã học viên, lịch và điểm danh.
3. Học liệu, nhiệm vụ, nộp bài và rubric.
4. Nhắc lịch và hỗ trợ tuyến đầu.
5. Thanh toán và đối soát.
6. Báo cáo theo trường.
7. Portfolio và hồ sơ năng lực.
8. Trợ lý AI, chấm sơ bộ và dashboard dữ liệu nâng cao.
9. Module STEAM và các môn mới trên cùng lõi LMS.

Chức năng nào chưa kịp hoàn thiện thì chạy hybrid; không hoãn lớp.

---

## 10. Tổ chức vận hành

## 10.1. Đội core

| Vai trò | Trách nhiệm |
|---|---|
| Điều hành/đối tác/bán hàng | Chốt trường, hợp đồng, lịch và nguồn lực |
| Phát triển nền tảng | Tích hợp và ưu tiên chức năng theo tải thật |
| Nội dung 1 | Chương trình, rubric và chuyên môn |
| Nội dung 2 | Học liệu, sản xuất nội dung và quản lý phiên bản |
| Hành chính/vận hành | Danh sách, lịch, hỗ trợ, đối soát và báo cáo |

## 10.2. Nguồn lực mở rộng

- Giảng viên thuê theo khóa.
- Chuyên gia theo ngành hoặc môn.
- Điều phối viên tại trường.
- Cộng tác viên hỗ trợ cohort.
- Giảng viên nguồn do trường giới thiệu.

## 10.3. Course Factory

1. Nhận yêu cầu.
2. Chốt đối tượng, chuẩn đầu ra và sản phẩm.
3. AI tạo bản nháp chương trình.
4. Chuyên gia duyệt.
5. Xây học liệu, bài tập và rubric.
6. Tạo sản phẩm mẫu.
7. Chạy thử nội bộ.
8. Đưa vào lớp thật.
9. Thu dữ liệu.
10. Cập nhật và đóng gói để tái sử dụng.

Mục tiêu không phải xây tất cả khóa trước. Mỗi môn mới được tạo nhanh khi có trường hoặc đơn vị đặt hàng.

---

## 11. Dashboard điều hành

### Theo trường

- Trạng thái thỏa thuận.
- Đầu mối.
- Số sinh viên.
- Chương trình.
- Lịch khai giảng.
- Trạng thái thu tiền.
- Tiến độ học.
- Tỷ lệ hoàn thành.
- Cohort tiếp theo.

### Theo chương trình

- Số trường triển khai.
- Số cohort.
- Số học viên mới và đang học.
- Tỷ lệ tham gia, hoàn thành và đạt chuẩn.
- Sản phẩm đầu ra.
- Chi phí vận hành.
- Phiên bản học liệu.

### B2B

- Đề xuất đã gửi.
- Hợp đồng đã ký.
- Tiền ứng trước và tiền đã thu.
- Lịch đào tạo.
- Khóa đã hoàn thành.
- Chi phí trực tiếp.
- Công nợ.
- Cơ hội bán tiếp.

### Nền tảng

- Lỗi và ticket.
- Tỷ lệ tự động xử lý.
- Số giờ hỗ trợ.
- Chi phí API và hạ tầng.
- Tính năng đang phát triển.
- Số trường và cohort đang hoạt động.

---

## 12. Quản trị chất lượng

Mỗi chương trình phải có:

- chuẩn đầu ra;
- cấu trúc buổi học;
- bài tập thực hành;
- sản phẩm cuối khóa;
- rubric;
- tiêu chí hoàn thành;
- dữ liệu và minh chứng;
- người chịu trách nhiệm chuyên môn;
- quy trình cập nhật.

Chương trình sinh viên không chỉ dạy prompt. Người học phải tạo được sản phẩm có thể hoạt động hoặc trình diễn.

Khóa giảng viên phải gắn với môn học, chuẩn đầu ra, phương pháp sư phạm, dữ liệu, liêm chính học thuật và kế hoạch áp dụng.

---

## 13. Rủi ro và kiểm soát

| Rủi ro | Kiểm soát |
|---|---|
| Xếp quá nhiều trường nhưng không đủ giảng viên | Lịch chung, giảng viên nguồn và mạng lưới chuyên gia |
| Nền tảng chưa hoàn thiện | Chạy hybrid, không hoãn lớp |
| Chất lượng giảm khi tăng nhanh | Rubric chung, QA và dashboard theo trường |
| Tiền về chậm | Ứng trước, lịch đối soát và công nợ rõ |
| Trường đồng ý nhưng chậm chốt lịch | Đưa từng trường vào bảng ngày khai giảng và người chịu trách nhiệm |
| Sinh viên đăng ký nhưng không học | Điều phối viên trường, nhắc lịch và báo cáo tham gia |
| Phụ thuộc một đầu mối | Mỗi trường có hợp đồng và đầu mối vận hành riêng |
| Thiếu chuyên gia môn mới | Danh sách chuyên gia dự phòng và hợp đồng theo chương trình |
| Sản phẩm giống khóa miễn phí | Đầu ra, rubric, AI+ / AIx, dữ liệu và hỗ trợ triển khai |
| Thu dữ liệu không phù hợp | Mục đích rõ, phân quyền và minh bạch |

---

## 14. Các quyết định còn cần anh Đức chốt

1. Danh sách cụ thể các trường đã đồng ý và số sinh viên dự kiến từng trường.
2. Ngày khai giảng đợt đầu.
3. Trường nào thuộc đợt 1, đợt 2 và đợt 3.
4. Cơ chế thu tiền tại từng trường.
5. Người dạy và điều phối viên cho từng cohort.
6. Trần số khóa B2B có thể giao mỗi tháng.
7. Mức hoàn thiện của SOPai, Arkon và henlich.vn.
8. Giá chính thức của chương trình 12–15 buổi và Vibe Coding.
9. Giá và phạm vi cấp quyền.
10. Môn STEAM hoặc môn mới nào có đơn vị đặt hàng đầu tiên.

Các câu hỏi này dùng để xếp lịch và phân bổ nguồn lực, không phải để quay lại xác minh nhu cầu thị trường.

---

## 15. Kết luận

Dự án đã có trường sẵn sàng, có chương trình cốt lõi và có năng lực triển khai. Vì vậy chiến lược đúng không phải là đi chậm để tìm một pilot nhỏ, mà là:

- khai giảng từ tuần thứ hai;
- kích hoạt 2–3 trường ngay trong tháng đầu;
- vận hành 200–300 sinh viên đợt đầu;
- mở các trường tiếp theo song song với việc hoàn thiện nền tảng;
- dùng hai chương trình AI theo khung năng lực và Vibe Coding làm sản phẩm sinh viên chủ lực;
- lấy các khóa giảng viên và doanh nghiệp làm dòng tiền B2B;
- dùng cấp quyền và nền tảng để tạo doanh thu lặp lại;
- thêm STEAM và các môn mới bằng chuyên gia theo nhu cầu thực tế.

Việc cần kiểm chứng trong ba tháng đầu là **công suất, chi phí và chất lượng khi mở rộng**, không phải kiểm chứng xem thị trường có trường hay người học hay không.