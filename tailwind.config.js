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
          50: "#fef5f4",
          100: "#fde5e2",
          200: "#fbd5d0",
          300: "#fac5be",
          400: "#f8b5ac",
          500: "#ff8f83",
        },
      },
      fontFamily: {
        body: ["Oranienbaum"],
      },
    },
  },
  plugins: [],
};
