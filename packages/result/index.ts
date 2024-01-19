import type { App } from 'vue'
import ehResult from './eh-Result.vue'

// 使用install方法，在app.use挂载
ehResult.install = (app: App): void => {
  app.component(ehResult.__name as string, ehResult)
}

export default ehResult
