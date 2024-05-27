import Info from "../assets/info.png";
import Man from "../assets/man.png";
import Download from "../assets/download.png";
import { Button } from "flowbite-react";
import resume from "../assets/Joffrey_Salvatus.pdf";

function Home() {
  return (
    <div className="relative flex justify-center items-center">
      <div className="bg-MainBG rounded-2xl absolute h-[93vh] w-full top-5 flex justify-center items-center">
        <img
          className="absolute h-[30px] w-[30px] left-[10px] top-[10px] md:h-[40px] md:w-[40px]"
          src={Info}
          alt="Info"
        />
        <img
          className="absolute h-[50vh] w-[40vh] top-[40px] md:h-[60vh] md:w-[50vh]"
          src={Man}
          alt="Man"
        />

        <Button className="absolute bg-second rounded-2xl bottom-[20ch] h-[40px] w-[30vh] flex justify-center items-center md:bottom-[18ch]">
          <a
            href={resume}
            download="salvatus_joffrey.pdf"
            className="flex justify-center items-center relative w-[30vh]"
          >
            <img
              className="absolute h-[25px] w-[25px] left-[10px]"
              src={Download}
              alt="Download"
            />
            <strong className="absolute text-[#ffffff] text-[15px] left-[45px]">
              Download my CV
            </strong>
          </a>
        </Button>
        <div className="absolute bottom-[45px] left-0 right-0 flex justify-center items-center md:px-[10px]">
          <p className="text-[#ffffff] text-[13px] w-full p-[10px] md:text-[15px] ">
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
