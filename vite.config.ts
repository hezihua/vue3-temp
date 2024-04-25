import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@utils': resolve(__dirname, '../../packages/utils/src'),
      '@components': resolve(__dirname, '../../packages/components/src')
    }
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      '^/api': {
        target: 'http://192.168.1.151:8082', // testing
        // target: 'http://192.168.1.222:8082', // huangdaxue
        // target: 'http://172.16.101.231:8082', // testing
        changeOrigin: true,
        ws: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '^/files': {
        target: 'http://192.168.1.151:8183',
        changeOrigin: true,
        ws: false
      }
    }
  },
  // base: '/h5',
  build: {
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        happyBaby: resolve(__dirname, 'happyBaby/index.html'),
        evaluation: resolve(__dirname, 'evaluation/index.html')
      },
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]'
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
