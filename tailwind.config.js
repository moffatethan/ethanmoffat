const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './shared/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'teal': '#16BDCA',
        'teal-light': '#7af6ff',
        orange: colors.orange
      }
    },
    fontFamily: {
      'work-sans': ['Work Sans', 'ui-sans-serif', 'system-ui', '--apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      'body': ['Open Sans', 'sans-serif'],
      'fancy-body': ['Playfair Display', 'serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
