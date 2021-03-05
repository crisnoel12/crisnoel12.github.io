import { Typography, List, ListItem, ListItemText, Divider, makeStyles, Card } from '@material-ui/core'
import React from 'react'
import {EXPERIENCE} from '../../pages/index';
import HomePageSection from '../Layouts/HomePageSection';

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

interface Props {
  experiences: EXPERIENCE[]
}

export default function Experiences({experiences}: Props) {
  const classes = useStyles();
  return (
    <HomePageSection title={"Experience"}>
      {
        experiences && experiences.map(experience => (
          <Card style={{ padding: '24px', marginBottom: '24px'}}>
            <Typography variant="h5" className={classes.position_company}>
              {experience.position} <Typography variant="inherit" color={"primary"}>@</Typography> {experience.company}
            </Typography>
            <List classes={{ root: classes.listRoot }}>
              {experience.responsibilities.map(responsibility => (
                <ListItem className={classes.listItemRoot}>
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
