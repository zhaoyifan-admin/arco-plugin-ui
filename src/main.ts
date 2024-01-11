import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/less/global.less';
import '@arco-themes/vue-eh-arco-plugin/index.less';
// import '@arco-design/web-vue/dist/arco.css';

import VueArcoUI from '../packages'
// import VueArcoUI from 'vue-arco-ui';
// import 'vue-arco-ui/css';
import '../dist/style.css'
import i18n from "../packages/utils/local";

const app = createApp(App);
// window.rafTimeout = rafTimeout // 挂载到window上，全局可用，无需引入

app.use(router).use(VueArcoUI).use(i18n).mount('#app')