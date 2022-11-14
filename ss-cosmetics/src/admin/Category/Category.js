/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Category.css";

// import logo1 from "../assets/logo1.jpg";
class Category extends React.Component {
  render() {
    return (
      <>
      <div>
        <div className="main-wrapper">
          {/* Header */}
          <div className="header">
            <div className="header-left">
              <a href="dashboard.html" className="logo logo-small">
                <img src="assets/img/logo-icon.png" alt="Logo" width={30} height={30} />
              </a>
            </div>
            <a href="javascript:void(0);" id="toggle_btn">
              <i className="fas fa-align-left" />
            </a>
            <a className="mobile_btn" id="mobile_btn" href="javascript:void(0);">
              <i className="fas fa-align-left" />
            </a>
            <ul className="nav user-menu">
              {/* User Menu */}
              <li className="nav-item dropdown">
                <a href="javascript:void(0)" className="dropdown-toggle user-link nav-link" data-toggle="dropdown">
                  <span className="user-img">
                    <img className="rounded-circle" src="assets/img/user.jpg" width={40} alt="Admin" />
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="index.html">Đăng xuất</a>
                </div>
              </li>
              {/* /User Menu */}
            </ul>
          </div>
          {/* /Header */}
          {/* Sidebar */}
          <div className="sidebar" id="sidebar">
            <div className="sidebar-logo">
              <a href="dashboard.html">
                <img src="https://sablanca.vn/Images/logo_sab.png" className="img-fluid" alt="" />
              </a>
            </div>
            <div className="sidebar-inner slimscroll">
              <div id="sidebar-menu" className="sidebar-menu">
                <ul>
                  <li className="active">
                    <a href="dashboard.html"><i className="fas fa-columns" /> <span>Dashboard</span></a>
                  </li>
                  <li>
                    <a href="categories.html"><i className="fas fa-layer-group" />
                      <span>Quản lý danh mục</span></a>
                  </li>
                  <li>
                    <a href="products.html"><i className="fab fa-buffer" />
                      <span>Quản lý sản phẩm</span></a>
                  </li>
                  <li>
                    <a href="manage-order.html"><i className="fas fa-shopping-cart" />
                      <span>Quản lý đơn hàng</span></a>
                  </li>
                  <li>
                    <a href="account.html"><i className="fas fa-user" /> <span>Quản lý tài khoản</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Sidebar */}
          <div className="page-wrapper">
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                <div className="row">
                  <div className="col">
                    <h3 className="page-title">Quản lý danh mục</h3>
                  </div>
                  <div className="col-auto text-right">
                    <a href="add-category.html" className="btn btn-primary add-button ml-3">
                      <i className="fas fa-plus" />
                    </a>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover table-center mb-0 datatable">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Mã danh mục</th>
                              <th>Tên danh mục</th>
                              <th>Mô tả</th>
                              <th className="text-right">Hành động</th>
                            </tr></thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>01</td>
                              <td>Túi xách mới nhất</td>
                              <td></td>
                              <td className="text-right">
                                <a href="edit-category.html" className="btn btn-sm bg-success-light mr-2">
                                  <i className="far fa-edit mr-1" />Sửa
                                </a>
                                <a data-id={40} href="javascript:void(0);" className="
                                btn btn-sm
                                bg-danger-light
                                mr-2
                                delete_review_comment
                              " data-toggle="modal" data-target="#exampleModal">
                                  <i className="far fa-trash-alt mr-1" /> Xoá</a>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>02</td>
                              <td>Túi xách tay</td>
                              <td>Túi xách tay nữ Sablanca thời trang </td>
                              <td className="text-right">
                                <a href="edit-category.html" className="btn btn-sm bg-success-light mr-2">
                                  <i className="far fa-edit mr-1" />Sửa
                                </a>
                                <a data-id={40} href="javascript:void(0);" className="
                                btn btn-sm
                                bg-danger-light
                                mr-2
                                delete_review_comment
                              " data-toggle="modal" data-target="#exampleModal">
                                  <i className="far fa-trash-alt mr-1" /> Xoá</a>
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>03</td>
                              <td>Túi xách đeo chéo</td>
                              <td>Túi đeo chéo, túi đeo vai là phụ kiện 
                              </td>
                              <td className="text-right">
                                <a href="edit-category.html" className="btn btn-sm bg-success-light mr-2">
                                  <i className="far fa-edit mr-1" />Sửa
                                </a>
                                <a data-id={40} href="javascript:void(0);" className="
                                btn btn-sm
                                bg-danger-light
                                mr-2
                                delete_review_comment
                              " data-toggle="modal" data-target="#exampleModal">
                                  <i className="far fa-trash-alt mr-1" /> Xoá</a>
                              </td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>04</td>
                              <td>Ví cầm tay</td>
                              <td></td>
                              <td className="text-right">
                                <a href="edit-category.html" className="btn btn-sm bg-success-light mr-2">
                                  <i className="far fa-edit mr-1" />Sửa
                                </a>
                                <a data-id={40} href="javascript:void(0);" className="
                                btn btn-sm
                                bg-danger-light
                                mr-2
                                delete_review_comment
                              " data-toggle="modal" data-target="#exampleModal">
                                  <i className="far fa-trash-alt mr-1" /> Xoá</a>
                              </td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>05</td>
                              <td>Ví dự tiệc</td>
                              <td></td>
                              <td className="text-right">
                                <a href="edit-category.html" className="btn btn-sm bg-success-light mr-2">
                                  <i className="far fa-edit mr-1" />Sửa
                                </a>
                                <a data-id={40} href="javascript:void(0);" className="
                                btn btn-sm
                                bg-danger-light
                                mr-2
                                delete_review_comment
                              " data-toggle="modal" data-target="#exampleModal">
                                  <i className="far fa-trash-alt mr-1" /> Xoá</a>
                              </td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>06</td>
                              <td>Balo</td>
                              <td></td>
                              <td className="text-right">
                                <a href="edit-category.html" className="btn btn-sm bg-success-light mr-2">
                                  <i className="far fa-edit mr-1" />Sửa
                                </a>
                                <a data-id={40} href="javascript:void(0);" className="
                                btn btn-sm
                                bg-danger-light
                                mr-2
                                delete_review_comment
                              " data-toggle="modal" data-target="#exampleModal">
                                  <i className="far fa-trash-alt mr-1" /> Xoá</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Xác nhận?</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">Bạn có muốn xoá bản ghi này?</div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                  Không
                </button>
                <button type="button" className="btn btn-primary">Đồng ý</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}
export default Category;
