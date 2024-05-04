import React from "react";
import Home from "../assets/home.png";
import Skills from "../assets/skill.png";
import Projects from "../assets/project.png";
import Contact from "../assets/contacts.png";
import "../styles/styles.css";

function Navigations() {
  return (
    <div className="side3">
      <div className="Home">
        <img className="logo2" src={Home} alt="Home" />
        {/* <strong className="name1">Salvatus Dev</strong> */}
      </div>
      <div className="Skills">
        <img className="logo2" src={Skills} alt="Skills" />
        {/* <strong className="name1">Salvatus Dev</strong> */}
      </div>
      <div className="Projects">
        <img className="logo2" src={Projects} alt="Projects" />
        {/* <strong className="name1">Salvatus Dev</strong> */}
      </div>
      <div className="Contact">
        <img className="logo2" src={Contact} alt="Contact" />
        {/* <strong className="name1">Salvatus Dev</strong> */}
      </div>
    </div>
  );
}

export default Navigations;
