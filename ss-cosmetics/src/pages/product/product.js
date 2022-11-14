/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import "./product.css";

import {
  ShoppingCartOutlined,
  ShoppingOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
class Product extends React.Component {
  render() {
    return (
      <>
        <div className="inner-section">
          <div className="container2">
            <div className="row2">
              <div className="col-lg-6">
                <div className="details-gallery">
                  <ul className="details-preview">
                    <li>
                      <img src="./images/sp2.jpeg" alt="product" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="details-content">
                  <h3 className="details-name">
                    <a>Innisfree</a>
                  </h3>
                  <h3 className="details-name">
                    <a>
                      Kem chống nắng Innisfree Intensive Long Lasting Suncreen
                      EX
                    </a>
                  </h3>
                  <p className="details-desc">Mã SP: 8809652903293</p>
                  <h3 className="details-price">
                    <span>195.000 vnđ</span> <span> (Đã bao gồm VAT)</span>
                  </h3>
                  <p className="details-desc">
                    <img
                      src="./images/sp2.jpeg"
                      style={{ width: "50px", height: "50px" }}
                      alt="product"
                    />
                  </p>
                  <p className="details-desc">
                    Số lượng:
                    <label className="details-label new"> &nbsp;1</label>
                  </p>
                  <p className="details-desc">
                    Tình trạng:
                    <label className="details-label new"> &nbsp;Còn hàng</label>
                    <label className="details-label off">
                      / <del>Hết hàng</del>
                    </label>
                  </p>
                  <div className="details-add-group">
                    <button className="product-add" title="Add to Cart">
                      <ShoppingCartOutlined />
                      <Link to={"/checkout"}>
                        <p className="pr-cart"> &nbsp;Giỏ hàng</p>
                      </Link>
                    </button>
                  </div>
                  <div className="details-add-group">
                    <button className="product-add" title="Add to Cart">
                      <ShoppingOutlined />
                      <Link to={"/order"}>
                        <p className="pr-cart"> &nbsp;Mua ngay</p>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inner-section">
          <div className="container2">
            <div className="row2">
              <div className="col-lg-12">
                <div className="product-details-frame">
                  <h3 className="frame-title">Thông tin sản phẩm</h3>
                  <div className="tab-descrip">
                    <p className="details-desc">Thương hiệu: Innisfree</p>
                    <p className="details-desc">Mô tả: 21 x 10 x 17,5</p>
                    <p>Ảnh sản phẩm:</p>
                    <p className="gr-pr_image">
                      <img
                        className="pr_image"
                        style={{ width: "200px" }}
                        src="./images/sp2.jpeg"
                        alt=""
                      />
                      <img
                        className="pr_image"
                        style={{ width: "200px" }}
                        src="https://cdn.cocolux.com/2021/04/products/1619254863761-kem-chong-nang-innisfree-intensive.jpeg"
                        alt=""
                      />
                      <img
                        className="pr_image"
                        style={{ width: "200px" }}
                        src="https://cdn.cocolux.com/2021/08/images/products/1628474641542-kem-chong-nang-innisfree.png"
                        alt=""
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </>
    );
  }
}
export default Product;
