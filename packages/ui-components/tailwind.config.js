/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      keyframes: {
        "hide-search": {
          "0%": {
            transform: "translateY(0)",
            width: "100%",
            height: "100%",
          },
          "100%": {
            transform: "translateY(-100rem)",
            height: 0,
            width: 0,
          },
        },
        "show-search": {
          "0%": {
            transform: "translateY(-100rem)",
            width: 0,
            height: 0,
          },
          "100%": {
            transform: "translateY(0)",
            height: "100%",
            width: "100%",
          },
        },
        "show-search-bar": {},
      },
      animation: {
        "hide-search": "hide-search 1.3s",
        "show-search": "hide-search 0.3s",
      },
    },
    colors: {
      airbnbRed: "#FF5A5F",
      airbnbBabu: "#00A699",
      airbnbOrange: "#FC642D",
      airbnbDark: "#484848",
      airbnbGrey: "#767676",
      white: "#FFFFFF",
      black: "#000000",
      grey1: "#F7F7F7",
    },
    fontFamily: {
      poppins: `'Poppins', sans-serif`,
    },
  },
  plugins: [],
};
