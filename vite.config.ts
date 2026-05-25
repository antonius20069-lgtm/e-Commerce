import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // 1. استيراد مكتبة path

export default defineConfig({
  base: '/e-Commerce/',
  plugins: [react()],
  resolve: {
    alias: {
      // 2. تحديد أن علامة @ تشير لمجلد src
      "@": path.resolve(__dirname, "./src"),
    },
  },
})