import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/less/global.less';
import '@arco-design/web-vue/dist/arco.css';

import VueArcoUI from 'vue-arco-ui';
import 'vue-arco-ui/css';

const app = createApp(App);
// window.rafTimeout = rafTimeout // 挂载到window上，全局可用，无需引入

app.use(router).use(VueArcoUI).mount('#app')