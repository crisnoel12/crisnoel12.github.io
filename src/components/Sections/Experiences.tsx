import React from 'react';
import { makeStyles, Card, List, ListItem, ListItemText, Typography, Divider } from '@material-ui/core';

import { EXPERIENCE } from '../../Types';
import HomePageSection from '../Layouts/HomePageSection';

const useStyles = makeStyles((theme) => ({
  position_company: {
    fontFamily: 'Montserrat !important',
  },
  listRoot: {
    listStyle: 'circle',
    paddingLeft: 'revert'
  },
  listItemRoot: {
    display: 'list-item'
  },
  card: {
    padding: theme.spacing(3), 
    marginBottom: theme.spacing(3)
  }
}));

interface Props {
  experiences: EXPERIENCE[]
}

export default function Experiences({ experiences }: Props) {
  const classes = useStyles();
  return (
    <HomePageSection title={"Experience"}>
      {
        experiences && experiences.map(experience => (
          <Card key={experience.id} className={classes.card}>
            <Typography variant="h6" className={classes.position_company}>
              {experience.position}
            </Typography>
            <Typography variant="subtitle1" className={classes.position_company}>
              <Typography variant="inherit" color={"primary"}>@</Typography> {experience.company}
            </Typography>
            <Divider />
            <List classes={{ root: classes.listRoot }}>
              {experience.responsibilities.map(responsibility => (
                <ListItem key={`${experience.id}_${responsibility}`} className={classes.listItemRoot}>
                  <ListItemText>{responsibility}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Card>
        ))
      }
    </HomePageSection>
  )
}
