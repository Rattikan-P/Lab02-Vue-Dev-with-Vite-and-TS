import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    // เพิ่ม plugin ของ Vue เสมอ
    vue(),
    // ใช้ Spread Operator เพื่อเพิ่ม VueDevTools เข้าไปใน array
    // โดยถ้าอยู่ในโหมด 'development' จะเพิ่ม array ที่มี VueDevTools() เข้าไป
    // ถ้าไม่อยู่ในโหมด 'development' (เช่น 'production') จะเพิ่ม array ว่าง [] เข้าไปแทน
    ...(mode === 'development' ? [VueDevTools()] : []),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      // external: ['nprogress/nprogress.css']
    }
  }
}));