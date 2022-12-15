module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      main: "#F1F9F9",
      blue: "#3291CF",
      white: "white",
      darker: "#2e2e2e",
      dark: "#3D3D3D",
      grey: "#A3A3A3",
      silver: "#A1C4DD",
      skin: "#EB603D",
      transparent: "transparent",
      "grey-200": "#9E9E9E",
      "grey-300": "#6B7280",
      "white-hover-tab": "#0000004d",
      "dashboard-btn": "#6B7280",
      "dashboard-border": "#0000001A",
      "grey-input": "#3D3D3D4D",
    },

    extend: {
      fontFamily: {
        myfont: ["Glober"],
        sans: ["Glober", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  corePlugins: {
    fontFamily: true,
  },
};
