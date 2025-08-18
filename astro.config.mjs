// @ts-check
import { defineConfig } from 'astro/config';

import assert from 'node:assert/strict';
import sitemap from '@astrojs/sitemap';
import lottie from 'astro-integration-lottie';

import node from '@astrojs/node';

assert(process.env.ORIGIN, 'ORIGIN environment variable is required');

// https://astro.build/config
export default defineConfig({
  site: process.env.ORIGIN,
  integrations: [sitemap(), lottie()],

  image: {
    responsiveStyles: true,
  },

  redirects: {
    '/2025-06-deck':
      'https://www.figma.com/deck/LePYMT44A7Tfq4k0wGwG1K/Sokkel---Pitch-Deck--Presentation-?node-id=14-649&viewport=-130%2C-138%2C0.61&t=ELDthSvGVH51kDVR-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
  },

  adapter: node({
    mode: 'standalone',
  }),
});
