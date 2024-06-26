import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import global_es from '../translations/es/global.json';
import global_en from '../translations/en/global.json';

const savedLanguage = localStorage.getItem('language') || 'es';

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: savedLanguage, 
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
});

export default i18next;
