# Unit economics — kinh tế đơn vị theo từng tầng sản phẩm

> Tài liệu này là căn cứ định lượng bắt buộc cho mọi kế hoạch doanh thu.
> Đọc cùng `AGENTS.md` mục 5 và `ke-hoach/chi-phi-va-dong-tien.md`.
>
> Mọi con số dưới đây là `[giả định]` cho đến khi cohort đầu tiên chạy xong và có số thật.
> Sau cohort đầu, cập nhật ngay và ghi `[thực tế, <ngày>]`.

Cập nhật: 2026-07-27

> **Quyết định mới nhất:** KPI tháng 1 là 2 khóa giảng viên, 2 khóa doanh nghiệp và 200–300 sinh viên online. Khóa giảng viên có giá 20–50 triệu đồng/khóa; khóa doanh nghiệp 20–100 triệu đồng/khóa. Các bảng dưới đây là giả định để kiểm tra biên, không thay thế `ke-hoach/muc-tieu-thang-1.md`.

---

## 0. Vì sao cần tài liệu này

Kế hoạch cũ tính doanh thu bằng công thức `số người học × học phí`. Công thức đó cho ra **doanh thu gộp**, không phải tiền dự án giữ lại. Khoảng cách giữa hai con số là 60–93% tùy cấu hình — đủ lớn để biến một kế hoạch có lãi thành một kế hoạch lỗ.

Tài liệu này bóc từng đồng, cho cả ba tầng sản phẩm.

**Khái niệm dùng thống nhất:**

| Thuật ngữ | Định nghĩa |
|---|---|
| Học phí gộp | Số tiền người học trả |
| Doanh thu thuần | Học phí gộp trừ phần chia đối tác và phí thanh toán |
| Chi phí biến đổi | Chi phí phát sinh theo từng cohort: giảng viên, trợ giảng, vận hành lớp |
| **Đóng góp** | Doanh thu thuần trừ chi phí biến đổi. **Đây là con số dùng để phủ chi phí cố định.** |
| Chi phí cố định | 135–170 triệu/tháng, không đổi theo số cohort |

Quy tắc: khi nói "doanh thu" trong mọi tài liệu kế hoạch, phải ghi rõ đang nói con số nào.

---

## 1. Giả định chi phí đầu vào

| Khoản | Mức | Ghi chú |
|---|---:|---|
| Giảng viên (khóa phổ cập 4 buổi) | 10 triệu/cohort | Cố định theo cohort, không theo số người |
| Giảng viên (khóa thực hành 6–8 buổi) | 20–25 triệu/cohort | Hoặc chia 25–35% doanh thu thuần nếu là chuyên gia ngoài |
| Trợ giảng | 4 triệu/người/cohort | 1 trợ giảng phục vụ ~60–80 học viên phổ cập |
| Phí cổng thanh toán | 2,5% | Có thể giảm còn 1,1–1,5% nếu dùng VietQR/chuyển khoản định danh |
| Nền tảng, học liệu vận hành | 10.000đ/người | Hosting, LLM API, lưu trữ sản phẩm |
| Hỗ trợ học viên, đối soát | 10.000đ/người | Giảm mạnh nếu tự động hóa — xem mục 5 |
| Chia đối tác/trường | 15–40% học phí gộp | Biến số quan trọng nhất — xem mục 6 |

---

## 2. Tầng 1 — Khóa phổ cập

**Sản phẩm:** AI Fluency cho sinh viên và các khóa phổ cập bán theo học phí/người.
**Học phí:** 220.000đ `[giả định]`

> AI Essentials for Educators khi đào tạo trực tiếp cho giảng viên được xếp vào dòng B2B, khung giá 20–50 triệu đồng/khóa; không dùng bảng học phí/người ở phần này.

### 2.1. Bảng đóng góp theo cấu hình

Tính trên mỗi người học:

| Khoản | 200 người, chia 40% | 500 người, chia 40% | 500 người, chia 20% | 500 người, chia 20%, trợ giảng AI |
|---|---:|---:|---:|---:|
| Học phí gộp | 220.000 | 220.000 | 220.000 | 220.000 |
| Chia đối tác | −88.000 | −88.000 | −44.000 | −44.000 |
| Phí thanh toán | −6.000 | −6.000 | −6.000 | −6.000 |
| **Doanh thu thuần** | **126.000** | **126.000** | **170.000** | **170.000** |
| Giảng viên | −50.000 | −20.000 | −20.000 | −20.000 |
| Trợ giảng | −40.000 | −32.000 | −32.000 | −8.000 |
| Nền tảng, học liệu | −10.000 | −10.000 | −10.000 | −10.000 |
| Hỗ trợ, đối soát | −10.000 | −10.000 | −10.000 | −3.000 |
| **Đóng góp/người** | **16.000** | **54.000** | **98.000** | **129.000** |
| **Biên đóng góp** | **7%** | **25%** | **45%** | **59%** |
| **Đóng góp/cohort** | **3,2 tr** | **27 tr** | **49 tr** | **64,5 tr** |

### 2.2. Số cohort cần để hòa chi phí cố định

Lấy chi phí cố định 150 triệu/tháng:

| Cấu hình | Cohort/tháng | Người học/tháng |
|---|---:|---:|
| 200 người, chia 40% | 47 | 9.400 |
| 500 người, chia 40% | 5,6 | 2.800 |
| 500 người, chia 20% | 3,1 | 1.550 |
| 500 người, chia 20%, trợ giảng AI | 2,3 | 1.150 |

### 2.3. Kết luận tầng 1

**Cấu hình mặc định trong kế hoạch cũ (200 người, chia 40%) là không khả thi.** Biên 7% nghĩa là mỗi cohort 200 người chỉ để lại 3,2 triệu — chưa bằng một ngày công của đội.

Ngay cấu hình tốt nhất vẫn cần 1.150 người/tháng để hòa vốn cố định, tức toàn bộ năng lực đội dồn vào phổ cập và không còn gì cho B2B.

**Vì vậy tầng 1 không được coi là nguồn thu.** Vai trò của nó:

- Mở quan hệ với trường và đầu mối
- Tạo dữ liệu năng lực và case study
- Tạo nguồn học viên cho tầng 2 và tầng 3

**KPI đúng cho tầng 1:** tỷ lệ chuyển đổi lên tầng 2, số hợp đồng B2B sinh ra từ quan hệ, và **đóng góp ≥ 0** (không lỗ). Không phải doanh thu.

### 2.4. Ngưỡng dừng

Không mở cohort phổ cập nếu:

- Quy mô dự kiến dưới 300 người **và** tỷ lệ chia trên 25%
- Chưa có cổng thanh toán tự động đối soát
- Chưa xác định ai chịu trách nhiệm hỗ trợ học viên tại đơn vị

---

## 3. Tầng 2 — Khóa thực hành

**Sản phẩm:** Vibe Coding Foundation (6–8 buổi), AI thực hành nâng cao
**Học phí:** 2.500.000đ `[giả định]`
**Quy mô cohort:** 30–50 người
**Kênh bán:** trực tiếp, chủ yếu từ học viên tầng 1 — **thường không qua trường nên không mất phần chia**

### 3.1. Bảng đóng góp

Tính trên mỗi người học, cohort 40 người:

| Khoản | Bán trực tiếp | Qua trường, chia 20% |
|---|---:|---:|
| Học phí gộp | 2.500.000 | 2.500.000 |
| Chia đối tác | 0 | −500.000 |
| Phí thanh toán | −62.500 | −62.500 |
| **Doanh thu thuần** | **2.437.500** | **1.937.500** |
| Giảng viên (25 tr/cohort) | −625.000 | −625.000 |
| Trợ giảng (2 người) | −200.000 | −200.000 |
| Nền tảng, hạ tầng dev, LLM API | −150.000 | −150.000 |
| Chấm sản phẩm, phản hồi | −100.000 | −100.000 |
| Hỗ trợ, đối soát | −30.000 | −30.000 |
| **Đóng góp/người** | **1.332.500** | **832.500** |
| **Biên đóng góp** | **53%** | **33%** |
| **Đóng góp/cohort 40 người** | **53,3 tr** | **33,3 tr** |

### 3.2. Kết luận tầng 2

Một cohort 40 người bán trực tiếp cho đóng góp **53 triệu** — tương đương 17 cohort phổ cập 200 người.

Đây là tầng có hiệu quả tốt nhất trong mảng bán lẻ. Ưu tiên bán trực tiếp, tránh đưa qua trường trừ khi trường thực sự làm tuyển sinh.

**Chỉ số cần theo dõi:** tỷ lệ chuyển đổi từ tầng 1. Repo cũ đặt 10–15%, sau tăng 15–20%. Với học phí gấp 11 lần tầng 1, mức 5–8% đã là tốt trong 3 tháng đầu. Đặt kỳ vọng ở 6%, mừng nếu vượt.

Nếu 1.000 người học tầng 1 → 60 người lên tầng 2 → 1,5 cohort → đóng góp ~80 triệu. Con số này mới là giá trị thật của một đợt phổ cập 1.000 người.

---

## 4. Tầng 3 — B2B

**Sản phẩm:** Faculty AI Builder, AI Essentials for Educators trực tiếp, Enterprise AI, AI School Starter và số hóa chương trình.

**Khung giá đã chốt:**

- Khóa trực tiếp cho giảng viên: **20–50 triệu đồng/khóa**.
- Khóa trực tiếp cho doanh nghiệp: **20–100 triệu đồng/khóa**.

Bảng hợp đồng 100 triệu bên dưới phù hợp hơn với một khóa doanh nghiệp ở nhóm trên; không dùng nguyên xi cho khóa giảng viên.

### 4.1. Bảng đóng góp, hợp đồng 100 triệu

| Khoản | Số tiền |
|---|---:|
| Giá trị hợp đồng | 100.000.000 |
| Thuế, phí giao dịch | −2.000.000 |
| Giảng viên/chuyên gia (30%) | −30.000.000 |
| Sản xuất nội dung riêng | −8.000.000 |
| Hạ tầng, LLM API, công cụ | −3.000.000 |
| Chi phí bán hàng, đi lại, tiếp xúc | −5.000.000 |
| **Đóng góp** | **52.000.000** |
| **Biên đóng góp** | **52%** |

### 4.2. So sánh hiệu quả trên mỗi giờ công

| Hướng | Công sức ước tính | Đóng góp | Đóng góp/tuần-người |
|---|---|---:|---:|
| 1 hợp đồng B2B 100 triệu | 1 người × 3,5 tuần | 52 tr | **~15 tr** |
| 1 cohort thực hành 40 người | 1 người × 3 tuần | 53 tr | **~18 tr** |
| 1 cohort phổ cập 500 người, chia 20% | 1,5 người × 2 tuần | 49 tr | **~16 tr** |
| 1 cohort phổ cập 200 người, chia 40% | 1 người × 2 tuần | 3,2 tr | **~1,6 tr** |

**Đọc bảng này:** ba hướng đầu tương đương nhau về hiệu quả trên giờ công. Hướng thứ tư kém hơn một bậc.

Nghĩa là **không có một "kênh tốt nhất" duy nhất** — điều quan trọng là tránh cấu hình xấu (cohort nhỏ + chia cao), chứ không phải chọn kênh nào.

Tuy nhiên B2B có ba lợi thế mà hai kênh kia không có:

- **Trả trước hoặc trả theo mốc** → giải quyết vốn lưu động
- **Không phụ thuộc mùa vụ** trường học
- **Không tạo tải vận hành** hàng nghìn giao dịch nhỏ

Vì vậy ưu tiên B2B trong 6 tháng đầu, khi dòng tiền là ràng buộc lớn nhất.

---

## 5. Ba đòn bẩy cải thiện biên

### 5.1. Quy mô cohort — đòn bẩy mạnh nhất, dễ nhất

Chi phí giảng viên cố định theo cohort. Tăng từ 200 lên 500 người làm biên nhảy từ 7% lên 25% mà không cần đàm phán gì với ai.

**Hành động:** không mở cohort phổ cập dưới 300 người. Gom nhiều đơn vị vào một cohort chung thay vì mở riêng cho từng trường.

### 5.2. Tự động hóa trợ giảng và hỗ trợ bằng AI

Trợ giảng + hỗ trợ + đối soát chiếm 50.000đ/người ở cấu hình 200, tức 23% học phí gộp.

Mục tiêu đưa xuống 11.000đ/người:

| Việc | Cách tự động hóa | Công cụ có sẵn |
|---|---|---|
| Trả lời câu hỏi tuyến đầu | Trợ lý AI qua Zalo OA, có kho tri thức khóa học | **Arkon** |
| Đối soát thanh toán | VietQR định danh theo mã học viên, tự khớp | Tích hợp mới |
| Nhắc lịch, điểm danh, nhắc nộp bài | Workflow tự động theo state machine | **SOPai** |
| Chấm sơ bộ sản phẩm theo rubric | LLM chấm vòng 1, người duyệt vòng 2 | Arkon + SOPai |

**Đây phải là năng lực lõi.** Một dự án về AI mà vẫn cần 4 trợ giảng người thật cho 500 học viên là mâu thuẫn nội tại — và cũng là chỗ khó thuyết phục khách hàng B2B nhất.

### 5.3. Tỷ lệ chia với đối tác

Từ 40% xuống 20% làm biên nhảy từ 25% lên 45%.

**Nguyên tắc đàm phán:** tỷ lệ chia phải tương ứng với lao động đối tác thực sự bỏ ra, viết thành SOW trong hợp đồng.

| Đối tác làm gì | Tỷ lệ hợp lý |
|---|---:|
| Chỉ gửi thông báo, cho mượn danh | 10–15% |
| Thêm: tuyển sinh, gom danh sách | 20–25% |
| Thêm: thu tiền hộ, đối soát | 30% |
| Thêm: điều phối viên tại chỗ, hỗ trợ học viên, thu sản phẩm | 35–40% |

Mức 40% chỉ dành cho trường hợp cuối — khi đối tác gánh phần lớn tải vận hành mà 5 người không tự làm được. Khi đó 40% là **mua lao động**, không phải nhượng bộ.

---

## 6. Tổng hợp: đóng góp 12 tháng theo kịch bản

| Nguồn | Kịch bản thận trọng | Kịch bản cơ sở |
|---|---:|---:|
| **Phổ cập** | 8.000 lượt × 45.000 = **360 tr** | 12.000 lượt × 55.000 = **660 tr** |
| **Thực hành** | 250 người × 1,33 tr = **332 tr** | 400 người × 1,33 tr = **532 tr** |
| **B2B** | 12 HĐ × 35 tr = **420 tr** | 20 HĐ × 70 tr = **1.400 tr** |
| **Tổng đóng góp** | **1,11 tỷ** | **2,59 tỷ** |
| Chi phí cố định | −1,6 tỷ | −2,0 tỷ |
| **Kết quả** | **−490 tr** | **+590 tr** |

**Biến số quyết định là cột B2B**, chênh gần 1 tỷ giữa hai kịch bản. Phổ cập và thực hành cộng lại chỉ chênh 500 triệu.

Hệ quả cho việc phân bổ thời gian đội: **thời gian của người làm B2B là tài nguyên đắt nhất của dự án.** Mọi việc có thể đẩy sang AI hoặc chuyên gia ngoài đều nên đẩy, để bảo vệ quỹ thời gian này.

---

## 7. Những con số phải đo trong cohort đầu tiên

Toàn bộ tài liệu này là giả định. Cohort đầu tiên phải trả lời:

| Chỉ số | Cách đo | Dùng để sửa gì |
|---|---|---|
| Tỷ lệ đăng ký → thanh toán | Đếm | Dự báo doanh thu |
| Tỷ lệ thanh toán → học buổi 1 | Điểm danh | Quy mô cohort thật |
| Tỷ lệ hoàn thành | Nộp sản phẩm cuối | Kỳ vọng 50%, không phải 70% |
| Số giờ hỗ trợ học viên thực tế | Ghi log | Chi phí trợ giảng thật |
| Số giờ đối soát thanh toán | Ghi log | Mức độ cấp thiết của tự động hóa |
| Tỷ lệ chuyển lên tầng 2 | Đếm sau 30 ngày | Giá trị thật của phổ cập |
| Chi phí trực tiếp/người hoàn thành | Tổng chi biến đổi ÷ số hoàn thành | Xác nhận hoặc bác bỏ bảng mục 2 |

**Không mở rộng quy mô cho đến khi có đủ bảy con số này.**

---

## 8. Changelog

| Ngày | Thay đổi | Bởi |
|---|---|---|
| 2026-07-27 | Tạo tài liệu. Bóc đóng góp cho 3 tầng sản phẩm, xác định phổ cập không phải nguồn thu, xác định B2B là biến số quyết định. Toàn bộ là giả định chờ cohort đầu kiểm chứng. | Claude |
