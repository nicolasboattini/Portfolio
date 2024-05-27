import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {},
      fontFamily: {
        ubuntu: ["Ubuntu", 'sans-serif'],
      },
      colors: {
        'CREMA': {
          DEFAULT: '#f1e1cf',
        },
        'AMARILLO': {
          DEFAULT: '#ffcc50',
        },
        'AZUL': {
          DEFAULT: '#2196f3',
        },



        // Colores personalizados para el modo claro
        'LIGHT-BG-P': {
          light: '#f0f8ff',
          DEFAULT: '#e0e7ff',
          dark: '#c0c7ff'
        },
        'LIGHT-BG-S': {
          light: '#dfefff',
          DEFAULT: '#cfe7ff',
          dark: '#afc7ff'
        },
        'LIGHT-D-P': {
          light: '#ffedb5',
          DEFAULT: '#ffdd85',
          dark: '#ffcc55'
        },
        'L-T-P': {
          light: '#1c1e26',
          DEFAULT: '#030304',
          dark: '#000000',
        },
        'L-T-S': {
          light: '#ffffff',
          DEFAULT: '#e4e4e4',
          dark: '#b1b1b1',
        },
        // Colores personalizados para el modo oscuro
        'DARK-BG-P': {
          light: '#000046',
          DEFAULT: '#000020',
          dark: '#1a1a37',
        },
        'DARK-BG-S': {
          light: '#0e2142',
          DEFAULT: '#060e1c',
          dark: '#03080f',
        },
        'DARK-D-P': {
          light: '#ffcc50',
          DEFAULT: '#ff9800',
          dark: '#cc7900',
        },
        'D-T-P': {
          light: '#fffbfe',
          DEFAULT: '#f9f6f9',
          dark: '#c5c3c5',
        },
        'D-T-S': {
          light: '#85ffb2',
          DEFAULT: '#84fca8',
          dark: '#69c986',
        },
      },
    },
  },
  plugins: [
    addDynamicIconSelectors()
  ],
};

export default config;
