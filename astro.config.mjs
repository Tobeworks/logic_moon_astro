import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import rehypeRaw from 'rehype-raw';
import releases from './src/releases.js';

// Recomputed on every build, so /discography/latest always points at whatever the newest release is.
const latestRelease = [...releases].sort((a, b) => b.id - a.id)[0];

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
  },
  redirects: {
    '/discography/latest': `/discography/${latestRelease.slug}`,
  },
});