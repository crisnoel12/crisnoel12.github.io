import React from "react";
import { PROJECT } from "../../Types";
import HomePageSection from "../HomePageSection";
import * as projectSectionStyles from "../../styles/Sections/projects.module.css";
import Button from "../Button";
import Divider from "../Divider";

const PROJECT_TYPE = {
  PERSONAL: {
    NAME: "Personal",
    VALUE: 0,
  },
  WORK: {
    NAME: "Work",
    VALUE: 1,
  },
};

interface Props {
  personalProjects: PROJECT[];
  workProjects: PROJECT[];
}

const Projects: React.FC<Props> = ({ personalProjects, workProjects }) => {
  const [projectTab, setProjectTab] = React.useState(
    PROJECT_TYPE.PERSONAL.VALUE
  );

  const changeProjectTab = (value) => setProjectTab(value);

  const renderProjectType = (projectType: any) => {
    if (projectType === PROJECT_TYPE.PERSONAL.VALUE) {
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {personalProjects && personalProjects.length > 0 ? (
            personalProjects.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                className="block relative"
              >
                <img
                  src={`https:${project.image.file.url}`}
                  width="100%"
                  className={"h-full"}
                />
                <div className={projectSectionStyles.personalProjectBG}>
                  <div
                    className={projectSectionStyles.personalProjectTxtContainer}
                  >
                    <p className={"permanentMarker text-2xl mb-4"}>
                      {project.title}
                    </p>
                    <p className={"text-sm"}>
                      {project.description.description}
                    </p>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <p>No Projects to show.</p>
          )}
        </div>
      );
    } else {
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {workProjects && workProjects.length > 0 ? (
            workProjects.map((project) => (
              <div
                key={project.id}
                className={
                  "flex flex-col border-solid border-2 border-neutral-300 dark:border-neutral-600 rounded p-8"
                }
              >
                <div>
                  <h6 className={"permanentMarker text-lg mb-2"}>
                    {project.title}
                  </h6>
                  <Divider mt={2} mb={2} />
                </div>
                <p className={"mb-8"}>{project.description.description}</p>
                <Button href={project.url} target={"_blank"} styles={"mt-auto"}>
                  VIEW
                </Button>
              </div>
            ))
          ) : (
            <p>No Projects to show.</p>
          )}
        </div>
      );
    }
  };

  return (
    <HomePageSection title={"projects"}>
      <div className="grid grid-cols-2 justify-center">
        {Object.keys(PROJECT_TYPE).map((key) => (
          <button
            key={PROJECT_TYPE[key].VALUE}
            className={
              projectTab === PROJECT_TYPE[key].VALUE
                ? "font-medium text-red-800 border-b-2 border-red-800 mb-5"
                : "mb-5"
            }
            onClick={() => changeProjectTab(PROJECT_TYPE[key].VALUE)}
          >
            {PROJECT_TYPE[key].NAME}
          </button>
        ))}
      </div>

      {renderProjectType(projectTab)}
    </HomePageSection>
  );
};

export default Projects;
