import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";

export default function Offers() {
  const { t } = useTranslation()
  const [isVorortHidden, setIsVorortHidden] = useState(true);
  const [isCyberHidden, setIsCyberHidden] = useState(true);
  return (
    <>
      {" "}
      <div className="boxes-holder" id="offers">
        <Fade top duration={2000}>
          <div className="box">
            <h1>Online Audit</h1>
            <h2>499€ netto*</h2>
            <p>{t("box1")}</p>
            <p>{t("box2")}</p>
            <p>{t("box3")}</p>
            <h2>
                <a href="mailto: office@wetog.de">{t("termin")}</a>
            </h2>
          </div>
        </Fade>{" "}
        <Fade top duration={2000} delay={200}>
          <div className="box">
            <h1>{t("box4")}</h1>
            <h2>1499€ netto*</h2>
            <p>{t("box5")}</p>
            <p>{t("box6")}</p>
            <p>{t("box7")}</p>
            {isVorortHidden && (
              <span
                className="hide-button"
                onClick={(e) => setIsVorortHidden(!isVorortHidden)}
              >
                {t("mehr-anzeigen")}
              </span>
            )}
            {!isVorortHidden && (
              <>
                <p>{t("box8")}</p>
                <p>{t("box9")}</p>
                <p>{t("box10")}</p>
                <p>{t("box11")}</p>
              </>
            )}
            <span className="vorort-text">
              <p>{t("box8")}</p>
              <p>{t("box9")}</p>
              <p>{t("box10")}</p>
              <p>{t("box11")}</p>
            </span>
            <h2>
                <a href="mailto: office@wetog.de">{t("termin")}</a>
            </h2>
          </div>{" "}
        </Fade>{" "}
        <Fade top duration={2000} delay={400}>
          <div className="box">
            <h1>{t("box12")}</h1>
            <h2>2999€ netto*</h2>
            <p>{t("box13")}</p>
            <p>{t("box14")}</p>
            <p>{t("box15")}</p>
            {isCyberHidden && (
              <div>
                <span
                  className="hide-button"
                  onClick={(e) => setIsCyberHidden(!isCyberHidden)}
                >
                  {t("mehr-anzeigen")}
                </span>
              </div>
            )}
            {!isCyberHidden && (
              <>
                <p>{t("box16")}</p>
                <p>{t("box17")}</p>
                <p>{t("box18")}</p>
                <p>{t("box19")}</p>
                <p>{t("box20")}</p>
                <p>{t("box21")}</p>
                <p>{t("box22")}</p>
                <p>{t("box23")}</p>
              </>
            )}
            <h2>
                <a href="mailto: office@wetog.de">{t("termin")}</a>
            </h2>
          </div>
        </Fade>
      </div>{" "}
      <Fade top duration={2000}>
        <div className="kost-box__holder">
          <div className="kost-box">
            <h1>{t("box24")}</h1>
            <p>
            {t("box25")}
            </p>
            <p>
                <a href="mailto: office@wetog.de">{t("termin")}</a>
            </p>
          </div>
        </div>
      </Fade>
    </>
  );
}
