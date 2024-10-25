import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import cloudflare from '@astrojs/cloudflare'
import robotsTxt from 'astro-robots-txt'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), robotsTxt(), sitemap()],
  output: 'hybrid',
  site: 'https://signema.lol',
  adapter: cloudflare(),
})
