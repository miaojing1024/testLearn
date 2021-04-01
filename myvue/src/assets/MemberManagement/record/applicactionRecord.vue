<template>
  <div class="appDetails">
      <!-- 公司信息 -->
      <RecordTop/>
      <!-- 拒绝原因 -->
      <div class="reject_reason">
        <div class="item_left_b">拒绝原因</div>
        <Showorno class="inner_details" data="我是拒绝原因阿斯大所大所多as奥阿斯达四大术奥术大师大所大所大所多大师大所大所大所多阿萨斯大所大所大所大所多dasda" :maxLen='10'/>
      </div>
      <!-- 信息详情 -->
      <div class="appBody">
        <div class="app_title am-flex-row-center">
          <div class="div_empty"></div>
          <div class="app_title_text">邀请信息</div>
        </div>
        <!-- 信息内容 -->
        <div class="appBodyDetails">
          <div class="details">
              <div class="item_details">合作类型</div>
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
              <div class="item_details">邀请时间</div>
              <!-- <div class="inner_details">2012.03.02</div> -->
              <Showorno class="inner_details" :data='formatDate(1606804736000)'/>
          </div>
          <div class="details">
              <div class="item_details">要求</div>
              <Showorno class="inner_details" data="我是要求爱仕达咕咕咕咕咕咕过过过立刻收到啦开始打开了手动控制不出来看着不像差不多就暗示分离卡还阿斯达四大所多是都拉黑SDK哈师大" :maxLen='50'/>
          </div>
          <div class="details">
              <div class="item_details">自定义字段</div>
              <Showorno class="inner_details" data="专业承包企业" :maxLen='10'/>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import {Toast } from "vant"
import moment from 'moment'
// import { rentModuleSelfUseTimeFormat,EMPTY_VAL_TEXT,SHE_BEI } from "@/views/app_h5/utils";
export default {
  components:{
    RecordTop:()=>import("../components/recordTop.vue"),
    Showorno:()=>import("../components/showorno.vue"),
  },
  data(){
    return {
      id:""
    }
  },
  created() {
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
    });
    // this.id = this.$route.query.id || null;
  },
  // async mounted() {
  // const api = process.env.VUE_APP_CAPI;
  //   this.$hybrid.sendTitle({ title: "详情(申请记录)" }, function (data) {});
  //   if (this.id) {
  //     axios
  //       .get(`${api}/rent/seek/detailRentSeek?id=${this.id}`)
  //       .then(({ data }) => {
  //         console.log(data);
  //         this.listDetail = data.data.rentSeek;
  //         this.isQuotations();
  //       });
  //     Toast.clear();
  //   }
  //   Toast.clear();
  //   this.$hybrid.syncToken({}, (data) => {
  //     data = JSON.parse(data);
  //     this.jToken = data.resourceAPPToken;
  //   });
  // },
  computed: {
    // 格式化发布时间,入：updateTimeStr: "1606804736000"
    // 输出：2020-12-01
    // formatPublishTime () {
    //   // 根据当前需求返回 YYYY-MM-DD格式
    //   let val = this.listDetail.updateTimeStr
    //   if(!val) {return ''}
    //   return moment(Number(val)).format('YYYY-MM-DD')
    // }
  },
  methods:{
    // 使用时间格式化
    // rentModuleSelfUseTimeFormat,
    // {{ formateTime(listDetail.useAndEnterTime) }}
    // 入：useAndEnterTime: "2021-12-01"
    // 输出：2021年12月01日
    formateTime(val) {
      console.log(val);
      if (toString.call(val) != "[object Undefined]") {
        let res1 = val.slice(0, 4);
        let res2 = val.slice(5, 7);
        let res3 = val.slice(8, 10);
        return `${res1}年${res2}月${res3}日`;
      }
    },
   formatDate(val) {
      if (!val) {
        return '暂无信息'
      }
      return moment(Number(val)).format('YYYY-MM-DD HH:mm')
    },
    forMateString(val) {
      if (val) {
        return val.replace(/ /g, "/");
      }
    },
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

