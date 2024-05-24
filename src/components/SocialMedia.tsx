import facebook from "../assets/facebook.png";
import github from "../assets/code.png";
import linkedin from "../assets/linkedin.png";
import { Button } from "flowbite-react";

function SocialMedia() {
  return (
    <div className="relative lg:h-[233px] justify-center items-center flex ">
      <Button className="absolute bg-MainBG rounded-2xl top-[20px] h-[55px] w-[40vh]">
        <div className="flex justify-center items-center relative w-[40vh]">
          <img
            className="h-[40px] w-[40px] absolute left-[5vh]"
            src={facebook}
            alt="facebook"
          />
          <strong className=" text-[#ffffff] text-[3vh] left-[13vh] absolute">
            Salvatus Dev
          </strong>
        </div>
      </Button>
      <Button className="absolute bg-MainBG rounded-2xl top-[13vh] h-[55px] w-[40vh]">
        <div className="flex justify-center items-center relative w-[40vh]">
          <img
            className="h-[40px] w-[40px] absolute left-[5vh]"
            src={github}
            alt="github"
          />
          <strong className="text-[#ffffff] text-[3vh] left-[13vh] absolute">
            linuxtusX5
          </strong>
        </div>
      </Button>
      <Button className="absolute bg-MainBG rounded-2xl top-[23vh] h-[55px] w-[40vh]">
        <div className="flex justify-center items-center relative w-[40vh]">
          <img
            className="h-[40px] w-[40px] absolute left-[5vh]"
            src={linkedin}
            alt="linkedin"
          />
          <strong className=" text-[#ffffff] text-[3vh] left-[13vh] absolute">
            joffrey salvatus
          </strong>
        </div>
      </Button>
    </div>
  );
}

export default SocialMedia;
