/* SERVICE: i18n
   ========================================================================== */

import {
  Trans,
  Translation,
  initReactI18next,
  useTranslation,
  withTranslation,
} from "react-i18next";

import enTranslation from "./locales/en.json";
import frTranslation from "./locales/fr.json";
import i18n from "i18next";
import viTranslation from "./locales/vi.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: enTranslation,
  vi: viTranslation,
  fr: frTranslation,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    fallbackLng: "en",
  });

// Export all from here to isolate service
export { i18n, Trans, Translation, useTranslation, withTranslation };
