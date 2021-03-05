import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { estimatedReadTime } from '.';
import TodayIcon from '@material-ui/icons/Today';
import ScheduleIcon from '@material-ui/icons/Schedule';

const useStyles = makeStyles((theme) => ({
  metaData: {
    display: 'inline-block',
    margin: '10px 0px 10px -2px'
  },
  alignSVGandText: {
    verticalAlign: 'middle',
    display: 'inline-block'
  },
  icon: {
    marginRight: theme.spacing(0.4)
  },
  metaText: {
    marginRight: theme.spacing(2)
  }
}));

export default function BlogPostPreviewMisc({ date, content }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant={"caption"} className={classes.metaData}>
        <TodayIcon 
          htmlColor={"yellowgreen"} 
          className={`${classes.alignSVGandText} ${classes.icon}`} 
        />
        <Typography 
          variant={"caption"} 
          color={"textSecondary"} 
          className={`${classes.alignSVGandText} ${classes.metaText}`}
        >
          {date}
        </Typography>
      </Typography>
      <Typography variant={"caption"} className={classes.metaData}>
        <ScheduleIcon 
          htmlColor={"orange"} 
          className={`${classes.alignSVGandText} ${classes.icon}`} 
        />
        <Typography 
          variant={"caption"} 
          color={"textSecondary"} 
          className={`${classes.alignSVGandText} ${classes.metaText}`}
        >
          {estimatedReadTime(content)}
        </Typography>
      </Typography>
    </React.Fragment>
  )
}
