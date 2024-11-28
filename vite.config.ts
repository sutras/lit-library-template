import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  base: '/lit-library-template-docs/',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
})
