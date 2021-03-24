import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1)
  }
}));
export default function Excerpt({ excerpt }) {
  const classes = useStyles();
  return (
    <Typography variant={"body1"} className={classes.root}>
      {excerpt.length > 230 ? `${excerpt.slice(0, 230)}...` : excerpt}
    </Typography>
  )
}
