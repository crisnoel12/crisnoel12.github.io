import { AppBar, Toolbar, IconButton, Typography, Button, Link, Tooltip } from '@material-ui/core'
import React from 'react'
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { makeStyles } from '@material-ui/core/styles';

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
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton>
          <Tooltip title={"Switch to Dark Mode"}>
            <NightsStayIcon />
          </Tooltip>
        </IconButton>
        <div className={classes.navLink}>
          <Link href="#" className={classes.linkRoot}>Experience</Link>
          <Link href="#" className={classes.linkRoot}>Projects</Link>
          <Link href="#" className={classes.linkRoot}>Skills</Link>
          <Link href="#" className={classes.linkRoot}>Blog</Link>
          <Link href="#" className={classes.linkRoot}>Contact</Link>
        </div>
      </Toolbar>
    </AppBar>
  )
}
