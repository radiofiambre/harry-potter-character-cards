import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/modulo-3-evaluacion-final-radiofiambre/",
  server: {
    watch: {
      usePolling: true,
    },
    open: true,
  }
})