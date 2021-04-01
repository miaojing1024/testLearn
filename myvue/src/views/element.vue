<template>
  <div class="element-box">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style lang="stylus" scoped>
.element-box /deep/{
  .el-tabs__header{
    border none
    .el-tabs__nav{
      border none
    }
    .el-tabs__item{
      margin 10px
      border 1px solid #999
    }
    .is-active{
      color red
    }
  }
  
}
</style>