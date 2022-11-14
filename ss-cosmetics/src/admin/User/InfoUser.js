import React, { useEffect, useState } from "react";
import { Col, Row, Button, Form, Input, message, Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }

  return isJpgOrPng && isLt2M;
};

export default function InfoUser() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div
      style={{
        border: "1px dashed rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Tải ảnh lên
      </div>
    </div>
  );

  return (
    <Form layout="vertical" hideRequiredMark>
      <Row xs={24} sm={24} md={24} lg={24} xl={24} span={24}>
        <Col span={8}> </Col>
        <Col span={8}>
          <h1
            style={{
              textAlign: "center",
              fontSize: "1.5em",
              fontWeight: "bold",
            }}
          >
            Thông tin tài khoản
          </h1>
        </Col>
        <Col span={8}> </Col>
      </Row>
      <Row xs={24} sm={24} md={24} lg={24} xl={24} span={24}>
        <Col xs={24} sm={24} md={24} lg={8} xl={8} span={8}>
          <h3
            style={{
              textAlign: "center",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            Hình đại diện
          </h3>
          <Row style={{ justifyContent: "center" }}>
            <Form.Item name="image">
              <Upload
                name="avatar"
                // listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="avatar"
                    style={{
                      height: 200,
                      width: 200,
                      borderRadius: "50%",
                      border: "1px solid rgba(0, 0, 0, 0.2)",
                    }}
                  />
                ) : (
                  uploadButton
                )}
              </Upload>
              {/* <img
                src={"https://www.w3schools.com/howto/img_avatar.png"}
                style={{
                  height: 200,
                  width: 200,
                  borderRadius: "50%",
                }}
                className="image-shop"
                alt="imageshop"
              /> */}
            </Form.Item>
          </Row>
          <Row style={{ justifyContent: "center", padding: "20px" }}>
            {/* <Upload
                            showUploadList={false}
                        // action={`${API_URL}/upload/shop/logo`}
                        // headers={HEADERS.JWT_HEADER()}
                        // beforeUpload={beforeUpload}
                        // onChange={this.handleChange}
                        >
                            <Button
                                style={{
                                    backgroundColor: '#26C7BE',
                                    borderRadius: 5,
                                    border: '1px solid #26C7BE',
                                    marginRight: 8,
                                    color: 'white',

                                }}
                                icon={<UploadOutlined />}>Chọn ảnh</Button>
                        </Upload> */}
          </Row>
        </Col>

        <Col xs={24} sm={24} md={24} lg={16} xl={16} span={16}>
          <Row xs={24} sm={24} md={24} lg={16} xl={16} gutter={16}>
            <Col xs={24} sm={24} md={24} lg={12} xl={12} span={12}>
              <Form.Item
                label="Họ và tên"
                name="name"
                style={{ fontWeight: "bold" }}
              >
                <Input
                  placeholder="Nhập Họ và tên"
                  style={{
                    padding: "10px 20px",
                    borderRadius: 5,
                    marginTop: 10,
                    border: "1px solid #119643",
                    color: "black",
                  }}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12} span={12}>
              <Form.Item
                disabled
                label="Tài khoản"
                name="username"
                style={{ fontWeight: "bold" }}
              >
                <Input
                  style={{
                    padding: "10px 20px",
                    borderRadius: 5,
                    marginTop: 10,
                    border: "1px solid #119643",
                    color: "black",
                  }}
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={24} lg={12} xl={12} span={12}>
              <Form.Item
                label="Số điện thoại"
                name="phone"
                style={{ fontWeight: "bold" }}
              >
                <Input
                  placeholder="Nhập số điện thoại"
                  style={{
                    padding: "10px 20px",
                    borderRadius: 5,
                    marginTop: 10,
                    border: "1px solid #119643",
                    color: "black",
                  }}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12} span={12}>
              <Form.Item
                label="Địa chỉ"
                name="address"
                style={{ fontWeight: "bold" }}
              >
                <Input
                  placeholder="Nhập địa chỉ"
                  style={{
                    padding: "10px 20px",
                    borderRadius: 5,
                    marginTop: 10,
                    border: "1px solid #119643",
                    color: "black",
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row xs={24} sm={24} md={24} lg={8} xl={8} gutter={8}>
            <Col span={24}>
              <Button
                style={{
                  backgroundColor: "#FF0000",
                  borderRadius: 5,
                  border: "#37B59D",
                  color: "white",
                  float: "right",
                  marginTop: "75px",
                }}
                type="primary"
                htmlType="submit"
              >
                Lưu thông tin
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
}
