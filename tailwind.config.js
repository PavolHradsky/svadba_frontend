/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      dropShadow: {
        'custom': '-10px 0px 20px rgba(0, 0, 0, 0.15)'
      }
    },
  },
  plugins: [],
}
