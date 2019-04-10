new Vue({
    el: '#vue-todo-list',
    data: function data() {
        return {
            title: 'todo',
            todoList: [
                'todo1',
                'todo3',
                'todo2',
                'todo4'
            ],
            todoVal: ''
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
            this.todoList.push(_this.todoVal);
            this.todoVal = '';
        }
    },
});