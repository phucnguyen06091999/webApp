import "antd/dist/antd.css";
import { HomeOutlined, RightOutlined } from "@ant-design/icons";
import "../../App.css";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
function Gioithieu() {
  return (
    <div className="grid">
      <div>
        <Header></Header>
      </div>
      <div>
        <table style={{ width: "100%" }}>
          <tr>
            <td colSpan="4" style={{ textAlign: "left" }}>
              <HomeOutlined
                style={{
                  fontSize: "250%",
                  marginLeft: "0px",
                }}
              />

              <Link
                className="cate-name"
                style={{ color: "black", fontWeight: "bold" }}
                to={"/"}
              >
                Trang chủ{" "}
              </Link>
              <RightOutlined style={{ fontSize: "200%" }} />

              <a href=" " className="cate-name" style={{ color: "black" }}>
                Giới thiệu:
              </a>
            </td>
          </tr>
          <tr>
            <td style={{ width: "500px" }}>
              <h2 style={{ fontWeight: "bold" }}> THÔNG TIN: </h2>
              <a href="a" alt="pp">
                {"Giới thiệu SamSung"}
              </a>
              <br></br>
              <br></br>
              <a href="a" alt="pp">
                {"Danh sách cửa hàng"}
              </a>
              <br></br>
              <br></br>
              <a href="a" alt="pp">
                {"Khách hàng thân thiết"}
              </a>
              <br></br>
              <br></br>
              <a href="a" alt="pp">
                {"Hướng dẫn đặt hàng"}
              </a>
              <br></br>
              <br></br>
              <a href="a" alt="pp">
                {"Chính sách đổi trả"}
              </a>
              <br></br>
              <br></br>
              <a href="a" alt="pp">
                {"Chính sách bảo mật"}
              </a>
              <br></br> <br></br>
              <br></br> <br></br> <br></br>
              <h2 style={{ fontWeight: "bold" }}> CÂU HỎI THƯỜNG GẶP: </h2>
              <a href="a" alt="pp">
                {"Tài khoản"}{" "}
              </a>
              <br></br>
              <br></br>
              <a href="a" alt="pp">
                {"Phí vận chuyển"}
              </a>
              <br></br>
              <br></br>
              <a href="a" alt="pp">
                {"Hướng dẫn mua hàng"}
              </a>
            </td>
            <td
              colSpan="4"
              style={{
                textAlign: "center",
                width: "1190px",
              }}
            >
              <img
                src="./images/logo1.png"
                alt="1"
                style={{ margin: "30px", padding: "30px" }}
              />
              <p
                style={{
                  fontStyle: "italic",
                  fontSize: "21px",

                  marginRight: "50px",
                  textAlign: "left",
                }}
              >
                &nbsp;&nbsp; Mới đây các tín đồ làm đẹp lại được 1 phen xôn xao
                khi SamSung chính thức khai chương cửa hàng tiếp theo tại khu đô
                thị mới Vincom Ocean Park. SamSung đã “vượt mặt” nhiều đối thủ
                cạnh tranh và trở thành đối tác chiến lược của Vincom với không
                gian lên đến hàng trăm mét vuông đầy ắp mỹ phẩm đa dạng từ dưỡng
                da cho đến trang điểm phải lên đến vài nghìn mã hàng. Thiết kế
                của SamSung luôn có 1 chất rất riêng theo hơi hướng hiện đại,
                sang trọng, không gian rộng rãi. Cách bày trí đẹp mắt chia thành
                từng gian hàng riêng như gian của NYX, Maybelline New York,
                Vichy, L’Oreal Paris... Các sản phẩm skincare và make up lần
                lượt được bày trí khoa học, có biển chỉ dẫn các khu sản phẩm
                riêng rất chuyên nghiệp giúp các bạn dễ tìm kiếm, một lần nữa
                “đốn tim” mọi cô gái khi bước chân đến đây. Tại Việt Nam hiện
                nay, SamSung là một trong những store mỹ phẩm tiên phong trong
                lĩnh vực làm đẹp với nhiều sản phẩm mỹ phẩm nhập khẩu đa dạng.
                Các sản phẩm từ Âu đến Hàn, Pháp, Anh . Không những thế, SamSung
                còn là đối tác của Christian Lenart, Bioderma, Maybelline New
                York , Vichy, Laroche Posay, Senka… và tất nhiên, giấy tờ đều
                được cấp từ cơ quan có thẩm quyền. SamSung cũng cho biết tất cả
                hàng hóa đều được nhập trực tiếp từ các nhãn hàng, vận chuyển rõ
                ràng, minh bạch. Các bạn hoàn toàn có thể yên tâm đến showroom
                SamSung tìm kiếm những sản phẩm chính hãng và chất lượng với đội
                tư vấn siêu nhiệt tình, chuyên nghiệp,“cute” ở shop.
              </p>
            </td>
          </tr>
        </table>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default Gioithieu;
