# Khung hợp tác với Grapuco

> **Trạng thái:** đối tác công nghệ bên ngoài dự kiến.  
> **Nguyên tắc:** Grapuco không phải tài sản nội bộ, không thuộc nền tảng và không phải điều kiện bắt buộc để lớp học vận hành.

## 1. Mục tiêu hợp tác

Hợp tác nhằm tăng chất lượng các chương trình Vibe Coding và các hoạt động AI coding thông qua khả năng phân tích, trực quan hóa và cung cấp context có cấu trúc cho codebase.

Không sử dụng hợp tác này để:

- chuyển quyền kiểm soát nền tảng;
- thay thế GitHub hoặc môi trường phát triển;
- chia sẻ dữ liệu người học không cần thiết;
- tạo dependency khiến khóa học không thể chạy khi Grapuco gián đoạn.

## 2. Phạm vi sản phẩm

### 2.1. Dành cho người học Vibe Coding

- kết nối repository được cho phép;
- xem cấu trúc module;
- xem dependency/call graph/flow;
- hiểu code do AI tạo;
- chuẩn bị đặc tả trước khi sửa;
- phân tích tác động thay đổi;
- trình bày kiến trúc sản phẩm;
- hỗ trợ làm việc với AI coding tools.

### 2.2. Dành cho giảng viên

- quan sát cấu trúc dự án;
- hướng dẫn người học tìm module liên quan;
- kiểm tra mức độ tổ chức code;
- hỗ trợ phản biện kiến trúc;
- dùng làm minh chứng bổ sung khi đánh giá dự án.

Grapuco không được dùng như công cụ chấm điểm duy nhất. Sản phẩm phải chạy được và người học phải giải thích được quyết định của mình.

### 2.3. Dành cho đội phát triển nền tảng

- lập bản đồ codebase greenfield;
- onboarding developer;
- context cho AI coding tools;
- phân tích dependency;
- đánh giá tác động thay đổi;
- tài liệu hóa kiến trúc.

## 3. Mô hình tích hợp

Các phương án:

1. Liên kết ngoài/tài khoản Grapuco riêng.
2. SSO hoặc liên kết tài khoản.
3. API.
4. MCP.
5. Embed một số kết quả trong nền tảng.

Thứ tự khuyến nghị:

- giai đoạn 1: tài khoản/liên kết ngoài để thử nhanh;
- giai đoạn 2: API/MCP khi đã xác nhận giá trị;
- giai đoạn 3: tích hợp sâu nếu có đủ người dùng, SLA và mô hình thương mại.

## 4. Ranh giới dữ liệu

### 4.1. Không chia sẻ mặc định

- họ tên;
- số điện thoại;
- email;
- điểm số;
- dữ liệu thanh toán;
- hồ sơ cá nhân;
- dữ liệu trường không liên quan;
- secret/credential;
- repository chưa được cho phép.

### 4.2. Có thể chia sẻ khi được phép

- repository/project đã chọn;
- mã project;
- metadata cần thiết cho tích hợp;
- cấu trúc code và kết quả phân tích;
- thông tin kỹ thuật không định danh.

### 4.3. Yêu cầu

- consent/quyền sử dụng rõ ràng;
- quyền truy cập tối thiểu;
- log kết nối;
- ngắt kết nối và thu hồi quyền;
- chính sách lưu/xóa;
- thông báo sự cố;
- xử lý dữ liệu sau khi hết hợp đồng.

## 5. Quyền sở hữu

Hợp đồng cần quy định:

- code của dự án thuộc ai;
- code và sản phẩm sinh viên thuộc ai;
- Grapuco được xử lý dữ liệu ở mức nào;
- Grapuco có được dùng dữ liệu để huấn luyện/cải thiện dịch vụ hay không;
- quyền sử dụng metadata và kết quả phân tích;
- quyền xuất/xóa dữ liệu;
- trách nhiệm với dependency mã nguồn mở.

Mặc định của dự án:

- Grapuco không sở hữu code người học;
- Grapuco không sở hữu học liệu;
- dự án giữ dữ liệu đào tạo cốt lõi;
- quyền sản phẩm người học phải được giải thích rõ trong điều khoản khóa học.

## 6. Mô hình thương mại cần đàm phán

| Mô hình | Mô tả |
|---|---|
| License dự án | phí cố định + quota |
| Theo người dùng | phí theo tài khoản/người học |
| Theo cohort | phí theo lớp |
| Theo trường | gói riêng cho từng đơn vị |
| Bundle | nằm trong học phí/gói đào tạo |
| Referral | Grapuco bán trực tiếp, dự án nhận giới thiệu |
| Chia sẻ doanh thu | tỷ lệ trên doanh thu sản phẩm liên quan |

Cần chốt:

- đơn giá;
- quota;
- overage;
- thuế/hóa đơn;
- hoàn tiền;
- tài khoản demo;
- giáo viên/admin có tính phí hay không;
- hỗ trợ kỹ thuật;
- thời hạn hợp đồng.

## 7. SLA và hỗ trợ

- uptime;
- thời gian phản hồi;
- mức độ ưu tiên sự cố;
- kênh hỗ trợ;
- người phụ trách hai bên;
- thông báo bảo trì;
- giới hạn trách nhiệm;
- backup và khôi phục;
- thay đổi API/MCP;
- hỗ trợ onboarding giảng viên.

## 8. Tiêu chí thử nghiệm

Thử nghiệm trên một nhóm nhỏ của chương trình Vibe Coding.

Đo:

- thời gian người học hiểu codebase;
- số lỗi do sửa sai module;
- khả năng giải thích kiến trúc;
- thời gian giảng viên hỗ trợ;
- mức sử dụng;
- chi phí/người;
- lỗi tích hợp;
- phản hồi người học;
- chất lượng sản phẩm cuối khóa.

## 9. Điều kiện mở rộng

Chỉ mở rộng khi:

- có lợi ích học tập rõ;
- chi phí phù hợp;
- tích hợp ổn định;
- dữ liệu và quyền sở hữu rõ;
- Grapuco đáp ứng SLA;
- có phương án fallback;
- trường/người học chấp nhận điều khoản.

## 10. Phương án fallback

Khi Grapuco chưa sẵn sàng hoặc gián đoạn:

- người học dùng GitHub;
- dùng sơ đồ kiến trúc thủ công;
- dùng tài liệu module/dependency;
- giảng viên chấm bằng rubric;
- nền tảng vẫn nhận bài và lưu minh chứng;
- lớp không bị dừng.

## 11. Checklist trước khi ký

- [ ] Scope kỹ thuật.
- [ ] Mô hình thương mại.
- [ ] Bảng giá và quota.
- [ ] SLA/support.
- [ ] Chính sách code và dữ liệu.
- [ ] Quyền sở hữu.
- [ ] Consent người học.
- [ ] DPA/điều khoản xử lý dữ liệu nếu cần.
- [ ] Phương án fallback.
- [ ] Kế hoạch thử nghiệm.
- [ ] Người phụ trách hai bên.
- [ ] Tiêu chí mở rộng/dừng.
