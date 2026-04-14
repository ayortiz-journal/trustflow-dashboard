/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        trustflow: {
          navy: '#0f172a',
          blue: '#2563eb',
          light: '#f8fafc',
          border: '#e2e8f0'
        }
      }
    },
  },
  plugins: [],
};