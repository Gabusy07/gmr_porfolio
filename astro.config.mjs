import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://gmr_porfolio.github.io',
  output: 'static' // para cargas de paginas tras llamadas a servidor
});