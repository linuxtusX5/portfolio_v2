import React from "react";
import profile from "../assets/me.png";

function Profile() {
  return (
    <div className="relative flex justify-center items-center">
      <div className="bg-MainBG rounded-2xl absolute top-5 h-[40vh] w-full flex items-center justify-center lg:h-[40vh] md:h-[40vh]">
        <img
          className="h-full w-[260px] lg:h-[260px] absolute top-0 rounded-2xl md:w-[250px] md:h-[250px]"
          src={profile}
          alt="Profile"
        />
      </div>
      <div className=" text-[#ffffff] relative h-full w-full mt-[290px] lg:mt-[290px]">
        <strong className="text-[5vh] lg:text-[30pxh]">Joffrey Salvatus</strong>
        <br />
        <strong className="text-[3vh] lg:text-[20px]">
          (Software Developer)
        </strong>
      </div>
    </div>
  );
}

export default Profile;
