/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'phone': '280px',
      'pc' : '850px'
    },
    extend: {

    },
  },
  plugins: [],
}
