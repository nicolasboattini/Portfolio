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
          dark: '#ab9f92',
        },
        'AMARILLO': {
          light: '#82bd69',
          DEFAULT: '#61a146',
          dark: '#4c8435',
        },
        'AZUL': {
          light: '#b7a3cf',
          DEFAULT: '#7c5f9a',
          dark: '#554068',
        },

        // Dark
        'DARK-BG': {
          light: '#454545',
          DEFAULT: '#171717',
          dark: '#0b0b0b',
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

      },
    },
  },
  plugins: [
    addDynamicIconSelectors()
  ],
};

export default config;
