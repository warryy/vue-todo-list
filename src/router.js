import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from './components/Index.vue'
import TodoListIndex from './components/TodoList/TodoListIndex.vue'
import TodoListAll from './components/TodoList/TodoListAll.vue'
import TodoListDone from './components/TodoList/TodoListDone.vue'
import TodoListDoing from './components/TodoList/TodoListDoing.vue'

const routes = [{
        path: '/todo',
        name: 'todolist',
        component: TodoListIndex,
        children: [{
                path: 'all',
                component: TodoListAll
            },
            {
                path: 'done',
                component: TodoListDone
            },
            {
                path: 'doing',
                component: TodoListDoing
            },
        ]
    },
    {
        path: '/*',
        name: 'index',
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