import React from "react";
import { Card } from "flowbite-react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.jpg";

function Projects() {
  const PROJECT1 = process.env.REACT_APP_PROJECT1_PAGE_URL;
  const PROJECT2 = process.env.REACT_APP_PROJECT2_PAGE_URL;
  const PROJECT3 = process.env.REACT_APP_PROJECT3_PAGE_URL;
  const PROJECT4 = process.env.REACT_APP_PROJECT4_PAGE_URL;
  const REPOSITORY5 = process.env.REACT_APP_PROJECT5_PAGE_URL;

  const REPOSITORY1 = process.env.REACT_APP_P1_REPOSITORY_PAGE_URL;
  const REPOSITORY2 = process.env.REACT_APP_P2_REPOSITORY_PAGE_URL;
  const REPOSITORY3 = process.env.REACT_APP_P3_REPOSITORY_PAGE_URL;
  const REPOSITORY4 = process.env.REACT_APP_P4_REPOSITORY_PAGE_URL;

  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="overflow-y-auto bg-MainBG rounded-2xl absolute h-[93vh] w-full flex justify-center ">
        <div className=" w-full absolute flex flex-col gap-5 h-[100%] width-[100%] m-[0px] p-[20px] overflow-x-hidden">
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
            <div className="grid lg:flex gap-3 w-[80vh] ml-[-10px] lg:ml-0">
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
                href={PROJECT2}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center   rounded-2xl h-[40px] w-[80px] bg-MainBG"
              >
                <p className="flex justify-start text-sm text-white">
                  Live Demo
                </p>
              </a>

              <a
                href={REPOSITORY2}
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
            imgAlt=" AdvanceCare"
            imgSrc={p3}
          >
            <h5 className="flex justify-start text-2xl font-bold tracking-tight text-white">
              Advance Care
            </h5>
            <div className="flex gap-x-2">
              <a
                href={PROJECT3}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center   rounded-2xl h-[40px] w-[80px] bg-MainBG"
              >
                <p className="flex justify-start text-sm text-white">
                  Live Demo
                </p>
              </a>

              <a
                href={REPOSITORY3}
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
            imgAlt="Todo"
            imgSrc={p4}
          >
            <h5 className="flex justify-start text-2xl font-bold tracking-tight text-white">
              Todo App
            </h5>
            <p className="flex justify-start font-normal  text-white">
              Email: yoon@gmail.com
            </p>
            <p className="flex justify-start font-normal  text-white">
              Password: 123
            </p>
            <div className="flex gap-x-2">
              <a
                href={PROJECT4}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center   rounded-2xl h-[40px] w-[80px] bg-MainBG"
              >
                <p className="flex justify-start text-sm text-white">
                  Live Demo
                </p>
              </a>

              <a
                href={REPOSITORY4}
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
            className=" w-full lg:w-auto bg-second mb-[20px] p-[10px] lg:p-[20px] border-none flex justify-center items-center"
            imgAlt="TaskManagement"
          >
            {" "}
            <img alt="Bonnie" src={p5} className="h-[100%] w-[80vh]" />
            <h5 className="flex justify-start text-2xl font-bold tracking-tight text-white">
              Task Management
            </h5>
            <div className="flex gap-x-2">
              <a
                href={REPOSITORY5}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center   rounded-2xl h-[40px] w-[80px] bg-MainBG"
              >
                <p className="flex justify-start text-sm text-white">
                  Download
                </p>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Projects;
