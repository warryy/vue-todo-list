<template>
  <section>
    <section>
      <button @click="addOneLine">add one line</button>
      <button @click="removeOneLine">add one line</button>
    </section>
    <ul>
      <li v-for="(li, liIdx) in todoListAll" :key="li.todo + liIdx">{{liIdx + 1}}. {{li.todo}}</li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
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