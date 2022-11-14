/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
// import logo1 from "../assets/logo1.jpg";
class Profile extends React.Component {
  render() {
    return (
      <>
        <div className="main-wrapper">
          <div className="sidebar" id="sidebar">
            <div className="sidebar-logo">
              <Link to={"/"}>
                <img
                  className="img-fluid"
                  src="./images/logo1.png"
                  alt="logo"
                  style={{ width: "160px", height: "60px" }}
                />
              </Link>
            </div>
            <div className="sidebar-inner slimscroll">
              <div id="sidebar-menu" className="sidebar-menu">
                <ul>
                  <li className="active">
                    <a href="dashboard.html">
                      <img
                        src="../image/profile.png"
                        className="img-fluid"
                        alt=""
                      />{" "}
                      <span>Tên user</span>
                    </a>
                  </li>
                  <li>
                    <Link to={"/profile"}>
                      <span>Thông tin tài khoản</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/changepass"}>
                      <span>Đổi mật khẩu</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <span>Đăng xuất</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="page-wrapper">
            <div className="content">
              <div className="row">
                <div className="col1">
                  <div className="page-header">
                    <div className="row">
                      <div className="col">
                        <h3 className="page-title">
                          Thay đổi thông tin cá nhân
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-body">
                      <form action="products.html">
                        <div className="form-group">
                          <label>Họ tên</label>
                          <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                          <label>Ngày sinh</label>
                          <input className="form-control" type="text" />
                        </div>

                        <div className="form-group">
                          <label>Email</label>
                          <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                          <label>Số điện thoại</label>
                          <input className="form-control" type="text" />
                        </div>
                        <div className="mt-4">
                          <button className="btn" type="submit">
                            Lưu lại
                          </button>
                          <button className="btn" type="submit">
                            Huỷ bỏ
                          </button>
                          {/* <a href="products.html" className="btn-link">
                            Huỷ bỏ
                          </a> */}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Profile;
