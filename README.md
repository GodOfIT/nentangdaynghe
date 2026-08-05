# Nền tảng dạy nghề trực tuyến

Repo ghi lại chiến lược, sản phẩm và kế hoạch triển khai nền tảng đào tạo AI, Vibe Coding, STEAM và giáo dục nghề nghiệp.

> **Quy tắc quan trọng:** đọc [AGENTS.md](AGENTS.md) trước mọi tài liệu khác.
>
> Dự án chỉ kế thừa các chương trình giảng dạy do anh Đức đã soạn. Nền tảng, source code, dữ liệu, workflow và hạ tầng được xây mới hoàn toàn.
>
> SOPai, Arkon và henlich.vn không thuộc kiến trúc hoặc kế hoạch hiện hành.

## Định vị

> Nền tảng công nghệ, đào tạo, đánh giá năng lực và điều phối dữ liệu giúp nhà trường, giáo viên và người học triển khai các chương trình có sản phẩm đầu ra.

## Chiến lược thị trường

Dự án áp dụng chiến lược **education-first** trong giai đoạn đầu:

1. Tạo dòng tiền từ lớp cộng đồng và các khóa ngắn hạn dành cho giáo viên, giảng viên, sinh viên và người đi làm.
2. Dùng trường học, trung tâm và tổ chức giáo dục làm khách hàng đồng thời là kênh phân phối B2B2C.
3. Phát triển cấp quyền chương trình, đào tạo giảng viên nguồn, nền tảng và báo cáo cho các đơn vị giáo dục.
4. Tiếp cận doanh nghiệp có chọn lọc bằng workshop, khảo sát và pilot nhỏ; không phụ thuộc doanh thu doanh nghiệp trong những tháng đầu.

Doanh nghiệp vẫn là thị trường giá trị cao trong dài hạn, nhưng chỉ mở rộng sau khi có case study, quy trình triển khai và dữ liệu chi phí thực tế.

## Các hướng triển khai năm đầu

Theo thứ tự ưu tiên:

- AI cho giáo viên và giảng viên.
- Ứng dụng AI theo khung năng lực cho sinh viên.
- Vibe Coding cho sinh viên và người học không chuyên.
- Cấp quyền chương trình và nền tảng cho trường/đối tác.
- Đào tạo giảng viên nguồn và AI+ / AIx.
- STEAM và các môn mới theo đơn đặt hàng.
- Workshop, khảo sát và pilot AI cho doanh nghiệp.
- Triển khai doanh nghiệp quy mô lớn sau khi có case study.

## Điểm xuất phát

- Đã có các trường/cơ sở giáo dục sẵn sàng phối hợp.
- Đã có các chương trình giảng dạy cốt lõi.
- Đã có khóa AI cho giáo viên phổ thông bản 4 buổi và bản 12 buổi.
- Không bắt đầu từ bước tìm trường đầu tiên.
- Lớp học được triển khai song song với việc xây nền tảng mới.
- Doanh thu tháng đầu không được xây trên giả định phải ký nhiều hợp đồng doanh nghiệp.

## Thang sản phẩm

> Nội dung miễn phí → workshop → khóa 4 buổi → khóa chuyên sâu → cấp quyền/nền tảng → tư vấn hoặc triển khai riêng.

Thang sản phẩm giúp dự án:

- giảm chi phí tiếp cận;
- tạo sản phẩm đầu vào dễ mua;
- thu thập phản hồi và case study;
- nâng cấp khách hàng theo nhu cầu thực tế;
- không phải bán ngay một hợp đồng lớn từ lần tiếp xúc đầu tiên.

## Grapuco

Grapuco là **đối tác công nghệ bên ngoài**, không phải tài sản nội bộ và không phải dependency bắt buộc.

Vai trò dự kiến:

- hỗ trợ Vibe Coding bằng bản đồ codebase;
- trực quan module, dependency, call graph và flow;
- hỗ trợ spec-first và phân tích tác động thay đổi;
- cung cấp context cho AI coding tools;
- hỗ trợ đội phát triển hiểu codebase mới.

Nền tảng phải hoạt động được khi Grapuco chưa tích hợp hoặc tạm gián đoạn. Dữ liệu người học không được chia sẻ theo mặc định.

Xem [Khung hợp tác với Grapuco](docs/doi-tac-grapuco.md).

## Nghiên cứu TUMO

- [Nghiên cứu mô hình kinh doanh, vận hành giáo dục và công nghệ TUMO](docs/nghien-cuu-tumo-mo-hinh-kinh-doanh-va-cong-nghe.md)
- [Phương án triển khai kỹ thuật học từ mô hình TUMO](nen-tang/phuong-an-trien-khai-ky-thuat-hoc-tu-tumo.md)

TUMO được dùng làm mô hình tham chiếu về learning path động, portfolio, coach, hub–spoke và cấp quyền/franchise. Dự án không sao chép thương hiệu, nội dung hoặc phần mềm sở hữu trí tuệ của TUMO.

## Tài liệu điều hành ưu tiên

1. [AGENTS.md — nguồn sự thật điều hành](AGENTS.md)
2. [Mục tiêu tháng đầu](ke-hoach/muc-tieu-thang-1.md)
3. [Kế hoạch kinh doanh và triển khai 12 tháng](ke-hoach/ke-hoach-kinh-doanh-12-thang.md)
4. [Mô hình doanh thu](docs/mo-hinh-doanh-thu.md)
5. [Unit economics](ke-hoach/unit-economics.md)
6. [Chi phí, dòng tiền và vốn lưu động](ke-hoach/chi-phi-va-dong-tien.md)
7. [Mô hình nền tảng greenfield](nen-tang/mo-hinh-nen-tang.md)
8. [Phương án triển khai kỹ thuật học từ TUMO](nen-tang/phuong-an-trien-khai-ky-thuat-hoc-tu-tumo.md)
9. [Danh mục sản phẩm đào tạo](san-pham/danh-muc-san-pham-dao-tao.md)
10. [Thế mạnh và nguyên tắc lập kế hoạch](docs/the-manh-du-an.md)
11. [Khung hợp tác với Grapuco](docs/doi-tac-grapuco.md)

## Chương trình nổi bật

- [Danh mục sản phẩm đào tạo](san-pham/danh-muc-san-pham-dao-tao.md)
- [AI dành cho giáo viên phổ thông — 12 buổi](chuong-trinh-dao-tao-ai/02-giao-vien-pho-thong.md)
- [AI dành cho giáo viên phổ thông — 4 buổi](chuong-trinh-dao-tao-ai/02b-giao-vien-pho-thong-4-buoi.md)
- [Chuỗi STEAM đến nghề nghiệp](san-pham/chuoi-steam-den-nghe.md)
- [Vai trò pháp lý và nguyên tắc an toàn](phap-ly/vai-tro-phap-ly.md)

## Nguyên tắc thiết kế

- Chỉ kế thừa chương trình giảng dạy.
- Giáo dục là thị trường tạo dòng tiền và dữ liệu vận hành trước.
- Tổ chức giáo dục là khách hàng và kênh phân phối.
- Doanh nghiệp là thị trường phát triển có chọn lọc, không phải giả định doanh thu nền tháng đầu.
- Xây nền tảng mới theo hướng greenfield, modular và API-first.
- Triển khai lớp ngay với các trường đã sẵn sàng.
- Dùng quy trình thủ công/SaaS tạm thời cho phần MVP chưa có.
- Dữ liệu cốt lõi do dự án kiểm soát.
- Đối tác ngoài đi qua lớp tích hợp và hợp đồng rõ ràng.
- AI hỗ trợ; con người chịu trách nhiệm cuối cùng về nội dung và đánh giá.

## Tài liệu lịch sử và trao đổi

Các file trong `trao-doi/`, `THAO-LUAN.md` và một số tài liệu chiến lược cũ được giữ để truy vết quá trình suy luận. Chúng **không phải nguồn điều hành hiện tại** nếu mâu thuẫn với `AGENTS.md`.