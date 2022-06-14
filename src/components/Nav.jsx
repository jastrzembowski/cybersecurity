import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../images/Images/logo.png";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isActive, setIsActive] = useState(false);
  const { t } = useTranslation();
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
            <a
              href="/#offers"
              onClick={(e) => unCheck()}
              style={{ color: "black" }}
            >
              {t("offers")}
            </a>
          </li>
          <li
            className={isActive ? "dropdown-active" : "dropdown"}
            onMouseOver={(e) => setIsActive(!isActive)}
            onmouseleave="unCheck()"
          >
            Partner
          </li>
          {isActive && (
            <div
              className="dropdown-content"
              onClick={(e) => setIsActive(!isActive)}
              onmouseleave={(e) => unCheck()}
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
                  <span>{t("cyber")}</span>
                </div>
              </Link>
            </div>
          )}
          <li>
            <a href="mailto: office@wetog.de" style={{ color: "black" }}>
              {t("kontakt")}
            </a>
          </li>
          <a href="mailto: office@wetog.de">
            <div className="nav-img">
              <p>{t("buchen")}</p>
            </div>
          </a>
        </ul>
      </nav>
    </>
  );
}
