import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-rajdhani)', 'Rajdhani', 'sans-serif'],
        display: ['var(--font-russo)', 'Russo One', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: {
          950: '#000000',
          900: '#0c0a09',
          800: '#1c1917',
        },
        magma: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          glow: '#f9731680',
        },
        ember: {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
        },
        ash: {
          500: '#78716c',
          900: '#292524',
        },
      },
      backgroundImage: {
        'grid-pattern':
          "linear-gradient(to right, #292524 1px, transparent 1px), linear-gradient(to bottom, #292524 1px, transparent 1px)",
      },
      animation: {
        rise: 'rise 4s infinite linear',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        flicker: 'flicker 3s infinite alternate',
        'flame-pulse': 'flame-pulse 3s infinite alternate',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        shimmer: 'shimmer 1s infinite',
      },
      keyframes: {
        rise: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateY(-80vh) scale(0.2)', opacity: '0' },
        },
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            boxShadow:
              '0 0 10px rgba(249, 115, 22, 0.2), 0 0 20px rgba(249, 115, 22, 0.1)',
          },
          '20%, 24%, 55%': {
            boxShadow: 'none',
          },
        },
        'flame-pulse': {
          '0%': { opacity: '0.5', transform: 'scaleY(1)' },
          '100%': { opacity: '0.8', transform: 'scaleY(1.1)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
