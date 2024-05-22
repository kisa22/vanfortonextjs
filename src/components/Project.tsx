"use client";

import { projectsData } from "@/libs/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
      className="group mb-3 sm:mb-8 last:mb-0">
      <section className=" bg-color-gray-100 max-w-[42rem] border border-color-darker/5 overflow-hidden sm:pr-8 text-color-darker relative sm:h-[22rem] rounded-sm shadow-xl group-even:pl-8 hover:bg-color-gray-200 transition">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
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
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:-right-[initial] group-even:-left-48 group-hover:-translate-x-3 group-hover:translate-y-3 transition group-hover:-rotate-2 group-hover:scale-[1.07]

        group-even:group-hover:translate-x-3 
        group-even:group-hover:translate-y-3 
        group-even:group-hover:rotate-2
        "
        />
      </section>
    </motion.div>
  );
};

export default Project;
