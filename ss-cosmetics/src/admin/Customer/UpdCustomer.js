import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Modal,
  notification,
  Row,
  Col,
  Upload,
  Button,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import "./Customer.css";
const UpdCustomer = (props) => {
  const { TextArea } = Input;
  const dispatch = useDispatch();
  const { show, handleCancel } = props;
  const [form] = Form.useForm();

  const handleCancelUpd = () => {
    handleCancel();
    form.setFieldsValue({
      code: "",
      name: "",
      address: "",
      phone: "",
    });
  };

  const onUpd = (values) => {
    const body = {
      code: values?.code,
      name: values?.name,
      address: values?.address,
      phone: values?.phone,
    };
    console.log("body", body);
    handleCancelUpd();
  };

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result);

      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <Modal
      title={`SỬA KHÁCH HÀNG`}
      visible={show}
      onCancel={handleCancelUpd}
      okButtonProps={{ form: "updCustomer", key: "submit", htmlType: "submit" }}
      width={"60%"}
      //   footer={null}
      bodyStyle={{ borderRadius: "10px" }}
    >
      <Form
        form={form}
        id="updCustomer"
        onFinish={onUpd}
        autoComplete="off"
        hideRequiredMark
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Row>
          <Col xs={24} sm={24} md={8} lg={8} span={8}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div
                style={{
                  width: 160,
                  height: 160,
                  marginTop: 20,
                  marginLeft: 50,
                  borderRadius: 30,
                  border: "1px solid #37B59D",
                }}
              >
                <img
                  src="http://timxungquanh.com/UserFile/timxungquanh/CompanyImage/087d2ffb-d6a8-4997-8e49-0884e941cab7.jpg"
                  width={160}
                  style={{ borderRadius: 30 }}
                />
                <Button
                  style={{
                    marginTop: 30,
                    marginBottom: 30,
                    width: 150,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: "#EAEAEA",
                    color: "black",
                  }}
                  type="primary"
                >
                  Upload File
                </Button>
              </div>
            </Col>
          </Col>

          <Col xs={24} sm={24} md={16} lg={16} span={16}>
            <Row>
              <Col xs={24} sm={24} md={12} lg={2} xl={2}></Col>
              <Col xs={24} sm={24} md={12} lg={8} xl={10}>
                <Form.Item
                  style={{ fontWeight: "bold" }}
                  label="Họ và tên"
                  name="name"
                  rules={[{ required: true, message: "Nhập họ và tên" }]}
                >
                  <Input
                    style={{ borderRadius: 5, border: "1px solid #37B59D" }}
                    placeholder="Nhập họ và tên"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={2} xl={2}></Col>
              <Col xs={24} sm={24} md={12} lg={8} xl={10}>
                <Form.Item
                  style={{ fontWeight: "bold" }}
                  label="Ngày sinh"
                  name="birthday"
                  rules={[
                    { required: true, message: "Nhập ngày tháng năm sinh" },
                  ]}
                >
                  <Input
                    style={{ borderRadius: 5, border: "1px solid #37B59D" }}
                    placeholder="Nhập ngày tháng năm sinh"
                  />
                </Form.Item>
              </Col>
            </Row>

            {/* Row2 */}

            <Row>
              <Col xs={24} sm={24} md={12} lg={2} xl={2}></Col>
              <Col xs={24} sm={24} md={12} lg={8} xl={10}>
                <Form.Item
                  style={{ fontWeight: "bold" }}
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: "Nhập email" }]}
                >
                  <Input
                    style={{ borderRadius: 5, border: "1px solid #37B59D" }}
                    placeholder="Nhập email"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={2} xl={2}></Col>
              <Col xs={24} sm={24} md={12} lg={8} xl={10}>
                <Form.Item
                  style={{ fontWeight: "bold" }}
                  label="Số điện thoại"
                  name="phone"
                  rules={[{ required: true, message: "Nhập số điện thoại" }]}
                >
                  <Input
                    style={{ borderRadius: 5, border: "1px solid #37B59D" }}
                    placeholder="Nhập số điện thoại"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col xs={24} sm={24} md={12} lg={2} xl={2}></Col>
              <Col xs={24} sm={24} md={12} lg={8} xl={10}>
                <Form.Item
                  style={{ fontWeight: "bold" }}
                  label="Địa chỉ"
                  name="address"
                  rules={[{ required: true, message: "Nhập địa chỉ" }]}
                >
                  <Input
                    style={{ borderRadius: 5, border: "1px solid #37B59D" }}
                    placeholder="Nhập địa chỉ"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={2} xl={2}></Col>
              {/* <Col xs={24} sm={24} md={12} lg={8} xl={10}>
                <Button
                  style={{
                    marginLeft: 90,
                    marginTop: 30,
                    marginBottom: 30,
                    width: 150,
                    height: 40,
                    borderRadius: 15,
                    backgroundColor: "#3578E5",
                  }}
                  type="primary"
                >
                  Tạo mới
                </Button>
              </Col> */}
            </Row>

            {/* <Row style={{ justifyContent: "flex-end" }}>
              <Button
                style={{
                  marginLeft: 200,
                  marginTop: 30,
                  marginBottom: 30,
                  width: 150,
                  height: 40,
                  borderRadius: 15,
                  backgroundColor: "#3578E5",
                }}
                type="primary"
              >
                Tạo mới
              </Button>
            </Row> */}
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};
export default UpdCustomer;
