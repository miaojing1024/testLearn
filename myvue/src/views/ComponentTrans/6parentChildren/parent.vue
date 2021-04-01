<template>
  <div id="parent">
    <p>{{ parentUserInfo.name }}</p>
    <button @click="getChildUserInfo">获取子组件用户信息</button>
    <child></child>
  </div>
</template>

<script>
// 引入子组件
import Child from './child'
export default {
  components: { Child },
  data() {
    return {
      parentUserInfo: {
        name: '张三爹',
      },
    }
  },
  methods: {
    // 点击获取子组件用户信息按钮，调用
    getChildUserInfo() {
      // 获取child组件实例
      // 可以获取、修改child中的data数据，也可以调用child组件中的方法
      // 可能有多个子组件，所以获取到的是，由多个子组件实例对象组成的数组
      const childrenArr = this.$children 
      // 第一项才是 组件名为Child的组件
      const child = childrenArr[0] // 同等于child父组件的this
      console.log(child.childUserInfo.name) // '张三'；当点击获取用户信息时，触发
    },
  },
}
</script>
