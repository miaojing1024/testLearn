<template>
  <div class="record">
      <div class="recordtop">
        <div class="recordimg">
          <img src=""  alt="img" class="c-img am-block">
        </div>
        <div class="recordtitle">
          <div class="company_name">中钧科技有限公司</div>
          <div class="company_status" :class='statusColor("已拒绝").color' >{{statusColor("已拒绝").status}}</div>
        </div>
      </div>
      <div class="status-img">
        <img :src='statusColor("已拒绝").image' class=" am-block" />
      </div>
      <div class="recordbox">
        <span class="item_box">审核时间：</span>
        <span class="item_time">2020.11.12</span>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      id:1,
      yanse:""
    }
  },
  methods:{
    statusColor(val){
      switch (val) {
        case "已通过":
          return {status:"已通过",color:"green",image:"tongguo.png"}
          break;
        case "已拒绝":
          return {status:"已拒绝",color:"yellow",image:"jujue.png"}
          break;
        default:
          return {status:"待审核",color:"",image:"shenhe.png"}
          break;
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import url(../../am-common.styl);
.record{
  background #fff
  padding 0.37rem 0.19rem 0.27rem 0.37rem
  // font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 400;
  margin-bottom 0.27rem
  .recordtop{
    display flex
    margin-bottom 0.16rem
    .recordimg{
      width 1.55rem
      height 1.55rem
      border: 0.03rem solid #EDEDED; 
      padding 0.08rem
      margin-right 0.32rem
    }
    .recordtitle{
      .company_name{
        font-size: 0.4rem;
        font-weight: bold;
        color: #333333;
        line-height: 0.56rem;
        margin-bottom 0.1rem
      }
      .company_status{
        font-size: 0.35rem;
        line-height: 0.48rem;
        color: blue;
      }
      .green{
        color: green;
      }
      .yellow{
        color: #FFC000;
      }
    }
  }
  .recordbox{   
      font-size: 0.37rem;
      .item_box{      
        color: #666666; 
        line-height: 0.53rem;
      }
    }
  .status-img{
      position absolute
      right 0.43rem
      top 1.73rem
      width: 1.71rem;
      height: 1.71rem;
    }
}
</style>