"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import useSectionView from "@/libs/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

const Intro = () => {
  const { ref } = useSectionView("Home", 0.5);
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section ref={ref} id="home" className="scroll-mt-28 mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex justify-center items-center mb-8">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.3, stiffness: 100 }}>
          <Image
            src="https://i.postimg.cc/pVJR0m0L/ivan.jpg"
            alt="my pict"
            width="1080"
            height="1080"
            quality="95"
            priority={true}
            className="h-[7rem] w-[7rem] rounded-full bg-color-ascent  border-[0.35rem]"
          />
        </motion.div>
      </div>
      <div className="flex text-center justify-center items-center mb-6">
        <motion.span
          className="absolute mx-auto text-color-primary w-[32rem] text-4xl blur-xl font-extrabold box-content bg-clip-text text-transparent text-center select-none"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.3, delay: 0.1 }}>
          Hello, I'm Van 👋
        </motion.span>
        <motion.h1
          className="relative top-0 text-color-primary text-4xl font-extrabold text-transparent drop-shadow-glow"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.3, delay: 0.1 }}>
          Hello, I'm Van 👋
        </motion.h1>
      </div>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium my-2"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
          duration: 0.3,
          type: "spring",
          stiffness: 100
        }}>
        <div className="flex flex-row gap-2">
          <a
            href="https://www.linkedin.com/in/van29/"
            target="_blank"
            className="bg-color-dark text-color-primary px-4 py-4 flex items-center gap-2 rounded-full hover:scale-105 active:scale-105 transition">
            <BsLinkedin width={28} color="white" />
          </a>
          <a
            href="https://github.com/kisa22"
            target="_blank"
            className="bg-color-dark text-color-primary px-4 py-4 flex items-center gap-2 rounded-full hover:scale-105 active:scale-105 transition">
            <BsGithub width={28} color="white" />
          </a>
        </div>
        <Link
          href="#contact"
          className="group bg-color-dark text-color-primary px-7 py-3 flex items-center gap-2 rounded-full hover:scale-105 active:scale-105 transition">
          Contact Me{" "}
          <BsArrowRight
            className="bold-icon group-hover:translate-x-1 transition"
            width={22}
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          />
        </Link>
      </motion.div>
      <div className="flex items-center justify-center flex-col gap-2">
        <motion.p
          className="text-wrap !leading-[1.5] text-2xl text-color-primary tracking-widest px-4"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.5, stiffness: 100, delay: 0.3 }}>
          I'm a <span className="font-bold">Web Developer</span>. I love the process of creating
          stunning and well-functioning websites. From concept to launch, I strive to deliver
          engaging online experiences for users. Let's explore the world of the web together through
          code and creativity!
        </motion.p>
      </div>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium mt-4"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.3,
          type: "spring",
          stiffness: 100
        }}>
        <a
          download
          href="/CV.pdf"
          className="bg-color-primary text-color-darker px-5 py-3 flex items-center gap-2 rounded-full hover:scale-105 active:scale-105 transition">
          Download CV <HiDownload width={22} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
