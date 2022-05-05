import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus';
import '../node_modules/element-plus/lib/theme-chalk/index.css';
import "./assets/font/iconfont.css"
import "@/styles/index.scss"
import './until/flexible.js'
import { key, store } from './store';

const app = createApp(App)

app.use(ElementPlus).use(router).use(store, key)

app.mount('#app')