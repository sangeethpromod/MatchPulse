import React from "react";
import "../css/leauge.css";
import son from "../images/leauge/son.png"

function Leauge() {
  return (
    <div className="leaugepage-Container">
      <nav className="leauge-navbar">
        <div className="leauge-left-logo">
          <a href="/">MATCH PULSE</a>
        </div>
        <ul className="leauge-righthome-menu">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="/leauge">PLAYERS</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
          <li>
            <a href="/signout">SIGNOUT</a>
          </li>
        </ul>
      </nav>
      <div className="leauge-container-1">
        <div className="leauge-container-1-left">
          <h1>
            I want to play <br />
            <span class="red-text"> football</span> until my <br />
            <span class="red-text"> body</span> says, " You can't run anymore
            you're
            <span class="red-text"> dead.</span>"
          </h1>
        </div>
        <div className="leauge-container-1-right">
          <img className="leauge-art-image" src={son} />
        </div>
      </div>

      {/* Leauge container 2 starts here-------------------- */}
      <div className="leauge-container-2">
        <div className="leauge-container-2-heading">
          // <h1>SELECT YOUR LEAUGE!</h1>
        </div>
        <div className="leauge-cards">
          {/* Leauge card 1 starts here-------------------- */}
          <div className="leauge-card-1">
            <h1>CARD 1</h1>
          </div>
          {/* Leauge card 2 starts here-------------------- */}
          <div className="leauge-card-2">
            <h1>CARD 2</h1>
          </div>

          {/* Leauge card 3 starts here-------------------- */}
          <div className="leauge-card-3">
            <h1>CARD </h1>
          </div>
          {/* Leauge card 4 starts here-------------------- */}
          <div className="leauge-card-4">
            <h1>CARD </h1>
          </div>
          {/* Leauge card 5 starts here-------------------- */}
          <div className="leauge-card-5">
            <h1>CARD </h1>
          </div>
        </div>
      </div>
      {/* footer-------------------- */}
      <div className="leauge-footer">
      </div>
    </div>
  );
}

export default Leauge
