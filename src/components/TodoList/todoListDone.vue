<template>
  <section>
    <ul>
      <li v-for="(li, liIdx) in todoListDone" :key="li.todo + liIdx">{{liIdx + 1}}. {{li.todo}}</li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["todoListDone"])
  }
};
</script>

<style lang="scss" scoped>
</style>