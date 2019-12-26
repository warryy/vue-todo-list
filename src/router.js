import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from './components/Index.vue'
import TodoList from './components/TodoList/TodoList.vue'
import TodoListAll from './components/TodoList/TodoListAll.vue'

const routes = [{
        path: '/todo',
        name: 'todolist',
        component: TodoList,
        breadcrumbName: 'todo list',
        children: [{
            path: 'all',
            breadcrumbName: 'all',
            component: TodoListAll
        }]
    },
    {
        path: '/*',
        name: 'index',
        breadcrumbName: '首页',
        component: Index
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export {
    router,
    routes
}