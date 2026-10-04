/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1538px',
      '3xl': '1920px',
    },

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
