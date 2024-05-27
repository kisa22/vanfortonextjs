import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: ["0 0px 20px rgba(255,255, 255, 0.35)", "0 0px 65px rgba(255, 255,255, 0.2)"]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      }
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1320px",
      "2xl": "1440px"
    },
    colors: {
      color: {
        primary: "#CCD0CF",
        secondary: "#9BA8AB",
        ascent: "#4A5C6A",
        alter: "#253745",
        dark: "#11212D",
        darker: "#06141B",
        gray: {
          100: "#CCD0CF",
          200: "#9BA8AB",
          300: "#4A5C6A",
          400: "#253745",
          500: "#11212D",
          600: "#06141B"
        }
      }
    }
  },
  plugins: [],
  darkMode: "class"
};
export default config;
