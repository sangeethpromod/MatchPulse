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
import acMilan from "../images/fixtures/acmilan.png";
import interMilan from "../images/fixtures/intermilan.png";
import mancity from "../images/fixtures/mancity.png";
import manutd from "../images/fixtures/manUtd.png";
import newsposter from "../images/mnposter.jpg"
import news1 from "../images/fixtures/hazard.jpg"

const HomePage = () => {


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
          <p>JUST AROUND THE CORNER!</p>

          {/*          LONG CARD 1                                   */}
          <div className="long-card1">
            <div className="long-card1-photos">
              <img className="barcalogohome" src={barcalogo} />
              <img className="reallogohome" src={reallogo} />
            </div>
            <div className="card1center-text">
              <p>
                <span className="c1L1">OCTOBER 29, 2023 </span>
                <br />
                <span className="c1L2"> SPOTIFY CAMP NOU</span>
              </p>
            </div>
          </div>

          {/*          LONG CARD 2                                   */}
          <div className="long-card2">
            <div className="long-car21-photos">
              <img className="intermilanlogohome" src={interMilan} />
              <img className="acmilanlogohome" src={acMilan} />
            </div>
            <div className="card2center-text">
              <p>
                <span className="c2L1">APRIL 21, 2024 </span>
                <br />
                <span className="c2L2"> SAN SIRO</span>
              </p>
            </div>
          </div>

          {/*          LONG CARD 3                                   */}
          <div className="long-card3">
            <div className="long-card3-photos">
              <img className="manutdlogohome" src={manutd} />
              <img className="mancitylogohome" src={mancity} />
            </div>
            <div className="card3center-text">
              <p>
                <span className="c3L1">OCTOBER 29,2024 </span>
                <br />
                <span className="c3L2"> OLD TRAFFORD</span>
              </p>
            </div>
          </div>
        </div>
        {/*          CONTAINER 5                                   */}
        <div className="hometestcontainer5">
          <div className="corosel-bg">
            <img className="newsposter" src={newsposter} />

            <div className="newscards">
              <div className="newscard1">
                <img className="newsimage1" src={news1} />
                <div className="insidenews-card1">
                  <h1>EDEN HAZARD RETIRES!</h1>
                  <p>
                    Eden Hazard announced his retirement from football. The
                    32-year-old has been a free agent since leaving Real Madrid
                    in June.
                  </p>
                  <a
                    href="https://onefootball.com/en/news/why-eden-hazard-failed-at-real-madrid-38370394"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="newscard1-button">CLICK TO GO</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*          CONTAINER 5                                   */}
        <div className="homefooter"></div>
      </div>
    </div>
  );
};

export default HomePage;
