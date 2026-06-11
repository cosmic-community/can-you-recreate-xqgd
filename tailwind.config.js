/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7f6',
          100: '#d9ecea',
          200: '#b5d9d5',
          300: '#86bfb9',
          400: '#579e98',
          500: '#3d847e',
          600: '#316a66',
          700: '#2a5552',
          800: '#254644',
          900: '#223b39',
        },
        accent: {
          50: '#fef6f0',
          100: '#fde8d9',
          200: '#fbcdb0',
          300: '#f8aa7d',
          400: '#f47e48',
          500: '#f05f25',
        },
        ink: {
          DEFAULT: '#1a2b33',
          light: '#475a63',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}