import React, { useState, useEffect } from "react";
import { Button, Card, Col, Form, Input, Row, message, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { login, reset } from "../../../reducers/authReducer";
import bg4 from "../../../assets/bg4.jpg";
import bkbg from "../../../assets/bg5.jpg";
import vvlogo from "../../../assets/logo.jpg";
import "./Login.css";
// import { reset } from "../../reducers/authReducer";
const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  console.log("history", history);
  const [form] = Form.useForm();
  // const token = useSelector((store) => store.authReducer.token);

  const onLogin = () => {
    // const body = {
    //   username: "a",
    //   password: "a",

    // };
    localStorage.clear();
    dispatch(reset());
    history.replace("/");
    // dispatch(
    //   login(body, {
    //     onError: (err) => {
    //       if (err.status === 400 && err.data.error === "Bad credentials")
    //         message.error("Sai thông tin đăng nhập!");
    //     },
    //   })
    // );
  };

  // return token ? (
  //   <Redirect to="/" />
  // ) : (

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + bkbg + ")",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Row>
          <Col span={14}></Col>
          <Col span={10}>
            <div class="container-form-layout">
              <Form
                // form={form}
                // hideRequiredMark
                // id="insUser-form"
                // name="normal_Resgiter"
                className="resgiter-form"
                onFinish={onLogin}
                // autoComplete="off"
              >
                <Card
                  bordered={false}
                  bodyStyle={{ backgroundColor: "#ffffff", borderRadius: 20 }}
                  style={{
                    maxWidth: "75%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    background: "white",
                    borderRadius: "50px",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <Image
                    className="logo-form-layout"
                    style={{ marginTop: 20, marginBottom: 40 }}
                    src={vvlogo}
                    preview={false}
                  />

                  <Form.Item
                    style={{ fontWeight: "bold" }}
                    // name="username"
                    // rules={[{ required: true, message: "Nhập tên đăng nhập" }]}
                  >
                    <Input
                      style={{ padding: "10px 20px", borderRadius: 6 }}
                      placeholder="Nhập tên đăng nhập"
                    />
                  </Form.Item>

                  <Form.Item
                    style={{ fontWeight: "bold" }}
                    // name="password"
                    // rules={[{ required: true, message: "Nhập mật khẩu" }]}
                  >
                    <Input.Password
                      style={{ padding: "10px 20px", borderRadius: 6 }}
                      placeholder="Nhập mật khẩu"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{
                        width: "100%",
                        height: "5vh",
                        borderRadius: 5,
                        backgroundColor: "#119643",
                        border: "none",
                        fontWeight: "bold",
                        fontSize: "1.3em",
                      }}
                    >
                      Đăng Nhập
                    </Button>
                  </Form.Item>
                  <hr></hr>
                  <br></br>
                  <Form.Item>
                    <Button
                      type="primary"
                      style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        height: "5vh",
                        borderRadius: 5,
                        backgroundColor: "#024b04",
                        color: "white",
                        border: "none",
                        fontWeight: "bold",
                        fontSize: "1.3em",
                      }}
                    >
                      <Link to={"/register"}>
                        {" "}
                        <span style={{}}> Tạo tài khoản mới </span>
                      </Link>
                    </Button>
                  </Form.Item>
                </Card>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Login;
