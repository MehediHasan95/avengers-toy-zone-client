/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster", "cursive"],
      },
      colors: {
        blueViolet: "#8843E4",
        russianViolet: "#32184B",
      },
      backgroundColor: {
        blueViolet: "#8843E4",
        russianViolet: "#32184B",
      },
      maxWidth: {
        "8xl": "85rem",
      },
      width: {
        49: "49%",
      },
    },
  },
  plugins: [require("daisyui")],
};
