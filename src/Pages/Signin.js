import React from "react";
import "../dist/css/Signin.css";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="signin">
      <span className="signin__title">Regular?</span>
      <form action="" className="signin__form" autoComplete="off">
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Your Email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="text" placeholder="Your Password" id="password" />
        <div className="button__wrap">
          <button className="signinBtn" type="submit">
            Sign In
          </button>
          <Link to="/register">
            <button className="registerBtn">Register</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signin;
