import directive from '@/directives'
import plugin from '@/plugins'
import router from '@/router'
import '@/styles/all.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import 'vxe-table/lib/style.css'
import VXETable, { VxeTable } from 'vxe-table'
function bootstrap() {
  const app = createApp(App)
  app.use(createPinia())
  app.use(VXETable)
  app.use(router)
  app.mount('#app')
}
bootstrap()
