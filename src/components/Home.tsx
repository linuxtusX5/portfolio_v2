import React from "react";
import Info from "../assets/info.png";
import Man from "../assets/man.png";
import Download from "../assets/download.png";

function Home() {
  return (
    <div className="bg-second relative rounded-2xl h-[100vh] ">
      <div className="bg-MainBG rounded-2xl absolute top-[20px] left-[19px] h-[93vh] w-[126vh]">
        <img
          className="absolute h-[50px] w-[50px] left-[20px] top-[20px]"
          src={Info}
          alt="Info"
        />
        <img
          className="absolute h-[60vh] w-[50vh] left-[33vh] top-[30px]"
          src={Man}
          alt="Man"
        />

        <div className="absolute bg-second rounded-2xl bottom-[20ch] h-[50px] w-[35vh] flex justify-center items-center left-[35%]">
          <img
            className="absolute h-[40px] w-[40px] left-[10px]"
            src={Download}
            alt="Download"
          />
          <strong className="absolute text-[#ffffff] text-[3vh] left-[62px]">
            Download my CV
          </strong>
        </div>
        <div className="absolute bottom-[60px] left-0 right-0 flex justify-center items-center">
          <p className="text-[#ffffff] text-[2vh] w-[75%]">
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
