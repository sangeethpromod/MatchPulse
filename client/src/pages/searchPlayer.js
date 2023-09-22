import React, { } from "react";
import "../css/searchplayer.css";
import bgimage from "../images/searchplayer.jpg";
// import { useNavigate } from "react-router-dom";

function SearchPlayer() {
//   function Home() {
//     navigate("/homepage");
//   }
  return (
    <div className="main-container">
      <nav className="navbarSearch">
        <div className="navbar-brandSearch">MATCH PULSE</div>
        <ul className="nav-linksSearch">
          <li className="nav-linkSearch">HOME</li>
          <li className="nav-linkSearch">ABOUT</li>
          <li className="nav-linkSearch">CONTACT</li>
        </ul>
      </nav>

      <div className="bg-image">
        <img src={bgimage} alt="" />
      </div>
      <div>
      </div>
    </div>
  );
}

export default SearchPlayer;
