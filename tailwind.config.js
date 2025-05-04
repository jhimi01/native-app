/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#b3806b',
        secondary: '#f5e8d7',
        brown: '#8B6850'
      }
      
    },
  },
  plugins: [],
}