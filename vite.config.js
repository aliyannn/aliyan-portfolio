import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { visualizer } from 'rollup-plugin-visualizer';
import { prerender } from 'vite-plugin-prerender';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    visualizer(),
    prerender({
      routes: ['/', '/about', '/projects', '/contact'],
    }),
  ],
  base: '/',
});
