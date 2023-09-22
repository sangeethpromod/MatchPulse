import React from "react";
import "../css/leauge.css";
import backgroundImage from "../images/FRONTBG.jpg"; // Replace with the actual path to your image file
import { useNavigate } from "react-router-dom";

function SelectLeauge() {
  const navigate = useNavigate();

  function loginPage() {
    navigate("/login");
  }

  function registerPage() {
    navigate("/signup");
  }

  return (
    <div className="home-container">
      <nav className="navbars">
        <div className="navbar-brands">MATCH PULSE</div>
        <div className="xxx" style={{ marginRight: "590px" }}>
          KICK, RUN, SCORE - REPEAT.
        </div>
      </nav>

      <div>
        <button
          className="signinButton01"
          type="submit"
          variant="contained"
          onClick={loginPage}
        >
          SIGN IN
        </button>
      </div>

      <div>
        <button
          className="signinButton0"
          type="submit"
          variant="contained"
          onClick={registerPage}
        >
          SIGN UP
        </button>
      </div>

      <div className="bgImage">
        <img
          src={backgroundImage}
          alt="Background"
          className="background-image"
        />
      </div>
    </div>
  );
}

export default SelectLeauge;
