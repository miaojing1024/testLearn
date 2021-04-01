<template>
  <div id="child">
    <p>{{ childUserInfo.name }}</p>
    <button @click="getParentUserInfo">获取父组件用户信息</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      childUserInfo: {
        name: '张三',
      },
    }
  },
  methods: {
    // 点击获取父组件用户信息按钮，调用
    getParentUserInfo() {
      // 获取parent组件实例
      // 可以获取、修改parent中的data数据，也可以调用parent组件中的方法
      // 父组件是唯一的，所以直接获取到parent父组件实例对象
      const parent = this.$parent // 同等于parent子组件的this
      console.log(parent.parentUserInfo.name) // '张三爹'；当点击获取父组件用户信息时，触发
    },
  },
}
</script>
