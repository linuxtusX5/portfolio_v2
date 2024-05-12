import React from "react";
import { Container, Grid } from "@mui/material";
import Profile from "./Profile";
import SocialMedia from "./SocialMedia";
import Navigations from "./Navigations";
import Home from "./Home";

function HomeHeader() {
  return (
    <div className="grid md:grid-cols-12 gap-3 p-[10px] ">
      <div className="col-start-1 md:col-span-3 col-span-12">
        <Profile />
      </div>
      <div className="md:col-start-1 md:col-span-3 col-span-12 ">
        <SocialMedia />
      </div>

      <div className="md:col-start-4 md:col-span-8 col-span-12">
        <Home />
      </div>

      <div className="md:col-start-12 hidden md:block">
        <Navigations />
      </div>
    </div>
  );
}

export default HomeHeader;
