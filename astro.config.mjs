import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
//import tailwind from "@tailwindcss/astro";
import tailwind from '@astrojs/tailwind';
import rehypeRaw from 'rehype-raw';

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind()],
  site:'https://logic-moon.de',
  markdown: {
    rehypePlugins: [rehypeRaw]
  }
});