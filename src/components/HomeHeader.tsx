import { useState, useEffect } from "react";
import Profile from "./Profile";
import SocialMedia from "./SocialMedia";
import Navigations from "./Navigations";
import { Outlet } from "react-router-dom";
import BasicSpeedDial from "./MobileNavigation";

function HomeHeader() {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
    window.innerWidth < 768
  );
  useEffect(() =>
    window.addEventListener("resize", () =>
      setIsSmallScreen(window.innerWidth < 768)
    )
  );

  return (
    <div className="grid p-[10px] gap-5 md:grid-cols-2 lg:grid-cols-12 lg:grid-flow-col lg:gap-3 lg:grid-rows-1">
      <div className="md:col-start-1 md:col-span-1 lg:col-span-3 lg:col-start-1 px-5 lg:h-[400px] bg-second rounded-2xl h-[400px]">
        <Profile />
      </div>

      <div className="md:col-span-2 md:row-start-2 md:col-start-1 lg:col-span-8 lg:col-start-4 lg:row-start-1 bg-second rounded-2xl h-[100vh] px-5">
        <Outlet />
      </div>

      <div className="md:col-start-2 md:col-span-1 md:row-start-1 lg:col-start-1 lg:col-span-3 lg:row-span-1 lg:mt-[-38vh] lg:h-[36vh] bg-second rounded-2xl md:h-[40vh]">
        <SocialMedia />
      </div>
      {isSmallScreen ? (
        <BasicSpeedDial />
      ) : (
        <div className="hidden md:block md:col-start-2 md:row-start-1 md:mt-[44vh] lg:block lg:col-start-12 lg:col-span-1 bg-second md:w-full md:h-[20vh] md:px-4 rounded-2xl h-[60vh] lg:w-full lg:h-[70vh] lg:mt-[15vh] lg:py-[20px]">
          <Navigations />
        </div>
      )}
    </div>
  );
}

export default HomeHeader;
