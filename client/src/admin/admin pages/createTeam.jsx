import React, { useState } from "react";
import "../admincss/createTeam.css";
import AdminNavbar from "../../components/adminNavbar";
import adminAdd from "../admin photos/admin-create-add.mp4";
import FormForPremierLeague from "../admin components/adminCreateTeam-form"; 
import FormForLaLiga from "../admin components/adminLaliga"; 
import FormForSerieA from "../admin components/adminSerieA"; 
import FormForBundesliga from "../admin components/adminBundesliga"; 
import FormForLigue1 from "../admin components/adminLigue1";
import Footer from "../../components/footor"

function CreateTeam() {
  const [selectedLeague, setSelectedLeague] = useState(""); // State to store the selected league
  const [displayForm, setDisplayForm] = useState(null); // State to control which form to display

  const handleLeagueChange = (event) => {
    setSelectedLeague(event.target.value);
  };

  const handleOkButtonClick = () => {
    // Set the component to display based on the selected league
    if (selectedLeague === "Premier League") {
      setDisplayForm(<FormForPremierLeague />);
    } else if (selectedLeague === "La Liga") {
      setDisplayForm(<FormForLaLiga />);
    } else if (selectedLeague === "Serie A") {
      setDisplayForm(<FormForSerieA />);
    } else if (selectedLeague === "Bundesliga") {
      setDisplayForm(<FormForBundesliga />);
    } else if (selectedLeague === "Ligue 1") {
      setDisplayForm(<FormForLigue1 />);
    }
  };

  return (
    <div className="create-team-mainContainer">
      <div>
        <AdminNavbar />
      </div>
      <div className="create-team-subContainer">
        <div className="create-player-divison-left">
          <div className="create-admin-player-card">
            <h1>ENTER DETAILS TO CREATE A PLAYER</h1>
            <select onChange={handleLeagueChange} value={selectedLeague}>
              <option value="">Select a league</option>
              <option value="Premier League">Premier League</option>
              <option value="La Liga">La Liga</option>
              <option value="Serie A">Serie A</option>
              <option value="Bundesliga">Bundesliga</option>
              <option value="Ligue 1">Ligue 1</option>
            </select>
            <button  className="form-admin-select-button" onClick={handleOkButtonClick}>OK</button>
            <div className="which-form-to-choose">
              {displayForm} {/* Display the selected form component */}
            </div>
          </div>
        </div>
        <div className="create-player-divison-right">
          <video className="admin-side-video" id="son" autoPlay loop muted>
            <source src={adminAdd} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div><Footer/></div>
    </div>
  );
}

export default CreateTeam;
