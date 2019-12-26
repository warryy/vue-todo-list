<template>
  <section>
      <ul>
          <li v-for="(li, liIdx) in list" :key="li + liIdx">{{liIdx + 1}}. {{li}}</li>
      </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      list: [
          '哈哈哈哈',
          '哈哈哈哈',
          '哈哈哈哈',
          '哈哈哈哈',
          '哈哈哈哈',
      ]
    };
  }
};
</script>

<style scoped>
</style>