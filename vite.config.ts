import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
export default defineConfig({
    base: "./",
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src') // 设置别名
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                // 关闭编译时 字符编码 报错问题
                charset: false,
            },
        },
    },
})