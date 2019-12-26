<template>
  <div id="app">
    <header class="header">
      <span>VUE BUCKET</span>
    </header>
    <section class="content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
// import Vue from "vue";
// import { Breadcrumb, Icon } from "ant-design-vue";

// Vue.use(Breadcrumb);
// Vue.use(Icon);

export default {
  name: "app",
  data() {
    return {
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    }
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

.content {
  margin: 15px;
}

</style>
