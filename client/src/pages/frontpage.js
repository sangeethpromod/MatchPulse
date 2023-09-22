import React, { useEffect } from "react";
import "../css/front.css";
import video from "../images/front.webm"; // Replace with the actual path to your video file
import { useNavigate } from "react-router-dom";

function Frontpage() {
  useEffect(() => {
    const videoElement = document.getElementById("backgroundVideo");
    videoElement.play();
  }, []);
    const navigate = useNavigate();
     function loginPage() {
       navigate("/login");
     }
     function registerPage() {
       navigate("/signup");
     }

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="navbar-brand">MATCH PULSE</div>
        <div className="quote" style={{ marginRight: "590px" }}>
          {" "}
          KICK, RUN, SCORE - REPEAT.
        </div>
      </nav>

      <div>
        <button
          className="signinButton1"
          type="submit"
          variant="contained "
          onClick={loginPage}
        >
          SIGN IN
        </button>
      </div>

      <div>
        <button
          className="signinButton2"
          type="submit"
          variant="contained "
          onClick={registerPage}
        >
          SIGN UP
        </button>
      </div>

      <div className="bgVideo">
        <video
          id="backgroundVideo"
          autoPlay
          muted
          loop
          className="background-video"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Frontpage;
