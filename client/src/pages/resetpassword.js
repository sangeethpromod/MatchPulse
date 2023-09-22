// ResetPassword.js

import React, { useState } from "react";
import axios from "axios";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState("");

  const handleResetPassword = async () => {
    try {
      // Send a POST request to the backend to reset the password
      await axios.post("http://localhost:3000/reset-password", {
        token,
        newPassword: password,
      });

      alert(
        "Password reset successful. You can now log in with your new password."
      );
    } catch (error) {
      console.error("Password reset failed:", error);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
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
      <input
        type="text"
        placeholder="Enter reset token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
      <button onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
};

export default ResetPassword;
