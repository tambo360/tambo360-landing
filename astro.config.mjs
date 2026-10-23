// @ts-check
import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { SITE_URL } from './src/config/site-url.mjs';

const NOT_INDEXED = ['/gracias', '/404'];

export default defineConfig({
    site: SITE_URL,
    output: 'static',
    // Nothing here needs server sessions, so no session storage has to be configured.
    session: false,
    trailingSlash: 'never',
    build: { format: 'file' },
    adapter: vercel(),
    // Read at request time on Vercel; optional so a build or preview without it still works and the form answers error.
    env: {
        schema: {
            RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
        },
    },
    integrations: [
        icon(),
        sitemap({
            filter: (page) => !NOT_INDEXED.some((path) => new URL(page).pathname.startsWith(path)),
        }),
    ],
    vite: { plugins: [tailwindcss()] },
});
