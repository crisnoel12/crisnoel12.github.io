import { makeStyles } from "@material-ui/core";
import { graphql } from 'gatsby';
import * as React from "react";
import Experiences from "../components/Sections/Experiences";
import { sortByASC, sortByDESC } from "../components/Utils/index";
import MainContainer from "../components/Layouts/MainContainer";
import Projects from "../components/Sections/Projects";
import Contact from "../components/Sections/Contact";
import BlogSection from "../components/Sections/BlogSection";
import {Helmet} from "react-helmet";

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cris Noel | Software Engineer</title>
        <link rel="canonical" href={process.env.DOMAIN} />
      </Helmet>
      <Experiences experiences={experiences} />
      <Projects workProjects={workProjects} personalProjects={personalProjects} />
      <BlogSection posts={data.allContentfulPost.nodes} />
      <Contact />
    </MainContainer>
  )
}

export default IndexPage

export const query = graphql`
  query Data {
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
    allContentfulPost(limit: 3, sort: {fields: date, order: DESC}) {
      nodes {
        id
        contentful_id
        date(formatString: "MMMM Do, YYYY")
        title
        slug
        image {
          file {
            url
          }
        }
        content {
          raw
        }
      }
    }
  }
`
