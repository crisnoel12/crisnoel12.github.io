import React, { useState } from "react";
import {
  createMuiTheme,
  Grid,
  Paper
} from "@material-ui/core";
import "../../styles/global.css";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Profile from "../Profile";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    padding: theme.spacing(4)
  }
}));

const MainContainer = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const classes = useStyles();

  const MainContent = () => (
    <Grid item xs={12} sm={9}>
      <Navbar/>
      <Paper component={Grid} className={classes.mainContent}>
        {props.children}
      </Paper>
    </Grid>
  )
  return (
    <Grid container>
      <Profile />
      <Grid item xs={12} sm={3} />
      {MainContent()}
    </Grid>
  );
};

export default MainContainer;
