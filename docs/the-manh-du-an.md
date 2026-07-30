# Thế mạnh và nguyên tắc lập kế hoạch dự án

> **Tài liệu điều hành.** Đọc cùng `AGENTS.md`, `ke-hoach/muc-tieu-thang-1.md` và `ke-hoach/ke-hoach-kinh-doanh-12-thang.md`.
>
> Khi mâu thuẫn với `AGENTS.md`, ưu tiên `AGENTS.md`.

## 1. Điểm xuất phát thực tế

Dự án có hai lợi thế đã xác nhận:

1. **Các chương trình giảng dạy do anh Đức đã soạn**, gồm nội dung, cấu trúc buổi học, bài tập, rubric, sản phẩm đầu ra và khung năng lực.
2. **Các trường đã đồng ý hoặc sẵn sàng phối hợp triển khai**, vì vậy không bắt đầu từ bước tìm trường đầu tiên.

Dự án không được mặc định sở hữu hoặc kế thừa:

- nền tảng phần mềm cũ;
- source code cũ;
- dữ liệu, tài khoản hoặc người dùng cũ;
- workflow, SOP hoặc quy trình từ dự án khác;
- CRM, LMS, hệ thống lịch, thanh toán, RAG, MCP hay AI agent cũ.

SOPai, Arkon và henlich.vn không nằm trong kế hoạch mới.

## 2. Chương trình là tài sản lõi duy nhất được kế thừa

Các chương trình có thể được triển khai ngay hoặc hoàn thiện nhanh:

- Ứng dụng AI theo khung năng lực cho sinh viên không chuyên;
- Phát triển ứng dụng và tự động hóa với AI – Vibe Coding;
- AI cho giáo viên, giảng viên và cán bộ quản lý;
- AI+ / AIx theo ngành, môn học và chuẩn đầu ra;
- AI cho doanh nghiệp;
- đào tạo giáo viên triển khai STEAM;
- các khóa thực hành có sản phẩm đầu ra.

Mọi chương trình mới ngoài năng lực lõi được sản xuất bằng AI kết hợp chuyên gia thuê ngoài và phải qua kiểm duyệt chuyên môn.

## 3. Nền tảng là sản phẩm greenfield

Nền tảng phải được xây mới cho dự án, không kế thừa kiến trúc hoặc codebase cũ.

Nguyên tắc:

- **Greenfield:** thiết kế mới từ nhu cầu các lớp đang triển khai.
- **Modular:** mỗi phân hệ có thể thay thế hoặc nâng cấp độc lập.
- **API-first:** sẵn sàng kết nối đối tác ngoài.
- **Data ownership:** dự án kiểm soát dữ liệu và quyền truy cập theo thỏa thuận với trường/người học.
- **Human-in-the-loop:** AI hỗ trợ, con người chịu trách nhiệm cuối cùng.
- **Vendor independence:** không để một đối tác ngoài trở thành điểm lỗi duy nhất.

Phạm vi lõi giai đoạn đầu:

- trường, chương trình, cohort và người học;
- học liệu, bài tập, nhiệm vụ và nộp sản phẩm;
- rubric, chấm điểm và hồ sơ minh chứng;
- điểm danh, tiến độ và báo cáo;
- phân quyền và nhật ký hoạt động;
- API/MCP gateway cho đối tác ngoài.

Không chờ nền tảng hoàn chỉnh mới mở lớp. Có thể dùng quy trình thủ công hoặc SaaS tạm thời trong giai đoạn chuyển tiếp, nhưng không được gọi các công cụ tạm thời là tài sản kế thừa.

## 4. Grapuco là đối tác công nghệ bên ngoài

Grapuco không thuộc dự án và không phải tài sản nội bộ.

Vai trò dự kiến:

### 4.1. Trong chương trình Vibe Coding

- kết nối repository của người học;
- trực quan hóa module, dependency, call graph và luồng xử lý;
- hỗ trợ hiểu codebase do AI tạo;
- hỗ trợ spec-first và phân tích tác động thay đổi;
- hỗ trợ trình bày kiến trúc sản phẩm cuối khóa;
- có thể hỗ trợ giảng viên kiểm tra cấu trúc dự án.

### 4.2. Trong phát triển nền tảng

- lập bản đồ codebase mới;
- hỗ trợ onboarding developer;
- cung cấp context có cấu trúc cho AI coding tools;
- hỗ trợ đánh giá dependency và phạm vi ảnh hưởng khi sửa code.

### 4.3. Nguyên tắc hợp tác

- tích hợp qua API, MCP hoặc hình thức được hai bên thống nhất;
- có hợp đồng, giá, SLA, hỗ trợ và trách nhiệm dữ liệu riêng;
- không tự động gửi dữ liệu cá nhân của người học;
- chỉ chia sẻ repository hoặc project data được cho phép;
- nền tảng vẫn phải hoạt động khi Grapuco chưa tích hợp hoặc tạm gián đoạn;
- quyền sở hữu code và sản phẩm của người học phải được quy định rõ.

Grapuco chỉ được đưa vào doanh thu, chi phí hoặc cam kết sản phẩm sau khi chốt thỏa thuận thương mại.

## 5. Triển khai nhanh vì trường đã sẵn sàng

Kế hoạch phải bắt đầu từ:

- danh sách trường đã đồng ý;
- số sinh viên từng trường;
- chương trình được chọn;
- lịch khai giảng;
- cơ chế thu học phí hoặc hợp đồng;
- đầu mối phối hợp tại trường;
- đội ngũ giảng dạy và hỗ trợ.

Không được quay lại giả định rằng phải mất nhiều tháng kiểm chứng nhu cầu thị trường.

Điều cần kiểm chứng trong tháng đầu là:

- công suất vận hành;
- chi phí thực tế;
- tỷ lệ hoàn thành;
- chất lượng sản phẩm;
- tải hỗ trợ;
- năng lực nền tảng mới;
- hiệu quả tích hợp Grapuco nếu được sử dụng.

## 6. Bốn dòng thương mại chính

### 6.1. Đào tạo giảng viên

- Khung giá hiện hành: **20–50 triệu đồng/khóa**.
- Có thể mở rộng sang AI+ Curriculum Sprint, AI Pedagogy Lab, trợ lý môn học và dữ liệu năng lực.

### 6.2. Đào tạo doanh nghiệp

- Khung giá hiện hành: **20–100 triệu đồng/khóa**.
- Có thể kết hợp khảo sát, workflow, agent, tư vấn và triển khai.

### 6.3. Sinh viên online

- Mục tiêu tháng đầu: **200–300 sinh viên thanh toán và bắt đầu học**.
- Tập trung vào hai chương trình đã soạn.
- Không dùng học phí gộp như lợi nhuận.

### 6.4. Cấp quyền chương trình

- cấp quyền nội dung;
- nội dung + nền tảng;
- triển khai đầy đủ có đào tạo giảng viên nguồn và hỗ trợ.

Phải tính chi phí cập nhật, onboarding, hỗ trợ, nền tảng, kỹ thuật và kiểm soát phạm vi sử dụng.

## 7. KPI B2B phải tách trạng thái

Mỗi khóa phải theo dõi:

1. Đơn vị đã đồng ý.
2. Phạm vi đã chốt.
3. Hợp đồng đã ký.
4. Tiền đã thu.
5. Khóa đã khai giảng.
6. Khóa đã hoàn thành.
7. Sản phẩm đã bàn giao.
8. Công nợ.
9. Gia hạn hoặc triển khai tiếp.

Giá trị hợp đồng, doanh thu ghi nhận và tiền đã thu là ba chỉ tiêu khác nhau.

## 8. Nguyên tắc dữ liệu và pháp lý

- Chỉ thu dữ liệu phục vụ đào tạo, đánh giá và báo cáo.
- Minh bạch với trường và người học.
- Phân quyền theo vai trò.
- Không chia sẻ dữ liệu cá nhân với Grapuco hoặc đối tác khác nếu chưa được cho phép.
- Dữ liệu code và sản phẩm phải có chính sách quyền sở hữu rõ ràng.
- Nền tảng không tự nhận hoạt động việc làm hoặc việc làm quốc tế nếu chưa có giấy phép phù hợp.

## 9. Kết luận dành cho các hệ thống AI

Khi lập kế hoạch phải mặc định rằng:

- trường đã có và cần triển khai nhanh;
- chương trình đã soạn là tài sản duy nhất được kế thừa;
- nền tảng, dữ liệu, workflow và hạ tầng đều xây mới hoặc mua mới;
- SOPai, Arkon và henlich.vn không được đưa vào kế hoạch;
- Grapuco là đối tác ngoài, tích hợp có điều kiện và không phải dependency bắt buộc;
- lớp học không chờ nền tảng hoàn chỉnh;
- mọi số chưa xác nhận phải ghi `[giả định]`.
