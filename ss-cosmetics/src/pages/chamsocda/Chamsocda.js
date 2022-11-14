import "../../App.css";
import Item from "../../components/Item";
import { ProData } from "../../data";
import "antd/dist/antd.css";
import { HomeOutlined, RightOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

import Footer from "../../footer/Footer";
import Header from "../../header/Header";
function Chamsocda() {
  return (
    <div className="grid">
      <div>
        <Header></Header>
      </div>
      <div>
        <table style={{ width: "100%" }}>
          <tr style={{ marginBottom: "20px" }}>
            <td colSpan="4" style={{ textAlign: "left" }}>
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
                Chăm sóc da
              </a>
            </td>
          </tr>
          <tr>
            <div className="pro-list">
              {ProData.map((item, index) => {
                // eslint-disable-next-line eqeqeq
                if (item.cate_id == 3) {
                  return (
                    <Item
                      key={item.pr_id}
                      image={item.pr_image || "./images/default_image.jpg"}
                      price={item.pr_price}
                      name={item.pr_name}
                      brand={item.pr_brand}
                    ></Item>
                  );
                }
              })}
            </div>
          </tr>
        </table>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default Chamsocda;
