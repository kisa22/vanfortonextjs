"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useEffect } from "react";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.75
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView]);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[42rem] text-center leading-8 text-color-primary scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 2, type: "spring", stiffness: 100 }}
      id="about">
      <SectionHeading>About</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in <span className="font-medium">Informatic Manajement</span>
        , I decided to pursue my passion for programming. I enrolled in a coding bootcamp and
        learned <span className="font-medium">web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the problem-solving
        aspect. I <span className="underline">love</span> the feeling of finally figuring out a
        solution to a problem. My core stack is{" "}
        <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>. I am also
        familiar with TypeScript and Prisma. I am always looking to learn new technologies.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing video games, watching
        movies, and playing with my cat. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently learning about{" "}
        <span className="font-medium">music and philosophy</span>. I'm also learning how to play the
        piano.
      </p>
    </motion.section>
  );
};

export default About;
