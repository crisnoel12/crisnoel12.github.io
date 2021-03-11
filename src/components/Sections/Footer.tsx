import { AppBar, Paper, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import GatsbyLogo from "../../images/Gatsby_Logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: theme.spacing(3),
    backgroundColor: `${theme.palette.type === "light" ? 'whitesmoke' : 'transparent'}`,
    borderTop: "3px solid black",
    color: `${theme.palette.type === "light" ? 'black' : 'white'}`,
    borderRadius: '0px',
  },
  heart : {
    color: theme.palette.primary.main
  },
  gatsbyImg: {
    verticalAlign: 'middle'
  },
  bold: {
    fontWeight: 'bold'
  }
}));

export default function Footer() {
  const classes = useStyles();
  const d = new Date();
  const year = d.getFullYear();

  const Copy = () => <span>&copy;</span>;
  const Heart = () => <span className={classes.heart}>&hearts;</span>;
  const GatsbyLink = () => (
    <Link href={"https://www.gatsbyjs.com/"}>
      <span>
        <img src={GatsbyLogo} alt={"Gatsby.js Logo"} className={classes.gatsbyImg} height={24}/>
      </span>
    </Link>
  );

  return (
    <Paper square>
      <AppBar 
        position={"relative"} 
        color={"secondary"}
        className={classes.root}
      >
        <Typography 
          variant={"caption"}
          className={classes.bold}
          >
            {year} <Copy /> CRIS N. CANCINO | Coded with <Heart /> in <GatsbyLink />
        </Typography>
      </AppBar>
    </Paper>
  )
}
