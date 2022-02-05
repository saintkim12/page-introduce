import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isBuild = command === 'build'
  return ({
    plugins: [vue()],
    
    // build only
    ...isBuild && {
      base: '/page-introduce/',
      build: {
        outDir: './.docs/docs',
      },
    },
  })
})
