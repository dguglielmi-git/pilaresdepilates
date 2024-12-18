import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { TRANSLATION_EN } from './en/translations';
import { TRANSLATION_AR } from './ar/translations';

export const languages = {
  resources: {
    en: {
      text: 'English',
      flag: 'gb',
      lang: 'en',
      translation: TRANSLATION_EN,
    },
    es: {
      text: 'Español',
      flag: 'ar',
      lang: 'es',
      translation: TRANSLATION_AR,
    },
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init(languages);
i18n.changeLanguage('es');
export default i18n;
