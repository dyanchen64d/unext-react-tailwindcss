/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      scale: {
        70: '0.7',
      },
    },
    screens: {
      lg: '1025px',
    },
  },
  plugins: [],
};
