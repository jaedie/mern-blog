import React, { useState, useEffect } from "react";
import "../dist/css/Nav.css";
import { IconContext } from "react-icons";

import {
  FaGithub,
  FaInstagram,
  FaGoogle,
  FaLinkedin,
  FaSearch,
} from "react-icons/fa";

function Nav() {
  const navlist = ["Home", "About", "Contact", "Write", "Sign-In"];

  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <div className="nav">
        <div className="nav__topLeft">
          <FaGoogle />
          <FaGithub />
          <FaLinkedin />
          <FaInstagram />
        </div>
        <div className="nav__topCenter">
          <ul className="nav__topCenter__lists">
            {navlist.map((list, idx) => (
              <li key={idx}>{list}</li>
            ))}
          </ul>
        </div>
        <div className="nav__topRight">
          <img
            className="nav__topRight__profile"
            src="/images/profile_img.png"
            alt=""
          />
          <FaSearch style={{ fontSize: "18px", color: "#666" }} />
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Nav;
