"use client";

import { projectsData } from "@/libs/data";
import React from "react";
import Project from "@/components/Project";
import useSectionView from "@/libs/hooks";

const Projects = () => {
  const { ref } = useSectionView("Projects", 0.5);
  return (
    <section id="projects" ref={ref} className="text-color-primary mb-28 scroll-mt-[12rem]">
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
