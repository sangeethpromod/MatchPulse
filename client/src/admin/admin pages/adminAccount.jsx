import React, { useState } from "react";
import Header from "../../components/adminNavbar";
import Footer from "../../components/footor";
import Accountbg from "../../images/leauge/6222618.jpg";
import "../admincss/adminAccount.css";

function AdminAccount() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [profileImage, setProfileImage] = useState(
    "your_initial_profile_image_url.jpg"
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Read the selected file and set it as the profile image
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="adminAccount-main-container">
      <div>
        <Header />
      </div>
      <div className="admin-account-row1 ">
        <div className="admin-account-edit-left">
          <h1>ACCOUNT SETTINGS</h1>
          <form>
            <label htmlFor="teamImage" className="profile-photo-change">
              Choose File
            </label>
            <input
              className="team-photo-div-upload"
              type="file"
              id="teamImage"
              name="teamImage"
              accept="image/*"
              onChange={handleFileChange}
            />
            <img
              src={profileImage}
              alt="Profile"
              className="profile-picture-circular"
            />
            <div className="account-input-field">
              <h1>CHANGE NAME</h1>
              <input
                className="account-name-enter"
                type="text"
                id="teamImage"
                name="teamImage"
              />
            </div>
            <div className="account-input-field">
              <h1>CHANGE USERNAME</h1>
              <input
                className="account-name-enter"
                type="text"
                id="teamImage"
                name="teamImage"
              />
            </div>
            <div className="account-input-field">
              <h1>CHANGE PASSWORD</h1>
              <input
                className="account-name-enter"
                type="text"
                id="teamImage"
                name="teamImage"
              />
            </div>
            <button class="account-setting-okay-button">CLICK ME</button>
          </form>
        </div>
        <div className="admin-account-edit-right">
          <img className="account-card-bg" src={Accountbg} alt="Background" />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AdminAccount;
