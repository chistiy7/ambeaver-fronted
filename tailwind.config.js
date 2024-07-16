/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "#fbfbfb",
        "main-border": "#e3e3e3",
        "main-text": "#1e1e1e",
        "game-bg": "#e4ccff",
        primary: "#aff4c6",
        secondary: "#bde3ff",
        "secondary-border": "#22b4ff",
      },
      screens: {
        xs: "380px",
        xxs: "300px",
      },
    },
  },
  plugins: [],
};
