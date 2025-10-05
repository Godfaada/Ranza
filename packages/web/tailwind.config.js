/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#0B5FFF',
        ghanaGreen: '#006B3F',
        ghanaYellow: '#FCD116',
        ghanaRed: '#CE1126',
      },
    },
  },
  plugins: [],
};
