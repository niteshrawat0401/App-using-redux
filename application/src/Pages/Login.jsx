import React from "react";
import { useState } from "react";
import "./style.module.css/Login.css";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [loginData, setLoginData] = useState({
    userName: "",
    passWord: "",
  });
  const navigate = useNavigate();

  return (
    <div>
      <div className="login_main_container">
        <form
        // onSubmit={handleLogin}
        >
          <h2 style={{ fontWeight: "bold" }}>Login</h2>
          <input
            className="inpu1"
            type="text"
            name="userName"
            value={loginData.userName}
            // onChange={handleChange}
            placeholder="UserName"
            required
          />
          <br />
          <div className="show_hide_password_div">
            <input
              className="inpu2"
              type="password"
              name="passWord"
              value={loginData.passWord}
              // onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <br />
          <input className="inpu3" type="submit" value="Login" />
        </form>
        <div style={{ paddingTop: "2px" }}>
          <span>Create a new account </span>
          <Link style={{ color: "blue", fontSize: "15px" }} to={"/signup"}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
