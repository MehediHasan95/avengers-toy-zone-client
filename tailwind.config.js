/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light"],
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    logs: true,
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
      backgroundImage: {
        deal: "url('https://i.ibb.co/93vGpLN/marvel-banner.jpg')",
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
