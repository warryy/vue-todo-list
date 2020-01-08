import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        todoList: {}
    },
    getters: {
        todoListAll: state => {
            let _todoList = state.todoList;
            return _todoList;
        },
        todoListDone: state => {
            var _obj = {},
                _todoList = state.todoList;
            for (let attr in _todoList) {
                _todoList[attr].done && (_obj[attr] = _todoList[attr])
            }
            return _obj;
        },
        todoListDoing: state => {
            let _obj = {},
                _todoList = state.todoList;
            for (let attr in _todoList) {
                !_todoList[attr].done && (_obj[attr] = _todoList[attr])
            }
            return _obj;
        },
    },
    mutations: {
        addListItem: (state, text) => {
            let r = Math.random();
            let _ = {
                done: false,
                text
            }
            Vue.set(state.todoList, parseInt(r * 1000000), _);
        },
        deleteListItem: (state, id) => {
            Vue.delete(state.todoList, id);
        },
        toggleDone: (state, {
            id,
            done
        }) => {
            state.todoList[id].done = done;
        }
    }
})

export default store