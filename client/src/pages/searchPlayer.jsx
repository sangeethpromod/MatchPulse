import React from "react";
import "../css/searchplayer.css";
import addidasad from "../images/leauge/1591331433.mp4"
// import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footor"


function SearchPlayer() {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/playerinfo");
  };

  return (
    <div className="searchpage-Container">
      <div>
        <Navbar />
      </div>

      {/* conainter 1--------------------------------------------------- */}
      <div className="search-container-1">
        <div className="search-card-1">
          <div className="search-card-content">
            <div className="search-card-left">
              <h1>
                SEARCH YOUR <br />
                FAVOURITE PLAYER
              </h1>
              <form>
                <input
                  className="search-bar-searchpage"
                  type="text"
                  placeholder="ENTER PLAYER NAME"
                />
                <button
                  className="searchpage-button"
                  type="submit"
                  onClick={handleSearch}
                >
                  SEARCH
                </button>
              </form>
            </div>
            <div className="center-line"></div>
            <div className="search-card-right">
              <video className="right-side-video" id="son" autoPlay loop muted>
                <source src={addidasad} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* footer-------------------- */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default SearchPlayer;
