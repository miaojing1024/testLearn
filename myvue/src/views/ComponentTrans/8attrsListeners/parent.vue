<template>
<!-- 最佳使用场景：父、子孙组件通讯
子组件通过$attrs/$listeners获取父组件传递的数据和方法 -->
  <div id="parent">
    <button @click="changeName('李四')">修改姓名</button>
    <!-- 把父组件的name传递给子组件 -->
    <!-- 把父组件的changeName方法，子组件通过$listeners获取方法 -->
    <!-- <child :name="name" v-on="{ changeName }"></child> -->
    <child :name="name" :age="age" @changeName="textAttr"></child>
  </div>
</template>

<script>
// 引入子组件Child
import Child from './child'
export default {
  components: { Child },
  data() {
    return {
      name: '张三',
      age:18
    }
  },
  methods: {
    // 修改姓名，并传递给子组件、子孙组件使用，用$listeners获取方法
    changeName(newName) {
      this.name = newName
      console.log(this.name)
    },
    textAttr(newName) {
      this.name = "测试名字"
      console.log(this.name)
    },
  },
}
</script>
