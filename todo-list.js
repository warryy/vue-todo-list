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
            todoList: [
                {
                    done: true,
                    text: '增加删除啊'
                },
                {
                    done: false,
                    text: '写demo啊'
                },
                {
                    done: false,
                    text: '写样式啊'
                },
                {
                    done: false,
                    text: '抽象组件啊'
                },
                {
                    done: false,
                    text: '筛选功能啊'
                },
                {
                    done: false,
                    text: '存储数据啊'
                },
            ],
            todoVal: '',
            filterCatelog: 'all'
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
        filterDoneFun: function () {
            
        }
    },
    watch: {
        filterNoDone: function (val) {
            
        }
    },
    computed: {
        filterTodoList: function () {
            console.log(filterFn[this.filterCatelog](this.todoList));
            return filterFn[this.filterCatelog](this.todoList);
        }
    },
});

function hashChangeFun () {
    let catelog = window.location.hash.replace(/#\/?/, '');
    console.log('-----------catelog', catelog);
    if (!filterFn[catelog]) {
        return;
    }
    APP.filterCatelog = catelog;
}

window.addEventListener('hashchange', hashChangeFun);
hashChangeFun();

APP.$mount('#vue-todo-list');