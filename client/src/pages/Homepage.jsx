// src/components/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
import Footer from "../components/footor"
import { useNavigate } from "react-router-dom";
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
import news2 from "../images/fixtures/leomessiinter.jpg";
import news3 from "../images/fixtures/pep.jpg";
import news4 from "../images/fixtures/haaland.jpg";
import footerImage from "../images/fixtures/maps.png";
import Navbar from "../components/navbar";


const HomePage = () => {
    const navigate = useNavigate();

    const handleCard1Click = () => {
      navigate("/searchplayer");
    };

    const handleCard2Click = () => {
      navigate("/fixture");
    };

    const handleCard3Click = () => {
      navigate("/leauge");
    };


  return (
    <div>
      <div className="homepage-container">
      <div><Navbar /></div>

        <div className="fixed-photo" />

        <div className="hometestcontainer2">
          {/*----------------card 1 ------------------------------------------- */}
          <div className="homecard1" onClick={handleCard1Click}>
            <img className="playerimageforhome" src={jude} />
            <p>
              <span>SELECT TO KNOW MORE</span>
              <span>ABOUT YOUR FAVORITE</span>
              <span className="player-text">PLAYER</span>
            </p>
          </div>

          {/*----------------card 2 ------------------------------------------- */}
          <div className="homecard2" onClick={handleCard2Click}>
            <img className="fixtureimageforhome" src={fixture} />
            <p>
              <span>SELECT TO KNOW MORE</span>
              <span>ABOUT YOUR TEAMS</span>
              <span className="player-text">FIXTURE</span>
            </p>
          </div>
          {/*----------------card 2 ------------------------------------------- */}

          <div className="homecard3" onClick={handleCard3Click}>
            <img className="teamimageforhomex" src={hometeam} />
            <p>
              <span>SELECT TO KNOW MORE</span>
              <span>ABOUT YOUR FAVORITE</span>
              <span className="player-text">TEAM</span>
            </p>
          </div>
        </div>

        {/*----------------card 2 ------------------------------------------- */}
        <div className="hometestcontainer3">
          <p>RELIVE THE WORLDCUP EXPERIENCE!</p>
          <Link to="https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/qatar2022/scores-fixtures?country=IN&wtw-filter=ALL">
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
          </Link>
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
              {/*          newscard1                                   */}
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
                    <button className="newscard1-button">KNOW MORE →</button>
                  </a>
                </div>
              </div>
              {/*          newscard 2                                   */}
              <div className="newscard2">
                <img className="newsimage2" src={news2} />
                <div className="insidenews-card2">
                  <h1>MESSI TO BARCELONA?</h1>
                  <p>
                    The Argentine has been linked with a move back to Catalunya
                    during the MLS off-season, but neither club nor the player
                    himself would benefit
                  </p>
                  <a
                    href="https://onefootball.com/en/news/exclusive-fabrizio-romano-on-lionel-messi-transfer-speculation-and-romantic-barcelona-return-38370200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="newscard2-button">KNOW MORE →</button>
                  </a>
                </div>
              </div>
              {/*          newscard 3                                   */}
              <div className="newscard3">
                <img className="newsimage3" src={news3} />
                <div className="insidenews-card3">
                  <h1>SOLUTION IS NEEDED!</h1>
                  <p>
                    Pep Guardiola refused to go into detail over a post-match
                    scuffle involving Kyle Walker, Erling Haaland and a member
                    of Arsenal's coaching staff.
                  </p>
                  <a
                    href="https://onefootball.com/en/news/pep-guardiolas-cryptic-explanation-of-walker-haaland-bust-up-38365875"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="newscard3-button">KNOW MORE →</button>
                  </a>
                </div>
              </div>
              {/*          newscard 4                                   */}
              <div className="newscard4">
                <img className="newsimage4" src={news4} />
                <div className="insidenews-card4">
                  <h1>TEAM OF THE WEEK</h1>
                  <p>
                    It’s still early days in the EA FC era, but fortunately
                    we’ve got another Team of the Week do get stuck into. Let’s
                    have a look!
                  </p>
                  <a
                    href="https://onefootball.com/en/news/the-ea-fc-24-team-of-the-week-has-dropped-38373291"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="newscard4-button">KNOW MORE →</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*          CONTAINER 5                                   */}
      <div className="homefooter"><Footer/></div>
      </div>
    </div>
  );
};

export default HomePage;
