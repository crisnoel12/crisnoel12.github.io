import * as React from "react";
import { Card, CardContent, Divider, Typography, CardActions, Button, List, ListItem, makeStyles } from "@material-ui/core";
import MainContainer from "../components/Utils/MainContainer";
import { graphql } from 'gatsby'

const useStyles = makeStyles((theme) => ({
  position_company: {
    fontFamily: 'Montserrat !important',
    fontWeight: 500
  },
  listRoot: {
    listStyle: 'circle',
    paddingLeft: 'revert'
  },
  listItemRoot: {
    display: 'list-item'
  }
}));

interface EXPERIENCE {
  id: String,
  contentful_id: String,
  position: String,
  company: String,
  responsibilities: String[]
}

const IndexPage = ({data}) => {

  const experiences: EXPERIENCE[] = data.allContentfulExperience.nodes.reverse();
  const classes = useStyles();

  return (
    <MainContainer>
      <Card>
        <CardContent>
          <Typography variant={"h4"} gutterBottom>Experience</Typography>
          {
            experiences.map(experience => (
              <React.Fragment>
                <Typography variant="h5" className={classes.position_company}>
                  {experience.position} - {experience.company}
                </Typography>
                <List classes={{ root: classes.listRoot }}>
                  {
                    experience.responsibilities.map(responsibility => (
                      <ListItem className={classes.listItemRoot}>{responsibility}</ListItem>
                    ))
                  }
                </List>
                <Divider />
              </React.Fragment>
            ))
          }
        </CardContent>
      </Card>
    </MainContainer>
  )
}

export default IndexPage

export const query = graphql`
  query Experience {
    allContentfulExperience {
      nodes {
        id
        contentful_id
        position
        company
        responsibilities
      }
    }
  }
`
