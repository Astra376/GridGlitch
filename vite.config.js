import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'ace-builds': path.resolve(__dirname, 'node_modules/ace-builds')
    }
  },
  optimizeDeps: {
    include: ['ace-builds']
  }
})

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/vue-deploy/" : "/",
})