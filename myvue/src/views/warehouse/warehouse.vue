<template>
  <div>
    <no-card :skeleton="skeleton" :errors="errors">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          @load="onLoad()"
          :offset="10"
          class="list-box"
        >
          <div class="nav-box" v-for="(list,i) in catagory" :key="i">
            <div class="listName">{{list.storageName}}</div>
            <div class="address">{{list.address}}</div>
            <div class="address" style="margin-bottom: 0.506667rem;">{{list.detailsAddress}}</div>
            <van-divider :style="{ color: '#E5E5E5', borderColor: '#E5E5E5'}"></van-divider>
            <div class="btn">
              <van-button
                plain
                type="info"
                size="small"
                style="margin-right:.2rem"
                @click="complie(list.id)"
              >编辑</van-button>
              <van-button plain type="info" size="small" @click="delect(list.id)">删除</van-button>
            </div>
          </div>
        </van-list>
      </van-pull-refresh>
    </no-card>
    <div class="bottom">
      <van-button class="btns" type="info" size="large" @click="skip">添加</van-button>
    </div>
  </div>
</template>
 
<script>
import { Dialog } from "vant";
import { queryStorageList, delectStorage } from "@/api/apiBusiness";
import NoData from "@/components/noData";
import BusineApi from "@/api/apiBusine";
import apiZb from "@/api/apiZb";

export default {
  name: "",
  data() {
    return {
      titleVal: "仓储管理",
      active: 0,
      count: 0,
      isLoading: false,
      listNav: [
        {
          name: "xxx",
          mark: "aaaa"
        },
        {
          name: "xxx",
          mark: "aaaa"
        }
      ],
      catagory: [],
      isLoading: false,

      loading: false,
      finished: false,
      soke: true,

      skeleton: true,
      errors: false,
      params: {
        pageNum: 1,
        pageSize: 15,
        text: ""
      }
    };
  },
  created() {
    this.$hybrid.sendTitle({ title: this.titleVal }, function(data) {});
  },
  methods: {
    async userInfo(){
        let ret = await apiZb.getUserInfoDetail();
        console.log(ret);
        this.params.companyId = ret.data.companyNo;
      this.getList();

    },
    cretalist() {},
    complie(i) {
      console.log("触发了编辑事件");
      this.$router.push(`/warehousedefault/${i}`);
    },
    skip() {
      this.$router.push("/warehousenewly");
    },
    delect(i) {
      console.log(i);
      this.$delect()
        .then(async res => {
          // let res = await prome()
          console.log(res);
          if (res == "confirm") {
            let reslist = await delectStorage(i);
            console.log(reslist);
            if (reslist.data.state == "ok") {
              this.$toast.success("删除成功");
              this.params.pageNum = 1;
              this.onLoad();
            } else {
              this.$toast.fail(`${reslist.data.msg}`);
            }
          }
          // on confirm
        })
        .catch(error => {
          console.log(error);
        });
    },
    async getList() {
      this.finished = false;
      this.errors = false;
      let res = await BusineApi.queryStorageList(this.params);
      if (res.state === "ok") {
        let rows = res.data.list;
        if (rows == null || rows.length === 0) {
          this.errors = true;
          this.skeleton = false;
          this.finished = true;
          return;
        }
        if (this.params.pageNum == 1) {
           this.params.pageNum++
          this.catagory = rows;
          this.skeleton = false;
        } else {
          this.skeleton = false;
          if (this.soke) {
            this.soke = false;
            if (this.active == this.active) {
              this.catagory = this.catagory.concat(rows);
              this.soke = true;
            }
          }
        }
        this.loading = false;
      } else {
        this.finished = true;
        this.errors = true;
      }
      this.loading = false;
      if (this.catagory.length >= res.data.totalRow) {
        this.finished = true;
      }
    },
    onLoad() {
      this.userInfo();
    },

    // 下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.params.pageNum = 1;
        this.onLoad();
        this.isLoading = false;
        this.$toast.success("已是最新数据");
      }, 1000);
    }
  },
  mounted() {
    this.onLoad();
  },
  components: {
    noList: () => import("@/components/devrt/list"),
    noCard: () => import("@/components/devrt/card")
  }
};
</script>
 
<style scoped lang='stylus'>
.list-box {
  margin-top: 0.066667rem;
  // height: 100vh;
  padding-bottom: 0.3rem;
  margin-bottom: 1rem;
}

.van-divider {
  margin: 0;
  height: 0.013333rem;
  margin-bottom: 0.533333rem;
}

.box {
  // margin-top: 0.2rem;
  // height: 100vh;
  // background-color: #fff;
  h4 {
    margin-bottom: 0.3rem;
  }
}

.nav-box {
  padding: 0.533333rem 0.84rem 0.533333rem 0.693333rem;
  width: 100%;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.133333rem;
  margin-bottom: 0.12rem;

  .listName {
    font-size: 0.4rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    line-height: 0.586667rem;
    margin-bottom: 0.533333rem;
  }

  .address {
    font-size: 0.36rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }

  .btn {
    display: flex;
    justify-content: flex-end;
    width: 8.666667rem;
    height: 1.066667rem;
    border-radius: 0.106667rem;

    button:nth-child(1) {
      width: 2rem;
      height: 0.8rem;
      border: 0.026667rem solid rgba(2, 134, 223, 1);
      border-radius: 0.106667rem;
      line-height: 0.586667rem;

      .van-button__text {
        width: 0.893333rem;
        height: 0.426667rem;
        font-size: 0.453333rem;
        font-family: PingFang SC;
        font-weight: Bold;
        color: rgba(2, 134, 223, 1);
      }
    }

    button:nth-child(2) {
      width: 2rem;
      height: 0.8rem;
      margin-left: 0.64rem;
      border: 0.026667rem solid rgba(247, 127, 109, 1);
      border-radius: 0.106667rem;

      .van-button__text {
        width: 0.893333rem;
        height: 0.426667rem;
        font-size: 0.453333rem;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(247, 127, 109, 1);
        line-height: 0.586667rem;
      }
    }
  }
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