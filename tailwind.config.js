module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: '320px',
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
      _2k: '2000px',
    },
    extend: {
      colors: {
        greenMOG: '#8DF0AF',
        blueMOG: '#9CC9F3',
        grayMOG: '#1D2736'
        
      },
      fontFamily: {
        primary: "'Poppins', Tahoma, sans-serif",
        secondary:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
    },

  },
  plugins: [],
}
