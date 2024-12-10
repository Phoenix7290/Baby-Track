import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en.json';
import pt from '../locales/pt.json';
import es from '../locales/es.json';

const savedLanguage = localStorage.getItem('language');

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pt: { translation: pt },
    es: { translation: es }
  },
  lng: savedLanguage || navigator.language || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;