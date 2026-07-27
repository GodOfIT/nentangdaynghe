# Unit economics — kinh tế đơn vị theo từng dòng sản phẩm

> Tài liệu này là khung tính, không phải bảng giá hay dự báo lợi nhuận đã được xác nhận.
>
> Mọi con số chưa có hóa đơn, hợp đồng hoặc dữ liệu cohort thật đều ghi `[giả định]`.
>
> Đọc cùng `AGENTS.md`, `ke-hoach/muc-tieu-thang-1.md` và `ke-hoach/chi-phi-va-dong-tien.md`.

Cập nhật: 2026-07-27

## 1. Khái niệm dùng thống nhất

| Thuật ngữ | Định nghĩa |
|---|---|
| Giá trị hợp đồng | Tổng giá trị đã ký, chưa nói tiền đã thu hay đã ghi nhận |
| Tiền đã thu | Tiền thực tế đã vào tài khoản |
| Học phí gộp | Tổng số tiền người học trả |
| Phần dự án sau chia sẻ | Học phí gộp trừ phần đối tác và hoàn trả |
| Doanh thu thuần | Phần dự án sau chia sẻ trừ phí thanh toán |
| Chi phí trực tiếp | Chi phí phát sinh để giao một cohort/hợp đồng |
| Đóng góp | Doanh thu thuần trừ chi phí trực tiếp |
| Chi phí cố định | Chi phí tồn tại dù không mở cohort hoặc chưa ký hợp đồng |
| Dòng tiền | Tiền vào trừ tiền ra trong kỳ, phụ thuộc thời điểm thu và chi |

Không sử dụng “doanh thu” một mình nếu có nguy cơ nhầm giữa giá trị hợp đồng, học phí gộp, tiền đã thu và đóng góp.

## 2. Nguyên tắc chung

1. Tách từng dòng sản phẩm:
   - sinh viên online;
   - cấp quyền khóa học;
   - đào tạo giảng viên;
   - đào tạo doanh nghiệp;
   - vibe coding/thực hành;
   - đào tạo năng lực giáo viên STEAM.
2. AI-first là kiến trúc mục tiêu của dòng sinh viên; hybrid là phương án dự phòng.
3. Không áp một tỷ lệ chi phí trực tiếp cố định cho mọi hợp đồng B2B.
4. Không dùng bảng giả định để suy ngược chỉ tiêu năm.
5. Mỗi hợp đồng/cohort đầu tiên phải có bảng dự toán và bảng thực tế riêng.
6. Chỉ tăng quy mô sau khi đo được tải hỗ trợ, đối soát, chấm bài, API cost và chất lượng đầu ra.

## 3. Sinh viên online — AI Fluency

### 3.1. Công thức

> Học phí gộp = số người thanh toán × học phí thực thu bình quân

> Doanh thu thuần = học phí gộp - phần đối tác - hoàn trả - phí thanh toán

> Đóng góp = doanh thu thuần - giảng viên - điều phối/trợ giảng - LLM API - nền tảng - hỗ trợ - đối soát - chi phí trực tiếp khác

### 3.2. Hai cấu hình vận hành

#### A. AI-first `[giả định cần kiểm thử]`

| Khoản | Giả định |
|---|---:|
| Học phí | 220.000 đồng/người |
| Chia đối tác | 40% học phí gộp |
| Phí thanh toán/đối soát | 0,8% học phí gộp |
| Giảng viên | 10 triệu đồng/cohort |
| Điều phối viên | 1 người, 4 triệu đồng/cohort |
| LLM API | 14.000 đồng/người/khóa |
| Nền tảng và lưu trữ | 6.000 đồng/người |

Cấu hình này giả định:

- đăng ký và mã học viên tự động;
- thanh toán định danh tự khớp;
- trợ lý AI tuyến đầu;
- workflow nhắc lịch, điểm danh và nộp bài;
- LLM chấm vòng 1, người duyệt vòng 2.

Chưa được phép coi một điều phối viên đủ cho 1.000 người là dữ liệu thật.

#### B. Hybrid dự phòng `[giả định]`

| Khoản | Giả định |
|---|---:|
| Học phí | 220.000 đồng/người |
| Chia đối tác | 40% học phí gộp |
| Phí thanh toán | 2,5% học phí gộp |
| Giảng viên | 10 triệu đồng/cohort |
| Trợ giảng/điều phối | theo tải thật; kịch bản 200 người dùng 3 người × 4 triệu |
| Nền tảng + hỗ trợ | 20.000 đồng/người |

Hybrid dùng AI gợi ý nhưng người vận hành duyệt và xử lý ngoại lệ.

### 3.3. Kết quả minh họa theo bộ giả định AI-first

Học phí 220.000 đồng, chia đối tác 40%:

| Số học viên | Đóng góp minh họa | Biên trên học phí gộp |
|---:|---:|---:|
| 200 | 8,0 triệu | 18% |
| 300 | 19,1 triệu | 29% |
| 500 | 41,1 triệu | 37% |
| 1.000 | 96,2 triệu | 44% |
| 2.000 | 206,5 triệu | 47% |

Công thức theo bộ giả định:

> Đóng góp = số học viên × 110.240 đồng - 14 triệu đồng

Nếu phần đối tác giảm còn 20% `[giả định]`:

| Số học viên | Đóng góp minh họa | Biên trên học phí gộp |
|---:|---:|---:|
| 200 | 16,8 triệu | 38% |
| 500 | 63,1 triệu | 57% |
| 1.000 | 140,2 triệu | 64% |

Các phép tính trên đúng về số học theo bộ giả định, nhưng chưa phải dự báo vì ba biến chưa được đo:

- LLM API 14.000 đồng/người;
- phí thanh toán 0,8%;
- năng lực một điều phối viên ở từng quy mô.

### 3.4. Kết quả minh họa hybrid 200 người

| Khoản | Số tiền |
|---|---:|
| Học phí gộp | 44,0 triệu |
| Phần đối tác 40% | −17,6 triệu |
| Phí thanh toán 2,5% | −1,1 triệu |
| Doanh thu thuần | 25,3 triệu |
| Giảng viên | −10,0 triệu |
| 3 trợ giảng | −12,0 triệu |
| Nền tảng và hỗ trợ | −4,0 triệu |
| **Đóng góp minh họa** | **−0,7 triệu** |

Khoảng cách giữa AI-first và hybrid cho thấy tự động hóa là biến số cấu trúc, không phải tối ưu nhỏ.

### 3.5. Kiểm thử bắt buộc trước khi tăng quy mô

Đo trên 20–50 bộ câu hỏi/bài làm đại diện:

- token đầu vào và đầu ra mỗi lượt;
- số lượt hỏi trung bình mỗi học viên;
- tỷ lệ câu hỏi cần RAG;
- chi phí embedding/reranking nếu có;
- số lượt chấm bài;
- tỷ lệ phải chuyển người thật;
- thời gian người duyệt;
- tỷ lệ câu trả lời sai hoặc không đủ;
- chi phí API theo người/khóa ở kịch bản thấp–cơ sở–cao.

Đo trong cohort 200–300 người:

- ticket/người;
- số giờ điều phối;
- lỗi thanh toán và tài khoản;
- tỷ lệ ngoại lệ;
- tỷ lệ hoàn thành;
- thời gian chấm và duyệt;
- chi phí thực tế.

### 3.6. Vai trò của khóa phổ cập

Không còn kết luận cứng “khóa phổ cập không phải nguồn thu”.

- Ở 200–300 người: ưu tiên kiểm chứng, dữ liệu và case.
- Từ 500 người: có thể tạo đóng góp rõ nếu AI-first hoạt động đúng.
- Từ 1.000 người: có thể cạnh tranh về tổng đóng góp, nhưng rủi ro chất lượng và ngoại lệ phải được kiểm soát.

Không được mở rộng chỉ vì bảng giả định cho biên cao.

### 3.7. Tỷ lệ hoàn thành

- Kịch bản ngân sách: 50–60%.
- Mục tiêu vận hành nội bộ: khoảng 70%.
- Không dùng 70% làm cam kết đối ngoại trước khi có dữ liệu thật.

## 4. Cấp quyền sử dụng khóa học

### 4.1. Công thức

> Giá trị hợp đồng = phí quyền sử dụng + phí tùy chỉnh + phí nền tảng + phí onboarding/đào tạo giảng viên nguồn + phí hỗ trợ

> Đóng góp = doanh thu thuần - chi phí bán hàng - cập nhật nội dung - onboarding - nền tảng - hỗ trợ - kỹ thuật - thuế/phí trực tiếp

### 4.2. Ba cấu hình cần đo

| Cấu hình | Thành phần chính | Chi phí phải tính |
|---|---|---|
| Nội dung | Học liệu và quyền sử dụng có thời hạn | cập nhật, quản lý IP, hỗ trợ tối thiểu |
| Nội dung + nền tảng | thêm quản lý người học và báo cáo | hosting, kỹ thuật, hỗ trợ, báo cáo |
| Triển khai đầy đủ | tùy chỉnh, onboarding, đào tạo giảng viên nguồn | chuyên gia, vận hành, hỗ trợ, quản trị dự án |

Chưa đặt giá chính thức cho đến khi chốt thời hạn, số người học, white-label, file nguồn, hỗ trợ, nền tảng và điều kiện gia hạn.

## 5. B2B giảng viên

### 5.1. Khung giá

- **20–50 triệu đồng/khóa**.

### 5.2. Bảng chi phí bắt buộc

| Nhóm chi phí | Cách ghi |
|---|---|
| Khảo sát và thiết kế | số giờ × đơn giá nội bộ hoặc phí chuyên gia |
| Giảng viên/chuyên gia | phí cố định hoặc tỷ lệ theo hợp đồng |
| Tùy chỉnh học liệu | số giờ và công cụ |
| Đi lại, địa điểm | chi phí thực tế |
| Trợ giảng/vận hành | theo buổi hoặc theo khóa |
| Nền tảng, LLM API | theo phạm vi sử dụng |
| Sản phẩm bàn giao | số giờ xây và kiểm thử |
| Hỗ trợ sau khóa | số giờ/cam kết SLA |
| Thuế, phí giao dịch | theo hóa đơn và thanh toán |

Không dùng tỷ lệ 40% chi phí trực tiếp làm số chắc chắn.

## 6. B2B doanh nghiệp

### 6.1. Khung giá

- **20–100 triệu đồng/khóa**.

### 6.2. Các biến số quyết định biên

- Mức khảo sát và tùy chỉnh.
- Dữ liệu/quy trình thật.
- Có bàn giao workflow/agent hay chỉ đào tạo.
- Số phòng ban và người tham gia.
- Hỗ trợ sau đào tạo.
- Chi phí chuyên gia ngoài.
- Điều khoản nghiệm thu và thanh toán.

B2B không co giãn theo AI giống dòng sinh viên vì giờ đứng lớp, đi lại và tùy chỉnh vẫn phụ thuộc người thật.

## 7. Vibe coding và khóa thực hành

Phải đo:

- học phí thực thu;
- quy mô cohort;
- chi phí giảng viên;
- môi trường dev, API và hạ tầng;
- chi phí chấm sản phẩm;
- tỷ lệ hoàn thành;
- hoàn tiền;
- đóng góp/cohort.

Không dùng giả định 2,5 triệu đồng/người hoặc biên 53% như số đã chốt.

## 8. Đào tạo năng lực giáo viên STEAM

Dòng này không dùng chung unit economics với sinh viên đại học.

Chi phí cần tính:

- thiết kế chương trình cho 1–2 môn;
- chuyên gia môn học và người nghiệm thu;
- đào tạo tập trung theo cụm;
- đi lại và địa điểm;
- học liệu/hướng dẫn học sinh;
- điều phối viên hoặc giáo viên cốt cán tại chỗ;
- hỗ trợ từ xa sau đào tạo;
- phần mềm/trợ lý AI nếu có;
- thiết bị nếu môn thí điểm cần.

Nguồn thu có thể khác nhau nhưng chưa được chốt:

- hợp đồng với trường/hệ thống trường;
- đơn vị quản lý giáo dục;
- chương trình mục tiêu;
- tài trợ doanh nghiệp;
- đối tác triển khai.

Không đưa nguồn nào vào dự báo trước khi có cơ chế và khách hàng cụ thể.

## 9. Các đòn bẩy cải thiện đóng góp

### 9.1. Tự động hóa làm đường cơ sở

- Arkon cho trợ lý AI và kho tri thức.
- SOPai cho vòng đời cohort, nhắc lịch và trạng thái.
- henlich.vn cho đăng ký, lịch và landing.
- Thanh toán định danh/tự đối soát.
- AI chấm sơ bộ, người duyệt vòng cuối.

### 9.2. Tỷ lệ chia đối tác theo SOW

Tỷ lệ chia phải tương ứng với phần việc thật:

- truyền thông/tuyển sinh;
- thu tiền và đối soát;
- điều phối tại chỗ;
- hỗ trợ học viên;
- thu sản phẩm;
- cung cấp địa điểm hoặc thiết bị.

### 9.3. Điều khoản thanh toán B2B

Theo dõi riêng:

- giá trị hợp đồng;
- tiền đã thu;
- doanh thu ghi nhận;
- công nợ;
- thời gian thu tiền.

## 10. Không còn bảng đóng góp 12 tháng suy ra tùy ý

Chỉ dựng lại sau khi có:

- năng lực bán;
- năng lực giao;
- chuyên gia sẵn sàng;
- lịch thanh toán;
- mùa vụ đã ánh xạ;
- chi phí thật của AI-first/hybrid;
- unit economics STEAM.

## 11. Nguyên tắc ra quyết định

- AI-first là mục tiêu nhưng không giả định đã sẵn sàng.
- Hybrid là phương án giảm rủi ro cho cohort đầu.
- Không tăng quy mô khi chưa biết ticket, ngoại lệ, API cost và chất lượng.
- Không loại một sản phẩm chỉ vì kịch bản thủ công cho kết quả xấu.
- Không coi bảng AI-first là dự báo nếu chưa đo.
- Không coi hợp đồng đã ký là tiền đã thu.
- Không dùng một bảng chi phí chung cho mọi khóa B2B hoặc STEAM.
