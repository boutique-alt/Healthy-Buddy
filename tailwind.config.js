/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkest: '#043615',
          dark: '#064e1e',
          primary: '#065f28',
          medium: '#15803d',
          light: '#22c55e',
          soft: '#e9f7ee',
          border: '#c4e9cf',
          mint: '#f0fdf4',
          ivory: '#f8fbf9',
        },
        copper: {
          light: '#de9b62',
          DEFAULT: '#c48044',
          dark: '#9a5b28',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        handwriting: ['var(--font-caveat)', 'cursive'],
      }
    },
  },
  plugins: [],
}
