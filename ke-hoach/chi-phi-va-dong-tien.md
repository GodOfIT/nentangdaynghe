# Chi phí, dòng tiền và vốn lưu động

> Tài liệu này là khung quản trị dòng tiền. Mọi con số chưa có chứng từ hoặc quyết định của anh Đức đều là `[giả định]`.
>
> Các con số “tháng 1 âm 135 triệu” và “tháng 1 âm 37 triệu” trong phiên bản cũ **không còn được dùng như dự báo**.
>
> Đọc cùng `ke-hoach/muc-tieu-thang-1.md` và `ke-hoach/unit-economics.md`.

Cập nhật: 2026-07-27

## 1. Nguyên tắc quản trị dòng tiền

1. Giá trị hợp đồng không phải tiền đã thu.
2. Doanh thu ghi nhận không phải dòng tiền.
3. Mỗi hợp đồng phải có lịch thu và lịch chi.
4. Không dùng một tỷ lệ chi phí trực tiếp chung cho mọi khóa B2B.
5. Không dựng bảng 12 tháng khi chưa biết trần năng lực giao khóa và lịch thanh toán.
6. Tiền ứng trước B2B phải ưu tiên trang trải chi phí trực tiếp dự kiến.
7. Dòng sinh viên online phải theo dõi cả cấu hình AI-first và hybrid.
8. Chi phí xây tự động hóa và thời gian của dev phải được ghi nhận, không coi là miễn phí.

## 2. Chi phí cố định hàng tháng `[giả định]`

### 2.1. Nhân sự

| Vai trò | Chi phí gồm lương và nghĩa vụ liên quan/tháng `[giả định]` |
|---|---:|
| Điều hành, quan hệ đối tác, bán hàng | 36–43 triệu |
| Phát triển nền tảng | 30–36 triệu |
| Nội dung, thiết kế học tập 1 | 22–27 triệu |
| Nội dung, thiết kế học tập 2 | 18–24 triệu |
| Hành chính, vận hành, đối soát | 15–18 triệu |
| **Tổng nhân sự** | **121–148 triệu** |

Các mức này chưa được xác nhận bằng bảng lương thực tế.

Các biến cần anh Đức quyết:

- Founder có nhận lương trong 6 tháng đầu hay không.
- Đội vận hành thực tế là 4 hay 5 người trong giai đoạn đầu.
- Người dạy chính tính vào chi phí cố định hay chi phí trực tiếp theo khóa.

### 2.2. Chi phí vận hành

| Khoản | Mức/tháng `[giả định]` |
|---|---:|
| Văn phòng/coworking | 6–10 triệu |
| Kế toán thuê ngoài | 3–5 triệu |
| Pháp lý và tư vấn | 2–5 triệu |
| Cloud, domain, email | 3–5 triệu |
| Subscription AI và công cụ | 5–8 triệu |
| LLM API | 4–10 triệu, phụ thuộc sử dụng |
| Thiết kế, video, quản lý khác | 2–4 triệu |
| **Tổng vận hành** | **25–47 triệu** |

### 2.3. Hai kịch bản chi phí cố định

| Kịch bản | Chi phí/tháng `[giả định]` |
|---|---:|
| Tối giản: founder chưa nhận lương, 4 người | 92–126 triệu |
| Cơ sở: 5 người, founder nhận lương | 146–195 triệu |

Không lấy 150 triệu làm số mặc định nếu chưa chốt cấu trúc đội và lương thực tế.

## 3. Chi phí trực tiếp theo sản phẩm

### 3.1. Sinh viên online — AI-first

Giả định để chạy độ nhạy, chưa phải dữ liệu thật:

- Giảng viên: 10 triệu/cohort.
- Một điều phối viên: 4 triệu/cohort.
- Phí thanh toán/đối soát: 0,8% học phí gộp.
- LLM API: 14.000 đồng/người/khóa.
- Nền tảng/lưu trữ: 6.000 đồng/người.

Chi phí còn có thể bị bỏ sót:

- xây và bảo trì workflow;
- RAG, embedding, reranking;
- Zalo OA/kênh nhắn tin;
- logging, giám sát và kiểm thử;
- hỗ trợ ngoại lệ;
- người duyệt chấm bài;
- xử lý tài khoản, hoàn tiền và khiếu nại;
- thời gian của dev.

### 3.2. Sinh viên online — hybrid dự phòng

- AI gợi ý, người trả lời/duyệt.
- Đối soát bán tự động.
- Trợ giảng tăng theo tải thật.
- Người kiểm tra các bài chấm có rủi ro.

Cấu hình này có thể tạo đóng góp thấp hơn nhưng giảm rủi ro khi AI-first chưa sẵn sàng.

### 3.3. B2B giảng viên và doanh nghiệp

Mỗi hợp đồng phải có dự toán riêng:

- khảo sát và thiết kế;
- chuyên gia/giảng viên;
- tùy chỉnh nội dung;
- đi lại, địa điểm;
- trợ giảng và vận hành;
- nền tảng, API và công cụ;
- sản phẩm bàn giao;
- hỗ trợ sau khóa;
- thuế và phí trực tiếp.

Không dùng mức “40% giá trị hợp đồng” như số thực tế.

### 3.4. Cấp quyền khóa học

Phải tính:

- bán hàng và đàm phán;
- tùy chỉnh;
- onboarding;
- đào tạo giảng viên nguồn;
- hosting và kỹ thuật;
- báo cáo;
- hỗ trợ;
- cập nhật nội dung;
- kiểm soát phạm vi sử dụng.

### 3.5. Đào tạo năng lực giáo viên STEAM

Phải có bảng riêng cho từng pilot:

- thiết kế 1–2 môn;
- chuyên gia và nghiệm thu;
- đi lại/đào tạo tập trung;
- học liệu hướng dẫn học sinh;
- điều phối viên tại chỗ;
- hỗ trợ từ xa;
- phần mềm/trợ lý AI nếu có;
- thiết bị nếu cần.

Không dùng bảng chi phí sinh viên đại học cho nhóm giáo viên vùng khó.

## 4. Chi phí xây tự động hóa

AI-first làm giảm chi phí biến đổi nhưng tạo chi phí đầu tư ban đầu và chi phí duy trì.

Mỗi hạng mục phải ghi:

| Hạng mục | Giờ dev | Chi phí công cụ/API | Chi phí vận hành tháng | Trạng thái |
|---|---:|---:|---:|---|
| Đăng ký và mã học viên | Chưa đo | Chưa đo | Chưa đo | Cần audit |
| Đối soát thanh toán | Chưa đo | Chưa đo | Chưa đo | Cần audit |
| FAQ/RAG tuyến đầu | Chưa đo | Chưa đo | Chưa đo | Cần audit |
| Nhắc lịch/điểm danh | Chưa đo | Chưa đo | Chưa đo | Cần audit |
| Chấm sơ bộ theo rubric | Chưa đo | Chưa đo | Chưa đo | Cần audit |

Nguyên tắc:

- Không coi giờ dev là miễn phí.
- Không xây cả năm hạng mục cùng lúc trước khi audit tài sản có sẵn.
- Nếu dự án tự thu hàng trăm giao dịch, ưu tiên đối soát.
- Nếu đối tác thu và đối soát, có thể ưu tiên trợ lý AI hoặc workflow lớp học.

## 5. Khung dòng tiền tháng đầu

### 5.1. Dòng tiền vào

| Nguồn | Giá trị/thông tin hiện có | Tiền tháng đầu |
|---|---:|---:|
| Sinh viên online | 200–300 người × 220.000 đồng `[giả định]` | 44–66 triệu học phí gộp |
| 2 khóa giảng viên | 40–100 triệu giá trị hợp đồng | Phụ thuộc ứng trước và lịch thu |
| 2 khóa doanh nghiệp | 40–200 triệu giá trị hợp đồng | Phụ thuộc ứng trước và lịch thu |
| Cấp quyền khóa sinh viên | Ít nhất 1 thử nghiệm/giao dịch | Chưa có giá và lịch thu |
| STEAM | Chưa chốt người trả tiền và phạm vi | Không đưa vào dự báo |

### 5.2. Dòng tiền ra

- Chi phí cố định thực tế.
- Chi phí trực tiếp AI-first hoặc hybrid.
- Chi phí từng khóa B2B đã triển khai.
- Chi phí bán hàng và đi lại.
- Thuế, phí thanh toán và phần đối tác.
- Chi phí xây hoặc tích hợp tự động hóa.
- Chi phí STEAM chỉ khi scope được phê duyệt.

### 5.3. Công thức báo cáo

> Dòng tiền thuần tháng = tổng tiền thực thu - tổng tiền thực chi

> Công nợ cuối tháng = giá trị đến hạn chưa thu - khoản phải trả đến hạn chưa chi

> Runway = tiền mặt khả dụng ÷ chi tiền bình quân theo kịch bản thực tế

## 6. Bảng theo dõi từng hợp đồng B2B

| Trường | Nội dung |
|---|---|
| Mã hợp đồng | định danh |
| Nhóm khách hàng | giảng viên/doanh nghiệp/STEAM |
| Giá trị hợp đồng | tổng đã ký |
| Ngày ký | ngày thực tế |
| Lịch triển khai | ngày bắt đầu/kết thúc |
| Tiền ứng trước | số tiền và ngày thu |
| Các mốc thanh toán | số tiền, điều kiện, hạn thu |
| Chi phí trực tiếp dự kiến | theo bảng dự toán |
| Chi phí trực tiếp thực tế | cập nhật sau giao |
| Doanh thu ghi nhận | theo chính sách kế toán |
| Công nợ | còn phải thu |
| Đóng góp thực tế | doanh thu thuần trừ chi phí trực tiếp |

## 7. Điều khoản thương mại bảo vệ dòng tiền

- Có tiền ứng trước trước khi bắt đầu tùy chỉnh hoặc đặt lịch chuyên gia.
- Tiền ứng trước tối thiểu nên đủ trang trải chi phí trực tiếp dự kiến đã cam kết.
- Chia thanh toán theo mốc có đầu ra rõ ràng.
- Không để toàn bộ tiền thanh toán sau nghiệm thu nếu phải ứng chi lớn.
- Ghi rõ phạm vi thay đổi, số vòng chỉnh sửa và hỗ trợ sau khóa.
- Ghi rõ trách nhiệm đối tác trong tuyển sinh, thu tiền, điều phối và hỗ trợ.

## 8. Chưa dựng bảng dòng tiền 12 tháng

Chỉ dựng lại khi có tối thiểu:

1. Ngày bắt đầu chính thức.
2. Chi phí cố định thực tế.
3. Founder có nhận lương hay không.
4. Trần số khóa B2B có thể giao mỗi tháng.
5. Pipeline và tỷ lệ ký thực tế.
6. Điều khoản thanh toán của các hợp đồng đầu tiên.
7. Unit economics AI-first và hybrid.
8. Giá và chi phí gói cấp quyền đầu tiên.
9. Phạm vi và nguồn tiền STEAM.

## 9. Nhu cầu vốn và runway

Không sử dụng mức 800 triệu–1 tỷ như kết luận đã chốt.

> Vốn lưu động tối thiểu = điểm âm lũy kế sâu nhất + chi đầu tư bắt buộc + dự phòng rủi ro

Lập ít nhất ba kịch bản:

- B2B ký và thu đúng kế hoạch.
- B2B ký đủ nhưng thu chậm.
- B2B chỉ đạt 50% mục tiêu.

Mỗi kịch bản sinh viên phải có AI-first và hybrid.

## 10. Ngưỡng cảnh báo

| Ngưỡng | Hành động |
|---|---|
| Tiền mặt còn dưới 3 tháng chi cố định thực tế | Dừng chi đầu tư chưa cần thiết; ưu tiên thu công nợ và hợp đồng ứng trước |
| Hợp đồng B2B ký nhưng ứng trước không đủ chi trực tiếp | Không khởi động phần tùy chỉnh tốn chi phí trước khi điều chỉnh điều khoản |
| Cohort có API cost/ticket cao hơn kịch bản | Giữ quy mô, chuyển hybrid và tối ưu trước khi mở rộng |
| Tỷ lệ chuyển người thật vượt ngưỡng thiết kế | Bổ sung điều phối hoặc giảm phạm vi trợ lý AI |
| Tải hỗ trợ/chấm bài vượt trần đội | Không mở cohort mới; tự động hóa hoặc bố trí chuyên gia theo đợt |
| Doanh thu/đóng góp thấp hơn kế hoạch hai tháng liên tiếp | Chuyển về kịch bản tối giản và rà lại pipeline |

## 11. Báo cáo tài chính hàng tuần

- Tiền mặt đầu kỳ và cuối kỳ.
- Tiền đã thu theo từng dòng sản phẩm.
- Tiền đã chi cố định và trực tiếp.
- Giá trị hợp đồng mới ký.
- Tiền ứng trước mới thu.
- Công nợ đến hạn và quá hạn.
- Chi phí API và hạ tầng.
- Giờ dev cho tự động hóa.
- Ticket, ngoại lệ và giờ điều phối.
- Dự báo tiền vào/ra 4 tuần tiếp theo.

## 12. Các quyết định còn cần anh Đức

1. Founder có nhận lương trong 6 tháng đầu không.
2. Chi phí thực tế của đội 4–5 người.
3. Nguồn tiền mặt hoặc runway hiện có.
4. Trần số khóa B2B có thể giao mỗi tháng.
5. Điều khoản ứng trước mục tiêu.
6. Mức hoàn thiện SOPai, Arkon và henlich.vn.
7. Pháp nhân và quy trình thu học phí, hóa đơn và thuế.
8. Phạm vi và nguồn chi trả STEAM.
