import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import "../css/premireleauge.css";
import arsenalLogo from "../images/premire Leauge/arsenal.png";
import arsenalPoster from "../images/premire Leauge/1080x1920_wallpaper_3.jpg";
import manutdLogo from "../images/premire Leauge/manlogo.png";
import manutdPoster from "../images/premire Leauge/manutdoo.png";



function PremireLeauge() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [arsenalPoster, manutdPoster];
  const logos = [arsenalLogo, manutdLogo]; // Include all the logos here

  const imageContent = [
    {
      heading: "ARSENAL",
      description:
        "",
      buttonText: "ARSENAL",
      link: "/team1",
      logo: logos[0], // Corresponding logo
    },
    {
      heading: "MAN UNITED",
      description:
        "Manchester United is an English professional football club based in Manchester, United Kingdom. Man United compete in the Premier League, the top flight of English football.",
      buttonText: "Button 2",
      link: "/team2",
      logo: logos[1], // Corresponding logo
    },
    {
      heading: "Image 3 Heading",
      description: "Description for Image 3",
      buttonText: "Button 3",
      link: "/team3",
      logo: logos[0], // Use logos[0] for the third item
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="prem-container">
      <Navbar />
      <div className="prem-start-container">
        <div className="prem-carousel-card">
          <div className="prem-carousel-content">
            <div className="carousel-content-left">
              <h1>{imageContent[currentIndex].heading}</h1>
              <p>{imageContent[currentIndex].description}</p>
              <Link to={imageContent[currentIndex].link}>
                <div className="prem-team-logo-images">
                  <img
                    className="prem-team-logos"
                    src={imageContent[currentIndex].logo} // Use the logo from imageContent
                    alt={`Image ${currentIndex}`}
                  />
                </div>
                <button className="team-prem-button">
                  {imageContent[currentIndex].buttonText}
                </button>
              </Link>
            </div>
            <div className="premline"></div>
            <div className="prem-carousel-content-right">
              <img
                className="prem-team-images"
                src={images[currentIndex]}
                alt={`Image ${currentIndex}`}
              />
            </div>
          </div>
        </div>
        <button onClick={handlePrev} className="carousel-button-prev">
          Previous
        </button>
        <button onClick={handleNext} className="carousel-button-next">
          Next
        </button>
      </div>
    </div>
  );
}

export default PremireLeauge;
