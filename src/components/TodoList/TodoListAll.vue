<template>
  <section>
    <section>
      <button @click="addOneLine">add one line</button>
      <button @click="removeOneLine">remove one line</button>
    </section>
    <section>
      <todo-list :list="todoListAll"></todo-list>
    </section>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import TodoList from "./TodoList.vue";

export default {
  components: { TodoList },
  computed: {
    ...mapGetters(["todoListAll"])
  },
  methods: {
    addOneLine() {
      this.$store.commit("addOneLine");
    },
    removeOneLine() {
      this.$store.commit("removeOneLine");
    }
  }
};
</script>

<style scoped>
</style>