<template>
  <div>55555子组件
    <button @click="zifun()">子组件的点击</button>
  </div>
</template>

<script>
export default {
  data() {
    return{
      text:"我是ref的子组件"
    }
  },
  methods:{
    zifun(){
      alert("我是子组件弹出")
      return "点击了"
    }
  }
};
</script>

<style>
</style>