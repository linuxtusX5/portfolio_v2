import React from "react";
import { Card } from "flowbite-react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";

function Projects() {
  const PROJECT1 = process.env.REACT_APP_PROJECT1_PAGE_URL;
  const REPOSITORY1 = process.env.REACT_APP_P1_REPOSITORY_PAGE_URL;

  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="overflow-y-auto bg-MainBG rounded-2xl absolute h-[93vh] w-full flex justify-center ">
        <div className="h-min w-full absolute bg-debug p-[20px] flex flex-col gap-5">
          <Card
            className=" w-full lg:w-auto bg-second mb-[20px] p-[10px] lg:p-[20px] border-none"
            imgAlt="Appointment"
            imgSrc={p1}
          >
            <h5 className="flex justify-start text-2xl font-bold tracking-tight text-white">
              Medical Appointment
            </h5>
            <p className="flex justify-start font-normal  text-white">
              Email: yoon@gmail.com
            </p>
            <p className="flex justify-start font-normal  text-white">
              Password: 123
            </p>
            <div className="flex gap-x-2">
              <a
                href={PROJECT1}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center   rounded-2xl h-[40px] w-[80px] bg-MainBG"
              >
                <p className="flex justify-start text-sm text-white">
                  Live Demo
                </p>
              </a>

              <a
                href={REPOSITORY1}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center   rounded-2xl h-[40px] w-[80px] bg-MainBG"
              >
                <p className="flex justify-start text-sm text-white">
                  Repository
                </p>
              </a>
            </div>
          </Card>

          <Card
            className=" w-full lg:w-auto bg-second mb-[20px] p-[10px] lg:p-[20px] border-none"
            imgAlt="StudentCouncil"
            imgSrc={p2}
          >
            <h5 className="flex justify-start text-2xl font-bold tracking-tight text-white">
              Student Council
            </h5>
            <div className="grid lg:flex gap-3 w-[80vh] ml-[-20px]">
              <div className="w-[40vh]">
                <h3 className="flex justify-start font-bold  text-white">
                  Student:
                </h3>
                <p className="flex justify-start font-normal  text-white">
                  ID: 2019-00735-Sample
                </p>
                <p className="flex justify-start font-normal  text-white">
                  Email: yoon@gmail.com
                </p>
                <p className="flex justify-start font-normal  text-white">
                  Password: P@ssw0rd
                </p>
              </div>
              <div className="w-[60vh]">
                <h3 className="flex justify-start font-bold  text-white">
                  Admin:
                </h3>
                <p className="flex justify-start text-sm text-white">
                  Email: y2019-00735-lq-0admin21@gmail.com
                </p>
                <p className="flex justify-start font-normal  text-white">
                  Password: Passw0rd
                </p>
              </div>
            </div>
            <div className="flex gap-x-2">
              <a
                href={PROJECT1}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center   rounded-2xl h-[40px] w-[80px] bg-MainBG"
              >
                <p className="flex justify-start text-sm text-white">
                  Live Demo
                </p>
              </a>

              <a
                href={REPOSITORY1}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center   rounded-2xl h-[40px] w-[80px] bg-MainBG"
              >
                <p className="flex justify-start text-sm text-white">
                  Repository
                </p>
              </a>
            </div>
          </Card>

          {/* Additional cards here */}
          <Card
            className="w-full lg:w-auto bg-second p-[10px] lg:p-[20px] border-none"
            imgAlt="Appointment"
            imgSrc={p1}
          >
            <h5 className="text-2xl font-bold tracking-tight text-white">
              Medical Appointment
            </h5>
            <p className="font-normal text-white">Email: yoon@gmail.com</p>
            <p className="font-normal text-white">Password: 123</p>
            <div className="flex gap-x-2">
              <a
                href={PROJECT1}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center rounded-2xl h-[40px] w-[80px] bg-MainBG"
              >
                <p className="text-sm text-white">Live Demo</p>
              </a>

              <a
                href={REPOSITORY1}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center rounded-2xl h-[40px] w-[80px] bg-MainBG"
              >
                <p className="text-sm text-white">Repository</p>
              </a>
            </div>
          </Card>

          {/* Repeat for more cards */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
