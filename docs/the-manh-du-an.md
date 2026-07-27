# Thế mạnh và nguyên tắc lập kế hoạch dự án

> **Tài liệu điều hành.** Đọc cùng `AGENTS.md`, `ke-hoach/muc-tieu-thang-1.md` và `ke-hoach/unit-economics.md`.
>
> Khi tài liệu này mâu thuẫn với quyết định mới hơn trong `AGENTS.md`, ưu tiên `AGENTS.md`.

Tài liệu này giúp các nhóm triển khai và các hệ thống AI hiểu đúng bối cảnh của dự án khi xây dựng kế hoạch kinh doanh, sản phẩm, doanh thu và vận hành.

## 1. Dự án không bắt đầu từ con số 0

Dự án đã có năng lực xây dựng và triển khai các chương trình về:

- AI cho giáo viên, giảng viên và cán bộ quản lý.
- AI cho học sinh, sinh viên và người lao động.
- Vibe coding, xây website, ứng dụng, workflow và AI agent.
- Ứng dụng AI trong giảng dạy, nghiên cứu, sản xuất học liệu và quản lý công việc.
- Thiết kế chương trình đào tạo theo hướng có sản phẩm đầu ra.
- Đào tạo năng lực giáo viên triển khai STEAM và hướng dẫn học sinh.
- Phát triển nền tảng, công cụ và hệ thống hỗ trợ đào tạo.

Dự án có các tài sản kỹ thuật cần ưu tiên tái sử dụng:

- **SOPai:** điều phối workflow và vòng đời cohort.
- **Arkon:** kho tri thức, RAG, MCP và trợ lý AI.
- **henlich.vn:** lịch, đăng ký, booking và landing page.

Không đề xuất xây lại từ đầu các chức năng đã có trước khi đánh giá mức độ hoàn thiện và khả năng tái sử dụng.

Các khóa học có thể bắt đầu tuyển sinh trong tuần đầu và triển khai từ tuần thứ hai. Tháng đầu không chỉ dành cho nghiên cứu hoặc chuẩn bị.

## 2. Nguồn lực thật và trần vận hành

Đội core hiện được lập kế hoạch theo quy mô **5 người**, kết hợp mạng lưới chuyên gia thuê ngoài theo từng chương trình.

Khi lập kế hoạch phải kiểm tra đồng thời:

- Số khóa có thể bán.
- Số khóa có thể giao đúng chất lượng.
- Năng lực đối soát thanh toán.
- Năng lực hỗ trợ người học.
- Năng lực thu và chấm sản phẩm.
- Năng lực xây nền tảng, nội dung và bán hàng song song.

Không dùng tuyển thêm người làm giải pháp mặc định. Thứ tự xử lý là:

1. Tái sử dụng tài sản đã có.
2. Tự động hóa bằng AI.
3. Cắt hoặc chuẩn hóa phạm vi.
4. Thuê chuyên gia theo cohort hoặc hợp đồng cụ thể.

## 3. AI-first là kiến trúc mục tiêu, hybrid là phương án triển khai an toàn

Với năng lực và tài sản hiện có, tự động hóa không phải bước tối ưu hóa về sau mà là kiến trúc vận hành mục tiêu ngay từ đầu.

Cấu hình AI-first hướng tới:

- đăng ký và mã học viên tự động;
- thanh toán định danh và đối soát tự động;
- trợ lý AI trả lời tuyến đầu trên kho tri thức khóa học;
- nhắc lịch, điểm danh và nhắc nộp bài bằng workflow;
- LLM chấm sơ bộ theo rubric, người duyệt vòng cuối;
- dashboard tải hỗ trợ, ngoại lệ và chất lượng.

Tuy nhiên không được coi các năng lực trên đã hoạt động nếu chưa audit SOPai, Arkon và henlich.vn.

Do đó phải có hai cấu hình vận hành:

1. **AI-first:** dùng khi các chức năng đã vượt qua kiểm thử tải và chất lượng.
2. **Hybrid dự phòng:** AI gợi ý, người vận hành duyệt và xử lý ngoại lệ.

Không tăng từ 200–300 lên 500–1.000 người chỉ dựa trên bảng giả định. Phải đo ticket, số giờ xử lý, tỷ lệ chuyển người thật, chi phí API và thời gian duyệt bài.

## 4. Mạng lưới là kênh phân phối, B2B là mô hình thương mại

Dự án có lợi thế làm việc với các đầu mối có khả năng tập hợp nhiều trường, khoa, cơ sở đào tạo hoặc nhóm người học.

Hai khái niệm không loại trừ nhau:

- **Triển khai theo mạng lưới:** cách tiếp cận và phân phối.
- **Bán B2B:** cách ký hợp đồng và ghi nhận doanh thu với từng đơn vị hoặc đối tác.

Khi lập kế hoạch cần ưu tiên:

- Làm việc với đầu mối có khả năng kích hoạt nhiều đơn vị.
- Triển khai theo cụm trường, hệ thống trường, địa phương hoặc nhóm đối tác khi phù hợp.
- Chuyển cơ hội từ mạng lưới thành hợp đồng, lịch triển khai và tiền thực thu cụ thể.
- Không coi một cam kết miệng từ đầu mối là doanh thu hoặc năng lực triển khai đã chắc chắn.

KPI mạng lưới phải đi cùng KPI thương mại:

- Đầu mối đang hoạt động.
- Đơn vị được kích hoạt.
- Đề xuất đã gửi.
- Hợp đồng đã ký.
- Tiền đã thu.
- Khóa đã khai giảng và hoàn thành.

## 5. Bốn dòng sản phẩm có mô hình thương mại khác nhau

Không dùng một mô hình giá và một công thức doanh thu cho tất cả đối tượng.

### 5.1. Đào tạo AI cho giảng viên và cán bộ giáo dục

- Chủ yếu đào tạo trực tiếp tại trường hoặc theo hình thức kết hợp.
- Nội dung điều chỉnh theo chuyên ngành, môn học và yêu cầu của đơn vị.
- Có thực hành, sản phẩm đầu ra, đánh giá và hỗ trợ sau khóa học.
- Có thể mở rộng sang trợ lý môn học, skill, agent, kho tri thức hoặc quy trình sản xuất học liệu.
- Khung giá hiện hành: **20–50 triệu đồng/khóa**.

Cách tính:

> Giá trị hợp đồng = phí thiết kế/tùy chỉnh + phí đào tạo + phí sản phẩm hoặc hỗ trợ bổ sung nếu có

### 5.2. Đào tạo AI cho doanh nghiệp

- Bám vào phòng ban, dữ liệu, quy trình và bài toán thật.
- Có thể kết hợp đào tạo, tư vấn và triển khai.
- Giá trị không chỉ nằm ở giờ giảng mà còn ở khảo sát, thiết kế tình huống, workflow, agent, tài liệu và hỗ trợ áp dụng.
- Khung giá hiện hành: **20–100 triệu đồng/khóa**.

Cách tính:

> Giá trị hợp đồng = phí khảo sát và thiết kế + phí đào tạo + phí triển khai hoặc hỗ trợ sau đào tạo

### 5.3. Sinh viên — bán quyền sử dụng khóa học

Gói có thể gồm:

- Chương trình và đề cương.
- Video, slide, học liệu và bài tập.
- Rubric và ngân hàng câu hỏi.
- Hướng dẫn giảng viên hoặc điều phối viên.
- Quyền sử dụng theo thời hạn, phạm vi và số người học.
- Tùy chọn white-label, nền tảng, báo cáo và đào tạo giảng viên nguồn.

Cách tính:

> Doanh thu = phí quyền sử dụng + phí tùy chỉnh + phí nền tảng, onboarding hoặc hỗ trợ nếu có

Ưu tiên cấp quyền có thời hạn và giới hạn số người học. Không coi đây là dòng có biên gần như thuần: vẫn phải tính chi phí cập nhật, onboarding, hỗ trợ, kỹ thuật, báo cáo và kiểm soát phạm vi sử dụng.

### 5.4. Sinh viên — dự án tự vận hành lớp online

Cách tính:

> Tổng học phí = số người đã thanh toán × học phí thực thu bình quân

> Đóng góp = học phí gộp - phần đối tác - phí thanh toán - chi phí trực tiếp

Chi phí trực tiếp phải được tính theo hai cấu hình AI-first và hybrid. Không trình bày học phí sau chia sẻ như lợi nhuận.

## 6. Mục tiêu tháng đầu phải thực tế

KPI tháng đầu hiện hành:

- **2 khóa trực tiếp cho giảng viên.**
- **2 khóa trực tiếp cho doanh nghiệp.**
- **200–300 sinh viên thanh toán và bắt đầu học online.**
- **Ít nhất 1 gói khóa sinh viên được bán hoặc thử nghiệm với điều kiện thương mại rõ ràng.**
- Bắt đầu đào tạo từ tuần thứ hai.

Mục tiêu 200–300 dùng để kiểm chứng cả mô hình AI-first và phương án hybrid. Chỉ tăng quy mô sau khi kiểm chứng:

- thanh toán và đối soát;
- tỷ lệ tham gia và hoàn thành;
- số ticket và tỷ lệ ngoại lệ;
- chi phí API;
- năng lực chấm sản phẩm;
- unit economics và chất lượng đầu ra.

## 7. KPI B2B phải tách theo trạng thái

Mỗi khóa giảng viên và doanh nghiệp phải theo dõi riêng:

1. Cơ hội đủ điều kiện.
2. Đề xuất đã gửi.
3. Hợp đồng đã ký.
4. Tiền ứng trước hoặc tiền đã thu.
5. Khóa đã khai giảng.
6. Khóa đã hoàn thành.
7. Sản phẩm đã bàn giao.
8. Công nợ còn lại.
9. Cơ hội gia hạn hoặc triển khai tiếp.

Giá trị hợp đồng, doanh thu ghi nhận và dòng tiền là ba chỉ tiêu khác nhau.

## 8. Hai mức tỷ lệ hoàn thành trước khi có dữ liệu thật

- **Kịch bản ngân sách:** 50–60% người bắt đầu học hoàn thành.
- **Mục tiêu vận hành nội bộ:** khoảng 70% khi có thanh toán thật, điểm danh, nhắc lịch và điều phối.

Không dùng mục tiêu 70% làm cam kết đối ngoại trước khi có dữ liệu thật.

## 9. Có thể bỏ qua workshop bán hàng

Workshop chỉ là công cụ tạo nhu cầu, không phải bước bắt buộc. Nếu đã có đầu mối hoặc đơn vị sẵn sàng phối hợp thì nên:

1. Chốt chương trình, mô hình thương mại và lịch học trong tuần đầu.
2. Mở đăng ký hoặc bàn giao khóa học ngay.
3. Bắt đầu đào tạo từ tuần thứ hai.
4. Thu dữ liệu, sản phẩm và phản hồi trong tháng đầu.

## 10. STEAM năm đầu là đào tạo năng lực giáo viên, không phải thư viện phần cứng lớn

Sản phẩm STEAM năm đầu được hiểu là:

- đào tạo giáo viên dạy STEAM;
- xây học liệu và hướng dẫn cho 1–2 môn thí điểm;
- hướng dẫn giáo viên tổ chức hoạt động cho học sinh;
- hỗ trợ sau đào tạo;
- có thể kèm công cụ số hoặc trợ lý AI nếu phạm vi được chốt.

Nó có thể chạy song song như một nhánh của B2B giáo dục, không nhất thiết là một trục tổ chức hoàn toàn mới.

Không tự xây thư viện 40–60 khóa phần cứng trong năm đầu.

Trước khi đặt lịch hoặc cam kết mốc tháng 9 phải chốt:

- ai trả tiền;
- môn thí điểm;
- số trường và giáo viên;
- mức đầu ra cần sẵn sàng;
- hướng dẫn học sinh là tài liệu hay phần mềm;
- chuyên gia nghiệm thu;
- điều phối viên tại chỗ cho nhóm vùng khó.

Nhóm giáo viên vùng khó phải có unit economics riêng. AI hỗ trợ người điều phối nhưng không được mặc định thay hoàn toàn người tại chỗ.

## 11. Nguyên tắc phát triển nền tảng

Thứ tự ưu tiên được xác định sau audit tài sản trong 2–3 ngày.

Nếu dự án tự thu hàng trăm giao dịch, thứ tự mặc định:

1. đăng ký, mã học viên và đối soát thanh toán;
2. FAQ/RAG tuyến đầu ở chế độ hybrid;
3. nhắc lịch, điểm danh và nộp bài;
4. chấm sơ bộ theo rubric, người duyệt vòng cuối;
5. tính năng STEAM sau khi chốt tài liệu hay phần mềm.

Nếu đối tác thu tiền và đối soát, ưu tiên có thể thay đổi.

Có thể mua hoặc tích hợp LMS cho phần hàng hóa nếu nhanh và rẻ hơn. Chỉ tự xây phần tạo khác biệt hoặc phần cần kết nối sâu với tài sản nội bộ.

## 12. Nguyên tắc bảo mật bối cảnh chiến lược

Một số lợi thế về quan hệ, cơ chế phối hợp và điều kiện triển khai thuộc bối cảnh nội bộ. Khi viết tài liệu công khai:

- Không công bố thông tin nội bộ chưa được cho phép.
- Chỉ mô tả ở mức có khả năng phối hợp theo mạng lưới và triển khai quy mô phù hợp.
- Không sử dụng tên cơ quan, cá nhân hoặc cam kết hỗ trợ nếu chưa được phép công bố.

## 13. Kết luận dành cho các hệ thống AI

Khi lập kế hoạch cho dự án này phải mặc định rằng:

- Có thể bắt đầu đào tạo từ tuần thứ hai.
- Đội core là 5 người và phải kiểm tra trần vận hành.
- AI-first là kiến trúc mục tiêu; hybrid là phương án triển khai an toàn.
- Không bắt buộc tổ chức workshop trước khi mở lớp.
- Đào tạo giảng viên và doanh nghiệp là sản phẩm B2B trực tiếp, tùy chỉnh và có giá trị cao.
- Sinh viên có hai mô hình: cấp quyền sử dụng khóa học hoặc dự án tự vận hành lớp online.
- Mạng lưới là kênh phân phối; hợp đồng B2B là mô hình thương mại.
- Không dùng chung một công thức doanh thu cho tất cả đối tượng.
- Tháng đầu chỉ đặt mục tiêu 200–300 sinh viên online.
- KPI B2B phải tách ký hợp đồng, tiền đã thu, khóa đã giao và công nợ.
- STEAM năm đầu là pilot đào tạo năng lực giáo viên có phạm vi rõ, không phải thư viện khóa phần cứng lớn.
- Mọi giả định về chi phí API và tải điều phối phải được đo trước khi tăng quy mô.
