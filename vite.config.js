import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'www',
    emptyOutDir: true,
    rollupOptions: {
      external: ['/_vercel/insights/script.js'],
      input: {
        main: resolve(__dirname, 'index.html'),
        chapter1: resolve(__dirname, 'chapters/chapter1.html'),
        chapter2: resolve(__dirname, 'chapters/chapter2.html'),
        chapter3: resolve(__dirname, 'chapters/chapter3.html'),
        chapter4: resolve(__dirname, 'chapters/chapter4.html'),
        chapter5: resolve(__dirname, 'chapters/chapter5.html'),
        chapter6: resolve(__dirname, 'chapters/chapter6.html'),
        chapter7: resolve(__dirname, 'chapters/chapter7.html'),
        chapter8: resolve(__dirname, 'chapters/chapter8.html'),
        chapter9: resolve(__dirname, 'chapters/chapter9.html'),
        chapter10: resolve(__dirname, 'chapters/chapter10.html'),
        chapter11: resolve(__dirname, 'chapters/chapter11.html'),
        chapter12: resolve(__dirname, 'chapters/chapter12.html'),
        chapter13: resolve(__dirname, 'chapters/chapter13.html'),
        chapter14: resolve(__dirname, 'chapters/chapter14.html'),
        chapter15: resolve(__dirname, 'chapters/chapter15.html'),
        chapter16: resolve(__dirname, 'chapters/chapter16.html'),
        chapter17: resolve(__dirname, 'chapters/chapter17.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});