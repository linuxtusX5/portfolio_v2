import React from "react";
import profile from "../assets/me.png";

function Profile() {
  return (
    <div className="relative flex justify-center items-center">
      <div className="bg-MainBG rounded-2xl absolute top-5 h-[30vh] w-full flex items-center justify-center lg:h-[40vh] md:h-[30vh]">
        <img
          className="h-full w-[260px] lg:h-[260px] absolute top-0 rounded-2xl md:w-[250px] md:h-[250px]"
          src={profile}
          alt="Profile"
        />
      </div>
      <div className=" text-[#ffffff] relative h-full w-full mt-[290px] lg:mt-[290px] md:h-[100px]">
        <strong className="text-[5vh] lg:text-[30px] md:text-[35px]">
          Joffrey Salvatus
        </strong>
        <br />
        <strong className="text-[3vh] lg:text-[20px] md:text-[20px]">
          (Software Developer)
        </strong>
      </div>
    </div>
  );
}

export default Profile;
