<template>
  <no-card :skeleton="skeleton" :errors="errors">
    <div style="margin-top:.133333rem">
      <van-form @submit="onSubmit">
        <van-field
          v-model="userfrom.storageName"
          name="仓储名称"
          label="仓储名称"
          placeholder="请填写仓储名称"
          :rules="[{ required: true}]"
          input-align="right"
          class="brandName"
        />
        <van-cell title="仓储地址" :value="url" is-link @click="site" />
        <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
          <van-area
            title="标题"
            :area-list="areaList"
            @confirm="confirm"
            :value="detaliem"
            @cancel="()=>show=!show"
          />
        </van-popup>
        <van-field
          v-model="userfrom.detailsAddress"
          rows="2"
          autosize
          type="textarea"
          placeholder="请输入详细地址(必填)"
          show-word-limit
          class="message"
        />
        <div class="defaults">
          <van-cell title="备注" class="remark" />
          <van-field
            class="marks"
            v-model="userfrom.desc"
            rows="1"
            autosize
            type="textarea"
            placeholder="请输入仓储描述"
            maxlength="50"
            show-word-limit
          />
        </div>
        <div class="bottom">
          <van-button class="btns" type="info" size="large">保存</van-button>
        </div>
      </van-form>
    </div>
  </no-card>
</template>
 
<script>
import { Toast, Dialog } from "vant";
import {
  BrandListfault,
  saveStorage,
  storageDetail,
  getAddres
} from "@/api/apiBusiness.js";
export default {
  props: ["id"],
  name: "",
  data() {
    return {
      titleVal: "仓储管理-添加",
      userfrom: {
        id: this.id ? this.id : "",
        desc: "",
        storageName: "",
        provinceNo: "",
        cityNo: "",
        districtNo: "",
        detailsAddress: ""
      },
      skeleton: false,
      errors: false,
      show: false,
      areaList: {},
      url: "",
      detaliem: "110101"
    };
  },
  methods: {
    async onSubmit() {
      console.log(this.userfrom);
      const res = await saveStorage(this.userfrom);
      console.log(res);

      if (res.data.state == "ok") {
        this.$toast.success(`${res.data.msg}`);
        this.$router.go(-1);
      }
      if (res.data.state == "fail") {
        this.$toast.fail(`${res.data.msg}`);
      }
    },
    confirm(val) {
      let value = [];
      console.log(val);
      val.forEach((r, i) => {
        value.push(r.name);
        console.log(r, i);
        switch (i) {
          case 0:
            this.userfrom.provinceNo = r.code;
            break;
          case 1:
            this.userfrom.cityNo = r.code;
            break;
          default:
            this.userfrom.districtNo = r.code;
            break;
        }
      });
      console.log(this.url);
      this.url = value.join("-");
      this.show = false;
      console.log(this.userfrom);
    },

    // 数据请求
    async fetch() {
      let { data } = await storageDetail(this.id);
      console.log(data);
      if (data.state == "ok") {
        this.userfrom = data.data;
        this.url =
          this.userfrom.provinceName +
          "-" +
          this.userfrom.cityName +
          "-" +
          this.userfrom.districtName;
        let urlss = (this.detaliem = [
          data.data.provinceNo,
          data.data.cityNo,
          data.data.districtNo
        ].join(" "));
      }
    },
    site() {
      this.show = true;
    },
    async featchlist() {
      let { data } = await getAddres();
      console.log(data.data);
      this.areaList = data.data;
      this.id && this.fetch();
      this.$nextTick(() => {
        this.errors = false;
        // 控制骨架框
        this.skeleton = false;
      });
    }
  },
  created() {
    this.$hybrid.sendTitle({ title: this.titleVal }, function(data) {});
  },
  mounted() {
    this.featchlist();
  },
  components: {
    noCard: () => import("@/components/devrt/card")
  }
};
</script>
 
<style scoped lang='stylus'>
>>>.van-button--large {
  width: 90%;
}

.texte {
  display: flex;
  justify-content: center;
  align-items: center;
}

.brandName {
}

.message {
  >>>.van-cell__value {
    margin-top: 0.493333rem;
  }
}

.van-field__label {
  span {
    font-size: 0.4rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
}

.remark {
  font-size: 0.4rem;
}

.marks {
  font-size: 0.4rem;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
}

.defaults {
  padding-bottom: 1.253333rem;
  background-color: #fff;
}

.bottom {
  position: fixed;
  left: 0.666667rem;
  bottom: 0.373333rem;

  .btns {
    width: 8.666667rem;
    height: 1.066667rem;
    line-height: 0;
    border-radius: 0.106667rem;
    background: linear-gradient(90deg, rgba(14, 164, 247, 1), rgba(2, 134, 223, 1)) !important;
  }
}
</style>


