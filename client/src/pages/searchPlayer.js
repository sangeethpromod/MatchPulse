import React from "react";
import "../css/searchplayer.css";
import addidasad from "../images/leauge/1591331433.mp4"
// import { useNavigate } from "react-router-dom";

function Leauge() {
  // const navigate = useNavigate();

   // const handleCard1Click = () => {
  //   navigate("/searchplayer");
  // };


  return (
    <div className="searchpage-Container">
      <nav className="search-navbar">
        <div className="search-left-logo">
          <a href="/">MATCH PULSE</a>
        </div>
        <ul className="search-righthome-menu">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="/searchplayer">PLAYERS</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
          <li>
            <a href="/signout">SIGNOUT</a>
          </li>
        </ul>
      </nav>

      {/* conainter 1--------------------------------------------------- */}
      <div className="search-container-1">
        <div className="search-card-1">
          <div className="search-card-content">
            <div className="search-card-left">
              <form>
                <input type="text" placeholder="Enter your search query" />
                <button type="submit">Search</button>
              </form>
            </div>
            <div className="center-line"></div>
            <div className="search-card-right">
              <video className="right-side-video" id="son" autoPlay loop muted>
                <source src={addidasad} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* footer-------------------- */}
      <div className="leaugefooter">
        <div className="leauge-footerTextclass">
          <div className="leauge-faboutusclass">
            <h1 className="leauge-faboutus"> ABOUT US</h1>
            <p>
              <a href="https://www.instagram.com">Instagram</a>
              <br />
              <a href="https://www.facebook.com">Facebook</a>
              <br />
              <a href="https://www.linkedin.com">LinkedIn</a>
            </p>
          </div>
          <div className="leauge-flegalclass">
            <h1 className="flegal"> LEGAL</h1>
            <p>
              <a href="https://www.termsandcondiitionssample.com/live.php?token=0Fa1H13os8yowAiMxyMQ4SM5f8J3Wsrc">
                TERMS OF SERVICE
              </a>
              <br />
              <a href="https://www.termsandcondiitionssample.com/live.php?token=0Fa1H13os8yowAiMxyMQ4SM5f8J3Wsrc">
                TERMS OF USE
              </a>
              <br />
              <a href="https://www.linkedin.com">POLICY</a>
            </p>
          </div>
          <div className="leauge-fsupportclass">
            <h1 className="flegal"> SUPPORT</h1>
            <p>
              <a href="https://www.instagram.com">FAQ</a>
              <br />
              <a href="https://www.facebook.com">Help Desk</a>
            </p>
          </div>
        </div>
        <div className="leauge-madeby">
          <p>
            &copy; {new Date().getFullYear()} Sangeeth Promod. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Leauge;
