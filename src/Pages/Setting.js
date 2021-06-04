import React from "react";
import "../dist/css/Setting.css";
import Sidebar from "../Components/Sidebar";
import settingImg from "../Images/setting_img.jpg";

function Setting() {
  return (
    <div className="setting">
      <div className="setting__wrap">
        <div className="setting__title">
          <span className="setting__title__update">Update Your Account</span>
          <span className="setting__title__delete">Delete Account</span>
        </div>
        <form className="setting__form" autocomplete="off">
          <label htmlFor="profile_image">
            <img
              src={settingImg}
              alt=""
              className="setting__form__profile__img"
            />
          </label>
          <input
            type="file"
            id="profile_image"
            className="setting__form__img__input"
          />
          <div className="setting__form__PP">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="james" id="username" auto />
            <label htmlFor="username">Email</label>
            <input type="email" placeholder="james@gmail.com" id="username" />
            <label htmlFor="username">Password</label>
            <input type="password" id="username" />
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Setting;
