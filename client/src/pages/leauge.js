import React from "react";
import "../css/leauge.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import son from "../images/leauge/1669864315.mp4"
import bigimage from "../images/leauge/leaugepo.png";
import premireLeaugeLogo from "../images/leauge/premB-removebg-preview.png";
import laLigaLogo from "../images/leauge/laligabw.png"
import serieLogo from "../images/leauge/seire a.png"
import bundesligaLogo from "../images/leauge/bundesbw-removebg-preview.png"
import ligue1Logo from "../images/leauge/l-removebg-preview.png";
import Navbar from "../components/navbar"

function Leauge() {

    const navigate = useNavigate();

    const handleCard1Click = () => {
      navigate("/searchplayer");
    };

    const handleCard2Click = () => {
      navigate("/searchplayer");
    };

    const handleCard3Click = () => {
      navigate("/searchplayer");
    };
    
    const handleCard4Click = () => {
      navigate("/searchplayer");
    };

    const handleCard5Click = () => {
      navigate("/searchplayer");
    };


  return (
    <div className="leaugepage-Container">
    <div><Navbar /></div>
      <div className="leauge-container-1">
        <div className="leauge-container-1-left">
          <h1>
            I want to play <br />
            <span class="red-text"> FOOTBALL</span> until my <br />
            <span class="red-text"> BODY</span> says, " You can't run anymore
            you're
            <span class="red-text"> DEAD</span>."
          </h1>
        </div>
        <div className="leauge-container-1-right">
          <video className="leauge-art-image" id="son" autoPlay loop muted>
            <source src={son} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Leauge container 2 starts here-------------------- */}
      <div className="leauge-container-2">
        <div className="leauge-container-2-heading">
          // <h1>SELECT YOUR LEAUGE!</h1>
        </div>
        <div className="leauge-cards">
          {/* Leauge card 1 starts here-------------------- */}
          <div className="leauge-card-1" onClick={handleCard1Click}>
            <img className="leauge-card-1-logo" src={premireLeaugeLogo} />
            <h1>PREMIRE LEAUGE</h1>
          </div>
          {/* Leauge card 2 starts here-------------------- */}
          <div className="leauge-card-2" onClick={handleCard2Click}>
            <img className="leauge-card-2-logo" src={laLigaLogo} />
            <h1>
              LA LIGA <br /> EA SPORTS
            </h1>
          </div>

          {/* Leauge card 3 starts here-------------------- */}
          <div className="leauge-card-3" onClick={handleCard3Click}>
            <img className="leauge-card-3-logo" src={serieLogo} />
            <h1>
              SERIE A <br /> TIM
            </h1>
          </div>
          {/* Leauge card 4 starts here-------------------- */}
          <div className="leauge-card-4" onClick={handleCard4Click}>
            <img className="leauge-card-4-logo" src={bundesligaLogo} />
            <h1>BUNDESLIGA</h1>
          </div>
          {/* Leauge card 5 starts here-------------------- */}
          <div className="leauge-card-5" onClick={handleCard5Click}>
            <img className="leauge-card-5-logo" src={ligue1Logo} />
            <h1>
              UBER EATS <br /> LIGUE 1
            </h1>
          </div>
        </div>
      </div>
      {/* container3-------------------- */}
      <div className="leauge-container-3">
        <img className="big-image-leauge" src={bigimage} />
        <h1>
          MORE <span class="leauge-text">LEAUGES</span> COMING SOON!
        </h1>
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

export default Leauge
