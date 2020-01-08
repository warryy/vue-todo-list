<template>
  <section>
    <section>
      <van-dropdown-menu>
        <van-dropdown-item v-model="todo.todoTab" :options="todo.todoTabOptions" />
      </van-dropdown-menu>
    </section>

    <section>
      <router-view></router-view>
    </section>
  </section>
</template>

<script>
import Vue from "vue";
import { DropdownMenu, DropdownItem } from "vant";

Vue.use(DropdownMenu).use(DropdownItem);

export default {
  name: "todolistindex",
  data() {
    return {
      todoText: "",
      todo: {
        todoTab: "all",
        todoTabOptions: [
          { text: "全部", value: "all" },
          { text: "待做", value: "doing" },
          { text: "已完成", value: "done" }
        ]
      }
    };
  },
  watch: {
    "todo.todoTab": function(tab) {
      let path = "/todo/" + tab;
      this.$router.push({
        path
      });
    }
  }
};
</script>

<style scoped>
</style>