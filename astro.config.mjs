// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Live URL (Cloudflare Workers, free plan).
  site: 'https://lanka-closely.hiran26personal.workers.dev',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  vite: process.env.LC_VITE_CACHE ? { cacheDir: process.env.LC_VITE_CACHE } : {},
});
