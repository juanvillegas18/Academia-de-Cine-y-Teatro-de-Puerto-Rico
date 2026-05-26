import { defineConfig } from 'vite'
import react from '@vitejs/react-swc' // or whatever framework plugin you are using

export default defineConfig({
  plugins: [react()],
  base: '/Academia-de-Cine-y-Teatro-de-Puerto-Rico/', // <- ADD THIS LINE
})
