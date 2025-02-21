import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export const apiUrl = `${window.location.protocol}//${window.location.hostname}`;


i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pl',
    supportedLngs: ['pl', 'uk', 'ru'],
    backend: {
      loadPath: `${apiUrl}/translations?language={{lng}}`,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
