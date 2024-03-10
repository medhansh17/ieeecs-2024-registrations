/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-main": "#F2EFE0",
        custombg: "#F2EFE0",
        "sub-text": "#837D7D",
      },
      fontFamily: {
        elephant: ["Elephant", "serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
