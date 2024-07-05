import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  output: "server",
  site: 'https://fedahumada.github.io',
  adapter: node({
    mode: "standalone"
  })
});