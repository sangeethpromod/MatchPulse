import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./dashboardtest.css";
import adminpic from "./admin photos/bekham.jpeg";
import cardbg from "../images/leauge/6222618.jpg"


function Dashboardtest() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleChangePicture = () => {
    // Define the logic for changing the picture here
  };

  const handleEditName = () => {
    // Define the logic for editing the name here
  };



  //graph place
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
    <div className="admin-main-container">
      <div className="admin-navbar">
        <h1>MATCH PULSE</h1>
        <input
          className="search-navbar-admin"
          type="text"
          placeholder="SEARCH"
        />
        <div className="admin-profile-picture">
          <div className="profile-container" onClick={toggleDropdown}>
            <img className="adminpic" src={adminpic} alt="User Profile" />
          </div>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <button onClick={handleChangePicture}>Change Picture</button>
              <button onClick={handleEditName}>Edit Name</button>
            </div>
          )}
          <h1>HENRY KELIN</h1>
        </div>
      </div>
      <div className="heading-admin">
        <h1>
          ADMIN DASHBOARD .. <span class="subheading">OVERVIEW</span>
        </h1>
      </div>
      <div className="admin-1-row">
        <div className="admin-1-row-left">
          <div className="lineGraph">
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
        </div>
        <div className="admin-1-row-right">
          <div className="piechart-cont">
            <HighchartsReact highcharts={Highcharts} options={donutOptions} />
          </div>
        </div>
      </div>
      <div className="admin-2-row">
        <div className="create-player">
          <img className="card-bg-admin" src={cardbg}></img>
        </div>

        <div className="edit-player">
          <img className="card-bg-admin" src={cardbg}></img>
        </div>
      </div>
    </div>
  );
}

export default Dashboardtest;
