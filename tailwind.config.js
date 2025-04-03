/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-pink': {
          light: '#FFD1DC', // Light Pink
          DEFAULT: '#FF69B4', // Hot Pink
          dark: '#C71585',  // Medium Violet Red (as a darker pink)
        },
        'brand-gray': {
          light: '#F3F4F6',
          DEFAULT: '#6B7280',
          dark: '#1F2937',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example font
      },
    },
  },
  plugins: [],
}
