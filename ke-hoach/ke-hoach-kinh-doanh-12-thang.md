# Kế hoạch kinh doanh 12 tháng

> **Phiên bản điều hành sau phản hồi Claude vòng 2.**
>
> Tài liệu này thay thế các chỉ tiêu cũ về 800–1.500 sinh viên tháng đầu và các bảng doanh thu năm được suy ra từ số lượng hợp đồng chưa có căn cứ.
>
> Đọc cùng `AGENTS.md`, `ke-hoach/muc-tieu-thang-1.md`, `ke-hoach/unit-economics.md` và `ke-hoach/chi-phi-va-dong-tien.md`.

## 1. Nguyên tắc lập kế hoạch

1. Bắt đầu đào tạo từ tuần thứ hai.
2. Tách bốn dòng doanh thu và unit economics riêng.
3. B2B là nguồn tiền quan trọng trong quý đầu vì có thể thu theo hợp đồng và mốc thanh toán.
4. Sinh viên online không bị mặc định là dòng lỗ hoặc chỉ là phễu; khả năng tạo đóng góp phụ thuộc mức tự động hóa thực tế.
5. AI-first là kiến trúc vận hành mục tiêu; hybrid là phương án triển khai an toàn khi hệ thống chưa sẵn sàng.
6. Mạng lưới là kênh phân phối; hợp đồng B2B là mô hình thương mại.
7. Đội core là 5 người; mọi KPI phải kiểm tra trần vận hành.
8. Giá trị hợp đồng, doanh thu ghi nhận và tiền đã thu phải báo cáo riêng.
9. STEAM năm đầu là đào tạo năng lực giáo viên và pilot 1–2 môn, không phải tự xây thư viện 40–60 khóa phần cứng.
10. Mọi con số chưa có dữ liệu thật phải ghi `[giả định]`.

## 2. Cách hiểu về thời gian

- **Tháng 1** là 30 ngày vận hành đầu tiên, không mặc định là tháng 1 dương lịch.
- Khi chốt ngày bắt đầu, phải ánh xạ tháng vận hành sang tháng dương lịch.
- Không áp mùa vụ giống nhau cho mọi dòng sản phẩm:
  - Sinh viên online chịu ảnh hưởng của mùa thi, Tết và lịch học.
  - Khóa giảng viên có thể thuận lợi trong giai đoạn bồi dưỡng, kể cả hè, tùy từng trường.
  - Khóa doanh nghiệp ít phụ thuộc lịch năm học hơn.
  - Cấp quyền khóa học phụ thuộc chu kỳ phê duyệt, ngân sách và mua sắm.
- Mốc tháng 9 cho STEAM chỉ là hạn cứng sau khi anh Đức xác nhận đầu ra, người trả tiền, môn thí điểm và quy mô pilot.

## 3. Mô hình vận hành AI-first và hybrid

### 3.1. Kiến trúc mục tiêu AI-first

- Đăng ký và mã học viên tự động.
- Thanh toán định danh và đối soát tự động.
- Trợ lý AI tuyến đầu trên kho tri thức khóa học.
- Nhắc lịch, điểm danh và nộp bài bằng workflow.
- LLM chấm sơ bộ theo rubric, người duyệt vòng cuối.
- Dashboard ticket, ngoại lệ, chi phí và chất lượng.

### 3.2. Cấu hình hybrid dự phòng

- AI gợi ý câu trả lời, người vận hành duyệt.
- Đối soát bán tự động.
- Chấm sơ bộ bằng AI, người kiểm tra toàn bộ bài có rủi ro.
- Giới hạn quy mô nếu ticket và ngoại lệ vượt trần.

Không được dùng mô hình AI-first để lập kế hoạch quy mô lớn trước khi audit SOPai, Arkon, henlich.vn và chạy kiểm thử.

## 4. Bốn dòng sản phẩm và doanh thu

### 4.1. Đào tạo trực tiếp cho giảng viên

- Khung giá: **20–50 triệu đồng/khóa**.
- Nội dung điều chỉnh theo chuyên ngành, môn học và nhu cầu đơn vị.
- Đầu ra có thể gồm bộ công cụ AI, trợ lý môn học, skill, agent, kho tri thức hoặc quy trình sản xuất học liệu.
- Theo dõi riêng hợp đồng ký, tiền thu, khóa khai giảng, khóa hoàn thành và công nợ.

### 4.2. Đào tạo AI cho doanh nghiệp

- Khung giá: **20–100 triệu đồng/khóa**.
- Có thể kết hợp khảo sát, đào tạo, tư vấn và triển khai.
- Đầu ra có thể gồm quy tắc sử dụng AI, workflow, agent mẫu, tài liệu vận hành hoặc kế hoạch triển khai.

### 4.3. Cấp quyền sử dụng khóa học cho sinh viên

Ba cấu hình:

1. Quyền sử dụng nội dung.
2. Nội dung + nền tảng + báo cáo.
3. Gói triển khai đầy đủ có tùy chỉnh và đào tạo giảng viên nguồn.

Doanh thu:

> Phí quyền sử dụng + phí tùy chỉnh + phí nền tảng/onboarding/hỗ trợ

Phải tính chi phí cập nhật, hỗ trợ, kỹ thuật, báo cáo và kiểm soát phạm vi sử dụng.

### 4.4. Tự vận hành lớp sinh viên online

Giả định tháng đầu:

- 200–300 sinh viên thanh toán và bắt đầu học.
- Học phí bình quân 220.000 đồng/người `[giả định]`.
- Phần đối tác 40% `[giả định]`.
- Kịch bản ngân sách về hoàn thành: 50–60%.
- Mục tiêu vận hành nội bộ: khoảng 70%.

Unit economics phải chạy ít nhất hai cấu hình:

- AI-first.
- Hybrid dự phòng.

### 4.5. Vibe coding

- Vibe Coding Foundation: 6–8 buổi.
- Đối tượng: sinh viên và người học không chuyên lập trình.
- Đầu ra: website, ứng dụng nhỏ, workflow hoặc sản phẩm có thể trình diễn.
- Giá và biên chỉ được chốt sau cohort đầu.

## 5. Nhánh STEAM năm đầu

### 5.1. Bản chất sản phẩm

- Đào tạo giáo viên dạy STEAM.
- Học liệu/hướng dẫn cho 1–2 môn thí điểm.
- Hướng dẫn giáo viên tổ chức hoạt động cho học sinh.
- Hỗ trợ từ xa sau đào tạo.
- Có thể kèm công cụ số hoặc trợ lý AI nếu phạm vi cho phép.

### 5.2. Vị trí trong mô hình

STEAM có thể chạy song song như một nhánh B2B giáo dục, dùng chung năng lực:

- thiết kế chương trình;
- đào tạo giảng viên/giáo viên;
- học liệu;
- trợ lý AI;
- mạng lưới chuyên gia.

Không lập một bộ máy STEAM riêng trong năm đầu.

### 5.3. Điều kiện kích hoạt

Chỉ chốt lịch và cam kết khi có câu trả lời cho:

- ai trả tiền;
- 1–2 môn nào;
- số trường và giáo viên;
- mức đầu ra cần đạt;
- hướng dẫn học sinh là tài liệu hay phần mềm;
- chuyên gia nghiệm thu;
- điều phối viên tại chỗ, đặc biệt với vùng khó.

Mô hình vùng khó phải có unit economics riêng và không mặc định một trợ lý AI thay hoàn toàn người hỗ trợ tại chỗ.

## 6. Kế hoạch 30 ngày đầu

### Tuần 1 — Audit, chốt sản phẩm và hợp đồng

- Audit SOPai, Arkon và henlich.vn trong 2–3 ngày.
- Xác định chức năng đã dùng được, chức năng hybrid và chức năng chưa có.
- Hoàn thiện AI Fluency ở hai phiên bản: cấp quyền và tự vận hành online.
- Hoàn thiện ít nhất một gói giảng viên và một gói doanh nghiệp có thể bán ngay.
- Chốt giá, phạm vi, lịch, người dạy, chi phí trực tiếp và điều khoản thanh toán.
- Nếu STEAM là ưu tiên tháng 9, chốt ngay người trả tiền, môn thí điểm và đầu ra.

### Tuần 2 — Khai giảng và chạy hybrid an toàn

- Khai giảng cohort sinh viên đầu tiên.
- Khai giảng hoặc chốt lịch khóa giảng viên đầu tiên.
- Dùng AI-first ở phần đã kiểm thử; phần còn lại chạy hybrid.
- Theo dõi thanh toán, ticket, ngoại lệ, chi phí API và lỗi vận hành.

### Tuần 3 — Giao B2B và đo tải

- Triển khai khóa doanh nghiệp hoặc khóa giảng viên tiếp theo.
- Thu bài tập và sản phẩm của sinh viên.
- Đo số giờ hỗ trợ, tỷ lệ chuyển người thật và thời gian duyệt bài.
- Không mở thêm cohort nếu hệ thống chưa kiểm soát được ngoại lệ.

### Tuần 4 — Hoàn thành, thu tiền và quyết định quy mô

- Hoàn thành các khóa ngắn theo lịch.
- Thu phản hồi, case study và dữ liệu học tập.
- Đối soát tiền đã thu, công nợ và chi phí trực tiếp.
- So sánh AI-first với hybrid.
- Chốt quy mô tháng 2 bằng số thật.

## 7. KPI tháng đầu

| Dòng sản phẩm | KPI |
|---|---:|
| Hợp đồng khóa giảng viên đã ký và có lịch | **2** |
| Hợp đồng khóa doanh nghiệp đã ký và có lịch | **2** |
| Mục tiêu triển khai khóa giảng viên | **2**, báo cáo riêng khai giảng/hoàn thành |
| Mục tiêu triển khai khóa doanh nghiệp | **2**, báo cáo riêng khai giảng/hoàn thành |
| Sinh viên thanh toán và bắt đầu học | **200–300** |
| Hoàn thành theo kịch bản ngân sách | **100–180** |
| Mục tiêu hoàn thành nội bộ | **140–210** |
| Gói khóa sinh viên bán hoặc thử nghiệm | **Ít nhất 1** |
| Audit tài sản kỹ thuật | Hoàn thành tuần 1 |
| Đo chi phí API và tải hỗ trợ | Có báo cáo sau cohort đầu |

## 8. Lộ trình 12 tháng theo giai đoạn

### Giai đoạn 1 — Tháng vận hành 1–3

- Bán và giao các khóa AI cho giảng viên và doanh nghiệp.
- Chạy cohort sinh viên 200–300 người với AI-first/hybrid.
- Thử nghiệm ít nhất một cấu hình cấp quyền khóa học.
- Hoàn thiện dashboard ký–thu–giao–công nợ.
- Kích hoạt STEAM nếu phạm vi và người trả tiền đã được chốt.

Điều kiện chuyển giai đoạn:

- Có dữ liệu thật về chi phí và tỷ lệ hoàn thành.
- Có case B2B hoàn thành.
- Quy trình thanh toán, hỗ trợ và chấm bài nằm trong trần.
- AI-first chứng minh được lợi ích so với hybrid.

### Giai đoạn 2 — Tháng vận hành 4–6

- Chuẩn hóa 2–3 gói giảng viên và 2–3 gói doanh nghiệp.
- Mở Vibe Coding Foundation theo cohort nhỏ.
- Hoàn thiện ba cấu hình cấp quyền khóa học.
- Xây mạng lưới chuyên gia theo hợp đồng khung.
- Nếu pilot STEAM có kết quả, chuẩn hóa gói đào tạo giáo viên.

### Giai đoạn 3 — Tháng vận hành 7–9

- Nhân rộng các gói đã có case và unit economics phù hợp.
- Mở rộng qua mạng lưới nhưng vẫn quản lý hợp đồng từng đơn vị.
- Tăng mức tự động hóa dựa trên dữ liệu ticket thật.
- Mở rộng STEAM theo cụm nếu có người điều phối tại chỗ và nguồn chi trả rõ.

### Giai đoạn 4 — Tháng vận hành 10–12

- Bán gia hạn quyền sử dụng theo năm học.
- Chuyển khách B2B sang đào tạo định kỳ hoặc dự án triển khai.
- Chuẩn hóa thư viện case, rubric, học liệu và portfolio.
- Đánh giá trục nào đủ điều kiện mở rộng trong năm 2.

## 9. Chưa chốt chỉ tiêu năm bằng phép nhân tùy ý

Các con số cũ như 12.000–24.000 lượt sinh viên, 15–36 khóa giảng viên và 10–24 khóa doanh nghiệp không còn là chỉ tiêu điều hành.

Chỉ chốt sau khi có:

1. Trần số khóa B2B đội 5 người có thể giao mỗi tháng.
2. Tỷ lệ ký hợp đồng từ pipeline thực tế.
3. Lịch thanh toán và tỷ lệ thu tiền đúng hạn.
4. Unit economics AI-first và hybrid.
5. Mức hoàn thiện SOPai, Arkon và henlich.vn.
6. Năng lực mạng lưới chuyên gia.
7. Ngày bắt đầu chính thức.
8. Phạm vi và nguồn tiền của STEAM.

## 10. Dashboard điều hành hằng tuần

### B2B

- Cơ hội đủ điều kiện.
- Đề xuất đã gửi.
- Hợp đồng đã ký.
- Giá trị hợp đồng.
- Tiền ứng trước và tiền đã thu.
- Khóa đã khai giảng và hoàn thành.
- Chi phí trực tiếp.
- Công nợ.

### Sinh viên online

- Đăng ký, thanh toán, bắt đầu và hoàn thành.
- Học phí thực thu và phần chia sẻ.
- Chi phí API, nền tảng, điều phối và hỗ trợ.
- Ticket/người và tỷ lệ chuyển người thật.
- Thời gian duyệt bài.
- Đóng góp theo AI-first/hybrid.

### Cấp quyền khóa học

- Đề xuất đã gửi.
- Gói đã ký/thử nghiệm.
- Số người học được cấp quyền.
- Tiền đã thu.
- Chi phí onboarding, hỗ trợ và nền tảng.
- Tỷ lệ gia hạn.

### STEAM

- Người trả tiền/đơn vị bảo trợ.
- Môn thí điểm.
- Trường và giáo viên tham gia.
- Chuyên gia nghiệm thu.
- Người điều phối tại chỗ.
- Chi phí hỗ trợ từ xa và trực tiếp.

## 11. Kết luận

Năm đầu tập trung vào các năng lực dùng chung:

- bán và giao B2B giáo dục/doanh nghiệp;
- vận hành cohort sinh viên bằng kiến trúc AI-first có phương án hybrid;
- cấp quyền khóa học;
- vibe coding có sản phẩm đầu ra;
- đào tạo năng lực giáo viên STEAM trong phạm vi pilot rõ ràng;
- nền tảng tối thiểu dựa trên tài sản đã có.

Mọi bước mở rộng chỉ được thực hiện sau khi có số liệu thật về unit economics, dòng tiền, chất lượng và trần vận hành.
