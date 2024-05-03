import React from "react";
import profile from "../assets/me.png";
import "../styles/styles.css";

function Profile() {
  return (
    <div className="side1">
      <div className="bg">
        <img src={profile} alt="Profile" />
      </div>
      <div className="name">
        <strong>Joffrey Salvatus</strong>
        <br />
        <strong className="second">(Software Developer)</strong>
      </div>
    </div>
  );
}

export default Profile;
