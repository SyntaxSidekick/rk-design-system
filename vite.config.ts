import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Allow the demo to import the local package name
      '@syntaxsidekick/riadkilani-design-system': path.resolve(__dirname, './src/index.js'),
    },
  },
  build: {
    rollupOptions: {
      preserveEntrySignatures: 'strict',
      input: {
        // Main bundle
        index: path.resolve(__dirname, './src/index.js'),
        // Component-driven entries (code-split)
        'components/tabs': path.resolve(__dirname, './src/components/tabs.js'),
        'components/accordion': path.resolve(__dirname, './src/components/accordion.js'),
        'components/dropdown': path.resolve(__dirname, './src/components/dropdown.js'),
        'components/tooltip': path.resolve(__dirname, './src/components/tooltip.js'),
        'components/modal': path.resolve(__dirname, './src/components/modal.js'),
        'components/toast': path.resolve(__dirname, './src/components/toast.js'),
      },
      output: [
        {
          dir: path.resolve(__dirname, './dist'),
          format: 'es',
          entryFileNames: (chunk) => `${chunk.name}.mjs`,
          exports: 'named',
          assetFileNames: (assetInfo) => assetInfo.name && assetInfo.name.endsWith('.css')
            ? 'riadkilani-design-system.css'
            : 'assets/[name]-[hash][extname]',
        },
        {
          dir: path.resolve(__dirname, './dist'),
          format: 'cjs',
          entryFileNames: (chunk) => `${chunk.name}.cjs`,
          exports: 'named',
          assetFileNames: (assetInfo) => assetInfo.name && assetInfo.name.endsWith('.css')
            ? 'riadkilani-design-system.css'
            : 'assets/[name]-[hash][extname]',
        },
      ],
    },
  },
})
