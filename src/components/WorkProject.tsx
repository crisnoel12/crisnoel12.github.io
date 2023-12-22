import React from "react";
import { PROJECT } from "../Types";
import Divider from "./Divider";
import Button from "./Button";

interface Props {
  project: PROJECT;
}
export default function WorkProject(props: Props) {
  const { project } = props;
  return (
    <div
      key={project.id}
      className={
        "flex flex-col border-solid border-2 border-neutral-300 dark:border-neutral-600 rounded p-6"
      }
    >
      <div>
        <h6 className={"permanentMarker text-lg mb-2"}>{project.title}</h6>
        <Divider mt={2} mb={2} />
      </div>
      <p className={"mb-8"}>{project.description.description}</p>
      <Button href={project.url} target={"_blank"} styles={"mt-auto"}>
        VIEW
      </Button>
    </div>
  );
}
