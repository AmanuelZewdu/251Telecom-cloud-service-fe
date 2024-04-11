/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-BackgroundImage": "url('./src/shared/images/HEROBACKGROUND.jpg)",
      },
      colors: {
        "primary-blue": "#17629d",
        "secondary-blue": "#26a9e0",
        "button-color": "#BC68B2",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
