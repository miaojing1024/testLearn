<!--客户资质-->
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
    <ul class="item-main">
      <li class="item-chil">
        <p class="item-p">高级建造师甲级</p>
      </li>
      <li class="item-chil">
        <p class="item-title">资质详情</p>
        <van-row class="item-content" type="flex">
          <van-col gutter="1.5rem" align="center" class="fac-width1">
            <div class="spec-1 one-row">工程建设</div>
            <div class="spec-2">资质类型</div>
          </van-col>
          <van-col align="center" class="fac-width2">
            <div class="spec-1">时间</div>
            <div class="spec-2">登记时间</div>
          </van-col>
        </van-row>
        <van-row class="item-content" type="flex">
          <van-col align="center" class="fac-width1">
            <div class="spec-1 one-row">不分等级</div>
            <div class="spec-2">资质等级</div>
          </van-col>
          <!-- <van-col align="center" class="fac-width2">
            <div class="spec-1">时间</div>
            <div class="spec-2">登记时间</div>
          </van-col> -->
        </van-row>
      </li>
      <li class="item-chil">
        <ul class="item-mains">
          <li>
            <p>备案单位</p>
            <p>中钧科技有限公司</p>
          </li>
          <li>
            <p>
              公司名称
              <span class="item-btn" @click="enterCompany">进入企业</span>
            </p>
            <p>中钧科技有限公司中钧科技有限公司中钧</p>
          </li>
          <li>
            <p>经营地址</p>
            <p>四川省成都市武侯区玉林一巷小巷子区玉林一巷小巷子</p>
          </li>
          <!-- <li @click="goToMapBack">
            <span class="item-toUp">详细地址</span>
            <span class="item-addr">{{
              propertyDetailsData.taskAddr || EMPTY_VAL_TEXT
            }}</span>
            <img class="item-map" src="" alt />
          </li> -->
        </ul>
      </li>
    </ul>
    <!-- 占位盒子 -->
    <div class="noneBox" v-if="isiOS == true"></div>
  </div>
</template>

<script>
// import information from '@/views/app_h5/leasing/information'
// import apileasing from "@/api/moduleInterface/apileasing";
// import apileasingFocus from "@/api/moduleInterface/apileasing";
// import apiFocus from "@/api/apiFocus";
// import apiCarsRent from "@/api/apiCarsRent";
// import apiLease from '@/api/apiLease'
// import apiInterfaceLeasing from '@/api/moduleInterface/apileasing.js'
// import { EMPTY_VAL_TEXT, SHE_BEI } from "@/views/app_h5/utils";

import Vue from "vue";
import { Dialog, Toast, Notify } from "vant";

Vue.use(Toast);
import axios from "axios";
// import { tel } from "@/filters/index.js";
// import { appGetCurrentUserInfo } from "@/api/apiBusiness.js";
// import { rentModuleCreateTimeFormat } from "@/views/app_h5/utils";
export default {
  components: {
    // AmFooterControlsBar: () =>
    //   import(
    //     /* webpackChunkName: "rent/AmFooterControlsBar" */ "@/views/app_h5/components/AmFooterControlsBar/AmFooterControlsBar"
    //   ),
  },
  data() {
    return {
      propertyDetailsData: {}, //详情数据
      lockPhone: true, //是否展示全部电话号码,默认不展示
      jToken: "", //登录状态的token
      loadshow: false, //页面加载动画
      titleVal: "设备详情(出租)",
      imgList: [],
      attentionShow: true, //是否关注
      imgsArr: [], //是图片
      iosFlag: "", //路径来源： 租赁详情（iosFlag=1），用户中心详情（iosFlag=2）
      isAndroid: Boolean,
      isiOS: Boolean,
      EMPTY_VAL_TEXT: "暂无数据",
      SHE_BEI: "设备",
    };
  },
  created() {},
  mounted() {},
  methods: {
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
    propertyEdit() {
      console.log("编辑");
    },
    propertyUp() {
      console.log("上架");
    },
    propertyDelect() {
      console.log("删除");
    },
    propertyDown() {
      console.log("下架");
    },
    enterCompany() {
      console.log("进入企业");
    },
  },

  filters: {
    Datetime(times) {
      console.log(times);
      if (times == 0 || !times) {
        return "暂无选择";
      }
      let date = new Date(times + 8 * 3600 * 1000);
      return date
        .toJSON()
        .substr(11, 19)
        .replace("T", " ")
        .replace(".000Z", "");
    },
  },
};
</script>

<style lang="stylus" scoped>
.propertyDetails-box {
  height: 100%;
  background: #F5F5F5;
  font-family: PingFangSC-Medium, PingFang SC;

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

  .item-main {
    .item-chil {
      background-color: #fff;
      padding: 0.4rem;
      margin-top: 0.3rem;

      .item-p {
        font-weight: bold;
        font-size: 0.48rem;
        line-height: 0.64rem;
        color: #333333;
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
          width: 50%;

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
          width: 50%;
        }

        .spec-1 {
          color: #5792FD;
          font-size: 0.426rem;
          font-weight: 600;
          line-height: 0.59rem;
        }

        .spec-2 {
          margin-top: 0.15rem;
          color: #969696;
          font-size: 0.4rem;
          line-height: 0.56rem;
        }
      }

      // .focus-btn-blue {
      // display: inline-block;
      // float: right;
      // font-size: 0.4rem;
      // color: #5792FD;
      // border: 1px solid #5792FD;
      // padding: 0.1rem 0.3rem 0.14rem 0.3rem;
      // height: 0.8rem;
      // line-height: 120%;
      // border-radius: 0.5rem;

      // .imgs {
      // width: 0.4rem;
      // height: 0.4rem;
      // }
      // }

      // .focus-btn-gray {
      // display: inline-block;
      // float: right;
      // font-size: 0.4rem;
      // color: #999999;
      // border: 1px solid #999999;
      // padding: 0.1rem 0.3rem 0.14rem 0.3rem;
      // height: 0.8rem;
      // line-height: 120%;
      // border-radius: 0.5rem;

      // .imgs {
      // width: 0.4rem;
      // height: 0.4rem;
      // }
      // }
      .item-mains {
        li {
          font-size: 0.3733333rem;

          & +li {
            margin-top: 0.4rem;
          }

          p:nth-child(1) {
            color: #666666;
            margin-bottom: 0.13rem;
            align-items: center;
            line-height: 0.53rem;

            .item-btn {
              float: right;
              display: inline-block;
              border: 1px solid #5792FD;
              border-radius: 0.05rem;
              color: #5792FD;
              text-align: center;
              padding: 0.08rem 0.32rem;
              transform: translateY(-0.08rem);
            }
          }

          p:nth-child(2) {
            color: #333;
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
    }

    .item-chil:nth-child(1) {
      margin-top: 0;
      // padding-bottom: 0.8rem;
    }
  }

  .noneBox {
    height: 2rem;
    margin-bottom: 2.1rem;
  }
}
</style>
