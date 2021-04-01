<!--企业动态-->
<!--
通过点击的list的companyNo和id来进行数据请求
通过companyNo来发送get请求(进入企业)--companyData(回来的数据)--https://api.sgbwl.com/memberCenter/companyNews/getInto/202003277697334
通过id来发送get请求(头部标题)--detail(回来的数据)--https://api.sgbwl.com/memberCenter/companyNews/detail/101
获取热点动态get请求:通过id请求下的dynamicTypeNo,来发送参数json:--newsDetail(回来的数据)--https://api.sgbwl.com/memberCenter/companyNews/findNewsDynamic?dynamicTypeNo=20200910792788&no=
-->
<template>
  <div class="appDetails">
    <div class="appTop bcolor mg-b">
      <div class="company-tit detail.title">
        元年云“宽能力”拓宽成长型企业数字化升级之路<span class="company-tag"
          >企业要闻</span
        >
      </div>
      <div class="details">
        <div class="item_details detail.dynamicTypeName">王多鱼</div>
        <div class="inner_details detail.createTime">2020-08-25 10:25</div>
      </div>
      <div class="companyInfo am-flex-rc-between">
        <div class="info-l am-flex-rc-center">
          <div class="info-img">
            <img src="" alt="img" class="c-img am-block am-wh-100 companyData.image" />
          </div>
          <div class="info-name companyData.name">新疆金正集团</div>
        </div>
        <div class="item-btn" @click="enterCompany">进入企业</div>
      </div>
      <div class="appIntroduce detail.body">
        当前，企业数字化升级正按下加速键，前沿数字技术和红利将进一步下沉，惠及成长型企业。擅长企业财务和业务数字化转型的元年科技深谙成长型企业升级需求，推出了独具特色的云服务平台。元年云“宽能力”2020产品发布会在线上隆重发布。元年云如今在业务、资源、技术、服务方面迎来崭新宽能力，将会不断的赋能于成长型企业...
      </div>
    </div>
    <div class="appBody"></div>
    <!-- <van-overlay :show="allLoading">
      <div v-if="allLoading" class="show-loading">
        <van-loading size="44px" color="#4994df">
          <span style="color: #4994df; z-index: 999">{{ "加载中···" }}</span>
        </van-loading>
      </div>
    </van-overlay> -->
  </div>
</template>

<script>
import { Toast } from "vant";
import moment from "moment";
// import http from "@/api/apiMember";
// import { EMPTY_VAL_TEXT } from "@/views/app_h5/utils";
export default {
  components: {
    // Showorno: () => import("../components/showorno.vue"),
  },
  data() {
    return {
      detail: {},
      no: "",
      companyNo: "",
      EMPTY_VAL_TEXT: "暂无信息",
      allLoading: true,
    };
  },
  created() {
    // 设置头部
    // this.$hybrid.sendTitle({ title: "申请记录" }, function (data) {});
    this.no = this.$route.query.no;
    this.companyNo = this.$route.query.companyNo;
  },
  async mounted() {
    // Toast.loading({
    //   getContainer: "#loading",
    //   duration: 0,
    //   forbidClick: true,
    //   icon: require("@/assets/loading.gif"),
    // });
    // if (this.no && this.companyNo) {
    //   const { result } = await http.hyshdetail({
    //     no: this.no,
    //     companyNo: this.companyNo,
    //   });
    //   console.log(result);
    //   this.detail = result;
    // }
    // Toast.clear();
  },
  methods: {
    // 申请时间格式化
    formateTime(val, time = "YYYY-MM-DD HH:mm") {
      if (!val) return this.EMPTY_VAL_TEXT;
      return moment(val).format(time);
    },
    // 下载
    download(e) {
      // this.$hybrid.accessory({ name: "", url: e }, function (data) {});
    },
    enterCompany() {
      console.log("进入企业");
    },
  },
};
</script>

<style scoped lang="stylus">
@import url('../../am-common.styl');

.appDetails {
  min-height: 100vh;
  background: #F5F5F5;
  font-family: PingFangSC-Regular, PingFang SC;

  .bcolor {
    background: #fff;
    padding: 0.4rem;
  }

  .mg-b {
    margin-bottom: 0.27rem;
  }

  .company-tit {
    font-weight: 600;
    line-height: 0.64rem;
    color: #333333;
    font-size: 0.48rem;

    .company-tag {
      font-weight: 400;
      color: #FFFFFF;
      line-height: 0.37rem;
      font-size: 0.27rem;
      padding: 0.02rem 0.05rem;
      border-radius: 0.03rem;
      margin-left: 0.1rem;
      background: linear-gradient(90deg, #6B78FF 0%, #79A2FF 100%);
    }
  }

  .details {
    display: flex;
    line-height: 0.48rem;
    color: #666666;
    font-size: 0.35rem;
    margin: 0.27rem 0;
  }

  .item_details {
    color: #666666;
    flex-shrink: 0;
    margin-right: 0.53rem;
  }

  .inner_details {
    flex: 1;
    width: 0;
    color: #969696;
  }

  .companyInfo {
    margin-bottom: 0.32rem;

    .info-img {
      width: 0.8rem;
      height: 0.8rem;
    }

    .info-name {
      color: #5792FD;
      font-weight: 400;
      line-height: 0.48rem;
      font-size: 0.35rem;
      margin-left: 0.13rem;
    }
  }

  .appIntroduce {
    color: #333333;
    line-height: 0.69rem;
    font-size: 0.4rem;
  }

  .item-btn {
    display: inline-block;
    border: 1px solid #5792FD;
    border-radius: 0.05rem;
    color: #5792FD;
    text-align: center;
    padding: 0.08rem 0.32rem;
  }

  .show-loading {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 50%;
    line-height: 8.5333rem;

    >>>.van-loading {
      text-align: center;
    }
  }
}
</style>

