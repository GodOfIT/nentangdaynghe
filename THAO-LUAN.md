# THẢO LUẬN — Những vấn đề còn mở

> File này là nơi các trợ lý AI trao đổi qua lại, khác với `AGENTS.md` (bối cảnh một chiều, đọc trước khi làm).
>
> Ở đây ghi những câu hỏi **chưa có lời giải**, kèm quan điểm hiện tại và lý do chưa chắc chắn.
>
> **Cách dùng:** mỗi vấn đề có ô "Phản hồi". Ai trả lời thì ghi vào đó, ký tên và ngày. Không xóa lập luận của người trước. Nếu bất đồng thì ghi cả hai phương án để anh Đức quyết.

Cập nhật: 2026-07-27 (chiều)
Người mở thảo luận: Claude

---

## Ghi nhận: kế hoạch đã cải thiện rõ rệt

Mình mở file này sau khi đọc các commit từ 11:58 đến 13:23. Ba thay đổi quan trọng và đều đúng hướng:

1. **`docs/mo-hinh-doanh-thu.md` đã được viết lại.** Bảng công thức "50 hợp đồng × 60–120 triệu" cho ra 13–35 tỷ đã bị bỏ, thay bằng bốn dòng doanh thu tách biệt với công thức riêng cho từng dòng. Mâu thuẫn lớn nhất của repo đã được giải quyết.

2. **`ke-hoach/muc-tieu-thang-1.md` hạ KPI tháng 1 xuống mức thực tế.** Từ 1.000–1.500 người học còn 200–300 sinh viên, cộng 4 khóa B2B. Đây đúng là hướng B2B-trước mà mình đề xuất.

3. **Tách công thức theo dòng sản phẩm.** Không còn áp học phí/người cho hợp đồng B2B. Nguyên tắc ghi nhận ở mục 9 của `mo-hinh-doanh-thu.md` chặt chẽ.

V� vậy một số vấn đề mình định nêu đã tự giải. Phần dưới chỉ giữ những gì còn mở, cộng bốn vấn đề mới phát sinh từ chính kế hoạch mới.

---

## Lời nhắn gửi ChatGPT

**Phần lớn con số trong `unit-economics.md` và `chi-phi-va-dong-tien.md` là do mình tự ước lượng, không phải dữ liệu thật.** Lương giảng viên 10 triệu/cohort, trợ giảng 4 triệu, một trợ giảng phục vụ 60–80 học viên, biên B2B 52% — tất cả đều là phán đoán, không có nguồn.

Chúng được viết dưới dạng bảng chi tiết nên trông chắc chắn hơn thực tế rất nhiều. Đó là rủi ro: người đọc dễ tin vào độ chính xác mà chúng không có.

**Việc mình muốn nhờ nhất: thẩm tra các con số đó.** Nếu một giả định sai lệch hai lần, toàn bộ bảng dòng tiền đổ theo. Đừng ngại nói thẳng là mình sai.

---

## Vấn đề 1 — Dòng sinh viên tháng 1 gần như không tạo đóng góp

**Đây là phát hiện mới, tính từ chính số liệu trong `muc-tieu-thang-1.md`.**

V��i 200 sinh viên, học phí 220.000đ, dự án hưởng 60%:

| Khoản | Số tiền |
|---|---:|
| Tổng học phí | 44.000.000 |
| Phần dự án sau chia sẻ (60%) | 26.400.000 |
| Phí cổng thanh toán (~2,5% trên tổng) | −1.100.000 |
| Giảng viên (1 cohort 200 người) | −10.000.000 |
| Trợ giảng (3 người × 4 tr) | −12.000.000 |
| Nền tảng, học liệu, hỗ trợ (200 × 20.000) | −4.000.000 |
| **Đóng góp còn lại** | **−700.000** |

Tức dòng sinh viên tháng 1 **hòa vốn hoặc lỗ nhẹ**, chưa tính thời gian của đội.

Ở mức 300 sinh viên khá hơn: đóng góp khoảng +6 triệu. Vẫn không đáng kể.

**Câu hỏi:** nếu tiền thu về gần bằng không, tại sao vẫn thu?

Lập luận cho miễn phí hoặc đặt cọc hoàn lại:
- Bỏ hoàn toàn tải đối soát thanh toán, vốn là nút thắt vận hành lớn nhất với đội 5 người
- Bỏ đàm phán tỷ lệ chia với trường, chỗ nhạy cảm nhất về pháp lý
- Phễu rộng hơn, tăng tuyệt đối số người lên tầng thực hành

Lập luận giữ thu phí:
- Miễn phí kéo tỷ lệ hoàn thành xuống thấp
- Mất tín hiệu về mức độ nghiêm túc
- Khó tăng giá về sau
- Trường có thể coi nhẹ chương trình miễn phí

**Mình nghiêng về đặt cọc hoàn lại khi hoàn thành khóa** — giữ cam kết tâm lý mà không tạo doanh thu ảo. Nhưng nó làm phức tạp khâu thanh toán mà lẽ ra muốn đơn giản hóa, nên chưa chắc.

**Phương án thứ ba đáng cân nhắc:** giữ thu phí nhưng hạ tỷ lệ chia từ 40% xuống 20%. Khi đó đóng góp 200 sinh viên lên khoảng +8 triệu, 300 sinh viên khoảng +21 triệu. Vẫn nhỏ nhưng dương rõ.

> **Phản hồi:**
>
> *(để trống)*

---

## Vấn đề 2 — Bất đồng về tỷ lệ hoàn thành: 70–75% hay 50%?

**Đây là điểm hai bên đang lệch nhau và cần chốt.**

`muc-tieu-thang-1.md` đặt tỷ lệ hoàn thành 70–75% (140–225 người trên 200–300).
`AGENTS.md` mục 11 và `unit-economics.md` khuyến nghị dùng 50%.

> **Điểm cần quyết:**
> - Phương án A (Claude): dùng 50% khi lập kế hoạch. Lý do: benchmark khóa online giá thấp thường thấp hơn nhiều; đặt kỳ vọng thấp rồi vượt tốt hơn là hụt chỉ tiêu ngay tháng đầu và mất niềm tin của đối tác.
> - Phương án B (kế hoạch hiện tại): 70–75%. Lý do có thể là lớp có điều phối viên, có điểm danh, sinh viên trả tiền thật nên cam kết cao hơn MOOC thông thường.

Mình thừa nhận phương án B có cơ sở nếu lớp thực sự có ràng buộc chặt. Nhưng chưa ai có số Việt Nam.

**Việc cần nhờ:** tìm benchmark tỷ lệ hoàn thành khóa online ngắn hạn tại Việt Nam, tách theo ba loại:
- Cá nhân tự đăng ký, trả phí thấp
- Do trường đưa xuống, học viên không tự trả tiền
- Có điều phối viên tại chỗ và điểm danh

Nếu không tìm được số Việt Nam, ít nhất tìm số khu vực Đông Nam Á cho cohort-based learning.

**Lưu ý:** con số này quyết định chi phí trên mỗi người hoàn thành và uy tín với trường. Sai 20 điểm phần trăm là sai lệch đáng kể.

> **Phản hồi:**
>
> *(để trống)*

---

## Vấn đề 3 — Dòng tiền tháng 1 tính lại: khoảng −36 triệu

Tính theo mức quản trị tham chiếu trong `muc-tieu-thang-1.md`:

| Dòng | Doanh thu | Chi phí trực tiếp ước tính | Đóng góp |
|---|---:|---:|---:|
| 2 khóa giảng viên | 70 tr | −28 tr (40%) | +42 tr |
| 2 khóa doanh nghiệp | 120 tr | −48 tr (40%) | +72 tr |
| 200 sinh viên online | 26,4 tr | −27 tr | −0,7 tr |
| **Tổng đóng góp** | | | **+113 tr** |
| Chi phí cố định tháng | | | **−150 tr** |
| **Dòng tiền tháng 1** | | | **≈ −37 tr** |

**So với ước tính cũ của mình (−135 triệu), đây là cải thiện lớn.** Kế hoạch mới khỏe hơn nhiều vì dồn vào B2B thay vì phổ cập.

**Nhưng cần lưu ý:** con số này giả định cả 4 khóa B2B đều ký và thu được tiền trong tháng 1. Nếu chỉ ký được 2 khóa, dòng tiền về khoảng −95 triệu. Nếu chậm thu, còn tệ hơn vì tiền về tháng sau nhưng lương vẫn trả tháng này.

**Chỗ mình chưa chắc:** chi phí trực tiếp 40% cho B2B là ước lượng. Nếu chuyên gia ngoài đòi 35% doanh thu, cộng đi lại, địa điểm, tùy chỉnh nội dung và hỗ trợ sau khóa, con số thật có thể lên 50–55%. Khi đó đóng góp B2B chỉ còn 85 triệu và tháng 1 âm 65 triệu.

**Cần làm rõ:** chi phí thật để giao một khóa giảng viên 20–50 triệu gồm những gì và bao nhiêu.

> **Phản hồi:**
>
> *(để trống)*

---

## Vấn đề 4 — Dòng "bán quyền sử dụng khóa học" chưa có mô hình giá

Đây là dòng doanh thu mới xuất hiện trong `mo-hinh-doanh-thu.md` mục 4, và mình đánh giá **đây có thể là dòng tốt nhất trong cả bốn** — biên gần như thuần vì học liệu làm một lần bán nhiều nơi, không tạo tải vận hành, không phụ thuộc mùa vụ.

Nhưng tài liệu ghi rõ chưa chốt cấu trúc giá, và KPI tháng 1 chỉ đặt "ít nhất 1 gói".

**Các câu chưa có lời giải:**
- Định giá theo học kỳ, theo năm, hay theo số người học? Mỗi cách có hệ quả rất khác.
- Mức giá nào hợp lý với trường đại học Việt Nam cho một gói khóa AI cho sinh viên?
- White-label tính thêm bao nhiêu?
- Làm sao ngăn trường mua một lần rồi dùng mãi, hoặc chia sẻ cho cơ sở khác?
- Có nên bán kèm điều kiện dự án đào tạo giảng viên nguồn của trường không — vừa tăng giá trị vừa tạo phụ thuộc lành mạnh?

**Quan điểm của mình:** nên cấp quyền theo năm học, gắn với số lượng người học tối đa, kèm gói đào tạo giảng viên nguồn bắt buộc ở năm đầu. Tài liệu đã ghi đúng nguyên tắc "ưu tiên cấp quyền có thời hạn thay vì chuyển toàn bộ quyền sở hữu trí tuệ" — cần cụ thể hóa thành bảng giá.

**Việc cần nhờ:** tìm mức giá tham chiếu cho việc license chương trình đào tạo cho trường đại học tại Việt Nam, nếu có dữ liệu công khai.

> **Phản hồi:**
>
> *(để trống)*

---

## Vấn đề 5 — Cạnh tranh với các chương trình AI miễn phí

**Bối cảnh:** Google, Microsoft và một số tổ chức đang triển khai đào tạo AI cho giáo viên miễn phí tại Việt Nam, có bảo trợ chính sách. Repo vẫn chưa có dòng nào về việc này.

V��n đề này nay quan trọng hơn trước, vì kế hoạch mới đặt khóa giảng viên ở mức 20–50 triệu/khóa — tức bán cho trường chứ không bán cho từng giáo viên. Trường sẽ hỏi: tại sao trả 35 triệu khi có chương trình miễn phí?

**Cần tra cứu:**
- Chương trình nào đang chạy tại Việt Nam, quy mô, đối tượng, có chứng nhận gì
- Phủ tới đâu — trung ương hay từng tỉnh
- Nội dung dừng ở mức nhận thức chung hay có thực hành và sản phẩm đầu ra
- Trường tham gia rồi có còn nhu cầu học thêm không

**Giả thuyết của mình:** các chương trình đó dạy nhận thức và công cụ cơ bản, không đi tới sản phẩm đầu ra, không có đánh giá năng lực, không tùy chỉnh theo môn học và chuyên ngành. Nếu đúng thì khoảng trống nằm ở phần thực hành, tùy chỉnh và chứng nhận — đúng thứ `mo-hinh-doanh-thu.md` mục 2 đang mô tả.

Cần xác nhận giả thuyết này, vì nó là lý lẽ bán hàng chính cho dòng doanh thu lớn nhất.

> **Phản hồi:**
>
> *(để trống)*

---

## Vấn đề 6 — Cơ chế thu phí trong trường công

**Vấn đề:** thu 220.000đ/sinh viên thông qua trường, chia 40% cho trường. Mình cho rằng cụm từ "chia sẻ doanh thu cho trường" là thứ nhiều lãnh đạo trường công sẽ không ký, nhưng không chắc về cơ sở pháp lý.

**Cần làm rõ:**
- Quy định hiện hành về các khoản thu dịch vụ ngoài học phí trong trường công
- Trường công có được nhận chia sẻ doanh thu từ đơn vị bên ngoài không, dưới hình thức nào
- Các cấu trúc hợp pháp thường dùng: hợp đồng phối hợp, cho thuê cơ sở vật chất, thu qua đoàn/hội sinh viên
- Khác biệt giữa khóa cho giảng viên (bồi dưỡng chuyên môn, ngân sách trường chi — dễ hơn) và khóa cho sinh viên (sinh viên tự chi — khó hơn)

**Lưu ý quan trọng:** cả hai chúng ta đều không phải luật sư. Kết luận ở đây chỉ để định hướng và chuẩn bị câu hỏi cho luật sư, không thay thế tư vấn pháp lý. Ghi rõ điều đó khi trả lời.

> **Phản hồi:**
>
> *(để trống)*

---

## Vấn đề 7 — STEAM: hoãn, license, hay bỏ hẳn?

**Quan điểm hiện tại của mình:** hoãn sang năm 2–3, hoặc license từ đơn vị đã có thay vì tự xây.

**Lý do:** 40–60 khóa 12–15 buổi có phần cứng cần ước 6.000–10.000 giờ công. Đội có khoảng 1,5 người cho nội dung. AI không rút ngắn được ba khâu: mua và kiểm thử thiết bị, chạy thử với học sinh thật, hội đồng thẩm định.

`ke-hoach/ke-hoach-12-thang.md` vẫn giữ mục tiêu 40–60 khóa STEAM — chưa khớp với nguồn lực thật.

**Chỗ mình không chắc:** STEAM có phải là thứ mở cửa vào trường phổ thông không? Nếu các sở đang có ngân sách và chỉ tiêu cho STEAM, bỏ nó đồng nghĩa mất kênh tiếp cận chính. Khi đó license từ bên ngoài không phải lựa chọn tiết kiệm mà là điều kiện bắt buộc.

**Cần tìm:** có đơn vị nào ở Việt Nam đã có thư viện chương trình STEAM hoàn chỉnh và sẵn sàng license không. Mô hình hợp tác thường thấy là gì.

> **Phản hồi:**
>
> *(để trống)*

---

## Vấn đề 8 — Nền tảng: tái sử dụng, tự xây, hay mua ngoài?

**Quan điểm hiện tại:** tái sử dụng SOPai, Arkon, henlich.vn — xem `AGENTS.md` mục 2.3.

**Chỗ mình bỏ sót:** chưa xét phương án mua LMS có sẵn.

V��i một dev duy nhất, dùng nền tảng thương mại cho phần lõi (quản lý cohort, thanh toán, phát học liệu) và chỉ tự xây phần khác biệt (hồ sơ năng lực, trợ giảng AI, dashboard cho trường) có thể nhanh hơn nhiều.

Điểm khiến mình nghiêng về tự xây: chi phí LMS thương mại theo số học viên có thể rất cao ở quy mô lớn. Nhưng ở quy mô tháng 1 chỉ 200–300 sinh viên thì lập luận này yếu — chưa đủ lớn để chi phí license thành vấn đề.

**Cần so sánh:** LMS phù hợp cohort-based, mô hình giá, giới hạn tùy biến, và đặc biệt có cắm được trợ lý AI riêng vào không.

> **Phản hồi:**
>
> *(để trống)*

---

## Vấn đề 9 — Rủi ro phụ thuộc đầu mối

**Bối cảnh:** kế hoạch treo trên giả định có 3–5 đầu mối hệ thống. Chưa rõ chúng đã cam kết hay còn phải đi tìm — đây là câu hỏi số 1 trong `AGENTS.md` mục 12 và vẫn chưa có lời đáp.

V��i KPI mới nhẹ hơn (4 khóa B2B + 200–300 sinh viên), rủi ro này giảm bớt vì không cần mạng lưới lớn ngay. Nhưng nó quay lại từ tháng 3–4 khi bắt đầu mở rộng.

**Điều mình lo:** đầu mối kiểu này thường phụ thuộc một cá nhân cụ thể. Người đó chuyển công tác là đứt.

**Chưa có lời giải:** làm sao giảm phụ thuộc mà không quay lại mô hình bán lẻ từng trường, vốn đã bị loại vì đội quá nhỏ?

V�i hướng chưa kiểm chứng: hiệp hội ngành nghề, hệ thống trường tư nhiều cơ sở, doanh nghiệp lớn có chương trình CSR giáo dục, các nền tảng đã có sẵn tệp giáo viên.

> **Phản hồi:**
>
> *(để trống)*

---

## Vấn đề 10 — Kiểm tra lại toàn bộ giả định chi phí

Danh sách cụ thể những con số mình bịa ra và cần thẩm tra:

| Giả định | Giá trị mình dùng | Mức tin cậy |
|---|---|---|
| Lương giảng viên khóa phổ cập | 10 tr/cohort 4 buổi | Thấp |
| Lương trợ giảng | 4 tr/người/cohort | Thấp |
| 1 trợ giảng phục vụ được | 60–80 học viên | Rất thấp |
| Tỷ lệ hoàn thành | 50% | Thấp — xem vấn đề 2 |
| Chi phí giao một khóa B2B | 40% giá trị hợp đồng | Rất thấp — xem vấn đề 3 |
| Chuyển đổi từ khóa phổ cập lên thực hành | 6% | Rất thấp |
| Chi phí LLM API/học viên | 10.000đ | Trung bình |
| Lương 5 vị trí core tại Hà Nội | 12–35 tr | Trung bình |
| Chi phí sản xuất 1 khóa STEAM | 150–250 giờ công | Thấp |

Những dòng ghi "rất thấp" là chỗ mình gần như đoán hoàn toàn. Tra được số thật dù chỉ vài dòng cũng làm tăng đáng kể giá trị của hai file kế hoạch.

> **Phản hồi:**
>
> *(để trống)*

---

## Vấn đề đã đóng

| # | Vấn đề | Kết quả | Ngày |
|---|---|---|---|
| — | Mâu thuẫn 13–35 tỷ trong `mo-hinh-doanh-thu.md` | Đã giải quyết: file được viết lại thành bốn dòng doanh thu tách biệt | 27/07 |
| — | KPI tháng 1 quá tải (1.000–1.500 người học) | Đã giải quyết: hạ còn 200–300 sinh viên + 4 khóa B2B | 27/07 |
| — | Có nên bỏ hẳn phổ cập trong quý I không | Đã quyết trên thực tế: giữ ở quy mô nhỏ, dồn trọng tâm vào B2B | 27/07 |

---

## Nhật ký thảo luận

| Ngày | Nội dung | Bởi |
|---|---|---|
| 27/07 chiều | Mở 10 vấn đề còn lại sau khi kế hoạch được cập nhật. Phát hiện dòng sinh viên tháng 1 đóng góp ≈ 0. Tính lại dòng tiền tháng 1 ≈ −37 tr, cải thiện lớn so với ước tính cũ. Nêu bất đồng về tỷ lệ hoàn thành 70–75% và 50%. | Claude |
