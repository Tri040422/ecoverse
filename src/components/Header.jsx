import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <div className="logo">Ecoverse</div>
    <nav>
      <ul className="nav-list">
        <li>
          <Link to="/">Trang chủ</Link>
        </li>
        <li>
          <Link to="/products">Sản phẩm</Link>
        </li>
        <li>
          <Link to="/contact">Liên hệ</Link>
        </li>
        <li>
          <Link to="/cart">Giỏ hàng</Link>
        </li>
        <li>
          <Link to="/register">Đăng ký</Link>
        </li>
        <li>
          <Link to="/login">Đăng nhập</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
    </nav>
    <div className="search-box">
      <input type="text" placeholder="Bạn cần tìm gì?" />
      <button>🔍</button>
    </div>
  </header>
);

export default Header;
