<template>
  <div class="appDetails">
    <MineTop :content="arr" />
    <div class="appBody">
      <div class="row">
        <div class="item_row">合作类型</div>
        <div class="inner_row">专业外包</div>
      </div>
      <div class="row">
        <div class="item_row">联系人</div>
        <div class="inner_row">张三</div>
      </div>
      <div class="row">
        <div class="item_row">联系电话</div>
        <div class="inner_row">18966895466</div>
      </div>
      <div class="row">
        <div class="item_row">邀请时间</div>
        <div class="inner_row">2020.12.31</div>
      </div>
      <div class="row">
        <div class="item_row">要求</div>
        <div class="inner_row">
          {{ this.inner }}
          <span
            class="isShow"
            @click="isShowMore = !isShowMore"
            v-if="showExchangeButton"
          >
            {{ isShowMore ? "展开" : "收起" }}
          </span>
        </div>
      </div>
      <div class="row">
        <div class="item_row">要求</div>
        <Showorno
          class="inner_row"
          maxLen="100"
          data="这里是文章测试标题，含标点一共二十个字。这里是文章测试标题，含标点一共二十个字。这里是文章测试标题，含标点一共二十个字。这里是文章测试标题，含标点一共二十个字。这里是文章测试标题，含标点一共二十个字。这里是文章测试标题，含标点一共二十个字。这里是文章测试标题，含标点一共二十个字。这里是文章测试标题，含标点一共二十个字。"
        />
      </div>
      <div class="row">
        <div class="item_row">新的压迫要求</div>
        <!-- <Showorno class="inner_row" data="啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊" maxLength="100"/> -->
      </div>
      <div class="column">
        <div class="item_col">原因</div>
        <div class="inner_col">
          啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
        </div>
      </div>
      <Reson />
    </div>
    <!-- 底部bar -->
    <MineFooter />
    <!-- logo处标题 -->
    <div class="am-flex-row-center company">
      <div class="left">
        <img src="" alt="img" class="c-img am-block" />
      </div>
      <div class="right">
        <div class="am-flex-rc-between c-top">
          <div class="company-name am-text-eill">
            sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
          </div>
          <div class="enter-company">进入企业</div>
        </div>
        <div class="tag-wrap">
          <el-tag>ss</el-tag>
        </div>
      </div>
    </div>
    <!-- 邀请信息标题 -->
    <div class="app_title am-flex-row-center">
      <div class="div_empty"></div>
      <div class="app_title_text">邀请信息</div>
    </div>
    <!-- 审核时间，拒绝原因 -->
    <div class="reject_Reason">
      <div class="examine am-flex-rc-between">
        <div class="item_left_b">审核时间</div>
        <div class="item_right_b">2020-01-06</div>
      </div>
      <div class="r_reason">
        <div class="item_left_b">拒绝原因</div>
        <!-- <Showorno data="我是拒绝原因阿斯大所大所多as奥阿斯达四大术奥术大师大所大所大所多大师大所大所大所多阿萨斯大所大所大所大所多dasda" maxLen="10"/> -->
      </div>
    </div>
    <!-- logo处标题站位 -->
    <div class="am-flex-row-center company">
      <div class="left">
        <img src="" alt="img" class="c-img am-block" />
      </div>
      <div class="right">
        <div class="am-flex-rc-between c-top">
          <div class="company-name am-text-eill">
            sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
          </div>
          <div class="enter-company">进入企业</div>
        </div>
        <div class="tag-wrap">
          <el-tag>ss</el-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    MineTop: () => import("../components/mineTop.vue"),
    MineFooter: () => import("../components/mineFooter.vue"),
    Showorno: () => import("../components/showorno.vue"),
    Reson: () => import("../components/reson.vue"),
  },
  data() {
    return {
      // arr:{
      //     id:1,
      //     content:"待审核",
      //     data:"2020.12.31",
      //     reson:"没有什么理由就是拒绝了"
      // }
      // arr:{
      //     id:1,
      //     content:"已完成",
      //     data:"2020.12.31",
      // },
      arr: {
        id: 3,
        data: "2020.12.31",
        reson: "没有什么理由就是拒绝了",
      },
      // 是否显示更多
      isShowMore: true,
      // 是否显示展开
      showExchangeButton: true,
      inner:
        "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈>>>>",
    };
  },
  methods: {},
};
</script>

<style scoped lang="stylus">
@import url('./am-common.styl');

.appDetails {
  height: 100%;
  background: #F5F5F5;
  font-size: 0.373333rem;

  .appBody {
    padding: 0.266667rem;
    margin-top: 0.266667rem;
    background-color: #fff;
    margin-top: 0.266667rem;

    .row {
      display: flex;
      line-height: 0.56rem;

      .item_row {
        width: 2.666667rem;
        color: #999;
      }

      .inner_row {
        flex: 1;
      }
    }

    .column {
      line-height: 2;

      .item_col {
        color: #999;
      }
    }
  }
}

.company {
  height: 100px;

  .left {
    width: 30vw;
    flex-shrink: 0;

    .c-img {
      height: 50px;
      border: 1px solid red;
    }
  }

  .right {
    flex: 1;
    width: 0;
    margin-left: 15px;
  }

  .c-top {
  }

  .company-name {
    flex: 1;
    width: 0;
  }

  .enter-company {
    flex-shrink: 0;
    margin-left: 15px;
    border: 1px solid red;
  }
}

.tag-wrap {
  margin-top: 15px;
}

.app_title {
  display: flex;

  .div_empty {
    width: 0.11rem;
    height: 0.4rem;
    background: #5792FD;
    border-radius: 0.05rem;
  }

  .app_title_text {
    font-size: 0.43rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 0.59rem;
  }
}

.examine {
  padding: 0.4rem 0;
}

.r_reason {
  padding-top: 0.37rem;
  border-top: 0.03rem solid #EDEDED;
}
</style>