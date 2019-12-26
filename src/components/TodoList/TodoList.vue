<template>
  <ul>
    <li v-for="(li, liIdx) in list" :key="liIdx + li.text">{{liIdx + 1}}. {{li.text}}</li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
          return []
      }
    }
  }
};
</script>