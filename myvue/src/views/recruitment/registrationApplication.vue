<!--
 * @Description: 报名申请详情
-->
<template>
  <div class="applyMain">
    <!-- <div style="height: .2rem;"></div>
		<div class="jBg" style="border-top: 1.5rem solid #79A2FF;" v-if="$route.query.state == 0"></div>
		<div class="jBg" style="border-top: 1.5rem solid #06C764;" v-if="$route.query.state == 1"></div>
		<div class="jBg" style="border-top: 1.5rem solid #FF2928;" v-if="$route.query.state == 2"></div>
		<div class="jBg" style="border-top: 1.5rem solid #999999;" v-if="$route.query.state == 3"></div>
		<div class="jTxt" v-if="$route.query.state == 0">审核中</div>
		<div class="jTxt" v-if="$route.query.state == 1">通过</div>
		<div class="jTxt" v-if="$route.query.state == 2">不通过</div>
		<div class="jTxt" v-if="$route.query.state == 3">已超时</div> -->
    <!-- 头部 -->
    <div class="applyMain-top">
      <div class="jCell">
        <div class="jTit">招标名称：</div>
        <div class="jInfo">测试招采</div>
      </div>
      <div class="jCell">
        <div class="jTit">申请人/企业：</div>
        <div class="jInfo">陕西中钧科技有限公司</div>
        <div class="jEnter">陕企业</div>
      </div>
    </div>
    <!-- 审批时间和拒绝原因 -->
    <div class="applyMain-reject">
      <div class="top-reject">
        <van-icon name="warning" />
        <span>不通过原因:不通过原因不通过原因不通过原因</span>
      </div>
      <div class="under-approval am-flex-rc-between">
        <span>审批人:张三 </span>
        <span> 审批时间: 2019-11-07 09:39 </span>
      </div>
    </div>
    <!-- 报名申请内容详情 -->
    <div class="applyMain-body">
      <!-- 申请信息 -->
      <div class="app_title am-flex-row-center">
        <div class="div_empty"></div>
        <div class="app_title_text">申请信息</div>
      </div>
      <div class="jCell">
        <div class="jTit">联系人</div>
        <div class="jInfo">detail.zcTenderBidApply.bidderName</div>
      </div>
      <div class="jCell">
        <div class="jTit">联系电话</div>
        <div class="jInfo">detail.zcTenderBidApply.bidderName</div>
      </div>
      <div class="jCell">
        <div class="jTit">备注</div>
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
      <!-- 投标人要求响应 -->
      <div class="app_title am-flex-row-center">
        <div class="div_empty"></div>
        <div class="app_title_text">投标人要求响应</div>
      </div>
      <div class="response-box">
        <div class="response-require jCell">
          <div class="jTit">业绩要求</div>
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
        <!-- <div class="response-enclosure jCell">
          <div class="jTit">附件名称</div>
          <div class="jInfo am-text-break">下载</div>
        </div> -->
      </div>
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

    <div style="padding: 0 0.3rem" class="bgFFF">
      <!-- <div class="jCell">
        <div class="jTit">相关资质证件</div>
        <div class="jInfo">
          <div class="jInfo"
					v-for="(x,index) in detail.files"
					:key="index"
					@click="download(x.path)"
					style="color: #5792FD;">
						<van-icon name="description" size=".4rem"/>
						附件下载
					</div>
        </div>
      </div> -->
      <!-- <div
        class="jCell"
        v-for="(item, index) in detail.tenderingApplys"
        :key="index"
      >
        <div class="jTit">item.applyTitle</div>
        <div class="jInfo">item.applyContent</div>
      </div>
      <div class="jCell">
        <div class="jTit">申请时间</div>
        <div class="jInfo">detail.zcTenderBidApply.created | formatDate</div>
      </div> -->
    </div>

    <!-- <div class="plr titName">
      <div style="width: 0.1rem; margin-right: 0.1rem">
        <img src="@/assets/image/tit.png" width="100%">
      </div>
      <div>投标人要求响应</div>
    </div> -->
    <!-- <van-checkbox-group v-model="result">
      <van-cell-group
        v-for="(item, index) in detail.zcTenderingAskVOs"
        :key="index"
        style="margin-bottom: 0.2rem"
      >
        <van-cell clickable :title="111">
          <template #right-icon>
            <van-checkbox :name="item.askKey" ref="checkboxes" disabled />
          </template>
        </van-cell>
        <van-field label="描述" :value="描述" readonly />
        <van-field label="附件" :value="描述" readonly>
          <template #button>
            <van-button
              size="mini"
              plain
              type="info"
              @click="download(item.fileUrl)"
              >下载</van-button
            >
          </template>
        </van-field>
      </van-cell-group>
    </van-checkbox-group> -->

    <!-- <template>
      <div class="plr titName">
        <div style="width: 0.1rem; margin-right: 0.1rem">
          <img src="@/assets/image/tit.png" width="100%">
        </div>
        <div>审批结果</div>
      </div>
      <div style="padding: 0 0.3rem" class="bgFFF">
        <div class="jCell">
          <div class="jTit">审批结果</div>
          <div class="jInfo">detail.zcTenderBidApply.stateName</div>
        </div>
        <div class="jCell">
          <div class="jTit">不通过原因</div>
          <div class="jInfo">detail.zcTenderBidApply.refusalReasons</div>
        </div>
        <div class="jCell">
          <div class="jTit">审批时间</div>
          <div class="jInfo">detail.zcTenderBidApply.updated | formatDate</div>
        </div>
      </div>
    </template> -->
    <div style="display: flex; position: fixed; bottom: 0; width: 100%">
      <van-button
        color="#FF2927"
        block
        plain
        style="border: none"
        @click="jShow = true"
        >不通过</van-button
      >
      <van-button
        color="linear-gradient(to right, #6B78FF, #79A2FF)"
        block
        @click="jPass()"
        >通过</van-button
      >
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
    console.log(this.$route.query.id)
    console.log(this.$route.query.name)
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
/* .plr {
  padding: 0.32rem;
}
.titName {
  display: flex;
  align-items: center;
  font-size: 0.36rem;
  font-weight: bold;
}
.bgFFF {
  background-color: #ffffff;
}

.jPrice {
  color: #ff4b10;
}
.jMain {
  position: relative;
}
.jBg {
  position: absolute;
  top: 0.2rem;
  right: 0;
  width: 0;
  height: 0;
  border-left: 1.5rem solid transparent;
}
.jTxt {
  position: absolute;
  top: 0.5rem;
  right: 0;
  color: #ffffff;
  transform: rotate(45deg);
  width: 1rem;
  text-align: center;
} */
</style>
