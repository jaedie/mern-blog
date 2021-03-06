import React, { useEffect, useState } from "react";
import "../dist/css/Sidebar.css";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaGithub, FaInstagram, FaGoogle, FaLinkedin } from "react-icons/fa";
import sidebarImg from "../Images/sidebar_about.png";
import axios from "axios";

function Sidebar() {
  const [cats, setCat] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/api/category");
      setCat(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <span className="sidebar__item__title">ABOUT ME</span>
        <img src={sidebarImg} alt="" className="sidebar__item__img" />
        <p className="sidebar__item__des">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ex
          alias nisi fugit nostrum sunt deleniti totam aliquam, natus est dolore
          beatae autem explicabo fuga pariatur, iure animi! A voluptatibus amet
          blanditiis numquam? Ab, dolorum distinctio laudantium quibusdam
          dolores aliquam nulla minima, delectus quisquam sed quasi iure aut
          mollitia! Debitis.
        </p>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__item__title">CATEGORIES</span>
        <ul className="sidebar__item__lists">
          {cats.map((cat, idx) => (
            <Link to={`/?cat=${cat.name}`} className="link">
              <li key={idx}>{cat.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__item__title">FOLLOW ME</span>
        <div className="sidebar__item__social">
          <IconContext.Provider
            value={{ className: "sidebar__item__social__icon" }}
          >
            <FaGoogle />
            <FaGithub />
            <FaLinkedin />
            <FaInstagram />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
