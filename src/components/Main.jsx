import React, { useState } from "react";
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
        <img src={Rechteck938} alt="bg3" className="main-bg3"></img>
        <Fade top duration={3000}>
          <img
            src={illustration_02}
            alt="illustration"
            className="illustration2"
          ></img>
        </Fade>
        <img src={Rechteck891} alt="bg2" className="main-bg2"></img>
        <Fade top duration={3000}>
          <img
            src={illustration_03}
            alt="illustration"
            className="illustration3"
          ></img>
        </Fade>
        <div className="about-box">
          <h1>Wer sollte sich um Cybersicherheit kümmern?</h1>
          <span>
            Diese Frage ist einfach zu beantworten: Jeder der sich sicher fühlen
            möchte.
            <br />
            <br />
            Die größte Bedrohung im Internet sind Cyberangriffe. Es gibt viele
            Arten von ihnen, aber jede ist darauf ausgelegt wertvolle
            Informationen zu erfassen, die es Hackern ermöglichen Geld zu
            stehlen oder ihre Opfer um Lösegeld zu erpressen. Anbieter digitaler
            Dienste und Unternehmen die im Internetbereich tätig sind, sind
            Cyberangriffen am stärksten ausgesetzt. Die Folge von Cyberangriffen
            ist nicht nur der Vertrauensverlust von Kunden und Geschäftspartnern
            der Marke, sondern auch massive Geldstrafen die staatliche
            Institutionen aufgrund der DSGVO verhängen.
          </span>
          <a href="mailto: office@wetog.de">
            <div className="main-button nav-img">
              <p>Learn more</p>
            </div>
          </a>
          {isHidden && (
            <div
              className="main-button nav-img__small"
              onClick={(e) => setIsHidden(!isHidden)}
            >
              <span>
                <strong>Mehr Erfahren</strong>
              </span>
            </div>
          )}
          {!isHidden && (
            <span className="small-text-box">
              <br />
              <br />
              Um den Jahreswechsel (2020/2021) haben Angreifer die Produktion
              neuer Schadprogramm-Varianten deutlich beschleunigt, sodass im
              Februar 2021 mit durchschnittlich 553.000 neuen Varianten pro Tag
              der höchste jemals gemessene durchschnittliche Tageszuwachs zu
              verzeichnen war. Dieser lag 40 Prozent über dem Durchschnittswert
              vom Jahre 2020. Quelle dieser und der folgenden Daten:
              BSI-Auswertung von Rohdaten des Instituts AV-Test GmbH
              (https://www.bmi.bund.de/SharedDocs/downloads/DE/publikationen/themen/it-digitalpolitik/bsi-lagebericht-cybersicherheit-2021.pdf?__blob=publicationFile&v=3)
              <br />
              <br />
              Privatpersonen sind jedoch nicht frei von Gefahren. Der Schutz
              personenbezogener Daten ist ein Garant für unsere Privatsphäre im
              Internet, daher ist es äußerst wichtig bewusst mit diesen
              Informationen umzugehen und sie wirksam vor dem Eingriff
              unerwünschter Dritter zu schützen. Das 21. Jahrhundert ist eine
              weitgehend technikdominierte Realität, dies sollten Sie
              berücksichtigen und nicht nur in der realen, sondern auch in
              dieser virtuellen Welt, an Ihre Sicherheit denken.
            </span>
          )}
        </div>

        <div className="reaction-box">
          <h1>Prävention statt Reaktion</h1>
          <span>
            Die größte Bedrohung im Internet sind Cyberangriffe. Es gibt viele
            Arten von ihnen, aber jede ist darauf ausgelegt wertvolle
            Informationen zu erfassen, die es Hackern ermöglichen Geld zu
            stehlen oder ihre Opfer um Lösegeld zu erpressen. Anbieter digitaler
            Dienste und Unternehmen die im Internetbereich tätig sind, sind
            Cyberangriffen am stärksten ausgesetzt. Die Folge von Cyberangriffen
            ist nicht nur der Vertrauensverlust von Kunden und Geschäftspartnern
            der Marke, sondern auch massive Geldstrafen die staatliche
            Institutionen aufgrund der DSGVO verhängen.
            <br />
            <br />
            Um den Jahreswechsel (2020/2021) haben Angreifer die Produktion
            neuer Schadprogramm-Varianten deutlich beschleunigt, sodass im
            Februar 2021 mit durchschnittlich 553.000 neuen Varianten pro Tag
            der höchste jemals gemessene durchschnittliche Tageszuwachs zu
            verzeichnen war. Dieser lag 40 Prozent über dem Durchschnittswert
            vom Jahre 2020. Quelle dieser und der folgenden Daten:
            BSI-Auswertung von Rohdaten des Instituts AV-Test GmbH
            (https://www.bmi.bund.de/SharedDocs/downloads/DE/publikationen/themen/it-digitalpolitik/bsi-lagebericht-cybersicherheit-2021.pdf?__blob=publicationFile&v=3)
            <br />
            <br />
            Privatpersonen sind jedoch nicht frei von Gefahren. Der Schutz
            personenbezogener Daten ist ein Garant für unsere Privatsphäre im
            Internet, daher ist es äußerst wichtig bewusst mit diesen
            Informationen umzugehen und sie wirksam vor dem Eingriff
            unerwünschter Dritter zu schützen. Das 21. Jahrhundert ist eine
            weitgehend technikdominierte Realität, dies sollten Sie
            berücksichtigen und nicht nur in der realen, sondern auch in dieser
            virtuellen Welt, an Ihre Sicherheit denken.
          </span>
          <a href="https://www.bmi.bund.de/SharedDocs/downloads/DE/publikationen/themen/it-digitalpolitik/bsi-lagebericht-cybersicherheit-2021.pdf?__blob=publicationFile&v=3">
            <div className="main-button react-img">
              <p>Download 10 Schritte pdf</p>
            </div>
          </a>
        </div>
        <Path />
        <Offers />
      </div>
    </>
  );
}
