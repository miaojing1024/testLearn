<!--业绩详情-->
<template>
  <div class="appDetails">
    <div class="appTop bcolor mg-b">
      <div class="companyInfo am-flex-rc-between">
        <div class="company-tit">巴中市恩阳区九镇集镇环保基础设施项目</div>
        <div
          class="company-follow am-flex-rc-center"
          style="color: #5792df; border: 1px solid #5792df"
        >
          <van-icon name="like" /><span class="follow-txt">关注</span>
        </div>
        <!-- <div class="company-follow am-flex-rc-center" style="color: #999999; border: 1px solid #999999;">
          <van-icon name="like" /><span class="follow-txt">已关注</span>
        </div> -->
      </div>
      <div class="int mg-b">项目简介</div>
      <div class="introduce">
        这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介
      </div>
    </div>
    <div class="appMin bcolor mg-b">
      <div class="details">
        <div class="item_details">承办企业</div>
        <div class="inner_details">申请时间</div>
      </div>
      <div class="details">
        <div class="item_details">主业单位</div>
        <div class="inner_details">申请时间</div>
      </div>
      <div class="details">
        <div class="item_details">项目金额</div>
        <div class="inner_details">申请时间</div>
      </div>
      <div class="details">
        <div class="item_details">参与人员</div>
        <div class="inner_details">申请时间</div>
      </div>
      <div class="details">
        <div class="item_details">项目状态</div>
        <div class="inner_details">申请时间</div>
      </div>
      <div class="details">
        <div class="item_details">甲方证明人</div>
        <div class="inner_details">申请时间</div>
      </div>
      <div class="details">
        <div class="item_details">项目地址</div>
        <div class="inner_details">申请时间</div>
      </div>
    </div>
    <div class="appUnder bcolor mg-b">
      <div style="font-size: 0.4rem; font-weight: bold; color: #333333">
        证明文件
      </div>
      <div class="file-box">
        <div class="file-cell am-flex-rc-between">
          <div class="cell-left am-flex-rc-center">
            <div class="cell-img">
              <!-- <img src="fileimg" alt="img" class="c-img am-block" /> -->
              <img
                :src="src"
                alt="img"
                class="c-img am-block am-wh-100"
                v-if="fileimg == 'pdf'"
              />
            </div>
            <div class="cell-name">{{ formatStatus(file) }}</div>
          </div>
          <div class="cell-right" @click="download()">点击下载</div>
        </div>
      </div>
      <div class="file-box">
        <div class="file-img" style="margin-bottom: 0.5rem">
          <img src="" alt="img" class="c-img am-block am-wh-100" />
        </div>
        <div class="file-img">
          <img src="" alt="img" class="c-img am-block am-wh-100" />
        </div>
      </div>
    </div>

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
const logoImg = require('@/assets/logo.png')
const mapImg = require('@/assets/image/ditu.png')
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
      file: "证明文件.docx",
      fileimg: logoImg,
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
    formatStatus(val) {
      let name = val.split(".");
      let urlTemp = "@/assets/";
      switch (name[1]) {
        case "pdf":
          this.fileimg = mapImg;
          return val;
        case "docx":
          this.fileimg = "docx";
          return val;
        case "xlsx":
          // this.fileimg = require(urlTemp+"logo.png");
          return val;
        default:
          break;
      }
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
    font-size: 0.45rem;
    color: #333333;
    line-height: 0.59rem;
    font-weight: bold;
    flex: 1;
    width: 0;
  }

  .company-follow {
    flex-shrink: 0;
    border-radius: 0.33rem;
    padding: 0.04rem 0.25rem;
    margin-left: 0.35rem;

    .follow-txt {
      margin-left: 0.1rem;
    }
  }

  .int {
    font-size: 0.4rem;
    color: #333333;
    font-weight: bold;
    margin-top: 0.3rem;
  }

  .introduce {
    line-height: 0.53rem;
    color: #333333;
    font-size: 0.37rem;
  }

  .details {
    display: flex;
    line-height: 0.53rem;
    font-size: 0.37rem;

    & +.details {
      margin-top: 0.3rem;
    }
  }

  .item_details {
    width: 2.2rem;
    color: #666666;
    flex-shrink: 0;
  }

  .inner_details {
    flex: 1;
    width: 0;
    color: #333333;
    font-size: 0.37rem;
  }

  .reject_reason {
    padding: 0.4rem 0.27rem 0.37rem 0.37rem;
    background: #fff;
    margin-bottom: 0.27rem;

    .item_left_b {
      font-size: 0.4rem;
      font-weight: 400;
      color: #666666;
      line-height: 0.56rem;
      margin-bottom: 0.2rem;
    }
  }

  .appBody {
    padding: 0.4rem 0.27rem 0.37rem 0.37rem;
    background: #fff;

    .app_title {
      display: flex;
      margin-bottom: 0.3rem;

      .div_empty {
        width: 0.11rem;
        height: 0.4rem;
        background: #5792FD;
        border-radius: 0.05rem;
        margin-right: 0.32rem;
      }

      .app_title_text {
        font-size: 0.4rem;
        color: #333333;
        line-height: 0.59rem;
        font-weight: bold;
      }
    }
  }

  .file-box {
    margin-top: 0.4rem;
  }

  .file-cell {
    font-size: 0.37rem;

    & +.file-cell {
      margin-top: 0.27rem;
    }

    .cell-name {
      color: #333333;
      margin-left: 0.27rem;
    }

    .cell-right {
      color: #5792FD;
    }

    .cell-img {
      width: 0.4rem;
      height: 0.48rem;
    }
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

