import SectionHeading from "@/components/SectionHeading";
import { projectsData } from "@/libs/data";
import React from "react";
import Project from "@/components/Project";

const Projects = () => {
  return (
    <section className="text-color-primary mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
