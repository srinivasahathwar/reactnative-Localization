import I18n from 'react-native-i18n';
import * as RNLocalize from 'react-native-localize';

// Define supported languages and translations
const supportedLanguages = ['en', 'fr']; // List of supported languages
const translations:any = {
  en: require('./translations/en.json'),
  fr: require('./translations/fr.json'),
};

// Set up fallback language
I18n.fallbacks = true;
I18n.defaultLocale = 'en'; // Set English as the fallback language

// Initialize language
const deviceLanguage = RNLocalize.getLocales()[0].languageCode;
const selectedLanguage = supportedLanguages.includes(deviceLanguage) ? deviceLanguage : 'en';
I18n.locale = selectedLanguage;

// Load translations for the selected language
I18n.translations = {
  [selectedLanguage]: translations[selectedLanguage],
};

export default I18n;