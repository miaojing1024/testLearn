<!--
 * @Descripttion: 施工邦AppH5车主详情页面
 * @version: 1.0
 * @Author: 李昭
 * @Date: 2020-06-30 14:38:13
 * @LastEditors: 李昭
 * @LastEditTime: 2020-07-16 11:26:42

 145  211  231
--> 
<template>
  <div class="ownerDetails">
    <!-- <van-nav-bar title="车主详情" left-arrow @click-left="onClickLeft" /> -->
    <van-swipe class="my-swipe" indicator-color="white">
      <van-swipe-item v-for="(item,index) in resData.imgbox" :key="index">
        <van-image :src="item" @click="preview(resData.imgbox)" />
      </van-swipe-item>
    </van-swipe>
    <div class="person-details">
      <div v-if="resData.negotiable == 1">面议</div>
      <div v-else>{{resData.rentalPrice}}{{resData.priceUnit}}</div>
      <div>
        <span>{{resData.title}}</span>
      </div>
      <div>发布时间：{{resData.createTime | time}}</div>
    </div>
    <!-- 机械详情 -->
    <div class="mechanicsDteails">
      <div class="title">机械详情</div>
      <div class="deteails_box">
        <div class="item">
          <div class="itme_top">{{resData.firstCategoryName}}-{{resData.secondCategoryName}}</div>
          <div class="item_bottom">设备类型</div>
        </div>
        <div class="item">
          <div class="itme_top">{{resData.brandNo}}</div>
          <div class="item_bottom">品牌</div>
        </div>
        <div class="item">
          <div class="itme_top">{{resData.typeNo}}</div>
          <div class="item_bottom">出厂型号</div>
        </div>
        <!-- <div class="item">
          <div class="itme_top">{{resData.factoryYear}}年</div>
          <div class="item_bottom">购机时间</div>
        </div>
        <div class="item">
          <div class="itme_top">{{resData.useHour}}小时</div>
          <div class="item_bottom">工作时长</div>
        </div>
        <div class="item">
          <div class="itme_top">{{resData.driver==1?'是':'否'}}</div>
          <div class="item_bottom">自带驾驶员</div>
        </div>-->
      </div>
    </div>
    <!-- 最新意向 -->
    <div class="latest-intention">
      <div class="details_item" v-for="(item,index) in resData.attributes" :key="index">
        <div class="lable_left">{{item.name}}</div>
        <div class="lable_right">{{item.val}}{{item.unit}}</div>
      </div>
      <div class="details_item">
        <div class="lable_left">所在地区</div>
        <div
          class="lable_right"
        >{{resData.provinceName}}-{{resData.cityName}}-{{resData.districtName}}</div>
      </div>
      <div class="details_item">
        <div class="lable_left">详细地址</div>
        <div class="lable_right">{{resData.taskAddr}}</div>
        <div class="map_icon">
          <img src="@/assets/image/ditu.png" alt />
        </div>
      </div>
      <div class="details_item">
        <div class="lable_left">服务范围</div>
        <div class="lable_right">{{resData.serviceArea}}</div>
      </div>
      <div class="details_item">
        <div class="lable_left">自带驾驶员</div>
        <div class="lable_right">{{resData.driver==1?'是':'否'}}</div>
      </div>
      <div class="details_item">
        <div class="lable_left">可工作时间</div>
        <div
          class="lable_right"
        >{{Number(resData.workStartTime) | Datetime}}~{{Number(resData.workEndTime) | Datetime}}</div>
      </div>
      <div class="details_item">
        <div class="lable_left">开具发票：</div>
        <div class="lable_right" v-if="resData.needInvoice === '0'">不开具发票</div>
        <div class="lable_right" v-if="resData.needInvoice === '1'">
          <div class="lable_right" v-if="resData.invoiceType == 0">普通发票</div>
          <div class="lable_right" v-if="resData.invoiceType == 1">专业发票</div>
          <div class="lable_right">{{resData.tariff}}%</div>
        </div>
        <div
          class="lable_right"
          v-if="resData.needInvoice !== '1' && resData.needInvoice !== '0'"
        >暂无选择</div>
      </div>
    </div>
    <!-- 联系人 -->
    <div class="latest-intention">
      <div class="details_item">
        <div class="lable_left">联系人</div>
        <div class="lable_right">{{resData.contacts}}</div>
      </div>
      <div class="details_item">
        <div class="lable_left">联系电话</div>
        <div class="lable_right">{{resData.contactNumber}}</div>
      </div>
    </div>
    <!-- 详细描述 -->
    <div class="details_text" style="min-height: 20%;">
      <div class="title-text">详细描述</div>
      <div class="details">{{resData.describe || '无'}}</div>
    </div>
    <!-- 询价 -->
    <div class="operation-btn">
      <div @click="ownerInquiry" v-if="resData.status == 2">编辑</div>
      <div @click="ownerInquiry" v-if="resData.status == 2">上架</div>
      <div @click="ownerInquiry" v-if="resData.status == 2">删除</div>
      <div @click="ownerInquiry" v-else>下架</div>
    </div>
  </div>
</template>

<script>
import { Dialog, Toast } from "vant";
import { ImagePreview } from "vant";
import http from "@/api/apiLease";
import {
  connectWebViewJavascriptBridge,
  callToNative,
} from "@/jsbridge/bridge.js";
export default {
  data() {
    return {
      // 通过url传参获取到的页面数据
      resData: {},
    };
  },
  filters: {
    // ???????什么意思？？？
    time(times = +new Date()) {
      if (times == null || isNaN(times)) {
        return "";
      }
      let date = new Date(times + 8 * 3600 * 1000);
      return date.toJSON().substr(0, 19).replace("T", " ");
    },
    Datetime(times) {
      if (times == null || isNaN(times)) {
        return "";
      }
      console.log(times);
      if (times == 0) {
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
  created() {
    this.createdEvent();
  },
  mounted() {
    this.mountedEvent();
  },
  methods: {
    /**
     * @name: 生命周期cerated中出发的函数,主要为判断url是否传参
     * @param 无
     * @return: 无
     */
    async createdEvent() {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      let id = this.$route.query.id || null;
      console.log(id);
      if (id) {
        let data = await http.geeeqDetails(id);
        console.log(data);
        this.resData = data;
        this.resData.imgbox = this.resData.pictures.split(",");
        console.log(this.resData.imgbox);
      }
    },
    /**
     * @name: 生命周期mounted中出发的函数,主要为设置title
     * @param 无
     * @return: 无
     */
    mountedEvent() {
      this.$hybrid.sendTitle({ title: "详情" }, function (data) {});
    },
    /**
     * @name: 安卓/ios拨打电话
     * @param {Number} tel 电话号码
     * @param {String} title 头部标题
     * @return: 无
     */
// 参数怎么传来的
    goToCallPhone(tel, title) {
      let str;
      if (title === "客服电话") {
        str = "400-001-0051";
      } else if (tel && title != "客服电话") {
        let numberStr = String(tel);
        str = `${numberStr.substring(0, 3)}-${numberStr.substring(
          3,
          7
        )}-${numberStr.substring(7, 11)}`;
      }
      Dialog.confirm({
        title,
        message: str,
      })
        .then(() => {
          if (!tel) {
            return;
          } else {
// 怎么用的,逻辑
            this.$hybrid.goToCallPhone(
              {
                id: tel,
              },
              function (data) {}
            );
          }
        })
        .catch(() => {
          // on cancel
        });
    },
    /**
     * @name: 判断是否认证用户打电话
     * @param {type}
     * @return:
     */
    judgeCallPhone(tel) {
      if (!tel) {
        return;
      } else {
        this.$hybrid.judgeCallPhone(
          {
            tel,
          },
          (data) => {}
        );
      }
    },
    /**
     * @name:安卓/ios询价
     * @param 无
     * @return:无
     */
    ownerInquiry() {
      this.$hybrid.ownerInquiry(
        {
          id: this.$route.query.id,
        },
        (data) => {}
      );
    },
    /**
     * @name: 安卓/ios下单
     * @param 无
     * @return: 无
     */
    ownerplaceOrder() {
      this.$hybrid.ownerplaceOrder(
        {
          id: this.$route.query.id,
        },
        (data) => {}
      );
    },
    /**
     * @name: 点击图片放大
     * @param {*}
     * @return: 无
     */
    preview(index) {
      ImagePreview(index);
    },
  },
};
</script>

<style scoped lang="stylus">
.ownerDetails {
  .vehicle-data {
    display: flex;
    margin: 0.3rem 0rem;

    .vehicle-left {
      width: 25%;
      font-size: 0.3733rem;
      font-family: PingFangSC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
    }

    .vehicle-right {
      width: 75%;
      font-size: 0.3733rem;
      font-family: PingFangSC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
  }

  >>>.van-nav-bar {
    background-color: #5792FD;

    .van-nav-bar__title {
      color: #fff;
    }

    .van-icon-arrow-left {
      color: #fff;
    }

    &::after {
      border-bottom-width: 0rem;
    }
  }

  .my-swipe .van-swipe-item {
    height: 5.3333rem;
    background-color: #f5f5f5;

    >.no-img {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      >img {
        width: 2.8rem;
        height: 2.1333rem;
      }
    }

    >>>.van-image {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .person-details {
    padding: 0.4rem;
    background-color: #fff;

    >div:nth-child(1) {
      font-size: 0.48rem;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(255, 75, 16, 1);
    }

    >div:nth-child(2) {
      font-size: 0.48rem;
      font-family: PingFang SC;
      font-weight: 600;
      color: rgba(51, 51, 51, 1);
      line-height: 2;

      >span:nth-child(1) {
        margin-right: 0.5333rem;
      }
    }

    >div:nth-child(3) {
      font-size: 0.3467rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(150, 150, 150, 1);
    }
  }

  .mechanicsDteails {
    margin-top: 0.266667rem;
    padding: 0.4rem;
    background-color: #fff;

    .title {
      font-size: 0.4rem;
      font-family: PingFang;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      line-height: 3;
    }

    .deteails_box {
      display: flex;
      flex-wrap: wrap;

      .item {
        width: 33%;
        display: flex;
        flex-direction: column;
        text-align: center;

        .itme_top {
          font-size: 0.426667rem;
          font-family: PingFang;
          font-weight: bold;
          color: rgba(87, 146, 253, 1);
          line-height: 2;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .item_bottom {
          font-size: 0.373333rem;
          font-family: PingFang;
          font-weight: 500;
          color: rgba(150, 150, 150, 1);
          line-height: 2;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }

  .latest-intention {
    padding: 0.4rem;
    margin-top: 0.2667rem;
    background-color: #fff;

    .intention-title {
      font-size: 0.4rem;
      font-family: PingFang SC;
      font-weight: 600;
      color: rgba(51, 51, 51, 1);
    }

    .details_item {
      display: flex;
      line-height: 2.5;

      .lable_left {
        width: 2.666667rem;
        font-size: 0.373333rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
      }

      .lable_right {
        flex: 1;
        display: flex;
        font-size: 0.373333rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(52, 52, 52, 1);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .map_icon {
        width: 1.2rem;

        img {
          width: 0.666667rem;
          height: 0.666667rem;
        }
      }

      .lable_boder {
        margin-top: 0.066667rem;
        width: 2.56rem;
        height: 0.666667rem;
        text-align: center;
        line-height: 2;
        color: rgba(87, 146, 253, 1);
        border-radius: 0.333333rem;
        border: 1px solid rgba(87, 146, 253, 1);
      }
    }
  }

  .details_text {
    padding: 0.266667rem;
    margin-top: 0.266667rem;
    background-color: #fff;

    .title-text {
      line-height: 3;
      font-size: 0.4rem;
      font-family: PingFang SC;
      font-weight: 600;
      color: rgba(52, 52, 52, 1);
    }

    .details {
      font-size: 0.373333rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
    }
  }

  .contact {
    padding: 0rem 0.4rem;

    .vehicle-data {
      margin: 0rem;
      line-height: 2.8;
      border-bottom: 1px solid #EDEDED;

      .vehicle-right {
        font-size: 0.4rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: #5792FD;
      }

      .user-name {
        color: #333;
      }
    }

    .vehicle-data:last-child {
      border-bottom: 0rem;
    }
  }

  .city-list {
    display: flex;
    flex-wrap: wrap;

    >div {
      width: 33%;
      height: 0.9333rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.3733rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
  }

  .operation-btn {
    display: flex;
    height: 1.28rem;
    margin-top: 0.8rem;

    >div {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.48rem;
      font-family: PingFang SC;
      font-weight: 400;
      background-color: #fff;
      color: rgba(87, 146, 253, 1);
    }

    >div:nth-child(3) {
      background-color: #fff;
      font-size: 0.4267rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: #FF2927;
    }

    >div:nth-child(1) {
      background-color: #fff;
      font-size: 0.4267rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(87, 146, 253, 1);
    }
  }
}
</style>