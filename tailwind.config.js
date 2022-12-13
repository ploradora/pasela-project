module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main': '#F1F9F9',
      'blue': '#3291CF',
      'white': 'white',
      'black': '#3D3D3D',
      'dashboard-btn': '#6B7280',
      'dashboard-border': '#0000001A',
      'transparent': 'transparent',
      'grey-input': '#3D3D3D4D',
    },
    extend: {
      fontFamily: {
        myfont: ['Glober'],
        sans: ['Glober', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
}

