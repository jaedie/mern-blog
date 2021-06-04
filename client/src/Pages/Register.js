import React from "react";
import "../dist/css/Register.css";

function Register() {
  return (
    <div className="register">
      <span className="register__title">New?</span>
      <form action="" className="register__form" autoComplete="off">
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Your username" id="username" />
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Your Email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="text" placeholder="Your Password" id="password" />
        <label htmlFor="password">Confirm Password</label>
        <input type="text" placeholder="Confirm Password" id="password" />
        <div className="button__wrap">
          <button className="registerBtn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
