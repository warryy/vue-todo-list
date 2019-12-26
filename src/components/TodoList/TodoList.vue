<template>
  <section>
    <!-- <a-input-search placeholder="input search text" style="width: 200px" @search="onSearch" /> -->
    <section>
      <router-link to="/todo/all">all</router-link>
    </section>
    <section>
      <!-- <button @click="addOneLine">add one line</button> -->
    </section>
    <section>
      <router-view></router-view>
    </section>
  </section>
</template>

<script>
export default {
  name: "todolist",
  data() {
    return {
      todoText: ""
    };
  },
  methods: {
    // addOneLine() {

    // }
  }
};
</script>

<style scoped>
</style>