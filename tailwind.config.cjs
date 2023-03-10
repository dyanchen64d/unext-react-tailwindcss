/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      scale: {
        70: '0.7',
      },
      colors: {
        'nav-text': 'rgba(255, 255, 255, 0.75)',
        'unext-blue': 'rgb(0, 128, 222)',
        'nav-login': 'rgba(255, 255, 255, 0.05)',
        'main-bg': 'rgb(0, 10, 23)',
        'slider-handler': 'rgba(1, 6, 13, 0.3)',
        'slider-handler-hover': 'rgba(1, 6, 13, 0.75)',
        'search-input': 'rgb(35, 45, 58)',
        'search-placeholder': 'rgb(117, 117, 117)',
      },
      transitionProperty: {
        height: 'height',
        text: 'font-size',
        background: 'background',
      },
    },
    screens: {
      sm: '640px',
      md_home: '850px',
      lg: '1025px',
    },
  },
  plugins: [],
};
