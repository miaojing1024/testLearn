<template>
  <div class="appDetails">
    <!-- 公司信息 -->
    <RecordTop :detail="detail" />
    <!-- 拒绝原因 -->
    <div class="reject_reason" v-if="detail.status === 3">
      <div class="item_left_b">拒绝原因</div>
      <Showorno class="inner_details am-text-break" :data="detail.reason || EMPTY_VAL_TEXT" />
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
          <Showorno class="inner_details" :data="detail.cooperateType || EMPTY_VAL_TEXT" />
        </div>
        <div class="details">
          <div class="item_details">联系人</div>
          <Showorno class="inner_details" :data="detail.contacts || EMPTY_VAL_TEXT" />
        </div>
        <div class="details">
          <div class="item_details">联系电话</div>
          <Showorno class="inner_details" :data="detail.phone || EMPTY_VAL_TEXT" />
        </div>
        <div class="details">
          <div class="item_details">邀请时间</div>
          <Showorno
            class="inner_details"
            :data="formateTime(detail.createTime)"
          />
        </div>
        <div class="details">
          <div class="item_details">要求</div>
          <Showorno
            class="inner_details am-text-break"
            :data="detail.inviteContent || EMPTY_VAL_TEXT"
            :maxLen="50"
          />
        </div>
        <div v-if="detail.vdefList.length !== 0">
          <div
            class="details"
            v-for="(item, index) in detail.vdefList"
            :key="index"
          >
            <div class="item_details">{{ item.title || EMPTY_VAL_TEXT}}</div>
            <Showorno class="inner_details" :data="item.content || EMPTY_VAL_TEXT" :maxLen="50" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
// import http from "@/api/apiMember";
// import { EMPTY_VAL_TEXT } from "@/views/app_h5/utils";
export default {
  components: {
    RecordTop: () => import("../components/recordTop.vue"),
    Showorno: () => import("../components/showorno.vue"),
  },
  data() {
    return {
      detail: {
        vdefList: [],
      },
      no: "",
      companyNo: "",
      EMPTY_VAL_TEXT,
    };
  },
  methods: {
    // 邀请时间格式化
    formateTime(val, time = "YYYY-MM-DD HH:mm") {
      if (!val) return this.EMPTY_VAL_TEXT;
      return moment(val).format(time);
    },
  },
  created() {
    // 设置头部
    this.$hybrid.sendTitle({ title: "邀请记录" }, function (data) {});
    this.no = this.$route.query.no;
    this.companyNo = this.$route.query.companyNo;
  },
  async mounted() {
    if (this.no && this.companyNo) {
      const { result } = await http.hyshdetail({
        no: this.no,
        companyNo: this.companyNo,
      });
      console.log(result);
      this.detail = result;
    }
  },
};
</script>

<style scoped lang="stylus">
.appDetails {
  height: 100%;
  background: #F5F5F5;
  font-family: PingFangSC-Regular, PingFang SC;

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
        font-size: 0.43rem;
        font-weight: 500;
        color: #333333;
        line-height: 0.59rem;
      }
    }

    .details {
      display: flex;
      line-height: 0.53rem;
      font-size: 0.37rem;
      margin-bottom: 0.4rem;

      .item_details {
        width: 2.4rem;
        color: #666666;
      }
    }
  }

  .inner_details {
    flex: 1;
    font-weight: 400;
    color: #333333;
    font-size: 0.37rem;
  }
}
</style>

