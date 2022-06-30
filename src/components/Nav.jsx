import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "../images/Images/logo.png";
import { Link } from "react-router-dom";
import i18next from "i18next";



export default function Nav() {
  const [isActive, setIsActive] = useState(false);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

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
        <div onClick={(e) => unCheck()}>
        <select
							className="lng-select-small"
							value={localStorage.getItem("i18nextLng")}
							onChange={handleLanguageChange}
						>
							<option value="en" >🇬🇧</option>
              <option value="DE">	🇩🇪</option>
						</select>
        <label className="menu-icon" for="menu-btn">
          <span className="nav-icon"></span>
        </label>
        </div>
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
            onMouseLeave={(e) => unCheck()}
          >
            Partner
          </li>
          {isActive && (
            <div
              className="dropdown-content"
              onClick={(e) => setIsActive(!isActive)}
              onMouseLeave={(e) => unCheck()}
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
      
          <a href="mailto: office@wetog.de" className="nav-but">
            <div className="nav-img">
              <p>{t("buchen")}</p>
            </div>
          </a>
          <select
							className="lng-select"
							value={localStorage.getItem("i18nextLng")}
							onChange={handleLanguageChange}
						>
							<option value="en" >🇬🇧</option>
              <option value="de">	🇩🇪</option>
						</select>
        </ul>
      </nav>
    </>
  );
}
