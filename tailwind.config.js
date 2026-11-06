/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#000000', // Pitch black
        surface: '#09090b',    // Smoked glass
        'surface-highlight': '#141418',
        border: 'rgba(255, 255, 255, 0.08)',
        crimson: {
          DEFAULT: '#e50914', // Refined luxury crimson
          bright: '#ff1e38',
          dark: '#991b1b',
          deep: '#7f1d1d',
          subtle: 'rgba(229, 9, 20, 0.12)',
        },
        platinum: '#f4f4f5',
        silver: '#a1a1aa',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'radar': 'radar 2s cubic-bezier(0, 0.2, 0.8, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        radar: {
          '0%': { transform: 'scale(0.95)', opacity: '0.8' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
      },
      boxShadow: {
        'crimson-glow': '0 0 20px -3px rgba(229, 9, 20, 0.4)',
        'crimson-subtle': '0 0 12px rgba(229, 9, 20, 0.2)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.8)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
