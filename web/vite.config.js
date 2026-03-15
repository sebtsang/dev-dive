import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import path from 'path'

export default defineConfig({
  plugins: [preact()],
  build: {
    outDir: path.resolve(__dirname, '../internal/server/dist'),
    emptyOutDir: true,
  },
})
