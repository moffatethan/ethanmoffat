const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    // This is not present inside the default configuration
    // but it's good to build your production application
    // Read more about this here: https://tailwindcss.com/docs/installation#building-your-css
    './pages/**/*.js',
  ],
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
  plugins: [],
}
