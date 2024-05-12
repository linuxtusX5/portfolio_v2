import React from "react";
import { Container, Grid } from "@mui/material";
import Profile from "./Profile";
import SocialMedia from "./SocialMedia";
import Navigations from "./Navigations";
import Home from "./Home";

function HomeHeader() {
  return (
    <div className="grid grid-cols-12 gap-3 p-[10px]">
      <div className="col-start-1 col-span-3">
        <Profile />
        <div className="">
          <SocialMedia />
        </div>
      </div>
      <div className="col-start-4 col-span-8">
        <Home />
      </div>
      <div className="col-start-12">
        <Navigations />
      </div>
    </div>
  );
}

export default HomeHeader;
