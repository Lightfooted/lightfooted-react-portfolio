module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        white: '1px solid #ffffff'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
