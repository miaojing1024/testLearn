<template>
  <div id="child">
    <p>子组件：{{ $attrs.name }}</p>
    <p>子组件：{{ $attrs}}</p>
    <button @click="changeName('王五')">子组件-修改姓名</button>
    <!-- v-bind="$attrs"：把父组件所绑定传递过来的name，再次传递给子孙组件 -->
    <!-- v-on="$listeners"：把父组件所绑定传递过来的方法changeName，再次传递给子孙组件 -->
    <child-child v-bind="$attrs" v-on="$listeners"></child-child>
  </div>
</template>

<script>
import ChildChild from './childchild'
export default {
  components: { ChildChild },
  inheritAttrs: false, // 是否显示元素上的属性，默认为true: 显示
  methods: {
    // 修改姓名
    changeName(newName) {
    // 通过$listeners调用父组件传来的changeName方法
    console.log(this.$listeners)
      this.$listeners.changeName(newName)
    },
  },
}
</script>
