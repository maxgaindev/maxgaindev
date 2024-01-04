import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getLanguageName, type Locale } from "i18n";

interface Props {
  locales: readonly Locale[];
}

const LanguageSelector: React.FC<Props> = ({ locales }) => {
  const savedLang = localStorage.getItem("lang") as Locale;

  const index = locales.indexOf(
    window.location.pathname.replaceAll("/", "") as Locale
  );
  const indexOfSavedLang = savedLang ? locales.indexOf(savedLang) : -1;

  const [selectedLocale, setSelectedLocale] = useState(
    locales[
      index !== -1 ? index : indexOfSavedLang !== -1 ? indexOfSavedLang : 0
    ]
  );

  const handleChange = (lang: Locale) => {
    setSelectedLocale(lang);
    localStorage.setItem("lang", lang);
    window.location.pathname = lang;
  };

  return (
    <div className="flex flex-row align-baseline gap-1">
      <svg
        className="w-5"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M239.15,212.42l-56-112a8,8,0,0,0-14.31,0l-21.71,43.43A88,88,0,0,1,100,126.93,103.65,103.65,0,0,0,127.69,64H152a8,8,0,0,0,0-16H96V32a8,8,0,0,0-16,0V48H24a8,8,0,0,0,0,16h87.63A87.76,87.76,0,0,1,88,116.35a87.74,87.74,0,0,1-19-31,8,8,0,1,0-15.08,5.34A103.63,103.63,0,0,0,76,127a87.55,87.55,0,0,1-52,17,8,8,0,0,0,0,16,103.46,103.46,0,0,0,64-22.08,104.18,104.18,0,0,0,51.44,21.31l-26.6,53.19a8,8,0,0,0,14.31,7.16L140.94,192h70.11l13.79,27.58A8,8,0,0,0,232,224a8,8,0,0,0,7.15-11.58ZM148.94,176,176,121.89,203.05,176Z"></path>
      </svg>
      <Select onValueChange={handleChange} defaultValue={selectedLocale}>
        <SelectTrigger
          title="Language selector"
          className="bg-none  border-none p-2"
        >
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent className="bg-palette-dark text-palette-white">
          {locales.map((locale) => (
            <SelectItem
              title={"Show content in " + locale}
              key={locale}
              value={locale}
            >
              {getLanguageName(locale)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
