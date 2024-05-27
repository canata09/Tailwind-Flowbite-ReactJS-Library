const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", flowbite.content()],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      customblue: {
        100: "#007AFF",
        200: "#0F70DA",
        300: "#3198FC",
        800: "#28303F",
        900: "#2D3748",
      },
      cusblue100: "#222e48",
      cusgreen: "#b3eeb1",
      cusgray: "#4c4f5c",
    },
  },
  plugins: [flowbite.plugin()],
};
