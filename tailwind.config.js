/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: true, // or 'media' or 'class'
  content: [],
  theme: {
    extend: {
      jura: ["Jura", "sans-serif"],
    },
  },
  plugins: [],
};
