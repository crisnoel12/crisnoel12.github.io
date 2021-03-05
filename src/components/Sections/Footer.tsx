import { AppBar, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: theme.spacing(3),
    backgroundColor: `${theme.palette.type === "light" ? 'whitesmoke' : 'transparent'}`,
    borderTop: "3px solid black",
    color: `${theme.palette.type === "light" ? 'black' : 'white'}`,
    borderRadius: '0px'
  }
}));

export default function Footer() {
  const classes = useStyles();
  const d = new Date();
  const year = d.getFullYear();

  return (
    <Paper style={{ borderRadius: '0'}}>
      <AppBar 
        position={"relative"} 
        color={"secondary"}
        className={classes.root}
      >
        <Typography variant={"caption"}>{year} <span style={{ fontWeight: 'bold'}}>©</span> CRIS N. CANCINO </Typography>
      </AppBar>
    </Paper>
  )
}
