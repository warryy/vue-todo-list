const VUETODOLIST = 'vuetodolist';

const todoStorage = {
    fetch: function () {
        let _todos = JSON.parse(localStorage.getItem(VUETODOLIST));
        if (!_todos) {
            _todos = [];
        }
        return _todos;
    },
    save: function (todos) {
        localStorage.setItem(VUETODOLIST, JSON.stringify(todos));
    }
}

const filterFn = {
    nodone: function (data) {
        return data.filter((item) => {
            return !item.done
        });
    },
    all: function (data) {
        return data;
    },
    done: function (data) {
        return data.filter((item) => {
            return item.done
        });
    }
}

var APP = new Vue({
    data: function data() {
        return {
            title: 'todo',
            // 是否点击了全部完成按钮
            // allDoneFlag: false,
            todoList: todoStorage.fetch(),
            todoVal: '',
            filterCatelog: 'all',
            // 正在编辑的条目
            editingItemIdx: -1,
            // 正在编辑条目的旧值
            oldTodoText: ''
        }
    },
    methods: {
        deleteItem: function (e) {
            this.todoList.splice(e.target.dataset.idx, 1);
        },
        addItem: function () {
            console.log(111);
            var _this = this;
            if (!_this.todoVal) {
                return;
            }

            this.todoList.push({
                done: false,
                text: _this.todoVal
            });
            this.todoVal = '';
        },
        clearInput: function (e) {
            console.log(123);
            e.target.blur();
            this.todoVal = '';
        },
        changeToAllDone: function () {
            if (this.allDoneFlag) {
                this.todoList.forEach(item => {
                    item.done = false;
                });
            } else {
                this.todoList.forEach(item => {
                    item.done = true;
                });
            }
        },
        clearHasDone: function () {
            for (var i = this.todoList.length - 1; i >= 0; --i) {
                this.todoList.splice(i, 1);
            }
        },
        modifyItem: function (i, t) {
            this.editingItemIdx = i;
            this.oldTodoText = t;
        },
        cancelModifyItem: function (obj) {
            obj.text = this.oldTodoText;
            this.oldTodoText = '';
            this.editingItemIdx = -1;
        },
        confirmModify: function () {
            this.editingItemIdx = -1;
        }
    },
    watch: {
        todoList: {
            handler(newList) {
                todoStorage.save(newList);
            },
            // 是否在监听函数最初绑定的时候就执行
            immediate: false,
            // 是否深度监听，慎用
            deep: true
        }
    },
    computed: {
        filterTodoList: function () {
            return filterFn[this.filterCatelog](this.todoList);
        },
        itemTips: function () {
            let _len = this.todoList.filter(item => {
                return !item.done;
            }).length;
            if (_len > 0) {
                return _len + ' left';
            } else {
                return 'all done'
            }
        },
        allDoneFlag: function () {
            return filterFn['nodone'](this.todoList).length <= 0;
        },
        hasSomeItemDone: function () {
            return filterFn['done'](this.todoList).length > 0;
        }
    },
    // 自定义指令
    directives: {
        'todo-focus': function (el, binding) {
            if (binding.value) {
                el.focus();
            }
        }
    }
});

function hashChangeFun() {
    let catelog = window.location.hash.replace(/#\/?/, '');
    if (!filterFn[catelog]) {
        return;
    }
    APP.filterCatelog = catelog;
}

window.addEventListener('hashchange', hashChangeFun);

APP.$mount('#vue-todo-list');