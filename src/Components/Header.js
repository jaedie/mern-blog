import React from "react";
import "../dist/css/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__titles">
        <div className="header__titles__sm">React & Node</div>
        <div className="header__titles__lg">Blog</div>
      </div>
      <img
        className="header__img"
        src="/images/header_img.png"
        alt="header_image"
      />
    </div>
  );
}

export default Header;
