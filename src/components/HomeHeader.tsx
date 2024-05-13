import Profile from "./Profile";
import SocialMedia from "./SocialMedia";
import Navigations from "./Navigations";
import Home from "./Home";

function HomeHeader() {
  return (
    <div className="grid sm:grid-cols-12 sm:gap-3 gap-5 sm:grid-flow-col sm:grid-rows-3 p-[10px] grid-rows-1">
      <div className="sm:col-start-1 sm:col-span-3 sm:row-span-3 row-start-1">
        <Profile />
      </div>

      <div className="sm:col-span-8 sm:row-span-4 row-start-2 col-start-1 row-span-4">
        <Home />
      </div>

      <div className="sm:col-start-1 sm:col-span-3 sm:row-span-1 col-start-1 row-start-6 row-span-1 ">
        <SocialMedia />
      </div>

      <div className="sm:col-span-1 sm:row-span-4 sm:block hidden">
        <Navigations />
      </div>
    </div>
  );
}

export default HomeHeader;
