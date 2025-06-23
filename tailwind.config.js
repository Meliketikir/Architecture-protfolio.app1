/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInSlideUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeInSlideUp: 'fadeInSlideUp 1s ease-out forwards',
        'bounce-slow': 'bounce 2s infinite',
      },
      textShadow: {
        md: '2px 2px 4px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
} 