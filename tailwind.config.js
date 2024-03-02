import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-1': '#D87D4A',
        'orange-2': '#fbaf85',
        'noir-1': '#191919',
        'blanc-1': '#F1F1F1'
      },
    },
  },
  plugins: [
    daisyui
  ],
}