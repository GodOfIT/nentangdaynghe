# Chi phí, dòng tiền và vốn lưu động

> Tài liệu này áp dụng cho mô hình mới. Không kế thừa hạ tầng, nhân sự, workflow, phần mềm hoặc chi phí từ SOPai, Arkon, henlich.vn hay dự án khác.
>
> Chỉ các chương trình giảng dạy đã soạn được kế thừa.
>
> Mọi số chưa có chứng từ, hợp đồng hoặc quyết định của anh Đức đều là `[giả định]`.

Cập nhật: 2026-07-30

## 1. Nguyên tắc quản trị

1. Giá trị hợp đồng không phải tiền đã thu.
2. Doanh thu ghi nhận không phải dòng tiền.
3. Mỗi hợp đồng/cohort có lịch thu và lịch chi riêng.
4. Không dùng một tỷ lệ chi phí chung cho mọi sản phẩm.
5. Chi phí xây nền tảng mới phải được ghi riêng khỏi chi phí vận hành lớp.
6. Không coi giờ dev, cloud, AI/API hoặc công cụ đối tác là miễn phí.
7. Grapuco được ghi là chi phí/đối tác ngoài nếu có hợp đồng hoặc sử dụng thực tế.
8. Không đưa chi phí hoặc doanh thu Grapuco vào dự báo khi chưa có thỏa thuận.
9. Không dùng các bảng dòng tiền cũ làm dự báo cho mô hình mới.

## 2. Nhóm chi phí của dự án mới

### 2.1. Nhân sự nội bộ

Cần lập ngân sách mới cho:

- điều hành và quan hệ trường;
- kinh doanh và hợp đồng;
- quản lý chương trình;
- vận hành lớp và hỗ trợ;
- phát triển sản phẩm/nền tảng;
- tài chính, kế toán và đối soát;
- quản trị dữ liệu và chất lượng.

Không kế thừa cơ cấu hoặc bảng lương của dự án khác. Mỗi vai trò phải có:

- hình thức toàn thời gian/bán thời gian/thuê ngoài;
- chi phí thực tế;
- thời gian cam kết;
- đầu ra;
- người phê duyệt.

### 2.2. Giảng viên và chuyên gia

- giảng viên chính;
- trợ giảng;
- chuyên gia kiểm duyệt nội dung;
- chuyên gia theo ngành/môn;
- giảng viên nguồn tại trường;
- người chấm/duyệt sản phẩm.

Tính theo cohort, buổi, giờ hoặc hợp đồng riêng.

### 2.3. Phát triển nền tảng mới

#### Đầu tư ban đầu

- product discovery;
- kiến trúc hệ thống;
- UX/UI;
- development;
- QA/test;
- bảo mật;
- hạ tầng ban đầu;
- tích hợp thanh toán/nhắn tin;
- tích hợp Grapuco nếu có;
- tài liệu và đào tạo vận hành.

#### Chi phí vận hành hàng tháng

- cloud/compute;
- database/storage;
- backup;
- monitoring/logging;
- email/SMS/Zalo/notification;
- domain và chứng chỉ;
- support và bảo trì;
- AI/API;
- công cụ analytics;
- license SaaS;
- bảo mật và kiểm thử.

### 2.4. Chi phí lớp học

- học liệu;
- giảng viên;
- trợ giảng/điều phối;
- hỗ trợ người học;
- điểm danh;
- chấm và duyệt;
- chứng nhận/báo cáo;
- nền tảng phân bổ;
- phí thu tiền;
- hoàn tiền/khiếu nại;
- truyền thông;
- đi lại/địa điểm nếu trực tiếp.

### 2.5. Chi phí Grapuco

Chỉ ghi khi có thỏa thuận hoặc sử dụng:

- license;
- API/quota;
- phí theo người học/cohort/trường;
- onboarding;
- tích hợp;
- support/SLA;
- chi phí xử lý/lưu trữ code nếu có;
- chi phí fallback hoặc chuyển đổi;
- chia sẻ doanh thu nếu có.

Grapuco không được nhập vào chi phí nhân sự hoặc tài sản nội bộ.

## 3. Dòng tiền tháng đầu

### 3.1. Dòng tiền vào

| Nguồn | Quy mô/thông tin hiện có | Tiền tháng đầu |
|---|---:|---:|
| Sinh viên online | 200–300 người × 220.000 đồng `[giả định]` | 44–66 triệu học phí gộp |
| 2 khóa giảng viên | 40–100 triệu giá trị hợp đồng | phụ thuộc ứng trước/lịch thu |
| 2 khóa doanh nghiệp | 40–200 triệu giá trị hợp đồng | phụ thuộc ứng trước/lịch thu |
| Cấp quyền chương trình | ít nhất 1 gói | chưa chốt giá/lịch thu |
| Nền tảng | có thể tính trong hợp đồng hoặc tách riêng | chưa chốt |
| Grapuco | không phải doanh thu mặc định | chỉ ghi khi có hợp đồng/chia sẻ doanh thu |

### 3.2. Dòng tiền ra

- chi phí nhân sự thực tế;
- chi phí giảng viên và chuyên gia;
- chi phí lớp đang chạy;
- đầu tư nền tảng mới;
- cloud và SaaS;
- phí thanh toán;
- pháp lý/kế toán/thuế;
- bán hàng và đi lại;
- Grapuco/đối tác ngoài nếu có;
- hoàn tiền và xử lý sự cố.

### 3.3. Công thức báo cáo

> Dòng tiền thuần = tổng tiền thực thu - tổng tiền thực chi

> Công nợ cuối kỳ = khoản phải thu đến hạn - khoản phải trả đến hạn

> Runway = tiền mặt khả dụng ÷ mức chi tiền bình quân thực tế

Không dùng doanh thu ký mới để che việc tiền chưa về.

## 4. Quản trị đầu tư nền tảng mới

### 4.1. Tách CAPEX/đầu tư và OPEX/vận hành

Báo cáo riêng:

- chi phí xây phiên bản đầu;
- chi phí phát triển tính năng mới;
- chi phí bảo trì;
- chi phí vận hành theo tháng;
- chi phí theo trường/cohort;
- chi phí tích hợp đối tác.

### 4.2. Mỗi hạng mục phải có

| Trường | Nội dung |
|---|---|
| Hạng mục | tên chức năng/tích hợp |
| Lý do | lớp/trường/vấn đề nào cần |
| Người phụ trách | nội bộ/thuê ngoài |
| Giờ công | kế hoạch và thực tế |
| Chi phí | dev, cloud, công cụ, đối tác |
| Deadline | ngày cần dùng |
| Trạng thái | chưa làm/đang làm/đã chạy |
| Kết quả | mức sử dụng, lỗi, tác động |

### 4.3. Thứ tự đầu tư tháng đầu

1. Quản lý trường, chương trình, cohort và người học.
2. Học liệu, nhiệm vụ và nộp sản phẩm.
3. Rubric, kết quả và báo cáo.
4. Phân quyền và audit log.
5. Điểm danh/tiến độ.
6. Thanh toán/đối soát hoặc tích hợp nhà cung cấp nếu dự án trực tiếp thu.
7. API/MCP gateway cho đối tác ngoài.
8. Grapuco chỉ triển khai sau khi phạm vi và điều khoản đã rõ.

## 5. Chi phí theo sản phẩm

### 5.1. Sinh viên online

Phải tính:

- giảng viên;
- trợ giảng/điều phối;
- hỗ trợ;
- nền tảng mới;
- cloud;
- AI/API;
- phí thanh toán;
- nhắn tin;
- chấm bài;
- Grapuco nếu là Vibe Coding có tích hợp.

### 5.2. Khóa giảng viên

- khảo sát;
- tùy chỉnh;
- giảng viên/chuyên gia;
- đi lại;
- học liệu;
- nền tảng;
- sản phẩm bàn giao;
- hỗ trợ sau khóa;
- thuế/phí.

### 5.3. Khóa doanh nghiệp

- khảo sát quy trình;
- dữ liệu và tình huống;
- chuyên gia;
- workflow/agent mẫu;
- bảo mật;
- nền tảng/công cụ;
- hỗ trợ triển khai;
- Grapuco nếu có nội dung codebase/Vibe Coding.

### 5.4. Cấp quyền chương trình

- bán hàng;
- tùy chỉnh;
- onboarding;
- đào tạo giảng viên nguồn;
- nền tảng;
- support;
- báo cáo;
- cập nhật nội dung;
- quản lý IP;
- đối tác ngoài/add-on.

### 5.5. STEAM và môn mới

- thiết kế;
- chuyên gia kiểm duyệt;
- đào tạo giáo viên;
- thiết bị nếu có;
- học liệu;
- nền tảng;
- hỗ trợ;
- đánh giá.

## 6. Bảng theo dõi hợp đồng/cohort

| Trường | Nội dung |
|---|---|
| Mã hợp đồng/cohort | định danh |
| Khách hàng/trường | đơn vị |
| Chương trình | tên và phiên bản |
| Số người học | kế hoạch/thực tế |
| Giá trị hợp đồng/học phí | tổng |
| Ngày ký | thực tế |
| Lịch triển khai | bắt đầu/kết thúc |
| Tiền ứng trước | số tiền/ngày |
| Các mốc thanh toán | số tiền/điều kiện |
| Chi phí giảng dạy | dự kiến/thực tế |
| Chi phí nền tảng | phân bổ |
| Chi phí Grapuco | nếu có |
| Chi phí đối tác khác | nếu có |
| Công nợ | còn phải thu |
| Đóng góp | doanh thu thuần trừ chi phí trực tiếp |

## 7. Điều khoản bảo vệ dòng tiền

- Có tiền ứng trước trước khi đặt lịch chuyên gia hoặc bắt đầu tùy chỉnh.
- Tiền ứng trước phải đủ trang trải phần chi phí đã cam kết nếu có thể.
- Thanh toán theo mốc và đầu ra rõ ràng.
- Ghi rõ phạm vi chỉnh sửa và hỗ trợ.
- Ghi rõ ai thu học phí và chịu phí thanh toán.
- Ghi rõ chi phí dịch vụ ngoài như Grapuco do bên nào thanh toán.
- Ghi rõ xử lý khi đối tác ngoài gián đoạn.

## 8. Quản trị Grapuco

Trước khi phát sinh chi phí, cần có:

- proposal/bảng giá;
- mô hình billing;
- quota;
- SLA;
- hỗ trợ;
- chính sách dữ liệu/code;
- quyền sở hữu;
- phương án chấm dứt;
- phương án di chuyển dữ liệu;
- phương án lớp học không dùng Grapuco.

Theo dõi hàng tháng:

- chi phí thực trả;
- số người/cohort sử dụng;
- mức sử dụng quota;
- lỗi;
- thời gian hỗ trợ;
- tác động tới kết quả học tập;
- doanh thu liên quan;
- tỷ lệ gia hạn.

## 9. Cảnh báo dòng tiền

Cảnh báo khi:

- tiền mặt dưới mức chi 2 tháng;
- công nợ quá hạn tăng;
- chi phí nền tảng vượt ngân sách;
- chi phí Grapuco/đối tác vượt doanh thu liên quan;
- nhiều trường khai giảng nhưng tiền chưa thu;
- chi phí hỗ trợ trên mỗi học viên tăng mạnh;
- đầu tư tính năng không có người dùng.

## 10. Các quyết định cần anh Đức chốt

- Ngân sách nền tảng mới tháng 1 và 3 tháng đầu.
- Quy mô đội nội bộ/thuê ngoài.
- Founder và đội ngũ nhận lương thế nào.
- Runway hiện có.
- Cơ chế thu học phí.
- Pháp nhân và hóa đơn.
- Mức giá cấp quyền.
- Mô hình thương mại với Grapuco.
- Trần chi phí Grapuco trên mỗi người/cohort.
- Đối tác nào được phép truy cập loại dữ liệu nào.

## 11. Kết luận

Dòng tiền của dự án mới phải được xây lại từ dữ liệu thực tế. Không được tái sử dụng bảng chi phí hoặc kết luận tài chính của hệ thống cũ. Nền tảng mới và Grapuco phải được nhìn như hai nhóm chi phí riêng: một nhóm đầu tư/sở hữu nội bộ, một nhóm dịch vụ đối tác ngoài.
