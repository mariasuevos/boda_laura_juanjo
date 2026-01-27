/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'boda-crema': '#fdfaf5', // El fondo del sobre
        'boda-oliva': '#6b705c', // El verde del contador
        'boda-dorado': '#b7ad94', // Para detalles elegantes
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        script: ['Pinyon Script', 'cursive'],
      },
    },
  },
  plugins: [],
}