"use client";

import SectionHeading from "@/components/SectionHeading";
import { projectsData } from "@/libs/data";
import React, { useEffect } from "react";
import Project from "@/components/Project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.5
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView]);

  return (
    <section id="projects" ref={ref} className="text-color-primary mb-28">
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
