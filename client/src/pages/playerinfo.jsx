import React from 'react'
import Navbar from "../components/navbar"
import "../css/playerinfo.css"
import messiwalp from "../images/messi.gif"
import playerImage from "../images/messi 2015 (1).jpg";
import BARCA from "../images/leauge/BARCA.png";
import psg from "../images/leauge/psg.png";
import arg from "../images/leauge/arg.png";
import inter from "../images/leauge/inter miami.png";
import Footer from "../components/footor"


function Playerinfo() {

    
  return (
    <div className="player-info-main-container">
      <div>
        <Navbar />
      </div>
      <div className="player-photo-info-page">
        <img className="messiwalp" src={messiwalp} />
      </div>
      <div className="first-row-player-info">
        <div className="first-row-player-info-left">
          <h1>
            Lionel Andrés
            <br /> Messi
          </h1>
          <h2>10</h2>
          <p>
            Lionel Messi, often referred to as the "GOAT" (Greatest of All
            Time), is an Argentine professional footballer widely recognized for
            his unparalleled skill and achievements. Born on June 24, 1987, in
            Rosario, Argentina, Messi's football journey began at an early age.
            Messi's illustrious career is predominantly associated with FC
            Barcelona, where he spent over two decades, amassing numerous
            titles, including multiple La Liga and UEFA Champions League
            championships. His dribbling, playmaking abilities, and incredible
            goal-scoring prowess set new standards in the football world. In
            August 2021, due to financial constraints at Barcelona, Messi
            transferred to Paris Saint-Germain (PSG), marking a historic move in
            football. Despite this shift, his legacy remains intact, and his
            impact on the sport is immeasurable. Messi's humility,
            sportsmanship, and philanthropy off the field also contribute to his
            legendary status. His journey from a young Argentine talent to a
            global football icon is a testament to his dedication, skill, and
            love for the beautiful game.
          </p>
        </div>
        <div className="first-row-player-info-right">
          <div className="outline">
            <img className="player-img-mes" src={playerImage} />
          </div>
        </div>
      </div>
      <div className="second-row-player-info">
        <h1>CURRENT STATS 2023</h1>
        <div stat-table-player-info>
          <table className="player-info-table">
            <tbody>
              <tr>
                {/* First row - images */}
                <td>MATCHES</td>
                <td>GOALS</td>
                <td>ASSISTS</td>
                <td>MINS</td>
                <td>YELLOW CARD</td>
                <td>RED CARD</td>
              </tr>
              <tr>
                {/* Second row - numbers */}
                <td>54</td>
                <td>37</td>
                <td>35</td>
                <td>4723</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="clubs-played-for">
        <h1>CLUBS PLAYED FOR</h1>
        <div className="club-images-for-players">
          <img className="cluabplay" src={BARCA} />
          <img className="cluabplay" src={psg} />
          <img className="cluabplay" src={inter} />
          <img className="cluabplay" src={arg} />
        </div>
      </div>
      <div>< Footer/></div>
    </div>
  );
}

export default Playerinfo