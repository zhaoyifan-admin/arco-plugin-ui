import DefaultTheme from 'vitepress/theme'
import './global.less' // global less
// import VueArcoUI from 'vue-arco-ui'
// import 'vue-arco-ui/css'
import VueArcoUI from '../../../dist/vue-arco-ui'
import '../../../dist/style.css'

export default {
  extends: DefaultTheme, // or ...DefaultTheme
  enhanceApp ({ app }) {
    app.use(VueArcoUI)
  }
}
