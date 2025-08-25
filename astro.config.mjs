// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import lottie from 'astro-integration-lottie';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://sokkel.io',
  integrations: [sitemap(), lottie()],

  image: {
    responsiveStyles: true,
  },

  redirects: {
    '/security': '/terms/security',
    '/privacy': '/terms/privacy',
  },

  adapter: node({
    mode: 'standalone',
  }),
});
