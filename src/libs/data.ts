import React from "react";
import { FaAws } from "react-icons/fa";
import { TbBrandLaravel } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import AnimeList from "@/public/animelist.png";
import TodoList from "@/public/todolist.png";

export const links = [
  {
    name: "Home",
    hash: "#home"
  },
  {
    name: "About",
    hash: "#about"
  },
  {
    name: "Projects",
    hash: "#projects"
  },
  {
    name: "Skills",
    hash: "#skills"
  },
  {
    name: "Experience",
    hash: "#experience"
  },
  {
    name: "Contact",
    hash: "#contact"
  }
] as const;

export const experiencesData = [
  {
    title: "Machine Learning",
    location: "Dicoding",
    description:
      "I graduated after 6 months of studying. I successfully completed the final assignment given by the bootcamp in completing the data training program to determine the shape of a hand, (Scissors, Stone, Paper)",
    icon: React.createElement(FaPython),
    date: "2024"
  },
  {
    title: "Aws Cloud",
    location: "Dicoding",
    description: "I managed to follow the Aws Cloud lesson from the dicoding bootcamp.",
    icon: React.createElement(FaAws),
    date: "2024"
  },
  {
    title: "IT Skill Booster",
    location: "Pijar Camp",
    description:
      "I followed the learning of php language with laravel framework from Pijar Camp, I understood the fundamental basis of php language from the learning I got from Pijar Camp.",
    icon: React.createElement(TbBrandLaravel),
    date: "2024"
  }
] as const;

export const projectsData = [
  {
    title: "Anime List",
    description:
      "I redesigned my anime list using Prisma and JSX to efficiently manage the lists and enhance usability. For the database, I integrated Supabase, and I styled the interface with Tailwind CSS.",
    tags: ["React", "Next.js", "Supabase", "Tailwind", "Prisma"],
    imageUrl: AnimeList
  },
  {
    title: "Todo List",
    description:
      "I developed a web application for managing daily to-do lists, incorporating various features to enhance productivity and meet everyday needs.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: TodoList
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "PHP",
  "Laravel",
  "Bootstrap",
  "TailwindCSS",
  "React",
  "Astro.js",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Express",
  "MongoDB"
] as const;
