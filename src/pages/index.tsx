import { Button, Card, CardActions, CardContent, CardHeader, Chip, Divider, Grid, Link, List, ListItem, makeStyles, Tab, Tabs, Typography } from "@material-ui/core";
import { graphql } from 'gatsby';
import * as React from "react";
import { sortByASC, sortByDESC } from "../components/Utils/index";
import MainContainer from "../components/Utils/MainContainer";
import TabPanel from '../components/Utils/TabPanel';

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
  },
  projectTabStyle: {
    marginBottom: theme.spacing(4)
  },
  workProjectContainer: {
    height: '100%',
    position: 'relative'
  },
  personalProjectContainer: {
    display: 'block',
    position: 'relative',
    marginBottom: theme.spacing(1),
  },
  personalProjectBG: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    textAlign: 'center',
    background: 'rgba(178, 34, 34, 0.9)',
    color: 'white',
    opacity: 0,
    '-webkit-transition': 'all ease 0.5s',
    '-moz-transition': 'all ease 0.5s',
    transition: 'all ease 0.5s',
    '&:hover': {
      opacity: 1
    }
  },
  personalProjectTxtContainer: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -40%)',
    width: '90%',
  },
  noProjectsText: {
    marginTop: theme.spacing(5)
  },
  workEmptyDiv: {
    height: theme.spacing(14)
  },
  workCardAction: {
    display: 'block',
    alignItems: 'unset',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 0
  },
  workTechnologyContainer: {
    padding: `${theme.spacing(0)}px ${theme.spacing(1)}px`
  },
  workLinkStyle: {
    textDecoration: 'none'
  },
  workBtnStyle: {
    borderRadius: 'none'
  },
  technologyChip: {
    marginRight: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5)
  },
  divider: {
    marginBottom: theme.spacing(1)
  },
  tabPanelStyle: {
    justifyContent: 'center'
  }
}));

interface EXPERIENCE {
  id: String,
  contentful_id: String,
  position: String,
  company: String,
  responsibilities: String[]
}

interface PROJECT {
  id: String,
  contentful_id: String,
  title: String,
  description: {
    description: String
  },
  technologies: String[],
  personalProject: Boolean,
  url: String,
  createdAt: String,
  image: {
    file: {
      url: String
    }
  }
}

const PROJECT_TYPE = {
  WORK: {
    NAME: "Work",
    VALUE: 0
  },
  PERSONAL: {
    NAME: "Personal",
    VALUE: 1
  }
}

const IndexPage = ({data}) => {
  const classes = useStyles();
  const experiences: EXPERIENCE[] = sortByASC(data.allContentfulExperience.nodes);
  const workProjects: PROJECT[] = sortByDESC(data.allContentfulProjects.nodes.filter(project => project.personalProject === false));
  const personalProjects: PROJECT[] = sortByDESC(data.allContentfulProjects.nodes.filter(project => project.personalProject === true));

  const [projectTab, setProjectTab] = React.useState(PROJECT_TYPE.WORK.VALUE);

  const changeProjectTab = (event, value) => setProjectTab(value);

  const renderProjectType = (projectType) => {
    if (projectType === PROJECT_TYPE.WORK.VALUE) {
      return (
        workProjects && workProjects.length > 0 ? workProjects.map(project => (
          <Grid item xs={2} sm={4}>
            <Card className={classes.workProjectContainer}>
              <CardHeader
                title={project.title}
                subheader={<Divider />}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {project.description.description}
                </Typography>
              </CardContent>
              <div className={classes.workEmptyDiv} /> {/* Empty div */}
              <CardActions disableSpacing classes={{ root: classes.workCardAction }}>
                <Divider className={classes.divider} />
                <div className={classes.workTechnologyContainer}>
                  {project.technologies.map(technology => (
                    <Chip label={<Typography variant={"caption"}>{technology}</Typography>} size={"small"} className={classes.technologyChip} />
                  ))}
                </div>
                <Divider className={classes.divider} />
                <Link 
                  href={project.url} 
                  className={classes.workLinkStyle}
                  target="_blank"
                  rel="noopener"
                >
                  <Button fullWidth variant={"contained"} className={classes.workBtnStyle}>View</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        )) : <Typography className={classes.noProjectsText}>{`No ${PROJECT_TYPE.WORK.NAME} Projects to Show.`}</Typography>
      )
    } else { // Personal Project
      return (
        personalProjects && personalProjects.length > 0 ? personalProjects.map(project => (
          <Grid item xs={2} sm={4}>
            <Link 
              href={project.url} 
              classes={{ root: classes.personalProjectContainer}}
              target="_blank"
              rel="noopener"
            >
              <img src={`https:${project.image.file.url}`} width="100%" />
              <div className={classes.personalProjectBG}>
                <div className={classes.personalProjectTxtContainer}>
                  <Typography variant={"h6"}>{project.title}</Typography>
                  <Typography variant={"body1"}>{project.description.description}</Typography>
                </div>
              </div>
            </Link>
            {project.technologies.map(technology => (
              <Chip label={<Typography variant={"caption"}>{technology}</Typography>} size={"small"} className={classes.technologyChip} />
            ))}
          </Grid>
        )) : <Typography className={classes.noProjectsText}>{`No ${PROJECT_TYPE.PERSONAL.NAME} Projects to Show.`}</Typography>
      )
    }
  }

  return (
    <MainContainer>
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
      <Typography variant={"h4"} gutterBottom>Projects</Typography>
        <Tabs
          value={projectTab}
          onChange={changeProjectTab}
          indicatorColor="primary"
          textColor="primary"
          centered
          className={classes.projectTabStyle}
        >
          <Tab label={PROJECT_TYPE.WORK.NAME} />
          <Tab label={PROJECT_TYPE.PERSONAL.NAME} />
        </Tabs>
        <TabPanel value={projectTab} index={0} className={classes.tabPanelStyle}>
          {renderProjectType(PROJECT_TYPE.WORK.VALUE)}
        </TabPanel>
        <TabPanel value={projectTab} index={1} className={classes.tabPanelStyle}>
          {renderProjectType(PROJECT_TYPE.PERSONAL.VALUE)}
        </TabPanel>
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
        createdAt
      }
    }
    allContentfulProjects {
      nodes {
        id
        contentful_id
        title
        description {
          description
        }
        technologies
        personalProject
        url
        createdAt
        image {
          file {
            url
          }
        }
      }
    }
  }
`
