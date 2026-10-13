/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./admin.html'],
  theme: {
    extend: {
      colors: {
        'cf-black': '#0E0E0E',
        'cf-yellow': '#F6C500',
        'cf-darkgray': '#1A1A1A',
        'cf-gray': '#333333',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
