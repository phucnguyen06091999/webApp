import Category from "../components/Category";
import { Link } from "react-router-dom";
import "./Header.css";
import "../Base.css";
import "../fontawesome/css/all.min.css";
import React, { Component, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function Header() {
  const [text, setText] = useState("");
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    // Do api ở đây mình chỉ muốn call 1 lần vào khi load trang này đầu tiên nên ở đây mình để [] trong [] bên dưới đó mình k khai báo
    // muốn mỗi lần thay đổi key text thì sẽ call lại api để trả dữ liệu lại 1 lần
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:8085",
      },
    };
    fetch("http://localhost:8085/api/categorys", options)
      .then((res) => res.json())
      .then((data) => {
        setCategorys(data);
      })
      .catch(console.log);
  }, []);
  console.log(categorys);
  return (
    <div className="grid">
      <header className="header1">
        <div className="grid">
          <nav className="header__navbar">
            <ul className="header__navbar-list">
              <li className="header__navbar-item">
                <Link to={"/"}>
                  <img
                    className="header__navbar-item"
                    src="./images/logo1.png"
                    alt="logo"
                    style={{ width: "160px", height: "60px" }}
                  />
                </Link>
              </li>
              <li className="header__navbar-item">
                <div className="box">
                  <input
                    type="text"
                    placeholder="Search here"
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                  />
                  <a>
                    <i className="fas fa-search-location" />
                  </a>
                </div>
              </li>
            </ul>
            <ul className="header__navbar-list header__navbar-list-right ">
              <Link className="header__navbar-icon-link" to={"/checkout"}>
                <i className="header__navbar-icon fa-solid fa-cart-shopping"></i>
              </Link>
              <li className="header__navbar-item header__navbar-text">
                Giỏ hàng
              </li>

              <Link className="header__navbar-icon-link" to={"/profile"}>
                <i className="header__navbar-icon fa-regular fa-user"></i>
              </Link>

              <li className="header__navbar-item header__navbar-text header__navbar-item--separate">
                <Link className="focus" to={"/login"}>
                  Đăng nhập
                </Link>
              </li>
              <li className="header__navbar-item header__navbar-text">
                <Link className="focus" to={"/register"}>
                  Đăng ký
                </Link>
              </li>
            </ul>
          </nav>
          <nav>
            <div className="category">
              {categorys?.map((item, index) => (
                <Link className="link-category" to={item.cate_href}>
                  <Category
                    key={item.cate_Id}
                    cate_name={item.cate_Name}
                  ></Category>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

//}

export default Header;
