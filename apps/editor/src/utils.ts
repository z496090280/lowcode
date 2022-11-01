/*
 * @Author: lee
 * @Date: 2022-05-04 21:04:33
 * @LastEditTime: 2022-11-01 21:07:31
 */
import { IMaterial } from '../../../packages/shared/dist/index'

export function delay(ms: number) {
  return new Promise(res => setTimeout(res, ms))
}

export async function loadMaterial(material: IMaterial) {
  // 假异步
  await delay(2000);
  return loadScript(material.source)
}

export function loadMaterials(materials: IMaterial[]) {
  return Promise.all(materials.map(m => loadMaterial(m)))
}

export function loadScript(src: string) {

  return new Promise((resolve, reject) => {
    const sc = document.createElement('script')

    function onLoad() {
      resolve(src)
      sc.onload = sc.onerror = null
      
    }
    sc.onload = onLoad
    sc.onerror = reject
    sc.src = src
    sc.crossOrigin = 'anonymous'
    document.head.append(sc)

    loadCss(src.replace('.js', '.css'))
  })
}

export function loadCss(src: string) {
  return new Promise((resolve, reject) => {
    const sc = document.createElement('link')

    function onLoad() {
      resolve(src)
      sc.onload = sc.onerror = null
      
    }
    sc.rel = 'stylesheet'
    sc.onload = onLoad
    sc.onerror = reject
    sc.href = src
    sc.crossOrigin = 'anonymous'
    document.head.append(sc)
  })
}