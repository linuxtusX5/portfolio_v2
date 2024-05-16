import React from "react";
import Home from "../assets/home.png";
import Skills from "../assets/skill.png";
import Projects from "../assets/project.png";
import Contact from "../assets/contacts.png";

function Navigations() {
  return (
    <div className="relative md:justify-between md:items-center md:flex md:h-full md:w-full lg:justify-center">
      <div className="bg-MainBG rounded-2xl top-[20px] h-[75px] w-[12vh] flex justify-center items-center lg:absolute">
        <img className="absolute h-[50px] w-[50px] " src={Home} alt="Home" />
      </div>
      <div className="bg-MainBG rounded-2xl top-[17vh] h-[75px] w-[12vh] flex justify-center items-center lg:absolute">
        <img className="absolute h-[50px] w-[50px]" src={Skills} alt="Skills" />
      </div>
      <div className="bg-MainBG rounded-2xl top-[31vh] h-[75px] w-[12vh] flex justify-center items-center lg:absolute">
        <img
          className="absolute h-[50px] w-[50px]"
          src={Projects}
          alt="Projects"
        />
      </div>
      <div className="bg-MainBG rounded-2xl top-[45vh] h-[75px] w-[12vh] flex justify-center items-center lg:absolute">
        <img
          className="absolute h-[50px] w-[50px]"
          src={Contact}
          alt="Contact"
        />
      </div>
    </div>
  );
}

export default Navigations;
