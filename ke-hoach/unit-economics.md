# Unit economics — kinh tế đơn vị theo từng dòng sản phẩm

> Tài liệu này áp dụng cho mô hình mới. Không kế thừa chi phí, hạ tầng hoặc giả định từ SOPai, Arkon, henlich.vn hay dự án khác.
>
> Chỉ các chương trình giảng dạy đã soạn được kế thừa. Mọi chi phí nền tảng, vận hành và đối tác phải được tính lại.
>
> Chiến lược hiện hành là **education-first**. Kịch bản cơ sở phải bền vững khi doanh thu doanh nghiệp bằng 0.
>
> Mọi số chưa có hóa đơn, hợp đồng hoặc dữ liệu lớp thật phải ghi `[giả định]`.

Cập nhật: 2026-07-30

## 1. Thuật ngữ

| Thuật ngữ | Định nghĩa |
|---|---|
| Giá trị hợp đồng | Tổng giá trị đã ký |
| Pipeline | Cơ hội đang trao đổi, chưa phải doanh thu |
| Tiền đã thu | Tiền thực tế đã vào tài khoản |
| Học phí gộp | Tổng tiền người học trả |
| Doanh thu dự án | Học phí gộp trừ phần chia sẻ, hoàn trả và phí thu tiền |
| Chi phí trực tiếp | Chi phí phát sinh để giao một cohort/hợp đồng |
| Đóng góp | Doanh thu dự án trừ chi phí trực tiếp |
| Chi phí nền tảng | Chi phí xây, vận hành, cloud, bảo trì và hỗ trợ hệ thống mới |
| Chi phí đối tác | License, API, quota, hỗ trợ hoặc chia sẻ doanh thu với đối tác ngoài |
| Dòng tiền | Tiền vào trừ tiền ra theo thời điểm thực tế |
| CAC | Chi phí để có một người học hoặc khách hàng thanh toán |
| LTV | Đóng góp kỳ vọng trong toàn bộ vòng đời khách hàng |

Không dùng từ “doanh thu” để thay cho học phí gộp, pipeline, giá trị hợp đồng, tiền đã thu hoặc đóng góp.

## 2. Nguyên tắc chung

1. Tách từng dòng sản phẩm.
2. Kịch bản cơ sở không được phụ thuộc doanh nghiệp.
3. Không coi giờ phát triển nền tảng mới là miễn phí.
4. Không coi Grapuco là dịch vụ miễn phí hoặc nội bộ.
5. Mỗi cohort/hợp đồng có bảng dự toán riêng.
6. Chi phí chung được phân bổ theo quy tắc rõ ràng.
7. Đo chi phí trên người bắt đầu và người hoàn thành.
8. Theo dõi tỷ lệ nâng cấp giữa các bậc trong thang sản phẩm.
9. Không tăng quy mô chỉ vì bảng giả định có biên đẹp.
10. Mọi số thực tế phải ghi nguồn và ngày.

## 3. Thứ tự ưu tiên đo unit economics

1. Khóa ngắn hạn 2–4 buổi cho giáo viên/giảng viên.
2. Cohort sinh viên AI và Vibe Coding.
3. Khóa tổ chức cho trường/cơ sở giáo dục.
4. Cấp quyền chương trình và nền tảng.
5. Workshop, khảo sát và pilot doanh nghiệp.
6. Triển khai doanh nghiệp quy mô lớn.

Không mở rộng dòng sau khi chưa hiểu chi phí giao hàng của dòng trước.

## 4. Lớp cộng đồng và cohort người học

### 4.1. Công thức

> Học phí gộp = số người thanh toán × học phí thực thu bình quân

> Doanh thu dự án = học phí gộp - phần trường/đối tác - hoàn trả - phí thanh toán

> Đóng góp cohort = doanh thu dự án - giảng viên - trợ giảng/điều phối - công cụ AI - nền tảng - hỗ trợ - nhắn tin - chấm bài - chi phí trực tiếp khác

> Đóng góp/người bắt đầu = đóng góp cohort ÷ số người bắt đầu học

> Đóng góp/người hoàn thành = đóng góp cohort ÷ số người hoàn thành

### 4.2. Nhóm chi phí bắt buộc

| Nhóm | Nội dung |
|---|---|
| Nội dung | cập nhật học liệu, bài tập và rubric |
| Giảng dạy | giảng viên chính, trợ giảng, chuyên gia |
| Vận hành | danh sách, tài khoản, điểm danh, hỗ trợ, báo cáo |
| Nền tảng | cloud, storage, database, monitoring, bảo trì |
| AI/API | model, embedding, chấm sơ bộ nếu dùng |
| Thanh toán | cổng thanh toán, đối soát, hoàn tiền |
| Truyền thông | email, SMS, Zalo hoặc kênh khác |
| Đánh giá | người chấm/duyệt, khiếu nại và chấm lại |
| Đối tác | Grapuco hoặc add-on khác nếu cohort sử dụng |

### 4.3. Giả định thương mại tháng đầu

- Học phí bình quân sinh viên: **220.000 đồng/người** `[giả định]`.
- Phần dự án sau chia sẻ: **60%** `[giả định]`.
- Số người: **200–300**.

| Chỉ tiêu | 200 người | 300 người |
|---|---:|---:|
| Học phí gộp | 44 triệu | 66 triệu |
| Phần dự án sau chia sẻ | 26,4 triệu | 39,6 triệu |

Các số trên chưa trừ chi phí trực tiếp và không phải lợi nhuận.

### 4.4. Dữ liệu bắt buộc

- chi phí nền tảng/người/cohort;
- số giờ giảng viên và điều phối;
- số ticket/người;
- chi phí API;
- thời gian chấm/duyệt;
- tỷ lệ bắt đầu;
- tỷ lệ hoàn thành;
- tỷ lệ hoàn tiền;
- tỷ lệ nâng cấp sang khóa tiếp theo;
- CAC theo từng kênh;
- đóng góp/người hoàn thành.

## 5. Khóa ngắn hạn 2–4 buổi cho giáo viên/giảng viên

### 5.1. Vai trò

Đây là sản phẩm ưu tiên tạo dòng tiền và case study.

Có hai cấu hình:

1. Lớp cộng đồng tính theo người học.
2. Lớp tổ chức tính theo hợp đồng với trường/cơ sở.

### 5.2. Công thức lớp cộng đồng

> Doanh thu dự án = số người thanh toán × học phí thực thu - chia sẻ - hoàn trả - phí thanh toán

> Đóng góp = doanh thu dự án - giảng viên - trợ giảng - học liệu - nền tảng - truyền thông - hỗ trợ - chứng nhận

### 5.3. Công thức lớp tổ chức

> Đóng góp hợp đồng = tiền thực thu - khảo sát - tùy chỉnh - giảng viên - đi lại - học liệu - nền tảng - hỗ trợ - thuế/phí trực tiếp

### 5.4. Chỉ số quan trọng

- số người quan tâm → thanh toán;
- người thanh toán → tham dự;
- tham dự → hoàn thành;
- hoàn thành → nâng cấp bản 12 buổi;
- số trường yêu cầu triển khai nội bộ;
- thời gian chuẩn bị trên mỗi lớp;
- tỷ lệ tái sử dụng học liệu;
- chi phí bán hàng trên một lớp.

## 6. Khóa chuyên sâu và chương trình sinh viên

Các khóa 6–15 buổi phải tính thêm:

- hỗ trợ kéo dài;
- chấm sản phẩm;
- dự án cuối khóa;
- quản lý tiến độ;
- chuyên gia theo chủ đề;
- tỷ lệ bỏ học;
- chi phí đánh giá và cấp chứng nhận;
- chi phí lưu trữ sản phẩm/portfolio.

Không dùng biên của khóa 4 buổi để suy ra biên của khóa 12–15 buổi.

## 7. Khóa và gói cho trường/tổ chức giáo dục

### 7.1. Công thức

> Giá trị hợp đồng = đào tạo + tùy chỉnh + nền tảng + báo cáo + đào tạo nguồn + hỗ trợ

> Đóng góp = tiền thực thu - bán hàng - quản trị dự án - giảng dạy - tùy chỉnh - nền tảng - hỗ trợ - đi lại - thuế/phí trực tiếp

### 7.2. Chi phí bắt buộc

- khảo sát nhu cầu;
- quản trị hợp đồng;
- tùy chỉnh theo cấp học/ngành;
- giảng viên/chuyên gia;
- điều phối với đầu mối trường;
- tài khoản và dữ liệu;
- báo cáo;
- hỗ trợ sau khóa;
- công nợ và đối soát.

### 7.3. Chỉ số

- thời gian từ đồng ý đến khai giảng;
- tiền ứng trước;
- số người học thực tế;
- chi phí tùy chỉnh;
- số giờ điều phối;
- mức tái sử dụng chương trình;
- tỷ lệ gia hạn hoặc mua thêm;
- đóng góp theo trường/cohort.

## 8. B2B2C và chia sẻ học phí

### Công thức

> Doanh thu dự án = phí cố định + học phí thực thu × tỷ lệ dự án - hoàn trả - phí thu tiền

Phải tách:

- ai chịu CAC;
- ai thu tiền;
- ai chịu hoàn trả;
- ai hỗ trợ người học;
- ai cung cấp giảng viên;
- phần chia sẻ cho trường/đối tác;
- chi phí nền tảng và báo cáo.

Một thỏa thuận có nhiều người học chưa chắc có biên tốt nếu tỷ lệ chia sẻ và tải hỗ trợ cao.

## 9. Cấp quyền chương trình

### 9.1. Công thức

> Giá trị hợp đồng = phí quyền sử dụng + tùy chỉnh + nền tảng + onboarding + đào tạo nguồn + hỗ trợ

> Đóng góp = doanh thu thuần - bán hàng - cập nhật nội dung - onboarding - nền tảng - hỗ trợ - kỹ thuật - đối tác ngoài - thuế/phí trực tiếp

### 9.2. Ba cấu hình

| Cấu hình | Thành phần | Chi phí chính |
|---|---|---|
| Nội dung | chương trình và học liệu | cập nhật, IP, hỗ trợ tối thiểu |
| Nội dung + nền tảng | thêm người học, bài tập, rubric, báo cáo | cloud, support, kỹ thuật |
| Triển khai đầy đủ | tùy chỉnh, đào tạo nguồn, hỗ trợ | chuyên gia, quản trị dự án, vận hành |

Theo dõi chi phí gia hạn và cập nhật nội dung, không chỉ chi phí bán lần đầu.

## 10. Chương trình Vibe Coding và Grapuco

Grapuco là add-on, không mặc định nằm trong mọi cohort.

> Đóng góp Vibe Coding có Grapuco = doanh thu khóa - chi phí khóa cơ sở - chi phí Grapuco - chi phí tích hợp/vận hành bổ sung

Chỉ đưa Grapuco thành mặc định khi:

- lợi ích học tập đo được;
- chi phí phù hợp;
- dữ liệu và quyền sở hữu rõ;
- tích hợp ổn định;
- có phương án không dùng Grapuco.

## 11. Doanh nghiệp

### 11.1. Không dùng khung giá làm dự báo

Khung **20–100 triệu đồng/khóa** chỉ là tham chiếu. Không đưa vào kịch bản cơ sở khi chưa có phạm vi, hợp đồng và lịch thu.

### 11.2. Tính theo từng bậc

#### Workshop

- chi phí bán hàng;
- chuẩn bị nội dung;
- chuyên gia;
- đi lại/địa điểm;
- tài liệu;
- follow-up.

#### Khảo sát/AI Readiness

- phỏng vấn;
- phân tích quy trình;
- tài liệu hóa;
- bảo mật;
- báo cáo và workshop kết quả.

#### Pilot

- dữ liệu;
- tích hợp;
- workflow/agent/công cụ;
- kiểm thử;
- đào tạo;
- hỗ trợ;
- nghiệm thu;
- xử lý thay đổi phạm vi.

### 11.3. Công thức

> Đóng góp pilot = tiền thực thu - CAC - khảo sát - chuyên gia - phát triển/tích hợp - công cụ - hỗ trợ - chi phí nghiệm thu

Pilot chỉ đáng làm khi:

- phạm vi nhỏ;
- tiêu chí thành công đo được;
- có người phụ trách;
- có tiền ứng trước;
- có khả năng tạo case study hoặc hợp đồng mở rộng.

Doanh thu doanh nghiệp bằng 0 trong tháng đầu không được coi là thất bại nếu các KPI giáo dục đạt.

## 12. Phân bổ chi phí nền tảng

Tách ba nhóm:

1. Đầu tư sản phẩm dùng chung.
2. Chi phí vận hành hàng tháng.
3. Chi phí phát sinh riêng cho cohort/hợp đồng.

Quy tắc:

- chi phí riêng gán trực tiếp;
- chi phí dùng chung phân bổ theo người dùng, cohort hoặc mức sử dụng;
- giờ dev theo yêu cầu riêng phải tính vào hợp đồng;
- không lấy toàn bộ chi phí R&D dồn vào cohort đầu tiên;
- vẫn phải báo cáo tổng burn và runway riêng.

## 13. Dashboard unit economics

Mỗi tháng phải có:

| Dòng sản phẩm | Tiền thực thu | Doanh thu dự án | Chi phí trực tiếp | Đóng góp | Người bắt đầu | Người hoàn thành | CAC | Tỷ lệ nâng cấp |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Khóa 4 buổi giáo viên |  |  |  |  |  |  |  |  |
| Chương trình giáo viên dài hạn |  |  |  |  |  |  |  |  |
| Sinh viên AI |  |  |  |  |  |  |  |  |
| Vibe Coding |  |  |  |  |  |  |  |  |
| Gói trường/cấp quyền |  |  |  |  |  |  |  |  |
| Workshop/pilot doanh nghiệp |  |  |  |  |  |  |  |  |

## 14. Ngưỡng quyết định

### Tiếp tục/mở rộng khi

- đóng góp dương hoặc có lý do đầu tư rõ;
- chất lượng đạt chuẩn;
- tỷ lệ hoàn thành chấp nhận được;
- tải hỗ trợ có thể kiểm soát;
- học liệu tái sử dụng được;
- có nhu cầu mua tiếp hoặc gia hạn.

### Dừng hoặc thiết kế lại khi

- tiền thực thu không đủ chi phí trực tiếp;
- tùy chỉnh lặp lại quá nhiều;
- tỷ lệ hoàn thành thấp;
- support tăng nhanh hơn doanh thu;
- phụ thuộc một giảng viên/đối tác duy nhất;
- doanh nghiệp yêu cầu pilot lớn nhưng không chốt dữ liệu, người phụ trách hoặc nghiệm thu.