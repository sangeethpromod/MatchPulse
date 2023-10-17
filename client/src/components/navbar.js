import React from 'react'
import "../components/navbar.css"

function Navbar () {
  return (
      <nav className="main-navbar">
        <div className="left-logo">
          <a href="/">MATCH PULSE</a>
        </div>
        <ul className="righthome-menu">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="/searchplayer">PLAYERS</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
          <li>
            <a href="/signout">SIGNOUT</a>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar