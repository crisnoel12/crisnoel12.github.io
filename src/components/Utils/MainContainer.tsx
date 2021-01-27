import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper
} from "@material-ui/core";
import "../../styles/global.css";
import Navbar from "./Navbar";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Profile from "../Profile";
import {theme} from "../../Config/Theme/Theme";
import darkmodejs from '@assortment/darkmodejs';

export enum MODE {
  DARK = 'dark',
  LIGHT = 'light',
  NO_PREF = 'no-preference',
  NO_SUPP = 'no-support',
}

const useStyles = makeStyles((theme) => ({
  mainContent: {
    padding: theme.spacing(4),
    borderRadius: 0
  }
}));

const MainContainer = (props) => {
  const [themeMode, setThemeMode] = useState(MODE.LIGHT);
  const classes = useStyles();

  const onChange = (activeTheme: MODE, themes) => {
    switch (activeTheme) {
      case MODE.DARK:
        setThemeMode(MODE.DARK);
        console.log('darkmode enabled');
        break;
      case MODE.LIGHT:
        setThemeMode(MODE.LIGHT);
        console.log('lightmode enabled');
        break;
      case MODE.NO_PREF:
        setThemeMode(MODE.LIGHT);
        console.log('no preference enabled');
        break;
      case MODE.NO_SUPP:
        setThemeMode(MODE.LIGHT);
        console.log('no support sorry');
        break;
    }
  };

  useEffect(() => {
    const dmjs = darkmodejs({ onChange });
    
    return () => {
      dmjs.removeListeners();
    }
  }, []);

  const MainContent = () => (
    <Grid item xs={12} sm={9}>
      <Navbar themeMode={themeMode} changeMode={onChange}/>
      <Paper component={Grid} className={classes.mainContent}>
        {props.children}
      </Paper>
    </Grid>
  )
  return (
    <ThemeProvider theme={theme[themeMode]}>
      <Grid container>
        <Profile />
        <Grid item xs={12} sm={3} />
        {MainContent()}
      </Grid>
    </ThemeProvider>
  );
};

export default MainContainer;
