import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/harry-potter-character-cards/",
  server: {
    watch: {
      usePolling: true,
    },
    open: true,
  }
})