import * as React from "react";
import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
import { sortByASC, sortByDESC } from "../Utils/index";
import { EXPERIENCE, POST, PROJECT } from "../Types";
import MainContainer from "../components/MainContainer";
import Hero from "../components/Hero";
import About from "../components/Sections/About";
import Experience from "../components/Sections/Experience";
import Projects from "../components/Sections/Projects";
import BlogSection from "../components/Sections/BlogSection";
import Contact from "../components/Sections/Contact";
import Project from "../Types/Project";

interface Props extends PageProps {
  data: {
    allContentfulExperience: {
      nodes: EXPERIENCE[];
    };
    allContentfulProjects: {
      nodes: PROJECT[];
    };
    allContentfulPost: {
      nodes: POST[];
    };
  };
}

const IndexPage: React.FC<Props> = ({
  data: { allContentfulExperience, allContentfulPost, allContentfulProjects },
}) => {
  const experiences: EXPERIENCE[] = sortByASC(allContentfulExperience.nodes);
  const workProjects: PROJECT[] = sortByDESC(
    allContentfulProjects.nodes.filter(
      (project: Project) => project.personalProject === false
    )
  );
  const personalProjects: PROJECT[] = sortByDESC(
    allContentfulProjects.nodes.filter(
      (project: Project) => project.personalProject === true
    )
  );
  const posts: POST[] = allContentfulPost.nodes;

  return (
    <MainContainer
      title={`Cris Noel | Web Developer`}
      href={`${process.env.DOMAIN}`}
    >
      <Hero />
      <About />
      <Experience experiences={experiences} />
      <Projects
        personalProjects={personalProjects}
        workProjects={workProjects}
      />
      <BlogSection posts={posts} />
      <Contact />
    </MainContainer>
  );
};

export default IndexPage;

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
        logo {
          file {
            url
          }
        }
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
    allContentfulPost(limit: 3, sort: { date: DESC }) {
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
`;
