import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { site } from './src/site.config';

export default defineConfig({
  site: site.url,
  integrations: [mdx()],
  output: 'static',
  compressHTML: true,
  devToolbar: { enabled: false },
});
