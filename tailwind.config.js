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

        // Dark
        'DARK-BG': {
          light: '#18263E',
          DEFAULT: '#0E192B',
          dark: '#060e1c',
        },
        'DARK-BORDER': {
          light: '#637591',
          DEFAULT: '#50617C',
          dark: '#3F4F6A',
        },

        //Light 
        'LIGHT-BG': {
          light: '#FAFCFF',
          DEFAULT: '#F5FAFF',
          dark: '#EBF1FB',
        },
        'LIGHT-T': {
          light: '#D8E2F3',
          DEFAULT: '#55657E',
          dark: '#16202F',
        },  

        'LIGHT': {
          AzulClaro: '#55657E',
          AzulOscuro: '#16202F',
          GrisClaro: '#62636C',
          GrisOscuro: '#1E1F24',
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
