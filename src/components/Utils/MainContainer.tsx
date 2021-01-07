import React, { useState } from "react";
import {
  createMuiTheme,
  Grid,
} from "@material-ui/core";
import "../../styles/global.css";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Profile from "../Profile";

const useStyles = makeStyles((theme) => ({
}));

const MainContainer = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const classes = useStyles();

  const MainContent = () => (
    <Grid item xs={12} sm={9}>
      <Navbar/>
      {props.children}
    </Grid>
  )
  return (
    <Grid container>
      <Profile />
      {MainContent()}
    </Grid>
  );
};

export default MainContainer;
