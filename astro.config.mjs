import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import rehypeRaw from 'rehype-raw';

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://logic-moon.de',
  build: {
    inlineStylesheets: 'always',
  },
  markdown: {
    rehypePlugins: [rehypeRaw]
  }
});