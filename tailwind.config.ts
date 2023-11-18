/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        grow: {
          '0%': { transform: 'scale(1)' },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        grow: 'grow 1s linear infinite',
      },
      colors: {
        primary: '#ffbd39',
        dark: '#0b0b0b',
      },
      width: {
        900: '100px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
