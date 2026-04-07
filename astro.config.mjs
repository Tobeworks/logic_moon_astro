import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
//import tailwind from "@tailwindcss/astro";
//import tailwind from '@astrojs/tailwind';
import tailwindcss from "@tailwindcss/vite";
import rehypeRaw from 'rehype-raw';

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  vite: {
    plugins: [tailwindcss()],
  },
  site:'https://logic-moon.de',
  markdown: {
    rehypePlugins: [rehypeRaw]
  }
});