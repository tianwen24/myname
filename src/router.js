// 导入了 vue
import Vue from 'vue'
// 导入了第三方包 vue-router
import Router from 'vue-router'
// 导入 useElement
import UseElement from './views/useElement'
// 导入 login & home 文件   用@符号表示../等
import login from '@/views/login'
import home from '@/views/home'

// 使用路由
Vue.use(Router)

// 创建并且导出一个 Router 对象
export default new Router({
  // 设置路由选项
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/useElement',
      name: 'useElement',
      component: UseElement
    }
  ]
})
