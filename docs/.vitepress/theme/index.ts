import DefaultTheme from 'vitepress/theme'
import './global.less' // global less
import ArcoVue from '@arco-design/web-vue';
// import VueArcoUI from 'vue-arco-ui'
// import 'vue-arco-ui/css'
import VueArcoUI from '../../../dist/vue-arco-ui.js'
import '../../../dist/style.css'
import '@arco-design/web-vue/dist/arco.css';

export default {
  extends: DefaultTheme, // or ...DefaultTheme
  enhanceApp ({ app }) {
    app.use(ArcoVue, {
      // 用于改变使用组件时的前缀名称
      componentPrefix: 'arco'
    })
    app.use(VueArcoUI)
  }
}
