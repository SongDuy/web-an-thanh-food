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

      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },

    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true }),],
}
