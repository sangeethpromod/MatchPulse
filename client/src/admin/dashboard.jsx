import React from 'react';
import "./dashboard.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import dashboardbg from "../images/leauge/6222618.jpg";
import createPlayer from "./admin photos/Create Player.png";
import editPlayer from "./admin photos/Edit Player.png";
import createTeam from "./admin photos/Create Team.png";
import editTeam from "./admin photos/Edit Team.png";


function Dashboard() {
const options = {
  chart: {
    type: "line",
    backgroundColor: "#000000",
  },
  title: {
    text: "Number of Players in Europe's Top 5 Leagues",
    style: {
      color: "#ffffff",
      fontFamily: "DAGGERSQUARE OBLIQUE",
      letterSpacing: "2px",
    },
  },
  xAxis: {
    categories: [
      "Premier League",
      "La Liga",
      "Serie A",
      "Bundesliga",
      "Ligue 1",
    ],
    labels: {
      style: {
        color: "#ffffff", // X-axis label text color
        fontFamily: "DAGGERSQUARE OBLIQUE", // Font family for X-axis labels
        letterSpacing: "2px",
      },
    },
  },
  yAxis: {
    title: {
      text: "Number of Players",
      style: {
        color: "#ffffff",
        fontFamily: "DAGGERSQUARE OBLIQUE",
        letterSpacing: "2px",
      },
    },
    labels: {
      style: {
        color: "#ffffff", // Y-axis label text color
        fontFamily: "DAGGERSQUARE OBLIQUE", // Font family for Y-axis labels
        letterSpacing: "2px",
      },
    },
  },
  series: [
    {
      name: "Players",
      data: [553, 487, 567, 519, 484],
      color: "#bd0000",
      marker: {
        fillColor: "#ffffff", 
      },
    },
  ],
};

  const donutOptions = {
    chart: {
      type: "pie",
      backgroundColor: "#000000",
    },
    title: {
      text: "Number of Players",
      style: {
        color: "#ffffff",
        fontFamily: "DAGGERSQUARE OBLIQUE",
        letterSpacing: "2px",
      },
    },
    series: [
      {
        name: "Players",
        data: [
          { name: "Number of Existing", y: 2610 }, // Example data for existing players
          { name: "Number to Be Entered", y: 350 }, // Example data for new players
        ],
        colors: ["#bd0000", "#ffffff"], // Colors for the donut chart segments
        dataLabels: {
          color: "#ffffff",
          fontFamily: "DAGGERSQUARE OBLIQUE",
        },
      },
    ],
  };



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
          <div className="lineGraph">
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
          <div className="piechart-cont">
            <HighchartsReact highcharts={Highcharts} options={donutOptions} />
          </div>
        </div>
        <div className="dashboard-footer"></div>
      </div>
    </div>
  );
}

export default Dashboard