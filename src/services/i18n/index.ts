/* SERVICE: I18N
   ========================================================================== */

import enTranslation from "./locales/en.json";
import { i18n } from "@dinhthienphuc/artemis";
import viTranslation from "./locales/vi.json";

const { initI18n, Trans, Translation, useTranslation, withTranslation } = i18n;

initI18n({
  vi: viTranslation,
  en: enTranslation,
});

export { Trans, Translation, useTranslation, withTranslation };
