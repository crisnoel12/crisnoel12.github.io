import { AppBar, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import GatsbyImage from "../../images/Gatsby_Monogram.png";

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
  const GatsbyBadge = () => (
    <React.Fragment>
      <span>
        <img src={GatsbyImage} alt={"Gatsby.js Monogram image"} className={classes.gatsbyImg} width={16} height={16} />
      </span>
      &nbsp;Gatsby.js
    </React.Fragment>
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
            {year} <Copy /> CRIS N. CANCINO | Coded with <Heart /> in <GatsbyBadge />
        </Typography>
      </AppBar>
    </Paper>
  )
}
