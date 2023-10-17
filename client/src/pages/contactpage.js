import React from "react";
import "../css/contact.css";
import contactbg from "../images/leauge/6222618.jpg";
import insta from "../images/leauge/instagram.png";
import discord from "../images/leauge/discord.png";
import slack from "../images/leauge/slcak.png";
import Navbar from "../components/navbar"

function ContactPage() {
  // const navigate = useNavigate();

  // const handleCard1Click = () => {
  //   navigate("/searchplayer");
  // };

  return (
    <div className="contactpage-Container">
    <div><Navbar /></div>

      {/* conainter 1--------------------------------------------------- */}
      <div className="contact-container-1">
        <img className="contact-bg" src={contactbg} />
        <div className="contact-card">
          <h1>
            GET <br /> IN TOUCH
          </h1>
          <form>
            <div className="contact-line1">
              <input
                className="contact-first-name"
                type="text"
                placeholder="ENTER FIRST NAME"
              />
              <input
                className="contact-last-name"
                type="text"
                placeholder="ENTER LAST NAME"
              />
            </div>
            <div className="contact-line2">
              <input
                className="contact-emailid"
                type="text"
                placeholder="ENTER EMAIL ID"
              />
              <input
                className="contact-mobileNum"
                type="text"
                placeholder="ENTER MOBILE NUM"
              />
            </div>
            <div className="contact-line3">
              <input
                className="contact-message"
                type="text"
                placeholder="ENTER MESSAGE"
              />
            </div>
            <div className="contact-button">
              <button className="contactpage-button" type="submit">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* footer-------------------- */}
      <div className="contactfooter">
        <div className="contact-details-footer">
          <div className="contact-logo-footer">
            <h1>
              MATCH <span>PULSE </span>
            </h1>
            <p>Relive the way you see.</p>
          </div>
          <div className="contact-footer-logos">
            <img className="insta-footer-contact" src={insta} />
            <img className="discord-footer-contact" src={discord} />
            <img className="slack-footer-contact" src={slack} />
          </div>
        </div>
        <div className="lastLine">
          <div className="contact-madeby">
            <p>
              &copy; {new Date().getFullYear()} Sangeeth Promod. All rights
              reserved.
            </p>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
