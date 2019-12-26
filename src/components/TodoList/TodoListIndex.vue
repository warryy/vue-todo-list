<template>
  <section>
    <section>
      <router-link to="/todo/all">all</router-link>
      <br/>
      <router-link to="/todo/done">done</router-link>
      <br/>
      <router-link to="/todo/doing">doing</router-link>
    </section>

    <section>
      <router-view></router-view>
    </section>
  </section>
</template>

<script>
export default {
  name: "todolistindex",
  data() {
    return {
      todoText: ""
    };
  }
};
</script>

<style scoped>
</style>