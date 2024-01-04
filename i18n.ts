export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: (typeof locales)[number] = "es";

export const languageNames = {
  es: "Español",
  en: "English",
};

export function getLanguageName(locale: string): string {
  return languageNames[locale as Locale] ?? languageNames[defaultLocale];
}
