import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid',
  adapter: netlify(),
  i18n : {
    defaultLocale: 'en',
    locales : ['en','es'],
    routing : {
      prefixDefaultLocale : false
    }
  }
});