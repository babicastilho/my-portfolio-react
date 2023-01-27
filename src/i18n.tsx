import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all translation files
import en from "./translations/en/translationEN.json";
import br from "./translations/br/translationBR.json";


//---Using different namespaces
const resources = {
    en: {
        main: en,
    },
    br: {
        main: br,
    },
}
export const availableLanguages = Object.keys(resources)

i18next
.use(LanguageDetector)
.use(initReactI18next)
.init({
  resources,
  lng:"en", //default language
});

export default i18next;