import { makeStyles } from "@material-ui/core";
import { graphql } from 'gatsby';
import * as React from "react";
import Experiences from "../components/Experiences";
import { sortByASC, sortByDESC } from "../components/Utils/index";
import MainContainer from "../components/Utils/MainContainer";
import Projects from "../components/Projects";

const useStyles = makeStyles((theme) => ({
}));

export interface EXPERIENCE {
  id: String,
  contentful_id: String,
  position: String,
  company: String,
  responsibilities: String[]
}

export interface PROJECT {
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

const IndexPage = ({data}) => {
  const classes = useStyles();
  const experiences: EXPERIENCE[] = sortByASC(data.allContentfulExperience.nodes);
  const workProjects: PROJECT[] = sortByDESC(data.allContentfulProjects.nodes.filter(project => project.personalProject === false));
  const personalProjects: PROJECT[] = sortByDESC(data.allContentfulProjects.nodes.filter(project => project.personalProject === true));

  return (
    <MainContainer>
      <Experiences experiences={experiences} />
      <Projects workProjects={workProjects} personalProjects={personalProjects} />
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
