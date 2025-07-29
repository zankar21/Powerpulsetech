// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d3557",      // Deep Blue (Headings, buttons)
        secondary: "#457b9d",    // Lighter Blue (Cards, accents)
        grayBg: "#f5f7fa",       // Light gray background
        card: "#ffffff",         // Card white
        grayText: "#495057",     // Neutral text
        accent: "#e63946",       // Optional for highlights
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
