import { createApp, version } from 'vue'
import App from './App.vue'
import { loadMaterials } from './utils'
import './main.less'
import { router } from './router'
import { materialList, getMaterialRenderFun } from './data'
import { createPinia } from 'pinia'

const pinia = createPinia()

loadMaterials(materialList).then(() => {
  const app = createApp(App)

  materialList.forEach((m) => {
    const renderFun = getMaterialRenderFun(m)
    app.component(m.name, renderFun)
  })
  app.use(router)
  app.use(pinia)
  app.mount('#app')
})
