import React from "react";
import "../styles/styles.css";
import Info from "../assets/info.png";
import Man from "../assets/man.png";

function Home() {
  return (
    <div className="side2">
      <div className="bgHome">
        <img className="Info" src={Info} alt="Info" />
        <img className="Man" src={Man} alt="Man" />
      </div>
    </div>
  );
}

export default Home;
