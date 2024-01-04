import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { defaultLocale, locales } from "./i18n";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://maxgaindev.github.io",
  i18n: {
    defaultLocale: defaultLocale,
    locales,
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
