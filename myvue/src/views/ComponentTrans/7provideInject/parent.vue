<template>
  <!-- 祖先组件中通过provider来提供变量，然后在子孙组件中通过inject来注入变量。
provide / inject API 主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。 -->
  <!-- 需要注意的是：provide和 inject绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的----vue官方文档 -->
  <div>
    7777
    <button @click="() => changeColor()">改变color</button>

    <Child></Child>
  </div>
</template>

<script>
import Child from "./child.vue";
export default {
  // provide: {
  //   name: "父组件的值",
  // },
  provide() {
    return {
      theme: this, //方法一：提供祖先组件的实例
    };
  },
  components: {
    Child,
  },
  data() {
    return {
      color: "blue",
    };
  },
  methods: {
    changeColor(color) {
      if (color) {
        this.color = color;
      } else {
        this.color = this.color === "blue" ? "red" : "blue";
      }
    },
    consoleColor(){
      console.log("consoleColor哈哈哈哈哈哈")
      return "consoleColor"
    }
  }
};
</script>

<style>
</style>