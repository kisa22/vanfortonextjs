"use client";

import SectionHeading from "@/components/SectionHeading";
import { skillsData } from "@/libs/data";
import useSectionView from "@/libs/hooks";
import { motion } from "framer-motion";
import React from "react";

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 30
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      delay: 0.1 * index,
      type: "spring",
      stiffness: 100
    }
  })
};

const Skills = () => {
  const { ref } = useSectionView("Skills");
  return (
    <motion.section
      id="skills"
      ref={ref}
      className="mb-28 max-w[53rem] scroll-mt-28 text-center sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 2, type: "spring", stiffness: 100 }}>
      <SectionHeading>My Skills</SectionHeading>
      <ul className="text-color-darker flex flex-wrap justify-center gap-2 text-lg max-w-[53rem]">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            custom={index}
            className="bg-color-primary border-color-darker/[0.1] rounded-xl px-5 py-3"
            key={index}>
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Skills;
