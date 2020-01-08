<template>
  <div id="app">
    <header class="header">
      <span>{{title}}</span>
    </header>
    <section class="content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>


const {log} = console;
log()
export default {
  name: "app",
  data() {
    return {
      title: 'VUE BUCKET',
    };
  }
};
</script>

<style>
body {
  margin: 0;
}

.header {
  padding: 10px;
  line-height: 30px;
  background-color: #1890ff;
  color: #fff;
  font-size: 18px;
  text-align: center;
}

.logo {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}

.header-nav {
  margin-left: 15px;
  color: #fff;
  text-decoration: none;
}
.header-nav:active,
.header-nav:visited {
  opacity: 0.6;
}
</style>
