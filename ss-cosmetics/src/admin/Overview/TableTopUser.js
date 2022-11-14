import { Space, Table, Tag } from "antd";
import React, { useState } from "react";
import "./Overview.css";
const columns = [
  {
    title: "Xếp hạng",
    dataIndex: "key",
    key: "key",
    render: (text) => (
      <div className="background-numberical">
        <a style={{ color: "#fff" }}>{text}</a>
      </div>
    ),
  },
  {
    title: "Tài khoản",
    dataIndex: "account",
    key: "account",
    render: (text) => (
      <div className="background-account">
        <a style={{ color: "#fff" }}>{text}</a>
      </div>
    ),
  },
  {
    title: "Điểm",
    dataIndex: "point",
    key: "point",
    render: (text) => (
      <div className="background-point">
        <a style={{ color: "#fff" }}>{text}</a>
      </div>
    ),
  },
];
const data = [
  {
    key: "1",
    account: "dang",
    point: "5000",
  },
  {
    key: "2",
    account: "dang2",
    point: "4000",
  },
  {
    key: "3",
    account: "dang3",
    point: "3000",
  },
  {
    key: "4",
    account: "dang4",
    point: "2000",
  },
  {
    key: "5",
    account: "dang5",
    point: "1000",
  },
  {
    key: "6",
    account: "dang6",
    point: "900",
  },
  {
    key: "7",
    account: "dang4",
    point: "800",
  },
  {
    key: "8",
    account: "dang5",
    point: "700",
  },
  {
    key: "9",
    account: "dang6",
    point: "600",
  },
  {
    key: "10",
    account: "dang6",
    point: "500",
  },
];

function TableTopUser() {
  return (
    <Table
      style={{
        border: "1px solid #53CF76",
        padding: "10px",
        borderRadius: "10px",
      }}
      size="small"
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  );
}

export default TableTopUser;
