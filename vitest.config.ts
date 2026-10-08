import { defineConfig } from 'vitest/config';

// Plain Vitest config: the tests cover framework-free logic in src/lib, so the Astro and Cloudflare plugins stay out.
export default defineConfig({
  test: {
    include: ['src/**/*.test.ts'],
    environment: 'node',
  },
});
