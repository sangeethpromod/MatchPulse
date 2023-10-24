import React from 'react'
import "./admin.css"
import Navbar from '../components/navbar';
import Dashboard from './dashboard';

function admin() {
  return (
    <div className="admin-main-container">
      <div className="admin-navbar">
        <Navbar />
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
        <div><Dashboard /></div>
        </div>
      </div>
    </div>
  );
}

export default admin