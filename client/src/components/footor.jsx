import React from 'react'
import "./footer.css"
import insta from "../images/leauge/instagram.png";
import discord from "../images/leauge/icons8-discord-50.png";
import slack from "../images/leauge/slcak.png";

function footor() {
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
          <h1>SUBSCRIBE TO OUT NEWSLETTER!</h1>
          <input
            className="footer-newsletter"
            type="text"
            placeholder="ENTER EMAIL ID"
          />
          <button className="newsletter-sub">SUBMIT</button>
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

export default footor