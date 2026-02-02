/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/common/**/*.{js,ts,jsx,tsx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'unbounded': ['Unbounded', 'sans-serif'],
        'poppins': ['var(--font-poppins)', 'sans-serif'],
        'fugaz': ['Fugaz One', 'sans-serif'],
        'rubik': ['Rubik Wet Paint', 'sans-serif'],
      },
      colors: {
        slk: {
          regular: "#133c25",
          light: "#239254",
          dark: "#d5e6dc",
          black: {
            100: "#161617",
            200: "#151515",
            300: "#0B0B0C"
          },
        },
        primary: {
          50: '#edf7ff',
          100: '#d8edff',
          200: '#b9dfff',
          300: '#89cdff',
          400: '#51b0ff',
          500: '#298eff',
          600: '#1f75fe',
          700: '#0b55ea',
          800: '#1046bd',
          900: '#143e94',
          950: '#11275a',
        },
        grayFont: {
          50: '#f5f7f8',
          100: '#edeff2',
          200: '#dee2e7',
          300: '#c9d0d8',
          400: '#b3bac6',
          500: '#9ea5b6',
          600: '#9297aa',
          700: '#75798d',
          800: '#606473',
          900: '#51545e',
          950: '#2f3037',
        },
      },
    },
  },
  plugins: [],
};
