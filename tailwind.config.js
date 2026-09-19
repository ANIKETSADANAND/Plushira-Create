/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FCF8F2",
        paper: "#F6EEE3",
        "paper-deep": "#EFE4D6",
        blush: "#E6C2B9",
        "blush-soft": "#F3DED8",
        "blush-deep": "#C3948A",
        sage: "#A8B9A3",
        "sage-soft": "#D7DFD2",
        "sage-deep": "#7E9179",
        gold: "#D3BC93",
        "gold-deep": "#B2935F",
        ink: "#4C3A2E",
        "ink-soft": "#7D6857",
      },
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        sans: ["Jost", "Helvetica Neue", "Arial", "sans-serif"],
        script: ["Caveat", "cursive"],
      },
      maxWidth: {
        wrap: "1220px",
      },
    },
  },
  plugins: [],
};
