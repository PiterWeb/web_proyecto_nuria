/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "dark-primary": "#e8e6e3",
        "dark-secondary": "#8c8273",
        "dark-bg": "#131516",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
