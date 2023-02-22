import { defineConfig } from 'vite';
import path from 'path'
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
    fs: {
      allow: path.join(__dirname, '..')
    }
  },
  build: {
    target: 'esnext',
  },
});
