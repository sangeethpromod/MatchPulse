import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./dashboardtest.css";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../components/adminNavbar"
import adminpic from "./admin photos/bekham.jpeg";
import cardbg from "../images/leauge/6222618.jpg"
import createPlayer from "./admin photos/createplayer.png";
import editplayer from "./admin photos/editplayer.png";
import createTeam from "./admin photos/createteam.png";
import editTeam from "./admin photos/editteam.png";
import editnews from "./admin photos/balon.png";
import newsletter from "./admin photos/newsletter.png";
import contacts from "./admin photos/FAQ and CONACTS.png";
import Footer from "../components/footor"


function Dashboardtest() {
      const navigate = useNavigate();
      const handleoption1Click = () => {
        navigate("/admin/createplayer");
      };

      const handleoption2Click = () => {
        navigate("/admin/ediplayer");
      };
      const handleoption3Click = () => {
        navigate("/admin/createteam");
      };
      const handleoption4Click = () => {
        navigate("/admin/editteam");
      };
      const handleoption5Click = () => {
        navigate("/admin/newsletter");
      };
      const handleoption6Click = () => {
        navigate("/admin/contact");
      };
      const handleoption7Click = () => {
        navigate("/admin/account");
      };
      const handleoption8Click = () => {
        navigate("/admin/newsedit");
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
      <div>
        <AdminNavbar />
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
        <div className="create-player" onClick={handleoption1Click}>
          <div className="create-player-cover">
            <h1>
              CREATE A NEW
              <br /> PLAYER
            </h1>
            <img className="createPlayer-img" src={createPlayer}></img>
          </div>
          <img className="card-bg-admin" src={cardbg}></img>
        </div>
        <div className="edit-player" onClick={handleoption2Click}>
          <div className="edit-player-cover">
            <h1>
              EDIT A
              <br /> PLAYER
            </h1>
            <img className="editPlayer-img" src={editnews}></img>
          </div>
          <img className="card-bg-edit-admin" src={cardbg}></img>
        </div>
      </div>

      {/* The row 2 starts here--------------------------------*/}
      <div className="admin-3-row">
        <div className="create-team" onClick={handleoption3Click}>
          <div className="create-team-cover">
            <h1>
              CREATE A NEW
              <br /> TEAM
            </h1>
            <img className="createTeam-img" src={createTeam}></img>
          </div>
          <img className="create-team-bg" src={cardbg}></img>
        </div>
        <div className="edit-team" onClick={handleoption4Click}>
          <div className="edit-team-cover">
            <h1>
              EDIT A
              <br /> TEAM
            </h1>
            <img className="editTeam-img" src={editTeam}></img>
          </div>
          <img className="edit-team-bg" src={cardbg}></img>
        </div>
      </div>
      {/* The row 3 starts here--------------------------------*/}
      <div className="admin-4-row">
        <div className="newsletter-card" onClick={handleoption5Click}>
          <div className="newsletter-cover">
            <h1>
              NEWS
              <br />
              LETTER
            </h1>
            <img className="newsletter-img" src={newsletter}></img>
          </div>
          <img className="create-team-bg" src={cardbg}></img>
        </div>
        <div className="contact-faq" onClick={handleoption6Click}>
          <div className="contact-faq-cover">
            <h1>
              CONTACTS &
              <br /> FAQ
            </h1>
            <img className="contact-faq-img" src={contacts}></img>
          </div>
          <img className="edit-team-bg" src={cardbg}></img>
        </div>
      </div>
      {/* The row 4 starts here--------------------------------*/}
      <div className="admin-5-row">
        <div className="account-card" onClick={handleoption7Click}>
          <div className="account-cover">
            <h1>
              ACCOUNT
              <br />
              SETTINGS
            </h1>
            <img className="account-img" src={adminpic}></img>
          </div>
          <img className="create-team-bg" src={cardbg}></img>
        </div>
        <div className="edit-team" onClick={handleoption8Click}>
          <div className="edit-team-cover">
            <h1>
              EDIT 
              <br /> NEWS
            </h1>
            <img className="editTeam-img" src={editplayer}></img>
          </div>
          <img className="edit-team-bg" src={cardbg}></img>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboardtest;
