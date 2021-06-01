import React from "react";
import "../dist/css/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__title">
        <div className="header__title__sm">React & Node</div>
        <div className="header__title__lg">Blog</div>
      </div>
    </div>
  );
}

export default Header;
