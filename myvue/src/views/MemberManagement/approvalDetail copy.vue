<!--
 * @Description: 设备详情（租赁板块）
 * @Autor: kangqihang
 * @LastEditors: 李昭
 * @LastEditTime: 2021-02-19 11:01:19
-->
<template>
  <div v-if="loadshow">
    <van-skeleton
      title
      :row="25"
      style="margin-top: 50px"
      v-for="item in 1"
      :key="item"
    />
  </div>
  <div v-else class="propertyDetails-box">
    <!-- 头部 -->
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#fff">
      <van-swipe-item
        class="slide-img"
        v-for="(item, index) in imgsArr"
        :key="index"
      >
        <img :src="item" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- 详情区 -->
    <ul class="item-mian">
      <li class="item-chil" style="position: relative">
        <p
          class="status-box"
          :class="yanse"
          v-if="
            propertyDetailsData.status == 3 ||
            propertyDetailsData.status == 4 ||
            (iosFlag == 3 && propertyDetailsData.status == 1)
          "
        >
          {{ formatStatus(propertyDetailsData.status) }}
        </p>
        <span v-if="propertyDetailsData.negotiable == 0" class="item-price">
          {{ propertyDetailsData.price }}{{ propertyDetailsData.priceUnit }}
        </span>
        <span v-if="propertyDetailsData.negotiable == 1" class="item-price"
          >面议</span
        >
        <p class="item-name">{{ propertyDetailsData.title }}</p>
        <span class="item-time"
          >发布时间：{{
            rentModuleCreateTimeFormat(propertyDetailsData.updateTime)
          }}</span
        >
        <span v-if="iosFlag == '1'">
          <span
            class="focus-btn-blue"
            @click="attention()"
            v-if="attentionShow"
          >
            <img
              class="imgs"
              src="@/assets/image/app_h5/gz_orange_blue.png"
              alt
            />
            <span>&nbsp;关注</span>
          </span>
          <span
            class="focus-btn-gray"
            @click="attention()"
            v-if="!attentionShow"
          >
            <img
              class="imgs"
              src="@/assets/image/app_h5/gz_orange_gray.png"
              alt
            />
            <span>&nbsp;已关注</span>
          </span>
        </span>
      </li>
      <li class="item-chil">
        <p class="item-title">设备详情</p>
        <van-row class="item-content">
          <van-col span="8" align="center" class="fac-width1">
            <div class="spec-1 one-row">
              {{
                `${propertyDetailsData.firstCategoryName}-${propertyDetailsData.secondCategoryName}`
              }}
            </div>
            <div class="spec-2">设备机型</div>
          </van-col>
          <van-col span="8" align="center" class="fac-width2">
            <div class="spec-1">
              {{ propertyDetailsData.brandNo || EMPTY_VAL_TEXT }}
            </div>
            <div class="spec-2">品牌</div>
          </van-col>
          <van-col span="8" align="center" class="fac-width3">
            <div class="spec-1">
              {{ propertyDetailsData.typeNo || EMPTY_VAL_TEXT }}
            </div>
            <div class="spec-2">出厂型号</div>
          </van-col>
        </van-row>
      </li>
      <li class="item-chil">
        <ul class="item-mains">
          <li
            v-for="(item, index) in propertyDetailsData.attributes"
            :key="index"
          >
            <span>{{ item.name }}</span>
            <span>{{
              `${item.val}${item.unit && item.unit !== "null" ? item.unit : ""}`
            }}</span>
          </li>
          <li>
            <span>所在地区</span>
            <span>
              {{ propertyDetailsData.provinceName }}
              {{ propertyDetailsData.cityName }}
              {{ propertyDetailsData.districtName }}
            </span>
          </li>
          <li @click="goToMapBack">
            <span class="item-toUp">详细地址</span>
            <span class="item-addr">{{
              propertyDetailsData.taskAddr || EMPTY_VAL_TEXT
            }}</span>
            <img class="item-map" src="@/assets/image/ditu.png" alt />
          </li>

          <li>
            <span>服务范围</span>
            <span>
              {{ propertyDetailsData.serviceArea || EMPTY_VAL_TEXT }}
            </span>
          </li>
          <li>
            <span>自带操作员</span>
            <span>
              {{ propertyDetailsData.isDriver === "0" ? "是" : "否" }}
            </span>
          </li>
          <li>
            <span>可工作时间</span>
            <span
              v-if="
                propertyDetailsData.workStartTime &&
                propertyDetailsData.workEndTime
              "
            >
              {{ Number(propertyDetailsData.workStartTime) | Datetime }}~
              <span>{{
                Number(propertyDetailsData.workEndTime) | Datetime
              }}</span>
            </span>
            <span v-else>{{ EMPTY_VAL_TEXT }}</span>
          </li>
          <li>
            <span>开具发票</span>
            <span v-if="propertyDetailsData.needInvoice !== null">
              {{
                propertyDetailsData.needInvoice == 0
                  ? "否"
                  : propertyDetailsData.invoiceType == 0
                  ? "普通发票,"
                  : "专用发票, "
              }}
              <span v-if="propertyDetailsData.needInvoice != 0">{{
                propertyDetailsData.tariff + "%"
              }}</span>
            </span>
            <span v-else>{{ EMPTY_VAL_TEXT }}</span>
          </li>
        </ul>
      </li>
      <li class="item-chil">
        <ul class="item-mains">
          <li>
            <span>联系人</span>
            <span>{{ propertyDetailsData.contacts }}</span>
          </li>
          <li>
            <span>联系电话</span>
            <span v-if="iosFlag == '1'">
              <span v-if="lockPhone">
                {{ telFn(propertyDetailsData.contactNumber) }}
              </span>
              <span v-else>{{ propertyDetailsData.contactNumber }}</span>
              <span class="item-btn" @click="seeTelphone">查看联系方式</span>
            </span>
            <span v-if="iosFlag == '2' || iosFlag == '3'">
              <span style="width: 4rem">{{
                propertyDetailsData.contactNumber
              }}</span>
            </span>
          </li>
        </ul>
      </li>
      <li class="item-chil" :class="isAndroid == true ? 'item-footer' : ''">
        <p class="item-title">详细描述</p>
        <span
          class="item-text"
          v-if="
            propertyDetailsData.describe == '' ||
            propertyDetailsData.describe == null
          "
          >暂无信息</span
        >
        <span
          class="item-text"
          v-else
          v-html="propertyDetailsData.describe"
        ></span>
      </li>
    </ul>
    <!-- 占位盒子 -->
    <div class="noneBox" v-if="isiOS == true"></div>
    <!-- 底部 -->
    <AmFooterControlsBar
      v-if="iosFlag == '1'"
      :type="footerBarType"
      @dialHandle="sendPhone"
      @siteHandle="goWebsite"
      @communicationHandle="go('goToService')"
      @inquiryHandle="go('goToReplyRent')"
      @invitationHandle="goInvitation"
      @applyHandle="go('1')"
    ></AmFooterControlsBar>
    <!--    <footer class="item-bottom" >-->

    <!--      <div-->
    <!--        class="item-contact"-->
    <!--        v-if="-->
    <!--          propertyDetailsData.hasOwnProperty('company') &&-->
    <!--          (propertyDetailsData.company.compNo != 0 ||-->
    <!--            propertyDetailsData.company.compNo != '')-->
    <!--        "-->
    <!--        @click="goWebsite"-->
    <!--      >-->
    <!--        <img src="@/assets/image/wangzhan@3x.png" alt />-->
    <!--        <span>网站</span>-->
    <!--      </div>-->
    <!--      <div class="item-contact" @click="go('goToService')">-->
    <!--        <img src="@/assets/image/jiaoliu@3x.png" alt />-->
    <!--        <span>交流</span>-->
    <!--      </div>-->
    <!--      <div class="item-contact" @click="go('3')">-->
    <!--        <img src="@/assets/image/xunjia@3x.png" alt />-->
    <!--        <span>询价</span>-->
    <!--      </div>-->
    <!--&lt;!&ndash;       0  个人  1企业  type&ndash;&gt;-->
    <!--      &lt;!&ndash; <div-->
    <!--        class="item-contact"-->
    <!--        @click="goInvitation"-->
    <!--        v-if="-->
    <!--          propertyDetailsData.hasOwnProperty('company') &&-->
    <!--          (propertyDetailsData.company.compNo != 0 ||-->
    <!--            propertyDetailsData.company.compNo != '')-->
    <!--        "-->
    <!--      >-->
    <!--        <img src="@/assets/image/yaoqing@2x.png" alt />-->
    <!--        <span>邀请</span>-->
    <!--      </div>-->
    <!--      <div-->
    <!--        class="item-contact"-->
    <!--        @click="go('1')"-->
    <!--        v-if="propertyDetailsData.type == 1"-->
    <!--      >-->
    <!--        <img src="@/assets/image/shenqing.png" alt />-->
    <!--        <span>申请</span>-->
    <!--      </div> &ndash;&gt;-->
    <!--      &lt;!&ndash; <div class="item-contact" @click="go('goToReplyRent')">-->
    <!--        <img src="@/assets/image/hanxun.png" alt />-->
    <!--        <span>函询</span>-->
    <!--      </div>&ndash;&gt;-->
    <!--      &lt;!&ndash; <div class="item-contact" @click="attention()" v-if="attentionShow">-->
    <!--        <img class="imgs" src="@/assets/image/app_h5/gz_gray@2x.png" alt />-->
    <!--        <span>关注</span>-->
    <!--      </div>-->
    <!--      <div class="item-contact active" @click="attention()" v-if="!attentionShow">-->
    <!--        <img class="imgs" src="@/assets/image/app_h5/gz_orange@2x.png" alt />-->
    <!--        <span>已关注</span>-->
    <!--      </div>&ndash;&gt;-->
    <!--      &lt;!&ndash; <div class="item-phone" @click="sendPhone">-->
    <!--        <img src="@/assets/image/app_h5/dianhua@2x.png" alt />-->
    <!--        <span>联系电话</span>-->
    <!--      </div> &ndash;&gt;-->
    <!--    </footer>-->
    <footer class="item-bottomUpDown" v-if="iosFlag == '2'">
      <span
        v-if="
          propertyDetailsData.status == 2 ||
          propertyDetailsData.status == 0 ||
          propertyDetailsData.status == 3
        "
        @click="propertyEdit"
        style="color: #5792fd"
        >编辑</span
      >
      <span v-if="propertyDetailsData.status == 2" @click="propertyUp"
        >上架</span
      >
      <span
        v-if="
          propertyDetailsData.status == 2 ||
          propertyDetailsData.status == 0 ||
          propertyDetailsData.status == 3
        "
        @click="propertyDelect"
        style="color: #ff2928"
        >删除</span
      >
      <span v-if="propertyDetailsData.status == 1" @click="propertyDown"
        >下架</span
      >
    </footer>
    <ApplyFooterBar
      v-if="iosFlag == '3' && $route.query.id && showOperation"
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
import apiFocus from "@/api/apiFocus";
import apiCarsRent from "@/api/apiCarsRent";
import moment from "moment";
import { EMPTY_VAL_TEXT, SHE_BEI } from "@/views/app_h5/utils";
import Vue from "vue";
import { Dialog, Toast, Notify } from "vant";
import http from "@/api/apiLease.js";
Vue.use(Toast);
import axios from "axios";
import { tel } from "@/filters/index.js";
import { appGetCurrentUserInfo } from "@/api/apiBusiness.js";
import { rentModuleCreateTimeFormat } from "@/views/app_h5/utils";
import mixin from "@/mixins/CapitalCenter";
export default {
  mixins: [mixin()],
  components: {
    AmFooterControlsBar: () =>
      import(
        /* webpackChunkName: "rent/AmFooterControlsBar" */ "@/views/app_h5/components/AmFooterControlsBar/AmFooterControlsBar"
      ),
    ApplyFooterBar: () =>
      import("@/views/app_h5/leasing/components/ApplyFooterBar"),
  },
  data() {
    return {
      footerBarType: "",
      propertyDetailsData: {}, //详情数据
      lockPhone: true, //是否展示全部电话号码,默认不展示
      jToken: "", //登录状态的token
      loadshow: true, //页面加载动画
      titleVal: "设备详情(出租)",
      imgList: [],
      attentionShow: true, //是否关注
      imgsArr: [], //是图片
      iosFlag: "", //路径来源： 租赁详情（iosFlag=1），用户中心详情（iosFlag=2）
      isAndroid: Boolean,
      isiOS: Boolean,
      EMPTY_VAL_TEXT,
      SHE_BEI,
      showDialogNo: false,
      showSheet: false,
      message: "",
      yanse: "red",
      showOperation: false,
      actions: [
        { name: "转交", color: "#5792FD" },
        { name: "加签", color: "#5792FD" },
      ],
    };
  },
  created() {
    this.$hybrid.sendTitle({ title: this.titleVal }, function (data) {});
    this.isMachine();
  },
  mounted() {
    // 获取登录的token
    this.$hybrid.syncToken({}, (data) => {
      data = JSON.parse(data);
      this.jToken = data.resourceAPPToken;
    });
    this.iosFlag = this.$route.query.iosFlag || "1";
    this.iosFlag == "1"
      ? (this.titleVal = "设备详情(出租)")
      : (this.titleVal = "设备详情(求租)");
    if (this.iosFlag == 3) {
      // 如果为待办详情页,要确保其是否有操作权限
      this.showOperation = this.$route.query.showOperation || false;
    }
    this.propertyDetails();
  },
  methods: {
    // 审批状态
    formatStatus(val) {
      switch (val) {
        case 3:
          this.yanse = "red";
          return "已拒绝";
        case 4:
          if (this.$route.query.showOperation) {
            return "待审批";
          } else {
            this.yanse = "blue";
            return "审批中";
          }
        case 1:
          this.yanse = "green";
          return "已上架";
        default:
          break;
      }
    },
    // 格式化发布时间函数
    rentModuleCreateTimeFormat,
    /**@name 网站跳转 */
    goWebsite() {
      this.$hybrid.syncToken({}, async (data) => {
        let resdata = JSON.parse(data);
        if (
          Object.keys(resdata).length === 0 ||
          resdata.resourcePCToken.length < 3
        ) {
          this.jToken = false;
        } else {
          this.jToken = true;
        }
        if (!this.jToken) {
          // 判断是否登录
          this.$hybrid.loginAgain({}, function (data) {});
        } else {
          this.$hybrid.goWebsite(
            {
              childPosition: 1, // 设备是1
              companyAuthTime: this.propertyDetailsData.authTime || "",
              createCompanyName: this.propertyDetailsData.companyName || "",
              companyNo: this.propertyDetailsData.companyNo || "",
              companyId: this.propertyDetailsData.companyId || "",
            },
            function (data) {}
          );
        }
      });
    },
    /**@name 邀请跳转 */
    async goInvitation() {
      this.$hybrid.syncToken({}, async (data) => {
        let resdata = JSON.parse(data);
        if (
          Object.keys(resdata).length === 0 ||
          resdata.resourcePCToken.length < 3
        ) {
          this.jToken = false;
        } else {
          this.jToken = true;
        }

        if (!this.jToken) {
          // 判断是否登录
          this.$hybrid.loginAgain({}, function (data) {});
        } else {
          Toast.loading({
            duration: 0,
            message: "加载中...",
            forbidClick: true,
          });
          // 邀请判断是否是本公司的人员
          const res = await apiFocus.judgeEnquireAble({
            id: this.propertyDetailsData.id,
          });
          if (res.data.code == "1") {
            Toast.clear();
            Dialog.alert({
              title: "提示",
              message: "同企业不可邀请",
            });
            return;
          } else {
            Toast.clear();
          }
          // 登录后还要判断是不是企业账号，员工账号有没有权限
          const { data } = await apiCarsRent.judgePersonOrCompany();
          if (data.code == 1) {
            Toast.clear();
            this.$hybrid.goInvitation(
              {
                contact: this.propertyDetailsData.contacts,
                contactNumber: this.propertyDetailsData.contactNumber,
                companyNo: this.propertyDetailsData.companyNo,
                companyName: this.propertyDetailsData.companyId,
              },
              function (data) {}
            );
          } else {
            Toast.clear();
            Dialog.confirm({
              title: "温馨提示",
              message: "要先认证为企业用户才能邀请",
            })
              .then(() => {
                this.$hybrid.companyApprove({}, function (data) {});
              })
              .catch(() => {});
          }
        }
      });
    },
    isMachine() {
      var u = navigator.userAgent;
      this.isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
      this.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    },
    // 设备详情
    async propertyDetails() {
      const api = process.env.VUE_APP_CAPI;
      let obj = {
        id: this.$route.query.id || null,
      };
      let objdata = {};
      if (this.iosFlag == 3) {
        objdata = await axios.get(
          `${api}/equipment/rentInfo/auditDetail?no=${obj.id}`
        );
      } else {
        objdata = await axios.get(
          `${api}/api/equipment/rentInfo/detail/${obj.id}`
        );
      }
      console.log(objdata);
      if (objdata.status == 200) {
        if (this.iosFlag == 3) {
          this.propertyDetailsData = objdata.data.data.rentInfo;
        } else {
          this.propertyDetailsData = objdata.data;
        }

        if (
          this.propertyDetailsData.companyNo != "" &&
          this.propertyDetailsData.companyNo != "0"
        ) {
          // 企业发布
          this.footerBarType = "enterprises";
        } else {
          // 个人发布
          this.footerBarType = "individuals";
        }
        this.imgsArr = this.propertyDetailsData.pictures.split(",");
        this.loadshow = false;
        if (this.iosFlag == 1) {
          this.isFocus();
        }
      }
    },
    // 隐藏手机号中间四位
    telFn(phoneNumber) {
      return tel(phoneNumber);
    },
    // 查看联系方式
    seeTelphone() {
      this.$hybrid.syncToken({}, async (data) => {
        let resdata = JSON.parse(data);
        if (
          Object.keys(resdata).length === 0 ||
          resdata.resourcePCToken.length < 3
        ) {
          this.jToken = false;
        } else {
          this.jToken = true;
        }
        // 判断是否登录
        if (!this.jToken) {
          this.$hybrid.loginAgain({}, function (data) {});
        } else {
          this.lockPhone = false;
        }
      });
    },
    // 详细地址跳转地图
    goToMapBack() {
      this.$hybrid.goMap(
        {
          lat: this.propertyDetailsData.latitude,
          lng: this.propertyDetailsData.longitude,
          address: this.propertyDetailsData.taskAddr,
        },
        function (data) {}
      );
    },
    //是否被关注
    async isFocus() {
      let datas = this.propertyDetailsData.no;
      let res = await apiFocus.isFocus(datas);
      if (res.data.data == "0") {
        // 未关注
        this.attentionShow = true;
      } else {
        //已关注
        this.attentionShow = false;
      }
    },
    // 关注，已关注
    async attention() {
      this.$hybrid.syncToken({}, async (data) => {
        let resdata = JSON.parse(data);
        if (
          Object.keys(resdata).length === 0 ||
          resdata.resourcePCToken.length < 3
        ) {
          this.jToken = false;
        } else {
          this.jToken = true;
        }
        if (!this.jToken) {
          // 判断是否登录
          this.$hybrid.loginAgain({}, function (data) {});
        } else {
          Toast.loading({
            duration: 0,
            message: "加载中...",
            forbidClick: true,
          });
          let datas = {
            businessNo: this.propertyDetailsData.no,
            // firstCategory: this.propertyDetailsData.firstCategoryNo,
            // secondCategory: this.propertyDetailsData.secondCategoryNo,
            type: 2, //1 ，机械 2，设备 3，车辆 4 ，房产，5，土地 ，6工厂
          };
          let res = await apiFocus.allFocus(datas);
          if (res.code === 200) {
            this.attentionShow = !this.attentionShow;
            Toast.clear();
            if (this.attentionShow == false) {
              Toast("关注成功");
            } else {
              Toast("取消关注成功");
            }
          } else {
            Toast.clear();
            Toast("关注失败");
          }
        }
      });
    },
    // 交流，函询
    async go(e) {
      this.$hybrid.syncToken({}, async (data) => {
        let resdata = JSON.parse(data);
        if (
          Object.keys(resdata).length === 0 ||
          resdata.resourcePCToken.length < 3
        ) {
          this.jToken = false;
        } else {
          this.jToken = true;
        }
        // 判断是否登录
        if (!this.jToken) {
          this.$hybrid.loginAgain({}, function (data) {});
          return;
        }
        if (e == "goToService") {
          Toast.loading({
            duration: 2000,
            message: "加载中...",
            forbidClick: true,
          });
          // 判断是否可以交流
          const { data } = await apiFocus.canDoCommunicate({
            createCompanyNo: this.propertyDetailsData.companyNo || "",
            createUserNo: this.propertyDetailsData.rentUserNo || "",
          });
          Toast.clear();
          if (data.data != "0") {
            Dialog.alert({
              title: "提示",
              message: "您不可参与交流",
            });
            return;
          }
          if (
            !this.propertyDetailsData.contactsVo ||
            !this.propertyDetailsData.contactsVo.imAccount
          ) {
            Dialog.alert({
              title: "提示",
              message: "发布方未设置客服人员，暂不支持交流",
            });
            return;
          }
          let jId = "";
          //企业信息
          jId = this.propertyDetailsData.contactsVo.imAccount;
          if (!jId) {
            Toast("订单发起方未设置客服人员");
            return false;
          }
          this.$hybrid.goToRentService({ id: jId }, function (data) {});
        } else if (e == "goToReplyRent") {
          Toast.loading({
            duration: 2000,
            message: "加载中...",
            forbidClick: true,
          });
          // 判断是否可以函询
          const { data } = await apiFocus.eqJudgeEnquireAble({
            id: this.propertyDetailsData.id,
          });
          Toast.clear();
          if (data.code == "1") {
            if (this.footerBarType == "enterprises") {
              Dialog.alert({
                title: "提示",
                message: "不能对同公司信息进行函询",
              });
              return;
            } else {
              Dialog.alert({
                title: "提示",
                message: "不能对自己的信息进行函询",
              });
              return;
            }
          }
          let rId = "";
          //企业信息
          rId = this.propertyDetailsData.id;
          this.$hybrid.goToReplyRent({ id: rId }, function (data) {});
        } else if (e == "1") {
          Toast("请您敬请期待");
        } else if (e == "4") {
          Toast("请您敬请期待");
        }
      });
    },
    // 编辑
    propertyEdit() {
      let self = this;
      this.$hybrid.syncToken({}, async (data) => {
        let resdata = JSON.parse(data);
        if (
          Object.keys(resdata).length === 0 ||
          resdata.resourcePCToken.length < 3
        ) {
          this.jToken = false;
        } else {
          this.jToken = true;
        }
        // 判断是否登录
        if (!this.jToken) {
          this.$hybrid.loginAgain({}, function (data) {});
        } else {
          this.$hybrid.propertyEdit(
            { id: this.$route.query.id, markType: "2" },
            // markType:"1"机械编辑, markType:"2"  设备编辑, markType:"3"车辆编辑, markType:"4"  房产编辑, markType:"5"土地编辑,markType:"6"  工厂编辑
            function (data) {}
          );
        }
      });
    },
    //上架
    propertyUp() {
      this.$delect(`确认上架？`, ``)
        .then(async () => {
          Toast.loading({
            duration: 0,
            message: "加载中...",
            forbidClick: true,
          });
          let res = await apiFocus.equipmentStatusChange(
            this.propertyDetailsData.id,
            "1"
          );
          if (res.code == 200) {
            Toast("上架成功！");
            this.propertyDetails();
            Toast.clear();
          } else {
            Toast("上架失败！");
            Toast.clear();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //下架
    propertyDown() {
      this.$delect(`确认下架？`, ``)
        .then(async () => {
          Toast.loading({
            duration: 0,
            message: "加载中...",
            forbidClick: true,
          });
          let res = await apiFocus.equipmentStatusChange(
            this.propertyDetailsData.id,
            "2"
          );
          if (res.code == 200) {
            Notify({ type: "success", message: "下架成功！" });
            this.propertyDetails();
            Toast.clear();
          } else {
            Notify({ type: "danger", message: "下架失败！" });
            Toast.clear();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //删除
    propertyDelect() {
      this.$delect(`确认删除？`, ``)
        .then(async () => {
          Toast.loading({
            duration: 0,
            message: "加载中...",
            forbidClick: true,
          });
          let id = {
            id: this.propertyDetailsData.id,
          };
          let res = await apiFocus.equipmentDelete(id.id);
          if (res.code == 200) {
            Toast.clear();
            Notify({ type: "success", message: "删除成功！" });
            this.$hybrid.goBackLeaseList(
              {
                type: this.SHE_BEI,
              },
              function (data) {}
            );
          } else {
            Notify({ type: "danger", message: "删除失败！" });
            Toast.clear();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // (拨打联系电话)
    async sendPhone() {
      console.log("APP 用户的登录数据", this.$store.state);
      let phone = this.propertyDetailsData.contactNumber;
      let self = this;
      this.$hybrid.syncToken({}, async (data) => {
        let resdata = JSON.parse(data);
        if (
          Object.keys(resdata).length === 0 ||
          resdata.resourcePCToken.length < 3
        ) {
          this.jToken = false;
        } else {
          this.jToken = true;
        }
        // 判断是否登录
        if (!this.jToken) {
          // 未登录
          this.$delect(`登录后可拨打电话，去登录`, ``)
            .then(async () => {
              this.$hybrid.loginAgain({}, function (data) {});
            })
            .catch((error) => {});
        } else {
          // 登录未认证
          let res = await appGetCurrentUserInfo();
          console.log("登录未认证11111", res);
          if (res.data.data.idCard == "" || res.data.data.idCard == null) {
            this.$delect(`认证后可拨打电话，去认证`, ``)
              .then(async () => {
                if (
                  res.data.data.idCard == "" ||
                  res.data.data.idCard == null
                ) {
                  this.$hybrid.companyApprove({}, function (data) {});
                }
              })
              .catch((error) => {});
          } else {
            // 登录已认证
            if (phone == "") {
              Dialog.alert({
                title: "提示",
                message: "暂无联系方式",
              });
            } else {
              this.$hybrid.goToCallPhone({ id: phone }, function (data) {});
            }
          }
        }
      });
    },
    approvalAgree() {
      this.$hybrid.syncToken({}, async (data) => {
        let resdata = JSON.parse(data);
        if (
          Object.keys(resdata).length === 0 ||
          resdata.resourcePCToken.length < 3
        ) {
          this.jToken = false;
        } else {
          this.jToken = true;
        }
        if (!this.jToken) {
          // 未登录
          this.$delect(`请重新登录!`, ``)
            .then(async () => {
              this.$hybrid.loginAgain({}, function (data) {});
            })
            .catch((error) => {});
        } else {
          this.$delect(`确认通过申请？`, ``)
            .then(async () => {
              Toast.loading({
                getContainer: "#loading",
                duration: 0,
                forbidClick: true,
                icon: require("@/assets/loading.gif"),
              });
              //通过申请

              // 首先去获取个人身份信息
              let userInfo = await http.getUserInfo();
              console.log(userInfo);

              let objData = {
                companyId: userInfo.data.companyNo,
                userId: userInfo.data.no,
                reason: "", // 同意的时候,审批意见为空
                id: this.$route.query.auditId, // 传过来的需要审批的审批id
              };
              // 通过申请接口
              let approve = await http.approverMakerAsPass(objData);
              console.log(approve);
              Toast.clear();
              if (approve.data === "操作成功") {
                // 接口调用成功
                this.$hybrid.BackToDoList({}, function (data) {});
              } else {
                Toast(approve.msg);
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
    },
    reject() {
      this.$hybrid.syncToken({}, async (data) => {
        let resdata = JSON.parse(data);
        if (
          Object.keys(resdata).length === 0 ||
          resdata.resourcePCToken.length < 3
        ) {
          this.jToken = false;
        } else {
          this.jToken = true;
        }
        if (!this.jToken) {
          // 未登录
          this.$delect(`请重新登录!`, ``)
            .then(async () => {
              this.$hybrid.loginAgain({}, function (data) {});
            })
            .catch((error) => {});
        } else {
          this.showDialogNo = true;
        }
      });
    },
    // textarea下确定事件.同意
    async areaConfirm(action, done) {
      if (action === "confirm") {
        console.log(this.message);
        if (!this.message) {
          Toast("请输入拒绝原因!");
          return done(false);
        }
        Toast.loading({
          getContainer: "#loading",
          duration: 0,
          forbidClick: true,
          icon: require("@/assets/loading.gif"),
        });
        //拒绝申请

        // 首先去获取个人身份信息
        let userInfo = await http.getUserInfo();
        console.log(userInfo);

        let objData = {
          companyId: userInfo.data.companyNo,
          userId: userInfo.data.no,
          reason: this.message, // 同意的时候,审批意见为空
          id: this.$route.query.auditId, // 传过来的需要审批的审批id
        };
        // 拒绝申请接口
        let approve = await http.approverMakerAsRefuse(objData);
        console.log(approve);
        Toast.clear();
        if (approve.data === "操作成功") {
          // 接口调用成功
          this.$hybrid.BackToDoList({}, function (data) {});
        } else {
          Toast(approve.msg);
        }
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
      console.log(action);
      console.log(index);
    },
  },
  filters: {
    Datetime(times) {
      if (times == 0 || !times) {
        return "暂无信息";
      }
      return moment(Number(times)).format("HH:mm");
    },
  },
};
</script>

<style lang="stylus" scoped>
.propertyDetails-box {
  height: 100%;

  /deep/ .van-nav-bar {
    background-color: #5792FD;
  }

  /deep/ .van-ellipsis {
    color: #fff !important;
  }

  /deep/ .van-nav-bar .van-icon {
    color: #FFFFFF;
    width: 0.266667rem;
    height: 0.453333rem;
  }

  // /deep/.van-swipe__indicator {
  // background-color: #fff;
  // opacity: 1;
  // }

  // /deep/.van-swipe__indicator--active {
  // width: 0.4rem;
  // border-radius: 0.5rem;
  // }
  .item-top {
    width: 100%;
  }

  .my-swipe {
    width: 100%;
    height: 5.33rem;
    overflow: hidden;

    // margin-top: 0.613333rem;
    .slide-img {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }
  }

  .item-mian {
    .item-chil {
      background-color: #fff;
      padding: 0.3rem 0.4rem;
      margin-top: 0.3rem;

      .item-price {
        color: #FF4C10;
        font-weight: bold;
        font-size: 0.43rem;
        line-height: 1.23rem;
        height: 1.23rem;
      }

      .item-name {
        color: #333;
        font-weight: bold;
        font-size: 0.43rem;
        margin-bottom: 0.3rem;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow-wrap: break-word;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .item-time {
        color: #969696;
        font-size: 0.34rem;
        font-family: PingFang SC;
        font-weight: 500;
      }

      .item-title {
        color: #333;
        font-size: 0.4rem;
        font-weight: bold;
        margin: 0.1rem 0 0.3rem 0;
        overflow-wrap: break-word;
      }

      .item-content {
        margin: 0.4rem 0 0 0;

        .fac-width1 {
          width: 40%;

          .one-row {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            line-clamp: 1;
            -webkit-box-orient: vertical;
          }
        }

        .fac-width2 {
          width: 30%;
        }

        .fac-width3 {
          width: 30%;
        }

        .spec-1 {
          color: #5792FD;
          font-size: 0.426rem;
        }

        .spec-2 {
          margin-top: 0.1rem;
          margin-bottom: 0.3rem;
          color: #969696;
          font-size: 0.373rem;
        }
      }

      .focus-btn-blue {
        display: inline-block;
        float: right;
        font-size: 0.4rem;
        color: #5792FD;
        border: 1px solid #5792FD;
        padding: 0.1rem 0.3rem 0.14rem 0.3rem;
        height: 0.8rem;
        line-height: 120%;
        border-radius: 0.5rem;

        .imgs {
          width: 0.4rem;
          height: 0.4rem;
        }
      }

      .focus-btn-gray {
        display: inline-block;
        float: right;
        font-size: 0.4rem;
        color: #999999;
        border: 1px solid #999999;
        padding: 0.1rem 0.3rem 0.14rem 0.3rem;
        height: 0.8rem;
        line-height: 120%;
        border-radius: 0.5rem;

        .imgs {
          width: 0.4rem;
          height: 0.4rem;
        }
      }

      .item-text {
        color: #000;
        font-weight: 500;
        font-size: 0.3733333333rem;
        white-space: pre-wrap;
        word-wrap: break-word;
        word-break: break-all;
      }

      .item-conts {
        li {
          margin: 0.2rem 0;
          font-size: 0.3733333rem;

          span:nth-child(1) {
            width: 2.2rem;
            color: #666666;
            display: inline-block;
          }

          span:nth-child(2) {
            color: #000;
          }
        }
      }

      .item-mains {
        li {
          margin: 0.2rem 0;
          font-size: 0.3733333rem;

          span:nth-child(1) {
            width: 2.2rem;
            color: #666666;
            display: inline-block;
          }

          span:nth-child(2) {
            width: 67%;
            color: #333;
            display: inline-block;
            padding: 0.1rem 0;

            span {
              width: 2.8rem;
            }

            .item-btn {
              float: right;
              display: inline-block;
              border: 1px solid #5792FD;
              border-radius: 0.4rem;
              color: #5792FD;
              text-align: center;
              padding: 0.15rem 0.2rem;
              transform: translateY(-0.2rem);
            }
          }

          // .item-addr {
          // height: 0.8rem;
          // line-height: 0.8rem;
          // border:1px solid red;
          // }
          .item-map {
            width: 0.8rem;
            float: right;
          }
        }
      }

      .status-box {
        position: absolute;
        right: 0;
        font-size: 0.37rem;
        padding: 0.16rem 0.4rem 0.16rem 0.45rem;
        border-radius: 0.4rem 0rem 0rem 0.4rem;
      }

      .red {
        color: #FF2928;
        background: rgba(255, 41, 40, 0.1);
      }

      .blue {
        color: #5287FA;
        background: rgba(82, 135, 250, 0.1);
      }

      .green {
        color: #06C764;
        background: rgba(6, 199, 100, 0.1);
      }
    }

    .item-chil:nth-child(1) {
      margin-top: 0;
      padding-bottom: 0.8rem;
    }

    .item-footer {
      margin-bottom: 2.1rem;
    }
  }

  .noneBox {
    height: 2rem;
    margin-bottom: 2.1rem;
  }

  .item-bottom {
    display: flex;
    text-align: center;
    margin-top: 0.3rem;
    background-color: #fff;
    padding: 0.2rem 0;
    position: fixed;
    bottom: 0rem;
    left: 0rem;
    width: 100%;
    font-size: 0.32rem;

    .item-contact {
      flex: 1;
      margin-top: 0.2rem;

      img {
        width: 0.57rem;
        height: 0.57rem;
      }

      .imgs {
        width: 0.62rem;
      }

      span {
        color: #666666;
        display: block;
      }
    }

    .active {
      span {
        color: #FF2928;
        display: block;
      }
    }

    .item-phone {
      flex: 3;
      color: #fff;
      background: linear-gradient(to right, #6B79FF, #79A1FF);
      font-size: 0.5rem;
      height: 1.4rem;
      line-height: 1.4rem;
      border-radius: 2rem;
      margin-right: 0.3rem;

      img {
        width: 0.47rem;
        margin-right: 0.2rem;
      }
    }
  }

  .item-bottomUpDown {
    text-align: center;
    margin-top: 0.3rem;
    background-color: #fff;
    padding: 0.3rem 0;
    position: fixed;
    bottom: 0rem;
    left: 0rem;
    width: 100%;
    color: #5892FD;
    font-size: 0.42666rem;
    display: flex;

    span {
      flex: 1;
      font-size: 0.43rem;
      border-left: 1px solid #EDEDED;
    }

    span:first-child {
      border: none;
    }

    span:nth-child(3) {
      color: #FF2A28;
    }
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

  >>>.van-button--default {
    background-color: #F6F5F3;
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
