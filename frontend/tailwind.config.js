/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#86BC25",
        background: "#000000",
        secondary: "#111111",
        card: "#1A1A1A",
        border: "#2A2A2A",
        text: "#FFFFFF",
      },
      fontFamily: {
        sans: ['Inter', 'IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
