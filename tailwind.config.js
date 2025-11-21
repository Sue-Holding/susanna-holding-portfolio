/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',     // main page background
        foreground: '#eaeaea',     // main text color
        primary: '#ff3c78',        // buttons, links, highlights
        secondary: '#888888',      // subtle text or borders
        accent: '#0ff',            // neon accent for special text
        card: '#111111',           // dark cards
        hover: '#1f1f1f',          // hover background
    },
    fontFamily: {
        sans: ['"Geist Sans"', 'Arial', 'Helvetica', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
    },
  },
  plugins: [],
}