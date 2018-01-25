import Vue from 'vue'
import Router from 'vue-router'

import Todo from '@/components/Todo'
import Todo1 from '@/components/Todo1'

import todoChild from '@/components/TodoChild'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/rules/body')
    },
    {
      path: '/module',
      name: 'module',
      component: () => import('@/components/module/body'),
      children: [
        {
          path: '',
          component: () => import('@/components/module/info')
        },
        {
          path: 'dialog',
          component: () => import('@/components/module/reminder/dialog')
        },
        {
          path: 'button',
          component: () => import('@/components/module/reminder/button')
        }
      ]
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/todo1/:id',
      name: 'Todo1',
      component: Todo1,
      props: true,
      children: [
        {
          path: '',
          component: todoChild
        }
      ]
    }
  ]
})
