import React from "react";
import facebook from "../assets/facebook.png";
import github from "../assets/code.png";
import linkedin from "../assets/linkedin.png";

function SocialMedia() {
  return (
    <div className="relative lg:h-[233px] justify-center items-center flex h-[233px]">
      <div className="absolute bg-MainBG rounded-2xl top-[20px] h-[55px] w-[40vh] flex justify-center items-center">
        <img
          className="absolute h-[40px] w-[40px] left-[20px]"
          src={facebook}
          alt="facebook"
        />
        <strong className="absolute text-[#ffffff] text-[3vh] left-[13vh]">
          Salvatus Dev
        </strong>
      </div>
      <div className="absolute bg-MainBG rounded-2xl top-[13vh] h-[55px] w-[40vh] flex justify-center items-center">
        <img
          className="absolute h-[40px] w-[40px] left-[20px]"
          src={github}
          alt="github"
        />
        <strong className="absolute text-[#ffffff] text-[3vh] left-[13vh]">
          linuxtusX5
        </strong>
      </div>
      <div className="absolute bg-MainBG rounded-2xl top-[23vh] h-[55px] w-[40vh] flex justify-center items-center">
        <img
          className="absolute h-[40px] w-[40px] left-[20px]"
          src={linkedin}
          alt="linkedin"
        />
        <strong className="absolute text-[#ffffff] text-[3vh] left-[13vh]">
          joffrey salvatus
        </strong>
      </div>
    </div>
  );
}

export default SocialMedia;
