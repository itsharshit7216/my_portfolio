/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",    // Vibrant Blue
        secondary: "#0891b2",  // Teal / Cyan
        accent: "#7c3aed",     // Purple accent
        dark: "#f0f4f8",       // Light section bg
        darker: "#e2e8f0",     // Slightly deeper section
        light: "#ffffff",      // White
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
