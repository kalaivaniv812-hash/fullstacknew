import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from'taillwindcss'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
