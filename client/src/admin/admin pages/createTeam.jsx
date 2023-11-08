import React from "react";
import "../admincss/createTeam.css";
import Footer from "../../components/footor";
import Navbar from "../../components/adminNavbar";

import ucl from "../../images/trophies/ucl-logo.png";
import uel from "../../images/trophies/image (3).png";
import uecl from "../../images/trophies/uecl-logo.png";
import supcup from "../../images/trophies/image (2).png";
import blank from "../../images/trophies/Solid_black.svg.png";

//this is space for player images later to be taken down
import P1 from "../../images/trophies/Headshot_Ramsdale_1510x850_0.jpeg";
import P2 from "../../images/trophies/Headshot_White_1510x850_0.jpeg";
import P3 from "../../images/trophies/Headshot_Hein_1510x850_0.jpeg";
import P4 from "../../images/trophies/saliba.png";
import P5 from "../../images/trophies/Headshot_White_1510x850_0.jpeg";
import P6 from "../../images/trophies/GAB.jpeg";
import P7 from "../../images/trophies/TIMBE.png";
import P8 from "../../images/trophies/Headshot_Trossard_1510x850_0.jpeg";
import P9 from "../../images/trophies/Headshot_Kiwior_1510x850_0.jpeg";
import P10 from "../../images/trophies/CED.png";
import P11 from "../../images/trophies/TOMY.png";
import P12 from "../../images/trophies/ZIN.jpeg";
import P13 from "../../images/trophies/THOMAS.jpeg";
import P14 from "../../images/trophies/ODENGARD.jpeg";
import P15 from "../../images/trophies/SMITH.jpeg";
import P16 from "../../images/trophies/JORGINO.jpeg";
import P17 from "../../images/trophies/vier.jpeg";
import P18 from "../../images/trophies/Elneny.jpeg";
import P19 from "../../images/trophies/KAI.jpeg";
import P20 from "../../images/trophies/rice.png";
import P21 from "../../images/trophies/saka.jpeg";
import P22 from "../../images/trophies/jesus.jpeg";
import P23 from "../../images/trophies/MARTINAELI.jpeg";
import P24 from "../../images/trophies/eddie.jpeg";
import P25 from "../../images/trophies/nelson.jpeg";
import arteta from "../../images/trophies/arteta.jpg";

function CreateTeam() {
  return (
    <div className="admin-create-team-main-container">
      <div>
        <Navbar />
      </div>
      <form>
        <div className="admin-create-team-main-poster-container">
          <label
            htmlFor="createTeam-Poster"
            className="create-team-poster-upload-admin"
          >
            UPLOAD TEAM POSTER
          </label>
          <input
            type="file"
            id="createTeam-Poster"
            className="create-team-poster-upload-admin-hidden"
            accept="image/*"
          />
        </div>
        <div className="admin-create-team-info-container">
          <div className="admin-create-team-left-desc-content">
            <label for="entering-team-name" className="admin-create-team-name">
              ENTER TEAM NAME
            </label>
            <input
              type="text"
              className="admin-create-team-name-input"
              id="entering-team-name"
              name="textValue"
            />
            {/*TEXT AREA FOR DESC----------------------------- */}
            <label
              for="toEnter-team-desc"
              className="admin-create-team-description-heading"
            >
              ENTER TEAM DESCRIPTION
            </label>
            <textarea
              className="admin-create-team-description"
              id="toEnter-team-desc"
              name="text1Value"
              rows="4"
              cols="50"
            ></textarea>
          </div>
          <div className="admin-create-team-right-formation-content">
            <label
              htmlFor="admin-formation-upload-photo"
              className="admin-create-team-formation-photo"
            >
              UPLOAD <br /> FORMATION
            </label>
            <input
              type="file"
              id="admin-formation-upload-photo"
              className="admin-create-team-formation-photo-hidden"
              accept="image/*"
            />
          </div>
        </div>
        <h1 className="admin-create-team-trophy-heading"> TROPHIES WON!</h1>
        <div className="admin-create-team-trophy-class">
          <table className="admin-create-team-custom-table">
            <tbody>
              <tr>
                {/* First row - images */}
                <td>
                  <label
                    htmlFor="admin-leauge-upload-photo"
                    className="admin-create-team-leauge-upload"
                  >
                    UPLOAD <br /> FORMATION
                  </label>
                  <input
                    type="file"
                    id="admin-leauge-upload-photo"
                    className="admin-create-team-leauge-upload-hidden"
                    accept="image/*"
                  />
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
                <td>
                  {/* Second row - numbers */}
                  <input
                    className="create-team-enter-trophy-num"
                    type="text"
                    placeholder="567"
                    inputMode="numeric"
                    maxLength="4"
                    pattern="[0-9]*"
                    onKeyPress={(e) => {
                      const pattern = /[0-9]/;
                      if (!pattern.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                </td>
                <td>
                  <input
                    className="create-team-enter-trophy-num"
                    type="text"
                    placeholder="567"
                    inputMode="numeric"
                    maxLength="4"
                    pattern="[0-9]*"
                    onKeyPress={(e) => {
                      const pattern = /[0-9]/;
                      if (!pattern.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                </td>
                <td>
                  <input
                    className="create-team-enter-trophy-num"
                    type="text"
                    placeholder="567"
                    inputMode="numeric"
                    maxLength="4"
                    pattern="[0-9]*"
                    onKeyPress={(e) => {
                      const pattern = /[0-9]/;
                      if (!pattern.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                </td>
                <td>
                  <input
                    className="create-team-enter-trophy-num"
                    type="text"
                    placeholder="567"
                    inputMode="numeric"
                    maxLength="4"
                    pattern="[0-9]*"
                    onKeyPress={(e) => {
                      const pattern = /[0-9]/;
                      if (!pattern.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                </td>
                <td>
                  <input
                    className="create-team-enter-trophy-num"
                    type="text"
                    placeholder="567"
                    inputMode="numeric"
                    maxLength="4"
                    pattern="[0-9]*"
                    onKeyPress={(e) => {
                      const pattern = /[0-9]/;
                      if (!pattern.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                </td>
              </tr>

              <tr>
                {/* Third row - images */}
                <td>
                  <label
                    htmlFor="admin-cup1-upload-photo"
                    className="admin-create-team-leauge-upload"
                  >
                    UPLOAD <br /> FORMATION
                  </label>
                  <input
                    type="file"
                    id="admin-cup1-upload-photo"
                    className="admin-create-team-leauge-upload-hidden"
                    accept="image/*"
                  />
                </td>
                <td>
                  <label
                    htmlFor="admin-cup2-upload-photo"
                    className="admin-create-team-leauge-upload"
                  >
                    UPLOAD <br /> FORMATION
                  </label>
                  <input
                    type="file"
                    id="admin-cup2-upload-photo"
                    className="admin-create-team-leauge-upload-hidden"
                    accept="image/*"
                  />
                </td>
                <td>
                  <label
                    htmlFor="admin-cup3-upload-photo"
                    className="admin-create-team-leauge-upload"
                  >
                    UPLOAD <br /> FORMATION
                  </label>
                  <input
                    type="file"
                    id="admin-cup3-upload-photo"
                    className="admin-create-team-leauge-upload-hidden"
                    accept="image/*"
                  />
                </td>
                <td>
                  <label
                    htmlFor="admin-cup4-upload-photo"
                    className="admin-create-team-leauge-upload"
                  >
                    UPLOAD <br /> FORMATION
                  </label>
                  <input
                    type="file"
                    id="admin-cup4-upload-photo"
                    className="admin-create-team-leauge-upload-hidden"
                    accept="image/*"
                  />
                </td>
                <td>
                  <img className="fa" src={blank} />
                </td>
              </tr>

              <tr>
                {/* Fourth row - numbers */}
                <td>
                  <input
                    className="create-team-enter-trophy-num"
                    type="text"
                    placeholder="567"
                    inputMode="numeric"
                    maxLength="4"
                    pattern="[0-9]*"
                    onKeyPress={(e) => {
                      const pattern = /[0-9]/;
                      if (!pattern.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                </td>
                <td>
                  <input
                    className="create-team-enter-trophy-num"
                    type="text"
                    placeholder="567"
                    inputMode="numeric"
                    maxLength="4"
                    pattern="[0-9]*"
                    onKeyPress={(e) => {
                      const pattern = /[0-9]/;
                      if (!pattern.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                </td>
                <td>
                  <input
                    className="create-team-enter-trophy-num"
                    type="text"
                    placeholder="567"
                    inputMode="numeric"
                    maxLength="4"
                    pattern="[0-9]*"
                    onKeyPress={(e) => {
                      const pattern = /[0-9]/;
                      if (!pattern.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                </td>
                <td>
                  <input
                    className="create-team-enter-trophy-num"
                    type="text"
                    placeholder="567"
                    inputMode="numeric"
                    maxLength="4"
                    pattern="[0-9]*"
                    onKeyPress={(e) => {
                      const pattern = /[0-9]/;
                      if (!pattern.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                </td>
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
                  EMILE <br /> SMITH ROWE
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
        <div className="admin-create-team-info-manager-teampage">
          <div className="left-manager-content">
            <label
              for="entering-managaer-name"
              className="admin-create-manager-name"
            >
              ENTER MANAGER NAME
            </label>
            <input
              type="text"
              className="admin-create-manager-name-input"
              id="entering-manager-name"
              name="textValue"
            />
            {/*TEXT AREA FOR DESC----------------------------- */}
            <label
              for="toEnter-manager-desc"
              className="admin-create-manager-description-heading"
            >
              ENTER MANAGER DESCRIPTION
            </label>
            <textarea
              className="admin-create-manager-description"
              id="toEnter-manager-desc"
              name="text1Value"
              rows="4"
              cols="50"
            ></textarea>
          </div>
          <div className="admin-create-team-right-manager-content">
            <label
              htmlFor="admin-leauge-upload-photo"
              className="admin-create-team-manager-upload"
            >
              UPLOAD <br /> FORMATION
            </label>
            <input
              type="file"
              id="admin-leauge-upload-photo"
              className="admin-create-team-manager-upload-hidden"
              accept="image/*"
            />
          </div>
        </div>
      </form>
      <div className="teampage-footor">
        <Footer />
      </div>
    </div>
  );
}

export default CreateTeam;
