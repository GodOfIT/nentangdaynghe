# Nền tảng dạy nghề trực tuyến

Repo ghi lại chiến lược, sản phẩm và kế hoạch triển khai nền tảng đào tạo AI, Vibe Coding, STEAM và giáo dục nghề nghiệp.

> **Đọc [AGENTS.md](AGENTS.md) trước mọi tài liệu khác.**
>
> Dự án chỉ kế thừa các chương trình giảng dạy do anh Đức đã soạn. Nền tảng, source code, dữ liệu, workflow và hạ tầng được xây mới hoàn toàn.
>
> SOPai, Arkon và henlich.vn không thuộc kiến trúc hoặc kế hoạch hiện hành.

## Định vị

> Nền tảng công nghệ, đào tạo, đánh giá năng lực và điều phối dữ liệu giúp trường học, doanh nghiệp, trung tâm và người học triển khai các chương trình có sản phẩm đầu ra.

## Chiến lược thị trường

Dự án áp dụng chiến lược **program-first, đa kênh**.

Một chương trình có thể được triển khai cho:

- trường đại học, cao đẳng, trung cấp và phổ thông;
- doanh nghiệp và các phòng ban;
- trung tâm hoặc tổ chức đào tạo;
- lớp cộng đồng;
- người đi làm.

Điều chỉnh theo từng phân khúc nằm ở tình huống, sản phẩm đầu ra, dữ liệu, thời lượng, quy mô, hình thức tổ chức và giá; không mặc định phải xây một khóa hoàn toàn mới.

Các trường đã sẵn sàng là lợi thế triển khai ban đầu, nhưng doanh nghiệp không bị đẩy sang giai đoạn sau. Các khóa đào tạo tiêu chuẩn có thể bán trực tiếp cho doanh nghiệp; chỉ dự án tư vấn hoặc triển khai hệ thống riêng mới cần khảo sát, pilot và nghiệm thu kỹ thuật.

## Vibe Coding

Vibe Coding là một chương trình đào tạo thông thường, có thể tổ chức cho:

- sinh viên và học sinh;
- giáo viên và giảng viên;
- người đi làm;
- doanh nghiệp;
- lớp cộng đồng.

Khóa học có thể bắt đầu bằng AI coding tool, GitHub, môi trường chạy và rubric. Không cần chờ nền tảng mới, Path Engine hoặc Grapuco.

Grapuco là **đối tác công nghệ bên ngoài** và là add-on tùy chọn để hỗ trợ codebase map, dependency, call graph, flow, spec-first và context cho AI coding tools. Nền tảng và khóa học vẫn phải vận hành khi Grapuco chưa tích hợp hoặc gián đoạn.

Xem [Khung hợp tác với Grapuco](docs/doi-tac-grapuco.md).

## Đào tạo không phụ thuộc nền tảng

Các lớp đầu có thể vận hành bằng:

- Google Forms và Sheets;
- Google Drive;
- Zoom hoặc Google Meet;
- Zalo hoặc email;
- GitHub và công cụ AI coding;
- Notion, Trello hoặc LMS/SaaS tạm thời.

Dữ liệu phải được lưu có cấu trúc để import hoặc migrate lên nền tảng sau. Không được trì hoãn khai giảng chỉ vì phần mềm chưa sẵn sàng.

## Quy tắc định giá

Giá, phạm vi, đầu ra, trách nhiệm và lịch thanh toán phải được chốt trước khi mở bán hoặc gửi proposal.

Tuần 4 chỉ dùng để đối chiếu giá với chi phí thật và điều chỉnh cho đợt tiếp theo. Không để tới tuần 4 mới định giá khóa 4 buổi hay bất kỳ khóa đã bán nào.

## Các hướng triển khai năm đầu

- Ứng dụng AI theo khung năng lực.
- Vibe Coding.
- AI cho giáo viên và giảng viên.
- AI cho doanh nghiệp và các phòng ban.
- Cấp quyền chương trình và nền tảng.
- Đào tạo giảng viên nguồn và AI+ / AIx.
- STEAM và các môn mới theo đơn đặt hàng.
- Workshop, lớp cộng đồng và chương trình theo nhu cầu.

## Điểm xuất phát

- Đã có các trường/cơ sở giáo dục sẵn sàng phối hợp.
- Đã có các chương trình giảng dạy cốt lõi.
- Có thể đào tạo cho cả trường, doanh nghiệp và cộng đồng ngay từ đầu.
- Không bắt đầu từ bước tìm trường đầu tiên.
- Lớp học được triển khai song song với việc xây nền tảng mới.
- Nền tảng không phải điều kiện khai giảng.

## Nghiên cứu TUMO

- [Nghiên cứu mô hình kinh doanh, vận hành giáo dục và công nghệ TUMO](docs/nghien-cuu-tumo-mo-hinh-kinh-doanh-va-cong-nghe.md)
- [Phương án triển khai kỹ thuật học từ mô hình TUMO](nen-tang/phuong-an-trien-khai-ky-thuat-hoc-tu-tumo.md)

TUMO được dùng làm mô hình tham chiếu về learning path, portfolio, coach, hub–node và cấp quyền. Dự án không sao chép thương hiệu, nội dung hoặc phần mềm sở hữu trí tuệ của TUMO.

## Tài liệu điều hành ưu tiên

1. [AGENTS.md — nguồn sự thật điều hành](AGENTS.md)
2. [Kế hoạch triển khai kinh doanh song song kỹ thuật](ke-hoach/ke-hoach-trien-khai-kinh-doanh-va-ky-thuat-song-song.md)
3. [Mục tiêu tháng đầu](ke-hoach/muc-tieu-thang-1.md)
4. [Kế hoạch kinh doanh và triển khai 12 tháng](ke-hoach/ke-hoach-kinh-doanh-12-thang.md)
5. [Mô hình doanh thu](docs/mo-hinh-doanh-thu.md)
6. [Unit economics](ke-hoach/unit-economics.md)
7. [Chi phí, dòng tiền và vốn lưu động](ke-hoach/chi-phi-va-dong-tien.md)
8. [Mô hình nền tảng greenfield](nen-tang/mo-hinh-nen-tang.md)
9. [Phương án triển khai kỹ thuật học từ TUMO](nen-tang/phuong-an-trien-khai-ky-thuat-hoc-tu-tumo.md)
10. [Danh mục sản phẩm đào tạo](san-pham/danh-muc-san-pham-dao-tao.md)
11. [Khung hợp tác với Grapuco](docs/doi-tac-grapuco.md)

## Chương trình nổi bật

- [Danh mục sản phẩm đào tạo](san-pham/danh-muc-san-pham-dao-tao.md)
- [AI dành cho giáo viên phổ thông — 12 buổi](chuong-trinh-dao-tao-ai/02-giao-vien-pho-thong.md)
- [AI dành cho giáo viên phổ thông — 4 buổi](chuong-trinh-dao-tao-ai/02b-giao-vien-pho-thong-4-buoi.md)
- [Chuỗi STEAM đến nghề nghiệp](san-pham/chuoi-steam-den-nghe.md)
- [Vai trò pháp lý và nguyên tắc an toàn](phap-ly/vai-tro-phap-ly.md)

## Nguyên tắc thiết kế

- Chỉ kế thừa chương trình giảng dạy.
- Một chương trình có thể bán qua nhiều kênh.
- Vibe Coding là khóa học thông thường.
- Trường, doanh nghiệp, trung tâm và cộng đồng đều là khách hàng hợp lệ.
- Giá phải có trước bán.
- Lớp có thể chạy ngoài nền tảng trong giai đoạn đầu.
- Dữ liệu vận hành tạm thời phải có cấu trúc để migrate.
- Nền tảng được xây greenfield, modular và API-first.
- Dữ liệu cốt lõi do dự án kiểm soát.
- Đối tác ngoài đi qua lớp tích hợp và hợp đồng rõ ràng.
- AI hỗ trợ; con người chịu trách nhiệm cuối cùng.

## Tài liệu lịch sử và trao đổi

Các file trong `trao-doi/`, `THAO-LUAN.md` và một số tài liệu cũ được giữ để truy vết. Chúng không phải nguồn điều hành hiện tại nếu mâu thuẫn với `AGENTS.md`.