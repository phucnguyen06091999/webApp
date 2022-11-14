import React from "react";

const Item = (props) => {
  return (
    <div>
      <div className="pro-image">
        <img
          className="pro-image"
          src={props.image || "product-image"}
          alt="hot product"
        />
      </div>
      <div className="pro-price">
        <p className="price">{props.price || "product-price"}.000 đ</p>
      </div>
      <div className="pro-brand">
        <p className="pro_brand">{props.brand || "product-brand"}</p>
      </div>
      <div className="pro-name">
        <p className="pro_name">{props.name || "product name"}</p>
      </div>
    </div>
  );
};

export default Item;
