module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        oxfordBlue: {
          DEFAULT: "#01172F"
        },
        mintCream: {
          DEFAULT: "#F7FFF7"
        },
        skobeloff: {
          DEFAULT: "#00635D"
        },
        pacificBlue: {
          DEFAULT: "#08A4BD"
        },
        ultramarineBlue: {
          DEFAULT: "#446DF6"
        },
        darkOrange: {
          DEFAULT: "#F58A07"
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
