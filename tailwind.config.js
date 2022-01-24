const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: colors.orange
      }
    },
    fontFamily: {
      'work-sans': ['Inter', 'ui-sans-serif', 'system-ui', '--apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      'body': ['Open Sans', 'sans-serif'],
      'fancy-body': ['Playfair Display', 'serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
