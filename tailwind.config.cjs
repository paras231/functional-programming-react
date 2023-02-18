/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-blue':"#1E0E62",
        'btn-green':"#25DAC5",
        'border-color':"#EBEAED"
      }
    },
  },
  plugins: [],
}