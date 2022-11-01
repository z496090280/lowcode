/*
 * @Author: lee
 * @Date: 2022-10-30 20:36:32
 * @LastEditTime: 2022-10-30 20:58:37
 */
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import * as pkg from './package.json'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'LcTitle',
      fileName: `lc-title.${pkg.version}`,
      formats: ['umd']
    }
  }
})