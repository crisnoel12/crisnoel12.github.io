import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
} from "@material-ui/core";
import "../../styles/global.css";
import Navbar from "../Navbar";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Profile from "./Profile";
import {theme} from "../../Config/Theme/Theme";
import darkmodejs from '@assortment/darkmodejs';
import Footer from "../Sections/Footer";
import { getLocalStorageItem, setLocalStorageItem } from '../Utils/index';

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
  const [themeMode, setThemeMode] = useState(MODE.DARK);
  const classes = useStyles();

  const onChange = (activeTheme: MODE, themes) => {
    switch (activeTheme) {
      case MODE.DARK:
        setThemeMode(MODE.DARK);
        setLocalStorageItem("themeMode", MODE.DARK)
        break;
      case MODE.LIGHT:
        setThemeMode(MODE.LIGHT);
        setLocalStorageItem("themeMode", MODE.LIGHT)
        break;
      case MODE.NO_PREF:
        setThemeMode(MODE.LIGHT);
        setLocalStorageItem("themeMode", MODE.LIGHT)
        break;
      case MODE.NO_SUPP:
        setThemeMode(MODE.LIGHT);
        setLocalStorageItem("themeMode", MODE.LIGHT)
        break;
    }
  };

  useEffect(() => {
    const localStorageThemeMode = getLocalStorageItem("themeMode") as MODE;
    if (!localStorageThemeMode) {
      const dmjs = darkmodejs({ onChange });
    
      return () => {
        dmjs.removeListeners();
      }
    } else {
      if (localStorageThemeMode === MODE.DARK) {
        setThemeMode(MODE.DARK)
      } else {
        setThemeMode(MODE.LIGHT)
      }
    }
  }, []);

  const MainContent = () => (
    <Grid item xs={12} md={7} lg={9}>
      <Navbar themeMode={themeMode} changeMode={onChange} />
      <Paper component={Grid} className={classes.mainContent}>
        {props.children}
      </Paper>
      <Footer />
    </Grid>
  )
  return (
    <ThemeProvider theme={theme[themeMode]}>
      <Paper square={true} elevation={0} style={{ height: '100vh'}}>
        <Grid container>
          <Profile themeMode={themeMode} changeMode={onChange} />
          <Grid item xs={12} md={5} lg={3} />
          {MainContent()}
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};

export default MainContainer;
