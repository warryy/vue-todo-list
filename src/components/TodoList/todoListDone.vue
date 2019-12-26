<template>
  <section>
    <todo-list :list="todoListDone"></todo-list>
  </section>
</template>

<script>
import { mapGetters } from "vuex"

import TodoList from './TodoList'

export default {
  components: {
    TodoList
  },
  computed: {
    ...mapGetters(["todoListDone"])
  }
};
</script>

<style lang="scss" scoped>
</style>