const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", flowbite.content()],
  theme: {
    extend: {
      gridTemplateColumns: {
        'layout': '5fr 1fr',
        'effect': '1fr 5fr 1fr',
      },
      borderColor: {
        'custom-blue': '#1e40af',
        'custom-green': '#10b981',
        'custom-gray': '#e5e7eb',
      },
      borderRadius: {
        'custom-lg': '0.5rem',
      },
      boxShadow: {
        'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 2px 4px rgba(0, 0, 0, 0.6)',
      },
      zIndex: {
        '60': '60',
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    colors: {
      customblue: {
        100: "#007AFF",
        200: "#0F70DA",
        300: "#3198FC",
        400: "#0F2239",
        500: "#313C45",
        600: "#4599FA",
        700: "#141B5F",
        800: "#28303F",
        900: "#2D3748",
      },
      cusblue100: "#222e48",
      cusgreen: "#b3eeb1",
      cusgray: "#4c4f5c",
    },
    spacing: {
      0: "0px",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      32: "8rem",
      40: "10rem",
      48: "12rem",
      56: "14rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
