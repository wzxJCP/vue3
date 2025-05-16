import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/global.css'
import ElementPlus from 'element-plus';
// 引入 Element Plus 的默认样式
import 'element-plus/dist/index.css';
// 引入 Element Plus 的中文语言包
import zhCn from 'element-plus/es/locale/lang/zh-cn';
// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)

app.use(router)
app.use(ElementPlus,{
    locale: zhCn,
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
