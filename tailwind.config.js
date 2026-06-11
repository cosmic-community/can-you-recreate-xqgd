/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Changed: Updated brand palette to match clinician.therapyally.ai
        brand: {
          50:  '#f0f9f8',
          100: '#d0eeeb',
          200: '#a3dcd7',
          300: '#6ec4bd',
          400: '#3fa89f',
          500: '#268b83',
          600: '#1d6e68',
          700: '#185853',
          800: '#154845',
          900: '#0d3330',
          950: '#081f1d',
        },
        // Changed: Navy/dark background for footer/dark sections
        navy: {
          50:  '#edf2f4',
          100: '#c8d8dd',
          200: '#9bbac4',
          300: '#6d9bab',
          400: '#487e90',
          500: '#366475',
          600: '#274d5c',
          700: '#1c3844',
          800: '#132830',
          900: '#0c1d22',
          950: '#07141a',
        },
        // Changed: Warm cream/off-white tones matching site background
        cream: {
          50:  '#fdfcf9',
          100: '#f9f7f2',
          200: '#f3efe6',
          300: '#ebe4d5',
        },
        accent: {
          50:  '#fff5f0',
          100: '#ffe4d5',
          200: '#ffc5a8',
          300: '#ff9f76',
          400: '#ff7340',
          500: '#f05523',
        },
        ink: {
          DEFAULT: '#0c1d22',
          light:   '#4a6370',
          muted:   '#7a96a0',
        },
      },
      fontFamily: {
        // Changed: Keep Inter but add fallbacks matching site
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        // Changed: Match the tight, impactful headline sizing
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        '7xl': ['4.5rem', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
      },
      borderRadius: {
        // Changed: Match pill-style rounded elements
        'pill': '9999px',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}