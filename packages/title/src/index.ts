/*
 * @Author: lee
 * @Date: 2022-05-04 20:03:05
 * @LastEditTime: 2022-10-30 21:06:00
 */
import App from './index.vue'
import './index.css'

export default {
  render: App,
  editorProps: {
    title: {
      type: 'string',
      defaultValue: 'Hello World'
    },
    color: {
      type: 'color',
      defaultValue: '#333'
    },
    size: {
      type: 'number',
      defaultValue: 16
    },
  }
}