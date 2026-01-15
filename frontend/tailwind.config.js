/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        soft: '#F5F5FA',
      },

      fontFamily: {
        serifBook: ['Merriweather', 'serif'],
        serifTitle: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true }),],
}
