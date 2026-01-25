import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// Demo build config: builds the React docs/demo app for GitHub Pages
export default defineConfig({
  base: '/rk-design-system/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Allow the demo to import the local package during build
      '@syntaxsidekick/riadkilani-design-system': path.resolve(__dirname, './src/index.js'),
    },
  },
  build: {
    outDir: 'demo-dist',
    rollupOptions: {
      input: path.resolve(__dirname, './index.html'),
    },
  },
})
