<template>
  <div class="appDetails">
    <!-- 公司信息 -->
    <!-- <ExamineTop :detail="detail" /> -->
    <!-- 审核状态 -->
    <!-- <div class="examine-status am-flex-rc-between">
      <div class="item-examine">审核状态</div>
      <div class="item-status" :class="yanse">
        {{ formatStatus(detail.status) || EMPTY_VAL_TEXT }}
      </div>
    </div> -->
    <!-- 拒绝原因 -->
    <!-- <div class="reject-body" v-if="detail.status == 3">
      <div class="reject-time am-flex-rc-between">
        <div class="time-left">审核时间</div>
        <div class="time-right">
          {{ detail.approvedTimeStr || EMPTY_VAL_TEXT }}
        </div>
      </div> -->
    <!-- 拒绝时状态 -->
    <!-- <div class="reject_reason">
        <div class="item_left">拒绝原因</div>
        <Showorno
          class="inner_details am-text-break"
          :data="detail.reason || EMPTY_VAL_TEXT"
        />
      </div>
    </div> -->
    <!-- 信息详情 -->
    <!-- 申请,拒绝,通过 -->
    <div class="appBody">
      <div class="appBodyDetails">
        <!-- <template v-if="detail.status == 2">
          <div class="details">
            <div class="item_details">审核时间</div>
            <Showorno
              class="inner_details"
              :data="detail.approvedTimeStr || EMPTY_VAL_TEXT"
            />
          </div>
          <div class="details">
            <div class="item_details">会员等级</div>
            <Showorno
              class="inner_details"
              :data="detail.level || EMPTY_VAL_TEXT"
            />
          </div>
          <div class="details">
            <div class="item_details">会员类型</div>
            <Showorno
              class="inner_details"
              :data="detail.companyClassifyName || EMPTY_VAL_TEXT"
            />
          </div>
        </template> -->
        <div class="title applyCompanyName">申请加盟</div>
        <!-- 1111111111111111111111111111111111111111111申请加盟中钧科技有限公司 -->
        <div class="details">
          <div class="item_details">审批类型</div>
          <Showorno class="inner_details" data="申请加盟企业" />
        </div>
        <div class="details">
          <div class="item_details applyCompanyName">申请单位</div>
          <Showorno class="inner_details" :data="chang || EMPTY_VAL_TEXT" />
        </div>
        <div class="details applyDeptName">
          <div class="item_details">申请部门</div>
          <Showorno class="inner_details" :data="chang || EMPTY_VAL_TEXT" />
        </div>
        <div class="details applyUserName">
          <div class="item_details">申请人</div>
          <Showorno
            class="inner_details am-text-break"
            :data="chang || EMPTY_VAL_TEXT"
            :maxLen="50"
          />
        </div>
        <div class="details createTimeStr">
          <div class="item_details">申请时间</div>
          <Showorno
            class="inner_details am-text-break"
            :data="chang || EMPTY_VAL_TEXT"
            :maxLen="50"
          />
        </div>
        <!-- 审批详情说明 -->
        <div class="details detail">
          <div class="item_details">详情说明</div>
          <Showorno class="inner_details" :data="chang || EMPTY_VAL_TEXT" />
        </div>
        <!-- 加盟企业概况 -->
        <div class="details joinCompanyName">
          <div class="item_details">企业名称</div>
          <Showorno class="inner_details" :data="chang || EMPTY_VAL_TEXT" />
        </div>
        <div class="details joinCompanyType">
          <div class="item_details">企业类型</div>
          <Showorno class="inner_details" :data="chang || EMPTY_VAL_TEXT" />
        </div>
        <div class="details">
          <div class="item_details joinCompanyBusinessAddress">经营地址</div>
          <Showorno class="inner_details" :data="chang || EMPTY_VAL_TEXT" />
        </div>
        <div class="details">
          <div class="item_details joinCompanyMainBusiness">主营业务</div>
          <Showorno class="inner_details" :data="chang || EMPTY_VAL_TEXT" />
        </div>
        <div class="details joinCompanyMainIntroduction">
          <div class="item_details">公司简介</div>
          <Showorno class="inner_details" :data="chang || EMPTY_VAL_TEXT" />
        </div>
      </div>
    </div>
    <div class="zhanwei"></div>
    <!-- 1表示企业  0表示客户 -->
    <!-- <ExamineBottom :customer="customer" v-if="detail.status == 1" /> -->
    <!-- v-if="iosFlag == '3' && $route.query.id && showOperation" -->
    <ApplyFooterBar
      @approvalAgree="approvalAgree"
      @reject="reject"
      @approvalMore="approvalMore"
    ></ApplyFooterBar>
    <van-dialog
      class="inputDilaog"
      v-model="showDialogNo"
      overlay
      :before-close="areaConfirm"
      show-cancel-button
      confirm-button-text="确定"
      confirm-button-color="#5792FD"
      cancel-button-color="#969696"
    >
      <div class="text-title">请输入拒绝原因</div>
      <div class="text_area">
        <van-field
          v-model="message"
          rows="4"
          autosize
          type="textarea"
          maxlength="300"
          placeholder="请输入拒绝原因"
          show-word-limit
          class="textarea"
        />
      </div>
    </van-dialog>
    <van-action-sheet
      v-model="showSheet"
      :actions="actions"
      cancel-text="取消"
      color="#f5f5f5"
      :round="false"
      @select="selectMore"
    >
    </van-action-sheet>
  </div>
</template>

<script>
// const daishenpiImg = require("@/assets/image/app_h5/MemberManagement/docx.png");
// const shenpizhongImg = require("@/assets/image/app_h5/MemberManagement/pdf.png");
// const yitongguoImg = require("@/assets/image/app_h5/MemberManagement/xlsx.png");
// const yijujueImg = require("@/assets/image/app_h5/MemberManagement/xlsx.png");
import { Toast } from "vant";
// import http from "@/api/apiMember";
// import { EMPTY_VAL_TEXT } from "@/views/app_h5/utils";
const applyApi = process.env.VUE_APPLY_URL;
export default {
  components: {
    Showorno: () => import("./components/showorno.vue"),
    // import("@/views/app_h5/leasing/components/ApplyFooterBar"),
    ApplyFooterBar: () => import("./components/ApplyFooterBar"),
  },
  data() {
    return {
      EMPTY_VAL_TEXT: "暂无数据",
      imgStatus: "",
      chang: "替换替换",
      no: "",
      jToken:"",
      detail: {},
      titleVal: "审批详情",
      showDialogNo: false,
      showSheet: false,
      message: "",
      actions: [
        { name: "转交", color: "#5792FD" },
        { name: "加签", color: "#5792FD" },
      ],
      showOperation:"",
      // 审批日志入口
      hasApply: true,
      // 审批日志api
      applyApi,
    };
  },
  created() {
    // 获取登录的token
    this.$hybrid.syncToken({}, (data) => {
      data = JSON.parse(data);
      this.jToken = data.resourceAPPToken;
    });
    // 设置头部
    this.no = this.$route.query.no;
    // 审批页-- 1 待办 2 我发起
    this.showOperation = this.$route.query.showOperation;
    // 审批页原生顶部展示审批日志入口
    this.$hybrid.sendTitle(
      { title: this.titleVal, hasApply:this.hasApply,url:`${this.applyApi}/opeationLog?id=${this.$router.query.auditId}` },
      function (data) {}
    );
  },
  async mounted() {
    // Toast.loading({
    //   getContainer: "#loading",
    //   duration: 0,
    //   forbidClick: true,
    //   icon: require("@/assets/loading.gif"),
    // });
    if (this.no) {
      // https://api.sgbwl.com/sgb-member/ov1/member/approve/getMemberApproveDetailByNo/60403f3ee4b056de36cb2e47
      // const { result } = await http.getMemberApproveDetailByNo(this.no);
      // console.log(result);
      // this.detail = result;
      console.log(this.no);
    }
    // Toast.clear();
  },
  methods: {
    // 审批状态
    // formatStatus(val) {
    //   switch (val) {
    //     case 3:
    //       this.imgStatus = "yitongguoImg";
    //       break;
    //     case 4:
    //       if (this.$route.query.showOperation == '1') {
    //         this.imgStatus = "daishenpiImg";
    //         break;
    //       } else {
    //         this.imgStatus = "shenpizhongImg";
    //         break;
    //       }
    //     case 1:
    //       this.imgStatus = "yijujueImg";
    //       break;
    //     default:
    //       break;
    //   }
    // },
    approvalAgree() {
      console.log("111111");
      // this.$hybrid.syncToken({}, async (data) => {
      //   let resdata = JSON.parse(data);
      //   if (
      //     Object.keys(resdata).length === 0 ||
      //     resdata.resourcePCToken.length < 3
      //   ) {
      //     this.jToken = false;
      //   } else {
      //     this.jToken = true;
      //   }
      //   if (!this.jToken) {
      //     // 未登录
      //     this.$delect(`请重新登录!`, ``)
      //       .then(async () => {
      //         this.$hybrid.loginAgain({}, function (data) {});
      //       })
      //       .catch((error) => {});
      //   } else {
      //     this.$delect(`确认通过申请？`, ``)
      //       .then(async () => {
      //         Toast.loading({
      //           getContainer: "#loading",
      //           duration: 0,
      //           forbidClick: true,
      //           icon: require("@/assets/loading.gif"),
      //         });
      //         //通过申请

      //         // 首先去获取个人身份信息
      //         let userInfo = await http.getUserInfo();
      //         console.log(userInfo);

      //         let objData = {
      //           companyId: userInfo.data.companyNo,
      //           userId: userInfo.data.no,
      //           reason: "", // 同意的时候,审批意见为空
      //           id: this.$route.query.auditId, // 传过来的需要审批的审批id
      //         };
      //         // 通过申请接口
      //         let approve = await http.approverMakerAsPass(objData);
      //         Toast.clear();
      //         if (approve.data === "操作成功") {
      //           // 接口调用成功
      //           this.$hybrid.BackToDoList({}, function (data) {});
      //         } else {
      //           Toast(approve.msg);
      //         }
      //       })
      //       .catch((error) => {
      //         console.log(error);
      //       });
      //   }
      // });
    },
    reject() {
      this.showDialogNo = true;
      // this.$hybrid.syncToken({}, async (data) => {
      //   let resdata = JSON.parse(data);
      //   if (
      //     Object.keys(resdata).length === 0 ||
      //     resdata.resourcePCToken.length < 3
      //   ) {
      //     this.jToken = false;
      //   } else {
      //     this.jToken = true;
      //   }
      //   if (!this.jToken) {
      //     // 未登录
      //     this.$delect(`请重新登录!`, ``)
      //       .then(async () => {
      //         this.$hybrid.loginAgain({}, function (data) {});
      //       })
      //       .catch((error) => {});
      //   } else {
      //     this.showDialogNo = true;
      //   }
      // });
    },
    // textarea下确定事件.同意
    async areaConfirm(action, done) {
      if (action === "confirm") {
        console.log(this.message);
        if (!this.message) {
          Toast("请输入拒绝原因!");
          return done(false);
        }
        // Toast.loading({
        //   getContainer: "#loading",
        //   duration: 0,
        //   forbidClick: true,
        //   icon: require("@/assets/loading.gif"),
        // });
        //拒绝申请

        // 首先去获取个人身份信息
        // let userInfo = await http.getUserInfo();
        // console.log(userInfo);

        // let objData = {
        //   companyId: userInfo.data.companyNo,
        //   userId: userInfo.data.no,
        //   reason: this.message, // 同意的时候,审批意见为空
        //   id: this.$route.query.auditId, // 传过来的需要审批的审批id
        // };
        // // 拒绝申请接口
        // let approve = await http.approverMakerAsRefuse(objData);
        // console.log(approve);
        // Toast.clear();
        // if (approve.data === "操作成功") {
        //   // 接口调用成功
        //   this.$hybrid.BackToDoList({}, function (data) {});
        // } else {
        //   Toast(approve.msg);
        // }
        return done();
      } else {
        return done();
      }
    },
    approvalMore() {
      this.showSheet = true;
    },
    // 审批详情点击更多
    selectMore(action, index) {
      // index 0 转交,indedx 1 加签
      if (index == 0) {
        console.log(action);
        console.log("转交");
        this.showSheet = false;
      }
      if (index == 1) {
        console.log(action);
        console.log("加签");
        this.showSheet = false;
      }
    },
  },
};
</script>

<style scoped lang="stylus">
.appDetails {
  min-height: 100vh;
  background: #F5F5F5;
  font-family: PingFangSC-Regular, PingFang SC;

  .zhanwei {
    height: 1.6rem;
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

    .details:last-child {
      margin-bottom: 0rem;
    }
  }

  .inner_details {
    flex: 1;
    font-weight: 400;
    color: #333333;
    font-size: 0.37rem;
  }

  .text_area {
    margin: 0.533rem 0.37rem;
    font-size: 0.37rem;

    .textarea {
      border: 0.03rem solid #EDEDED;
      border-radius: 0.11rem;
      height: 3.5rem;
    }
  }

  .text-title {
    font-size: 0.48rem;
    color: #000000;
    margin-top: 0.5rem;
    text-align: center;
  }

  >>>.inputDilaog {
    background-color: #F6F5F3;

    .van-dialog__content {
      .van-cell__value {
        height: 2.5rem;

        .van-field__body {
          height: 100%;
          overflow-y: auto;
        }
      }
    }
  }

  >>>.van-action-sheet {
    color: #666666;
    font-family: PingFang SC;

    .van-action-sheet__cancel::before {
      height: 0;
    }

    .van-action-sheet__item {
      font-weight: 500;
      border-bottom: 1px solid #EDEDED;
    }
  }
}
</style>