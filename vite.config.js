import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ This function receives the config context with 'command' and 'mode'
export default defineConfig(({ command }) => {
  return {
    base: command === 'build' ? '/nat-app/' : '/',
    plugins: [react()],
  }
})

