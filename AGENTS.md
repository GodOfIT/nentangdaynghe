# AGENTS.md — Bối cảnh chung cho các trợ lý AI làm việc trên repo này

> **Đọc file này trước tiên, trước mọi file khác trong repo.**
>
> Repo này được nhiều trợ lý AI cùng làm việc (Claude, ChatGPT/Codex và có thể thêm). File này là nguồn sự thật chung về bối cảnh, ràng buộc và những vấn đề đang tồn tại.
>
> **Quy tắc ưu tiên:** nếu file này mâu thuẫn với bất kỳ file nào khác trong repo, **file này thắng**, cho đến khi file kia được sửa. Các tài liệu khác được viết ở giai đoạn giả định bộ máy lớn và chưa được dọn hết.

Cập nhật lần cuối: 2026-07-27
Người chủ trì: Bùi Minh Đức

## Quyết định điều hành mới nhất

Khi có mâu thuẫn giữa các con số trong file này và các kế hoạch cũ, ưu tiên các quyết định sau:

- Tháng 1 bắt đầu đào tạo từ tuần thứ hai.
- KPI tháng 1: **2 khóa trực tiếp cho giảng viên**, **2 khóa trực tiếp cho doanh nghiệp** và **200–300 sinh viên thanh toán, bắt đầu học online**.
- Khóa giảng viên có khung giá **20–50 triệu đồng/khóa**.
- Khóa doanh nghiệp có khung giá **20–100 triệu đồng/khóa**.
- Sinh viên có hai mô hình độc lập: bán quyền sử dụng khóa học cho trường/đối tác và dự án tự vận hành lớp online.
- `ke-hoach/muc-tieu-thang-1.md` là nguồn ưu tiên cho KPI tháng 1.
- Doanh thu lớp sinh viên online tính theo số người thanh toán và học phí thực thu. Doanh thu B2B tính theo số khóa đã ký, giá trị hợp đồng và tiền thực thu; không áp dụng công thức học phí/người cho B2B.

---

## 1. Tóm tắt vấn đề trong một đoạn

Repo mô tả một hệ sinh thái giáo dục nghề 5 trục, lập kế hoạch cho bộ máy 25–40 người, doanh thu mục tiêu 13–35 tỷ. **Thực tế nguồn lực là 5 người core.** Toàn bộ phần định lượng của kế hoạch cần tính lại, và phần lớn phạm vi cần cắt. Tài liệu chiến lược và định vị vẫn tốt, giữ nguyên. Vấn đề nằm ở chỗ repo đang mang hai phiên bản kế hoạch chồng lên nhau mà không file nào tuyên bố mình là bản chính.

---

## 2. Nguồn lực thật (thay thế mọi giả định nhân sự trong repo)

### 2.1. Đội core: 5 người

| Vai trò | Số lượng | Ghi chú |
|---|---:|---|
| Điều hành, quan hệ đối tác, bán hàng | 1 | Đồng thời là người dạy chính giai đoạn đầu |
| Phát triển nền tảng (cùng AI) | 1 | |
| Xây dựng nội dung, thiết kế học tập | 1–2 | |
| Hành chính, vận hành, đối soát | 1 | |

Ngoài core: **mạng lưới chuyên gia thuê ngoài** cho các mảng chuyên môn sâu.

`docs/bo-may-van-hanh.md` đang ghi 25–40 người — **con số đó đã lỗi thời, bỏ qua.**

### 2.2. Chi phí cố định tương ứng

135–170 triệu/tháng, tức **1,6–2,0 tỷ/năm**. Bao gồm lương 5 người đã tính BHXH, văn phòng, kế toán, pháp lý, hạ tầng, subscription AI và công cụ.

Mọi kế hoạch doanh thu phải đặt cạnh con số này.

### 2.3. Tài sản kỹ thuật đã có, phải tái sử dụng

Đây là lợi thế mà repo hiện **không nhắc tới dòng nào**, và là lý do một dev có thể làm được việc của một đội:

| Tài sản | Bản chất | Dùng cho phân hệ nào |
|---|---|---|
| **SOPai** | Engine workflow trên state machine | Vòng đời cohort: đăng ký → thanh toán → học → nộp bài → chấm → cấp chứng nhận. Đây là phần lõi. |
| **Arkon** | Knowledge hub, MCP server, RAG | Kho học liệu, trợ lý AI cho giáo viên, trợ giảng AI trả lời học viên |
| **henlich.vn** | Lịch, booking, bio-link | Lịch học, đăng ký cohort, điểm danh, trang landing từng cohort |

**Nguyên tắc:** không đề xuất xây từ đầu bất kỳ thứ gì trong ba mảng trên. Nếu cần, hãy hỏi mức độ hoàn thiện hiện tại trước khi lập kế hoạch kỹ thuật.

---

## 3. Mâu thuẫn đang tồn tại trong repo — đừng lan truyền chúng

| Chỗ mâu thuẫn | File A | File B | Bản nào đúng |
|---|---|---|---|
| Mô hình doanh thu | `docs/mo-hinh-doanh-thu.md`: 13–35 tỷ theo công thức cũ | `ke-hoach/ke-hoach-kinh-doanh-12-thang.md` và `ke-hoach/muc-tieu-thang-1.md`: tách sinh viên online, bán khóa, giảng viên và doanh nghiệp | **Ưu tiên các file kế hoạch mới**, đồng thời dùng unit economics để kiểm tra đóng góp |
| Kế hoạch 12 tháng | `ke-hoach/ke-hoach-12-thang.md`: 60–100 trường, 15.000–25.000 học sinh | `ke-hoach/ke-hoach-kinh-doanh-12-thang.md`: 120–130 đơn vị, 21.000–27.000 lượt | **B** là bản điều hành. A là tầm nhìn sản phẩm, không phải cam kết. |
| Quy mô nhân sự | `docs/bo-may-van-hanh.md`: 25–40 người | File này: 5 người | **File này** |

**Điểm cần nhấn:** bảng công thức trong `mo-hinh-doanh-thu.md` ("50 hợp đồng × 60–120 triệu", "60–100 trường × 80–200 triệu/năm") vi phạm đúng nguyên tắc mà chính repo đặt ra tại `docs/the-manh-du-an.md` mục 5 — cấm suy ngược doanh thu từ giá hợp đồng giả định. Đây là tàn dư của phiên bản cũ chưa dọn.

---

## 4. Ràng buộc bắt buộc khi lập bất kỳ kế hoạch nào

Đây là các ràng buộc cứng. Kế hoạch vi phạm bất kỳ điểm nào dưới đây đều không dùng được.

1. **Tách đúng công thức theo dòng sản phẩm.** Sinh viên online tính theo số người trả phí × học phí thực thu; đào tạo giảng viên và doanh nghiệp tính theo số khóa, giá trị hợp đồng và tiền đã thu.
2. **Mọi con số doanh thu phải có con số chi phí đi kèm.** Không trình bày doanh thu gộp như thể là tiền về túi.
3. **Phải kiểm tra trần năng lực vận hành trước khi đặt KPI quy mô.** Xem mục 6 — nút thắt không phải giờ giảng.
4. **Phải tính mùa vụ.** Tháng 6–8 nghỉ hè, tháng 1–2 Tết, tháng 5 và 12 mùa thi. Không đặt tăng trưởng tuyến tính đều mỗi tháng.
5. **Không hứa sản phẩm cần phần cứng ở quy mô lớn.** Xem mục 7.
6. **Chỉ 2 trục sản phẩm trong 12 tháng đầu.** Xem mục 8.
7. **Không đề xuất "tuyển thêm người" như giải pháp mặc định.** 5 người là ràng buộc, không phải biến số. Nếu một kế hoạch chỉ chạy được khi có 15 người, kế hoạch đó sai.
8. **Đánh dấu rõ đâu là giả định.** Mọi con số chưa được kiểm chứng bằng dữ liệu thật phải ghi `[giả định]`.

---

## 5. Unit economics — bảng số phải dùng

Chi tiết đầy đủ tại `ke-hoach/unit-economics.md`. Tóm tắt cấu hình khóa phổ cập:

| Khoản/người | 200 người, chia 40% | 500 người, chia 40% | 500 người, chia 20% |
|---|---:|---:|---:|
| Học phí | 220.000 | 220.000 | 220.000 |
| Chia đối tác | −88.000 | −88.000 | −44.000 |
| Phí thanh toán | −6.000 | −6.000 | −6.000 |
| Giảng viên | −50.000 | −20.000 | −20.000 |
| Trợ giảng | −40.000 | −32.000 | −32.000 |
| Nền tảng, LLM API | −10.000 | −10.000 | −10.000 |
| Hỗ trợ học viên, đối soát | −10.000 | −10.000 | −10.000 |
| **Đóng góp/người** | **16.000** | **54.000** | **98.000** |
| **Đóng góp/cohort** | **3,2 triệu** | **27 triệu** | **49 triệu** |

### Kết luận rút ra

**Ở cấu hình mà repo đang giả định (cohort 200, chia 40%), biên đóng góp chỉ 7% học phí gộp.** Để phủ 150 triệu chi phí cố định mỗi tháng cần ~47 cohort/tháng, tương đương 9.400 người học/tháng. Bất khả thi.

Ngay ở cấu hình tốt nhất (500 người, chia 20%), vẫn cần 1.500 người học/tháng chỉ để hòa chi phí cố định, chưa có lợi nhuận. Mà 1.500/tháng chính là mức trần kế hoạch đặt cho tháng 11–12.

**Vì vậy: khóa phổ cập là kênh tuyển sinh và tạo dữ liệu, KHÔNG phải nguồn thu.** Repo đã viết đúng điều này một nửa rồi lại tính 1,44–4,95 tỷ doanh thu từ chính nó. Hai cách hiểu không tồn tại song song được.

### Ba đòn bẩy để phổ cập ít nhất hòa vốn

- Cohort ≥500 người (chi phí giảng viên gần như cố định)
- Hạ tỷ lệ chia xuống 15–25%
- Cắt chi phí trợ giảng bằng AI — đòn bẩy này nên là năng lực lõi của chính dự án

### Về tỷ lệ chia 40%

Chỉ hợp lý nếu trường/đầu mối thực sự làm tuyển sinh, thu tiền, điều phối và hỗ trợ tại chỗ — tức mua lao động vận hành mà 5 người không tự làm được. Nếu vậy phải viết thành SOW cụ thể trong hợp đồng. Nếu trường chỉ cho mượn danh và gửi thông báo, 40% là quá đắt.

---

## 6. Nút thắt thật: trần vận hành, không phải giờ giảng

Đây là chỗ mọi kế hoạch dễ sai nhất.

Tháng 1 theo kế hoạch cần ~14–20 buổi giảng, tương đương 30–50 giờ. **Một người làm được** nếu nội dung đã sẵn. Giảng dạy không phải nút thắt.

Nút thắt nằm ở phần không ai tính:

- **Đối soát hàng trăm giao dịch thanh toán nhỏ.** Nếu thu qua chuyển khoản thủ công, đây là tải vận hành lớn và dễ sai sót.
- **Hỗ trợ học viên.** 200–300 sinh viên vẫn cần quy trình trả lời và nhắc lịch rõ ràng.
- **Thu và chấm sản phẩm** cho nhóm hoàn thành.
- **Đồng thời** phải xây nền tảng, tuyển chuyên gia, chốt đầu mối và bán B2B.

### Ba điều kiện bắt buộc trước khi mở quy mô 1.000 người

1. Cổng thanh toán tự động đối soát — không chuyển khoản thủ công
2. Trợ lý AI trả lời tuyến đầu qua Zalo OA
3. Điều phối viên tại từng đơn vị, có trách nhiệm ghi trong hợp đồng

Thiếu một trong ba thì hạ quy mô.

---

## 7. Vì sao STEAM phải hoãn

`san-pham/chuoi-steam-den-nghe.md` và `ke-hoach/ke-hoach-12-thang.md` đặt mục tiêu 40–60 khóa STEAM 12–15 buổi.

Mỗi khóa cần: thiết kế chuyên môn, mua và kiểm thử thiết bị, chạy thử với học sinh thật, hội đồng thẩm định. **AI tăng tốc được bước soạn giáo án, rubric, học liệu — nhưng không rút ngắn được ba bước sau.** Đây là ràng buộc vật lý, không phải ràng buộc năng suất.

Ước tính 150–250 giờ công mỗi khóa. 40 khóa = 6.000–10.000 giờ = 3–5 người toàn thời gian trong một năm. Dự án có khoảng 1,5 người cho nội dung.

**Thực tế:** 6–10 khóa STEAM trong 12 tháng nếu vẫn muốn tự làm.

**Phương án hợp lý hơn:** không tự xây thư viện STEAM. Hợp tác hoặc license từ đơn vị đã có, dự án đóng góp phần nền tảng, đánh giá năng lực và dữ liệu. Đó mới là chỗ khác biệt.

---

## 8. Phạm vi 12 tháng: giữ 2 trục, hoãn 4 trục

Nguyên tắc "triển khai đồng thời nhiều dòng sản phẩm, không tư duy tuyến tính" trong repo được viết cho bộ máy 25–40 người. **Với 5 người nó đảo ngược hoàn toàn** — 5 trục chia cho 5 người là mỗi trục một người và không trục nào xong.

### Giữ

- **Đào tạo AI** (giáo viên, giảng viên, học sinh, sinh viên, doanh nghiệp)
- **Vibe coding**

Lý do: không phần cứng, không phòng lab, AI tăng tốc được toàn chuỗi sản xuất, đúng năng lực sẵn có, tạo tiền ngay, có đường lên B2B rõ ràng.

### Hoãn sang năm 2–3

- STEAM Lab OS
- Chuỗi STEAM–nghề
- Đặt hàng nhân lực
- Việc làm quốc tế

**Không xóa các tài liệu này.** Gắn nhãn *"tầm nhìn kiến trúc năm 2–3, không phải cam kết triển khai 12 tháng"*. Chúng có giá trị để thuyết phục đối tác rằng dự án biết đang đi đâu.

---

## 9. Đảo thứ tự: B2B trước, phổ cập sau

Kế hoạch hiện tại đặt phổ cập trước để tạo quy mô, B2B sau. **Với 5 người, thứ tự đó làm cạn tiền trước khi kịp có gì.**

So sánh cùng một đơn vị công sức:

| Hướng | Công sức | Đóng góp |
|---|---|---:|
| 1 khóa giảng viên 20–50 triệu hoặc 1 khóa doanh nghiệp 20–100 triệu; biên phải kiểm chứng theo phạm vi | ~1 người × 1–4 tuần | Theo unit economics từng hợp đồng |
| Phổ cập, để đạt cùng mức đóng góp (54k/người) | Hàng trăm đến hàng nghìn người học + toàn bộ tải vận hành mục 6 | Phụ thuộc cấu hình cohort |

B2B hiệu quả hơn một bậc về tiền trên mỗi giờ công.

**Vai trò mới của phổ cập:** chi phí marketing có kiểm soát, chạy ở quy mô vừa đủ để không lỗ. **KPI của nó là số hợp đồng B2B sinh ra và số người chuyển lên tầng thực hành — không phải doanh thu học phí.**

**Tầng thực hành** (Vibe Coding Foundation, 6–8 buổi, 2–3 triệu/người, cohort 30–50) có biên tốt nhất trong mảng bán lẻ: ~55–60%, thường bán trực tiếp không qua trường nên không mất phần chia.

---

## 10. Bức tranh tài chính 12 tháng đã tính lại

| Nguồn | Quy mô | Đóng góp |
|---|---|---:|
| Phổ cập | 8.000–12.000 lượt | 350–650 triệu |
| Thực hành | 250–400 người × 2,5 triệu | 340–550 triệu |
| B2B | Khóa giảng viên 20–50 triệu; khóa doanh nghiệp 20–100 triệu | Tính theo số khóa ký và đóng góp thực tế |
| **Tổng đóng góp** | | **Cần cập nhật sau dữ liệu thật** |
| Chi phí cố định | | −1,6 đến −2,0 tỷ |
| **Kết quả** | | **Phụ thuộc chủ yếu vào số khóa B2B và biên từng hợp đồng** |

**Biến số quyết định là số hợp đồng B2B, không phải số người học.**

**Vốn lưu động:** tháng 1–5 có rủi ro âm nếu hợp đồng B2B chậm thanh toán. Cần runway hoặc các hợp đồng trả trước trong quý I. Xem `ke-hoach/chi-phi-va-dong-tien.md`.

---

## 11. Những sai lầm ChatGPT có khả năng mắc trên repo này

Đây là phần quan trọng nhất của file. Đọc kỹ trước khi tạo bất kỳ đề xuất nào.

1. **Đọc `mo-hinh-doanh-thu.md` và lấy con số 13–35 tỷ.** File đó đã lỗi thời và tự mâu thuẫn với nguyên tắc của chính repo.

2. **Giữ nguyên 5 trục vì repo nói "triển khai đồng thời".** Nguyên tắc đó gắn với bộ máy 25–40 người. Với 5 người nó sai.

3. **Nhầm doanh thu gộp với đóng góp.** Học phí thu được không phải toàn bộ tiền dự án giữ lại.

4. **Lạc quan về tỷ lệ hoàn thành.** Phải đo bằng cohort đầu tiên, không tự lấy 70% làm số chắc chắn.

5. **Đề xuất tuyển thêm người khi gặp nút thắt.** Đây là phản xạ mặc định và nó bị cấm ở đây. Giải pháp phải là: cắt phạm vi, tự động hóa bằng AI, hoặc đẩy sang chuyên gia ngoài trả theo cohort.

6. **Chỉ tính giờ giảng khi đánh giá năng lực.** Xem mục 6 — nút thắt là đối soát, hỗ trợ học viên và chấm bài.

7. **Coi AI là giải pháp cho mọi nút thắt.** AI không mua được thiết bị, không chạy thử với học sinh thật, không ngồi hội đồng thẩm định, không xây được quan hệ với sở giáo dục.

8. **Đề xuất xây nền tảng từ đầu.** Xem mục 2.3 — SOPai, Arkon, henlich.vn đã có.

9. **Bỏ qua cơ chế thu phí trong trường công.** Thu học phí qua trường công lập cần cơ chế phù hợp với quy định về các khoản thu dịch vụ; cụm từ "chia sẻ doanh thu cho trường" phải được xử lý cẩn trọng.

10. **Bỏ qua cạnh tranh với miễn phí.** Nhiều chương trình AI cho giáo viên miễn phí. Giá trị phải nằm ở điều phối, sản phẩm đầu ra, đánh giá và dữ liệu năng lực, không chỉ ở nội dung.

---

## 12. Câu hỏi chỉ anh Đức trả lời được — đừng tự giả định

Nếu một kế hoạch phụ thuộc vào các câu hỏi này, **hãy hỏi thay vì đoán**:

1. Các đầu mối hệ thống đã cam kết chưa, hay còn phải đi tìm?
2. Runway hiện tại bao nhiêu tháng?
3. Đã có cơ chế thu phí hợp pháp qua trường công chưa?
4. Ai là người dạy chính?
5. SOPai, Arkon, henlich.vn đang ở mức hoàn thiện nào?
6. Đã có chuyên gia ngoài nào ký khung hợp tác chưa?
7. Pháp nhân nào đứng ra thu học phí, cơ chế hóa đơn và thuế cho các giao dịch nhỏ?

---

## 13. Mạng lưới chuyên gia ngoài — cần thiết kế, không thể tùy hứng

"Chuyên gia ngoài làm phần khó" là chiến lược đúng nhưng hiện chỉ là một câu nói. Với 5 người, đây là hạ tầng sống còn và cần cơ chế:

- **Chia doanh thu theo cohort thay vì trả phí cố định.** Ví dụ 25–35% học phí thuần của cohort họ dạy. Bảo vệ dòng tiền và đồng thuận lợi ích.
- **Chuyển giao quyền sở hữu học liệu, bắt buộc bằng hợp đồng.** Nếu không, sau 12 tháng dự án không sở hữu tài sản nào — mà tài sản chính là lý do tồn tại của mô hình.
- **Điều khoản không đi vòng.** Rủi ro lớn: chuyên gia gặp trường qua dự án rồi ký thẳng với trường ở đợt sau.
- **Tuyển trước, không tuyển khi cần.** Danh sách 15–25 người theo lĩnh vực, đã ký khung, sẵn sàng nhận cohort trong 2 tuần.
- **Gộp với khái niệm "giảng viên nguồn"** đã có trong repo — hiện đang là hai thứ tách rời nhưng thực chất là một hệ thống.

---

## 14. Rủi ro đặc thù của quy mô 5 người

Repo chưa có risk register. Ba rủi ro dưới đây chỉ xuất hiện ở quy mô này:

- **Bus factor bằng 1 trên hầu hết vai trò.** Nền tảng một người, bán hàng một người, nhiều khả năng là cùng một người. Một đợt ốm giữa cohort lớn là khủng hoảng.
- **Người sáng lập là nút thắt kép.** Cách giảm: ghi hình nội dung để tách khỏi giờ giảng trực tiếp càng sớm càng tốt.
- **Không có dự phòng năng lực.** Nếu một đầu mối bất ngờ đẩy số người vượt trần, dự án có thể không phục vụ nổi. Cần điều khoản trần quy mô mỗi đợt trong hợp đồng.

---

## 15. Backlog — việc cần làm, theo thứ tự ưu tiên

| # | Việc | File | Trạng thái |
|---:|---|---|---|
| 1 | Sửa giả định nhân sự và bổ sung nguyên tắc kiểm tra trần vận hành | `docs/the-manh-du-an.md` | **Chưa làm — ưu tiên cao nhất.** File này dạy AI cách lập kế hoạch, sai ở đây lan ra mọi nơi |
| 2 | Dọn bảng công thức hợp đồng 13–35 tỷ | `docs/mo-hinh-doanh-thu.md` | **Xong** — file đã viết lại thành bốn dòng doanh thu |
| 3 | Gắn nhãn "tầm nhìn, không phải cam kết" | `ke-hoach/ke-hoach-12-thang.md` | **Xong** — banner đã thêm 27/07 |
| 4 | Viết unit economics đầy đủ các dòng sản phẩm + ngưỡng hòa vốn | `ke-hoach/unit-economics.md` | Đã có bản giả định, cần cập nhật sau dữ liệu thật |
| 5 | Viết chi phí, dòng tiền theo tháng, vốn lưu động | `ke-hoach/chi-phi-va-dong-tien.md` | Có bản giả định. **Bảng dòng tiền mục 3 dựng theo mô hình cũ, cần dựng lại theo bốn dòng doanh thu** |
| 6 | Bản đồ tái sử dụng SOPai / Arkon / henlich | `nen-tang/ban-do-tai-su-dung.md` | Chưa có |
| 7 | Cơ chế thu phí hợp pháp với trường công | `phap-ly/co-che-thu-phi-truong-cong.md` | Chưa có |
| 8 | Cơ chế mạng lưới chuyên gia: chia, IP, không đi vòng | `van-hanh/mang-luoi-chuyen-gia.md` | Chưa có |
| 9 | Risk register | `docs/rui-ro.md` | Chưa có |
| 10 | Sửa lộ trình tháng theo mùa vụ năm học | `ke-hoach/ke-hoach-kinh-doanh-12-thang.md` | Chưa làm |
| 11 | Chốt KPI tháng 1: 2 khóa giảng viên, 2 khóa doanh nghiệp, 200–300 sinh viên online | `ke-hoach/muc-tieu-thang-1.md` | Đã cập nhật |
| 12 | Phân tích cạnh tranh, đặc biệt với chương trình AI miễn phí | `docs/canh-tranh.md` | Chưa có |
| 13 | Dựng lại bảng dòng tiền 12 tháng theo bốn dòng doanh thu | `ke-hoach/chi-phi-va-dong-tien.md` | Chưa làm |

---

## 16. Quy ước làm việc chung

**Ngôn ngữ:** tiếng Việt cho toàn bộ nội dung. Tên file không dấu, dùng gạch ngang.

**Cách xử lý tài liệu cũ:** không xóa. Thêm khối cảnh báo ở đầu file:

```markdown
> **[DEPRECATED 2026-07-27]** Nội dung dưới đây dựa trên giả định bộ máy 25–40 người.
> Xem AGENTS.md mục 2 để biết nguồn lực thực tế. Giữ lại để tham chiếu lịch sử.
```

**Đánh dấu giả định:** mọi con số chưa kiểm chứng ghi `[giả định]`. Con số đã có dữ liệu thật ghi `[thực tế, <nguồn>, <ngày>]`.

**Khi hai AI bất đồng:** không tự ý ghi đè kết luận của nhau. Ghi cả hai phương án vào file kèm lập luận, để anh Đức quyết. Dùng định dạng:

```markdown
> **Điểm cần quyết:** <mô tả>
> - Phương án A (Claude): ... Lý do: ...
> - Phương án B (ChatGPT): ... Lý do: ...
```

**Cập nhật file này:** khi có thông tin mới làm thay đổi bối cảnh (đầu mối đã ký, runway đã rõ, cohort đầu tiên có số thật), cập nhật ngay mục liên quan và ghi vào changelog dưới đây. File này lỗi thời thì cả hai AI cùng sai.

---

## 17. Changelog

| Ngày | Thay đổi | Bởi |
|---|---|---|
| 2026-07-27 | Tạo file. Ghi nhận nguồn lực thật 5 người, tính lại unit economics, xác định nút thắt vận hành, đề xuất cắt còn 2 trục và đảo thứ tự B2B trước phổ cập. | Claude |
| 2026-07-27 | Bổ sung quyết định mới nhất: 2 khóa giảng viên, 2 khóa doanh nghiệp, 200–300 sinh viên; cập nhật khung giá và công thức doanh thu. | ChatGPT |
| 2026-07-27 | Thêm `THAO-LUAN.md` (giao thức trao đổi hai chiều, nghĩa vụ báo cáo, 10 vấn đề mở). Gắn banner cho `bo-may-van-hanh.md` và `ke-hoach-12-thang.md`. Rà soát toàn repo: phát hiện bảng dòng tiền tháng 1 lệch nhau (−135 tr so với −37 tr), đã đánh dấu. | Claude |
