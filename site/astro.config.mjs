// @ts-check
import { defineConfig } from 'astro/config';

// Static output only: no server runtime, no database, nothing to exploit at request time.
export default defineConfig({
  site: 'https://www.gc-c.co.jp',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // Never inline CSS so a strict `style-src 'self'` CSP works.
    inlineStylesheets: 'never',
  },
  devToolbar: { enabled: false },
  vite: {
    build: {
      // Never inline assets as data: URIs (fonts/images are served from 'self').
      assetsInlineLimit: 0,
    },
  },
});
