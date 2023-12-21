import React from "react";
import { EXPERIENCE } from "../../Types";
import HomePageSection from "../HomePageSection";
import Divider from "../Divider";

interface Props {
  experiences: EXPERIENCE[];
}

const Experience: React.FC<Props> = ({ experiences }) => {
  return (
    <HomePageSection title={"experience"}>
      {experiences.map((experience, i, row) => {
        const lastItem = i + 1 === row.length;
        return (
          <div key={experience.id} className={`${lastItem ? "" : "mb-20"}`}>
            <div className="inline-flex">
              <img
                src={experience.logo.file.url}
                className={"h-16 w-16 mr-5"}
              />
              <div>
                <h5 className="font-bold text-xl lg:text-2xl">
                  {experience.position}
                </h5>
                <h6 className="font-semibold text-neutral-500 lg:text-lg">
                  {experience.company}
                </h6>
              </div>
            </div>
            <Divider />
            <ul className="pl-10">
              {experience.responsibilities.map((responsibility, i, row) => {
                const lastItem = i + 1 === row.length;
                return (
                  <li
                    key={`${experience.id}_${responsibility}`}
                    className={`list-disc mt-5 ${
                      lastItem ? "" : "mb-5"
                    } lg:text-lg`}
                  >
                    {responsibility}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </HomePageSection>
  );
};

export default Experience;
