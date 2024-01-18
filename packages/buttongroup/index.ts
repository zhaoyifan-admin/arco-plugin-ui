import type { App } from 'vue'
import ehButtonGroup from './eh-Button-Group.vue'

// 使用install方法，在app.use挂载
ehButtonGroup.install = (app: App) => {
  app.component(ehButtonGroup.__name as string, ehButtonGroup)
}

export default ehButtonGroup;
