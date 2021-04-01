<template>
  <div class="picker-mask" @click="getSelect"></div>
</template>

<script>
// import EventBus from "@/assets/js/eventBus.js";
import EventBus from "../../../assets/js/eventbus.js";
export default {
  name: "PopSelect",
  props: {},
  data() {
    return {
      isConfirm: false,
    };
  },
  methods: {
    getSelect() {
      let data = {};
      data.isConfirm = this.isConfirm;
      EventBus.$emit("updateSelect", data); // 子组件传参父组件发送
    },
  },
};
</script>
<style scoped>
.picker-mask {
  width: 100px;
  height: 100px;
  background: #f99;
}
</style>
