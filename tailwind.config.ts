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
      colors: {
        primary: "#F39F5A",
        secondary: "#AE445A",
        tertiary: "#662549",
        quaternary: "#451952",
        primaryDark: "#191A1B",
        secondaryDark: "#3F3F3F",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
