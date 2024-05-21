import SectionHeading from "@/components/SectionHeading";
import { projectsData } from "@/libs/data";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <section className="text-color-primary">
      <SectionHeading HeadText={"Projects"} />
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

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
  return (
    <section className="bg-color-gray-100 max-w-[42rem] border border-color-darker/5 overflow-hidden sm:pr-8 text-color-darker relative sm:h-[22rem]">
      <div className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-color-darker/[0.8] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-color-primary rounded-full">
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={imageUrl}
        alt={title}
        quality={95}
        className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl"
      />
    </section>
  );
};

export default Projects;
