import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import Home from "./pages/home/Home";
import Gioithieu from "./pages/gioithieu/Gioithieu";
import Trangdiem from "./pages/trangdiem/Trangdiem";
import Chamsocda from "./pages/chamsocda/Chamsocda";
import Nuochoa from "./pages/nuochoa/Nuochoa";
import Giftset from "./pages/giftset/Giftset";
import Ktdonhang from "./pages/ktdonhang/Ktdonhang";

import User from "./pages/user/User";
import Trangchu from "./pages/Trangchu/Trangchu";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/profile/Profile";
import ChangePass from "./pages/Changepass/Changepass";
import Checkout from "./pages/Checkout/Checkout";
import Order from "./pages/order/Order";
import Product from "./pages/product/product";
import Category from "../src/admin/Category/Category";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gioithieu" element={<Gioithieu />} />
          <Route path="/trangdiem" element={<Trangdiem />} />
          <Route path="/chamsocda" element={<Chamsocda />} />
          <Route path="/nuochoa" element={<Nuochoa />} />
          <Route path="/giftset" element={<Giftset />} />
          <Route path="/ktdonhang" element={<Ktdonhang />} />
          <Route path="/trangchu" element={<Trangchu />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/changepass" element={<ChangePass />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<Order />} />
          <Route path="/product" element={<Product />} />
          <Route path="/admin/category" element={<Category />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
