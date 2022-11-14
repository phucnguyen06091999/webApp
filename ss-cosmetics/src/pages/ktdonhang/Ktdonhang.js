import "../../App.css";
import "antd/dist/antd.css";
import { HomeOutlined, RightOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
function Ktdonhang() {
  return (
    <div className="grid">
      <Header></Header>
      <div>
        <HomeOutlined style={{ fontSize: "250%", marginLeft: "20px" }} />

        <Link
          className="cate-name"
          style={{ color: "black", fontWeight: "bold" }}
          to={"/"}
        >
          Trang chủ{" "}
        </Link>
        <RightOutlined style={{ fontSize: "200%" }} />

        <a href=" " className="cate-name" style={{ color: "black" }}>
          Kiểm tra đơn hàng:
        </a>

        <table
          border={1}
          style={{
            width: "100%",
            height: "100%",
            fontSize: "20px",
          }}
        >
          <tr style={{ fontWeight: "bold", textAlign: "center" }}>
            <td>STT</td>
            <td colSpan={2}>SẢN PHẨM</td>
            <td>TỔNG SỐ TIỀN</td>
            <td>TRẠNG THÁI</td>
          </tr>
          <tr>
            <td>&nbsp;1</td>
            <td>
              <img
                style={{ width: "300px", height: "300px" }}
                src="./images/sp1.jpeg"
                alt="anh1"
              />
            </td>
            <td>
              - Nước hoa <br></br>- Phấn mắt
            </td>
            <td>1.9500.000 đ</td>
            <td>Đang giao hàng</td>
          </tr>
          <tr>
            <td> &nbsp;2</td>
            <td>
              <img
                style={{ width: "300px", height: "300px" }}
                src="./images/sp3.jpeg"
                alt="anh1"
              />
            </td>
            <td>
              - Nước hoa hồng <br></br>- Phấn má hồng
            </td>
            <td>9500.000 đ</td>
            <td>Đang chờ xác nhận</td>
          </tr>
        </table>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Ktdonhang;
