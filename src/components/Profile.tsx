import React from "react";
import profile from "../assets/me.png";

function Profile() {
  return (
    <div className="bg-second rounded-2xl h-[400px] relative flex justify-center items-center ">
      <div className="bg-MainBG rounded-2xl absolute top-[20px] h-[40vh] w-[42vh] flex items-center justify-center">
        <img
          className="h-[250px] w-[250px] rounded-2x1"
          src={profile}
          alt="Profile"
        />
      </div>
      <div className="absolute text-[#ffffff] text-[5vh] bottom-[30px]">
        <strong>Joffrey Salvatus</strong>
        <br />
        <strong className="text-[3vh]">(Software Developer)</strong>
      </div>
    </div>
  );
}

export default Profile;
