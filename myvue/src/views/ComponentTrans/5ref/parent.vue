<template>
  <div>5555
    <Child ref="child"></Child>
    <button @click="fun()">点我</button>
  </div>
</template>

<script>
import Child from "./child.vue"
export default {
  components: {
    Child
  },
  data() {
    return {

    };
  },
  methods: {
    fun(){
      console.log(this.$refs.child.text)
      console.log(this.$refs.child.zifun())
    }
  },
};
</script>

<style>
</style>