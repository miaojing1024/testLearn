<template>
  <div class="appDetails">
    <!-- 公司信息 -->
    <ExamineTop :detail="detail" :customer="customer"/>
    <!-- 审核状态 -->
    <div class="examine-status am-flex-rc-between">
      <div class="item-examine">审核状态</div>
      <div class="item-status" :class="yanse">
        {{ formatStatus(detail.status) || EMPTY_VAL_TEXT }}
      </div>
    </div>
    <!-- 拒绝原因 -->
    <div class="reject-body" v-if="detail.status == 3">
      <div class="reject-time am-flex-rc-between">
        <div class="time-left">审核时间</div>
        <div class="time-right">
          {{ detail.approvedTime || EMPTY_VAL_TEXT }}
        </div>
      </div>
      <!-- 拒绝时状态 -->
      <div class="reject_reason">
        <div class="item_left">拒绝原因</div>
        <Showorno
          class="inner_details am-text-break"
          :data="detail.reason || EMPTY_VAL_TEXT"
        />
      </div>
    </div>
    <!-- 信息详情 -->
    <!-- 申请,拒绝,通过 -->
    <div class="appBody">
      <!-- 信息内容 -->
      <div class="appBodyDetails">
        <template v-if="detail.status == 2">
          <div class="details">
            <div class="item_details">审核时间</div>
            <Showorno
              class="inner_details"
              :data="detail.approvedTime || EMPTY_VAL_TEXT"
            />
          </div>
          <div class="details">
            <div class="item_details">会员类型</div>
            <Showorno
              class="inner_details"
              :data="detail.leagueClassifyName || EMPTY_VAL_TEXT"
            />
          </div>
        </template>
        <div class="details">
          <div class="item_details">联系人</div>
          <Showorno
            class="inner_details"
            :data="detail.contacts || EMPTY_VAL_TEXT"
          />
        </div>
        <div class="details">
          <div class="item_details">联系电话</div>
          <Showorno
            class="inner_details"
            :data="detail.phone || EMPTY_VAL_TEXT"
          />
        </div>
        <div class="details">
          <div class="item_details">经营地址</div>
          <Showorno
            class="inner_details am-text-break"
            :data="detail.address || EMPTY_VAL_TEXT"
            maxLen="50"
          />
        </div>
        <div class="details">
          <div class="item_details">邀请时间</div>
          <Showorno
            class="inner_details"
            :data="detail.createTime || EMPTY_VAL_TEXT"
          />
        </div>
        <div class="details">
          <div class="item_details">合作类型</div>
          <Showorno
            class="inner_details"
            :data="detail.cooperateType || EMPTY_VAL_TEXT"
          />
        </div>
        <div class="details">
          <div class="item_details">要求</div>
          <Showorno
            class="inner_details"
            :data="detail.inviteContent || EMPTY_VAL_TEXT"
          />
        </div>
        <div class="details" v-for="(item, index) in detail.vdefList" :key="index">
          <div class="item_details">{{ item.title }}</div>
          <Showorno
            class="inner_details"
            :data="item.content || EMPTY_VAL_TEXT"
          />
        </div>
      </div>
    </div>
    <!-- 1表示企业  0表示客户 -->
    <ExamineBottom :customer="customer" v-if="detail.status == 1" />
  </div>
</template>

<script>
// import http from "@/api/apiMember";
// import { EMPTY_VAL_TEXT } from "@/views/app_h5/utils";
export default {
  components: {
    Showorno: () => import("../components/showorno.vue"),
    ExamineTop: () => import("../components/examineTop.vue"),
    ExamineBottom: () => import("../components/examineBottom.vue"),
  },
  data() {
    return {
      EMPTY_VAL_TEXT,
      id: 1,
      yanse: "",
      detail: {},
      customer: "1",
    };
  },
  created() {
    // 设置头部
    // this.$hybrid.sendTitle({ title: "审核信息" }, function (data) {});
    // this.no = this.$route.query.no;
    // this.companyNo = this.$route.query.companyNo;
  },
   mounted() {
    // if (this.no && this.companyNo) {
    //   const { result } = await http.hyshdetail({
    //     no: this.no,
    //     companyNo: this.companyNo,
    //   });
    //   console.log(result);
    //   this.detail = result;
    // }
  },
  methods: {
    formatStatus(val) {
      switch (val) {
        case 1:
          this.yanse = "shenhe";
          return "待审核";
        case 2:
          this.yanse = "tongguo";
          return "已通过";
        case 3:
          this.yanse = "jujue";
          return "已拒绝";
        default:
          break;
      }
    },
  },
};
</script>

<style scoped lang="stylus">
.appDetails {
  height: 100%;
  background: #F5F5F5;
  font-family: PingFangSC-Regular, PingFang SC;

  .jujue {
    color: #FFC000;
  }

  .tongguo {
    color: #06C764;
  }

  .shenhe {
    color: #5792FD;
  }

  .examine-status {
    padding: 0.4rem 0.27rem 0.37rem 0.37rem;
    background: #fff;
    margin-bottom: 0.27rem;
    font-size: 0.4rem;
    font-weight: 400;
    color: #666666;
    line-height: 0.56rem;

    .green {
      color: #06C764;
    }

    .yellow {
      color: #FFC000;
    }
  }

  .reject-body {
    padding: 0.4rem 0.27rem 0.37rem 0.37rem;
    background: #fff;
    margin-bottom: 0.27rem;

    .reject-time {
      padding-bottom: 0.37rem;
      margin-bottom: 0.37rem;
      border-bottom: 1px solid #EDEDED;
      font-size: 0.4rem;
      color: #666666;
      line-height: 0.56rem;

      .time-right {
        color: #333333;
      }
    }

    .reject_reason {
      .item_left {
        font-size: 0.4rem;
        font-weight: 400;
        color: #666666;
        line-height: 0.56rem;
        margin-bottom: 0.2rem;
      }
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

