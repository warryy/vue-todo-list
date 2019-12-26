import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from './components/Index.vue'
import TodoList from './components/TodoList/TodoList.vue'
import TodoListAll from './components/TodoList/TodoListAll.vue'
import TodoListDone from './components/TodoList/todoListDone.vue'

const routes = [{
        path: '/todo',
        name: 'todolist',
        component: TodoList,
        children: [{
                path: 'all',
                component: TodoListAll
            },
            {
                path: 'done',
                component: TodoListDone
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