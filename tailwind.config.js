/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html", // HTML files in root directory
    "./src/**/*.{html,js}", // Any HTML/JS files in src folder
    "./public/**/*.html", // HTML files in public folder
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#4a4a87",
          800: "#1a1a47",
        },
        secondary: {
          100: "#f8b5ac",
          200: "#ff8f83",
        },
      },
      fontFamily: {
        body: ["Oranienbaum"],
      },
    },
  },
  plugins: [],
};
