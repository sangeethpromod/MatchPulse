import React, { useState } from "react";
import "./adminNavbar.css";
import adminpic from "../admin/admin photos/bekham.jpeg";

function AdminNavbar() {
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
    <div className="admin-navbar">
      <h1>MATCH PULSE</h1>
      <input className="search-navbar-admin" type="text" placeholder="SEARCH" />
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
  );
}

export default AdminNavbar;
