import * as React from "react";
import { graphql } from 'gatsby';

import { sortByASC, sortByDESC } from "../components/Utils/index";
import { EXPERIENCE, POST, PROJECT } from "../Types";
import BlogSection from "../components/Sections/BlogSection";
import Contact from "../components/Sections/Contact";
import Experiences from "../components/Sections/Experiences";
import MainContainer from "../components/Layouts/MainContainer";
import PageHelmet from "../components/Utils/PageHelmet";
import Projects from "../components/Sections/Projects";

const IndexPage = ({data}) => {
  const experiences: EXPERIENCE[] = sortByASC(data.allContentfulExperience.nodes);
  const workProjects: PROJECT[] = sortByDESC(data.allContentfulProjects.nodes.filter(project => project.personalProject === false));
  const personalProjects: PROJECT[] = sortByDESC(data.allContentfulProjects.nodes.filter(project => project.personalProject === true));
  const posts: POST[] = data.allContentfulPost.nodes;

  return (
    <MainContainer>
      <PageHelmet 
        title={'Cris Noel | Software Engineer'}
        href={process.env.DOMAIN}
      />
      <Experiences experiences={experiences} />
      <Projects workProjects={workProjects} personalProjects={personalProjects} />
      <BlogSection posts={posts} />
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
