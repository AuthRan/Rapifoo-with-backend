import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.cjs",  // Ensure Vite uses the correct PostCSS config
  }
});
