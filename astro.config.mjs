// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { SITE_URL } from './src/config/site-url.mjs';

const NOT_INDEXED = ['/gracias', '/404'];

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  // Nothing here needs server sessions; without this the adapter would require a KV binding.
  session: false,
  trailingSlash: 'never',
  build: { format: 'file' },
  // Static pages get their images transformed with sharp at build time; Cloudflare Images
  // would only add runtime cost for pages that never render on demand.
  adapter: cloudflare({ imageService: 'compile' }),
  integrations: [
    icon(),
    sitemap({
      filter: (page) => !NOT_INDEXED.some((path) => new URL(page).pathname.startsWith(path)),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
