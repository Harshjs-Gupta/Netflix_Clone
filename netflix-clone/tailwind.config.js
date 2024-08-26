/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // Ensure your paths are correct
  theme: {
    extend: {
      fontFamily: {
        netflix: ["'Helvetica Neue'", "Helvetica", "Arial", "sans-serif"], // Corrected syntax
      },
    },
  },
  plugins: [],
};
