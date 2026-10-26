#!/usr/bin/env node
/**
 * Favicon Generator
 * Generates all favicon sizes and a webmanifest from a single source file.
 *
 * Usage:
 *   node scripts/generate-favicons.js [source]
 *
 * source defaults to public/favicon.svg
 *
 * Output goes to public/ — commit the results, run only when the logo changes.
 */

import { favicons } from 'favicons';
import { writeFileSync, mkdirSync } from 'fs';
import { join, resolve } from 'path';

const SOURCE = process.argv[2] ?? 'public/favicon.svg';
const OUTPUT = 'public';

const config = {
  path:             '/',
  appName:        'Logic Moon',
  appShortName:   'Logic Moon',
  appDescription:  'Cinematic ambient, drone and neoclassical music by Tobias Lorsbach.',
  background:       '#f4f1e9',
  theme_color:      '#141312',
  lang:             'en',
  icons: {
    android:         true,
    appleIcon:       true,
    appleStartup:    false,
    favicons:        true,
    windows:         false,
    yandex:          false,
  },
};

console.log(`Generating favicons from: ${resolve(SOURCE)}`);

const response = await favicons(SOURCE, config);

mkdirSync(OUTPUT, { recursive: true });

for (const image of response.images) {
  writeFileSync(join(OUTPUT, image.name), image.contents);
  console.log(`  ✓ ${image.name}`);
}

for (const file of response.files) {
  writeFileSync(join(OUTPUT, file.name), file.contents);
  console.log(`  ✓ ${file.name}`);
}

// Print the <head> tags to paste into Base.astro
console.log('\n--- Head tags ---\n');
for (const tag of response.html) {
  console.log(tag);
}
console.log('\n-----------------\n');
console.log('Done. Commit the files in public/ and update Base.astro with the tags above.');
