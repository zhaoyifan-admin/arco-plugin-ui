import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/less/global.less'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

import VueArcoUI from '../packages'
import '../dist/style.css'

const app = createApp(App)
// window.rafTimeout = rafTimeout // 挂载到window上，全局可用，无需引入

app.use(router).use(VueArcoUI).use(ArcoVue, {
    // 用于改变使用组件时的前缀名称
    componentPrefix: 'arco'
}).mount('#app')