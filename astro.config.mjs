// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Live URL (Cloudflare Workers, free plan).
  site: 'https://lanka-closely.hiran26personal.workers.dev',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  vite: process.env.LC_VITE_CACHE ? { cacheDir: process.env.LC_VITE_CACHE } : {},
});
