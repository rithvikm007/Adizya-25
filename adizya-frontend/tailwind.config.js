// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // etc.
  ],
  theme: {
    extend: {
      fontFamily: {
        "silver-crown": ["Silver Crown", "serif"],
        "hellas-fun": ["HellasFun", "sans-serif"],
      },
    },
  },
  plugins: [],
};
