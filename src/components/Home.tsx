import React from "react";
import "../styles/styles.css";
import Info from "../assets/info.png";
import Man from "../assets/man.png";
import Download from "../assets/download.png";

function Home() {
  return (
    <div className="side2">
      <div className="bgHome">
        <img className="Info" src={Info} alt="Info" />
        <img className="Man" src={Man} alt="Man" />

        <div className="DL">
          <img className="download" src={Download} alt="Download" />
          <strong className="CV">Download my CV</strong>
        </div>
        <div className="about">
          <p>
            As a Software developer, I designed and maintained server-side
            applications, built RESTful APIs, and managed MySQL databases. I'm
            expertise in JavaScript, typescript, React and Node.js ensured
            scalable, performant solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
