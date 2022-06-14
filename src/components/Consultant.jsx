import React from "react";
import { useTranslation } from "react-i18next";
import werner_2 from "../images/Images/werner_2.png";
import FootPartner from "./FootPartner";




export default function Consultant() {
  const { t } = useTranslation();
  function unCheck() {
    document.getElementById("menu-btn").checked = false;
  }
  return (
    <>
      <div className="consultant" onClick={(e) => unCheck()}>
        <div className="consultant-box">
          <h1>{t("ihr-cons")}</h1>
          <p>
           {t("consultant")}
            <br />
            <br />
           {t("cons-2")}
          </p>
          <a href="mailto: office@wetog.de">
            <div className="main-button nav-img">
              <p>{t("kontakt")}</p>
            </div>
          </a>
        </div>
        <img src={werner_2} alt="Krause Werner" className="consultant-img" />
      </div>
      <FootPartner />
    </>
  );
}
