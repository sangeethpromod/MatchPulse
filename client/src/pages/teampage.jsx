import React from 'react'
import "../css/teampage.css"
import Footer from "../components/footor"
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
import P2 from "../images/trophies/Headshot_White_1510x850_0.jpeg"
import P3 from "../images/trophies/Headshot_Hein_1510x850_0.jpeg";
import P4 from "../images/trophies/saliba.png";
import P5 from "../images/trophies/Headshot_White_1510x850_0.jpeg";
import P6 from "../images/trophies/GAB.jpeg";
import P7 from "../images/trophies/TIMBE.png";
import P8 from "../images/trophies/Headshot_Trossard_1510x850_0.jpeg";
import P9 from "../images/trophies/Headshot_Kiwior_1510x850_0.jpeg";
import P10 from "../images/trophies/CED.png";
import P11 from "../images/trophies/TOMY.png";
import P12 from "../images/trophies/ZIN.jpeg";
import P13 from "../images/trophies/THOMAS.jpeg";
import P14 from "../images/trophies/ODENGARD.jpeg";
import P15 from "../images/trophies/SMITH.jpeg";
import P16 from "../images/trophies/JORGINO.jpeg";
import P17 from "../images/trophies/vier.jpeg";
import P18 from "../images/trophies/Elneny.jpeg";
import P19 from "../images/trophies/KAI.jpeg";
import P20 from "../images/trophies/rice.png";
import P21 from "../images/trophies/saka.jpeg";
import P22 from "../images/trophies/jesus.jpeg";
import P23 from "../images/trophies/MARTINAELI.jpeg";
import P24 from "../images/trophies/eddie.jpeg";
import P25 from "../images/trophies/nelson.jpeg";
import arteta from "../images/trophies/arteta.jpg";


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
            <img className="player-pics" src={P2} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                DAVID <br /> RAYA
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>22</h1>
            </div>
          </div>
        </div>

        {/*player -9--------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P3} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                KARL <br /> HEIN
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>31</h1>
            </div>
          </div>
        </div>

        {/*player -1--------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P4} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                WILLIAM
                <br /> SALIBA
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>2</h1>
            </div>
          </div>
        </div>
        {/*PLAYER 2 --------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P5} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                BEN <br /> WHITE
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>4</h1>
            </div>
          </div>
        </div>
      </div>
      {/*PLAYER PAGE --------------------------------------- */}
      <div className="player-list-teampage-1">
        {/*PLAYER 3 --------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P6} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                GABRIEL
                <br />
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>6</h1>
            </div>
          </div>
        </div>
        {/*PLAYER 2 --------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P7} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                JURRIEN <br /> TIMBER
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>12</h1>
            </div>
          </div>
        </div>
        {/*player -3 --------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P8} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                LEANDRO <br /> TROSSARD
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>19</h1>
            </div>
          </div>
        </div>

        {/*player -4 --------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P9} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                JAKUB <br /> KIWIOR
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>15</h1>
            </div>
          </div>
        </div>

        {/*player -5--------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P10} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                CERDRIC <br />
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>17</h1>
            </div>
          </div>
        </div>
      </div>
      {/*PLAYER PAGE 2 --------------------------------------- */}

      <div className="player-list-teampage-1">
        {/*PLAYER 6 --------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P11} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                TAKEHIRO <br /> TOMIYASU
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>18</h1>
            </div>
          </div>
        </div>
        {/*PLAYER 7 --------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P12} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                OLEKSANDER <br /> ZINCHENKO
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>35</h1>
            </div>
          </div>
        </div>

        {/*player -8 --------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P13} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                THOMAS <br /> PARLEY
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>5</h1>
            </div>
          </div>
        </div>

        {/*player -9--------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P14} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                MARTIN <br /> ODEGAARD
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>8</h1>
            </div>
          </div>
        </div>
        {/*player -10 --------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P15} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                EMILE <br /> SMITH 
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>10</h1>
            </div>
          </div>
        </div>
      </div>
      {/*PLAYER PAGE 2 --------------------------------------- */}

      <div className="player-list-teampage-1">
        {/*PLAYER 6 --------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P16} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                JORGINHO <br />
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>20</h1>
            </div>
          </div>
        </div>
        {/*PLAYER 7 --------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P17} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                FABIO <br /> VIEIRA
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>21</h1>
            </div>
          </div>
        </div>

        {/*player -8 --------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P18} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                MOHAMED <br /> ELNENY
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>25</h1>
            </div>
          </div>
        </div>

        {/*player -9--------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P19} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                KAI <br /> HAVERTZ
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>29</h1>
            </div>
          </div>
        </div>
        {/*player -10 --------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P20} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                DECLAN <br /> RICE
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>41</h1>
            </div>
          </div>
        </div>
      </div>
      {/*PLAYER PAGE 2 --------------------------------------- */}

      <div className="player-list-teampage-1">
        {/*PLAYER 6 --------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P21} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                BUKAYO <br /> SAKA
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>7</h1>
            </div>
          </div>
        </div>
        {/*PLAYER 7 --------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P22} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                GABRIEL <br /> JESUS
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>9</h1>
            </div>
          </div>
        </div>

        {/*player -8 --------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P23} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                GABRIEL <br /> MARTINELLI
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>11</h1>
            </div>
          </div>
        </div>

        {/*player -9--------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P24} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                EDDIE <br /> NKETIAH
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>14</h1>
            </div>
          </div>
        </div>
        {/*player -10 --------------------------------------- */}
        <div className="goalkeeper-card1">
          <div className="goalkeeper-image-1">
            <img className="player-pics" src={P25} />
          </div>
          <div className="below-grid">
            <div className="below-grid-left">
              <h1>
                REISS <br /> NELSON
              </h1>
            </div>
            <div className="below-grid-right">
              <h1>24</h1>
            </div>
          </div>
        </div>
      </div>

      {/*MANAGER INFO --------------------------------------- */}
      <div className="info-manager-teampage">
        <div className="left-manager-content">
          <h1>Mikel Arteta</h1>
          <p>
            Mikel Arteta, born on March 26, 1982, is a Spanish football manager
            and former professional player renowned for his contributions to the
            sport. Arteta's football journey began as a youth player at the
            prestigious FC Barcelona's La Masia academy. He made his
            professional debut for Paris Saint-Germain in 1999 and later played
            for Rangers, Real Sociedad, Everton, and most notably, Arsenal in
            the Premier League. Arteta was known for his exceptional passing
            ability and vision as a midfielder. He was a key figure at Arsenal,
            serving as club captain and earning plaudits for his leadership on
            and off the field. His playing career reached its pinnacle with
            Arsenal, where he won two FA Cups. Transitioning into management,
            Arteta took the reins at Arsenal as head coach in December 2019. His
            tenure has seen a focus on tactical discipline and youth
            development. He secured another FA Cup in his debut season. While
            his management career is still in its early stages, Arteta's
            influence on the Arsenal squad and his tactical acumen continue to
            shape the club's future.
          </p>
        </div>
        <div className="right-manager-content">
          <img className="manager-class" src={arteta} />
        </div>
      </div>
      <div className="teampage-footor">< Footer/></div>
    </div>
  );
}

export default Teampage