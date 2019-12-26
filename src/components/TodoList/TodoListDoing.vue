<template>
  <section>
    <todo-list :list="todoListDoing"></todo-list>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import TodoList from "./TodoList.vue";

export default {
  components: { TodoList },
  computed: {
    ...mapGetters(["todoListDoing"])
  }
};
</script>