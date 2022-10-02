import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./style.module.css/Signup.css";

export const Signup = () => {
  const [signData, setSignData] = useState({
    userName: "",
    passWord: "",
    email: "",
  });
  const navigate = useNavigate();

  return (
    <div>
      <div className="signup_main_cont">
        <h1 style={{ fontWeight: "bold" }}>Sign up</h1>
        <form
        // onSubmit={handleSubmit}
        >
          <input
            className="inp1"
            type="text"
            name="userName"
            value={signData.userName}
            onChange={handleChange}
            placeholder="UserName"
            required
          />
          <br />
          <input
            className="inp2"
            type="password"
            name="passWord"
            value={signData.passWord}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <br />
          <input
            className="inp3"
            type="text"
            name="email"
            value={signData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <br />
          <input className="inp5" type="submit" value="Sign UP" />
        </form>
        <div style={{ paddingTop: "2px" }}>
          <span>Already have account </span>
          <Link style={{ color: "blue", fontSize: "15px" }} to={"/login"}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
