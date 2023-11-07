import React, { useState } from "react";
import Navbar from "../../components/adminNavbar";
import "../admincss/admin-playercreate.css";
import Footer from "../../components/footor";

function AdminPlayerCreate() {
  const [fileInputs, setFileInputs] = useState([{ id: 1 }]);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [photoUploaded, setPhotoUploaded] = useState(false);

 const handleFileUpload = (fileId) => {
   if (fileId === 1) {
     setFileUploaded(true);
   } else if (fileId === 2) {
     setPhotoUploaded(true);
   }
 };

  const handlePhotoUpload = () => {
    setPhotoUploaded(true);
  };

  const handleAddMoreFiles = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const newId = fileInputs.length + 1;
    setFileInputs([...fileInputs, { id: newId }]);
  };

  const [inputPairs, setInputPairs] = useState([{ id: 1, label: '', value: '' }]);

  const handleAddMoreTrophies = (e) => {
    e.preventDefault();
    const newId = inputPairs.length + 1;
    setInputPairs([...inputPairs, { id: newId, label: '', value: '' }]);
  };

  const handleInputChange = (e, id, key) => {
    const updatedInputPairs = inputPairs.map(pair =>
      pair.id === id ? { ...pair, [key]: e.target.value } : pair
    );
    setInputPairs(updatedInputPairs);
  };

  return (
    <div className="admin-player-info-main-container">
      <div>
        <Navbar />
      </div>
      <form>
        <div className="admin-player-photo-info-page">
          <h1>CLICK HERE TO UPLOAD MAIN IMAGE POSTER</h1>
          <label
            htmlFor="teamImage"
            className={`admin-player-photo-upload ${
              fileUploaded ? "uploaded" : ""
            }`}
          >
            {fileUploaded
              ? "UPLOADED FILE SUCCESSFULLY"
              : "CLICK HERE TO UPLOAD MAIN IMAGE POSTER"}
          </label>
          <input
            className="admin-player-photo-upload"
            type="file"
            id="teamImage"
            name="teamImage"
            accept="image/*"
            onChange={() => handleFileUpload(1)}
          />
        </div>
        <div className="admin-first-row-player-info">
          <div className="admin-first-row-player-info-left">
            <h1>ENTER PLAYER FIRST NAME</h1>
            <input
              className="enter-player-first-name-for-playerinfo"
              type="text"
              placeholder="Lionel Andres"
            />
            <h1>ENTER PLAYER LAST NAME</h1>
            <input
              className="enter-player-last-name-for-playerinfo"
              type="text"
              placeholder="Messi"
            />
            <h1>ENTER PLAYER NUMBER</h1>
            <input
              className="enter-player-number-for-playerinfo"
              type="text"
              placeholder="10"
            />
            <h1>ENTER PLAYER DESCRIPTION</h1>
            <textarea
              className="enter-player-disc-for-playerinfo"
              placeholder="Max 175 words"
              rows="4"
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
                  htmlFor="admin-club-photo"
                  className="club-images-for-players"
                >
                  UPLOAD <br /> NEWS 1<br /> IMAGE
                </label>
                <input
                  type="file"
                  id="admin-club-photo"
                  className="admin-player-clubs-crest"
                  accept="image/*"
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
                  onChange={(e) => handleInputChange(e, pair.id, "label")}
                />
                <input
                  type="text"
                  placeholder="ENTER NUMBER OF TROPHIES"
                  value={pair.value}
                  onChange={(e) => handleInputChange(e, pair.id, "value")}
                />
              </div>
            ))}
            <button className="add-more-trophy" onClick={handleAddMoreTrophies}>
              Add More
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default AdminPlayerCreate;
