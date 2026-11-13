import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@abc-design/charts': resolve(__dirname, '../../packages/charts/src/index.ts'),
      '@abc-design/core': resolve(__dirname, '../../packages/core/src/index.ts'),
      '@abc-design/react/styles.css': resolve(__dirname, '../../packages/react/src/styles.css'),
      '@abc-design/react': resolve(__dirname, '../../packages/react/src/index.ts'),
      '@abc-design/tokens/styles/index.css': resolve(
        __dirname,
        '../../packages/tokens/src/styles/index.css'
      ),
      '@abc-design/tokens': resolve(__dirname, '../../packages/tokens/src/index.ts'),
    },
  },
})
