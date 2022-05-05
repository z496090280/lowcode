import { Project, IMaterial } from '@lowcode1024/shared'
import { createApp, version } from 'vue'
import App from './App.vue'
import { loadScript } from './utils'
import './main.less'
import { router } from './router'

// mock接口信息
const materialList: IMaterial[] = [
  {
    id: 1,
    type: 'component',
    category: {
      name: '基础组件'
    },
    source: '/lc-image.1.0.0.umd.js',
    version: '0.0.1',
    name: 'LcImage',
    title: '图片',
    thumbnail: '',
    data: [
      {
        source: '/lc-image.1.0.0.umd.js',
        version: '0.0.1'
      }
    ]
  }
]

Promise.all(materialList.map(m => loadScript(m.source))).then(() => {
  const app = createApp(App)

  materialList.forEach((m) => {
    const { render } = (window as any)[m.name]
    app.component(m.name, render)
  })
  app.use(router)
  app.mount('#app')
})


