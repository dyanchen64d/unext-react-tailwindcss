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
        'nav-register': 'rgb(0, 128, 222)',
        'nav-login': 'rgba(255, 255, 255, 0.05)',
      },
    },
    screens: {
      lg: '1025px',
    },
  },
  plugins: [],
};
