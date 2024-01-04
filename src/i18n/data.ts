import { es } from "./es";
import { en } from "./en";
import { defaultLocale, type Locale } from "i18n";

export interface LocaleData {
  weAre: string;
  weHelpYouBuildYour: string;
  onlineCasinoSolution: string;
  offlineCasinoSolution: string;
  sportsBettingSolution: string;
  lotterySolution: string;
  title: string;
  descriptionInParagraphs: string[];
  perk1: {
    title: string;
    descriptionInParagraphs: string[];
  };
  perk2: {
    title: string;
    descriptionInParagraphs: string[];
  };
  perk3: {
    title: string;
    descriptionInParagraphs: string[];
  };
  headquartersDescriptionInParagraphs: string[];
  providingSupportFor: string;
  service1: {
    title: string;
    descriptionInParagraphs: string[];
  };
  service2: {
    title: string;
    descriptionInParagraphs: string[];
  };
  trustedBy: string;
  vatCodeLabel: string;
  vatCode: string;
  address: string;
  zip: string;
}

export const Locales: Record<Locale, LocaleData> = {
  es,
  en,
};

export function getI18N(locale: Locale): LocaleData {
  return Locales[locale] ?? Locales[defaultLocale];
}
