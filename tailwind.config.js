/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Changed: Updated brand colors to match production Therapy Ally site - deep navy/slate palette
        brand: {
          50: '#f0f4f8',
          100: '#d9e4ed',
          200: '#b3c9db',
          300: '#7fa4be',
          400: '#4f7ea0',
          500: '#2d6287',
          600: '#1e4e70',
          700: '#173d58',
          800: '#123047',
          900: '#0e2538',
        },
        // Changed: Updated accent to the production site's warm amber/coral tone
        accent: {
          50: '#fff8f0',
          100: '#ffefd9',
          200: '#fed9a8',
          300: '#fdb96a',
          400: '#fb912d',
          500: '#f97316',
        },
        // Changed: Ink colors updated for the production site's text palette
        ink: {
          DEFAULT: '#111827',
          light: '#4b5563',
          muted: '#9ca3af',
        },
        // Changed: Added slate palette for section backgrounds matching production
        slate: {
          hero: '#0f1e2e',
          dark: '#132333',
          mid: '#1a3347',
          soft: '#f8fafc',
        },
      },
      fontFamily: {
        // Changed: Production site uses Inter with system fallbacks
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      // Changed: Added custom letter spacing to match production site headings
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
      },
      // Changed: Added border radius options matching production cards
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}