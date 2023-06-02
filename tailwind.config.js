/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'antic': ['Antic', 'sans-serif']
      }, 
      colors: {
        'turtle-green': '#86C232',
      }
    }
  },
  plugins: [],
}

