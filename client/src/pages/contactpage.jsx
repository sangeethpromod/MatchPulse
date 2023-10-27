import React from "react";
import "../css/contact.css";
import contactbg from "../images/leauge/6222618.jpg";
import Footer from "../components/footor"
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
      <div><Footer/></div>
      
      </div>
    </div>
  );
}

export default ContactPage;
