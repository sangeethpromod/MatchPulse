import React from 'react'
import "../css/teampage.css"
import Navbar from "../components/navbar"
import arsenalBG from "../images/arsenal.jpg"
import teamformation from "../images/433.png"
import pl from "../images/trophies/premB-removebg-preview.png"
import ucl from "../images/trophies/ucl-logo.png";
import uel from "../images/trophies/image (3).png";
import uecl from "../images/trophies/uecl-logo.png";
import supcup from "../images/trophies/image (2).png";
import carbao from "../images/trophies/image__1_-removebg-preview.png"
import fa from "../images/trophies/image-removebg-preview.png";
import clubwc from "../images/trophies/club_world_cup-removebg-preview.png";
import shield from "../images/trophies/Community-Shield-replica-2016-removebg-preview.png";
import blank from "../images/trophies/Solid_black.svg.png";

//this is space for player images later to be taken down
import P1 from "../images/trophies/Headshot_Ramsdale_1510x850_0.jpeg";


function Teampage() {
  return (
    <div className="teampage-main-container">
      <div>
        <Navbar />
      </div>
      <div className="teampage-photo1-container">
        <img className="team-bg-1" src={arsenalBG} />
      </div>
      <div className="info-container-teampage">
        <div className="left-desc-content">
          <h1>ARSENAL FC</h1>
          <p>
            Arsenal Football Club, known simply as
            <span style={{ color: "red" }}> Arsenal</span>, is a historic and
            revered football club located in Islington, London. Established in
            1886, it originated as
            <span style={{ color: "red" }}> Dial Square</span> before adopting
            the name
            <span style={{ color: "red" }}> Arsenal</span> when it moved to
            Highbury in 1913. The club's home matches are now played at the
            Emirates Stadium. With the moniker
            <span style={{ color: "red" }}> The Gunners</span>, Arsenal boasts
            an impressive record of domestic successes, including numerous
            league titles and FA Cup victories. Arsenal's engaging style of play
            and commitment to nurturing young talent through its academy have
            earned it a devoted and passionate fan base. The club maintains
            intense rivalries, notably with Tottenham Hotspur and Chelsea. Over
            the years, Arsenal has seen legendary players like Thierry Henry,
            Dennis Bergkamp, Tony Adams, and Ian Wright don its iconic
            <span style={{ color: "red" }}> red and white</span> colors.
            Currently, Arsenal competes in the Premier League, cementing its
            status as a key figure in English football.
          </p>
        </div>
        <div className="right-formation-content">
          <h1>FORMATION : 4-3-3</h1>
          <img className="formation-class" src={teamformation} />
        </div>
      </div>
      <h1 className="trophy-heading"> TROPHIES WON!</h1>
      <div className="team-trophy-class">
        <table className="custom-table">
          <tbody>
            <tr>
              {/* First row - images */}
              <td>
                <img className="pl" src={pl} />
              </td>
              <td>
                <img className="ucl" src={ucl} />
              </td>
              <td>
                <img className="uel" src={uel} />
              </td>
              <td>
                <img className="uel" src={uecl} />
              </td>
              <td>
                <img className="uel" src={supcup} />
              </td>
            </tr>

            <tr>
              {/* Second row - numbers */}
              <td>13</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>

            <tr>
              {/* Third row - images */}
              <td>
                <img className="fa" src={carbao} />
              </td>
              <td>
                <img className="fa" src={fa} />
              </td>
              <td>
                <img className="fa" src={clubwc} />
              </td>
              <td>
                <img className="sh" src={shield} />
              </td>
              <td>
                <img className="fa" src={blank} />
              </td>
            </tr>

            <tr>
              {/* Fourth row - numbers */}
              <td>2</td>
              <td>14</td>
              <td>0</td>
              <td>17</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1 className="trophy-heading"> SQUAD 2023-24</h1>
      <div className="player-list-teampage-1">
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P1} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                AARON <br /> RAMSDALE
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>1</h1>
            </div>
          </div>
        </div>
        {/*Goalkeepr 2 --------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P1} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                AARON <br /> RAMSDALE
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>1</h1>
            </div>
          </div>
        </div>
        {/*Goalkeepr 3 --------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P1} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                AARON <br /> RAMSDALE
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>1</h1>
            </div>
          </div>
        </div>
      </div>
      {/*PLAYER PAGE --------------------------------------- */}
      <div className="player-list-teampage-1">
        {/*PLAYER 1 --------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P1} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                AARON <br /> RAMSDALE
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>1</h1>
            </div>
          </div>
        </div>
        {/*PLAYER 2 --------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P1} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                AARON <br /> RAMSDALE
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>1</h1>
            </div>
          </div>
        </div>

        {/*player -3 --------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P1} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                AARON <br /> RAMSDALE
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>1</h1>
            </div>
          </div>
        </div>

        {/*player -4--------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P1} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                AARON <br /> RAMSDALE
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>1</h1>
            </div>
          </div>
        </div>
      </div>
      {/*PLAYER PAGE 2 --------------------------------------- */}

      <div className="player-list-teampage-1">
        {/*PLAYER 5 --------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P1} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                AARON <br /> RAMSDALE
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>1</h1>
            </div>
          </div>
        </div>
        {/*PLAYER 6 --------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P1} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                AARON <br /> RAMSDALE
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>1</h1>
            </div>
          </div>
        </div>

        {/*player -7 --------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P1} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                AARON <br /> RAMSDALE
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>1</h1>
            </div>
          </div>
        </div>

        {/*player -8--------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P1} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                AARON <br /> RAMSDALE
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>1</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teampage