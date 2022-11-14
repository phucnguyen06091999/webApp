/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  Breadcrumb,
  Button,
  Col,
  Popconfirm,
  Popover,
  Row,
  Space,
  Table,
  Tooltip,
} from "antd";
import {
  FolderViewOutlined,
  DeleteOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import "./Checkout.css";
import { Link } from "react-router-dom";
// import logo1 from "../assets/logo1.jpg";
class Checkout extends React.Component {
  render() {
    return (
      <div className="container1">
        <div className="row">
          <div className="alert-info">
            <div className="account-card">
              <div className="account-title">
                <h3>Giỏ hàng của bạn</h3>
              </div>
              <div className="account-content">
                <div className="table-scroll">
                  <table className="table-list">
                    <tr className="row1">
                      <th scope="col">STT</th>
                      <th scope="col">Ảnh</th>
                      <th scope="col">Tên</th>
                      <th scope="col">Giá</th>
                      <th scope="col">Số lượng</th>
                      <th scope="col">Thành tiền</th>
                      <th scope="col">Hành động</th>
                    </tr>

                    <tr>
                      <td cclassName="table-serial">
                        <h4>01</h4>
                      </td>
                      <td className="table-image">
                        <img
                          src="./images/sp1.jpeg"
                          style={{ width: "150px", height: "120px" }}
                          alt="product"
                        />
                      </td>
                      <td className="table-name">
                        <h4>Nước hoa Jimmy Choo</h4>
                      </td>
                      <td className="table-price">
                        <h4>1.350.000vnđ</h4>
                      </td>
                      <td className="table-quantity">
                        <div
                          className="cart-action-group"
                          style={{ textAlign: "center" }}
                        >
                          <div className="action-minus" title="Quantity Minus">
                            <button
                              className="action-minus"
                              title="Quantity Minus"
                            >
                              <MinusOutlined />
                            </button>
                            <input
                              style={{ textAlign: "center", marginTop: "5px" }}
                              className="action-input"
                              title="Quantity Number"
                              type="text"
                              name="quantity"
                              value="1"
                            />
                            <button
                              className="action-plus"
                              title="Quantity Plus"
                            >
                              <PlusOutlined />
                            </button>
                          </div>
                        </div>

                        {/* <div
                          className="cart-action-group"
                          style={{ textAlign: "center" }}
                        >
                          <div className="product-action">
                            <button
                              className="action-minus"
                              title="Quantity Minus"
                            >
                              <i className="icofont-minus"></i>
                              <MinusOutlined />
                            </button>
                            <input
                              className="action-input"
                              title="Quantity Number"
                              type="text"
                              name="quantity"
                              value="1"
                            />
                            <button
                              className="action-plus"
                              title="Quantity Plus"
                            >
                              <i className="icofont-plus"></i>
                              <PlusOutlined />
                            </button>
                          </div>
                        </div> */}
                      </td>
                      <td className="table-price">
                        <h4>1.350.000vnđ</h4>
                      </td>
                      <td className="table-action">
                        {/* <a
                            className='view'
                            href="1"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                            ><i className='fas fa-eye'></i></a
                          ><a class="trash" href="1" title="Remove Wishlist"
                            ><i class="icofont-trash"></i
                          ></a> */}
                        <Popover>
                          <FolderViewOutlined
                            style={{
                              background: "green",
                              borderRadius: 3,
                              fontSize: "12px",
                              color: "white",
                              padding: 5,
                              border: "1px solid green",
                            }}
                          />
                        </Popover>
                        <Popover content={<h4> Xóa sản phẩm</h4>}>
                          <DeleteOutlined
                            style={{
                              background: "rgb(240, 65, 52)",
                              borderRadius: 3,
                              fontSize: "12px",
                              color: "white",
                              padding: 5,
                              border: "1px solid rgb(240, 65, 52)",
                            }}
                          />
                        </Popover>
                      </td>
                    </tr>
                    <tr>
                      <td className="table-serial">
                        <h4>02</h4>
                      </td>
                      <td className="table-image">
                        <img
                          src="./images/sp2.jpeg"
                          style={{ width: "150px", height: "120px" }}
                          alt="product"
                        />
                      </td>
                      <td className="table-name">
                        <h4>Mặt nạ đất sét innisfree</h4>
                      </td>
                      <td className="table-price">
                        <h4>235.000vnđ</h4>
                      </td>
                      <td className="table-quantity">
                        <div
                          className="cart-action-group"
                          style={{ textAlign: "center" }}
                        >
                          <div className="action-minus" title="Quantity Minus">
                            <button
                              className="action-minus"
                              title="Quantity Minus"
                            >
                              <MinusOutlined />
                            </button>
                            <input
                              style={{ textAlign: "center", marginTop: "5px" }}
                              className="action-input"
                              title="Quantity Number"
                              type="text"
                              name="quantity"
                              value="2"
                            />
                            <button
                              className="action-plus"
                              title="Quantity Plus"
                            >
                              <PlusOutlined />
                            </button>
                          </div>
                        </div>
                        {/* <div
                          className="cart-action-group"
                          // style="justify-content: center"
                        >
                          <div className="product-action">
                            <button
                              className="action-minus"
                              title="Quantity Minus"
                            >
                              <i className="icofont-minus"></i>
                              <MinusOutlined />
                            </button>
                            <input
                              className="action-input"
                              title="Quantity Number"
                              type="text"
                              name="quantity"
                              value="2"
                            />
                            <button
                              className="action-plus"
                              title="Quantity Plus"
                            >
                              <PlusOutlined />
                            </button>
                          </div>
                        </div> */}
                      </td>
                      <td className="table-price">
                        <h4>470.000vnđ</h4>
                      </td>
                      <td className="table-action">
                        {/* <a
                            className='view'
                            href="1"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                            ><i className='fas fa-eye'></i></a
                          ><a class="trash" href="1" title="Remove Wishlist"
                            ><i className='icofont-trash'></i
                          ></a> */}
                        <Popover>
                          <FolderViewOutlined
                            style={{
                              background: "green",
                              borderRadius: 3,
                              fontSize: "12px",
                              color: "white",
                              padding: 5,
                              border: "1px solid green",
                            }}
                          />
                        </Popover>

                        <Popover content={<h3> Xóa sản phẩm</h3>}>
                          <DeleteOutlined
                            style={{
                              background: "rgb(240, 65, 52)",
                              borderRadius: 3,
                              fontSize: "12px",
                              color: "white",
                              padding: 5,
                              border: "1px solid rgb(240, 65, 52)",
                            }}
                          />
                        </Popover>
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="checkout-charge mt-5 mb-3">
                  <ul>
                    <li>
                      <span className="count-title" >Tổng số tiền :</span>
                      <span className="count-title" > 1.820.000vnđ</span>
                    </li>
                  </ul>
                </div>
                <div className="checkout-proced">
                  {/* <button className='btn btn-inline' type={'button'}>Tiến hành đặt hàng</button> */}
                  <Link to={"/order"} className="btn btn-inline btn-inline-title">
                    Tiến hành đặt hàng
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Checkout;
