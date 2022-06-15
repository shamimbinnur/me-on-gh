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
        greenMOGH: '#8DF0AF',
        blueMOGH: '#9CC9F3',
        grayMOGH: '#1D2736',
        grayDimMOGH: '#677487',
        
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
