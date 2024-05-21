"use client";

import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div
      className="bg-color-alter my-24 h-16 w-1 rounded-full hidden sm:block"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 1, type: "spring", stiffness: 100 }}></motion.div>
  );
};

export default SectionDivider;
