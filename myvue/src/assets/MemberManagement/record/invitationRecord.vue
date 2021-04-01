<template>
  <div class="appDetails">
      <!-- 公司信息 -->
      <RecordTop/>
      <!-- 拒绝原因 -->
      <div class="reject_reason">
        <div class="item_left_b">拒绝原因</div>
        <Showorno class="inner_details" data="我是拒绝原因阿斯大所大所多as奥阿斯达四大术奥术大师大所大所大所多大师大所大所大所多阿萨斯大所大所大所大所多dasda" :maxLen="51"/>
      </div>
      <!-- 信息详情 -->
      <div class="appBody">
        <div class="app_title am-flex-row-center">
          <div class="div_empty"></div>
          <div class="app_title_text">申请信息</div>
        </div>
        <!-- 信息内容 -->
        <div class="appBodyDetails">
          <div class="details">
              <div class="item_details">申请时间</div>
              <Showorno class="inner_details" data="专业承包企业"/>
          </div>
          <div class="details">
              <div class="item_details">联系人</div>
              <Showorno class="inner_details" data="张三"/>
          </div>
          <div class="details">
              <div class="item_details">联系电话</div>
              <Showorno class="inner_details" data="132564862355" />
          </div>
          <div class="details">
              <div class="item_details">申请说明</div>
              <Showorno class="inner_details" data="我是要求爱仕达咕咕咕咕咕咕过过过立刻收到啦开始打开了手动控制不出来看着不像差不多就暗示分离卡还阿斯达四大所多是都拉黑SDK哈师大" :maxLen="50"/>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  components:{
    RecordTop:()=>import("../components/recordTop.vue"),
    Showorno:()=>import("../components/showorno.vue"),
  }
}
</script>

<style scoped lang="stylus">
.appDetails{
  height 100%
  background: #F5F5F5;
  font-family: PingFangSC-Regular, PingFang SC;
  .reject_reason{
    padding 0.4rem 0.27rem 0.37rem 0.37rem
    background #fff
    margin-bottom 0.27rem
    .item_left_b{
      font-size: 0.4rem;
      font-weight: 400;
      color: #666666;
      line-height: 0.56rem;
      margin-bottom 0.2rem
    }
  } 
  .appBody{
    padding 0.4rem 0.27rem 0.37rem 0.37rem
    background #fff
    .app_title{
      display flex
      margin-bottom 0.3rem
      .div_empty{
        width: 0.11rem;
        height: 0.4rem;
        background: #5792FD;
        border-radius: 0.05rem;
        margin-right 0.32rem
      }
      .app_title_text{
        font-size: 0.43rem;
        font-weight: 500;
        color: #333333;
        line-height: 0.59rem;
      }
    }
    .details{
      display flex
      line-height: 0.53rem;
      font-size: 0.37rem;
      margin-bottom 0.4rem
      .item_details{
        width 2.4rem      
        color: #666666;        
      }
    }
  }
  .inner_details{
    flex 1
    font-weight: 400;
    color: #333333;
    font-size: 0.37rem;
  }
}
</style>

