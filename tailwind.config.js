/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html", // HTML files in root directory
    "./src/**/*.{html,js}", // Any HTML/JS files in src folder
    "./public/**/*.html", // HTML files in public folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
