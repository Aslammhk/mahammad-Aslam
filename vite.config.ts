import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    define: {
      // Safely expose the API_KEY. 
      // We fallback to '' to prevent "undefined" syntax errors in the bundle if the key is missing.
      'process.env.API_KEY': JSON.stringify(env.API_KEY || '')
    }
  }
})