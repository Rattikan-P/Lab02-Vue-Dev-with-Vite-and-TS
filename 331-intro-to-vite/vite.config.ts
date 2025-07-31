import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ mode }) => {
  const plugins = [
    vue(),
  ];

  if (mode === 'development') {
    plugins.push(VueDevTools());
  }

  return {
    base: '/',
    plugins: plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      rollupOptions: {
        external: ['nprogress/nprogress.css']
      }
    }
  };
});