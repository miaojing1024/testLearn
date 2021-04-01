<template>
  <div class="home">
      <el-container>
            <el-header>Header
              <el-button type="primary" icon="el-icon-search" @click="fun()">搜索</el-button>
              <i class="el-icon-s-help"></i>
              <el-link type="success"  :underline="false" href="/about">点我去about</el-link>
            </el-header>
            <el-container>
              <el-aside width="200px">
                 <el-menu :default-openeds="['1', '3']">
                   <el-submenu index="1">
                  <template slot="title"><i class="el-icon-message"></i>导航一</template>
                    <el-menu-item-group>
                      <template slot="title">分组一</template>
                      <el-menu-item index="1-1">选项1</el-menu-item>
                      <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <div class="test">
      哇哈哈哈哈哈哈哈
    </div>
                  </el-submenu>
              </el-menu>
            </el-aside>
              <el-main>
          `    <el-table :data="tableData">
                <el-table-column prop="date" label="日期" width="140">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="120">
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>`
                
      </el-table>
              </el-main>
            </el-container>
    </el-container>
    
  </div>
</template>

<script>
export default {
  data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    },
    methods: {
      fun() {
        console.log("我被点了")
      },
      funa(){
        this.$router.push("/about")
      }
    },
}
</script>
<style  scoped>
.home{
  height: 100%;
  overflow: hidden;
  
}
.test{
  font-family: PingFang SC;
}
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    /* height: 100%; */
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 100%;
  }
</style>