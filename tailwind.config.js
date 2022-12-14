module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      main: "#F1F9F9",
      blue: "#3291CF",
      "blue-test": "#caeced",
      white: "white",
      'white-hover-tab': '#0000004d',
      'dark-grey': "#3D3D3D",
      dark: '#3D3D3D',
      grey: "#A3A3A3",
      "dashboard-btn": "#6B7280",
      "dashboard-border": "#0000001A",
      transparent: "transparent",
      "grey-input": "#3D3D3D4D",
      "temp-card-bg": "#c3c7c7",
    },
    extend: {
      fontFamily: {
        myfont: ["Glober"],
        sans: ["Glober", "sans-serif"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
};
