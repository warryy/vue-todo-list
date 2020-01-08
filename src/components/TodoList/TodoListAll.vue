<template>
  <section>
    <section>
      <van-field
        v-model="todoOpt.text"
        type="textarea"
        show-word-limit
        :rows="todoOpt.rows"
        :maxlength="todoOpt.max"
        :autosize="todoOpt.autosize"
        :placeholder="todoOpt.placeholder"
        @keyup.enter="add(todoOpt.id)"
        :ref="todoOpt.id"
      />
    </section>
    <section>
      <todo-list :list="todoListAll"></todo-list>
    </section>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import TodoList from "./TodoList.vue";

import Vue from "vue";
import { Button, Field } from "vant";

Vue.use(Button).use(Field);
// const {log} = console;
export default {
  components: { TodoList },
  data() {
    return {
      todoText: "",
      todoOpt: {
        id: 'toBeAddItem',
        text: "",
        max: 50,
        rows: 2,
        autosize: true,
        placeholder: "请输入待办项"
      }
    };
  },
  computed: {
    ...mapGetters(["todoListAll"])
  },
  methods: {
    add(id) {
      this.$store.commit("addListItem", this.todoOpt.text);
      this.todoOpt.text = '';
      this.$refs[id].blur();
    }
  }
};
</script>

<style scoped>
</style>