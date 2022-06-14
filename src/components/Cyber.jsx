import React from "react";
import arndt from "../images/Images/arndt.png";
import FootPartner from "./FootPartner";
import { useTranslation } from "react-i18next";



export default function Cyber() {
  const { t } = useTranslation();
  function unCheck() {
    document.getElementById("menu-btn").checked = false;
  }
  return (
    <>
      <div className="consultant" onClick={(e) => unCheck()}>
        <div className="consultant-box ">
          <h1>{t("cyber-title")}</h1>
          <p>
            {t("cyber-1")}
            <br />
            <br />
            {t("cyber-2")} <br />
            <br />
            Allianz
            {t("cyber-3")}{" "}
          </p>
          <a href="mailto: office@wetog.de">
            <div className="main-button nav-img">
              <p>{t("kontakt")}</p>
            </div>
          </a>
        </div>
        <img src={arndt} alt="Arndt Köhler" className="consultant-img" />
      </div>
      <FootPartner />
    </>
  );
}
