import DefaultTheme from 'vitepress/theme'
import './global.less' // global less
import ArcoVue from '@arco-design/web-vue';
// import VueArcoUI from 'vue-arco-ui'
import VueArcoUI from '../../../dist/vue-arco-ui'
import '@arco-design/web-vue/dist/arco.css';
// import 'vue-arco-ui/css'
import '../../../dist/style.css'

export default {
  extends: DefaultTheme, // or ...DefaultTheme
  enhanceApp ({ app }) {
    app.use(ArcoVue)
    app.use(VueArcoUI)
  }
}
