import React, { useState } from "react";
import axios from "axios";
import bgimageforg from "../images/signin.png"
import Swal from "sweetalert2"; 
import "../css/forgotpass.css";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = async () => {
    try {
      // Send a POST request to the backend to initiate the password reset
      await axios.post("http://localhost:3000/auth/forgot-password", { email });

      // Display a success message using Swal
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Password reset link sent to your email.",
      });
    } catch (error) {
      console.error("Password reset request failed:", error);
    }
  };

  return (
    <div className="forg-container">
      <div className="bg-image">
        <img src={bgimageforg} alt="" />
      </div>
      <div className="forgotCard">
        <form>
          <div className="passhead">
            <label htmlFor="forgotpassword">ENTER YOUR PASSWORD</label>
          </div>
          <div>
            <input
              type="email"
              className="forgenteremail"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="button-rowx">
              <button className="forget-button" onClick={handleResetPassword}>Reset Password</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
