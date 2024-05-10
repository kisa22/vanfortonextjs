import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      }
    },
    colors: {
      color: {
        primary: "#CCD0CF",
        secondary: "#9BA8AB",
        ascent: "#4A5C6A",
        alter: "#253745",
        dark: "#11212D",
        darker: "#06141B"
      }
    }
  },
  plugins: [],
  darkMode: "class"
};
export default config;
