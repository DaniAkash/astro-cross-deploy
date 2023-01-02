import { defineConfig } from 'astro/config';
import ci from 'ci-info';

// https://astro.build/config
import netlify from '@astrojs/netlify/edge-functions';

// https://astro.build/config
import vercel from '@astrojs/vercel/edge';

const adapter = ci.NETLIFY ? netlify() : ci.VERCEL ? vercel(): undefined

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter,
});