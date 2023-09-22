import React from "react";
import "../css/teamselectprem.css";

function PremireLeauge() {
  return (
    <div className="main-container">
      <div className="home-container">
        <nav className="navbarteam">
          <div className="navbar-brandteam">MATCH PULSE</div>
          <ul className="nav-linksteam">
            <li className="nav-link">HOME</li>
            <li className="nav-link">ABOUT</li>
            <li className="nav-link">CONTACT</li>
            <div></div>
          </ul>
        </nav>
        <div className="bg-color"></div>
        <div>
          <button className="manutd" type="submit" variant="contained">
            Man United
          </button>
        </div>

        <div>
          <button className="mancity" type="submit" variant="contained">
            Man city
          </button>
        </div>

        <div>
          <button className="chelsea" type="submit" variant="contained">
            Chelsea
          </button>
        </div>
      </div>
    </div>
  );
}

export default PremireLeauge;
