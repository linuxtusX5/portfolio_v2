import facebook from "../assets/facebook.png";
import github from "../assets/code.png";
import linkedin from "../assets/linkedin.png";
import { Button } from "flowbite-react";

function SocialMedia() {
  const FACEBOOK = process.env.REACT_APP_FACEBOOK_PAGE_URL;
  const GITHUB = process.env.REACT_APP_GITHUB_PAGE_URL;
  const LINKEDIN = process.env.REACT_APP_LINKEDIN_PAGE_URL;

  return (
    <div className="relative lg:h-[233px] justify-center items-center flex h-[233px]">
      <Button className="absolute bg-MainBG rounded-2xl top-[20px] h-[55px] w-[40vh]">
        <a
          href={FACEBOOK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center relative w-[40vh]"
        >
          <img
            className="h-[40px] w-[40px] absolute left-[5vh]"
            src={facebook}
            alt="facebook"
          />
          <strong className=" text-[#ffffff] text-[3vh] left-[13vh] absolute">
            Salvatus Dev
          </strong>
        </a>
      </Button>
      <Button className="absolute bg-MainBG rounded-2xl top-[11vh] h-[55px] w-[40vh]">
        <a
          href={GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center relative w-[40vh]"
        >
          <img
            className="h-[40px] w-[40px] absolute left-[5vh]"
            src={github}
            alt="github"
          />
          <strong className="text-[#ffffff] text-[3vh] left-[13vh] absolute">
            linuxtusX5
          </strong>
        </a>
      </Button>
      <Button className="absolute bg-MainBG rounded-2xl top-[19vh] h-[55px] w-[40vh]">
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center relative w-[40vh]"
        >
          <img
            className="h-[40px] w-[40px] absolute left-[5vh]"
            src={linkedin}
            alt="linkedin"
          />
          <strong className=" text-[#ffffff] text-[3vh] left-[13vh] absolute">
            joffrey salvatus
          </strong>
        </a>
      </Button>
    </div>
  );
}

export default SocialMedia;
