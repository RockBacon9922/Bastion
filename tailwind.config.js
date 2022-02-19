const { urlObjectKeys } = require("next/dist/shared/lib/utils");

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "GreatVibes": ['Unica One', "cursive"],
    },
    extend: {
      backgroundImage: {
        "AllProducts": "url('/AllProducts.webp')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
