import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/GridGlitch/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'ace-builds': path.resolve(__dirname, 'node_modules/ace-builds')
    }
  },
  optimizeDeps: {
    include: ['ace-builds']
  },
  build: {
    rollupOptions: {
      input: '/src/main.js',
    },
  }
})