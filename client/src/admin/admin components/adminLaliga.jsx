import React, { useState } from "react";
import "./adminCreateTeam-form.css";
import FormForPremierLeague from "../admin components/adminCreateTeam-form";
import FormForLaLiga from "../admin components/adminCreateTeam-form";
import FormForSerieA from "../admin components/adminCreateTeam-form";
import FormForBundesliga from "../admin components/adminCreateTeam-form";
import FormForLigue1 from "../admin components/adminCreateTeam-form";

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
        <h1>LA LIGA LEAUGE FORM</h1>
        <form>
          <div className="enter-teamName">
            <h1>ENTER TEAM NAME</h1>
            <input
              className="enter-team-name-input"
              type="text"
              placeholder="Eg: Barcelona"
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
              placeholder="Eg: Barcelona is one of the La Liga club giants."
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

          <div className="laliga-trophy-count">
            <h1>LA LIGA TROPHIES WON</h1>
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
          <div className="copa-delrey-trophy-count">
            <h1>COPA DEL REY TROPHIES WON</h1>
            <input
              className="enter-trophy-name-input"
              type="text"
              placeholder="0"
            />
          </div>
          <div className="spanishSUper-trophy-count">
            <h1>SPANISH SUPER CUP TROPHIES WON</h1>
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
          <div className="player-details-form">
            {/*PLAYER PHOTO ROW 1 STARTS HERE--------------------------------- */}
            <div className="create-player-details-row-1">
              <div className="create-player-details-row-1-left">
                <div className="enter-playername-1">
                  <h1>ENTER PLAYER 1 NAME</h1>
                  <input
                    className="enter-playername-1-input"
                    type="text"
                    placeholder="MESSI"
                  />
                </div>
                <label htmlFor="teamImage" className="x-upload">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="teamImage"
                  name="teamImage"
                  accept="image/*"
                />
                <div className="enter-player-num">
                  <h1>ENTER PLAYER NUMBER</h1>
                  <input
                    className="enter-player-num-input"
                    type="text"
                    placeholder="10"
                  />
                </div>
              </div>
              <div className="create-player-details-row-1-right">
                <div className="enter-playername-1">
                  <h1>ENTER JERSY NUMBER</h1>
                  <input
                    className="enter-playername-1-input"
                    type="text"
                    placeholder="MESSI"
                  />
                </div>
                <label htmlFor="teamImage" className="x-upload">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="teamImage"
                  name="teamImage"
                  accept="image/*"
                />
                <div className="enter-player-num">
                  <h1>ENTER JERSY NUMBER</h1>
                  <input
                    className="enter-player-num-input"
                    type="text"
                    placeholder="10"
                  />
                </div>
              </div>
            </div>

            {/*PLAYER PHOTO ROW 2 STARTS HERE--------------------------------- */}
            <div className="create-player-details-row-1">
              <div className="create-player-details-row-1-left">
                <div className="enter-playername-1">
                  <h1>ENTER PLAYER 3 NAME</h1>
                  <input
                    className="enter-playername-1-input"
                    type="text"
                    placeholder="MESSI"
                  />
                </div>
                <label htmlFor="teamImage" className="x-upload">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="teamImage"
                  name="teamImage"
                  accept="image/*"
                />
                <div className="enter-player-num">
                  <h1>ENTER JERSY NUMBER</h1>
                  <input
                    className="enter-player-num-input"
                    type="text"
                    placeholder="10"
                  />
                </div>
              </div>
              <div className="create-player-details-row-1-right">
                <div className="enter-playername-1">
                  <h1>ENTER PLAYER 4 NAME</h1>
                  <input
                    className="enter-playername-1-input"
                    type="text"
                    placeholder="MESSI"
                  />
                </div>
                <label htmlFor="teamImage" className="x-upload">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="teamImage"
                  name="teamImage"
                  accept="image/*"
                />
                <div className="enter-player-num">
                  <h1>ENTER JERSY NUMBER</h1>
                  <input
                    className="enter-player-num-input"
                    type="text"
                    placeholder="10"
                  />
                </div>
              </div>
            </div>

            {/*PLAYER PHOTO ROW 3 STARTS HERE--------------------------------- */}
            <div className="create-player-details-row-1">
              <div className="create-player-details-row-1-left">
                <div className="enter-playername-1">
                  <h1>ENTER PLAYER 5 NAME</h1>
                  <input
                    className="enter-playername-1-input"
                    type="text"
                    placeholder="MESSI"
                  />
                </div>
                <label htmlFor="teamImage" className="x-upload">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="teamImage"
                  name="teamImage"
                  accept="image/*"
                />
                <div className="enter-player-num">
                  <h1>ENTER JERSY NUMBER</h1>
                  <input
                    className="enter-player-num-input"
                    type="text"
                    placeholder="10"
                  />
                </div>
              </div>
              <div className="create-player-details-row-1-right">
                <div className="enter-playername-1">
                  <h1>ENTER PLAYER 6 NAME</h1>
                  <input
                    className="enter-playername-1-input"
                    type="text"
                    placeholder="MESSI"
                  />
                </div>
                <label htmlFor="teamImage" className="x-upload">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="teamImage"
                  name="teamImage"
                  accept="image/*"
                />
                <div className="enter-player-num">
                  <h1>ENTER JERSY NUMBER</h1>
                  <input
                    className="enter-player-num-input"
                    type="text"
                    placeholder="10"
                  />
                </div>
              </div>
            </div>
            {/*PLAYER PHOTO ROW 4 STARTS HERE--------------------------------- */}
            <div className="create-player-details-row-1">
              <div className="create-player-details-row-1-left">
                <div className="enter-playername-1">
                  <h1>ENTER PLAYER 7 NAME</h1>
                  <input
                    className="enter-playername-1-input"
                    type="text"
                    placeholder="MESSI"
                  />
                </div>
                <label htmlFor="teamImage" className="x-upload">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="teamImage"
                  name="teamImage"
                  accept="image/*"
                />
                <div className="enter-player-num">
                  <h1>ENTER JERSY NUMBER</h1>
                  <input
                    className="enter-player-num-input"
                    type="text"
                    placeholder="10"
                  />
                </div>
              </div>
              <div className="create-player-details-row-1-right">
                <div className="enter-playername-1">
                  <h1>ENTER PLAYER 8 NAME</h1>
                  <input
                    className="enter-playername-1-input"
                    type="text"
                    placeholder="MESSI"
                  />
                </div>
                <label htmlFor="teamImage" className="x-upload">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="teamImage"
                  name="teamImage"
                  accept="image/*"
                />
                <div className="enter-player-num">
                  <h1>ENTER JERSY NUMBER</h1>
                  <input
                    className="enter-player-num-input"
                    type="text"
                    placeholder="10"
                  />
                </div>
              </div>
            </div>

            {/*PLAYER PHOTO ROW 5 STARTS HERE--------------------------------- */}
            <div className="create-player-details-row-1">
              <div className="create-player-details-row-1-left">
                <div className="enter-playername-1">
                  <h1>ENTER PLAYER 9 NAME</h1>
                  <input
                    className="enter-playername-1-input"
                    type="text"
                    placeholder="MESSI"
                  />
                </div>
                <label htmlFor="teamImage" className="x-upload">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="teamImage"
                  name="teamImage"
                  accept="image/*"
                />
                <div className="enter-player-num">
                  <h1>ENTER JERSY NUMBER</h1>
                  <input
                    className="enter-player-num-input"
                    type="text"
                    placeholder="10"
                  />
                </div>
              </div>
              <div className="create-player-details-row-1-right">
                <div className="enter-playername-1">
                  <h1>ENTER PLAYER 10 NAME</h1>
                  <input
                    className="enter-playername-1-input"
                    type="text"
                    placeholder="MESSI"
                  />
                </div>
                <label htmlFor="teamImage" className="x-upload">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="teamImage"
                  name="teamImage"
                  accept="image/*"
                />
                <div className="enter-player-num">
                  <h1>ENTER JERSY NUMBER</h1>
                  <input
                    className="enter-player-num-input"
                    type="text"
                    placeholder="10"
                  />
                </div>
              </div>
            </div>
            {/*PLAYER PHOTO ROW 6 STARTS HERE--------------------------------- */}
            <div className="create-player-details-row-1">
              <div className="create-player-details-row-1-left">
                <div className="enter-playername-1">
                  <h1>ENTER PLAYER 11 NAME</h1>
                  <input
                    className="enter-playername-1-input"
                    type="text"
                    placeholder="MESSI"
                  />
                </div>
                <label htmlFor="teamImage" className="x-upload">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="teamImage"
                  name="teamImage"
                  accept="image/*"
                />
                <div className="enter-player-num">
                  <h1>ENTER JERSY NUMBER</h1>
                  <input
                    className="enter-player-num-input"
                    type="text"
                    placeholder="10"
                  />
                </div>
              </div>
              <div className="create-player-details-row-1-right">
                <div className="enter-playername-1">
                  <h1>ENTER PLAYER 12 NAME</h1>
                  <input
                    className="enter-playername-1-input"
                    type="text"
                    placeholder="MESSI"
                  />
                </div>
                <label htmlFor="teamImage" className="x-upload">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="teamImage"
                  name="teamImage"
                  accept="image/*"
                />
                <div className="enter-player-num">
                  <h1>ENTER JERSY NUMBER</h1>
                  <input
                    className="enter-player-num-input"
                    type="text"
                    placeholder="10"
                  />
                </div>
              </div>
            </div>

            {/*PLAYER PHOTO ROW 7 STARTS HERE--------------------------------- */}
            <div className="create-player-details-row-1">
              <div className="create-player-details-row-1-left">
                <div className="enter-playername-1">
                  <h1>ENTER PLAYER 13 NAME</h1>
                  <input
                    className="enter-playername-1-input"
                    type="text"
                    placeholder="MESSI"
                  />
                </div>
                <label htmlFor="teamImage" className="x-upload">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="teamImage"
                  name="teamImage"
                  accept="image/*"
                />
                <div className="enter-player-num">
                  <h1>ENTER JERSY NUMBER</h1>
                  <input
                    className="enter-player-num-input"
                    type="text"
                    placeholder="10"
                  />
                </div>
              </div>
              <div className="create-player-details-row-1-right">
                <div className="enter-playername-1">
                  <h1>ENTER PLAYER 14 NAME</h1>
                  <input
                    className="enter-playername-1-input"
                    type="text"
                    placeholder="MESSI"
                  />
                </div>
                <label htmlFor="teamImage" className="x-upload">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="teamImage"
                  name="teamImage"
                  accept="image/*"
                />
                <div className="enter-player-num">
                  <h1>ENTER JERSY NUMBER</h1>
                  <input
                    className="enter-player-num-input"
                    type="text"
                    placeholder="10"
                  />
                </div>
              </div>
            </div>
            {/*PLAYER PHOTO ROW 8 STARTS HERE--------------------------------- */}
            <div className="create-player-details-row-1">
              <div className="create-player-details-row-1-left">
                <div className="enter-playername-1">
                  <h1>ENTER PLAYER 15 NAME</h1>
                  <input
                    className="enter-playername-1-input"
                    type="text"
                    placeholder="MESSI"
                  />
                </div>
                <label htmlFor="teamImage" className="x-upload">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="teamImage"
                  name="teamImage"
                  accept="image/*"
                />
                <div className="enter-player-num">
                  <h1>ENTER JERSY NUMBER</h1>
                  <input
                    className="enter-player-num-input"
                    type="text"
                    placeholder="10"
                  />
                </div>
              </div>
              <div className="create-player-details-row-1-right">
                <div className="enter-playername-1">
                  <h1>ENTER PLAYER 16 NAME</h1>
                  <input
                    className="enter-playername-1-input"
                    type="text"
                    placeholder="MESSI"
                  />
                </div>
                <label htmlFor="teamImage" className="x-upload">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="teamImage"
                  name="teamImage"
                  accept="image/*"
                />
                <div className="enter-player-num">
                  <h1>ENTER JERSY NUMBER</h1>
                  <input
                    className="enter-player-num-input"
                    type="text"
                    placeholder="10"
                  />
                </div>
              </div>
            </div>

            {/*PLAYER PHOTO ROW 9 STARTS HERE--------------------------------- */}
            <div className="create-player-details-row-1">
              <div className="create-player-details-row-1-left">
                <div className="enter-playername-1">
                  <h1>ENTER PLAYER 17 NAME</h1>
                  <input
                    className="enter-playername-1-input"
                    type="text"
                    placeholder="MESSI"
                  />
                </div>
                <label htmlFor="teamImage" className="x-upload">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="teamImage"
                  name="teamImage"
                  accept="image/*"
                />
                <div className="enter-player-num">
                  <h1>ENTER JERSY NUMBER</h1>
                  <input
                    className="enter-player-num-input"
                    type="text"
                    placeholder="10"
                  />
                </div>
              </div>
              <div className="create-player-details-row-1-right">
                <div className="enter-playername-1">
                  <h1>ENTER PLAYER 18 NAME</h1>
                  <input
                    className="enter-playername-1-input"
                    type="text"
                    placeholder="MESSI"
                  />
                </div>
                <label htmlFor="teamImage" className="x-upload">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="teamImage"
                  name="teamImage"
                  accept="image/*"
                />
                <div className="enter-player-num">
                  <h1>ENTER JERSY NUMBER</h1>
                  <input
                    className="enter-player-num-input"
                    type="text"
                    placeholder="10"
                  />
                </div>
              </div>
            </div>
            {/*PLAYER PHOTO ROW 10 STARTS HERE--------------------------------- */}
            <div className="create-player-details-row-1">
              <div className="create-player-details-row-1-left">
                <div className="enter-playername-1">
                  <h1>ENTER PLAYER 19 NAME</h1>
                  <input
                    className="enter-playername-1-input"
                    type="text"
                    placeholder="MESSI"
                  />
                </div>
                <label htmlFor="teamImage" className="x-upload">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="teamImage"
                  name="teamImage"
                  accept="image/*"
                />
                <div className="enter-player-num">
                  <h1>ENTER JERSY NUMBER</h1>
                  <input
                    className="enter-player-num-input"
                    type="text"
                    placeholder="10"
                  />
                </div>
              </div>
              <div className="create-player-details-row-1-right">
                <div className="enter-playername-1">
                  <h1>ENTER PLAYER 20 NAME</h1>
                  <input
                    className="enter-playername-1-input"
                    type="text"
                    placeholder="MESSI"
                  />
                </div>
                <label htmlFor="teamImage" className="x-upload">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="teamImage"
                  name="teamImage"
                  accept="image/*"
                />
                <div className="enter-player-num">
                  <h1>ENTER JERSY NUMBER</h1>
                  <input
                    className="enter-player-num-input"
                    type="text"
                    placeholder="10"
                  />
                </div>
              </div>
            </div>

            {/*PLAYER PHOTO ROW 11 STARTS HERE--------------------------------- */}
            <div className="create-player-details-row-1">
              <div className="create-player-details-row-1-left">
                <div className="enter-playername-1">
                  <h1>ENTER PLAYER 21 NAME</h1>
                  <input
                    className="enter-playername-1-input"
                    type="text"
                    placeholder="MESSI"
                  />
                </div>
                <label htmlFor="teamImage" className="x-upload">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="teamImage"
                  name="teamImage"
                  accept="image/*"
                />
                <div className="enter-player-num">
                  <h1>ENTER JERSY NUMBER</h1>
                  <input
                    className="enter-player-num-input"
                    type="text"
                    placeholder="10"
                  />
                </div>
              </div>
              <div className="create-player-details-row-1-right">
                <div className="enter-playername-1">
                  <h1>ENTER PLAYER 22 NAME</h1>
                  <input
                    className="enter-playername-1-input"
                    type="text"
                    placeholder="MESSI"
                  />
                </div>
                <label htmlFor="teamImage" className="x-upload">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="teamImage"
                  name="teamImage"
                  accept="image/*"
                />
                <div className="enter-player-num">
                  <h1>ENTER JERSY NUMBER</h1>
                  <input
                    className="enter-player-num-input"
                    type="text"
                    placeholder="10"
                  />
                </div>
              </div>
            </div>
            {/*PLAYER PHOTO ROW 12 STARTS HERE--------------------------------- */}
            <div className="create-player-details-row-1">
              <div className="create-player-details-row-1-left">
                <div className="enter-playername-1">
                  <h1>ENTER PLAYER 23 NAME</h1>
                  <input
                    className="enter-playername-1-input"
                    type="text"
                    placeholder="MESSI"
                  />
                </div>
                <label htmlFor="teamImage" className="x-upload">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="teamImage"
                  name="teamImage"
                  accept="image/*"
                />
                <div className="enter-player-num">
                  <h1>ENTER JERSY NUMBER</h1>
                  <input
                    className="enter-player-num-input"
                    type="text"
                    placeholder="10"
                  />
                </div>
              </div>
              <div className="create-player-details-row-1-right">
                <div className="enter-playername-1">
                  <h1>ENTER PLAYER 24 NAME</h1>
                  <input
                    className="enter-playername-1-input"
                    type="text"
                    placeholder="MESSI"
                  />
                </div>
                <label htmlFor="teamImage" className="x-upload">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="teamImage"
                  name="teamImage"
                  accept="image/*"
                />
                <div className="enter-player-num">
                  <h1>ENTER JERSY NUMBER</h1>
                  <input
                    className="enter-player-num-input"
                    type="text"
                    placeholder="10"
                  />
                </div>
              </div>
            </div>

            {/*PLAYER PHOTO ROW 13 STARTS HERE--------------------------------- */}
            <div className="create-player-details-row-1">
              <div className="create-player-details-row-1-left">
                <div className="enter-playername-1">
                  <h1>ENTER PLAYER 25 NAME</h1>
                  <input
                    className="enter-playername-1-input"
                    type="text"
                    placeholder="MESSI"
                  />
                </div>
                <label htmlFor="teamImage" className="x-upload">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="teamImage"
                  name="teamImage"
                  accept="image/*"
                />
                <div className="enter-player-num">
                  <h1>ENTER JERSY NUMBER</h1>
                  <input
                    className="enter-player-num-input"
                    type="text"
                    placeholder="10"
                  />
                </div>
              </div>
            </div>
          </div>
          {/*HERE IS THE MANAGER DESCPRITION */}
          <div className="enter-managerName">
            <h1>ENTER MANAGER NAME</h1>
            <input
              className="enter-manager-name-input"
              type="text"
              placeholder="Eg: Pep Guardiola"
            />
          </div>

          <div className="team-manager-div">
            <h1>UPLOAD MANAGER PHOTO</h1>
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
          <div className="enter-managerDesc">
            <h1>ENTER MANAGER DESCRIPTION</h1>
            <textarea
              className="enter-team-Desc-textarea"
              placeholder="Eg: Pep is regarded as on of the best Coaches in the world."
              rows="4"
            ></textarea>
            <p>Words: {wordCount}</p>
          </div>
          <button className="create-team-button" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateTeamForm;
