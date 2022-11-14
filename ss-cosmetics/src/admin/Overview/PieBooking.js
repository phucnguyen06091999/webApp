import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Pie } from "@ant-design/plots";

const PieBooking = (props) => {
  const data = [
    {
      type: "Tỉ lệ hồi vé và phòng",
      value: 68,
    },
    {
      type: "Tỉ lệ đặt vé",
      value: 28,
    },
    {
      type: "Tỉ lệ đặt phòng",
      value: 10,
    },
  ];

  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",

    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };

  return (
    <Pie
      style={{ width: "90%", height: "240px", alignContent: "center" }}
      {...config}
    />
  );
};

export default PieBooking;
