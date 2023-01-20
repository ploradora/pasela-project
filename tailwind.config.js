module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      main: "#F1F9F9",
      blue: "#3291CF",
      "blue-100": "#adbcc4",
      white: "white",
      darker: "#2e2e2e",
      dark: "#3D3D3D",
      black: "#3D3D3D",
      grey: "#A3A3A3",
      red: "#ed3e32",
      silver: "#A1C4DD",
      skin: "#EFD2BE",
      transparent: "transparent",
      "yellow-100": "#f5e5b5",
      "grey-100": "#3c3c3c17",
      "grey-200": "#9E9E9E",
      "grey-300": "#6B7280",
      "grey-400": "#93989B",
      "white-hover-tab": "#0000004d",
      "dashboard-btn": "#6B7280",
      "dashboard-border": "#0000001A",
      "grey-input": "#3D3D3D4D",
      "violet-500": "#A7BFE8",
      "fuchsia-500": "#6190E8",
    },

    extend: {
      fontFamily: {
        myfont: ["Glober"],
        sans: ["Glober", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
  corePlugins: {
    fontFamily: true,
  },
};
