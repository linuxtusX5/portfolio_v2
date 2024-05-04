import React from "react";
import { Container, Grid } from "@mui/material";
import "../styles/styles.css";
import Profile from "./Profile";
import SocialMedia from "./SocialMedia";
import Navigations from "./Navigations";
import Home from "./Home";

function HomeHeader() {
  return (
    <Container maxWidth="xl" className="container">
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Profile />
          <Grid item>
            <SocialMedia />
          </Grid>
        </Grid>
        <Grid item xs={7.8}>
          <Home />
        </Grid>
        <Grid item xs={1.2}>
          <Navigations />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomeHeader;
