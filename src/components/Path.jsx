import React, { useState } from "react";
import board from "../images/Icons/board.svg";
import build from "../images/Icons/build.svg";
import data from "../images/Icons/data.svg";
import net from "../images/Icons/net.svg";
import tent from "../images/Icons/tent.svg";

export default function Path() {
  const [isTentExpanded, setTentExpanded] = useState(false);
  const [isNetExpanded, setNetExpanded] = useState(false);
  const [isBuildExpanded, setBuildExpanded] = useState(false);
  const [isDataExpanded, setDataExpanded] = useState(false);
  const [isBoardExpanded, setBoardExpanded] = useState(false);

  return (
    <>
      <div className="arrows-pc">
        <div className="arrow-container">
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
          <div className="arrows-text">
            <div>
              <h1>Pentests von Anwendungen und Betriebssystemen</h1>
              <span>
                Pentests bieten die Möglichkeit eines organisierten, gezielten
                Angriffsversuchs auf IT-Systeme um Schwachstellen aufzudecken.
                Ziel ist es das IT-Sicherheitsniveau dadurch langfristig zu
                erhöhen. Hierbei existieren verschiedene Varianten: <br />- Mit
                um umfangreiches Wissen der Infrastrukur und Zugriff auf
                Dokumente und Quellcode (White Box). <br />- Mit nur für den
                Angriff notwendigen Informationen und ohne Zugriff auf interne
                Ressourcen (Grey Box) <br />- Ohne jegliche Information mit
                realitätstreuen Mitteln und Methoden (Black Box)
              </span>
            </div>

            <div>
              <h1>Überprüfung von Netzwerken</h1>
              <span>
                Überprüft werden unter anderem wie die Netzwerkstruktur
                aufgebaut ist, ob es entsprechende Dokumentationen dazu gibt und
                wie beispielsweise die Rechte- und Zugriffsstrukturen sind. Dies
                sind nur einige wichtige Punkte die zu einem sichern Netzwerk
                beitragen.
              </span>
            </div>
            <div>
              <h1>Gebäudesicherheit / Gebäudeautomation</h1>
              <span>
                Cybersicherheit beginnt in der physischen Welt. Jeder Server ist
                nur so sicher wie das Gebäude in dem er steht. Welche Zugänge
                hat das Gebäude? Werden nicht bekannte Menschen im Gebäude
                angesprochen wer Sie sind und was Sie möchten? Gibt es für den
                Gebäudezutritt Keykarten, Token oder Zahlenfelder? Dies sind nur
                einige der zu beachtenden Aspekte.
              </span>
            </div>
            <div>
              <h1>Datensicherung und Wiederherstellung</h1>
              <span>
                Backups zu erstellen ist wichtig, doch wie diese sicher
                aufbewahrt werden können ist ebenso bedeutend. Dies zu prüfen
                fällt in den Bereich der Datensicherung und Wiederherstellung.
                Es wird ebenfalls geprüft wie die Datensicherung im Unternehmen
                durchgeführt wird und ob beispielsweise Vorgaben zu
                Testwiederherstellungen der Backups bestehen.
              </span>
            </div>
            <div>
              <h1>Mitarbeiterschulung</h1>
              <span>
                Mitarbeiterschulung sollen ein Problembewusstsein und
                entsprechendes Verhalten der Mitarbeiter herstellen. Ein
                Bewusstsein für Cybersicherheit zu entwickeln ist nur eines der
                Ziele. Diese können durch Workshops oder Test-Software gut und
                nachhaltig vermittelt werden.
                <br />
                <br /> Bei Interesse kann außerdem ein Awarenesskonzept für das
                Unternehmen entwickelt werden.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="arrows-mobile">
        <div className="arrows-mobile__container">
          <div
            onClick={
              isTentExpanded
                ? (e) => setTentExpanded(false)
                : (e) => setTentExpanded(true)
            }
          >
            <h1 className="tent" style={{ marginTop: "0px" }}>
              Pentests von Anwendungen und Betriebssystemen
            </h1>
            {!isTentExpanded && (
              <>
                <span>
                  Pentests bieten die Möglichkeit eines organisierten,
                  gezielten...
                </span>
                <span className="mehr-button">
                  <b>Mehr</b>
                </span>
              </>
            )}
            {isTentExpanded && (
              <span>
                Pentests bieten die Möglichkeit eines organisierten, gezielten
                Angriffsversuchs auf IT-Systeme um Schwachstellen aufzudecken.
                Ziel ist es das IT-Sicherheitsniveau dadurch langfristig zu
                erhöhen. Hierbei existieren verschiedene Varianten: <br />- Mit
                um umfangreiches Wissen der Infrastrukur und Zugriff auf
                Dokumente und Quellcode (White Box). <br />- Mit nur für den
                Angriff notwendigen Informationen und ohne Zugriff auf interne
                Ressourcen (Grey Box) <br />- Ohne jegliche Information mit
                realitätstreuen Mitteln und Methoden (Black Box)
              </span>
            )}
          </div>
          <div
            onClick={
              isNetExpanded
                ? (e) => setNetExpanded(false)
                : (e) => setNetExpanded(true)
            }
          >
            <h1 className="net">Überprüfung von Netzwerken</h1>
            {!isNetExpanded && (
              <>
                <span>
                  Überprüft werden unter anderem wie die Netzwerkstruktur
                  aufgebaut...
                </span>
                <span className="mehr-button">
                  <solid>Mehr</solid>
                </span>
              </>
            )}

            {isNetExpanded && (
              <span>
                Überprüft werden unter anderem wie die Netzwerkstruktur
                aufgebaut ist, ob es entsprechende Dokumentationen dazu gibt und
                wie beispielsweise die Rechte- und Zugriffsstrukturen sind. Dies
                sind nur einige wichtige Punkte die zu einem sichern Netzwerk
                beitragen.
              </span>
            )}
          </div>
          <div
            onClick={
              isBuildExpanded
                ? (e) => setBuildExpanded(false)
                : (e) => setBuildExpanded(true)
            }
          >
            <h1 className="build">Gebäudesicherheit / Gebäudeautomation</h1>
            {!isBuildExpanded && (
              <>
                <span>
                  Cybersicherheit beginnt in der physischen Welt. Jeder Server
                  ist nur so...
                </span>
                <span className="mehr-button">
                  <solid>Mehr</solid>
                </span>
              </>
            )}
            {isBuildExpanded && (
              <span>
                Cybersicherheit beginnt in der physischen Welt. Jeder Server ist
                nur so sicher wie das Gebäude in dem er steht. Welche Zugänge
                hat das Gebäude? Werden nicht bekannte Menschen im Gebäude
                angesprochen wer Sie sind und was Sie möchten? Gibt es für den
                Gebäudezutritt Keykarten, Token oder Zahlenfelder? Dies sind nur
                einige der zu beachtenden Aspekte.
              </span>
            )}
          </div>
          <div
            onClick={
              isDataExpanded
                ? (e) => setDataExpanded(false)
                : (e) => setDataExpanded(true)
            }
          >
            <h1 className="data">Datensicherung und Wiederherstellung</h1>
            {!isDataExpanded && (
              <>
                <span>
                  Backups zu erstellen ist wichtig, doch wie diese sicher
                  aufbewahrt...
                </span>
                <span className="mehr-button">
                  <solid>Mehr</solid>
                </span>
              </>
            )}
            {isDataExpanded && (
              <span>
                Backups zu erstellen ist wichtig, doch wie diese sicher
                aufbewahrt werden können ist ebenso bedeutend. Dies zu prüfen
                fällt in den Bereich der Datensicherung und Wiederherstellung.
                Es wird ebenfalls geprüft wie die Datensicherung im Unternehmen
                durchgeführt wird und ob beispielsweise Vorgaben zu
                Testwiederherstellungen der Backups bestehen.
              </span>
            )}
          </div>
          <div
            style={{ marginBottom: "0px" }}
            onClick={
              isBoardExpanded
                ? (e) => setBoardExpanded(false)
                : (e) => setBoardExpanded(true)
            }
          >
            <h1 className="board">Mitarbeiterschulung</h1>
            {!isBoardExpanded && (
              <>
                <span>
                  Mitarbeiterschulung sollen ein Problembewusstsein und...
                </span>
                <span className="mehr-button">
                  <solid>Mehr</solid>
                </span>
              </>
            )}
          </div>
        </div>
        {isBoardExpanded && (
          <span
            className="expanded-text-mobile"
            onClick={
              isBoardExpanded
                ? (e) => setBoardExpanded(false)
                : (e) => setBoardExpanded(true)
            }
          >
            Mitarbeiterschulung sollen ein Problembewusstsein und entsprechendes
            Verhalten der Mitarbeiter herstellen. Ein Bewusstsein für
            Cybersicherheit zu entwickeln ist nur eines der Ziele. Diese können
            durch Workshops oder Test-Software gut und nachhaltig vermittelt
            werden.
            <br />
            <br /> Bei Interesse kann außerdem ein Awarenesskonzept für das
            Unternehmen entwickelt werden.
          </span>
        )}
      </div>
    </>
  );
}
