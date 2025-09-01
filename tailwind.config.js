/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // If using Expo Router
  ],
  presets: [require("nativewind/preset")], // Ensure this line is present
  theme: {
    extend: {},
  },
  plugins: [],
}