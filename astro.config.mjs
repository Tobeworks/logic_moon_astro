import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwind from "@tailwindcss/astro";
import rehypeRaw from 'rehype-raw';

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind()],
  markdown: {
    rehypePlugins: [rehypeRaw]
  }
});