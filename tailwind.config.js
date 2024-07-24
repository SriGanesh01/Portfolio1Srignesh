/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        'M PLUS 2': ['M PLUS 2', 'sans-serif'],
        LondrinaOutline: ['Londrina Outline', 'cursive'],
      },
      fontWeight: {
        'optical': 'auto',
        'bold': '900',
      },
      fontStyle: {
        'normal': 'normal',
      },
    },
  },
  plugins: [],
}
