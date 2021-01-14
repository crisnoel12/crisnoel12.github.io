import { Typography, List, ListItem, Divider, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  position_company: {
    fontFamily: 'Montserrat !important',
    fontWeight: 500,
    marginTop: theme.spacing(2)
  },
  listRoot: {
    listStyle: 'circle',
    paddingLeft: 'revert'
  },
  listItemRoot: {
    display: 'list-item'
  }
}));

export default function Experiences({ experiences }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant={"h4"} gutterBottom>Experience</Typography>
      {
        experiences && experiences.map(experience => (
          <React.Fragment>
            <Typography variant="h5" className={classes.position_company}>
              {experience.position} - {experience.company}
            </Typography>
            <List classes={{ root: classes.listRoot }}>
              {experience.responsibilities.map(responsibility => (
                <ListItem className={classes.listItemRoot}>{responsibility}</ListItem>
              ))}
            </List>
            <Divider />
          </React.Fragment>
        ))
      }
    </React.Fragment>
  )
}
