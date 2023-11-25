import type { App } from 'vue'
import ehTable from './eh-table.vue'

// 使用install方法，在app.use挂载
ehTable.install = (app: App): void => {
    app.component(ehTable.__name as string, ehTable)
}

export default ehTable
