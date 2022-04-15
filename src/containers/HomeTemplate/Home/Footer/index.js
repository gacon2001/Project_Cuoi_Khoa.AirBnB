import React from "react";
import 'containers/scss/Layouts/_footer.scss';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h4>Hỗ trợ</h4>
            <ul>
              <li>Trung tâm trợ giúp</li>
              <li>Thông tin an toàn</li>
              <li>Các tùy chọn hủy</li>
              <li>Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</li>
              <li>Hỗ trợ người khuyết tật</li>
              <li>Báo cáo lo ngại của hàng xóm</li>
            </ul>
          </div>
          <div className="col-3">
            <h4>Cộng đồng</h4>
            <ul>
              <li>Airbnb.org: nhà ở cứu trợ</li>
              <li>Hỗ trợ dân tị nạn Afghanistan</li>
              <li>Chống phân biệt đối xử</li>
            </ul>
          </div>
          <div className="col-3">
            <h4>Đón tiếp khách</h4>
            <ul>
              <li>Thử đón tiếp khách</li>
              <li>AirCover: bảo vệ cho Host</li>
              <li>Xem tài nguyên đón tiếp khách</li>
              <li>Truy cập diễn đàn cộng đồng</li>
              <li>Đón tiếp khách có trách nhiệm</li>
            </ul>
          </div>
          <div className="col-3">
            <h4>Giới thiệu</h4>
            <ul>
              <li>Trang tin tức</li>
              <li>Tìm hiểu các tính năng mới</li>
              <li>Thư ngỏ từ các nhà sáng lập</li>
              <li>Cơ hội nghề nghiệp</li>
              <li>Nhà đầu tư</li>
              <li>Airbnb Luxe</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
