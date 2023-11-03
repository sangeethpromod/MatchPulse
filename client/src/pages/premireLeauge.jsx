import React from 'react'
import "../css/premireleauge.css"
import Navbar from "../components/navbar"
import teambg from "../images/premire Leauge/background prem.jpg"
import arsenallogo from "../images/premire Leauge/arsenal.png"
import avillalogo from "../images/premire Leauge/aston-villa-logo.png";
import bour from "../images/premire Leauge/afc_bournemouth-logo_brandlogos.net_wifjg.png";
import brentfordLogo from "../images/premire Leauge/brentford-fc-logo.png";
import brightonLogo from "../images/premire Leauge/brighton-hove-albion-logo.png";
import burnleyLogo from "../images/premire Leauge/burnley_fc-logo-brandlogos.net.png";
import chelseaLogo from "../images/premire Leauge/chelsea-logo-vector.png";
import crystalPalaceLogo from "../images/premire Leauge/crystal_palace_fc-logo_brandlogos.net_asddi.png";
import evertonLogo from "../images/premire Leauge/everton-fc-logo-preview.png";
import fullhamLogo from "../images/premire Leauge/fulham-fc-logo.png";
import liverpoolLogo from "../images/premire Leauge/liverpool-logo-vector.png";
import luttonLogo from "../images/premire Leauge/luton_town_fc-logo_brandlogos.net_k7gse.png";
import manCityLogo from "../images/premire Leauge/manchester-city-fc-logo.png";
import manUtdLogo from "../images/premire Leauge/manlogo.png";
import newcastlogo from "../images/premire Leauge/newcastle-united-logo-preview.png";
import nottinghamlogo from "../images/premire Leauge/nottingham_forest-logo-brandlogo.net.png";
import shefielflogo from "../images/premire Leauge/sheffield-united-.png";
import totenhamlogo from "../images/premire Leauge/tottenham-hotspur-fc-logo.png";
import westHamLogo from "../images/premire Leauge/west-ham-united-fc-logo-preview.png";
import wolvesLogo from "../images/premire Leauge/wolverhampton_wanderers_fc-logo-brandlogo.net.png";


function premireLeauge() {
  return (
    <div className="PremireLeauge-maincontainer">
      <img className="imagebg" src={teambg} />
      <Navbar />
      <div className="pleauge-container-1">
        <h1>SELECT YOUR PREMIRE LEAUGE TEAM !</h1>
        <div className="premCard-row-1">
          <div className="premCard-1">
            <h1>ARSENAL</h1>
            <img className="arsenallogo" src={arsenallogo} />
          </div>
          <div className="premCard-2">
            <h1>ASTON VILLA</h1>
            <img className="villalogo" src={avillalogo} />
          </div>
          <div className="premCard-3">
            <h1>BOURNE<br />MOUTH AFC</h1>
            <img className="bourlogo" src={bour} />
          </div>
          <div className="premCard-4">
            <h1>BRENT<br />FORD</h1>
            <img className="brentlogo" src={brentfordLogo} />
          </div>
          <div className="premCard-5">
            <h1>BRIGHTON & HOVE ALBION</h1>
            <img className="brightlogo" src={brightonLogo} />
          </div>
          <div className="premCard-6">
            <h1>BURNLEY</h1>
            <img className="burnlogo" src={burnleyLogo} />
          </div>
        </div>
        <div className="premCard-row-2">
          <div className="premCard-7">
            <h1>CHELSEA</h1>
            <img className="chelogo" src={chelseaLogo} />
          </div>
          <div className="premCard-8">
            <h1>CRYSTAL PALACE</h1>
            <img className="crylogo" src={crystalPalaceLogo} />
          </div>
          <div className="premCard-9">
            <h1>EVERTON</h1>
            <img className="everlogo" src={evertonLogo} />
          </div>
          <div className="premCard-10">
            <h1>FULHAM</h1>
            <img className="fullhamtlogo" src={fullhamLogo} />
          </div>
          <div className="premCard-11">
            <h1>LIVERPOOL</h1>
            <img className="liverpoollogo" src={liverpoolLogo} />
          </div>
          <div className="premCard-12">
            <h1>LUTTON TOWN</h1>
            <img className="lutonlogo" src={luttonLogo} />
          </div>
        </div>
        <div className="premCard-row-3">
          <div className="premCard-13">
            <h1>MANCHESTER CITY</h1>
            <img className="mancitylogo" src={manCityLogo} />
          </div>
          <div className="premCard-14">
            <h1>MANCHESTER UNITED</h1>
            <img className="manutdlogo" src={manUtdLogo} />
          </div>
          <div className="premCard-15">
            <h1>NEWCASTLE UNITED </h1>
            <img className="newcastlogo" src={newcastlogo} />
          </div>
          <div className="premCard-16">
            <h1>NOTTINGHAM FOREST</h1>
            <img className="nottinghamlogo" src={nottinghamlogo} />
          </div>
          <div className="premCard-17">
            <h1>SHEFFIELD UNITED</h1>
            <img className="shelogo" src={shefielflogo} />
          </div>
          <div className="premCard-18">
            <h1>TOTTENHAM HOTSPUR</h1>
            <img className="totlogo" src={totenhamlogo} />
          </div>
        </div>
        <div className="premCard-row-4">
          <div className="premCard-19">
            <h1>WESTHAM UNITED</h1>
            <img className="westhamlogo" src={westHamLogo} />
          </div>
          <div className="premCard-20">
            <h1>WOLVER<br />HAMPTON WANDERERS</h1>
            <img className="wolveslogo" src={wolvesLogo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default premireLeauge