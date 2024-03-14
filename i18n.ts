import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './translations/en.json';
import fr from './translations/fr.json';
import languageDetector from './languageDetector';
import Backend from 'i18next-http-backend';

i18n
  .use(languageDetector)
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: {translation: en},
      fr: {translation: fr},
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
