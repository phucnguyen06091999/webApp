import React from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
export default function CustomSreach({ onClick, onChange, value }) {
  return (
    <>
      <Input
        style={{
          border: "0.1px solid #119643",
          width: "93%",
          borderRadius: "8px",
        }}
        placeholder="Tìm kiếm"
        onChange={onChange}
        value={value}
      />
      <Button
        style={{
          backgroundColor: "#FF0000",
          borderRadius: 5,
          width: "5%",
          border: "rgb(17, 124, 114)",
          marginLeft: "6px",
        }}
        type="primary"
        onClick={onClick}
      >
        <SearchOutlined />
      </Button>
    </>
  );
}
