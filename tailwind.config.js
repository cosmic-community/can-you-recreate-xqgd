/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Changed: Refined brand palette to accurately match production - deep teal-navy not pure navy
        brand: {
          50: '#eef5f5',
          100: '#cce3e3',
          200: '#99c7c7',
          300: '#5fa8a8',
          400: '#2d8c8c',
          500: '#1a7070',
          600: '#125656',
          700: '#0e4343',
          800: '#0a3232',
          900: '#062020',
        },
        // Changed: CTA/accent color corrected to production teal-green (NOT orange)
        accent: {
          50: '#e6f7f5',
          100: '#b3e8e2',
          200: '#80d9cf',
          300: '#4dcabc',
          400: '#26b8a8',
          500: '#0d9488',
          600: '#0a7a70',
          700: '#076158',
          800: '#054840',
          900: '#023028',
        },
        // Changed: Ink text colors matching production typography
        ink: {
          DEFAULT: '#0f2027',
          light: '#4b6b70',
          muted: '#8aa3a8',
        },
        // Changed: Hero/dark section backgrounds matching production deep teal-dark
        hero: {
          darkest: '#0b1d24',
          dark: '#0f2631',
          mid: '#1b3a4b',
          light: '#1e4a5c',
        },
      },
      fontFamily: {
        // Production site uses Inter with system fallbacks
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}