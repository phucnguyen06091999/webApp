/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
// import logo1 from "../assets/logo1.jpg";
class Register extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-10 col-md-12 col-lg-12">
              <div className="user-form-logo">
                <Link to={"/"}>
                  <img
                    src="./images/logo1.png"
                    alt="1"
                    style={{ margin: "10px", padding: "10px", width: "400px" }}
                  />
                </Link>
              </div>
              <div className="user-form-card">
                <div className="user-form-title">
                  <h2>Tham gia ngay!</h2>
                  <p className="user-register">
                    Nhập thông tin để tạo tài khoản
                  </p>
                </div>
                <form className="user-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Họ tên"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Số điện thoại"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Mật khẩu"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Nhập lại mật khẩu"
                    />
                  </div>
                  <div className="form-button">
                    <button type="submit">Đăng ký</button>
                  </div>
                </form>
              </div>
              <div className="user-form-remind">
                <p className="user-register">
                  Bạn đã có tài khoản?{" "}
                  <Link className="user-register" to={"/login"}>
                    Đăng nhập
                  </Link>
                </p>
              </div>

              {/* <Link to={/"login"}>Đăng nhập</Link> */}
              <div className="user-form-footer">
                <p className="user-register-copy">
                  &copy; Bản quyền thuộc về SamSung Cosmetic
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <ChildComponent></ChildComponent> */}
      </>
    );
  }
}
export default Register;
