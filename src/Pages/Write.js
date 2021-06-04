import React from "react";
import "../dist/css/Write.css";
import { FaPlus } from "react-icons/fa";
import writeImg from "../Images/write_img.jpg";

function Write() {
  return (
    <div className="write">
      <div className="write__container">
        <img src={writeImg} alt="" className="write__img" />
        <form action="/write" className="write__form">
          <div className="write__form__group">
            <label htmlFor="fileInput">
              <FaPlus className="write__form__group__icon" />
            </label>
            <input
              className="write__form__group__file"
              type="file"
              id="fileInput"
              style={{ display: "none", verticalAlign: "center" }}
            />
            <input
              className="write__form__group__title"
              type="text"
              placeholder="Title"
              autoFocus={true}
            />
          </div>
          <div className="write__form__group">
            <textarea
              className="write__form__group__text"
              placeholder="Tell your story..."
              name=""
              id=""
              cols="30"
              rows="5"
            />
          </div>
          <button type="submit">Publish</button>
        </form>
      </div>
    </div>
  );
}

export default Write;
