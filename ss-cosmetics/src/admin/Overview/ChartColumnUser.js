import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Column } from "@ant-design/plots";

const ChartColumnUser = (props) => {
  const data = [
    {
      name: "Tổng số người dùng",
      date: "1/10",
      number: 20,
    },
    {
      name: "Tổng số người dùng",
      date: "2/10",
      number: 30,
    },
    {
      name: "Tổng số người dùng",
      date: "3/10",
      number: 40,
    },
    {
      name: "Tổng số người dùng",
      date: "4/10",
      number: 50,
    },
    {
      name: "Tổng số người dùng",
      date: "5/10",
      number: 60,
    },
    {
      name: "Tổng số người dùng",
      date: "6/10",
      number: 70,
    },
    {
      name: "Tổng số người dùng",
      date: "7/10",
      number: 80,
    },
    {
      name: "Người dùng mới",
      date: "1/10",
      number: 10,
    },
    {
      name: "Người dùng mới",
      date: "2/10",
      number: 20,
    },
    {
      name: "Người dùng mới",
      date: "3/10",
      number: 30,
    },
    {
      name: "Người dùng mới",
      date: "4/10",
      number: 40,
    },
    {
      name: "Người dùng mới",
      date: "5/10",
      number: 50,
    },
    {
      name: "Người dùng mới",
      date: "6/10",
      number: 60,
    },
    {
      name: "Người dùng mới",
      date: "7/10",
      number: 70,
    },
  ];

  const config = {
    data,
    isGroup: true,
    xField: "date",
    yField: "number",
    seriesField: "name",

    label: {
      position: "middle",
      layout: [
        {
          type: "interval-adjust-position",
        },
        {
          type: "interval-hide-overlap",
        },
        {
          type: "adjust-color",
        },
      ],
    },
  };

  return <Column style={{ width: "90%", height: "305px" }} {...config} />;
};

export default ChartColumnUser;
