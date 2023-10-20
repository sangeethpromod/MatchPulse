import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import "../css/login.css";
import bgimage from "../images/signin.png";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleForgot = async () => {
    navigate("/forgotpassword")
  }

  const handleLogin = async () => {
    try {
      // Send a POST request to your backend login route
      const response = await axios.post("http://localhost:3000/auth/tokens", {
        username,
        password,
      });

      // Check if the response has a token
      if (response.data && response.data.token) {
        // JWT token on successful login
        const token = response.data.token;
        const username = response.data.username;
        const userId = response.data.userId;

        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        localStorage.setItem("userId", userId);


        Swal.fire({
          icon: "success",
          title: "Login successful",
        });
        navigate("/homepage");
      } else {

        
      }
    } catch (error) {
      console.error("Login error:", error);

      Swal.fire({
        icon: "error",
        title: "Login failed",
        text: "Please check your credentials",
      });
    }
  };
  return (
    <div className="main-container">
      <div className="bg-image">
        <img src={bgimage} alt="" />
      </div>
      <div className="loginCard">
        <form>
          <h2 style={{ color: "white" }}>SIGN IN</h2>
          <div className="username">
            <label htmlFor="username">USERNAME</label>
          </div>
          <div>
            <input
              type="text"
              className="enterusername"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="logpassword">
            <label htmlFor="password">PASSWORD</label>
          </div>
          <div>
            <input
              type="password"
              className="logenterpassword"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="button-row">
            <div>
              <button
                className="signinButton"
                type="button"
                onClick={handleLogin}
              >
                SIGN IN
              </button>
            </div>
          </div>

          <div className="button-row2">
            <div>
              <button
                className="forgotpassButton"
                type="button"
                 onClick={handleForgot}
              >
                FORGOT PASSWORD
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
