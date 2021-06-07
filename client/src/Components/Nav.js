import React, { useState, useEffect } from "react";
import "../dist/css/Nav.css";
import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaInstagram,
  FaGoogle,
  FaLinkedin,
  FaSearch,
} from "react-icons/fa";
import profileImg from "../Images/profile_img.png";

function Nav({ user, setUser }) {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
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

  const settingActive = {
    width: "46px",
    height: "46px",
    border: "3px solid #e49f31",
    borderRadius: "50%",
  };

  return (
    <div className={`${show ? "nav__contrast" : "nav"} `}>
      <div
        className={`${show ? "nav__container__contrast" : "nav__container"} `}
      >
        <div className="nav__topLeft">
          <FaGoogle
            className={`${!show ? "react-icons" : "react-icons__contrast"}`}
          />
          <FaGithub
            className={`${!show ? "react-icons" : "react-icons__contrast"}`}
          />
          <FaLinkedin
            className={`${!show ? "react-icons" : "react-icons__contrast"}`}
          />
          <FaInstagram
            className={`${!show ? "react-icons" : "react-icons__contrast"}`}
          />
        </div>
        <div className="nav__topCenter">
          <ul className="nav__topCenter__lists">
            <NavLink
              className={`${
                !show
                  ? "nav__topCenter__list"
                  : "nav__topCenter__list__contrast"
              }`}
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              className={`${
                !show
                  ? "nav__topCenter__list"
                  : "nav__topCenter__list__contrast"
              }`}
              to="/write"
              activeStyle={activeStyle}
            >
              WRITE
            </NavLink>
            {!user && (
              <NavLink
                className={`${
                  !show
                    ? "nav__topCenter__list"
                    : "nav__topCenter__list__contrast"
                }`}
                to="/signin"
                activeStyle={activeStyle}
                onClick={() => setUser(true)}
              >
                SIGN-IN
              </NavLink>
            )}
          </ul>
        </div>
        <div className="nav__topRight">
          {user && (
            <NavLink to="/setting" activeStyle={settingActive}>
              <img
                className="nav__topRight__profile"
                src={profileImg}
                alt="profile_image"
              />
            </NavLink>
          )}
          <FaSearch
            className={`${!show ? "react-icons" : "react-icons__contrast"}`}
            id="search"
            onClick={() => setUser(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
