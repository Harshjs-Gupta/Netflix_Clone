/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // Ensure your paths are correct
  theme: {
    extend: {
      fontFamily: {
        netflix: ["'Helvetica Neue'", "Helvetica", "Arial", "sans-serif"],
        basker: ["'BaskerFont'", "san-serif"],
      },
      boxShadow: {
        "inner-bottom": "inset 0 -10px 10px rgb(0, 0, 0)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".custom-scrollbar::-webkit-scrollbar": {
            width: "4px",
            height: "2px",
          },
          ".custom-scrollbar::-webkit-scrollbar-track": {
            background: "transparent",
          },
          ".custom-scrollbar::-webkit-scrollbar-thumb": {
            "background-color": "#888",
            "border-radius": "10px",
            border: "2px solid #f1f1f1",
          },
          ".custom-scrollbar::-webkit-scrollbar-thumb:hover": {
            background: "transparent",
          },
          ".custom-scrollbar": {
            "scrollbar-width": "thin",
            "scrollbar-color": "black transparent",
          },
        },
        ["responsive"]
      );
    },
  ],
};
