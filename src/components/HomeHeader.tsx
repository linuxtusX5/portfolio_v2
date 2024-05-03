import React from "react";
import { Container, Grid } from "@mui/material";
import "../styles/styles.css";
import Profile from "./Profile";
import SocialMedia from "./SocialMedia";

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
        <Grid item xs={7.5}>
          <div className="side2">home</div>
        </Grid>
        <Grid item xs={1.5}>
          <div className="side3">navigation</div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomeHeader;
