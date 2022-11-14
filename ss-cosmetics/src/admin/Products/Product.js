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
import "./Product.css";
import CustomSreach from "../../constant/Sreach";

const Product = () => {
  const [showIns, setShowIns] = useState({ show: false });
  const [showUpd, setShowUpd] = useState({ show: false, id: null });
  const data = [
    {
      STT: "1",
      pr_name: "Sữa rửa mặt",
      brand_name: "Chăm sóc da",
      pr_image: "sp1.jpg",
      pr_description: "Dành cho da dầu, nhạy cảm",
      pr_price: "200000",
      pr_quatity: "30",
      status:"Hoạt động",
    },
    {
      STT: "2",
      pr_name: "Kem chống nắng",
      brand_name: "Gift set",
      pr_image: "sp2.jpg",
      pr_description: "Dành cho da dầu, nhạy cảm",
      pr_price: "700000",
      pr_quatity: "80",
      status:"Hoạt động",
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
      title: "Tên sản phẩm",
      dataIndex: "pr_name",
      key: "pr_name",
    },
    {
      title: "Tên danh mục",
      dataIndex: "brand_name",
      key: "brand_name",
      width: "10%",
    },
    {
      title: "Ảnh",
      dataIndex: "pr_image",
      key: "pr_image",
      width: "10%",
    },
    {
      title: "Mô tả",
      dataIndex: "pr_description",
      key: "pr_description",
      width: "10%",
    },
    {
      title: "Giá",
      dataIndex: "pr_price",
      key: "pr_price",
      width: "10%",
    },
    {
      title: "Số lượng",
      dataIndex: "pr_quatity",
      key: "pr_quatity",
      width: "10%",
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
      width: "20%",
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
            title="Bạn có chắc chắn muốn xóa sản phẩm?"
            // onConfirm={() => onDelete(record)}
          >
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
          <div className="product-search">
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
              <b>Danh sách sản phẩm</b>
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
            Thêm sản phẩm
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
      {/* <InsProduct show={showIns.show} handleCancel={onCancelShowIns} />
      <UpdCustomer
        show={showUpd.show}
        id={showUpd.id}
        handleCancel={onCancelShowUpd}
      /> */}
    </>
  );
};
export default Product;

