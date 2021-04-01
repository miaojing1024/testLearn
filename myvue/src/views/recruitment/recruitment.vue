<!--
 * @Description: 招标详情-个人中心
-->
<template>
  <div class="appDetails-zc">
    <!-- 审核不通过 -->
    <div class="reject-top">
      <div class="reject-details">
        审批不通过原因：原因原因原因原因原因原因原因原因原
      </div>
      <div class="reject-details">审批不通过时间：2020-09-09 12:20:22</div>
    </div>
    <!-- 公司信息头部 -->
    <div class="recruitment-top">
      <div class="recruitment-title">
        一八五团民兵项目招标项目招标项目招标项目项目招标项目招标项目招标项目招标项
      </div>
      <div class="recruitment-tag">
        <van-tag color="#ffe1e1" text-color="#ad0000" class="tag-btn"
          >专业工程</van-tag
        >
        <van-tag color="#ffe1e1" text-color="#ad0000" class="tag-btn"
          >公开报名</van-tag
        >
        <van-tag color="#ffe1e1" text-color="#ad0000" class="tag-btn"
          >资格预审</van-tag
        >
        <van-tag color="#ffe1e1" text-color="#ad0000" class="tag-btn"
          >报名中</van-tag
        >
      </div>
      <div class="recruitment-body">
        <div class="details-zc">已报名：4</div>
        <div class="details-zc">本轮已投标：4</div>
        <div class="details-zc">概算金额：10000，0000.00元</div>
        <div class="details-zc">
          报名时间：
          <div>2020-08-08 12:20:22</div>
          <div>2020-08-08 12:20:22</div>
        </div>
        <div class="details-zc">提交时间：2020-09-09 12:20:22</div>
      </div>
    </div>
    <!-- 信息详情 -->
    <div class="appBody-zc">
      <!-- tab选项卡 -->
      <van-tabs v-model="activeName" sticky>
        <!-- 邀请记录tab -->
        <van-tab title="邀请记录" name="邀请记录">
          <div class="app_title am-flex-row-center">
            <div class="div_empty"></div>
            <div class="app_title_text">邀请记录</div>
          </div>
          <!-- 公司的邀请记录 -->
          <div class="company-invit">
            <div class="company-top am-flex-row-center">
              <div class="company-top-left">
                <img src="" alt="img" class="c-img am-block" />
              </div>
              <div class="company-top-right">
                <div class="top-title">建华科技有限公司</div>
                <div class="top-level">
                  <span class="top-level-l">三星会员</span>
                  <span class="top-level-r">建设</span>
                </div>
              </div>
            </div>
            <div class="company-under">
              <div class="details-zc">
                <div class="item_details-zc">联系人</div>
                <Showorno
                  class="inner-details-zc"
                  :data="'shijian ' || EMPTY_VAL_TEXT"
                />
              </div>
              <div class="details-zc">
                <div class="item_details-zc">联系电话</div>
                <Showorno
                  class="inner-details-zc"
                  :data="'18966895466 ' || EMPTY_VAL_TEXT"
                />
                <div class="invit-again btn-color" @click="invitAgain()">
                  再次邀请
                </div>
              </div>
            </div>
            <img src="" alt="img" class="img-position am-block" />
          </div>
          <!-- 个人的邀请 -->
          <div class="personal-invit am-flex-row-center">
            <img src="" alt="img" class="img-position am-block" />
            <div class="personal-left">
              <img src="" alt="img" class="c-img am-block" />
            </div>
            <div class="personal-right">
              <div class="personal-name">战三</div>
              <div class="personal-phone">18888888888</div>
            </div>
          </div>
        </van-tab>
        <!-- 报名记录tab -->
        <van-tab title="报名记录" name="报名记录">
          <div class="app_title am-flex-row-center">
            <div class="div_empty"></div>
            <div class="app_title_text">报名记录</div>
          </div>
          <!-- 公司的报名记录 -->
          <div class="company-invit">
            <div class="company-top am-flex-row-center">
              <div class="company-top-left">
                <img src="" alt="img" class="c-img am-block" />
              </div>
              <div class="company-top-right">
                <div class="top-title">建华科技有限公司</div>
                <div class="top-level">
                  <span class="company-sign-l">刘莹</span>
                  <span class="company-sign-r">1896666666</span>
                </div>
              </div>
            </div>
            <div class="company-under">
              <div class="details-zc">
                <div class="item_details-zc">取消时间：</div>
                <div class="inner-details-zc">2020-4-3 10:19:20</div>
              </div>
              <div class="details-zc">
                <div class="item_details-zc">取消原因：</div>
                <div class="inner-details-zc">不符合要求</div>
              </div>
              <div class="details-zc">
                <div class="item_details-zc">报名时间</div>
                <div class="inner-details-zc">2020-12-12 15:10</div>
                <div class="invit-again btn-color" @click="toRegistRecord(1)">
                  查看详情
                </div>
              </div>
            </div>
            <img src="" alt="img" class="img-position am-block" />
          </div>
          <!-- 个人的报名记录 -->
          <div class="personal-invit am-flex-row-center">
            <img src="" alt="img" class="img-position am-block" />
            <div class="personal-left">
              <img src="" alt="img" class="c-img am-block" />
            </div>
            <div class="personal-right">
              <div class="personal-name">战三</div>
              <div class="personal-phone">18888888888</div>
            </div>
          </div>
          <div class="sign-under am-flex-rc-between">
            <div class="sign-time">报名时间：2020.0.0</div>
            <div class="sign-details btn-color" @click="toRegistRecord(1)">
              查看详情
            </div>
            <div class="sign-cancel btn-color" @click="disqualification()">
              取消资格
            </div>
          </div>
          <!-- 报名申请 -->
          <div class="app_title am-flex-row-center">
            <div class="div_empty"></div>
            <div class="app_title_text">报名申请</div>
          </div>
          <div class="company-invit">
            <div class="company-top am-flex-row-center">
              <div class="company-top-left">
                <img src="" alt="img" class="c-img am-block" />
              </div>
              <div class="company-top-right">
                <div class="top-title">建华科技有限公司</div>
                <div class="top-level">
                  <span class="company-sign-l">刘莹</span>
                  <span class="company-sign-r">1896666666</span>
                </div>
              </div>
            </div>
            <div class="company-under">
              <div class="details-zc">
                <div class="item_details-zc">报名时间</div>
                <div class="inner-details-zc">2020-12-12 15:10</div>
                <div class="invit-again btn-color" @click="toRegistApply(1)">
                  查看详情
                </div>
                <!-- <div class="invit-again btn-color" @click="toRegistApply(1)">审批</div> -->
              </div>
            </div>
            <img src="" alt="img" class="img-position am-block" />
          </div>
          <!-- <div class="sign-apply">
            <div class="sign-apply-top am-flex-row-center">
              <div class="sign-apply-img">
                <img src="" alt="img" class="c-img am-block" />
              </div>
              <div class="sign-apply-right">
                <div class="sign-apply-title">刘莹</div>
                <div class="sign-apply-inner">1896688888</div>
              </div>
            </div>
            <div class="sign-apply-under am-flex-rc-between">
              <div class="sign-apply-time">报名时间：2020.0.0</div>
              <div class="sign-apply-btn">审批</div>
            </div>
          </div> -->
        </van-tab>
        <!-- 投标记录tab -->
        <van-tab title="投标记录" name="投标记录">
          <!-- 投标记录 -->
          <div class="app_title am-flex-row-center">
            <div class="div_empty"></div>
            <div class="app_title_text">投标记录</div>
          </div>
          <van-tabs v-model="active">
            <van-tab title="第一轮">
              <div class="round-box">
                <div class="round-title">木子李公司</div>
                <div class="round-money">总报价：1000.00元</div>
                <div class="round-score">
                  <span>评标进度：3/3</span>
                  <span>综合得分：98</span>
                </div>
                <div class="round-time am-flex-rc-between">
                  <div class="round-time-left">报价时间：2020-12-12 15:10</div>
                  <div class="btn-color" @click="toBidRecord(1)">查看详情</div>
                </div>
              </div>
            </van-tab>
            <van-tab title="第二轮"></van-tab>
            <van-tab title="第三轮"></van-tab>
            <van-tab title="第四轮"></van-tab>
          </van-tabs>
          <!-- <div class="detailed-list">
            <div class="list-title"></div>
            <div class="list-inner"></div>
            <div class="response-enclosure details-zc">
              <div class="item_details-zc">附件名称</div>
              <div class="inner-details-zc am-text-break">下载</div>
            </div>
          </div> -->
        </van-tab>
        <!-- 函询tab -->
        <van-tab title="函询" name="函询">
          <div class="app_title am-flex-row-center">
            <div class="div_empty"></div>
            <div class="app_title_text">函询</div>
          </div>
          <div class="inquiry-box">
            <div class="inquiry-top am-flex-row-center">
              <div class="inquiry-top-left">
                <img src="" alt="img" class="c-img am-block" />
              </div>
              <div class="inquiry-top-right">
                <div class="top-name">新疆绿翔科技有限公司</div>
                <div class="top-time">2020/6/15 12:20:22</div>
              </div>
            </div>
            <div class="inquiry-min">
              <div class="min-tit">
                我的疑问我的疑问我的疑问我的疑问我的疑问我的疑问？
              </div>
              <Showorno
                class="min-request"
                :maxLen="50"
                data="请求答复请求答复请求答复请求答复请求答复请求答复请求答复请求答复请求答复求答复请请求答复答复请求答复求答复请请求答复"
              />
              <div class="min-request">附件下载</div>
            </div>
            <div class="inquiry-under am-flex-rc-center">
              <span>答复</span>
            </div>
            <!-- <div class="inquiry-under">
              <div class="inquiry-top am-flex-row-center">
                <div class="inquiry-top-left">
                  <img src="" alt="img" class="c-img am-block" />
                </div>
                <div class="inquiry-top-right">
                  <div class="top-name">新疆绿翔科技有限公司</div>
                  <div class="top-time">2020/6/15 12:20:22</div>
                </div>
              </div>
              <Showorno
                class="min-request"
                :maxLen="50"
                data="请求答复请求答复请求答复请求答复请求答复请求答复请求答复请求答复请求答复求答复请请求答复答复请求答复求答复请请求答复"
              />
            </div> -->
            <img src="" alt="img" class="img-position am-block" />
          </div>
          <div class="inquiry-box">
            <div class="inquiry-top am-flex-row-center">
              <div class="inquiry-top-left">
                <img src="" alt="img" class="c-img am-block" />
              </div>
              <div class="inquiry-top-right">
                <div class="top-name">新疆绿翔科技有限公司</div>
                <div class="top-time">2020/6/15 12:20:22</div>
              </div>
            </div>
            <div class="inquiry-min">
              <div class="min-tit">
                我的疑问我的疑问我的疑问我的疑问我的疑问我的疑问？
              </div>
              <Showorno
                class="min-request"
                :maxLen="50"
                data="请求答复请求答复请求答复请求答复请求答复请求答复请求答复请求答复请求答复求答复请请求答复答复请求答复求答复请请求答复"
              />
              <div class="min-request">附件下载</div>
            </div>
            <!-- <div class="inquiry-under am-flex-rc-center">
              <span>答复</span>
            </div> -->
            <div class="inquiry-under">
              <div class="inquiry-top am-flex-row-center">
                <div class="inquiry-top-left">
                  <img src="" alt="img" class="c-img am-block" />
                </div>
                <div class="inquiry-top-right">
                  <div class="top-name">新疆绿翔科技有限公司</div>
                  <div class="top-time">2020/6/15 12:20:22</div>
                </div>
              </div>
              <Showorno
                class="min-request"
                :maxLen="50"
                data="请求答复请求答复请求答复请求答复请求答复请求答复请求答复请求答复请求答复求答复请请求答复答复请求答复求答复请请求答复"
              />
            </div>
            <img src="" alt="img" class="img-position am-block" />
          </div>
        </van-tab>
        <!-- 审批记录tab -->
        <van-tab title="审批记录" name="审批记录">
          <!-- 投标人要求响应 -->
          <div class="app_title am-flex-row-center">
            <div class="div_empty"></div>
            <div class="app_title_text">审批记录</div>
          </div>
          <div class="approval-box">
            <div class="approval-top am-flex-rc-between">
              <div class="approval-title">标题标题标题</div>
              <div class="approval-time">2020-12-12 15:10</div>
            </div>
            <div class="approval-under am-flex-rc-between">
              <div class="approval-tag">
                <van-tag color="#7232dd">招标发布</van-tag>
                <span class="approval-tag-r">当前流程节点名称</span>
              </div>
              <div class="approval-status">待审批</div>
            </div>
          </div>
          <div class="approval-box">
            <div class="approval-top am-flex-rc-between">
              <div class="approval-title">标题标题标题</div>
              <div class="approval-time">2020-12-12 15:10</div>
            </div>
            <div class="approval-under am-flex-rc-between">
              <div class="approval-tag">
                <van-tag color="#7232dd">招标发布</van-tag>
                <span class="approval-tag-r">当前流程节点名称</span>
              </div>
              <div class="approval-status">待审批</div>
            </div>
          </div>
          <div class="approval-box">
            <div class="approval-top am-flex-rc-between">
              <div class="approval-title">标题标题标题</div>
              <div class="approval-time">2020-12-12 15:10</div>
            </div>
            <div class="approval-under am-flex-rc-between">
              <div class="approval-tag">
                <van-tag color="#7232dd">招标发布</van-tag>
                <span class="approval-tag-r">当前流程节点名称</span>
              </div>
              <div class="approval-status">待审批</div>
            </div>
          </div>
          <div class="approval-box">
            <div class="approval-top am-flex-rc-between">
              <div class="approval-title">标题标题标题</div>
              <div class="approval-time">2020-12-12 15:10</div>
            </div>
            <div class="approval-under am-flex-rc-between">
              <div class="approval-tag">
                <van-tag color="#7232dd">招标发布</van-tag>
                <span class="approval-tag-r">当前流程节点名称</span>
              </div>
              <div class="approval-status">待审批</div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="zhanwei"></div>
  </div>
</template>

<script>
import { Toast } from "vant";
// import http from "@/api/apiMember";
// import { EMPTY_VAL_TEXT } from "@/views/app_h5/utils";
export default {
  components: {
    Showorno: () => import("@/components/showorno.vue"),
  },
  data() {
    return {
      EMPTY_VAL_TEXT: "暂无内容",
      detail: {},
      activeName: "函询",
      active: 0,
    };
  },
  created() {
    // 设置头部
    // this.$hybrid.sendTitle({ title: "审核信息" }, function (data) {});
    // this.no = this.$route.query.no;
    // this.companyNo = this.$route.query.companyNo;
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
    // 跳转到报名申请审批页面
    toRegistApply(id) {
      this.$router.push({
        name: "RegistrationApplication",
        query: { id: id, name: "我是报名申请审批" },
      });
    },
    // 跳转到报名记录页面
    // https://api.sgbwl.com/sgb-zhaocai/sv1/tender/tenderBidApply/tenderBidApplyInfoList
    toRegistRecord(id) {
      this.$router.push({
        name: "RegistrationRecord",
        query: { id: id, name: "我是报名记录" },
      });
    },
    // 跳转到投标记录页面
    toBidRecord(id) {
      this.$router.push({
        name: "BidRecord",
        query: { id: id, name: "我是投标记录" },
      });
    },
    // 再次邀请
    invitAgain() {
      console.log("再次邀请");
    },
    // 取消资格
    disqualification() {
      console.log("取消资格");
    },
    // formatStatus(val) {
    //   switch (val) {
    //     case 1:
    //       this.yanse = "shenhe";
    //       return "待审核";
    //     case 2:
    //       this.yanse = "tongguo";
    //       return "已通过";
    //     case 3:
    //       this.yanse = "jujue";
    //       return "已拒绝";
    //     default:
    //       break;
    //   }
    // },
  },
};
</script>

<style scoped lang="stylus">
@import url('../am-common.styl');

.appDetails-zc {
  min-height: 100vh;
  background: #F5F5F5;
  font-family: PingFangSC-Regular, PingFang SC;

  .reject-top {
    margin-bottom: 10px;
    background: #ffffff;
    padding: 10px 20px;
  }

  .recruitment-top {
    background: #ffffff;
    padding: 10px 20px;
    margin-bottom: 10px;

    .recruitment-title {
      font-size: 16px;
      font-weight: bold;
      line-height: 24px;
      margin-bottom: 10px;
    }

    .tag-btn {
      border: 1px solid red;
      border-radius: 5px;
      padding: 1px 10px;

      & + .tag-btn {
        margin-left: 10px;
      }
    }

    .recruitment-body {
      margin-top: 20px;
      font-size: 14px;
    }
  }

  .btn-color {
    color: blue;
  }

  .img-position {
    position: absolute;
    right: 0;
    top: 0;
    border: 1px solid red;
    width: 50px;
    height: 50px;
  }

  .zhanwei {
    height: 1.6rem;
  }

  .appBody-zc {
    padding: 10px 20px;
    padding-top: 0;
    background: #fff;

    .app_title {
      display: flex;
      margin-bottom: 0.3rem;
      align-items: center;

      .div_empty {
        width: 0.11rem;
        height: 0.4rem;
        background: #5792FD;
        margin-right: 0.32rem;
      }

      .app_title_text {
        font-size: 0.43rem;
        font-weight: bold;
        color: #5792FD;
        line-height: 0.59rem;
      }
    }

    .details-zc {
      display: flex;
      line-height: 0.53rem;
      font-size: 0.37rem;
      margin-bottom: 0.4rem;

      .item_details-zc {
        width: 2.4rem;
        color: #666666;
      }

      .inner-details-zc {
        flex: 1;
        font-weight: 400;
        color: #333333;
        font-size: 0.37rem;
      }
    }

    .details-zc:last-child {
      margin-bottom: 0rem;
    }

    // 邀请记录公司的
    .company-invit {
      position: relative;
      border: 1px solid red;

      .company-top-left {
        height: 50px;
        margin-right: 10px;
      }

      .company-top-right {
        .top-title {
          font-size: 16px;
          margin-bottom: 5px;
        }

        .top-level {
          margin-bottom: 5px;

          .top-level-l {
            border-radius: 5px;
            color: red;
            background: pink;
            margin-right: 10px;
            padding: 2px 5px;
          }

          .top-level-r {
            border-radius: 5px;
            color: blue;
            background: pink;
            padding: 2px 5px;
          }
        }
      }
    }

    // 邀请记录个人的
    .personal-invit {
      position: relative;
      border: 1px solid red;
      height: 100px;

      .personal-left {
        margin-right: 10px;
      }
    }

    // 投标记录
    .round-box {
      border: 1px solid #999;
      padding: 5px 10px;
      border-radius: 5px;

      .round-title {
        font-weight: bold;
        color: #999;
        font-size: 18px;
      }

      .round-score span:first-child {
        width: 150px;
        word-spacing: 20px;
        display: inline-block;
      }
    }

    // 函询
    .inquiry-box {
      position relative
      border 1px solid red
      & +.inquiry-box{
        margin-top 10px
      }
      .inquiry-min {
        padding: 20px 0;
        border-bottom: 1px solid #999;
      }
      .inquiry-under{
        padding 10px 0
      }
    }

    // 审批记录
    .approval-box {
      padding-bottom: 10px;

      & +.approval-box {
        border-top: 1px solid #999;
      }
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

