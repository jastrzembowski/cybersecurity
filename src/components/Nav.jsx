import React, { useState } from "react";
import logo from "../images/Images/logo.png";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isActive, setIsActive] = useState(false);

  function unCheck() {
    document.getElementById("menu-btn").checked = false;
  }
  return (
    <>
      <nav>
        <Link to="/" onClick={(e) => unCheck()}>
          <img src={logo} alt="logo" className="logo"></img>
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu nav-container">
          <li>
          
            <Link to="/" onClick={(e) => unCheck()} style={{color: "black"}}>
              Angebote
            </Link>
          </li>
          <li
            className={isActive ? "dropdown-active" : "dropdown"}
            onClick={(e) => setIsActive(!isActive)}
          >
            Partner
          </li>
          {isActive && (
            <div
              className="dropdown-content"
              onClick={(e) => setIsActive(!isActive)}
            >
              <Link to="/consultant">
                {" "}
                <div className="dropdown-item" onClick={(e) => unCheck()}>
                  <span>Consultant</span>
                </div>
              </Link>
              <Link to="/cyberversicherung">
                {" "}
                <div className="dropdown-item" onClick={(e) => unCheck()}>
                  <span>Cyberversicherung</span>
                </div>
              </Link>
            </div>
          )}
          <li>
            <a href="mailto: office@wetog.de" style={{ color: "black" }}>
              Kontakt
            </a>
          </li>
          <a href="mailto: office@wetog.de">
            <div className="nav-img">
              <p>Buchen</p>
            </div>
          </a>
        </ul>
      </nav>
    </>
  );
}
