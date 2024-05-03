import React from "react";
import "../styles/styles.css";
import facebook from "../assets/facebook.png";
import github from "../assets/code.png";
import linkedin from "../assets/linkedin.png";

function SocialMedia() {
  return (
    <div className="bottom">
      <div className="link1">
        <img className="logo" src={facebook} alt="facebook" />
        <strong className="name1">Salvatus Dev</strong>
      </div>
      <div className="link2">
        <img className="logo" src={github} alt="github" />
        <strong className="name1">linuxtusX5</strong>
      </div>
      <div className="link3">
        <img className="logo" src={linkedin} alt="linkedin" />
        <strong className="name1">joffrey salvatus</strong>
      </div>
    </div>
  );
}

export default SocialMedia;
