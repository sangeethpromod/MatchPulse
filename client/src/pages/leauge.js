import React, { useState } from "react";
import "../css/leauge.css"; // Main CSS file for the layout
import card1Image from "../images/campnow.jpg"; 
import card2Image from "../images/premireleauge.jpg"; 
import card3Image from "../images/peakpx.jpg"; 
import card4Image from "../images/germany.jpg"; 
import card5Image from "../images/monaco.jpg"; 
import laliga from "../images/laliga-logo.png"
import prem from "../images/prem.png";
import seriea from "../images/SERIEA.png";
import bundesliga from "../images/bundesliga.png";
import ligue1 from "../images/ligue1.png";


const League = () => {
  const [focusedCard, setFocusedCard] = useState(null);

  const handleCardFocus = (cardNumber) => {
    setFocusedCard(cardNumber);
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${
      focusedCard === 1
        ? card1Image
        : focusedCard === 2
        ? card2Image
        : focusedCard === 3
        ? card3Image
        : focusedCard === 4
        ? card4Image
        : focusedCard === 5
        ? card5Image
        : "../images/liverpool.jpg"
    })`, // Set background image dynamically
  };


  return (
    <div className="league-container" style={backgroundImageStyle}>
      <nav className="leaugenavbar">
        <div className="leaugenavbar-content">MATCH PULSE</div>
        <ul className="leaugenavbar-links">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">PLAYERS</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>

      <div className="leaguecontainer-1">
        <div
          className={`card card-1 ${focusedCard === 1 ? "focused" : ""}`}
          onClick={() => handleCardFocus(1)}
        >
          <img className="card1img" src={laliga} alt="Card 1" />
          <button className="card1button">LA LIGA</button>
        </div>
        <div
          className={`card card-2 ${focusedCard === 2 ? "focused" : ""}`}
          onClick={() => handleCardFocus(2)}
        >
          <img className="card2img" src={prem} alt="Card 2" />
          <button className="card2button">PREMIRE LEAUGE</button>
        </div>
        <div
          className={`card card-3 ${focusedCard === 3 ? "focused" : ""}`}
          onClick={() => handleCardFocus(3)}
        >
          <img className="card3img" src={seriea} alt="Card 3" />
          <button className="card3button">SERIE A</button>
        </div>
      </div>

      <div className="leaguecontainer-2">
        <div
          className={`card card-4 ${focusedCard === 4 ? "focused" : ""}`}
          onClick={() => handleCardFocus(4)}
        >
          <img className="card4img" src={bundesliga} alt="Card 4" />
          <button className="card4button">BUNDESLIGA</button>
        </div>
        <div
          className={`card card-5 ${focusedCard === 5 ? "focused" : ""}`}
          onClick={() => handleCardFocus(5)}
        >
          <img className="card5img" src={ligue1} alt="Card 5" />
          <button className="card5button">LIGUE 1</button>
        </div>
      </div>
    </div>
  );
};

export default League;
