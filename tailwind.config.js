/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: { max: '809.98px' },
      'md-tablet': { min: '810px', max: '1199.98px' },
      desktop: { min: '1200px' },
    },
    extend: {
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
      },
      colors: {
        accent: '#F598F2',
      },
    },
  },
  plugins: [],
};
