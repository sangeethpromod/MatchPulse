import React, { useState, useEffect } from "react";
import axios from "axios";

const ResetPassword = (props) => {
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const token = props.match.params.token; // Extract the token from the route params

  useEffect(() => {
    // Send a GET request to check if the token is valid
    axios
      .get(`http://localhost:3000/validate-reset-token/${token}`)
      .then((response) => {
        if (response.status === 200) {
          setMessage("Token is valid. You can reset your password here.");
        } else {
          setMessage("Invalid or expired token. Please request a new one.");
        }
      })
      .catch((error) => {
        console.error("Token validation error:", error);
        setMessage("An error occurred. Please try again later.");
      });
  }, [token]);

  const handleResetPassword = async () => {
    try {
      // Send a POST request to reset the password
      await axios.post("http://localhost:3000/reset-password", {
        token,
        newPassword: password,
      });

      setMessage(
        "Password reset successful. You can now log in with your new password."
      );
    } catch (error) {
      console.error("Password reset failed:", error);
      setMessage("Password reset failed. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Password Reset</h2>
      <p>{message}</p>
      {message === "Token is valid. You can reset your password here." && (
        <div>
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button onClick={handleResetPassword}>Reset Password</button>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
