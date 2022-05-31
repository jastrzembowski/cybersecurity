import React, { useState } from "react";
import Fade from "react-reveal/Fade";

export default function Offers() {
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
            <p>Pentest von Webanwendungen</p>
            <p>Auditbericht mit Diskussion</p>
            <p>Vorschlag zur Verbesserung der Sicherheitsmaßnahmen</p>
            <h2>
              <strong>
                <a href="mailto: office@wetog.de">Termin vereinbaren</a>
              </strong>
            </h2>
          </div>
        </Fade>{" "}
        <Fade top duration={2000} delay={200}>
          <div className="box">
            <h1>Vorort Audit</h1>
            <h2>1499€ netto*</h2>
            <p>Überprüfung von Netzwerken</p>
            <p>Überprüfung Hardware und Infrastruktur</p>
            <p>Datensicherung und -wiederherstellung</p>
            {isVorortHidden && (
              <span
                className="hide-button"
                onClick={(e) => setIsVorortHidden(!isVorortHidden)}
              >
                Mehr Anzeigen
              </span>
            )}
            {!isVorortHidden && (
              <>
                <p>Authentifizierungs- und Zugangskontrollsystem</p>
                <p>Rechte und Freigaben auf Daten</p>
                <p>Auditbericht mit Diskussion</p>
                <p>Vorschlag zur Verbesserung der Sicherheitsmaßnahmen</p>
              </>
            )}
            <span className="vorort-text">
              <p>Authentifizierungs- und Zugangskontrollsystem</p>
              <p>Rechte und Freigaben auf Daten</p>
              <p>Auditbericht mit Diskussion</p>
              <p>Vorschlag zur Verbesserung der Sicherheitsmaßnahmen</p>
            </span>
            <h2>
              <strong>
                <a href="mailto: office@wetog.de">Termin vereinbaren</a>
              </strong>
            </h2>
          </div>{" "}
        </Fade>{" "}
        <Fade top duration={2000} delay={400}>
          <div className="box">
            <h1>Cybersecurity Komplettpaket</h1>
            <h2>2999€ netto*</h2>
            <p>Online- und vor Ort Prüfungen</p>
            <p>Pentest von Anwendungen und Betriebssysteme</p>
            <p>Sicherheitsaudit Quellcode von Anwendungen</p>
            {isCyberHidden && (
              <div>
                <span
                  className="hide-button"
                  onClick={(e) => setIsCyberHidden(!isCyberHidden)}
                >
                  Mehr Anzeigen
                </span>
              </div>
            )}
            {!isCyberHidden && (
              <>
                <p>Anwendungen und Systeme in der Cloud</p>
                <p>Docker Sicherheit</p>
                <p>Sicherheit Mobile Geräte sowie IoT-Geräte</p>
                <p>Prüfung und Sicherung mobiler Geräte</p>
                <p>Prüfung und Sicherung IoT-Geräten</p>
                <p>Auditbericht mit Diskussion</p>
                <p>Vorschläge zur Verbesserung der Sicherheit</p>
                <p>Mitarbeiterschulung zur sicheren Fernarbeit</p>
              </>
            )}
            <h2>
              <strong>
                <a href="mailto: office@wetog.de">Termin vereinbaren</a>
              </strong>
            </h2>
          </div>
        </Fade>
      </div>{" "}
      <Fade top duration={2000}>
        <div className="kost-box__holder">
          <div className="kost-box">
            <h1>Kostenfreies Vorgespräch</h1>
            <p>
              Wir finden Ihr perfektes und individuelles Angebot. Vereinbaren
              Sie jetzt ein kostenloses Vorgespräch.
            </p>
            <p>
              <strong>
                <a href="mailto: office@wetog.de">Termin vereinbaren</a>
              </strong>
            </p>
          </div>
        </div>
      </Fade>
    </>
  );
}
