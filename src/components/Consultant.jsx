import React from "react";
import werner_2 from "../images/Images/werner_2.png";
import Rechteck8882 from "../images/Background_grad/Rechteck8882.png";

export default function consultant() {
  function unCheck() {
    document.getElementById("menu-btn").checked = false;
      }
  return (
    <div className="consultant" onClick={(e) => unCheck()}>
      <img src={Rechteck8882} alt="bg1" className="partner-bg1"></img>

      <div className="consultant-box">
        <h1>Ihr Consultant</h1>
        <p>
          Mit 10 Jahren Erfahrung als Cyber-Security Consultant und über 20
          Jahren Berufserfahrung in der IT ist Werner Krause ihr kompetenter
          Ansprechpartner für die Sicherheit Ihres Unternehmens. Mit seinen
          Zahlreichen Fortbildungen und Erfahrungen unter anderem in den
          Bereichen CEH11, IPv6, IOT, Protokollanalyse bringt er die Sicherheit
          ihres Unternehmens und Ihrer Daten voran.
          <br />
          <br />
          Sei es ihre Netzwerksicherheit, Mitarbeiterschulungen, Datensicherung
          oder das gezielte aufspüren von Schwachstellen - wir haben das
          passende Konzept und Angebot für Sie parat. Zögern Sie nicht uns
          direkt und unverbindlich anzusprechen!
        </p>
        <div className="main-button nav-img">
          <p><a href="mailto: office@wetog.de">Kontakt</a></p>
        </div>
      </div>
      <img src={werner_2} alt="Krause Werner" className="consultant-img" />
    </div>
  );
}
