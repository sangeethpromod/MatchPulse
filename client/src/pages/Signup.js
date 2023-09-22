import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import "../css/signup.css";
import bgimage from "../images/signup.png";

const Signup = () => {
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

        navigate("/login");
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
  return (
    <div className="main-container">
      <div className="bg-image">
        <img src={bgimage} alt="" />
      </div>
      <div className="signUpCard ">
        <form onSubmit={handleSubmit}>
          <h2 style={{ color: "white" }}>SIGN IN</h2>
          <div className="firstName">
            <label htmlFor="firstName">USERNAME</label>
          </div>
          <div className="username">
            <label htmlFor="username">USERNAME</label>
          </div>
          <div>
            <input
              type="text"
              name="username"
              className="enterusername"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="reg-name">
            <label htmlFor="name">NAME</label>
          </div>
          <div>
            <input
              type="text"
              name="name"
              className="enterregname"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="reg-email">
            <label htmlFor="email">EMAIL</label>
          </div>
          <div>
            <input
              type="email"
              name="email"
              className="enterregemail"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="regpassword">
            <label htmlFor="password">PASSWORD</label>
          </div>
          <div>
            <input
              type="password"
              name="password"
              className="enterregpassword"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div>
            {/* <button className='btn btn-primary'>Sign In</button> */}
            <button type="submit" className="signupButton">
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup
