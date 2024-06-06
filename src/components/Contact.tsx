"use client";

import SectionHeading from "@/components/SectionHeading";
import useSectionView from "@/libs/hooks";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";

const Contact = () => {
  const { ref } = useSectionView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center text-wrap"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}>
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-color-primary -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:irvanadwifangga@gmail.com">
          vannone@gmx.com
        </a>{" "}
        or through this form
      </p>

      <form
        action={async (formData) => {
          await sendEmail(formData);
        }}
        className="mt-10 flex flex-col gap-4">
        <input
          name="senderName"
          className="h-14 px-4 rounded-lg border borderBlack"
          type="text"
          placeholder="Your Name"
          required
          autoComplete="off"
          maxLength={25}
        />
        <input
          className="h-14 px-4 rounded-lg border borderBlack"
          name="senderEmail"
          type="email"
          placeholder="Your Email"
          required
          autoComplete="off"
          maxLength={50}
        />
        <textarea
          className="h-52 my-3 rouded-lg borderBlack p-4"
          name="senderMessage"
          placeholder="Your Message"
          required
          autoComplete="off"
          maxLength={500}></textarea>
        <button
          type="submit"
          className="group h-[3rem] w-[8rem] text-color-primary rounded-full outline-none transition-all flex items-center justify-center gap-2 bg-color-dark hover:scale-105 hover:bg-color-darker">
          Send{" "}
          <FaPaperPlane
            width={24}
            className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
          />{" "}
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
