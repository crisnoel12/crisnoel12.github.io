import React from "react";
import { PROJECT } from "../../Types";
import HomePageSection from "../HomePageSection";
import PersonalProject from "../PersonalProject";
import WorkProject from "../WorkProject";

enum ProjectTypeValue {
  zero = 0,
  one = 1,
}
interface ProjectType {
  [key: string]: {
    name: string;
    value: ProjectTypeValue;
  };
}

const projectType: ProjectType = {
  personal: {
    name: "Personal",
    value: 0,
  },
  work: {
    name: "Work",
    value: 1,
  },
};

interface Props {
  personalProjects: PROJECT[];
  workProjects: PROJECT[];
}

const Projects: React.FC<Props> = ({ personalProjects, workProjects }) => {
  const [projectTab, setProjectTab] = React.useState(
    projectType.personal.value
  );

  const changeProjectTab = (value: ProjectTypeValue) => setProjectTab(value);

  const renderProjectType = () => {
    if (projectTab === projectType.personal.value) {
      if (personalProjects.length > 0) {
        return personalProjects.map((project) => (
          <PersonalProject key={project.id} project={project} />
        ));
      } else {
        return <p>No Projects to show.</p>;
      }
    } else {
      if (workProjects.length > 0) {
        return workProjects.map((project) => (
          <WorkProject key={project.id} project={project} />
        ));
      } else {
        return <p>No Projects to show.</p>;
      }
    }
  };

  return (
    <HomePageSection title={"projects"}>
      <div className="grid grid-cols-2 justify-center">
        {Object.keys(projectType).map((key) => (
          <button
            key={projectType[key].value}
            className={
              projectTab === projectType[key].value
                ? "font-medium text-red-800 border-b-2 border-red-800 mb-5"
                : "mb-5"
            }
            onClick={() => changeProjectTab(projectType[key].value)}
          >
            {projectType[key].name}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {renderProjectType()}
      </div>
    </HomePageSection>
  );
};

export default Projects;
