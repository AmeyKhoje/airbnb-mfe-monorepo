/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      airbnbRed: "#FF5A5F",
      airbnbBabu: "#00A699",
      airbnbOrange: "#FC642D",
      airbnbDark: "#484848",
      airbnbGrey: "#767676",
      white: "#FFFFFF",
      black: "#000000",
    },
    fontFamily: {
      poppins: `'Poppins', sans-serif`,
    },
  },
  plugins: [],
};
