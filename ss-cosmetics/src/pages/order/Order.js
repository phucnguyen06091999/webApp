/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Order.css";
import { Link } from "react-router-dom";
// import logo1 from "../assets/logo1.jpg";
class Order extends React.Component {
  render() {
    return (
      <>
        <div className="container-p">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
              <div className="user-form-logo-p">
                <h2>Thông Tin Đặt Hàng</h2>
              </div>
              <div className="order-detail-p">
                <div className="user-form-card1">
                  <form className="user-form-p">
                    <div className="form-group-left">
                      <p style={{ fontSize: "25px", marginBottom: "10px" }}>
                        Thông Tin Mua Hàng
                      </p>
                      <div className="form-group-p">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Họ tên(*)"
                        />
                      </div>
                      <div className="form-group-p">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email(*)"
                        />
                      </div>
                      <div className="form-group-p">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Số điện thoại(*)"
                        />
                      </div>
                      <div className="form-group-p">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Tỉnh/Thành phố(*)"
                        />
                      </div>
                      <div className="form-group-p">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Quận/Huyện(*)"
                        />
                      </div>
                      <div className="form-group-p">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Xã/Phường(*)"
                        />
                      </div>
                    </div>
                    <div className="form-group-right">
                      <div className="form-cart">
                        <p style={{ fontSize: "25px", marginBottom: "10px" }}>
                          Xem giỏ hàng
                        </p>
                      </div>
                      <div className="form-group-p">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Tạm tính"
                        />
                      </div>

                      <div className="form-group-sale-left">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Mã giảm giá/ Quà tặng"
                        />
                      </div>
                      <div className="form-group-sale-right">
                        <div className="form-button-1">
                          <button type="submit">Áp dụng</button>
                        </div>
                      </div>

                      <div className="form-group-title-p">
                        Chọn hình thức thanh toán
                      </div>
                      <div className="form-group-img">
                        <tr>
                          <img
                            class="form-group-img-chil"
                            src="https://static.mservice.io/img/logo-momo.png"
                            alt=""
                          />
                        </tr>

                        <tr>
                          <img
                            class="form-group-img-chil"
                            src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
                            alt=""
                          />
                        </tr>
                        <tr>
                          <img
                            class="form-group-img-chil"
                            src="https://gutina.vn/asset/admins/upload/images/Gutina/GuT12/GuT12.21/lam-lai-the-ngan-hang-01.jpg"
                            alt=""
                          />
                        </tr>
                      </div>
                      <div class="form-group-title-p">Thành tiền</div>
                      <div className="form-group-p">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Đã bao gồm VAT nếu có"
                        />
                      </div>
                      <div className="form-button-p">
                        <button type="submit">
                          <Link className="form-p" to={"/"}>
                            Đặt mua
                          </Link>{" "}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Order;
