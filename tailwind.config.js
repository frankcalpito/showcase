/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  plugins: [],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {},
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      default: {
        ...colors.gray
      },
      highlight: {
        ...colors.sky
      },
      error: {
        ...colors.red
      }
    },
  }
}

