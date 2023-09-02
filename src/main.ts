import directive from '@/directives'
import plugin from '@/plugins'
import router from '@/router'
import _package from './package'
import '@/myStyles/global.scss'
import '@/styles/all.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

function bootstrap() {
  const app = createApp(App)
  app.use(createPinia())
  app.use(router)
  app.use(_package)
  plugin(app)
  directive(app)
  app.mount('#app')
}

bootstrap()
