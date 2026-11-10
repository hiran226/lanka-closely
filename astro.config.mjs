// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Updated to the live URL after the first Cloudflare deploy.
  site: 'https://lanka-closely.workers.dev',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  vite: process.env.LC_VITE_CACHE ? { cacheDir: process.env.LC_VITE_CACHE } : {},
});
