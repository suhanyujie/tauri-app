import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    const root = process.cwd()

    return {
      // dev 独有配置
      root,

      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
        }
      }
    }
  } else {
    // command === 'build'
    return {
      // build 独有配置
    }
  }
})
