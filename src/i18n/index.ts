import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import sr from './locales/sr.json';
import srCyrl from './locales/sr-Cyrl.json';
import de from './locales/de.json';
import it from './locales/it.json';
import es from './locales/es.json';
import pt from './locales/pt.json';

const resources = {
  en: { translation: en },
  sr: { translation: sr },
  'sr-Cyrl': { translation: srCyrl },
  de: { translation: de },
  it: { translation: it },
  es: { translation: es },
  pt: { translation: pt },
};

const languageMapping: Record<string, string> = {
  'sr-Cyrl': 'sr-Cyrl',
  'sr-Latn': 'sr',
  'sr': 'sr',
  'de': 'de',
  'de-DE': 'de',
  'de-AT': 'de',
  'de-CH': 'de',
  'it': 'it',
  'it-IT': 'it',
  'es': 'es',
  'es-ES': 'es',
  'es-MX': 'es',
  'es-AR': 'es',
  'pt': 'pt',
  'pt-BR': 'pt',
  'pt-PT': 'pt',
  'en': 'en',
  'en-US': 'en',
  'en-GB': 'en',
  'en-AU': 'en',
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'sr', 'sr-Cyrl', 'de', 'it', 'es', 'pt'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      convertDetectedLanguage: (lng: string) => {
        if (languageMapping[lng]) {
          return languageMapping[lng];
        }
        const baseLng = lng.split('-')[0];
        return languageMapping[baseLng] || 'en';
      },
    },
  });

export default i18n;