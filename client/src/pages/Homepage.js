import {React } from "react";
import video from "../images/BGVIDEO.mp4"; 
import fixture from "../images/fixture.jpg"
// import photo1 from "../images/searchplayer.jpg";

import "../css/home.css"; // Create a CSS file for styling

function MyWebpage() {
  return (
    <div className="Home-container">
      <header className="navbar">MATCH PULSE</header>
      <main>
        <div className="video-row">
          <video autoPlay loop muted className="video">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>


        </div>
        <div className="Secondary-container">
          <div className="photo-row1">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f9671a154878959.6502322c03066.jpg"
              alt="Photo 2"
              className="player-photo"
            />
            <button className="select-button1">SELECT TEAM</button>
            <div className="Players-Text">
              SELECT <br></br>YOUR PLAYER
            </div>
          </div>

          <div className="photo-row2">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/eb2dc0175026945.64ace1b850510.jpg"
              alt="Photo 2"
              className="team-photo"
            />
            <button className="select-button2">SELECT TEAM</button>
            <div className="Team-Text">
              SELECT YOUR <br></br>TEAM
            </div>
          </div>

          <div className="Fixture-row">
            <img src={fixture} alt="fixtureFoto" className="Fixture-Foto" />
          </div>
          <div className="fixture-Text">KNOW YOUR SCORE!</div>
          <button className="select-button3">SELECT TEAM</button>
        </div>
      </main>
    </div>
  );
}


export default MyWebpage;
