import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), eslint()],
    define: {
        'process.env': process.env,
    },
    server: {
        host: true,
    },
    base: './',
    resolve: {
        alias: [
          { find: '@', replacement: path.resolve(__dirname, 'src') },
        ],
      },
});
