import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Preload the hashed font files used above the fold to avoid a late font swap
const preloadFonts = (names: string[]): Plugin => ({
  name: 'preload-fonts',
  apply: 'build',
  transformIndexHtml: {
    order: 'post',
    handler: (_html, ctx) =>
      Object.keys(ctx.bundle ?? {})
        .filter((file) => file.endsWith('.woff2') && names.some((name) => file.includes(name)))
        .map((file) => ({
          tag: 'link',
          attrs: { rel: 'preload', href: `/${file}`, as: 'font', type: 'font/woff2', crossorigin: '' },
          injectTo: 'head' as const,
        })),
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), preloadFonts(['SFProDisplay-Regular', 'SFProDisplay-Medium'])],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/app/styles/variables.scss" as *;\n@use "@/app/styles/mixins.scss" as *;\n`,
      },
    },
  },
  server: {
    port: 3000,
  },
})

