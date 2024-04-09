/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-BackgroundImage": "url('./src/shared/images/HEROBACKGROUND.jpg)",
      },
      colors: {
        "primary-dark": "#d28602",
        "primary-medium": "#f59e0b",
        "primary-light": "#f6ae31",
        "primary-blue": "#17629d",
        "secondary-blue": "#26a9e0",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
