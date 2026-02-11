/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#4f46e5', // indigo-600
        },
        secondary: {
          500: '#a855f7', // purple-500
        }
      }
    },
  },
  plugins: [],
}

