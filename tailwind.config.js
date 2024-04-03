/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
        gothic: ['"Nanum Gothic"', "sans-serif"],
        sans: ['"Noto Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
