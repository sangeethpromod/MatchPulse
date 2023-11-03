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



/////////////////////////////////////////////////////////////////


@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

* {
    margin: 0;
    font-family: "Poppins";
}

body{
    overflow: hidden;
}

.main-container {
    width: 100%;
    max-height: 95vh;
    overflow: hidden;
}

.bg-image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

.bg-image img{
    width: 100%;
    height: 100%;
    z-index: 0;
}



.loginCard {
    width: 354px;
    height: 431px;
    flex-shrink: 0;
    padding: 20px;
    border-radius: 42px;
    box-shadow: 0px 10px 4px 7px rgba(0, 0, 0, 0.286);
    margin: 50px auto;
    border-radius: 42px;
    background: #000;
    margin-top: 98px;
    z-index: 1;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;

}
h2 {
    text-align: center;
    font-size: 34px;
    font-weight: bolder;
}

.username {
    padding-top: 40px;
    width: 352px;
    height: 44px;
    flex-shrink: 0;
    color: #DA1C29;
        text-align: left;
        font-family: Poppins;
        font-size: 23px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        letter-spacing: 1.95px;
}

.enterusername {
        width: 310px;
        height: 35px;
        flex-shrink: 0;
        border-radius: 42px;
        background: rgb(194, 194, 194);
        border: 0px;
        outline: 0px;
}
.enterEmail:hover {
    background-color: white;
}
.logpassword {
    padding: 25px;
    width: 352px;
        height: 17px;
        flex-shrink: 0;
        color: #DA1C29;
        text-align: left;
        font-family: Poppins;
        font-size: 23px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        letter-spacing: 1.95px;
}
.logenterpassword {
            width: 310px;
            height: 35px;
            flex-shrink: 0;
            border-radius: 42px;
            background: rgb(194, 194, 194);
            border: 0px;
            outline: 0px;
}

.logenterpassword:hover{
    background-color: white;
}
.signinButton{

            width: 130px;
            height: 44px;
            flex-shrink: 0;
            border-radius: 42px;
            background: #DA1C29;
            margin-top: 42px;
            font-size: 20px;
            font-weight: bolder;
            cursor: pointer;
            border: 0px;
            outline: 0px;
            transition: all 0.2s;
}

.signinButton:hover {
    background-color: #ffffff;
     width: 170px;
        height: 54px;
        font-size: 22px;
}


.forgotpassButton {

    width: 330px;
    height: 44px;
    flex-shrink: 0;
    border-radius: 42px;
    background: #DA1C29;
    margin-top: 16px;
    font-size: 20px;
    font-weight: bolder;
    cursor: pointer;
    border: 0px;
    outline: 0px;
    transition: all 0.2s;
}

.forgotpassButton:hover {
    background-color: #ffffff;
    width: 370px;
    height: 54px;
    font-size: 22px;
}
