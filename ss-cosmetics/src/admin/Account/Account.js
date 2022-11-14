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
import CustomSreach from "../../constant/Sreach";
import "./Account.css";

const Account = () => {
  const [showIns, setShowIns] = useState({ show: false });
  const [showUpd, setShowUpd] = useState({ show: false, id: null });

  const data = [
    {
      key: "1",
      name: "Nguyễn Ngọc Nga",
      phone: "0962253119",
      email: "Nn.nga@gmail.com",
      date: "29/12/2000",
      gender: "Nữ",
      address: "Hà Nội",
      status: "Hoạt động",
    },
    {
      key: "2",
      name: "Nguyễn Ngọc Nga",
      phone: "0962253119",
      email: "Nn.nga@gmail.com",
      date: "29/12/2000",
      gender: "Nữ",
      address: "Hà Nội",
      status: "Không hoạt động",
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
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
      width: "10%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "15%",
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      key: "gender",
      width: "5%",
    },
    {
      title: "Ngày sinh",
      dataIndex: "date",
      key: "date",
      width: "10%",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
      width: "15%",
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
      width: "15%",
      render: (value) => (
        <span
          style={{
            background: value === "Hoạt động" ? "#B3E5D1" : "#E5B4B3",
            borderRadius: 5,
            fontSize: "14px",
            color: value === "Hoạt độngg" ? "#194D3A" : "#863A2D",
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
      with: "10%",
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
            title="Bạn có chắc chắn muốn xóa tài khoản?"
            // onConfirm={() => onDelete(record)}
          >
            <Popover content={<h4> Xóa tài khoản</h4>}>
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
              <b>Danh sách tài khoản người dùng</b>
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
            // onClick={onShowIns}
          >
            <PlusOutlined />
            Thêm tài khoản
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
      {/* <InsCustomer show={showIns.show} handleCancel={onCancelShowIns} />
      <UpdCustomer
        show={showUpd.show}
        id={showUpd.id}
        handleCancel={onCancelShowUpd}
      /> */}
    </>
  );
};
export default Account;
