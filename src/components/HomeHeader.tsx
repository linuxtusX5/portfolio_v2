import React from "react";
import { Grid } from "@mui/material";
import "../styles/HomeHeader.css";

function HomeHeader() {
  return (
    <div className="container">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div className="side1">sample1</div>
        </Grid>
        <Grid item xs={8}>
          <div className="side2">sample2</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeHeader;
