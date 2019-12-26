<template>
  <div class="hello">
    <h4>{{ msg }}</h4>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      msg: 'Hello My First Vue Buket~'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  text-align: center;
}
</style>
