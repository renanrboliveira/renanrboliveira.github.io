import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://renanoliveira.com.br',
  integrations: [tailwind()],
  output: 'static',
});
