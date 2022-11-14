import React, { useState } from "react";
import { Layout, Menu, Image } from "antd";
import { Link } from "react-router-dom";
import {
  AndroidOutlined,
  InsertRowAboveOutlined,
  CalendarOutlined,
  FileTextOutlined,
  BellOutlined,
  SettingOutlined,
  UserOutlined,
  StarOutlined,
  ProfileOutlined,
  HomeOutlined,
  createFromIconfontCN,
} from "@ant-design/icons";
import "./DefaultLayout.css";
import logo from "../../assets/logo.jpg";
const { Sider } = Layout;

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

export default function DefaultSidebar({ collapsed }) {
  const getItem = (label, key, icon, children) => {
    return {
      label,
      key,
      icon,
      children,
    };
  };

  const dataMenu = [
    getItem(
      <Link style={{ color: "#072f84" }} to={"/"}>
        Tổng quan
      </Link>,
      "1",
      <InsertRowAboveOutlined className="icon-color" />
    ),
    getItem(
      <Link style={{ color: "#072f84" }} to={"/system"}>
        Quản trị hệ thống
      </Link>,
      "2",
      <CalendarOutlined className="icon-color" />
    ),
    getItem(
      <Link style={{ color: "#072f84" }} to={"/category"}>
        Quản lý danh mục
      </Link>,
      "3",
      <FileTextOutlined className="icon-color" />
    ),
    getItem(
      <Link style={{ color: "#072f84" }} to={"/product"}>
        Quản lý sản phẩm
      </Link>,
      "4",
      <BellOutlined className="icon-color" />
    ),
    getItem(
      <Link style={{ color: "#072f84" }} to={"/order"}>
        Quản lý đơn hàng
      </Link>,
      "5",
      <SettingOutlined className="icon-color" />
    ),
    getItem(
      <Link style={{ color: "#072f84" }} to={"/account"}>
        Quản lý tài khoản
      </Link>,
      "6",
      <UserOutlined className="icon-color" />
    ),
    getItem(
      <Link style={{ color: "#072f84" }} to={"/customer"}>
        Quản lý khách hàng
      </Link>,
      "7",
      <ProfileOutlined className="icon-color" />
    ),
  ];

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      {/* <div className="logo" style={{ borderBottom: '1px solid rgba(0,0,0,.0625)', marginTop: 5 }} >
        <Image src={logo} preview={false} style={{ width: '40%', height: '40%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
      </div> */}
      <div className="logo">
        <Image
          src={logo}
          preview={false}
          style={{
            width: "70%",
            height: "70%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>
      <Menu mode="inline" items={dataMenu} />
    </Sider>
  );
}
