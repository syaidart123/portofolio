import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      keyframes: {
        flicker: {
          "0%, 100%": { boxShadow: "0 4px 10px rgba(69, 104, 220, 0.8)" }, // Primary (#4568DC)
          "50%": { boxShadow: "0 4px 10px rgba(176, 106, 179, 0.8)" }, // Secondary (#B06AB3)
        },
      },
      animation: {
        flicker: "flicker 3s infinite alternate",
      },
      colors: {
        primary: "#4568DC",
        secondary: "#B06AB3",
        tertiary: "#6D28D9",
        quaternary: "#3730A3",
        primaryDark: "#111827",
        secondaryDark: "#374151",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
