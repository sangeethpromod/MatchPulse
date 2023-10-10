// src/components/HomePage.js
import React, { useState }from "react";
import "../css/home.css";
import jude from "../images/jude.jpg"
import fixture from "../images/napvsreal.jpg"
import hometeam from "../images/teamimage.jpg"
import argentina from "../images/argentina.jpg"
import argentinalogo from "../images/fixtures/argentina logo.png";
import francelogo from "../images/fixtures/france.png";
import barcalogo from "../images/fixtures/barcalogo.png";
import reallogo from "../images/fixtures/realmadrid.png";

const HomePage = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  return (
    <div>
      <div className="homepage-container">
        <nav className="top-navbar">
          <div className="left-logo">MatchPulse</div>
          <ul className="righthome-menu">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
            <li>
              <a href="/league">LEAUGE</a>
            </li>
            <li>
              <a href="/contact">CONTACT</a>
            </li>
            <li>
              <a href="/signout">SIGNOUT</a>
            </li>
          </ul>
        </nav>

        <div className="fixed-photo" />

        <div className="hometestcontainer2">
          {/*----------------card 1 ------------------------------------------- */}
          <div className="homecard1">
            <img className="playerimageforhome" src={jude} />
            <p>
              <span>SELECT TO KNOW MORE</span>
              <span>ABOUT YOUR FAVORITE</span>
              <span className="player-text">PLAYER</span>
            </p>
            <button className="homecardbutton1"> PLAYERS</button>
          </div>

          {/*----------------card 2 ------------------------------------------- */}
          <div className="homecard2">
            <img className="fixtureimageforhome" src={fixture} />
            <p>
              <span>SELECT TO KNOW MORE</span>
              <span>ABOUT YOUR TEAMS</span>
              <span className="player-text">FIXTURE</span>
            </p>

            <button className="homecardbutton2"> FIXTURES</button>
          </div>
          {/*----------------card 2 ------------------------------------------- */}

          <div className="homecard3">
            <img className="teamimageforhome" src={hometeam} />
            <p>
              <span>SELECT TO KNOW MORE</span>
              <span>ABOUT YOUR FAVORITE</span>
              <span className="player-text">TEAM</span>
            </p>
            <button className="homecardbutton3"> TEAM</button>
          </div>
        </div>

        {/*----------------card 2 ------------------------------------------- */}
        <div className="hometestcontainer3">
          <p>RELIVE THE WORLDCUP EXPERIENCE!</p>
          <div className="fifFixtureCard">
            <img className="worldcupimage" src={argentina} />
            <img className="argentinalogo" src={argentinalogo} />
            <img className="francelogo" src={francelogo} />
            <h1 className="finalheading">FIFA WORLD CUP FINAL</h1>
            <div className="scoreclass">
              <h1 className="arScore">3</h1>
              <h1 className="vs">V/s</h1>
              <h1 className="frScore">3</h1>
            </div>
            <div className="belowtextforfinal">
              <p>
                <span>December 18 2022 |</span>
                <span> LUSAIL STADIUM</span>
              </p>
            </div>
          </div>
        </div>

        {/*----------------card 2 ------------------------------------------- */}

        <div className="hometestcontainer4">
          <div className="long-card1">
            <img className="barcalogohome" src={barcalogo} />
            <img className="reallogohome" src={reallogo} />
            <div className="longscoreclass">
              <h1 className="barcaScore">3</h1>
              <h1 className="brvs">V/s</h1>
              <h1 className="realScore">3</h1>
            </div>
          </div>



          <div className="long-card2">
            <div className="card-image left">Image Left</div>
            <div className="card-text">Card Text</div>
            <div className="card-image right">Image Right</div>
          </div>
          <div className="long-car3">
            <div className="card-image left">Image Left</div>
            <div className="card-text">Card Text</div>
            <div className="card-image right">Image Right</div>
          </div>
          {/* Repeat the long cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
