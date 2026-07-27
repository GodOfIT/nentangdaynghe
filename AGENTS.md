# AGENTS.md — Bối cảnh chung cho các trợ lý AI làm việc trên repo này

> **Đọc file này trước tiên, trước mọi file khác trong repo.**
>
> Repo này được nhiều trợ lý AI cùng làm việc (Claude, ChatGPT/Codex và có thể thêm). File này là nguồn sự thật chung về bối cảnh, ràng buộc và trạng thái điều hành.
>
> **Quy tắc ưu tiên:** nếu file này mâu thuẫn với bất kỳ file nào khác trong repo, **file này thắng**, cho đến khi file kia được sửa.

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

## 1. Bối cảnh điều hành hiện tại

Repo mô tả tầm nhìn hệ sinh thái giáo dục nghề nhiều trục, nhưng nguồn lực hiện tại là **5 người core**. Tài liệu chiến lược dài hạn vẫn được giữ lại; kế hoạch điều hành phải bám vào năng lực thật, dữ liệu thật và các tài sản kỹ thuật đã có.

Năm đầu ưu tiên các năng lực dùng chung:

- đào tạo AI cho sinh viên, giảng viên và doanh nghiệp;
- vibe coding và khóa thực hành có sản phẩm đầu ra;
- cấp quyền sử dụng khóa học;
- đào tạo năng lực giáo viên triển khai STEAM trong phạm vi pilot rõ ràng;
- nền tảng AI-first dựa trên tài sản hiện có.

Không tự động biến toàn bộ tầm nhìn dài hạn thành cam kết trong 12 tháng.

## 2. Nguồn lực thật

### 2.1. Đội core: 5 người

| Vai trò | Số lượng | Ghi chú |
|---|---:|---|
| Điều hành, quan hệ đối tác, bán hàng | 1 | Có thể đồng thời là người dạy chính giai đoạn đầu |
| Phát triển nền tảng cùng AI | 1 | Nút thắt kỹ thuật dùng chung cho nhiều dòng sản phẩm |
| Nội dung, thiết kế học tập | 1–2 | Xây học liệu, rubric, sản phẩm đào tạo |
| Hành chính, vận hành, đối soát | 1 | Phải được hỗ trợ bằng workflow và tự động hóa |

Ngoài core: mạng lưới chuyên gia theo từng lĩnh vực, trả theo cohort/hợp đồng khi phù hợp.

`docs/bo-may-van-hanh.md` có mô hình 25–40 người là tầm nhìn tổ chức cũ, không phải nguồn lực hiện hành.

### 2.2. Chi phí cố định

Các mức 92–126 triệu/tháng hoặc 146–195 triệu/tháng trong `ke-hoach/chi-phi-va-dong-tien.md` đều là `[giả định]`.

Chưa được dùng 150 triệu/tháng làm số chắc chắn cho đến khi anh Đức chốt:

- founder có nhận lương hay không;
- đội thực tế là 4 hay 5 người;
- người dạy chính tính vào chi phí cố định hay trực tiếp;
- các chi phí văn phòng, hạ tầng và công cụ thực tế.

### 2.3. Tài sản kỹ thuật phải tái sử dụng

| Tài sản | Bản chất | Vai trò dự kiến |
|---|---|---|
| **SOPai** | Workflow/state machine | Vòng đời cohort, trạng thái người học, nhắc lịch, nộp bài |
| **Arkon** | Knowledge hub, MCP, RAG | Kho học liệu, trợ lý AI, hỗ trợ và chấm sơ bộ |
| **henlich.vn** | Lịch, booking, landing | Đăng ký, lịch học, điểm danh và trang cohort |

Không đề xuất xây lại từ đầu trước khi audit mức độ hoàn thiện. Audit phải chỉ ra:

- chức năng dùng ngay;
- chức năng chạy hybrid;
- chức năng phải xây hoặc tích hợp;
- giờ dev và chi phí duy trì.

---

## 3. Kiến trúc vận hành: AI-first, hybrid dự phòng

Claude vòng 2 đã sửa đúng một lỗi hệ thống: không được lấy đào tạo thủ công làm đường cơ sở rồi coi AI là tối ưu hóa về sau.

### AI-first — kiến trúc mục tiêu

- đăng ký và mã học viên tự động;
- thanh toán định danh và đối soát tự động;
- trợ lý AI tuyến đầu trên kho tri thức khóa học;
- workflow nhắc lịch, điểm danh và nộp bài;
- LLM chấm sơ bộ theo rubric, người duyệt vòng cuối;
- dashboard ticket, ngoại lệ, chi phí và chất lượng.

### Hybrid — phương án triển khai an toàn

- AI gợi ý, người vận hành duyệt;
- đối soát bán tự động;
- người xử lý ngoại lệ và khiếu nại;
- người kiểm tra các bài chấm có rủi ro;
- giới hạn quy mô khi tải vượt trần.

Không được coi AI-first đã sẵn sàng nếu chưa audit và kiểm thử.

Các giả định sau chỉ dùng để chạy độ nhạy, không phải dữ liệu thật:

- phí thanh toán/đối soát 0,8%;
- LLM API 14.000 đồng/người/khóa;
- nền tảng/lưu trữ 6.000 đồng/người;
- một điều phối viên 4 triệu đồng/cohort;
- một điều phối viên đủ cho 1.000 học viên.

Chi tiết và phép tính minh họa nằm tại `ke-hoach/unit-economics.md`.

---

## 4. Bốn dòng thương mại và các sản phẩm liên quan

### 4.1. Sinh viên online

- KPI tháng đầu: 200–300 người thanh toán và bắt đầu học.
- Học phí 220.000 đồng/người và phần dự án 60% là `[giả định]`.
- Kịch bản ngân sách hoàn thành: 50–60%.
- Mục tiêu vận hành nội bộ: khoảng 70%.
- Không dùng 70% làm cam kết đối ngoại trước khi có dữ liệu thật.

Không còn kết luận cứng “khóa phổ cập không phải nguồn thu”.

- Ở 200–300 người: ưu tiên kiểm chứng và đo tải.
- Từ 500 người trở lên: có thể tạo đóng góp rõ nếu AI-first hoạt động đúng.
- Không mở rộng chỉ vì bảng giả định cho biên cao.

### 4.2. Cấp quyền sử dụng khóa học

Ba cấu hình định hướng:

1. quyền sử dụng nội dung;
2. nội dung + nền tảng + báo cáo;
3. triển khai đầy đủ có tùy chỉnh và đào tạo giảng viên nguồn.

Không gọi đây là dòng “biên gần như thuần”. Phải tính cập nhật, onboarding, nền tảng, hỗ trợ, kỹ thuật, báo cáo và kiểm soát phạm vi sử dụng.

### 4.3. B2B giảng viên

- Khung giá: 20–50 triệu đồng/khóa.
- Phải có dự toán riêng cho từng hợp đồng.
- AI rút ngắn thiết kế và sản xuất học liệu nhưng không xóa giờ đứng lớp, đi lại và hỗ trợ.

### 4.4. B2B doanh nghiệp

- Khung giá: 20–100 triệu đồng/khóa.
- Có thể kết hợp khảo sát, đào tạo, tư vấn và triển khai.
- Không dùng một hợp đồng 100 triệu làm đại diện cho toàn bộ dòng sản phẩm.

### 4.5. Vibe coding/thực hành

Là dòng sản phẩm có đầu ra rõ nhưng giá, tỷ lệ chuyển đổi và biên chưa được chốt. Không dùng mức 2,5 triệu/người hoặc biên 53% như số thật trước cohort đầu.

---

## 5. KPI B2B phải tách trạng thái

“2 khóa” không phải một chỉ số duy nhất.

Mỗi khóa phải theo dõi:

1. cơ hội đủ điều kiện;
2. đề xuất đã gửi;
3. hợp đồng đã ký;
4. tiền ứng trước/tiền đã thu;
5. khóa đã khai giảng;
6. khóa đã hoàn thành;
7. sản phẩm đã bàn giao;
8. công nợ;
9. cơ hội gia hạn/triển khai tiếp.

Tài liệu tháng 1 hiện định nghĩa KPI thương mại là **2 hợp đồng giảng viên và 2 hợp đồng doanh nghiệp đã ký, có lịch triển khai**, đồng thời đặt mục tiêu giao đủ 2 + 2 nếu lịch khách hàng cho phép.

Giá trị hợp đồng, doanh thu ghi nhận và tiền đã thu phải báo cáo riêng.

---

## 6. Mạng lưới và B2B

Không tạo đối lập giả giữa hai khái niệm:

- **Mạng lưới:** kênh phân phối và kích hoạt đơn vị.
- **B2B:** mô hình hợp đồng và doanh thu.

Một đầu mối chỉ được tính là có giá trị khi chuyển thành ít nhất một trong các kết quả:

- đơn vị kích hoạt;
- đề xuất thương mại;
- hợp đồng;
- lịch triển khai;
- người học thật;
- tiền thực thu.

Không ghi thông tin quan hệ hoặc hỗ trợ chiến lược nhạy cảm vào tài liệu công khai nếu chưa được anh Đức cho phép.

---

## 7. STEAM — bản chất đúng của sản phẩm năm đầu

Claude vòng 2 đã sửa cách hiểu: STEAM năm đầu không phải dự án tự xây thư viện 40–60 khóa phần cứng.

Sản phẩm định hướng là:

- đào tạo năng lực giáo viên dạy STEAM;
- học liệu/hướng dẫn cho 1–2 môn thí điểm;
- hướng dẫn giáo viên tổ chức hoạt động cho học sinh;
- hỗ trợ từ xa sau đào tạo;
- có thể kèm công cụ số hoặc trợ lý AI nếu phạm vi được chốt.

STEAM có thể chạy song song như một nhánh B2B giáo dục, dùng chung năng lực nội dung, đào tạo giáo viên, nền tảng và chuyên gia; không nhất thiết tạo một bộ máy riêng.

Không được coi các nhận định sau là dữ liệu thật nếu chưa có xác nhận/nguồn:

- tháng 9 là hạn cứng;
- các chương trình miễn phí không phủ vùng khó;
- nguồn trả tiền chắc chắn là sở/chương trình mục tiêu/tài trợ;
- 1–2 môn cụ thể có thể triển khai ngay.

Trước khi cam kết phải chốt:

- ai trả tiền;
- môn thí điểm;
- số trường và giáo viên;
- đầu ra cần đạt;
- hướng dẫn học sinh là tài liệu hay phần mềm;
- chuyên gia nghiệm thu;
- điều phối viên tại chỗ, đặc biệt ở vùng khó.

Nhóm giáo viên vùng khó phải có unit economics riêng. AI hỗ trợ người điều phối, không mặc định thay hoàn toàn người tại chỗ.

---

## 8. Thời gian và mùa vụ

“Tháng 1, tháng 2…” trong kế hoạch là tháng vận hành, không tự động tương ứng với tháng dương lịch.

Trước khi phân tích mùa vụ phải chốt:

1. ngày bắt đầu chính thức;
2. ánh xạ tháng vận hành sang tháng dương lịch;
3. mùa vụ riêng của từng dòng sản phẩm.

Không dùng quy tắc cố định “tháng 6–8 nghỉ hè” cho bảng tháng vận hành nếu chưa ánh xạ.

---

## 9. Unit economics và tài chính

### 9.1. Không dùng dự báo cũ

Không dùng các con số sau như dự báo:

- tháng 1 âm 135 triệu;
- tháng 1 âm 37 triệu;
- runway 800 triệu–1 tỷ;
- 8.000–12.000 lượt phổ cập;
- 12–20 hợp đồng B2B;
- các bảng đóng góp năm được suy ra từ giả định.

### 9.2. Hai cấu hình sinh viên

`ke-hoach/unit-economics.md` có:

- AI-first: minh họa đóng góp dương theo các giả định của Claude;
- hybrid: minh họa 200 người có thể hòa vốn/lỗ nhẹ.

Khoảng cách giữa hai cấu hình chứng minh tự động hóa là biến số cấu trúc. Nó không chứng minh các giả định AI-first là đúng.

### 9.3. Dữ liệu cần đo

- chi phí LLM API/người/khóa;
- số lượt hỏi và token;
- tỷ lệ chuyển người thật;
- ticket/người;
- giờ điều phối;
- lỗi thanh toán/tài khoản;
- thời gian duyệt bài;
- chất lượng câu trả lời/chấm bài;
- chi phí xây và duy trì workflow;
- chi phí thật từng hợp đồng B2B;
- unit economics STEAM.

### 9.4. Dòng tiền

Theo dõi riêng:

- giá trị hợp đồng;
- tiền ứng trước;
- tiền đã thu;
- doanh thu ghi nhận;
- chi phí trực tiếp;
- công nợ;
- tiền mặt và runway.

Không dựng bảng dòng tiền 12 tháng trước khi có trần giao khóa, lịch thanh toán và dữ liệu cohort đầu.

---

## 10. Nút thắt và thứ tự kỹ thuật

Nút thắt không chỉ là giờ giảng. Phải tính:

- thanh toán và đối soát;
- hỗ trợ và ngoại lệ;
- chấm/duyệt sản phẩm;
- xây tự động hóa;
- bán B2B;
- chuyên gia ngoài;
- vận hành STEAM nếu được kích hoạt.

Thứ tự kỹ thuật chỉ chốt sau audit 2–3 ngày.

Nếu dự án tự thu hàng trăm giao dịch, thứ tự mặc định:

1. đăng ký, mã học viên, đối soát;
2. FAQ/RAG tuyến đầu ở chế độ hybrid;
3. nhắc lịch, điểm danh, nộp bài;
4. chấm sơ bộ theo rubric;
5. tính năng STEAM sau khi chốt tài liệu hay phần mềm.

Nếu đối tác thu và đối soát, thứ tự có thể thay đổi.

---

## 11. Sai lầm các trợ lý AI phải tránh

1. Lấy lại con số 13–35 tỷ từ tài liệu lịch sử.
2. Nhầm học phí gộp, giá trị hợp đồng hoặc phần sau chia sẻ với lợi nhuận.
3. Dùng mô hình thủ công làm cấu hình duy nhất.
4. Dùng mô hình AI-first như thể đã được kiểm thử.
5. Coi một điều phối viên đủ cho 1.000 người là sự thật.
6. Dùng 70% hoàn thành làm cam kết đối ngoại.
7. Nhầm tháng vận hành với tháng dương lịch.
8. Tạo đối lập giữa mạng lưới và B2B.
9. Hiểu STEAM là thư viện 40–60 khóa phần cứng.
10. Coi AI thay được chuyên gia, điều phối tại chỗ hoặc quan hệ đối tác.
11. Đề xuất xây lại SOPai, Arkon hoặc henlich.vn mà chưa audit.
12. Tự điền dữ liệu nội bộ hoặc công bố thông tin chiến lược nhạy cảm.

---

## 12. Câu hỏi chỉ anh Đức trả lời được

1. Ngày bắt đầu chính thức.
2. Trần số khóa B2B có thể giao mỗi tháng.
3. Mức hoàn thiện SOPai, Arkon và henlich.vn.
4. Founder có nhận lương trong 6 tháng đầu không.
5. Runway và nguồn tiền mặt hiện có.
6. Đã có chuyên gia ngoài nào sẵn sàng ký khung hợp tác.
7. Pháp nhân, hóa đơn, thuế và cơ chế thu học phí.
8. STEAM:
   - ai trả tiền;
   - môn thí điểm;
   - mốc tháng 9 cần đạt gì;
   - số trường/giáo viên;
   - hướng dẫn học sinh là tài liệu hay phần mềm;
   - người điều phối tại chỗ.
9. Giá và phạm vi các gói cấp quyền khóa học.

Không tự đoán các câu trả lời này.

---

## 13. Mạng lưới chuyên gia ngoài

Cần thiết kế cơ chế:

- phí cố định hoặc chia theo cohort/hợp đồng;
- quyền sở hữu và quyền sử dụng học liệu;
- bảo mật và không đi vòng;
- tiêu chuẩn nghiệm thu;
- thời gian sẵn sàng;
- danh sách chuyên gia theo lĩnh vực;
- gắn với hệ thống giảng viên nguồn.

Các tỷ lệ 25–35% chỉ là ví dụ, không phải mức đã chốt.

---

## 14. Backlog ưu tiên

| # | Việc | File/kết quả | Trạng thái |
|---:|---|---|---|
| 1 | Đồng bộ nguyên tắc lập kế hoạch | `docs/the-manh-du-an.md` | Đã cập nhật sau Claude vòng 2 |
| 2 | Chuẩn hóa KPI tháng đầu | `ke-hoach/muc-tieu-thang-1.md` | Đã cập nhật |
| 3 | Dựng lại kế hoạch 12 tháng không dùng phép nhân tùy ý | `ke-hoach/ke-hoach-kinh-doanh-12-thang.md` | Đã cập nhật |
| 4 | Unit economics AI-first/hybrid và từng dòng sản phẩm | `ke-hoach/unit-economics.md` | Có khung giả định, chờ kiểm thử |
| 5 | Khung chi phí và dòng tiền | `ke-hoach/chi-phi-va-dong-tien.md` | Đã rút dự báo cũ, chờ dữ liệu thật |
| 6 | Audit tái sử dụng SOPai/Arkon/henlich | `nen-tang/ban-do-tai-su-dung.md` | Chưa làm — ưu tiên vận hành |
| 7 | Test chi phí trợ giảng AI/LLM | Báo cáo thử nghiệm | Chưa làm — ưu tiên định lượng |
| 8 | Cơ chế mạng lưới chuyên gia | `van-hanh/mang-luoi-chuyen-gia.md` | Chưa có |
| 9 | Mô hình STEAM giáo viên 1–2 môn | Tài liệu riêng | Chờ anh Đức chốt phạm vi |
| 10 | Cạnh tranh chương trình AI miễn phí | `docs/canh-tranh.md` | Chưa có |
| 11 | Cơ chế thu phí trường công | `phap-ly/co-che-thu-phi-truong-cong.md` | Cần tra cứu và luật sư |
| 12 | Giá cấp quyền khóa học | Tài liệu giá | Chưa chốt |
| 13 | Risk register | `docs/rui-ro.md` | Chưa có |
| 14 | Dòng tiền 12 tháng | Bảng tài chính | Chỉ làm sau dữ liệu thật và trần B2B |

---

## 15. Quy ước phối hợp AI

- Ngôn ngữ tài liệu: tiếng Việt; tên file không dấu, dùng gạch ngang.
- Mọi số chưa kiểm chứng ghi `[giả định]`.
- Số có dữ liệu thật ghi `[thực tế, <nguồn>, <ngày>]`.
- Không xóa lập luận cũ; giữ trong `THAO-LUAN.md` hoặc thư mục `trao-doi/` để truy vết.
- Khi bất đồng, ghi phương án, đánh đổi và dữ liệu cần thêm.
- Không AI nào tự đóng vấn đề hoặc quyết thay anh Đức.
- Sau mỗi vòng, cập nhật báo cáo ngắn hoặc biên bản tổng hợp để anh Đức đọc trong khoảng 2 phút.

---

## 16. Changelog

| Ngày | Thay đổi | Bởi |
|---|---|---|
| 2026-07-27 | Tạo file, ghi nhận đội 5 người, các giả định chi phí và vấn đề vận hành. | Claude |
| 2026-07-27 | Bổ sung quyết định KPI 2 khóa giảng viên, 2 khóa doanh nghiệp và 200–300 sinh viên. | ChatGPT |
| 2026-07-27 | Claude vòng 2 tự sửa mô hình thủ công, cách hiểu STEAM, mùa vụ và đối lập mạng lưới/B2B; đề xuất mô hình AI-first. | Claude |
| 2026-07-27 | Đồng bộ AI-first/hybrid, STEAM đào tạo giáo viên, KPI ký–thu–giao, rút dự báo tài chính cũ và cập nhật backlog. | ChatGPT |
