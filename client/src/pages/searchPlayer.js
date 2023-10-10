import React, { useState } from "react";
import "../css/searchplayer.css";

function SearchPlayer() {
  // Define state to manage the input value
  const [searchQuery, setSearchQuery] = useState("");

  // Handle input value changes
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

    const handleButtonClick = () => {
      // Handle the button click event here
      alert(`Search for: ${searchQuery}`);
    };

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
        <img
          srcSet="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e4efc5120213369.60ad4457e1a6d.png 600w,https://mir-s3-cdn-cf.behance.net/project_modules/fs/e4efc5120213369.60ad4457e1a6d.png 1920w,https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e4efc5120213369.60ad4457e1a6d.png 1200w,https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/e4efc5120213369.60ad4457e1a6d.png 1400w,"
          alt=""
        />
      </div>

      {/* Input field */}
      <div className="search-input-container">
        <input
          type="text"
          placeholder="ENTER PLAYER NAME"
          value={searchQuery}
          onChange={handleInputChange}
          className="search-input"
        />
        <button
          type="button"
          className="search-button"
          onClick={handleButtonClick}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchPlayer;
