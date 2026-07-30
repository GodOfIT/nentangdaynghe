# Unit economics — kinh tế đơn vị theo từng dòng sản phẩm

> Tài liệu này là khung tính cho mô hình mới. Không kế thừa chi phí, hạ tầng hoặc giả định từ SOPai, Arkon, henlich.vn hay dự án khác.
>
> Chỉ các chương trình giảng dạy đã soạn được kế thừa. Mọi chi phí nền tảng, vận hành và đối tác phải được tính lại.
>
> Mọi số chưa có hóa đơn, hợp đồng hoặc dữ liệu lớp thật phải ghi `[giả định]`.

Cập nhật: 2026-07-30

## 1. Thuật ngữ

| Thuật ngữ | Định nghĩa |
|---|---|
| Giá trị hợp đồng | Tổng giá trị đã ký |
| Tiền đã thu | Tiền thực tế đã vào tài khoản |
| Học phí gộp | Tổng tiền người học trả |
| Doanh thu dự án | Học phí gộp trừ phần chia sẻ, hoàn trả và phí thu tiền |
| Chi phí trực tiếp | Chi phí phát sinh để giao một cohort/hợp đồng |
| Đóng góp | Doanh thu dự án trừ chi phí trực tiếp |
| Chi phí nền tảng | Chi phí xây, vận hành, cloud, bảo trì và hỗ trợ hệ thống mới |
| Chi phí đối tác | License, API, quota, hỗ trợ hoặc chia sẻ doanh thu với đối tác ngoài |
| Dòng tiền | Tiền vào trừ tiền ra theo thời điểm thực tế |

Không dùng một từ “doanh thu” để thay cho học phí gộp, giá trị hợp đồng, tiền đã thu hoặc đóng góp.

## 2. Nguyên tắc chung

1. Tách từng dòng sản phẩm.
2. Không dùng chi phí của hệ thống cũ.
3. Không coi giờ phát triển nền tảng mới là miễn phí.
4. Không coi Grapuco là dịch vụ miễn phí hoặc nội bộ.
5. Mỗi cohort/hợp đồng có bảng dự toán riêng.
6. Chi phí chung được phân bổ theo quy tắc rõ ràng.
7. Không tăng quy mô chỉ vì bảng giả định có biên đẹp.
8. Mọi số thực tế phải ghi nguồn và ngày.

## 3. Lớp sinh viên online

### 3.1. Công thức

> Học phí gộp = số người thanh toán × học phí thực thu bình quân

> Doanh thu dự án = học phí gộp - phần trường/đối tác - hoàn trả - phí thanh toán

> Đóng góp cohort = doanh thu dự án - giảng viên - trợ giảng/điều phối - công cụ AI - nền tảng - hỗ trợ - nhắn tin - chấm bài - chi phí Grapuco nếu có - chi phí trực tiếp khác

### 3.2. Các nhóm chi phí bắt buộc

| Nhóm | Nội dung |
|---|---|
| Nội dung | cập nhật học liệu, bài tập và rubric |
| Giảng dạy | giảng viên chính, trợ giảng, chuyên gia |
| Vận hành | danh sách, tài khoản, điểm danh, hỗ trợ, báo cáo |
| Nền tảng mới | cloud, storage, database, monitoring, bảo trì |
| AI/API | model, embedding, reranking, chấm sơ bộ nếu dùng |
| Thanh toán | cổng thanh toán, đối soát, hoàn tiền |
| Truyền thông | email, SMS, Zalo hoặc kênh khác |
| Đánh giá | người chấm/duyệt, khiếu nại và chấm lại |
| Grapuco | license/API/quota/support nếu cohort Vibe Coding sử dụng |

### 3.3. Hai cấu hình vận hành cần đo

#### A. Nền tảng mới + tự động hóa

- đăng ký và trạng thái người học được quản lý trên hệ thống mới;
- nhắc lịch và báo cáo có tự động hóa;
- AI hỗ trợ tuyến đầu hoặc chấm sơ bộ nếu đã xây;
- con người xử lý ngoại lệ và chịu trách nhiệm cuối cùng.

#### B. Nền tảng tối thiểu + vận hành thủ công

- dùng hệ thống mới ở phạm vi lõi;
- các bước chưa có được xử lý bằng bảng tính/SaaS/quy trình thủ công;
- trợ giảng và điều phối tăng theo tải thật.

Khoảng chênh giữa hai cấu hình phải được đo bằng số giờ, chi phí và chất lượng; không dùng số liệu từ hệ thống cũ.

### 3.4. Giả định thương mại tháng đầu

- Học phí bình quân: **220.000 đồng/người** `[giả định]`.
- Phần dự án sau chia sẻ: **60%** `[giả định]`.
- Số người: **200–300**.

| Chỉ tiêu | 200 người | 300 người |
|---|---:|---:|
| Học phí gộp | 44 triệu | 66 triệu |
| Phần dự án sau chia sẻ | 26,4 triệu | 39,6 triệu |

Hai dòng trên chưa trừ bất kỳ chi phí trực tiếp nào và không phải lợi nhuận.

### 3.5. Dữ liệu bắt buộc phải đo

- chi phí nền tảng/người/cohort;
- số giờ dev dùng riêng cho cohort;
- số ticket/người;
- giờ điều phối;
- lỗi tài khoản và thanh toán;
- số lượt hỗ trợ AI;
- chi phí API;
- thời gian chấm/duyệt;
- tỷ lệ hoàn thành;
- tỷ lệ khiếu nại/chấm lại;
- chi phí Grapuco/người hoặc cohort nếu dùng;
- giá trị bổ sung của Grapuco đối với chất lượng và thời gian hướng dẫn.

## 4. Chương trình Vibe Coding và Grapuco

### 4.1. Không dùng Grapuco

Chi phí gồm:

- GitHub/repository;
- môi trường code;
- hosting/deploy;
- AI coding tools;
- giảng viên và trợ giảng;
- kiểm thử và đánh giá;
- nền tảng quản lý học tập.

### 4.2. Có Grapuco

Bổ sung:

- license/quota/API;
- onboarding;
- tích hợp kỹ thuật;
- hỗ trợ người dùng;
- xử lý quyền repository;
- chi phí lưu trữ/xử lý code nếu có;
- chi phí SLA hoặc support;
- chi phí fallback khi dịch vụ gián đoạn.

### 4.3. Công thức

> Đóng góp Vibe Coding có Grapuco = doanh thu khóa - chi phí khóa cơ sở - chi phí Grapuco - chi phí tích hợp/vận hành bổ sung

Chỉ đưa Grapuco thành mặc định khi:

- lợi ích học tập đo được;
- chi phí phù hợp;
- dữ liệu và quyền sở hữu rõ;
- tích hợp ổn định;
- có phương án không dùng Grapuco.

### 4.4. Các mô hình thương mại cần so sánh

| Mô hình | Cách tính |
|---|---|
| License dự án | phí cố định/tháng/năm + quota |
| Theo người học | số người dùng × đơn giá |
| Theo cohort | số cohort × đơn giá |
| Trường mua trực tiếp | dự án không ghi nhận chi phí license, có thể có referral |
| Bundle | học phí/gói trường đã bao gồm Grapuco |
| Chia sẻ doanh thu | tỷ lệ trên doanh thu chương trình liên quan |

Không chọn mô hình trước khi có đề xuất thương mại chính thức.

## 5. Cấp quyền chương trình

### 5.1. Công thức

> Giá trị hợp đồng = phí quyền sử dụng + tùy chỉnh + nền tảng + onboarding + đào tạo giảng viên nguồn + hỗ trợ

> Đóng góp = doanh thu thuần - bán hàng - cập nhật nội dung - onboarding - nền tảng - hỗ trợ - kỹ thuật - đối tác ngoài - thuế/phí trực tiếp

### 5.2. Ba cấu hình

| Cấu hình | Thành phần | Chi phí chính |
|---|---|---|
| Nội dung | chương trình và học liệu | cập nhật, quản lý IP, hỗ trợ tối thiểu |
| Nội dung + nền tảng | thêm người học, bài tập, rubric, báo cáo | cloud, support, kỹ thuật |
| Triển khai đầy đủ | tùy chỉnh, đào tạo nguồn, hỗ trợ | chuyên gia, quản trị dự án, vận hành |

Grapuco có thể là add-on riêng cho Vibe Coding, không mặc định nằm trong mọi gói cấp quyền.

## 6. B2B giảng viên

### 6.1. Khung giá

- **20–50 triệu đồng/khóa**.

### 6.2. Chi phí bắt buộc

- khảo sát và thiết kế;
- giảng viên/chuyên gia;
- tùy chỉnh học liệu;
- đi lại/địa điểm;
- trợ giảng và vận hành;
- nền tảng mới;
- AI/API;
- sản phẩm bàn giao;
- hỗ trợ sau khóa;
- thuế/phí trực tiếp.

Mỗi hợp đồng có bảng riêng. Không dùng một tỷ lệ phần trăm chung cho mọi khóa.

## 7. B2B doanh nghiệp

### 7.1. Khung giá

- **20–100 triệu đồng/khóa**.

### 7.2. Chi phí bắt buộc

- khảo sát quy trình;
- chuẩn bị tình huống/dữ liệu;
- chuyên gia;
- giờ đào tạo;
- workflow/agent mẫu;
- bảo mật và kiểm thử;
- hỗ trợ sau đào tạo;
- nền tảng/công cụ;
- đi lại;
- thuế/phí.

Grapuco chỉ phát sinh khi gói có Vibe Coding, codebase hoặc AI coding và hai bên đã chốt phạm vi.

## 8. STEAM và môn mới

Mỗi chương trình có bảng riêng:

- thiết kế chương trình;
- chuyên gia kiểm duyệt;
- học liệu;
- đào tạo giáo viên;
- thiết bị nếu có;
- nền tảng;
- điều phối;
- hỗ trợ từ xa;
- đánh giá và báo cáo.

Không dùng unit economics của sinh viên AI cho STEAM.

## 9. Phân bổ chi phí nền tảng mới

Chi phí nền tảng chia thành:

### 9.1. Đầu tư ban đầu

- product discovery;
- UX/UI;
- development;
- QA;
- bảo mật;
- migration/import dữ liệu ban đầu nếu có;
- tích hợp nhà cung cấp;
- tích hợp Grapuco nếu có.

### 9.2. Chi phí vận hành

- cloud;
- database/storage;
- monitoring/logging;
- email/SMS/notification;
- support;
- bảo trì;
- API/AI;
- license đối tác.

### 9.3. Cách phân bổ

Theo dõi đồng thời:

- chi phí nền tảng chung;
- chi phí theo trường;
- chi phí theo cohort;
- chi phí theo người học;
- chi phí theo sản phẩm;
- chi phí đối tác ngoài.

Không ép toàn bộ chi phí phát triển ban đầu vào cohort tháng đầu; báo cáo riêng đầu tư và chi phí vận hành.

## 10. Mẫu báo cáo thực tế

Mỗi cohort/hợp đồng cần ghi:

- doanh thu/học phí gộp;
- phần chia sẻ;
- tiền đã thu;
- chi phí giảng dạy;
- chi phí vận hành;
- chi phí nền tảng;
- chi phí AI/API;
- chi phí Grapuco/đối tác ngoài;
- đóng góp;
- công nợ;
- số người bắt đầu và hoàn thành;
- sản phẩm và chất lượng.

## 11. Kết luận

Unit economics mới phải trả lời được:

1. Chương trình nào tạo đóng góp tốt nhất?
2. Nền tảng mới làm giảm hay tăng chi phí vận hành ở mức quy mô nào?
3. Grapuco tạo thêm giá trị học tập và thương mại lớn hơn chi phí hay không?
4. Cấp quyền chương trình có tạo doanh thu lặp lại hay không?
5. Đội ngũ có thể triển khai nhiều trường mà không giảm chất lượng hay không?

Không sử dụng lại các kết luận tài chính được tính từ hệ thống cũ.
