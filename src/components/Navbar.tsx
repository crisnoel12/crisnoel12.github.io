import { AppBar, Toolbar, Typography, Link, Hidden } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ThemeSwitch from './ThemeSwitch';

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
    textAlign: 'center',
    [theme.breakpoints.up("md")]: {
      textAlign: 'right'
    },
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
    <AppBar position="sticky" className={classes.appBarRoot}>
      <Toolbar>
        <Hidden smDown>
          <ThemeSwitch themeMode={themeMode} handleChangeMode={changeMode} />
        </Hidden>
        <Typography className={classes.navLink}>
          <Link href="/#Experience" className={classes.linkRoot}>Experience</Link>
          <Link href="/#Projects" className={classes.linkRoot}>Projects</Link>
          <Link href="/#Blog" className={classes.linkRoot}>Blog</Link>
          <Link href="/#Contact" className={classes.linkRoot}>Contact</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
