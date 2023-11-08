import React, { useState } from "react";
import axios from "axios";
import "./footer.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import insta from "../images/leauge/instagram.png";
import discord from "../images/leauge/icons8-discord-50.png";
import slack from "../images/leauge/slcak.png";

function Footor() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscriptionSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/subscribe",
        { email }
      );

      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Subscribed Successfully",
          text: "You have successfully subscribed to our newsletter!",
        });
        setEmail("");
      }
      
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Already Subscribed",
            text: error.response.data.error,
          });
        } else if (error.response.status === 401) {
          Swal.fire({
            icon: "error",
            title: "Invalid Format",
            text: error.response.data.error,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "An error occurred. Please try again later.",
          });
        }
      }
    }
  };



  return (
    <div className="footer">
      <div className="contnets-2">
        <div className="footer-content-left">
          <h1>
            MATCH <span>PULSE </span>
          </h1>
          <p>Relive the way you see.</p>
        </div>
        <div className="social-media-footer">
          <img className="insta-footerx-contact" src={insta} />
          <img className="discord-footerx-contact" src={discord} />
          <img className="slack-footerx-contact" src={slack} />
        </div>
        <div className="footer-content-right">
          <h1>SUBSCRIBE TO OUR NEWSLETTER!</h1>
          <input
            className="footer-newsletter"
            type="text"
            placeholder="ENTER EMAIL ID"
            value={email}
            onChange={handleEmailChange}
          />
          <button className="newsletter-sub" onClick={handleSubscriptionSubmit}>
            SUBMIT
          </button>
          <div className="complaints">
            <h1>FAQ/ HELP DESK</h1>
          </div>
        </div>
      </div>
      <div className="lastLine">
        <div className="footer-madeby">
          <p>
            &copy; {new Date().getFullYear()} Sangeeth Promod. All rights
            reserved.
          </p>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}

export default Footor;
