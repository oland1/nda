import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
  fallbackLng: 'en',
  supportedLngs: ['en', 'ua'],
  interpolation: {escapeValue: false},
  resources: {
    en: {
      translation: {
        "open_game": "Open the game",
        "download_game": "Download Casino",
        "play_anywhere": "Play Min anywhere, anytime",
        "install_app": "Install App",
        "follow_us": "Us on social media",
        "age_restriction": "18+ Only",
        "casino_legal": "Casino is certified by the"
      }
    },
    ua: {
      translation: {
        "open_game": "Відкрити гру",
        "download_game": "Завантажити Casino",
        "play_anywhere": "Грайте в Min будь-де, будь-коли",
        "install_app": "Встановити додаток",
        "follow_us": "Ми в соціальних мережах",
        "age_restriction": "Тільки 18+",
        "casino_legal": "Казіно сертифіковано"
      }
    },
  }
});