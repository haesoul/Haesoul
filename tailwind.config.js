/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      keyframes: { pop: { from: { opacity: '0', transform: 'translateY(6px)' }, to: { opacity: '1', transform: 'none' } } },
      fontFamily: {
        display: ['Unbounded', 'Onest', 'system-ui', 'sans-serif'],
        sans: ['Onest', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
