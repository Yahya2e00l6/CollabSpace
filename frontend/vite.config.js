import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Add this section below
  assetsInclude: ['**/*.lottie'], 
})