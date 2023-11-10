import { useState } from "react";
import "../css/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import Header from "../components/navbar"
import bgm from "../images/premire Leauge/background prem.jpg"

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: "",
    username: "",
    password: "",
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/register",
        formData
      );

      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Registration successful",
          text: "You have successfully registered.",
        });

        setIsSignedUp(false);
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        if (error.response.data.message === "User already exists") {
          Swal.fire({
            icon: "error",
            title: "User Exists",
            text: "Username or email already exists. Please choose different credentials.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Registration failed",
            text: "An error occurred during registration. Please try again later.",
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration failed",
          text: "An error occurred during registration. Please try again later.",
        });
      }
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/auth/tokens", {
        username: formData.username,
        password: formData.password,
      });

      if (response.data && response.data.token) {
        const { token, username, userId } = response.data;

        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        localStorage.setItem("userId", userId);

        Swal.fire({
          icon: "success",
          title: "Login successful",
        });
        navigate("/admin");
      } else {
        // Handle login failure if needed
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

  const handleSignUp = () => {
    setIsSignedUp(true);
  };

  const handleSignIn = () => {
    setIsSignedUp(false);
  };

  const handleForgot = () => {
    navigate("/forgotpassword");
  };
  return (
    <div className="login-parent">
      <img className="bg-login-image" src={bgm}></img>
      <div>
        <Header />
      </div>
      <div className="edit-this-container">
        <div className={`container ${isSignedUp ? "right-panel-active" : ""}`}>
          <div className="form-container sign-up-container">
            <form onSubmit={handleSubmit}>
              <h1 className="logo-headinghh1">
                <span style={{ color: "#bd0000", fontSize: "34px" }}>
                  MATCH{" "}
                </span>
                <span
                  className="logo-headingh1"
                  style={{ color: "white", fontSize: "34px" }}
                >
                  PULSE
                </span>
              </h1>
              <div className="social-container">
                <h1>Create Account</h1>
              </div>
              <span>or use your email for registration</span>
              <input
                type="text"
                name="username"
                placeholder="username"
                value={formData.username}
                onChange={handleChange}
              />
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email ID"
                value={formData.email}
                onChange={handleChange}
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                title="Please enter a valid email address"
              />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
              />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1 className="logo-headinghh1">
                <span style={{ color: "#bd0000", fontSize: "34px" }}>
                  MATCH{" "}
                </span>
                <span
                  className="logo-headingh1"
                  style={{ color: "white", fontSize: "34px" }}
                >
                  PULSE
                </span>
              </h1>
              <div className="social-container">
                <h1>Sign in</h1>
              </div>
              <span>or use your account</span>
              <input
                type="email"
                name="username"
                placeholder="Email"
                value={formData.username}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <button type="button" onClick={handleLogin}>
                SIGN IN
              </button>
              <button className="forgot-button" onClick={handleForgot}>
                Forgot Password
              </button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div
                className={`overlay-panel overlay-left ${
                  isSignedUp ? "" : "right-panel-active"
                }`}
              >
                <h1
                  style={{
                    color: "white",
                    fontSize: "34px",
                    textShadow: "3px 3px 0px rgba(0,0,0,0.6)",
                  }}
                >
                  Hey Admin!
                </h1>
                <p>
                  Enter your admin details and <br /> start the journey with us
                </p>
                <button className="ghost" onClick={handleSignIn} id="signIn">
                  Sign In
                </button>
              </div>
              <div
                className={`overlay-panel overlay-right ${
                  isSignedUp ? "right-panel-active" : ""
                }`}
              >
                <h1
                  style={{
                    color: "white",
                    fontSize: "34px",
                    textShadow: "3px 3px 0px rgba(0,0,0,0.6)",
                  }}
                >
                  Welcome Back!
                </h1>
                <p>
                  To keep connected with us please
                  <br /> login with your personal info
                </p>
                <button className="ghost" onClick={handleSignUp} id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
