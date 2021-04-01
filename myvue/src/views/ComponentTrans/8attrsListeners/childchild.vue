<template>
  <div id="child-child">
    <p>子孙组件：{{ $attrs.name }}</p>
    <button @click="changeName('吴六')">子孙组件-修改姓名</button>
  </div>
</template>

<script>
export default {
  inheritAttrs: true, // 是否显示元素上的属性，默认为true: 显示
  methods: {
    // 修改姓名
    changeName(newName) {
    // 通过$listeners调用父组件传来的changeName方法
      this.$listeners.changeName(newName)
    },
  },
}
</script>
