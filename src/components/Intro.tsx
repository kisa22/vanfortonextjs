"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section>
      <div className="flex text-center justify-center items-center">
        <motion.span
          className="absolute mx-auto text-color-primary w-[32rem] text-4xl blur-xl font-extrabold box-content bg-clip-text text-transparent text-center select-none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}>
          Hello, I'm Van 👋
        </motion.span>
        <motion.h1
          className="relative top-0 text-color-primary text-4xl font-extrabold text-transparent"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}>
          Hello, I'm Van 👋
        </motion.h1>
      </div>
      <div className="flex items-center justify-center">
        <motion.p
          className="text-wrap w-[42rem] text-xl text-color-darker tracking-widest"
          initial={{ x: 1, opacity: 0 }}
          animate={{ x: 30, opacity: 1 }}
          transition={{ type: "spring", duration: 0.3, stiffness: 100 }}>
          I'm a <span className="font-bold">Web Developer</span>. I love the process of creating
          stunning and well-functioning websites. From concept to launch, I strive to deliver
          engaging online experiences for users. Let's explore the world of the web together through
          code and creativity!
        </motion.p>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.3, stiffness: 100 }}>
          <Image
            src="https://i.postimg.cc/TwyLGRFs/ivan.png"
            alt="my pict"
            width="720"
            height="720"
            quality="95"
            priority={true}
            className="h-64 w-64"
          />

          <span className="text-4xl"></span>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
