// node js 코드로 되어있어서 기본 내보내기가 안됨 export default 그래서 전부를 Vue로 받아줘야됨
// import * as Vue from 'vue'
// const app = Vue.createApp(App)
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
