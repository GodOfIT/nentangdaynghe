# AGENTS.md — Bối cảnh chung cho các trợ lý AI làm việc trên repo này

> **Đọc file này trước tiên, trước mọi file khác trong repo.**
>
> File này là nguồn sự thật điều hành. Khi mâu thuẫn với tài liệu khác, ưu tiên file này cho đến khi tài liệu kia được sửa.

Cập nhật lần cuối: 2026-07-30  
Người chủ trì: Bùi Minh Đức

---

## 1. Quyết định điều hành mới nhất

### 1.1. Tài sản duy nhất được kế thừa

Dự án **chỉ kế thừa các chương trình giảng dạy do anh Đức đã soạn**.

Các thành phần được phép kế thừa gồm:

- đề cương và nội dung khóa học;
- cấu trúc buổi học;
- slide, video, bài đọc và học liệu;
- bài tập, rubric, ngân hàng câu hỏi;
- sản phẩm đầu ra và tiêu chí đánh giá;
- khung năng lực và phương pháp giảng dạy đã được chốt.

### 1.2. Những thứ không được mặc định kế thừa

Không được coi bất kỳ thành phần nào sau đây là tài sản sẵn có của dự án nếu chưa được xây hoặc ký hợp đồng riêng:

- source code hoặc nền tảng phần mềm cũ;
- cơ sở dữ liệu, tài khoản và dữ liệu người dùng cũ;
- hạ tầng cloud, domain, hệ thống thanh toán hoặc hệ thống nhắn tin;
- workflow, SOP hoặc quy trình vận hành từ dự án khác;
- kho tri thức, RAG, MCP hoặc AI agent từ hệ thống khác;
- lịch, booking, CRM, LMS hoặc dashboard cũ;
- thương hiệu, giấy phép, hợp đồng hoặc quyền truy cập của đơn vị khác.

**SOPai, Arkon và henlich.vn không thuộc phạm vi kế thừa và không được đưa vào kiến trúc hoặc kế hoạch của dự án này.**

### 1.3. Grapuco là đối tác bên ngoài

Grapuco được xem là **đối tác công nghệ độc lập**, không phải tài sản nội bộ và không phải phân hệ thuộc quyền sở hữu mặc định của nền tảng.

Hướng liên kết dự kiến:

- tích hợp vào các chương trình Vibe Coding để hỗ trợ người học hiểu cấu trúc codebase;
- trực quan hóa module, dependency, call graph và luồng xử lý;
- hỗ trợ thiết kế theo hướng spec-first và phân tích tác động khi sửa code;
- hỗ trợ AI coding tools đọc và làm việc với codebase có cấu trúc;
- có thể dùng trong quy trình kiểm tra sản phẩm hoặc hướng dẫn dự án cuối khóa.

Nguyên tắc bắt buộc:

- tích hợp qua API, MCP hoặc cơ chế được hai bên thỏa thuận;
- có hợp đồng, phạm vi dịch vụ, giá, SLA và trách nhiệm hỗ trợ riêng;
- không mặc định chia sẻ dữ liệu cá nhân của người học;
- chỉ gửi code hoặc dữ liệu dự án được người dùng và đơn vị cho phép;
- nền tảng phải vận hành được khi Grapuco tạm ngừng hoặc chưa được tích hợp;
- quyền sở hữu code, học liệu và dữ liệu phải được quy định rõ trong hợp đồng.

### 1.4. Trạng thái thị trường và triển khai

- Đã có các trường đại học, cao đẳng và cơ sở giáo dục sẵn sàng phối hợp triển khai.
- Không lập kế hoạch như một dự án chưa có khách hàng hoặc phải tìm product–market fit từ đầu.
- Nhiệm vụ là kích hoạt các trường đã đồng ý, tổ chức lớp, thu học phí/doanh thu và xây nền tảng mới song song với vận hành.
- Không chờ nền tảng hoàn chỉnh mới khai giảng.

### 1.5. KPI và giá tháng đầu

- Bắt đầu đào tạo từ tuần thứ hai.
- 2 khóa trực tiếp cho giảng viên.
- 2 khóa trực tiếp cho doanh nghiệp.
- 200–300 sinh viên thanh toán và bắt đầu học online.
- Ít nhất 1 gói chương trình sinh viên được bán hoặc triển khai theo thỏa thuận với trường.
- Khóa giảng viên: 20–50 triệu đồng/khóa.
- Khóa doanh nghiệp: 20–100 triệu đồng/khóa.

`ke-hoach/muc-tieu-thang-1.md` là nguồn ưu tiên cho KPI tháng đầu.

---

## 2. Bối cảnh sản phẩm

### 2.1. Các chương trình đã có

Hai chương trình sinh viên cốt lõi:

1. **Ứng dụng AI theo khung năng lực** — khoảng 12–15 buổi, dành cho sinh viên không chuyên.
2. **Phát triển ứng dụng và tự động hóa với AI – Vibe Coding** — khoảng 12–15 buổi, tạo website, ứng dụng, workflow hoặc AI agent có thể chạy và trình diễn.

Các nhóm chương trình khác đã có khung nội dung:

- AI cho giáo viên và giảng viên;
- AI+ / AIx trong chương trình đào tạo;
- AI cho doanh nghiệp;
- đào tạo giáo viên triển khai STEAM;
- các khóa thực hành có sản phẩm đầu ra.

### 2.2. Nền tảng mới phải được xây độc lập

Nền tảng là sản phẩm mới, được thiết kế và phát triển cho dự án này.

Phạm vi lõi giai đoạn đầu:

- quản lý đơn vị, chương trình, cohort và người học;
- học liệu, nhiệm vụ, bài tập và nộp sản phẩm;
- rubric, chấm điểm và hồ sơ minh chứng;
- điểm danh, tiến độ và báo cáo;
- phân quyền quản trị, giảng viên, điều phối viên và người học;
- hỗ trợ tích hợp dịch vụ bên ngoài qua API/MCP;
- nhật ký hoạt động, dữ liệu và kiểm soát truy cập.

Không được biến danh sách tính năng thành lý do trì hoãn lớp học. Giai đoạn đầu có thể dùng quy trình thủ công hoặc công cụ SaaS tạm thời, nhưng hệ thống đích vẫn là nền tảng mới do dự án kiểm soát.

### 2.3. Nguyên tắc kiến trúc

- Greenfield: xây mới, không phụ thuộc codebase cũ.
- Modular: các phân hệ có thể phát triển và thay thế độc lập.
- API-first: sẵn sàng kết nối Grapuco và các đối tác khác.
- Data ownership: dữ liệu học tập thuộc đơn vị vận hành và được quản lý theo thỏa thuận với trường/người học.
- Human-in-the-loop: AI hỗ trợ, con người chịu trách nhiệm cuối cùng với nội dung, đánh giá và quyết định quan trọng.
- Vendor independence: không để một đối tác ngoài trở thành điểm lỗi duy nhất.

---

## 3. Mô hình thương mại

Bốn dòng doanh thu chính:

1. Đào tạo trực tiếp cho giảng viên và cán bộ giáo dục.
2. Đào tạo, tư vấn và triển khai AI cho doanh nghiệp.
3. Tự vận hành lớp online dành cho sinh viên.
4. Cấp quyền sử dụng chương trình cho trường hoặc đối tác.

Nguồn thu bổ sung:

- phí sử dụng nền tảng;
- phí tùy chỉnh chương trình;
- đào tạo giảng viên nguồn;
- báo cáo và đánh giá năng lực;
- phí triển khai/tích hợp đối tác ngoài;
- gói Vibe Coding có Grapuco khi thỏa thuận thương mại hoàn tất.

Không được nhầm:

- học phí gộp với doanh thu dự án;
- giá trị hợp đồng với tiền đã thu;
- doanh thu với đóng góp;
- hợp đồng đã ký với khóa đã giao xong.

---

## 4. Vai trò của Grapuco trong mô hình sản phẩm

### 4.1. Trong chương trình Vibe Coding

Grapuco có thể cung cấp lớp công cụ bổ sung để người học:

- nhập hoặc kết nối repository;
- xem bản đồ cấu trúc codebase;
- hiểu dependency và luồng gọi hàm;
- xác định khu vực cần sửa khi bổ sung tính năng;
- lập đặc tả trước khi yêu cầu AI coding;
- kiểm tra mức độ ảnh hưởng của thay đổi;
- trình bày kiến trúc sản phẩm cuối khóa.

### 4.2. Trong phát triển nền tảng

Đội kỹ thuật có thể sử dụng Grapuco như công cụ bên ngoài để:

- lập bản đồ codebase mới;
- hỗ trợ onboarding developer/chuyên gia;
- cung cấp context cho AI coding tools;
- rà soát dependency và tác động thay đổi.

Grapuco không tự động có quyền truy cập repository. Mọi quyền phải được cấp theo nguyên tắc tối thiểu và có thể thu hồi.

### 4.3. Ranh giới thương mại và dữ liệu

Cần chốt bằng văn bản:

- hình thức license, API, bundle hay referral;
- giá theo người học, cohort, trường hoặc lượt sử dụng;
- hỗ trợ kỹ thuật và SLA;
- nơi lưu trữ và thời hạn lưu trữ code;
- quyền sử dụng dữ liệu và metadata;
- trách nhiệm khi dịch vụ gián đoạn;
- quyền sở hữu sản phẩm do sinh viên tạo ra.

Cho đến khi các điều khoản trên được ký, Grapuco được ghi là **đối tác dự kiến**, không được cộng doanh thu hoặc chi phí cụ thể vào kế hoạch.

---

## 5. Nguyên tắc lập kế hoạch

1. Bắt đầu từ các trường đã sẵn sàng.
2. Dùng chương trình đã soạn để khai giảng nhanh.
3. Nền tảng mới được xây song song, không kế thừa hệ thống cũ.
4. Ưu tiên tính năng phục vụ trực tiếp các lớp đang chạy.
5. Tích hợp đối tác ngoài theo hợp đồng và giao diện rõ ràng.
6. Mọi số chưa có căn cứ ghi `[giả định]`.
7. Mọi số thực tế phải ghi nguồn và ngày.
8. Không tự tạo cam kết doanh thu, công suất hoặc thời hạn ngoài quyết định của anh Đức.

---

## 6. KPI B2B phải tách trạng thái

Mỗi khóa phải theo dõi:

1. Đơn vị đã đồng ý triển khai.
2. Phạm vi đã chốt.
3. Hợp đồng đã ký.
4. Tiền ứng trước/tiền đã thu.
5. Khóa đã khai giảng.
6. Khóa đã hoàn thành.
7. Sản phẩm đã bàn giao.
8. Công nợ.
9. Cơ hội gia hạn hoặc triển khai tiếp.

Giá trị hợp đồng, doanh thu ghi nhận và tiền đã thu phải báo cáo riêng.

---

## 7. Pháp lý và dữ liệu

Nền tảng giữ vai trò:

> Công nghệ + đào tạo + đánh giá năng lực + điều phối dữ liệu.

- Không tự nhận cung ứng việc làm hoặc đưa người lao động đi làm việc ở nước ngoài khi chưa có giấy phép.
- Chỉ thu dữ liệu cần thiết cho đào tạo, đánh giá và báo cáo.
- Minh bạch mục đích sử dụng dữ liệu.
- Không chia sẻ dữ liệu cá nhân với Grapuco hoặc đối tác khác nếu chưa có căn cứ và sự cho phép phù hợp.
- Dữ liệu code hoặc sản phẩm dự án phải có chính sách quyền sở hữu và quyền xử lý rõ ràng.

---

## 8. Các quyết định còn cần anh Đức chốt

- Danh sách trường, số lượng sinh viên và ngày khai giảng từng đợt.
- Cơ chế thu học phí và chia sẻ với từng trường.
- Pháp nhân ký hợp đồng và xuất hóa đơn.
- Quy mô đội xây nền tảng mới.
- Ngân sách phát triển nền tảng và vận hành tháng đầu.
- Mức giá và phạm vi cấp quyền chương trình.
- Phạm vi hợp tác chính thức với Grapuco.
- Grapuco được dùng bắt buộc hay tùy chọn trong khóa Vibe Coding.
- Cơ chế thanh toán giữa dự án, trường, người học và Grapuco.

Không AI nào tự điền các quyết định này.

---

## 9. Quy ước phối hợp AI

- Claude và ChatGPT/Codex đều phải đọc file này trước.
- Không AI nào quyết thay anh Đức.
- Không sửa quyết định đã chốt thành giả định mới.
- Khi bất đồng, nêu phương án, đánh đổi và dữ liệu cần thêm.
- Tài liệu trao đổi cũ được giữ để truy vết, nhưng không còn là nguồn điều hành nếu mâu thuẫn với file này.
- Sau mỗi vòng sửa lớn, phải báo rõ file đã đổi, commit và việc còn cần quyết.
