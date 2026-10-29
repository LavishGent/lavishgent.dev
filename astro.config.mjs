// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Flip to true once lavishgent.dev DNS and the Pages custom domain are set up.
const useCustomDomain = false;

export default defineConfig({
  site: useCustomDomain ? 'https://lavishgent.dev' : 'https://lavishgent.github.io',
  base: useCustomDomain ? '/' : '/lavishgent.dev',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-default' },
    },
  },
});
