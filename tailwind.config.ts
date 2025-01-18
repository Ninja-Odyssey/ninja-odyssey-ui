import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/pages/**/*.{html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],

  theme: {
    container: {
      center: true,
      padding: "10px",
      screens: {
        lg: "1220px",
        md: "900px",
        sm: "600px",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "serif"],
      roboto: ["Roboto", "serif"],
      martian:["Martian Mono","serif"],
      zillia:["Zilla Slab","serif"],
      outfit:["Outfit","serif"],
    },
    extend: {
      colors: {
        primary: "#821302", 
        colorefeded: "#efeded",
        color707070: "#707070",
      },
    },
    screens: {
      "3xl": { min: "1920px" },
      "2xl": { max: "1543px" },
      xl: { max: "1339px" },
      lg: { max: "1199px" },
      md: { max: "899px" },
      sm: { max: "599px" },
      xs: { max: "479px" },
    },
  },
  plugins: [],

};
export default config;
