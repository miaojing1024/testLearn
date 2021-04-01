<!--
 * @Description: 投标记录详情
-->
<template>
  <div class="applyMain">
    <!-- 报名申请内容详情 -->
    <div class="applyMain-body">
      <!-- 基础信息 -->
      <div class="app_title am-flex-row-center">
        <div class="div_empty"></div>
        <div class="app_title_text">基础信息</div>
      </div>
      <div class="jCell">
        <div class="jTit">个人/企业名称:</div>
        <div class="jInfo">企业名称企业名称</div>
      </div>
      <div class="jCell">
        <div class="jTit">联系人:</div>
        <div class="jInfo">联系人名字e</div>
      </div>
      <div class="jCell">
        <div class="jTit">联系电话:</div>
        <div class="jInfo">detail.zcTenderBidApply.remark</div>
      </div>
      <div class="jCell">
        <div class="jTit">总报价:</div>
        <div class="jInfo">detail.zcTenderBidApply.remark</div>
      </div>
      <div class="jInfo" style="color: #5792fd">
        <van-icon name="description" size=".4rem" />
        附件下载
      </div>
      <div class="jCell">
        <div class="jTit">自定义字段名称</div>
        <div class="jInfo">d自定义字段内容</div>
      </div>
      <div class="jCell">
        <div class="jTit">所在地:</div>
        <div class="jInfo">新疆维吾尔自治区阿勒泰地区… </div>
        <div class="jEnter">陕企业</div>
      </div>
      <!-- 招标要求响应 -->
      <div class="app_title am-flex-row-center">
        <div class="div_empty"></div>
        <div class="app_title_text">招标要求响应</div>
      </div>
      <div class="response-box">
        <div class="response-require jCell">
          <div class="jTit">到货时间</div>
          <div class="jInfo am-text-break">自定义字段</div>
        </div>
        <div class="response-inner jCell">
          <div class="jTit">描述</div>
          <div class="jInfo am-text-break">自定义字段</div>
        </div>
        <div class="jInfo" style="color: #5792fd">
          <van-icon name="description" size=".4rem" />
          附件下载
        </div>
      </div>
      <!-- 报价清单 -->
      <div class="app_title am-flex-row-center">
        <div class="div_empty"></div>
        <div class="app_title_text">报价清单</div>
      </div>
      <div class="detailedList-boX">
        <div class="detailedList-tit">工程名称工程名称工程名称</div>
        <div class="detailedList-inner">
          项目特征描述项目特征描述项目特征描述项目特征描述
          技术要求技术要求技术要求技术要求技术要求技术要求
          投标备注投标备注投标备注投标备注投标备注投标备注
        </div>
        <div class="detailedList-info">附件</div>
        <div class="detailedList-under am-flex-rc-between">
          <span>1吨</span>
          <span>￥123</span>
        </div>
      </div>
    </div>
    <div class="zhanwei"></div>
  </div>
</template>

<script>
import Vue from "vue";
import { Checkbox, CheckboxGroup, Dialog, ActionSheet, Toast } from "vant";

Vue.use(Checkbox);
Vue.use(CheckboxGroup);
// import api from "@/api/apiUserBid";
export default {
  components: {},
  data() {
    return {
      titleVal: "报名申请详情",
      detail: {
        zcTenderingAskVOs: [111, 222, 333],
        tenderingApplys: [444, 555, 666],
      },
      result: [],
    };
  },
  mounted() {},
  created() {
    // this.getInfo()
  },

  methods: {
    // 不通过
    jNoPass() {
      if (!reason) {
        Toast.fail("请输入原因");
        return false;
      }
      this.reviewApply(2);
      this.jShow = false;
    },
    // 通过
    jPass() {
      Dialog.confirm({
        messageAlign: "left",
        message: "通过后将不能修改，确定要通过该企业的报名资质吗？",
      })
        .then(() => {
          this.reviewApply(1);
        })
        .catch(() => {
          console.log("取消");
        });
    },
    // 下载
    download(e) {
      this.$hybrid.accessory({ name: "", url: e }, function (data) {});
    },
    // 获取详情
    // async getInfo(){
    // 	let res = await api.tenderBidApplyDetail({businessId: this.$route.query.id,businessType: 3});
    // 	if(res.code == 0){
    // 		this.detail = res.result;
    // 		this.titleVal = this.detail.name + '-报名申请详情';
    // 		this.$hybrid.sendTitle({"title": this.titleVal}, function(data) {});
    // 		this.detail.zcTenderingAskVOs.forEach((e)=>{
    // 			this.result.push(e.askKey)
    // 		})
    // 	}
    // }
  },
};
</script>
<style lang="stylus">
@import url('../am-common.styl');

.applyMain {
  min-height: 100vh;
  background: #F5F5F5;
  font-family: PingFangSC-Regular, PingFang SC;

  .zhanwei {
    height: 1.6rem;
  }

  .applyMain-top {
    background: #fff;
    padding: 0.2rem;
    margin-bottom: 10px;
  }

  .applyMain-reject {
    background: #fff;
    padding: 0.2rem;
    margin-bottom: 10px;

    .under-approval {
      margin-top: 10px;
    }
  }

  .jCell {
    display: flex;
    font-size: 0.34rem;
    margin-bottom: 0.2rem;
  }

  .jTit {
    color: #666666;
    width: 3rem;
  }

  .jInfo {
    color: #333333;
    // display: flex;
    flex: 1;
    // align-items: center;
    word-break: break-all;
  }

  .jCell:last-child {
    margin-bottom: 0;
  }

  .jEnter {
    width: 50px;
  }

  .applyMain-body {
    padding: 10px;
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

    .response-box {
      background: #ccc;
    }
  }
}
</style>
<style>
.jMain .van-checkbox__icon--checked .van-icon {
  color: #fff !important;
  background-color: #1989fa !important;
  border-color: #1989fa !important;
}
</style>
<style scoped>

</style>
