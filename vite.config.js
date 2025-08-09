import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/krantikari-duniya/', // IMPORTANT: change if repo name changes
  plugins: [
    react(),
    tailwindcss(),
  ],
})
