import React from "react";

import "./Login.css";
import { Link } from "react-router-dom";
// import logo1 from "../assets/logo1.jpg";
class Login extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="content">
            <div className="user-form-logo">
              <div className="logo">
                <Link to={"/"}>
                  <img
                    src="./images/logo1.png"
                    alt="1"
                    style={{ margin: "10px", padding: "10px", width: "400px" }}
                  />
                </Link>
              </div>
            </div>
            <div className="user-form-card">
              <div className="user-form-title">
                <h2 className="h22">Xin chào!</h2>
                <p className="user-login">Nhập đúng thông tin để đăng nhập</p>
              </div>
              <form className="user-form">
                <div className="form-group">
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
                <div className="form-group">
                  <input
                    type={"password"}
                    className="form-control"
                    placeholder="Nhập mật khẩu"
                  />
                </div>
                <div className="form-button">
                  <button className="form-control" type={"submit"}>
                    <Link
                      to={"/"}
                      style={{
                        fontSize: "20px",
                        color: "white",
                        marginTop: "-7px",
                      }}
                    >
                      Đăng nhập
                    </Link>
                  </button>
                </div>
              </form>
            </div>
            <div className="user-form-remind">
              <p className="user-login">
                Bạn chưa có tài khoản?
                <Link to={"/Register"} style={{ fontSize: "14px" }}>
                  Đăng ký
                </Link>
              </p>
            </div>
            <div className="user-form-footer">
              <p className="user-login">
                &copy; Bản quyền thuộc về SamSung Cosmetic
              </p>
            </div>
          </div>
        </div>
        {/* <ChildComponent></ChildComponent> */}
      </>
    );
  }
}
export default Login;
