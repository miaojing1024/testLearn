<template>
  <div>
    <!-- 通过一个空的Vue实例作为中央事件总线（事件中心），用它来触发事件和监听事件,巧妙而轻量地实现了任何组件间的通信，包括父子、兄弟、跨级。当我们的项目比较大时，可以选择更好的状态管理解决方案vuex。 -->
    {{ text }}
    <pop-select @getSelect="getSelect"></pop-select>
  </div>
</template>

<script>
import EventBus from "../../../assets/js/eventbus.js";
import PopSelect from "./child";
export default {
  components: {
    PopSelect,
  },
  data() {
    return {
      text: {},
    };
  },
  created() {
    EventBus.$on("updateSelect", (data) => {
      this.text = data;
      console.log(data); //子组件传参接收
    });
  },
  beforeDestroy() {
    EventBus.$off("updateSelect"); // 移除事件监听者
  },
  methods: {
    getSelect() {},
  },
};
</script>
