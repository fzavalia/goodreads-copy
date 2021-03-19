module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'goodreads-logo': 'url("https://www.goodreads.com/assets/layout/header/goodreads_logo.svg")'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
