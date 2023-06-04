/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Monomaniac One', 'sans-serif'],
        'text': ['Rubik', 'sans-serif']
      }, 
      colors: {
        'primary': '#86C232',
      }
    }
  },
  plugins: [],
}

