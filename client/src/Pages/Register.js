import React, { useState } from "react";
import "../dist/css/Register.css";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, confirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios("/auth", {
      username,
      email,
      password,
      password2,
    });
    console.log(res);
  };

  return (
    <div className="register">
      <span className="register__title">New?</span>
      <form
        action=""
        className="register__form"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Your username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Your Email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          placeholder="Your Password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password">Confirm Password</label>
        <input
          type="text"
          placeholder="Confirm Password"
          id="password"
          onChange={(e) => confirmPassword(e.target.value)}
        />
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
