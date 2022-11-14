import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div>
          <img
            src="./images/logo1.png"
            alt="logo"
            style={{ width: "250px", height: "100px" }}
          />
        </div>
        <div style={{ marginLeft: "100px" }}>
          <p style={{ fontWeight: "bold" }}>Thông tin liên hệ: </p>
          <p>Website: Samsungcosmetic.com.vn</p>
          <p>Hotline: 1900.1006</p>
          <p>Email: Samsungcosmetic@gmail.com</p>
          <p>Address: Hà Nội / TP.Hồ Chí Minh </p>
        </div>
        <div style={{ marginLeft: "100px" }}>
          <div>
            <p style={{ fontWeight: "bold" }}>
              Kết nối:
              <div className="footer1">
                <a href="https://vi-vn.facebook.com">
                  <img
                    src="./images/facebook.png"
                    alt="fb"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginLeft: "30px",
                    }}
                  />
                </a>
                <a href="https://www.instagram.com">
                  <img
                    src="./images/inta.png"
                    alt="inta"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginLeft: "30px",
                    }}
                  />
                </a>
                <a href="https://www.youtube.com">
                  <img
                    src="./images/youtube.png"
                    alt="yt"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginLeft: "30px",
                    }}
                  />
                </a>
                <a href="https://www.tiktok.com">
                  <img
                    src="./images/ticktok.png"
                    alt="tt"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginLeft: "30px",
                    }}
                  />
                </a>
              </div>
            </p>
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>
              Phương thức thanh toán:
              <div className="footer1">
                <img
                  src="./images/momo.png"
                  alt="momo"
                  style={{
                    width: "30px",
                    height: "30px",
                    marginLeft: "40px",
                    margin: "30px",
                  }}
                />
                <img
                  src="./images/visa.png"
                  alt="visa"
                  style={{
                    width: "30px",
                    height: "30px",
                    marginLeft: "30px",
                    margin: "30px",
                  }}
                />
                <img
                  src="./images/paypal.png"
                  alt="paypal"
                  style={{
                    width: "40px",
                    height: "40px",
                    marginLeft: "30px",
                    margin: "30px",
                  }}
                />
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
