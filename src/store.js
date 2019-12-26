import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        todoList: [{
            done: false,
            text: '哈哈哈啊'
        }]
    },
    getters: {
        todoListAll: state => {
            return state.todoList;
        },
        todoListDone: state => {
            return state.todoList.filter(todo => todo.done)
        }
    },
    mutations: {
        addOneLine: state => {
            let _ = {
                done: Math.random() < 0.5 ? true : false,
                text: '呜哈哈' + parseInt(Math.random() * 100)
            }
            state.todoList.push(_)
        },
        removeOneLine: state => {
            state.todoList.pop();
        }
    }
})

export default store