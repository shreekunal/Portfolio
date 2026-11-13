import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.BASE_PATH || (process.env.GITHUB_ACTIONS ? '/Portfolio/' : '/'),
  plugins: [react()],
  server: {
    port: 3000,
    open: false,
  },
});
