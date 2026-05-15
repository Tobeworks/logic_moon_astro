#!/usr/bin/env node
/**
 * Optimizes all cover images in public/images/covers/
 * Converts JPG/PNG to WebP, resizes to max 600px (album covers are displayed small)
 * Originals are backed up to public/images/covers/_originals/
 * Run: node scripts/optimize-covers.mjs
 */

import sharp from 'sharp';
import { readdir, mkdir, copyFile, rename } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const COVERS_DIR = 'public/images/covers';
const BACKUP_DIR = 'public/images/covers/_originals';
const MAX_SIZE = 600;   // px — covers are displayed max ~300px, 600 = 2x retina
const QUALITY = 82;     // webp quality — good tradeoff between size and sharpness

const SUPPORTED = ['.jpg', '.jpeg', '.png', '.webp'];

async function run() {
  await mkdir(BACKUP_DIR, { recursive: true });

  const files = await readdir(COVERS_DIR);
  const images = files.filter(f => SUPPORTED.includes(path.extname(f).toLowerCase()));

  console.log(`Found ${images.length} images to optimize\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of images) {
    const src = path.join(COVERS_DIR, file);
    const ext = path.extname(file).toLowerCase();
    const base = path.basename(file, ext);
    const dest = path.join(COVERS_DIR, base + '.webp');
    const backup = path.join(BACKUP_DIR, file);

    try {
      const meta = await sharp(src).metadata();
      const beforeSize = (await import('fs')).statSync(src).size;
      totalBefore += beforeSize;

      // Backup original
      await copyFile(src, backup);

      // Resize + convert to WebP
      await sharp(src)
        .resize(MAX_SIZE, MAX_SIZE, {
          fit: 'inside',       // never upscale, keep aspect ratio
          withoutEnlargement: true,
        })
        .webp({ quality: QUALITY })
        .toFile(dest);

      const afterSize = (await import('fs')).statSync(dest).size;
      totalAfter += afterSize;

      const saved = Math.round((1 - afterSize / beforeSize) * 100);
      const beforeKb = Math.round(beforeSize / 1024);
      const afterKb = Math.round(afterSize / 1024);

      // If the original was already webp, remove the original (replaced in-place)
      if (ext === '.webp') {
        if (dest !== src) {
          await (await import('fs/promises')).unlink(src);
        }
      } else {
        // Keep the original name as webp, remove old jpg/png
        await (await import('fs/promises')).unlink(src);
      }

      console.log(`✓ ${file.padEnd(45)} ${String(beforeKb + 'KB').padStart(6)} → ${String(afterKb + 'KB').padStart(6)}  (-${saved}%)`);
    } catch (err) {
      console.error(`✗ ${file}: ${err.message}`);
    }
  }

  const totalSavedKb = Math.round((totalBefore - totalAfter) / 1024);
  const totalSavedPct = Math.round((1 - totalAfter / totalBefore) * 100);

  console.log(`\n${'─'.repeat(70)}`);
  console.log(`Total saved: ${totalSavedKb}KB (${totalSavedPct}% reduction)`);
  console.log(`Originals backed up to: ${BACKUP_DIR}`);
  console.log(`\n⚠️  Update any hardcoded .jpg/.jpeg/.png references to .webp in your components!`);
}

run().catch(console.error);
