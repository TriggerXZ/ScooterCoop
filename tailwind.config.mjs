/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'cream': 'var(--color-cream)',
        'pink': '#FF6B9D',
        'yellow': '#FFE135',
        'blue': '#00ADEE',
        'lime': '#39FF14',
        'coral': '#FF6B35',
        'purple': '#8B5CF6',
        'dark': 'var(--color-dark)',
        'text': 'var(--color-text)',
        'brown': '#8B4513',
        'white': 'var(--color-white)',
        'black': '#000000',
        'gray-200': 'var(--color-gray-200)',
        'gray-400': 'var(--color-gray-400)',
        'gray-500': 'var(--color-gray-500)',
        'gray-600': 'var(--color-gray-600)'
      },
      fontFamily: {
        heading: ['Fredoka One', 'cursive'],
        subheading: ['Baloo 2', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
        accent: ['Permanent Marker', 'cursive'],
      },
      animation: {
        'bounce-sm': 'bounce-sm 0.3s ease-out',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        'bounce-sm': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05) rotate(2deg)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(5deg)' },
        },
      },
      boxShadow: {
        'memphis': '8px 8px 0px var(--shadow-color)',
        'memphis-pink': '8px 8px 0px #FF6B9D',
        'memphis-yellow': '8px 8px 0px #FFE135',
        'memphis-blue': '8px 8px 0px #00ADEE',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
      },
      borderRadius: {
        'memphis': '8px',
        'cut': '0',
      },
    },
  },
  plugins: [],
};