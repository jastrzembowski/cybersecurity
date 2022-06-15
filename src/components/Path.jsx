import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import board from "../images/Icons/board.svg";
import build from "../images/Icons/build.svg";
import data from "../images/Icons/data.svg";
import net from "../images/Icons/net.svg";
import tent from "../images/Icons/tent.svg";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

export default function Path(props) {
  const [isTentExpanded, setTentExpanded] = useState(false);
  const [isNetExpanded, setNetExpanded] = useState(false);
  const [isBuildExpanded, setBuildExpanded] = useState(false);
  const [isDataExpanded, setDataExpanded] = useState(false);
  const [isBoardExpanded, setBoardExpanded] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className={props.isHidden ? "arrows-pc arrows-hid" : "arrows-pc"}>
        <div className="arrow-container">
          <Fade top duration={2000}>
            <div className="arrow-box">
              <div className="line"></div>
              <div className="circles">
                <div className="circle">
                  <img src={tent} alt="tent" className="icon"></img>
                </div>
                <div className="circle">
                  <img src={net} alt="net" className="icon"></img>
                </div>
                <div className="circle">
                  <img src={build} alt="build" className="icon"></img>
                </div>
                <div className="circle">
                  <img src={data} alt="data" className="icon"></img>
                </div>
                <div className="circle">
                  <img src={board} alt="board" className="icon"></img>
                </div>
              </div>
            </div>
          </Fade>
          <div className="arrows-text">
            <Slide bottom cascade duration={2500}>
              <div>
                <h1>{t("pentest")}</h1>
                <span>
                  {t("pen-text")}
                  <br />
                  {t("pen-p1")}
                  <br />
                  {t("pen-p2")}
                  <br />
                  {t("pen-p3")}
                </span>
              </div>

              <div>
                <h1>{t("uber")}</h1>
                <span>{t("uber-text")}</span>
              </div>
              <div>
                <h1>{t("build")}</h1>
                <span>{t("build-text")}</span>
              </div>
              <div>
                <h1>{t("datensich")}</h1>
                <span>{t("daten-text")}</span>
              </div>
              <div>
                <h1>{t("mitarbait")}</h1>
                <span>
                  {t("mit-text-1")}
                  <br />
                  <br /> {t("mit-text-2")}
                </span>
              </div>
            </Slide>
          </div>
        </div>
      </div>

      <div className="arrows-mobile">
        <Slide bottom>
          <div className="arrows-mobile__container">
            <div
              onClick={
                isTentExpanded
                  ? (e) => setTentExpanded(false)
                  : (e) => setTentExpanded(true)
              }
            >
              <h1 className="tent" style={{ marginTop: "0px" }}>
                {t("pentest")}{" "}
              </h1>
              {!isTentExpanded && (
                <>
                  <span>{t("pen-short")}</span>
                  <span className="mehr-button">
                    <b>{t("mehr")}</b>
                  </span>
                </>
              )}
              {isTentExpanded && (
                <span>
                  {t("pen-text")}
                  <br />
                  {t("pen-p1")}
                  <br />
                  {t("pen-p2")}
                  <br />
                  {t("pen-p3")}
                </span>
              )}
            </div>
            <Slide bottom>
              <div
                onClick={
                  isNetExpanded
                    ? (e) => setNetExpanded(false)
                    : (e) => setNetExpanded(true)
                }
              >
                <h1 className="net"> {t("uber")}</h1>
                {!isNetExpanded && (
                  <>
                    <span>
                      {t("uber-short")}
                    </span>
                    <span className="mehr-button">
                      <solid>{t("mehr")}</solid>
                    </span>
                  </>
                )}

                {isNetExpanded && (
                  <span>
                   {t("uber-text")}
                  </span>
                )}
              </div>
            </Slide>{" "}
            <Slide bottom>
              <div
                onClick={
                  isBuildExpanded
                    ? (e) => setBuildExpanded(false)
                    : (e) => setBuildExpanded(true)
                }
              >
                <h1 className="build">{t("build")}</h1>
                {!isBuildExpanded && (
                  <>
                    <span>
                    {t("build-short")}
                    </span>
                    <span className="mehr-button">
                      <solid>{t("mehr")}</solid>
                    </span>
                  </>
                )}
                {isBuildExpanded && (
                  <span>
                   {t("build-text")}
                  </span>
                )}
              </div>{" "}
            </Slide>{" "}
            <Slide bottom>
              <div
                onClick={
                  isDataExpanded
                    ? (e) => setDataExpanded(false)
                    : (e) => setDataExpanded(true)
                }
              >
                <h1 className="data">{t("datensich")}</h1>
                {!isDataExpanded && (
                  <>
                    <span>
                      {t("daten-short")}
                    </span>
                    <span className="mehr-button">
                      <solid>{t("mehr")}</solid>
                    </span>
                  </>
                )}
                {isDataExpanded && (
                  <span>
                 {t("daten-text")}
                  </span>
                )}
              </div>
            </Slide>
            <Slide bottom>
              <div
                style={{ marginBottom: "0px" }}
                onClick={
                  isBoardExpanded
                    ? (e) => setBoardExpanded(false)
                    : (e) => setBoardExpanded(true)
                }
              >
                <h1 className="board">{t("mitarbait")}</h1>
                {!isBoardExpanded && (
                  <>
                    <span>
                      {t("mit-short")}
                    </span>
                    <span className="mehr-button">
                      <solid>{t("mehr")}</solid>
                    </span>
                  </>
                )}
              </div>
            </Slide>
          </div>
        </Slide>

        {isBoardExpanded && (
          <span
            className="expanded-text-mobile"
            onClick={
              isBoardExpanded
                ? (e) => setBoardExpanded(false)
                : (e) => setBoardExpanded(true)
            }
          >
            {t("mit-text-1")}
            <br />
            <br /> {t("mit-text-2")}
          </span>
        )}
      </div>
    </>
  );
}
