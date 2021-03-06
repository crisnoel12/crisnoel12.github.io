import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import HeaderLine from '../Utils/HeaderLine';

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: `${theme.spacing(5)}px 0`
  }
}));

export default function HomePageSection(props) {
  const { title, divider } = props;
  const classes = useStyles();
  return (
    <section id={title}>
      <Typography variant={"h4"} gutterBottom>{title}</Typography>
      <HeaderLine />
      {props.children}
      { divider === undefined || divider ? (
          <Divider className={classes.divider} />
        ) : (
          null
        ) 
      }
    </section>
  )
}
