<!--
 * @Description: 工程设备
 * @Autor: 李昭
 * @LastEditors: 李昭
 * @LastEditTime: 2020-12-03 16:29:09

 146
-->
<template>
  <div class="rentDetails">
    <offerTitle :listDetail="listDetail" />
    <div class="details_body">
      <div class="details_item">
        <div class="lable_left">租赁分类</div>
        <div class="lable_right">
          {{ listDetail.categoryParentName }}-{{ listDetail.categoryChildName }}
        </div>
      </div>
      <div class="details_item">
        <div class="lable_left">品牌</div>
        <div class="lable_right">
          {{ listDetail.brandName || EMPTY_VAL_TEXT }}
        </div>
      </div>
      <div class="details_item">
        <div class="lable_left">出厂型号</div>
        <div class="lable_right">
          {{ listDetail.modelName || EMPTY_VAL_TEXT }}
        </div>
      </div>
      <div class="details_item">
        <div class="lable_left">使用地区</div>
        <div class="lable_right">
          {{ listDetail.rentAddress.rentalAddress }}
        </div>
        <!-- <div class="map_icon" @click="goToMap">
          <img src="@/assets/image/ditu.png" alt />
        </div>-->
      </div>
      <LeaseCell title="详细地址" labelMinWid="2.66rem">
        <div class="am-flex-row-center location-wrap" slot="right">
          <p class="am-text-break location-text">
            {{ listDetail.rentAddress.taskaddr }}
          </p>
          <div
            class="address-map-wrap am-flex-col-center"
            v-if="listDetail.rentAddress.taskaddr"
          >
            <div class="map_icon am-flex-rc-center" @click="goToMap">
              <img src="@/assets/image/ditu.png" alt />
            </div>
          </div>
        </div>
      </LeaseCell>
      <div class="details_item">
        <div class="lable_left">进场时间</div>
        <div class="lable_right">
          {{ formateTime(listDetail.useAndEnterTime) }}
        </div>
      </div>
      <LeaseCell title="是否携带操作员" labelMinWid="2.66rem">
        <div slot="right" class="lease-cell-right-text">
          {{ listDetail.isDriver === 0 ? "是" : "否" }}
        </div>
      </LeaseCell>
      <div class="details_item">
        <div class="lable_left">租赁数量</div>
        <div class="lable_right">
          {{ listDetail.rentalCount }}{{ listDetail.rentalUnit || "台" }}
        </div>
      </div>
      <div class="details_item">
        <div class="lable_left">租赁时长</div>
        <div class="lable_right" v-if="listDetail.rentalDuration == '-1'">
          面议
        </div>
        <div class="lable_right" v-if="listDetail.rentalDuration >= '0'">
          {{ listDetail.rentalDuration }}天
        </div>
      </div>
      <!--      <div class="details_item">-->
      <!--        <div class="lable_left">报价期限</div>-->
      <!--        <div class="lable_right">{{ listDetail.rentalQuotePeriod }}天</div>-->
      <!--      </div>-->
      <div class="details_item">
        <div class="lable_left">付款方式</div>
        <div class="lable_right">{{ listDetail.rentalPayMethod }}</div>
      </div>
      <div class="details_item">
        <div class="lable_left">联系人</div>
        <div class="lable_right">{{ listDetail.contactPerson }}</div>
      </div>
      <div class="details_item">
        <div class="lable_left">联系电话</div>
        <!-- <div class="lable_right" v-if="lockPhone">{{starPhone(listDetail.contactPhone)}}</div> -->
        <div class="lable_right">{{ listDetail.contactPhone }}</div>
        <!-- <div class="lable_boder" @click="seePhone">查看联系方式</div> -->
      </div>
    </div>
    <div class="details_text" style="min-height: 5rem">
      <div class="title-text">详细描述</div>
      <div class="details">{{ listDetail.remark || EMPTY_VAL_TEXT }}</div>
    </div>
    <!-- <div class="footer">
      <van-button type="info" v-if="DataIds == 0 || DataIds == undefined" @click="quotation">一键报价</van-button>
      <van-button type="info" v-else>再次报价</van-button>
    </div>-->
  </div>
</template>


<script>
import { Dialog, Toast } from "vant";
import http from "@/api/apiLease";
import axios from "axios";
import { rentModuleSelfUseTimeFormat,EMPTY_VAL_TEXT } from "@/views/app_h5/utils";
const LeaseCell = () =>
  import(
    /* webpackChunkName: "rent/lease/LeaseCell" */ "@/views/app_h5/lease/component/LeaseCell/LeaseCell"
  );
export default {
  components: {
    offerTitle: () => import("../component/offerTitle"),
    LeaseCell,
  },
  data() {
    return {
      EMPTY_VAL_TEXT,
      lockPhone: true,
      jToken: "",
      id: "",
      DataIds: "",
      listDetail: {
        rentalTitle: "",
        rentAddress: {},
      },
    };
  },
  created() {
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
    });
    this.id = this.$route.query.id || null;
  },
  async mounted() {
    const api = process.env.VUE_APP_CAPI;
    this.$hybrid.sendTitle({ title: "详情(工程设备)" }, function (data) {});
    if (this.id) {
      axios
        .get(`${api}/rent/seek/detailRentSeek?id=${this.id}`)
        .then(({ data }) => {
          console.log(data);
          this.listDetail = data.data.rentSeek;
          this.isQuotations();
        });
      Toast.clear();
    }
    Toast.clear();
    this.$hybrid.syncToken({}, (data) => {
      data = JSON.parse(data);
      this.jToken = data.resourceAPPToken;
    });
  },
  methods: {
    // 使用时间格式化
    rentModuleSelfUseTimeFormat,
    formateTime(val) {
      console.log(val);
      if (toString.call(val) != "[object Undefined]") {
        let res1 = val.slice(0, 4);
        let res2 = val.slice(5, 7);
        let res3 = val.slice(8, 10);
        return `${res1}年${res2}月${res3}日`;
      }
    },
    forMateString(val) {
      if (val) {
        return val.replace(/ /g, "/");
      }
    },
    /**@name 报价 */
    quotation() {
      this.$hybrid.Quote(
        {
          id: this.listDetail.id || "",
          updateTime: this.listDetail.updateTime || "",
          createUserNo: this.listDetail.createUserNo || "",
          createCompanyNo: this.listDetail.createCompanyNo || "",
          quoteUtil: this.listDetail.rentalSelectPrice || "",
          type: 2,
        },
        function (data) {}
      );
    },
    /**@name 跳转地图 */
    goToMap() {
      this.$hybrid.goMap(
        {
          lat: this.listDetail.rentAddress.latitude,
          lng: this.listDetail.rentAddress.longitude,
          address: this.listDetail.rentAddress.rentalAddress,
        },
        function (data) {}
      );
    },
    seePhone() {
      // 判断是否登录
      if (this.jToken) {
        this.lockPhone = false;
      } else {
        this.$hybrid.toLogin({}, function (data) {});
      }
    },
    // 隐藏号码中间4位数
    starPhone(val) {
      console.log(val);
      if (toString.call(val) != "[object Undefined]") {
        var reg = /^(\d{3})\d{4}/;
        val = val.replace(reg, "$1****");
        return val;
      }
    },
    async isQuotations() {
      const { data } = await http.quotation(this.listDetail.id);
      this.DataIds = data;
      console.log(data);
    },
  },
};
</script>


<style scoped lang="stylus">
// @import '~@/styles/am-common.styl';
// @import '~@/views/app_h5/lease/styles/lease.styl';

.rentDetails {
  height: 100%;

  .details_body {
    padding: 0.266667rem;
    margin-top: 0.266667rem;
    background-color: #fff;

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

  .footer {
    margin-top: 0.266667rem;
    background-color: #fff;
    padding: 0.133333rem 0.266667rem;

    .van-button {
      width: 100%;
      border: 0px;
      background: linear-gradient(-90deg, rgba(122, 162, 255, 1), rgba(108, 120, 255, 1));
    }
  }
}
</style>
