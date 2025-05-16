// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://beccastudio.com',
  trailingSlash: 'never', // Consistent URLs improve SEO
  build: {
    assets: 'assets', // Put all assets in a dedicated folder
    inlineStylesheets: 'auto' // Improves performance by inlining small CSS files
  },
  compressHTML: true, // Minify HTML for better performance
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Optimize CSS, JS and assets for better performance
      cssCodeSplit: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // Remove console logs in production
        }
      },
      rollupOptions: {
        output: {
          // Split chunks for better caching
          manualChunks: {
            'vendor': ['astro:assets']
          }
        }
      }
    }
  }
});