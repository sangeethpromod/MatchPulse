import React, { useState } from "react";
import "./adminCreateTeam-form.css"
import FormForPremierLeague from "../admin components/adminCreateTeam-form";
import FormForLaLiga from "../admin components/adminCreateTeam-form";
import FormForSerieA from "../admin components/adminCreateTeam-form";
import FormForBundesliga from "../admin components/adminCreateTeam-form";
import FormForLigue1 from "../admin components/adminCreateTeam-form";
import Footer from "../../components/footor";

function CreateTeamForm() {
      const [wordCount, setWordCount] = useState(0);

      const handleDescriptionChange = (e) => {
        const text = e.target.value;
        const words = text.trim().split(/\s+/);
        setWordCount(words.length);

        if (words.length > 177) {
          // Truncate the description to 177 words
          e.target.value = words.slice(0, 177).join(" ");
          setWordCount(177);
        }
      };

        const [selectedFormation, setselectedFormation] = useState(""); // State to store the selected league
        const [displayForm, setDisplayForm] = useState(null); // State to control which form to display

        const handleLeagueChange = (event) => {
          setselectedFormation(event.target.value);
        };

        const handleOkButtonClick = () => {
          // Set the component to display based on the selected league
          if (selectedFormation === "4-3-3") {
            setDisplayForm(<FormForPremierLeague />);
          } else if (selectedFormation === "La Liga") {
            setDisplayForm(<FormForLaLiga />);
          } else if (selectedFormation === "Serie A") {
            setDisplayForm(<FormForSerieA />);
          } else if (selectedFormation === "Bundesliga") {
            setDisplayForm(<FormForBundesliga />);
          } else if (selectedFormation === "Ligue 1") {
            setDisplayForm(<FormForLigue1 />);
          }
        };
      
return (
  <div className="create-player-basic-from">
    <div className="form-statrs-here">
      <h1>PREMIRE LEAUGE FORM</h1>
      <form>
        <div className="enter-teamName">
          <h1>ENTER TEAM NAME</h1>
          <input
            className="enter-team-name-input"
            type="text"
            placeholder="Eg: Arsenal"
          />
        </div>

        <div className="team-photo-div">
          <h1>UPLOAD TEAM PHOTO</h1>
          <label htmlFor="teamImage" className="custom-file-input">
            Choose File
          </label>
          <input
            className="team-photo-div-upload"
            type="file"
            id="teamImage"
            name="teamImage"
            accept="image/*"
          />
        </div>
        <div className="enter-teamDesc">
          <h1>ENTER Team Description</h1>
          <textarea
            className="enter-team-Desc-textarea"
            placeholder="Eg: Arsenal is one of the English club giants."
            rows="4"
          ></textarea>
          <p>Words: {wordCount}</p>
        </div>
        <div className="formation-dropdown">
          <select onChange={handleLeagueChange} value={selectedFormation}>
            <option value="">Select a Formation</option>
            <option value="Premier League">4-3-3</option>
            <option value="La Liga">3-2-5-1</option>
            <option value="Serie A">5-3-2</option>
            <option value="Bundesliga">4-4-2</option>
            <option value="Ligue 1">4-2-2-2</option>
            <option value="Ligue 1">4-4-1-1</option>
            <option value="Ligue 1">3-4-3</option>
            <option value="Ligue 1">4-2-1-2</option>
          </select>
        </div>

        <div className="enter-trophy-count">
          <h1>PREMIRE LEAUGE TROPHIES WON</h1>
          <input
            className="enter-trophy-name-input"
            type="text"
            placeholder="0"
          />
        </div>
        <div className="ucl-trophy-count">
          <h1>CHAMPIONS LEAUGE TROPHIES WON</h1>
          <input
            className="enter-trophy-name-input"
            type="text"
            placeholder="0"
          />
        </div>
        <div className="uel-trophy-count">
          <h1>EUROPA LEAUGE TROPHIES WON</h1>
          <input
            className="enter-trophy-name-input"
            type="text"
            placeholder="0"
          />
        </div>
        <div className="uecl-trophy-count">
          <h1>CONFERENCE LEAUGE TROPHIES WON</h1>
          <input
            className="enter-trophy-name-input"
            type="text"
            placeholder="0"
          />
        </div>
        <div className="supercup-trophy-count">
          <h1>UEFA SUPER CUP TROPHIES WON</h1>
          <input
            className="enter-trophy-name-input"
            type="text"
            placeholder="0"
          />
        </div>
        <div className="carbao-trophy-count">
          <h1>CARBAO CUP TROPHIES WON</h1>
          <input
            className="enter-trophy-name-input"
            type="text"
            placeholder="0"
          />
        </div>
        <div className="facup-trophy-count">
          <h1>FA CUP TROPHIES WON</h1>
          <input
            className="enter-trophy-name-input"
            type="text"
            placeholder="Eg: Arsenal"
          />
        </div>
        <div className="clubwc-trophy-count">
          <h1>CLUB WORLDCUP TROPHIES WON</h1>
          <input
            className="enter-trophy-name-input"
            type="text"
            placeholder="0"
          />
        </div>
        <div className="Cshield-trophy-count">
          <h1>COMMUNITY SHIELD TROPHIES WON</h1>
          <input
            className="enter-trophy-name-input"
            type="text"
            placeholder="0"
          />
        </div>
        <div className="player-details-form">
        </div>
      </form>
    </div>
  </div>
);
};

export default CreateTeamForm