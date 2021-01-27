import { AppBar, Toolbar, IconButton, Typography, Button, Link, Tooltip, Switch } from '@material-ui/core'
import React from 'react'
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { makeStyles } from '@material-ui/core/styles';
import {MODE} from './MainContainer';
import { capitalize } from './index';

const useStyles = makeStyles(theme => ({
  linkRoot: {
    color: theme.palette.primary.contrastText,
    fontSize: theme.spacing(2),
    marginRight: theme.spacing(2),
    '&:hover':{
      textDecoration: 'none'
    }
  },
  navLink: {
    flexGrow: 1, 
    textAlign: 'right'
  },
  switchIconLight: {
    color: "white !important"
  },
  switchIconBlack: {
    color: "black !important"
  },
  switchTrack: {
    backgroundColor: 'black !important'
  }
}));

export default function Navbar(props) {
  const {themeMode, changeMode} = props;
  const classes = useStyles();
  return (
    <AppBar position="sticky" style={{ borderBottom: `3px solid black`}}>
      <Toolbar>
        <Tooltip
          title={`Switch to ${themeMode === MODE.DARK ? capitalize(MODE.LIGHT) : capitalize(MODE.DARK)} Mode`}
        >
          <Switch 
            color={"secondary"}
            icon={<Brightness7Icon />}
            checkedIcon={<Brightness4Icon />} 
            checked={themeMode === MODE.DARK}
            onChange={() => changeMode(themeMode === MODE.DARK ? MODE.LIGHT : MODE.DARK)}
          />
        </Tooltip>
        <Typography className={classes.navLink}>
          <Link href="#" className={classes.linkRoot}>Experience</Link>
          <Link href="#" className={classes.linkRoot}>Projects</Link>
          <Link href="#" className={classes.linkRoot}>Certifications</Link>
          <Link href="#" className={classes.linkRoot}>Blog</Link>
          <Link href="#" className={classes.linkRoot}>Contact</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
