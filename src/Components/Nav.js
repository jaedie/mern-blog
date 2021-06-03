import React, { useState, useEffect } from "react";
import "../dist/css/Nav.css";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  FaGithub,
  FaInstagram,
  FaGoogle,
  FaLinkedin,
  FaSearch,
} from "react-icons/fa";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        handleShow(true);
      } else handleShow(false);
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  const activeStyle = {
    fontWeight: "bold",
  };

  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <div className={`nav ${show && "nav__contrast"}`}>
        <div className="nav__topLeft">
          <FaGoogle />
          <FaGithub />
          <FaLinkedin />
          <FaInstagram />
        </div>
        <div className="nav__topCenter">
          <ul className="nav__topCenter__lists">
            <NavLink className="nav__topCenter__list" to="/">
              HOME
            </NavLink>
            <NavLink
              className="nav__topCenter__list"
              to="/about"
              activeStyle={activeStyle}
            >
              ABOUT
            </NavLink>
            <NavLink
              className="nav__topCenter__list"
              to="/contact"
              activeStyle={activeStyle}
            >
              CONTACT
            </NavLink>
            <NavLink
              className="nav__topCenter__list"
              to="/write"
              activeStyle={activeStyle}
            >
              WRITE
            </NavLink>
            <NavLink
              className="nav__topCenter__list"
              to="/signin"
              activeStyle={activeStyle}
            >
              SIGN-IN
            </NavLink>
          </ul>
        </div>
        <div className="nav__topRight">
          <img
            className="nav__topRight__profile"
            src="/images/profile_img.png"
            alt="profile_image"
          />
          <FaSearch style={{ fontSize: "18px", color: "#666" }} />
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Nav;
