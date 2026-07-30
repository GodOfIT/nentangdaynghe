# Kế hoạch kinh doanh và triển khai 12 tháng

> **Phiên bản điều hành:** 2026-07-30  
> **Phạm vi:** 12 tháng vận hành đầu tiên.  
> **Nguồn ưu tiên:** `AGENTS.md` và `ke-hoach/muc-tieu-thang-1.md`.

## 1. Tóm tắt điều hành

Dự án có:

- các trường đại học, cao đẳng và cơ sở giáo dục sẵn sàng phối hợp;
- các chương trình giảng dạy do anh Đức đã soạn;
- năng lực triển khai AI, Vibe Coding, đào tạo giáo viên/giảng viên và chương trình có sản phẩm đầu ra;
- khóa AI dành cho giáo viên phổ thông bản 4 buổi và bản 12 buổi.

Dự án không kế thừa nền tảng, source code, dữ liệu, workflow, tài khoản hoặc hệ thống từ dự án khác. SOPai, Arkon và henlich.vn không thuộc kế hoạch này.

Nền tảng được xây mới hoàn toàn và phát triển song song với lớp học thật. Phần mềm chưa có có thể được thay bằng quy trình thủ công hoặc SaaS tạm thời.

Grapuco là **đối tác công nghệ bên ngoài**, có thể hỗ trợ Vibe Coding và phát triển codebase nhưng không phải tài sản nội bộ, không nắm dữ liệu người học mặc định và không được trở thành dependency bắt buộc.

### Quyết định chiến lược năm đầu

Dự án áp dụng mô hình **education-first**:

1. Dùng giáo viên, giảng viên, sinh viên và lớp cộng đồng để tạo dòng tiền và case study.
2. Dùng trường, trung tâm và tổ chức giáo dục làm khách hàng đồng thời là kênh phân phối B2B2C.
3. Phát triển cấp quyền chương trình, đào tạo giảng viên nguồn, nền tảng và báo cáo để tạo doanh thu lặp lại.
4. Tiếp cận doanh nghiệp bằng workshop, khảo sát và pilot nhỏ.
5. Chỉ mở rộng doanh nghiệp sau khi có case study, chi phí giao hàng và quy trình triển khai rõ.

Kịch bản cơ sở của 3 tháng đầu phải hoạt động được khi doanh thu doanh nghiệp bằng 0.

---

## 2. Mục tiêu 12 tháng

### 2.1. Mục tiêu sản phẩm

- chuẩn hóa danh mục khóa ngắn hạn và chuyên sâu;
- vận hành ổn định chương trình AI và Vibe Coding cho sinh viên;
- có bộ sản phẩm rõ cho giáo viên phổ thông, giảng viên và trường học;
- có mô hình cấp quyền chương trình và đào tạo giảng viên nguồn;
- xây nền tảng phục vụ đa trường, đa cohort;
- có dữ liệu năng lực, rubric, sản phẩm và báo cáo;
- kiểm chứng ít nhất một mô hình hợp tác doanh nghiệp có thể lặp lại.

### 2.2. Mục tiêu thị trường

- hình thành mạng lưới trường/cơ sở giáo dục hoạt động thường xuyên;
- xây kênh lớp cộng đồng và tuyển sinh trực tiếp;
- phát triển đối tác phân phối giáo dục;
- chuyển một phần doanh thu từ từng lớp sang cấp quyền, nền tảng và gia hạn;
- có 2–5 case study doanh nghiệp chất lượng thay vì chạy theo số lượng hợp đồng.

### 2.3. Mục tiêu vận hành

- đo unit economics theo từng dòng sản phẩm;
- chuẩn hóa giảng viên, trợ giảng và điều phối;
- giảm tải thủ công bằng nền tảng theo nhu cầu thật;
- tách rõ học phí gộp, doanh thu dự án, tiền đã thu và đóng góp;
- bảo vệ dữ liệu, quyền sở hữu học liệu và sản phẩm người học.

---

## 3. Phân khúc khách hàng theo ưu tiên

### 3.1. Ưu tiên 1 — Cá nhân trong giáo dục

- giáo viên phổ thông;
- giảng viên đại học, cao đẳng và giáo dục nghề nghiệp;
- sinh viên không chuyên;
- người đi làm cần năng lực AI thực hành.

Sản phẩm:

- workshop;
- khóa 2–4 buổi;
- khóa 6–15 buổi;
- cohort theo môn/ngành;
- cộng đồng và học liệu bổ sung.

### 3.2. Ưu tiên 2 — Trường và tổ chức giáo dục

- đại học;
- cao đẳng;
- trung cấp và cơ sở giáo dục nghề nghiệp;
- trường phổ thông;
- trung tâm đào tạo;
- khoa/phòng chuyên môn;
- hiệp hội hoặc cộng đồng nghề nghiệp.

Sản phẩm:

- lớp sinh viên;
- khóa giáo viên/giảng viên;
- đào tạo giảng viên nguồn;
- cấp quyền chương trình;
- nền tảng và báo cáo;
- AI+ / AIx;
- STEAM theo đơn đặt hàng.

### 3.3. Ưu tiên 3 — Doanh nghiệp

Doanh nghiệp mua theo lộ trình:

- workshop;
- AI readiness/process discovery;
- đào tạo theo phòng ban;
- pilot workflow/agent/công cụ nội bộ;
- triển khai mở rộng.

Không bán ngay dự án lớn khi chưa rõ dữ liệu, người phụ trách, tiêu chí thành công và nghiệm thu.

---

## 4. Danh mục sản phẩm năm đầu

### 4.1. Khóa giáo viên phổ thông 4 buổi

Vai trò:

- sản phẩm đầu vào;
- tạo dòng tiền nhanh;
- triển khai theo lớp cộng đồng hoặc hợp đồng trường;
- dẫn sang bản 12 buổi, đào tạo nguồn và gói AI School Starter.

Đầu ra:

- kế hoạch bài dạy;
- học liệu;
- nhiệm vụ phân hóa;
- bộ đánh giá/rubric;
- checklist kiểm chứng;
- quy tắc AI cho lớp học.

### 4.2. Khóa giáo viên phổ thông 12 buổi

- phát triển năng lực đầy đủ;
- có dự án cuối khóa;
- phù hợp đào tạo chuyên sâu hoặc giảng viên nguồn.

### 4.3. AI cho giảng viên đại học, cao đẳng và nghề

Các cấu hình:

- AI Essentials for Educators;
- AI-Powered Teaching;
- Faculty AI Builder;
- AI+ Curriculum Sprint;
- AI Pedagogy Lab.

### 4.4. Ứng dụng AI theo khung năng lực

- đối tượng: sinh viên không chuyên;
- thời lượng: 12–15 buổi;
- đầu ra: sản phẩm, rubric và hồ sơ minh chứng.

### 4.5. Vibe Coding

- đối tượng: người học không chuyên lập trình;
- đầu ra: website, ứng dụng, workflow, công cụ nội bộ hoặc AI agent;
- Grapuco là add-on tùy chọn sau khi chốt thương mại và dữ liệu.

### 4.6. Cấp quyền chương trình

Ba cấu hình:

1. Nội dung.
2. Nội dung + nền tảng.
3. Triển khai đầy đủ, đào tạo nguồn và hỗ trợ.

### 4.7. STEAM và môn mới

- chỉ phát triển theo đơn đặt hàng;
- bắt đầu từ 1–2 môn;
- có chuyên gia kiểm duyệt;
- không xây thư viện lớn khi chưa có nhu cầu thật.

### 4.8. Doanh nghiệp

- Enterprise AI Foundation;
- AI Readiness & Process Discovery;
- AI Workflow for Teams;
- AI Agent Builder;
- Vibe Coding for Internal Tools.

Các sản phẩm này được bán theo phễu và pilot, không phải mục tiêu số lượng trong tháng đầu.

---

## 5. Thang sản phẩm và hành trình khách hàng

### Giáo viên/giảng viên

> Nội dung miễn phí → workshop → khóa 4 buổi → khóa 12 buổi → Faculty AI Builder/đào tạo nguồn → gói cấp trường.

### Sinh viên

> Workshop trải nghiệm → khóa AI/Vibe Coding → dự án/portfolio → khóa nâng cao → cộng đồng hoặc chương trình theo ngành.

### Trường/tổ chức

> Workshop lãnh đạo/giảng viên → lớp thí điểm → gói nhiều cohort → đào tạo nguồn → cấp quyền + nền tảng → gia hạn.

### Doanh nghiệp

> Workshop → khảo sát → đào tạo nhóm nhỏ → pilot → case study → triển khai mở rộng.

---

## 6. Mô hình doanh thu

### Dòng chính giai đoạn đầu

1. Học phí lớp cộng đồng/cohort.
2. Hợp đồng đào tạo trường/tổ chức giáo dục.
3. Cấp quyền chương trình.
4. Đào tạo giảng viên nguồn.
5. Phí nền tảng, báo cáo và hỗ trợ.

### Dòng phát triển sau

- workshop và khảo sát doanh nghiệp;
- pilot workflow/agent;
- triển khai doanh nghiệp;
- white-label;
- add-on Grapuco;
- chương trình theo yêu cầu.

### Tỷ trọng định hướng `[giả định quản trị]`

| Giai đoạn | Cá nhân/cohort | Tổ chức giáo dục/cấp quyền | Doanh nghiệp và nguồn khác |
|---|---:|---:|---:|
| Tháng 1–3 | 50–60% | 25–35% | 0–15% |
| Tháng 4–6 | 40–55% | 35–45% | 5–15% |
| Tháng 7–12 | 30–45% | 35–50% | 10–25% |

Tỷ trọng thực tế phải tính theo tiền thực thu và đóng góp, không theo pipeline.

---

## 7. Chiến lược phân phối

### 7.1. Kênh trực tiếp

- thương hiệu cá nhân và nội dung chuyên môn;
- cộng đồng giáo viên/giảng viên;
- webinar/workshop;
- giới thiệu từ học viên;
- email/Zalo/nhóm chuyên môn;
- lớp thử hoặc bài học mẫu.

### 7.2. Kênh tổ chức giáo dục

- trường đã sẵn sàng;
- khoa/phòng ban;
- trung tâm đào tạo;
- hội giáo viên/giảng viên;
- hiệp hội nghề nghiệp;
- đơn vị đào tạo địa phương;
- đối tác có sẵn tệp người học.

### 7.3. Kênh doanh nghiệp

- quan hệ sẵn có;
- giới thiệu từ đối tác/trường/cựu học viên;
- workshop theo ngành;
- case study công khai;
- đối tác tư vấn hoặc triển khai phần mềm.

Không xây đội outbound doanh nghiệp lớn trước khi có offer và case study phù hợp.

---

## 8. Lộ trình 12 tháng

## Giai đoạn 1 — Tháng 1: Kích hoạt giáo dục

Mục tiêu:

- 2–3 trường/cơ sở được kích hoạt;
- 200–300 sinh viên thanh toán và bắt đầu học;
- tối thiểu 2 khóa/hợp đồng giáo viên hoặc giảng viên;
- ít nhất 1 khóa giáo viên phổ thông 4 buổi;
- ít nhất 1 gói chương trình sinh viên được triển khai/cấp quyền;
- 3–5 cuộc trao đổi doanh nghiệp, 0–1 pilot không bắt buộc;
- MVP phục vụ được các cohort đầu tiên.

## Giai đoạn 2 — Tháng 2–3: Chuẩn hóa và lặp lại

Mục tiêu:

- chạy đợt cohort thứ hai;
- chuẩn hóa khóa 4 buổi và 12 buổi;
- xây bộ tài liệu bán hàng cho trường;
- chuẩn hóa hợp đồng, chia sẻ học phí và báo cáo;
- đào tạo nhóm giảng viên/trợ giảng;
- theo dõi tỷ lệ nâng cấp;
- có ít nhất 1 case study giáo dục đủ chất lượng;
- chọn tối đa 1–2 bài toán doanh nghiệp để pilot.

Nền tảng:

- đa trường/đa cohort;
- notification;
- dashboard;
- support;
- thanh toán/đối soát tối thiểu;
- cấp quyền chương trình bản đầu.

## Giai đoạn 3 — Tháng 4–6: Mở rộng B2B2C giáo dục

Mục tiêu:

- tăng số trường/đối tác phân phối;
- bán gói nhiều cohort;
- triển khai đào tạo giảng viên nguồn;
- có hợp đồng cấp quyền/nền tảng đầu tiên;
- phát triển AI+ / AIx theo đơn vị đặt hàng;
- chuẩn hóa SLA hỗ trợ và báo cáo;
- có 1–2 pilot doanh nghiệp đã nghiệm thu nếu cơ hội phù hợp.

Nền tảng:

- onboarding trường;
- portfolio;
- dữ liệu năng lực;
- cấp quyền và gia hạn;
- API đối tác;
- module pilot doanh nghiệp chỉ khi có hợp đồng.

## Giai đoạn 4 — Tháng 7–9: Tăng doanh thu lặp lại

Mục tiêu:

- giảm tỷ trọng doanh thu phụ thuộc lớp bán lẻ;
- tăng cấp quyền, nền tảng và gia hạn;
- hình thành mạng lưới giảng viên nguồn;
- nhân rộng các chương trình có unit economics tốt;
- dừng hoặc thiết kế lại sản phẩm có tải hỗ trợ cao;
- dùng case study để tiếp cận doanh nghiệp có chọn lọc;
- thử gói doanh nghiệp lặp lại từ pilot thành công.

Nền tảng:

- AI hỗ trợ giảng viên và chấm sơ bộ;
- analytics;
- báo cáo năng lực;
- white-label phạm vi nhỏ;
- quota/billing đối tác ngoài.

## Giai đoạn 5 — Tháng 10–12: Tối ưu và chuẩn bị năm hai

Mục tiêu:

- gia hạn trường và đối tác;
- chuẩn hóa danh mục sản phẩm;
- đánh giá biên đóng góp từng dòng;
- quyết định sản phẩm nào mở rộng, dừng hoặc chuyển cho đối tác;
- chốt chiến lược doanh nghiệp năm hai dựa trên case study thực tế;
- xây kế hoạch tài chính và nền tảng năm hai.

Nền tảng:

- tối ưu vận hành đa trường;
- chuẩn hóa dữ liệu năng lực;
- giảm công việc thủ công;
- đánh giá tự xây/mua/tích hợp;
- roadmap năm hai.

---

## 9. KPI theo giai đoạn

### KPI giáo dục cốt lõi

- số trường/cơ sở hoạt động;
- số cohort mở và hoàn thành;
- người thanh toán, bắt đầu và hoàn thành;
- tỷ lệ nâng cấp khóa ngắn → khóa dài;
- tỷ lệ trường mua tiếp/gia hạn;
- số giảng viên nguồn;
- số gói cấp quyền;
- tiền thực thu;
- đóng góp theo dòng sản phẩm;
- tải hỗ trợ/cohort;
- chất lượng sản phẩm đầu ra.

### KPI nền tảng

- trường/cohort đang dùng;
- tỷ lệ tác vụ được xử lý trên hệ thống;
- lỗi/ticket;
- thời gian hỗ trợ;
- chi phí cloud/API/người;
- tỷ lệ nộp bài và chấm trên nền tảng;
- báo cáo được xuất đúng hạn;
- mức giảm giờ vận hành thủ công.

### KPI doanh nghiệp

- cuộc trao đổi chất lượng;
- bài toán rõ;
- workshop có phí;
- pilot có tiền ứng trước;
- pilot nghiệm thu;
- case study được phép công bố;
- tỷ lệ pilot → triển khai;
- tiền thực thu và đóng góp;
- số giờ presales trên một hợp đồng.

Không dùng số lead hoặc tổng pipeline làm KPI thành công duy nhất.

---

## 10. Kế hoạch đội ngũ

### Giai đoạn đầu

Ưu tiên:

- điều hành/quan hệ trường;
- quản lý chương trình;
- giảng viên và trợ giảng;
- vận hành lớp;
- product/engineering cho MVP;
- tài chính/đối soát;
- nội dung và tuyển sinh giáo dục.

Kinh doanh doanh nghiệp ở quy mô nhỏ, do người có năng lực tư vấn và hiểu kỹ thuật phụ trách.

### Khi mở rộng

Bổ sung theo dữ liệu:

- customer success trường;
- quản lý đối tác/cấp quyền;
- QA nội dung;
- support;
- sales B2B giáo dục;
- solution consultant doanh nghiệp;
- data/analytics.

Không tuyển đội doanh nghiệp lớn khi chưa có offer lặp lại.

---

## 11. Nguyên tắc tài chính

- kịch bản cơ sở không có doanh thu doanh nghiệp tháng đầu;
- lớp cộng đồng chỉ mở khi đạt ngưỡng hoặc có quyết định bù chi phí;
- hợp đồng tổ chức phải có tiền ứng trước;
- pilot doanh nghiệp phải có tiền ứng trước và nghiệm thu;
- tách đầu tư nền tảng khỏi chi phí giao lớp;
- theo dõi đóng góp/người hoàn thành;
- cập nhật runway hàng tuần trong 3 tháng đầu;
- không lấy giá trị hợp đồng chưa thu để mở rộng chi phí cố định;
- mọi số chưa xác nhận ghi `[giả định]`.

---

## 12. Rủi ro và biện pháp

### 12.1. Có trường nhưng số người học thấp

Biện pháp:

- chốt số tối thiểu;
- mở liên trường;
- dùng lớp cộng đồng;
- cải thiện truyền thông và workshop đầu vào;
- không xây chi phí cố định dựa trên danh sách quan tâm.

### 12.2. Khóa ngắn hạn không nâng cấp

Biện pháp:

- thiết kế đầu ra rõ;
- xác định nhu cầu tiếp theo trong khóa;
- cung cấp lộ trình cá nhân/tổ chức;
- đo lý do không mua tiếp;
- không giảm giá liên tục để che vấn đề sản phẩm.

### 12.3. Tùy chỉnh cho trường quá nhiều

Biện pháp:

- chuẩn hóa 80% lõi, 20% tùy chỉnh;
- giới hạn phạm vi hợp đồng;
- tính phí tùy chỉnh;
- quản lý phiên bản chương trình;
- ưu tiên mô-đun tái sử dụng.

### 12.4. Nền tảng phát triển quá rộng

Biện pháp:

- chỉ ưu tiên tính năng gắn với lớp/hợp đồng;
- đo giờ thủ công trước khi tự động hóa;
- dùng SaaS tạm thời;
- review roadmap hàng tháng;
- không xây ERP doanh nghiệp tổng quát.

### 12.5. Doanh nghiệp kéo dài presales

Biện pháp:

- sàng lọc người quyết định và ngân sách;
- giới hạn workshop miễn phí;
- bán khảo sát có phí;
- pilot phạm vi nhỏ;
- dừng cơ hội không có bước tiếp theo rõ.

### 12.6. Phụ thuộc đối tác ngoài

Biện pháp:

- interface rõ;
- hợp đồng, SLA và dữ liệu;
- fallback;
- không mặc định chia sẻ dữ liệu;
- nền tảng hoạt động khi Grapuco hoặc dịch vụ khác gián đoạn.

---

## 13. Cổng quyết định

### Sau tháng 1

Quyết định:

- khóa 4 buổi có nên nhân rộng không;
- chương trình sinh viên nào có unit economics tốt hơn;
- đối tác giáo dục nào nên ưu tiên;
- tính năng nền tảng nào thực sự cần;
- có bài toán doanh nghiệp nào đủ điều kiện pilot không.

### Sau tháng 3

Quyết định:

- mở rộng lớp cộng đồng hay B2B2C;
- tuyển thêm giảng viên/trợ giảng;
- đầu tư cấp quyền/nền tảng ở mức nào;
- tiếp tục hay dừng pilot doanh nghiệp;
- tích hợp Grapuco hay giữ ở dạng add-on ngoài.

### Sau tháng 6

Quyết định:

- dòng sản phẩm nào trở thành trụ cột;
- mô hình gia hạn nào hiệu quả;
- có đủ case study để xây offer doanh nghiệp chuẩn không;
- mức đầu tư nền tảng 6 tháng cuối;
- STEAM/môn mới nào có đơn đặt hàng thực tế.

### Sau tháng 12

Quyết định:

- chiến lược năm hai;
- tỷ trọng giáo dục và doanh nghiệp;
- sản phẩm giữ, dừng hoặc chuyển đối tác;
- nhu cầu vốn;
- roadmap nền tảng;
- phạm vi mở rộng địa lý và đối tác.

---

## 14. Định nghĩa thành công năm đầu

Năm đầu thành công khi:

- dự án tạo được dòng tiền thực từ giáo dục;
- có các chương trình được lặp lại và chuẩn hóa;
- có trường mua tiếp, cấp quyền hoặc gia hạn;
- nền tảng phục vụ được lớp thật và giảm vận hành thủ công;
- có dữ liệu unit economics đáng tin cậy;
- có đội giảng viên/điều phối có thể mở rộng;
- có ít nhất một mô hình doanh nghiệp được kiểm chứng mà không làm lệch trọng tâm;
- dự án không phụ thuộc một hệ thống cũ, đối tác hoặc hợp đồng doanh nghiệp duy nhất.