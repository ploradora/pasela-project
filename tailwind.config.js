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
      black: "#3D3D3D",
      grey: "#A3A3A3",
      "dashboard-btn": "#6B7280",
      "dashboard-border": "#0000001A",
      transparent: "transparent",
      "grey-input": "#3D3D3D4D",
      "temp-card-bg": "#c3c7c7",
      // 'gradient-yellow-from': '#F8BA0C',
      // 'gradient-yellow-to': '#EF9D88',
      // 'gradient-grey-from': '#6576A0',
      // 'gradient-grey-to': '#9AB9D6',
      // 'gradient-green-from': '#4BDFFF',
      // 'gradient-green-to': '#32C9A5',
      // 'gradient-pink-from': '#DC79FF',
      // 'gradient-pink-to': '#EF9D88',
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
