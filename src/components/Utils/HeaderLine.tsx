import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    height: '5px',
    width: '55px',
    margin: '-5px 0 20px',
    backgroundColor: theme.palette.primary.main,
  }
}));

export default function HeaderLine() {
  const classes = useStyles();
  return <span className={classes.root}></span>
}
