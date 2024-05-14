import Profile from "./Profile";
import SocialMedia from "./SocialMedia";
import Navigations from "./Navigations";
import Home from "./Home";

function HomeHeader() {
  return (
    // <div className="grid md:grid-cols-12 md:gap-3 gap-5 md:grid-flow-col p-[10px] md:grid-rows-1 grid-cols-1">
    //   <div className="md:col-start-1 md:col-span-3 md:row-span-3  md:row-start-1">
    //     <Profile />
    //   </div>

    //   <div className="md:col-span-8 md:row-span-4 row-start-2 col-start-1 row-span-4">
    //     <Home />
    //   </div>

    //   <div className="md:col-start-1 md:col-span-3 md:row-span-1 col-start-1 row-start-6 row-span-1 ">
    //     <SocialMedia />
    //   </div>

    //   <div className="md:col-span-1 md:row-span-4 md:block hidden">
    //     <Navigations />
    //   </div>
    // </div>

    <div className="grid p-[10px] gap-5 md:grid-cols-2 lg:grid-cols-12 lg:grid-flow-col lg:gap-3 lg:grid-rows-1">
      <div className="md:col-start-1 md:col-span-1 lg:col-span-3 lg:col-start-1">
        <Profile />
      </div>

      <div className="md:col-span-2 md:row-start-2 md:col-start-1 lg:col-span-8 lg:col-start-4 lg:row-start-1">
        <Home />
      </div>

      <div className="md:col-start-2 md:col-span-1 lg:col-start-1 lg:col-span-3 lg:row-span-1 lg:mt-[-38vh]">
        <SocialMedia />
      </div>

      <div className="hidden lg:block lg:col-start-12 lg:col-span-1">
        <Navigations />
      </div>
    </div>
  );
}

export default HomeHeader;
