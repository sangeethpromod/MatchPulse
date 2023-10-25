import React, { useState } from "react";
import "./admin.css";
import Navbar from "../components/navbar";
import Dashboard from "./dashboard";
import adminpic from "./admin photos/bekham.jpg";

function Admin() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleChangePicture = () => {
    // Define the logic for changing the picture here
  };

  const handleEditName = () => {
    // Define the logic for editing the name here
  };

  return (
    <div className="admin-main-container">
      <div className="admin-navbar">
        <h1>MATCH PULSE</h1>
        <input
          className="search-navbar-admin"
          type="text"
          placeholder="SEARCH"
        />
        <div className="admin-profile-picture">
          <div className="profile-container" onClick={toggleDropdown}>
            <img className="adminpic" src={adminpic} alt="User Profile" />
          </div>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <button onClick={handleChangePicture}>Change Picture</button>
              <button onClick={handleEditName}>Edit Name</button>
            </div>
          )}
          <h1>HENRY KELIN</h1>
        </div>
      </div>
      <div className="admin-screen-split">
        <div className="admin-sidebar">
          <div className="dashboard-list">
            <button className="dashboard-button">DASHBOARD</button>
            <button className="admin-contact-button">CONTACT</button>
            <button className="newsletter-button">NEWSLETTER</button>
            <button className="announcment-button">ANNOUNCMENT</button>
            <button className="account-button">ACCOUNT</button>
            <button className="signout-admin-button">SIGNOUT</button>
          </div>
        </div>
        <div className="change-content-admin">
          <div>
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
