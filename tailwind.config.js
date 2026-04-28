/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: '#f43f5e',
        surface: '#ffffff',
        subtle: 'var(--bg-subtle)',
        mute: '#94a3b8',
        ink: 'var(--ink)',
        canvas: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        handwriting: ['Caveat', 'cursive'],
        comic: ['Bangers', 'cursive'],
      },
      boxShadow: {
        saas: '0 1px 3px rgba(0,0,0,0.05), 0 10px 40px -10px rgba(2,132,199,0.08)',
        'saas-hover': '0 4px 6px rgba(0,0,0,0.05), 0 20px 40px -10px rgba(2,132,199,0.16)',
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'fast-pulse': 'pulse 1s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%,100%': { 'background-position': 'left center' },
          '50%': { 'background-position': 'right center' },
        },
      },
    },
  },
  plugins: [],
}