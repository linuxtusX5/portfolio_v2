import React from "react";
import Home from "../assets/home.png";
import Skills from "../assets/skill.png";
import Projects from "../assets/project.png";
import Contact from "../assets/contacts.png";
import { Button } from "flowbite-react";
import { Tooltip } from "flowbite-react";
import { Link } from "react-router-dom";

function Navigations() {
  return (
    <div className="relative md:justify-between md:items-center md:flex md:h-full md:w-full lg:justify-center">
      <Button className="bg-MainBG relative rounded-2xl lg:top-[20px] h-[75px] w-[12vh] flex justify-center items-center lg:absolute">
        <Link to="/home">
          <Tooltip content="Home" placement="left" style="light">
            <img className="h-full w-full " src={Home} alt="Home" />
          </Tooltip>
        </Link>
      </Button>
      <Button className="bg-MainBG rounded-2xl lg:top-[17vh] h-[75px] w-[12vh] flex justify-center items-center lg:absolute">
        <Tooltip content="Skills" placement="left" style="light">
          <img className="h-full w-full " src={Skills} alt="Skills" />
        </Tooltip>
      </Button>
      <Button className="bg-MainBG rounded-2xl lg:top-[31vh] h-[75px] w-[12vh] flex justify-center items-center lg:absolute">
        <Tooltip content="Projects" placement="left" style="light">
          <img className="h-full w-full" src={Projects} alt="Projects" />
        </Tooltip>
      </Button>
      <Button className="bg-MainBG rounded-2xl lg:top-[45vh] h-[75px] w-[12vh] flex justify-center items-center lg:absolute">
        <Tooltip content="Contact" placement="left" style="light">
          <img className="h-full w-full" src={Contact} alt="Contact" />
        </Tooltip>
      </Button>
    </div>
  );
}

export default Navigations;
