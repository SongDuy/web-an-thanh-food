/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serifBook: ['Merriweather', 'serif'],
        serifTitle: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
