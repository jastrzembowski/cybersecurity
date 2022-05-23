import React from "react";
import arndt from "../images/Images/arndt.png";
import Rechteck8882 from "../images/Background_grad/Rechteck8882.png";

export default function consultant() {
  function unCheck() {
    document.getElementById("menu-btn").checked = false;
      }
  return (
    <div className="consultant cyber" onClick={(e) => unCheck()}>
      <img src={Rechteck8882} alt="bg1" className="partner-bg1"></img>

      <div className="consultant-box cyber-box">
        <h1>CyberSchutz-Versicherung der ALLIANZ</h1>
        <p>
          „Allianz Arndt Köhler e.K. - Hier sind Sie richtig, wenn Sie auch in
          immer schnelleren Zeiten Wert auf Beständigkeit, Zuverlässigkeit und
          echte Partnerschaft legen. Klassische Tugenden, für manche gar
          altmodisch, die dennoch ihre Berechtigung auch heute haben.
          Vertrauensvolle Arbeit ist meine Leidenschaft und dies seit über 20
          Jahren.“
          <br />
          <br />
          Cyber-Angriffe und Sabotage-Vorfälle können zu langen
          Betriebsunterbrechungen und Produktionsausfällen führen. 
          <br />
          <br />Allianz
          Cyberschutz bietet Ihrem Unternehmen eine umfassende Deckung für
          interne und externe Schäden. Professionelle Beratung, nicht nur in
          Notfällen und Krisen, hilft Ihnen, Risiken effektiv zu managen und zu
          minimieren, bevor etwas passiert. Das einfache Krisenverfahren und das
          richtige Verhalten schützen Ihr Unternehmen vor möglichen Verlusten.
        </p>
        <div className="main-button nav-img">
          <p><a href="mailto: office@wetog.de">Kontakt</a></p>
        </div>
      </div>
      <img src={arndt} alt="Arndt Köhler" className="consultant-img" />
    </div>
  );
}
