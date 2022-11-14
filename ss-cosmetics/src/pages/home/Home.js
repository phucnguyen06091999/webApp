import React, { Component, useEffect, useState } from "react";
import "../../App.css";
import "antd/dist/antd.css";
import Footer from "../../footer/Footer";
import { Carousel } from "antd";
import Item from "../../components/Item";
import Header from "../../header/Header";
import { Link } from "react-router-dom";
function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:8085",
      },
    };
    fetch("http://localhost:8085/api/products", options)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch(console.log);
  }, []);
  console.log(products);
  return (
    <div className="grid">
      <div>
        <Header></Header>
      </div>
      <div>
        <div className="header1">
          <Carousel fade autoplay className="grid">
            <img style={contentStyle} src="./images/trc1.jpg" alt="1" />
            <img style={contentStyle} src="./images/trc2.jpg" alt="1" />
            <img style={contentStyle} src="./images/tr3.jpg" alt="1" />
          </Carousel>
        </div>
      </div>
      <h3
        align="left"
        style={{
          margin: "50px",
          fontWeight: "bold",
          color: "red",
          fontSize: "25px",
        }}
      >
        Sản phẩm nổi bật:
      </h3>

      <div className="pro-list">
        {products.map((item, index) => {
          // eslint-disable-next-line eqeqeq
          if (item.pr_hot == true) {
            console.log("middle item");
            return (
              <Link className="link-product" to={"/product"}>
                <Item
                  key={item.pr_id}
                  image={item.pr_image || "./images/default_image.jpg"}
                  price={item.pr_price}
                  name={item.pr_name}
                  brand={item.pr_description}
                >
                  <h2>aaa</h2>
                </Item>
              </Link>
            );
          }
        })}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
const contentStyle = {
  height: "100%",
  width: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export default Home;
