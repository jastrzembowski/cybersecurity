import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Rechteck888 from "../images/Background_grad/Rechteck888.png";
import Rechteck891 from "../images/Background_grad/Rechteck891.png";
import Rechteck938 from "../images/Background_grad/Rechteck938.png";
import bg5 from "../images/Background_grad/bg5.png";
import illustration_01 from "../images/Illustrations/illustration_01.svg";
import illustration_02 from "../images/Illustrations/illustration_02.svg";
import illustration_03 from "../images/Illustrations/illustration_03.svg";
import Path from "./Path";
import Offers from "./Offers";
import Fade from "react-reveal/Fade";

export default function Main() {
  const [isHidden, setIsHidden] = useState(true);
  function unCheck() {
    document.getElementById("menu-btn").checked = false;
  }
  const { t } = useTranslation();

  return (
    <>
      <div className="main-container" onClick={(e) => unCheck()}>
        <img src={Rechteck888} alt="bg1" className="main-bg1"></img>
        <img src={bg5} alt="bg5" className="main-bg5"></img>

        <Fade top duration={3000}>
          <img
            src={illustration_01}
            alt="illustration"
            className="illustration1"
          ></img>
        </Fade>
        <img
          src={Rechteck938}
          alt="bg3"
          className={isHidden ? "bg3-hid" : "main-bg3"}
        ></img>
        <Fade top duration={3000}>
          <img
            src={illustration_02}
            alt="illustration"
            className="illustration2"
          ></img>
        </Fade>
        <img
          src={Rechteck891}
          alt="bg2"
          className={isHidden ? "bg2-hid" : "main-bg2"}
        ></img>
        <Fade top duration={3000}>
          <img
            src={illustration_03}
            alt="illustration"
            className={isHidden ? "ill3-hid" : "illustration3"}
          ></img>
        </Fade>
        <div className="about-box">
          <h1>{t("about-title")}</h1>
          <span>
            {t("about-text-1")}
            <br />
            <br />
            {t("about-text-2")}
          </span>
          {isHidden && (
            <div
              className="main-button nav-img"
              onClick={(e) => setIsHidden(!isHidden)}
            >
              <p>Learn more</p>
            </div>
          )}
          {isHidden && (
            <div
              className="main-button nav-img__small"
              onClick={(e) => setIsHidden(!isHidden)}
            >
              <span>
                <strong>{t("learn-more")}</strong>
              </span>
            </div>
          )}
          {!isHidden && (
            <span className="small-text-box">
              <br />
              <br />
              {t("small-text-1")}
              <br />
              <br />
              {t("small-text-2")}
            </span>
          )}
        </div>
        {!isHidden && (
          <>
            <div className="reaction-box">
              <h1>{t("prevention")}</h1>
              <span>
                {t("prev-text-1")}
                <br />
                <br />
                {t("prev-text-2")}
                <a
                  className="reaktion"
                  href="https://www.bmi.bund.de/SharedDocs/downloads/DE/publikationen/themen/it-digitalpolitik/bsi-lagebericht-cybersicherheit-2021.pdf?__blob=publicationFile&v=3"
                >
                  {t("ins")}
                </a>
                <br />
                <br />
                {t("privat")}
              </span>
              <a href="https://www.bmi.bund.de/SharedDocs/downloads/DE/publikationen/themen/it-digitalpolitik/bsi-lagebericht-cybersicherheit-2021.pdf?__blob=publicationFile&v=3">
                <div className="main-button react-img">
                  <a href={t("link")}>
                    {t("download")}{" "}
                  </a>
                </div>
              </a>
            </div>
          </>
        )}
        <Path isHidden={isHidden} />
        <Offers />
      </div>
    </>
  );
}
