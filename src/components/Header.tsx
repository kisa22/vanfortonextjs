"use client";

import { motion } from "framer-motion";
import { links } from "@/libs/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border-opacity-10 bg-color-primary bg-opacity-80 shadow-lg shadow-color-darker/[0.4] backdrop-blur-[0.4] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}></motion.div>

      <nav className="fixed flex top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-color-darker sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center font-semibold relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}>
              <Link
                href={link.hash}
                className={clsx(
                  "flex items-center w-full justify-center px-3 py-3 hover:text-color-ascent transition",
                  {
                    "text-color-ascent": activeSection === link.name,
                    "text-color-dark": activeSection !== link.name
                  }
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}>
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-color-gray-100 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
