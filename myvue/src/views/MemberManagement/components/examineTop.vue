<template>
  <div class="examine">
      <div class="examinetop am-flex-row-center">
        <div class="examineimg">
          <img src=""  alt="img" class="c-img am-block">
        </div>
        <div class="examinetitle_right">
          <div class="examinetitle am-flex-rc-between">
            <div class="company_name">中钧科技有限公司</div>
            <div class="enter_company">进入企业</div>
          </div>
          <!-- <div class="company_level">
            <span class="company_level-l">采购商</span>
            <span class="company_level-r">五星会员</span>
          </div> -->
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      id:1,
      yanse:"green"
    }
  }
}
</script>

<style scoped lang="stylus">
@import url(../../am-common.styl);
.examine{
  background #fff
  padding 0.37rem
  // font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 400;
  margin-bottom 0.27rem
  .examinetop{
    display flex
    margin-bottom 0.16rem
    .examineimg{
      width: 1.55rem;
      height: 1.55rem;
      border: 0.03rem solid #EDEDED; 
      padding 0.08rem
      margin-right 0.27rem
    }
    .examinetitle_right{
      flex 1
      .company_name{
        font-size: 0.43rem;
        font-weight: bold;
        color: #333333;
        line-height: 0.64rem;
      }
      .enter_company{ 
        padding 0.1rem 0.32rem
        color: #5792FD;
        font-size: 0.37rem;
        line-height: 0.53rem;        
        border-radius: 0.05rem;
        border: 0.01rem solid #5792FD;
      }
      .company_level{
        color #fff
        font-size: 0.27rem;
        margin-top 0.16rem
        .company_level-l{
          padding 0.13rem
          background: linear-gradient(270deg, #79A2FF 0%, #6B78FF 100%);
          border-radius: 0.05rem;
          margin-right 0.16rem
        }
        .company_level-r{
          padding 0.13rem
          background: linear-gradient(90deg, #FB7039 0%, #FFB553 100%);
          border-radius: 0.05rem;
        }
      }
    }
  }
}
</style>