import polyglotI18nProvider from "ra-i18n-polyglot";
import englishMessages from "./i8n/en";

export default polyglotI18nProvider(
  (locale) => {
    // Always fallback on english
    return englishMessages;
  },
  "en",
  [
    { locale: "en", name: "English" },
    { locale: "fr", name: "Français" },
  ]
);
