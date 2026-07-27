# Chi phí, dòng tiền và vốn lưu động

> Tài liệu này lấp khoảng trống lớn nhất của repo: toàn bộ kế hoạch cũ chỉ có doanh thu, không có một dòng chi phí nào được lượng hóa.
>
> Đọc cùng `AGENTS.md` mục 2 và 10, và `ke-hoach/unit-economics.md`.
>
> Mọi con số là `[giả định]` cho đến khi có 3 tháng vận hành thật.

> **[CẦN TÍNH LẠI — 27/07/2026]** Bảng dòng tiền 12 tháng ở mục 3 được dựng theo mô hình
> ba tầng cũ (phổ cập / thực hành / B2B) trước khi có `ke-hoach/muc-tieu-thang-1.md` và
> trước khi `docs/mo-hinh-doanh-thu.md` tách thành bốn dòng doanh thu.
>
> **Hệ quả cụ thể:** bảng mục 3 ghi dòng tiền tháng 1 là **âm 135 triệu**. Tính lại theo
> KPI hiện hành (2 khóa giảng viên + 2 khóa doanh nghiệp + 200 sinh viên online) thì con số
> là **khoảng âm 37 triệu**. Xem `THAO-LUAN.md` vấn đề 3 để biết cách tính.
>
> Dùng con số âm 37 triệu. Bảng mục 3 giữ lại để tham chiếu phương pháp, không dùng để
> điều hành, cho đến khi được dựng lại theo bốn dòng doanh thu.
>
> Phần chi phí cố định ở mục 1 và 2, cùng các ngưỡng cảnh báo ở mục 5, vẫn dùng được
> bình thường vì không phụ thuộc mô hình doanh thu.

Cập nhật: 2026-07-27

---

## 1. Chi phí cố định hàng tháng

Đội 5 người, Hà Nội, 2026.

### 1.1. Nhân sự

| Vai trò | Lương gộp/tháng | Gồm BHXH ~21,5% |
|---|---:|---:|
| Điều hành, quan hệ đối tác, bán hàng | 30–35 tr | 36–43 tr |
| Phát triển nền tảng | 25–30 tr | 30–36 tr |
| Xây dựng nội dung, thiết kế học tập (1) | 18–22 tr | 22–27 tr |
| Xây dựng nội dung, thiết kế học tập (2) | 15–20 tr | 18–24 tr |
| Hành chính, vận hành, đối soát | 12–15 tr | 15–18 tr |
| **Tổng nhân sự** | | **121–148 tr** |

Nếu founder không nhận lương giai đoạn đầu, trừ 36–43 triệu → còn **85–105 triệu**.
Nếu chỉ 4 người (1 người nội dung), trừ thêm 18–24 triệu.

### 1.2. Chi phí vận hành

| Khoản | Mức/tháng |
|---|---:|
| Văn phòng nhỏ hoặc coworking 5 chỗ | 6–10 tr |
| Kế toán thuê ngoài | 3–5 tr |
| Pháp lý, tư vấn định kỳ | 2–3 tr `[cần tăng trong quý I]` |
| Hạ tầng cloud, domain, email | 3–5 tr |
| Subscription AI (Claude, ChatGPT, công cụ) | 5–8 tr |
| LLM API cho nền tảng và trợ giảng AI | 4–10 tr (tăng theo số học viên) |
| Công cụ khác: thiết kế, video, quản lý | 2–4 tr |
| **Tổng vận hành** | **25–45 tr** |

### 1.3. Tổng cố định

| Kịch bản | Tổng/tháng | Tổng/năm |
|---|---:|---:|
| Tối giản (founder không lương, 4 người) | **92–126 tr** | 1,10–1,51 tỷ |
| Cơ sở (5 người, founder nhận lương) | **146–193 tr** | 1,75–2,32 tỷ |
| Dùng để lập kế hoạch | **150 tr** | **1,8 tỷ** |

> **Điểm cần quyết:** founder có nhận lương trong 6 tháng đầu không? Chênh lệch 36–43 triệu/tháng, tức 220–260 triệu trong nửa năm — bằng khoảng 4–5 hợp đồng B2B nhỏ. Quyết định này ảnh hưởng trực tiếp đến runway cần chuẩn bị ở mục 4.

---

## 2. Chi phí biến đổi

Không tính vào chi phí cố định, đã trừ trong bảng đóng góp của `unit-economics.md`. Ghi lại đây để đối chiếu.

| Khoản | Mức | Phát sinh khi |
|---|---|---|
| Giảng viên phổ cập | 10 tr/cohort | Mở cohort |
| Giảng viên thực hành | 20–25 tr/cohort | Mở cohort |
| Chuyên gia ngoài B2B | 25–35% doanh thu thuần | Ký hợp đồng |
| Trợ giảng | 4 tr/người/cohort | Mở cohort |
| Phí thanh toán | 1,1–2,5% | Thu tiền |
| LLM API theo học viên | ~10.000đ/người | Học viên hoạt động |
| Chi phí bán hàng B2B | ~5 tr/hợp đồng | Theo đuổi hợp đồng |

**Nguyên tắc bảo vệ dòng tiền:** ưu tiên cấu trúc chi phí biến đổi thay vì cố định. Chuyên gia trả theo cohort, không trả lương tháng. Trợ giảng theo đợt, không tuyển toàn thời gian.

---

## 3. Dòng tiền 12 tháng — kịch bản cơ sở `[MÔ HÌNH CŨ, CẦN DỰNG LẠI]`

> **Lưu ý về tháng 1:** mục tiêu điều hành mới nhất là 2 khóa giảng viên, 2 khóa doanh nghiệp và 200–300 sinh viên online. Bảng dưới đây là kịch bản dòng tiền thận trọng, chỉ ghi nhận B2B khi hợp đồng đã ký và tiền thực sự về. Không dùng cột tháng 1 trong bảng này để thay thế KPI tại `ke-hoach/muc-tieu-thang-1.md`.

Giả định:
- Chi phí cố định 150 tr/tháng
- Mùa vụ: tháng 6–8 giảm mạnh (nghỉ hè), tháng 1–2 giảm (Tết), tháng 9–11 và 3–4 cao điểm
- B2B trả trước 50% khi ký, 50% khi nghiệm thu

| Tháng | Mùa vụ | Đóng góp phổ cập | Đóng góp thực hành | Đóng góp B2B | Tổng đóng góp | Chi cố định | Dòng tiền tháng | Lũy kế |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| 1 | Thấp (chuẩn bị) | 15 | 0 | 0 | 15 | 150 | −135 | **−135** |
| 2 | TB | 30 | 0 | 35 | 65 | 150 | −85 | **−220** |
| 3 | Cao | 55 | 40 | 35 | 130 | 150 | −20 | **−240** |
| 4 | Cao | 60 | 53 | 70 | 183 | 150 | +33 | **−207** |
| 5 | TB (mùa thi) | 40 | 53 | 35 | 128 | 150 | −22 | **−229** |
| 6 | Thấp (hè) | 20 | 40 | 70 | 130 | 150 | −20 | **−249** |
| 7 | Thấp (hè) | 20 | 53 | 105 | 178 | 150 | +28 | **−221** |
| 8 | Thấp (hè) | 25 | 53 | 105 | 183 | 150 | +33 | **−188** |
| 9 | Cao (khai giảng) | 90 | 66 | 70 | 226 | 155 | +71 | **−117** |
| 10 | Cao | 95 | 66 | 105 | 266 | 155 | +111 | **−6** |
| 11 | Cao | 100 | 66 | 105 | 271 | 155 | +116 | **+110** |
| 12 | TB (mùa thi) | 60 | 53 | 140 | 253 | 155 | +98 | **+208** |
| **Tổng** | | **610** | **543** | **875** | **2.028** | **1.820** | **+208** | |

*Đơn vị: triệu đồng*

### Đọc bảng

- **Điểm âm sâu nhất: tháng 6, lũy kế −249 triệu.**
- **Hòa vốn lũy kế: khoảng tháng 10–11.**
- Kết quả cả năm chỉ +208 triệu — mỏng, và mọi sai lệch nhỏ đều đẩy sang âm.
- **Ba tháng hè là vùng nguy hiểm:** phổ cập gần như dừng, chỉ B2B và thực hành giữ dòng tiền. Nếu B2B chưa chạy được vào tháng 6, lũy kế có thể chạm −350 triệu.

### Kịch bản xấu

Nếu B2B chỉ đạt 50% kế hoạch (438 triệu thay vì 875 triệu):

- Tổng đóng góp: 1,59 tỷ
- Kết quả năm: **−230 triệu**
- Điểm âm sâu nhất: khoảng −400 triệu vào tháng 8
- **Không hòa vốn trong năm đầu**

---

## 4. Nhu cầu vốn

| Hạng mục | Số tiền |
|---|---:|
| Bù thâm hụt lũy kế, kịch bản cơ sở | 250 tr |
| Bù thâm hụt lũy kế, kịch bản xấu | 400 tr |
| Đầu tư ban đầu: nền tảng, học liệu gốc, thiết bị | 100–150 tr |
| Dự phòng 3 tháng chi cố định | 450 tr |
| **Runway cần chuẩn bị** | **800 tr – 1,0 tỷ** |

### Ba nguồn khả dĩ

1. **Hợp đồng B2B trả trước trong quý I.** Rẻ nhất, không pha loãng. Cần 2–3 hợp đồng ký sớm với điều khoản trả trước 50%. **Đây nên là ưu tiên số một.**
2. **Dòng tiền từ các mảng khác của Bitsness.** Nếu Tencent Cloud reseller hoặc mảng tư vấn tự động hóa đang dương, có thể gánh giai đoạn đầu.
3. **Vốn ngoài.** Chỉ nên tính đến khi đã có 3 tháng số liệu thật — gọi vốn với kế hoạch chưa kiểm chứng sẽ định giá thấp.

> **Điểm cần quyết:** nguồn nào gánh giai đoạn tháng 1–8? Nếu chưa có câu trả lời, phải hạ chi phí cố định xuống mức tối giản ở mục 1.3 trước khi khởi động.

---

## 5. Ngưỡng cảnh báo và hành động

Kiểm tra hàng tháng. Chạm ngưỡng nào thì thực hiện hành động tương ứng ngay, không chờ quý sau.

| Ngưỡng | Hành động bắt buộc |
|---|---|
| Đóng góp/tháng < 60% kế hoạch trong 2 tháng liên tiếp | Dừng mở cohort mới, rà lại cấu hình quy mô và tỷ lệ chia |
| Thâm hụt lũy kế vượt 350 tr | Cắt chi phí cố định về mức tối giản, hoãn tuyển |
| Đóng góp phổ cập < 0 | Dừng toàn bộ phổ cập cho đến khi sửa được quy mô cohort hoặc tỷ lệ chia |
| Chưa ký hợp đồng B2B nào đến hết tháng 3 | Xem lại toàn bộ giả định — B2B là biến số quyết định |
| Chi phí biến đổi > 50% doanh thu thuần | Đàm phán lại chuyên gia hoặc tăng quy mô cohort |
| Runway còn dưới 3 tháng | Chuyển sang chế độ chỉ nhận việc trả trước |

---

## 6. Nguyên tắc quản trị dòng tiền

1. **Thu trước, chi sau.** Học phí thu trước khi khai giảng. Hợp đồng B2B có điều khoản trả trước tối thiểu 40%.
2. **Chi phí biến đổi thay vì cố định.** Chuyên gia và trợ giảng trả theo cohort. Không tuyển toàn thời gian cho việc chưa ổn định.
3. **Không ứng tiền cho đối tác.** Phần chia cho trường trả sau khi đã thu đủ và đối soát xong, không trả trước theo cam kết.
4. **Tách quỹ theo cohort.** Mỗi cohort có sổ riêng: thu, chi, đóng góp. Không gộp chung để tránh cohort lỗ ẩn sau cohort lãi.
5. **Rà mùa vụ mỗi quý.** Không lập kế hoạch tăng trưởng tuyến tính.

---

## 7. Những con số phải đo và cập nhật

| Chỉ số | Tần suất | Nguồn |
|---|---|---|
| Chi phí cố định thực tế | Tháng | Sổ kế toán |
| Đóng góp thực tế từng cohort | Mỗi cohort | Sổ cohort |
| Số ngày từ ký hợp đồng B2B đến nhận tiền | Mỗi hợp đồng | Theo dõi công nợ |
| Chi phí LLM API/học viên | Tháng | Dashboard nhà cung cấp |
| Số giờ vận hành thực tế/cohort | Mỗi cohort | Log công việc |
| Thâm hụt lũy kế | Tháng | Bảng dòng tiền |

Sau 3 tháng, thay toàn bộ nhãn `[giả định]` trong tài liệu này bằng số thật và lập lại bảng mục 3.

---

## 8. Changelog

| Ngày | Thay đổi | Bởi |
|---|---|---|
| 2026-07-27 | Tạo tài liệu. Lượng hóa chi phí cố định 5 người, dựng bảng dòng tiền 12 tháng có tính mùa vụ, xác định nhu cầu runway 800 tr – 1 tỷ và các ngưỡng cảnh báo. | Claude |
