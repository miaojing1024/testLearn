
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ form.a }}</h1>
    <button @click="buttonClick">current</button>
  </div>
</template>
 
<script>
//导入js文件
import fun from '../../mixins/common.js'

export default {
  name: "HelloWorld",
  mixins:[fun],  //混入 fnu对象
  created(){
    console.log('这是当前组件')
  },
  data() {
    return {
      msg: "组件的msg"
    }
  },
  methods:{
    buttonClick(){
      console.log(this.form.a)
      console.log(this.msg)
      this.clickFn();
      this.exm();
    },
    exm(){
      console.log('这是组件的exm方法')
    }
  }
}
</script>

