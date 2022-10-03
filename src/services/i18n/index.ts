/* SERVICE: I18N
   ========================================================================== */

import enTranslation from "./locales/en.json";
import { i18n } from "@dinhthienphuc/artemis";
import viTranslation from "./locales/vi.json";

i18n.initI18n({
  vi: viTranslation,
  en: enTranslation,
});
