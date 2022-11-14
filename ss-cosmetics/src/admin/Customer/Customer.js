import React, { useState, useEffect } from "react";
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
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import InsCustomer from "./InsCustomer";
import UpdCustomer from "./UpdCustomer";
import CustomSreach from "../../constant/Sreach";
import "./Customer.css";

const Customer = () => {
  const [showIns, setShowIns] = useState({ show: false });
  const [showUpd, setShowUpd] = useState({ show: false, id: null });

  const data = [
    {
      key: "1",
      name: "Nguyễn Đức Anh",
      date: "13/1/1992",
      email: "da@gmail.com",
      phone: "0977837222",
      address: "hà nội",
      status: "Hoạt động",
    },
    {
      key: "2",
      name: "Nguyễn Đức Anh",
      date: "13/1/1992",
      email: "da@gmail.com",
      phone: "0977837222",
      address: "hà nội",
      status: "Hoạt động",
    },
    {
      key: "3",
      name: "Nguyễn Đức Anh",
      date: "13/1/1992",
      email: "da@gmail.com",
      phone: "0977837222",
      address: "hà nội",
      status: "Hoạt động",
    },
  ];

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      render: (t, r, i) => i + 1,
      width: "5%",
    },
    {
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ngày sinh",
      dataIndex: "date",
      key: "date",
      width: "10%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "10%",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
      width: "10%",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
      width: "20%",
      ellipsis: {
        showTitle: false,
      },
      render: (value) => (
        <Tooltip placement="topLeft" title={value}>
          {value}
        </Tooltip>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      width: "10%",
      render: (value) => (
        <span
          style={{
            background: value === "Hoạt động" ? "#B3E5D1" : "#E5B4B3",
            borderRadius: 5,
            fontSize: "14px",
            color: value === "Hoạt động" ? "#194D3A" : "#863A2D",
            padding: 4,
            border:
              value === "Hoạt động" ? "1px solid #B3E5D1" : "1px solid #E5B4B3",
          }}
        >
          {value}
        </span>
      ),
    },
    {
      title: "Chức năng",
      key: "action",
      width: "10%",
      render: (record) => (
        <Space>
          <Popover content={<h4> Sửa thông tin</h4>}>
            <EditOutlined
              style={{
                background: "#0693E3",
                borderRadius: 3,
                fontSize: "12px",
                color: "white",
                padding: 5,
                border: "1px solid #0693E3",
              }}
              onClick={() => {
                setShowUpd({
                  show: true,
                  id: record?.id,
                });
              }}
            />
          </Popover>

          <Popconfirm
            title="Bạn có chắc chắn muốn xóa khách hàng?"
            // onConfirm={() => onDelete(record)}
          >
            <Popover content={<h4> Xóa khách hàng</h4>}>
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
          </Popconfirm>
        </Space>
      ),
    },
  ];

  useEffect(() => {}, []);

  const onShowIns = async () => {
    setShowIns({
      show: true,
    });
  };

  const onCancelShowIns = () => {
    setShowIns({
      show: false,
    });
  };

  const onCancelShowUpd = () => {
    setShowUpd({
      show: false,
      id: null,
    });
  };

  return (
    <>
      <Row gutter={24}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="customer-search">
            <CustomSreach />
          </div>
        </Col>
      </Row>

      <Row span={24} style={{ paddingTop: "20px" }}>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <Breadcrumb>
            <Breadcrumb.Item href="/">
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/customer">
              <b>Danh sách khách hàng</b>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8} />
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <Button
            style={{
              marginLeft: "6px",
              backgroundColor: "#119643",
              borderRadius: 5,
              border: "#119643",
              float: "right",
            }}
            type="primary"
            onClick={onShowIns}
          >
            <PlusOutlined />
            Thêm nhà cung cấp
          </Button>
        </Col>

        <Col span={24} style={{ paddingTop: "20px" }}>
          <Table
            rowSelection={
              {
                // selectedRows: selectedRows,
                // selectedRowKeys: selectedKeys,
                // onChange: (selectedRowKeys, selectedRows) => {
                //     onChangeRowSelectedData(selectedRowKeys, selectedRows)
                // }
              }
            }
            columns={columns}
            dataSource={data}
            size="small"
            pagination={{
              // onChange: page => {
              //     setPage(page - 1)
              // },
              // pageSize: size,
              // total: totalPage,
              showSizeChanger: false,
              showTotal: (total) => <div>{`Tổng bản ghi: ${total}`}</div>,
            }}
          />
        </Col>
      </Row>
      <InsCustomer show={showIns.show} handleCancel={onCancelShowIns} />
      <UpdCustomer
        show={showUpd.show}
        id={showUpd.id}
        handleCancel={onCancelShowUpd}
      />
    </>
  );
};
export default Customer;
