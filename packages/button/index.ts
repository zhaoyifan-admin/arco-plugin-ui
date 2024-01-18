import type { App } from 'vue'
import ehButton from './eh-Button.vue'

// 使用install方法，在app.use挂载
ehButton.install = (app: App) => {
  app.component(ehButton.__name as string, ehButton)
}

export default ehButton;
