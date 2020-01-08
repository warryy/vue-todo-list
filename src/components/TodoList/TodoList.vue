<template>
  <section>
    <van-checkbox-group v-if="Object.keys(list).length > 0" v-model="result">
      <van-cell-group>
        <van-cell v-for="(item, itemId, itemIdx) in list" clickable :key="itemId">
          <span class="list-text" slot="title">{{itemIdx + 1}}. {{item.text}}</span>
          <van-checkbox
            @click="toggle(itemId)"
            slot="icon"
            v-model="item.done"
            :name="itemId"
            :ref="itemId"
          ></van-checkbox>
          <van-icon
            @click="deleteLi(itemId)"
            class="delete-btn"
            size="1rem"
            slot="right-icon"
            name="cross"
          />
        </van-cell>
      </van-cell-group>
    </van-checkbox-group>
    <div class="empty" v-else>
      <van-icon size="3rem" color="#46a0f0" name="info" />
      <p>暂无内容</p>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import { Cell, CheckboxGroup, Checkbox, CellGroup, Icon } from "vant";

Vue.use(Cell)
  .use(CellGroup)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Icon);

export default {
  props: {
    list: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      result: []
    };
  },
  computed: {},
  watch: {
    list: {
      handler: function(v) {
        let arr = [];
        for (let key in v) {
          v[key].done && arr.push(key);
        }
        this.result.splice(0, Infinity, ...arr);
      },
      immediate: true
    }
  },
  methods: {
    toggle(key) {
      this.$refs[key][0].toggle();
      this.$store.commit({
        type: "toggleDone",
        id: key,
        done: !this.list[key].done
      });
    },
    deleteLi(id) {
      this.$store.commit("deleteListItem", id);
    }
  }
};
</script>

<style scoped>
.list-text {
  margin-left: 10px;
}
.delete-btn::before {
  vertical-align: middle;
}
.empty {
  margin: 100px 10px 10px;
  text-align: center;
  font-size: 20px;
}
</style>