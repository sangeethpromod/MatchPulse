import React from 'react'
import "./dashboard.css"
import dashboardbg from "../images/leauge/6222618.jpg";
import createPlayer from "./admin photos/Create Player.png"
import editPlayer from "./admin photos/Edit Player.png"
import createTeam from "./admin photos/Create Team.png"
import editTeam from "./admin photos/Edit Team.png";
import card1giff from "./admin photos/usmt1.png"
import card2giff from "./admin photos/usmt2.png";
import card3giff from "./admin photos/usmt3.png";
import card4giff from "./admin photos/usmt4.png";

import Navbar from '../components/navbar'

function dashboard() {
  return (
    <div className="dashboard-container-main">
      <div className="dashboard-edit-container">
        <img className="dashboard-bg" src={dashboardbg} />
        <div className="cards-dashboard">
          <div className="dash-card-1">
            <div className="create-player-div">
              <img className="search-player-picture" src={createPlayer} />
            </div>
            <button className="create-player-button">CREATE PLAYER</button>
          </div>
          <div className="dash-card-2">
            <div className="edit-player-div">
              <img className="edit-player-picture" src={editPlayer} />
            </div>
            <button className="edit-player-button">EDIT PLAYER</button>
          </div>

          <div className="dash-card-3">
            <div className="create-team-div">
              <img className="create-team-picture" src={createTeam} />
            </div>
            <button className="create-team-button">CREATE TEAM</button>
          </div>

          <div className="dash-card-4">
            <div className="edit-team-div">
              <img className="edit-team-picture" src={editTeam} />
            </div>
            <button className="edit-team-button">EDIT TEAM</button>
          </div>
        </div>
        <div className="edit-news-card">
          <div className="edit-news-card-1">
            <div className="news-card-1-gif">
              <img className="news-bg" src={card1giff} />
            </div>
            <h1> CLICK TO CHANGE NEWS</h1>
          </div>
          <div className="edit-news-card-1">
            <div className="news-card-1-gif">
              <img className="dashboard-bg" src={card2giff} />
            </div>
          </div>
          <div className="edit-news-card-1">
            <div className="news-card-1-gif">
              <img className="dashboard-bg" src={card3giff} />
            </div>
          </div>
          <div className="edit-news-card-1">
            <div className="news-card-1-gif">
              <img className="dashboard-bg" src={card4giff} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard