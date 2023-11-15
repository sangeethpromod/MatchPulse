import React, { useState } from "react";
import Navbar from "../../components/adminNavbar";
import "../admincss/admin-playercreate.css";
import Footer from "../../components/footor";
import axios from "axios";
import Swal from "sweetalert2";

function AdminPlayerCreate() {
  const [fileInputs, setFileInputs] = useState([{ id: 1 }]);
  const [inputPairs, setInputPairs] = useState([
    { id: 1, label: "", value: "" },
  ]);
  const [playerData, setPlayerData] = useState({
    teamImage: "",
    firstName: "",
    lastName: "",
    playerNumber: "",
    playerDescription: "",
    stats: {
      matches: "",
      goals: "",
      assists: "",
      mins: "",
      yellowCard: "",
      redCard: "",
    },
    clubsPlayedFor: [],
    trophies: [],
  });

  const handleAddMoreFiles = () => {
    const newId = fileInputs.length + 1;
    setFileInputs([...fileInputs, { id: newId }]);
  };

  const handleAddMoreTrophies = (e) => {
    e.preventDefault();
    const newId = inputPairs.length + 1;
    setInputPairs([...inputPairs, { id: newId, label: "", value: "" }]);
  };

  const handleInputChange = (e, id, key) => {
    const updatedInputPairs = inputPairs.map((pair) =>
      pair.id === id ? { ...pair, [key]: e.target.value } : pair
    );
    setInputPairs(updatedInputPairs);
  };
const handleFormSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();

  // Add file inputs to formData
  console.log("fileInputs:", fileInputs);
  fileInputs.forEach((input) => {
    console.log("input:", input);
    formData.append("files", input.files[0]);
  });

  // Add other form data to formData
  console.log("playerData:", playerData);
  Object.entries(playerData).forEach(([key, value]) => {
    console.log("key:", key, "value:", value);

    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        Object.entries(item).forEach(([itemKey, itemValue]) => {
          formData.append(`${key}[${index}].${itemKey}`, itemValue);
        });
      });
    } else if (typeof value === "object") {
      Object.entries(value).forEach(([itemKey, itemValue]) => {
        formData.append(`${key}.${itemKey}`, itemValue);
      });
    } else {
      formData.append(key, value);
    }
  });

  try {
    const response = await axios.post(
      "http://localhost:3000/auth/createPlayer",
      formData
    );
    console.log(response.data);

    // Show success message using SweetAlert
    Swal.fire({
      icon: "success",
      title: "Player created successfully!",
      showConfirmButton: false,
      timer: 1500,
    });

    // Optionally, redirect or perform other actions after success
  } catch (error) {
    console.error("Error creating player:", error);

    // Show error message using SweetAlert
    Swal.fire({
      icon: "error",
      title: "Oops... Something went wrong!",
      text: "Please try again later.",
    });
  }
};

  return (
    <div className="admin-player-info-main-container">
      <div>
        <Navbar />
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="admin-player-photo-info-page">
          <h1>CLICK HERE TO UPLOAD MAIN IMAGE POSTER</h1>
          <label htmlFor="teamImage" className="admin-player-photo-upload">
            CLICK HERE TO UPLOAD MAIN IMAGE POSTER
          </label>
          <input
            className="admin-player-photo-upload"
            type="file"
            id="teamImage"
            name="teamImage"
            accept="image/*"
            onChange={(e) => handleInputChange(e, null, "teamImage")}
          />
        </div>
        <div className="admin-first-row-player-info">
          <div className="admin-first-row-player-info-left">
            <h1>ENTER PLAYER FIRST NAME</h1>
            <input
              className="enter-player-first-name-for-playerinfo"
              type="text"
              placeholder="Lionel Andres"
              onChange={(e) => handleInputChange(e, null, "firstName")}
            />
            <h1>ENTER PLAYER LAST NAME</h1>
            <input
              className="enter-player-last-name-for-playerinfo"
              type="text"
              placeholder="Messi"
              onChange={(e) => handleInputChange(e, null, "lastName")}
            />
            <h1>ENTER PLAYER NUMBER</h1>
            <input
              className="enter-player-number-for-playerinfo"
              type="text"
              placeholder="10"
              onChange={(e) => handleInputChange(e, null, "playerNumber")}
            />
            <h1>ENTER PLAYER DESCRIPTION</h1>
            <textarea
              className="enter-player-disc-for-playerinfo"
              placeholder="Max 175 words"
              rows="4"
              onChange={(e) => handleInputChange(e, null, "playerDescription")}
            ></textarea>
          </div>
          <div className="admin-first-row-player-info-right">
            <div className="admin-player-form-outline">
              <label
                htmlFor="admin-player-crop-photo"
                className="admin-player-crop-photo-upload"
              >
                UPLOAD <br /> NEWS 1<br /> IMAGE
              </label>
              <input
                type="file"
                id="admin-player-crop-photo"
                className="news-admin-hidden-file-input"
                accept="image/*"
                onChange={(e) => handleInputChange(e, null, "newsImage")}
              />
            </div>
          </div>
        </div>
        <div className="admin-second-row-player-info">
          <h1>CURRENT STATS 2023</h1>
          <div stat-table-player-info>
            <table className="admin-player-info-table">
              <tbody>
                <tr>
                  {/* First row - images */}
                  <td>MATCHES</td>
                  <td>GOALS</td>
                  <td>ASSISTS</td>
                  <td>MINS</td>
                  <td>YELLOW CARD</td>
                  <td>RED CARD</td>
                </tr>
                <tr>
                  {/* Second row - numbers */}
                  <td>
                    <input
                      className="no-of-matches"
                      type="text"
                      placeholder="567"
                      inputMode="numeric"
                      maxLength="4"
                      pattern="[0-9]*"
                      onKeyPress={(e) => {
                        const pattern = /[0-9]/;
                        if (!pattern.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      onChange={(e) =>
                        handleInputChange(e, null, "stats.matches")
                      }
                    />
                  </td>
                  <td>
                    <input
                      className="no-of-matches"
                      type="text"
                      placeholder="500"
                      maxLength="4"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      onKeyPress={(e) => {
                        const pattern = /[0-9]/;
                        if (!pattern.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      onChange={(e) =>
                        handleInputChange(e, null, "stats.goals")
                      }
                    />
                  </td>
                  <td>
                    <input
                      className="no-of-matches"
                      type="text"
                      placeholder="302"
                      maxLength="4"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      onKeyPress={(e) => {
                        const pattern = /[0-9]/;
                        if (!pattern.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      onChange={(e) =>
                        handleInputChange(e, null, "stats.assists")
                      }
                    />
                  </td>
                  <td>
                    <input
                      className="no-of-matches"
                      type="text"
                      placeholder="4200"
                      inputMode="numeric"
                      maxLength="4"
                      pattern="[0-9]*"
                      onKeyPress={(e) => {
                        const pattern = /[0-9]/;
                        if (!pattern.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      onChange={(e) => handleInputChange(e, null, "stats.mins")}
                    />
                  </td>
                  <td>
                    <input
                      className="no-of-matches"
                      type="text"
                      placeholder="5"
                      inputMode="numeric"
                      maxLength="4"
                      pattern="[0-9]*"
                      onKeyPress={(e) => {
                        const pattern = /[0-9]/;
                        if (!pattern.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      onChange={(e) =>
                        handleInputChange(e, null, "stats.yellowCard")
                      }
                    />
                  </td>
                  <td>
                    <input
                      className="no-of-matches"
                      type="text"
                      placeholder="2"
                      inputMode="numeric"
                      maxLength="4"
                      pattern="[0-9]*"
                      onKeyPress={(e) => {
                        const pattern = /[0-9]/;
                        if (!pattern.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      onChange={(e) =>
                        handleInputChange(e, null, "stats.redCard")
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="admin-clubs-played-for">
          <h1>CLUBS PLAYED FOR</h1>
          <div className="club-images-for-players">
            {fileInputs.map((input, index) => (
              <div key={input.id}>
                <label
                  htmlFor="admin-player-crop-photo"
                  className="admin-player-crop-club-upload"
                >
                  UPLOAD <br /> CLUB LOGO
                </label>
                <input
                  type="file"
                  id="admin-player-crop-photo"
                  className="club-logo-hidden-upload"
                  accept="image/*"
                  onChange={(e) => handleInputChange(e, null, "clubsPlayedFor")}
                />
              </div>
            ))}
            <button
              className="add-more-player-club"
              onClick={handleAddMoreFiles}
            >
              Add More
            </button>
          </div>
        </div>
        <div className="admin-trophy-player-history">
          <h1>TROPHIES WON AND INDIVIDUAL AWARDS</h1>
          <div className="trophy-number-enter">
            {inputPairs.map((pair, index) => (
              <div key={pair.id} className="trophy-pair">
                <input
                  type="text"
                  placeholder="ENTER TROPHY NAME"
                  value={pair.label}
                  onChange={(e) =>
                    handleInputChange(e, pair.id, "label", index)
                  }
                />
                <input
                  type="text"
                  placeholder="ENTER NUMBER OF TROPHIES"
                  value={pair.value}
                  onChange={(e) =>
                    handleInputChange(e, pair.id, "value", index)
                  }
                />
              </div>
            ))}
            <button className="add-more-trophy" onClick={handleAddMoreTrophies}>
              Add More
            </button>
          </div>
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default AdminPlayerCreate;
