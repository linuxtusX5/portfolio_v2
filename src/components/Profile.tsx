import React from "react";
import profile from "../assets/me.png";

function Profile() {
  return (
    <div className="side1">
      <div className="bg">
        <img className="Pic" src={profile} alt="Profile" />
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
