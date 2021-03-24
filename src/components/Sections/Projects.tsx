import React from 'react';
import { makeStyles, Button, Card, CardActions, CardContent, CardHeader, Chip, Divider, Grid, Link, Tab, Tabs, Typography } from '@material-ui/core';

import { PROJECT } from '../../Types';
import HomePageSection from '../Layouts/HomePageSection';
import TabPanel from '../Layouts/TabPanel';

const useStyles = makeStyles((theme) => ({
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
  workBtnStyle: {
    borderRadius: 0
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

interface Props {
  workProjects: PROJECT[],
  personalProjects: PROJECT[]
}

export default function Projects({ workProjects, personalProjects }: Props) {
  const classes = useStyles();
  const [projectTab, setProjectTab] = React.useState(PROJECT_TYPE.WORK.VALUE);

  const changeProjectTab = (event, value) => setProjectTab(value);

  const renderProjectType = (projectType) => {
    if (projectType === PROJECT_TYPE.WORK.VALUE) {
      return (
        workProjects && workProjects.length > 0 ? workProjects.map(project => (
          <Grid key={project.id} item xs={12} md={6} lg={4}>
            <Card className={classes.workProjectContainer}>
              <CardHeader
                title={project.title}
                subheader={<Divider />}
              />
              <CardContent>
                <Typography variant="body1" color="textSecondary" component="p">
                  {project.description.description}
                </Typography>
              </CardContent>
              <div className={classes.workEmptyDiv} /> {/* Empty div */}
              <CardActions disableSpacing classes={{ root: classes.workCardAction }}>
                <Divider className={classes.divider} />
                <div className={classes.workTechnologyContainer}>
                  {project.technologies.map(technology => (
                    <Chip key={`${project.id}_${technology}`} label={<Typography variant={"caption"}>{technology}</Typography>} size={"small"} className={classes.technologyChip} />
                  ))}
                </div>
                <Divider className={classes.divider} />
                <Link 
                  href={project.url}
                  target="_blank"
                  rel="noopener"
                >
                  <Button 
                    fullWidth 
                    variant={"contained"} 
                    classes={{ root: classes.workBtnStyle }}
                    color={"primary"}
                  >
                      View
                    </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        )) : <Typography className={classes.noProjectsText}>{`No ${PROJECT_TYPE.WORK.NAME} Projects to Show.`}</Typography>
      )
    } else { // Personal Project
      return (
        personalProjects && personalProjects.length > 0 ? personalProjects.map(project => (
          <Grid key={project.id} item xs={12} md={6} lg={4}>
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
              <Chip key={`${project.id}_${technology}`} label={<Typography variant={"caption"}>{technology}</Typography>} size={"small"} className={classes.technologyChip} />
            ))}
          </Grid>
        )) : <Typography className={classes.noProjectsText}>{`No ${PROJECT_TYPE.PERSONAL.NAME} Projects to Show.`}</Typography>
      )
    }
  }
  return (
    <HomePageSection title={"Projects"}>
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
    </HomePageSection>
  )
}
