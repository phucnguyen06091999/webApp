import "./User.css";
function User() {
  return (
    <div>
      <table border={1}>
        <tbody>
          <tr className="ring" style={{ borderWidth: "thin" }}>
            <td
              className="ring"
              style={{ width: "400px", height: "600px", borderWidth: "thin" }}
            >
              <a href="http://localhost:8085/">
                <img
                  src="logo.png"
                  alt="logo"
                  style={{ width: "150px", height: "120px" }}
                />{" "}
              </a>{" "}
              <br />
              <br />
              <img
                src="user1.png"
                alt="user1"
                style={{ width: "50px", height: "50px" }}
              />{" "}
              <br />
              <br />
              <p> User_Name </p>
              <table>
                <tbody>
                  <tr>
                    <td
                      className="ring"
                      style={{
                        width: "500px",
                        height: "80px",
                        borderWidth: "thin",
                      }}
                    >
                      <a href style={{ textDecoration: "none" }}>
                        {" "}
                        Thông tin tài khoản
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="ring"
                      style={{
                        width: "500px",
                        height: "80px",
                        borderWidth: "thin",
                      }}
                    >
                      <a href style={{ textDecoration: "none" }}>
                        Đổi mật khẩu
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="ring"
                      style={{
                        width: "500px",
                        height: "80px",
                        borderWidth: "thin",
                      }}
                    >
                      <a href style={{ textDecoration: "none" }}>
                        Đăng xuất
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td
              className="ring"
              style={{ width: "400px", height: "600px", borderWidth: "thin" }}
            >
              <p style={{ fontWeight: "bold", fontSize: "22px" }}>
                {" "}
                Thay đổi thông tin cá nhân
              </p>
              <p align="left" style={{ marginLeft: "100px", color: "black" }}>
                Họ tên:
              </p>
              <input type="text" name="name" style={{ width: "200px" }} />
              <p align="left" style={{ marginLeft: "100px" }}>
                Ngày sinh:
              </p>
              <input type="text" name="birthday" style={{ width: "200px" }} />
              <p align="left" style={{ marginLeft: "100px" }}>
                Email:
              </p>
              <input type="text" name="email" style={{ width: "200px" }} />
              <p align="left" style={{ marginLeft: "100px" }}>
                Số điện thoại:
              </p>
              <input type="text" name="phone" style={{ width: "200px" }} />
              <br />
              <br />
              <input
                className="ring"
                type="submit"
                name="save"
                defaultValue="Lưu lại"
                style={{
                  borderWidth: "thin",
                  width: "80px",
                  height: "50px",
                  background: "rgb(4, 170, 54)",
                }}
              />
              <input
                className="ring"
                type="button"
                name="save"
                defaultValue="Cancel"
                style={{ borderWidth: "thin", width: "80px", height: "50px" }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default User;
