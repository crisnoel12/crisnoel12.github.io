import React from "react";
import { PROJECT } from "../Types";
import * as projectSectionStyles from "../styles/Sections/projects.module.css";

interface Props {
  project: PROJECT;
}
export default function PersonalProject(props: Props) {
  const { project } = props;
  return (
    <a href={project.url} target="_blank" className="block relative">
      <img
        src={`https:${project.image.file.url}`}
        width="100%"
        className={"h-full"}
      />
      <div className={projectSectionStyles.personalProjectBG}>
        <div className={projectSectionStyles.personalProjectTxtContainer}>
          <p className={"permanentMarker text-2xl mb-4"}>{project.title}</p>
          <p className={"text-sm"}>{project.description.description}</p>
        </div>
      </div>
    </a>
  );
}
