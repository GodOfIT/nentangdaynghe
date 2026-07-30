# Nền tảng dạy nghề trực tuyến

Repo ghi lại chiến lược, sản phẩm và kế hoạch triển khai nền tảng đào tạo AI, Vibe Coding, STEAM và giáo dục nghề nghiệp.

> **Quy tắc quan trọng:** đọc [AGENTS.md](AGENTS.md) trước mọi tài liệu khác.
>
> Dự án chỉ kế thừa các chương trình giảng dạy do anh Đức đã soạn. Nền tảng, source code, dữ liệu, workflow và hạ tầng được xây mới hoàn toàn.
>
> SOPai, Arkon và henlich.vn không thuộc kiến trúc hoặc kế hoạch hiện hành.

## Định vị

> Nền tảng công nghệ, đào tạo, đánh giá năng lực và điều phối dữ liệu giúp nhà trường triển khai các chương trình có sản phẩm đầu ra.

Các hướng triển khai năm đầu:

- Ứng dụng AI theo khung năng lực.
- Vibe Coding.
- AI cho giáo viên và giảng viên.
- AI cho doanh nghiệp.
- Cấp quyền chương trình và nền tảng.
- Đào tạo giáo viên triển khai STEAM và các môn mới theo đơn đặt hàng.

## Điểm xuất phát

- Đã có các trường/cơ sở giáo dục sẵn sàng phối hợp.
- Đã có các chương trình giảng dạy cốt lõi.
- Không bắt đầu từ bước tìm trường đầu tiên.
- Lớp học được triển khai song song với việc xây nền tảng mới.

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

## Tài liệu điều hành ưu tiên

1. [AGENTS.md — nguồn sự thật điều hành](AGENTS.md)
2. [Mục tiêu tháng đầu](ke-hoach/muc-tieu-thang-1.md)
3. [Kế hoạch kinh doanh và triển khai 12 tháng](ke-hoach/ke-hoach-kinh-doanh-12-thang.md)
4. [Mô hình nền tảng greenfield](nen-tang/mo-hinh-nen-tang.md)
5. [Khung hợp tác với Grapuco](docs/doi-tac-grapuco.md)
6. [Unit economics](ke-hoach/unit-economics.md)
7. [Chi phí, dòng tiền và vốn lưu động](ke-hoach/chi-phi-va-dong-tien.md)
8. [Thế mạnh và nguyên tắc lập kế hoạch](docs/the-manh-du-an.md)
9. [Định hướng AI trong đào tạo giáo viên năm 2026](docs/dinh-huong-ai-trong-dao-tao-giao-vien-2026.md)

## Chương trình và sản phẩm

- [Danh mục sản phẩm đào tạo](san-pham/danh-muc-san-pham-dao-tao.md)
- [Chuỗi STEAM đến nghề nghiệp](san-pham/chuoi-steam-den-nghe.md)
- [Mô hình doanh thu](docs/mo-hinh-doanh-thu.md)
- [Vai trò pháp lý và nguyên tắc an toàn](phap-ly/vai-tro-phap-ly.md)

## Tài liệu lịch sử và trao đổi

Các file trong `trao-doi/`, `THAO-LUAN.md` và một số tài liệu chiến lược cũ được giữ để truy vết quá trình suy luận. Chúng **không phải nguồn điều hành hiện tại** nếu mâu thuẫn với `AGENTS.md`.

## Nguyên tắc thiết kế

- Chỉ kế thừa chương trình giảng dạy.
- Xây nền tảng mới theo hướng greenfield, modular và API-first.
- Triển khai lớp ngay với các trường đã sẵn sàng.
- Dùng quy trình thủ công/SaaS tạm thời cho phần MVP chưa có.
- Dữ liệu cốt lõi do dự án kiểm soát.
- Đối tác ngoài đi qua lớp tích hợp và hợp đồng rõ ràng.
- Grapuco là add-on cho Vibe Coding và phát triển codebase, không phải điểm lỗi duy nhất.
- AI hỗ trợ; con người chịu trách nhiệm cuối cùng về nội dung và đánh giá.
