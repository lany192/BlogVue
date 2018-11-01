import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Home from '../components/home/Home'
import ArticleTable from '../components/home/ArticleTable'
import Demo from '../components/Demo'
import UserTable from '../components/user/UserTable'
import About from '../components/About'
import Main from '../components/Main'
import Login from '../components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Main,
      children: [
        {
          path: '/',
          name: '第一个界面',
          component: Home
        },
        {
          path: 'SecondPart',
          name: '第二个界面',
          component: HelloWorld
        },
        {
          path: 'about',
          name: '关于界面',
          component: About
        },
        {
          path: 'article',
          name: '文章',
          component: ArticleTable
        }
      ]
    },
    {
      path: '/login',
      name: '登录界面',
      component: Login
    },
    {
      path: '/user',
      name: '用户相关',
      component: HelloWorld,
      children: [
        {
          path: '/',
          name: '第一个界面',
          component: UserTable
        },
        {
          path: 'demo',
          name: '第二个界面',
          component: Demo
        }
      ]
    }
  ]
})
