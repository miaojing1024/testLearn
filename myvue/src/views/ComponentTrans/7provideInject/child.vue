<template>
  <div>
    我是注入的子组件-----{{  }}
    <h3 :style="{ color: theme.color }">F 组件---{{theme.consoleColor()}}</h3>
  </div>
</template>

<script>
export default {
  // inject: ["name"],
  inject: {
    theme: {
      //函数式组件取值不一样
      default: () => ({}),
    },
  },
};
</script>

<style>
</style>