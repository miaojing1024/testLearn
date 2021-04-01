<template>
  <div class="page_title">
    <div class="title" data-brief="显示的内容">0000</div>
    <!-- <div class="page_status">
      <span class="status">1111</span>
    </div>
    <div class="time">
      <div class="inner_title">邀请状态</div>
      <p>待审核</p>
    </div>
    <div class="time" v-if="item[0].id === 1">
      <div class="inner_title">审核时间</div>
      <p>{{ item[0].inner }}</p>
    </div>
    <div class="time" v-if="item[1].id === 2">
      <div class="inner_title">拒绝原因</div>
      <p>{{ item[1].inner }}</p>
    </div>
    <div class="releaseTime">
      <span class="releaseTime">期望租金：</span>
      <span class="time">2222</span>
    </div>
    <div class="releaseTime">发布时间：3333</div>
    <div class="releaseEndTime">
      <img src="" />
      报价截止时间：4444
    </div> -->
    <!-- <van-image
  width="100"
  height="100"
  lazy-load
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/> -->
    <van-cell-group title="分组1">
      <van-cell title="单元格" value="内容" />
    </van-cell-group>
    <van-cell-group title="分组2">
      <van-cell title="单元格" value="内容" />
    </van-cell-group>
    <!-- active-icon="https://img01.yzcdn.cn/vant/cat.jpeg" -->
    <van-steps
      :active="active"
      active-icon="circle"
      progressDot
      active-color="#38f"
    >
      <van-step>
        <div>
          <h3>快件已发货</h3>
          <p>2016-07-10 09:30</p>
        </div>
      </van-step>
      <van-step>商家接单</van-step>
      <van-step>买家提货</van-step>
      <van-step>交易完成</van-step>
    </van-steps>
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model="show">内容</van-popup>
  </div>
</template>

<script>
import { Toast } from "vant";
import pyfl from 'pyfl';
export default {
  data() {
    return {
      item: [
        {
          id: 3,
          inner: "2020.10.12",
        },
        {
          id: 2,
          inner: "没什么原因就是拒绝",
        },
      ],
      // 步骤条的active
      active: 1,
      // 弹出层的
      show: false,
    };
  },
  created() {
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
    });
    console.log(pyfl('好笑吗跟傻子一样整天就知道哈哈哈哈哈哈哈')) ;
  },
  methods: {
    toChecked(val) {
      console.log(11111);
    },
    showPopup() {
      this.show = true;
    },
  },
};
</script>

<style scoped lang="stylus">
.page_title /deep/ {
  padding: 0.266667rem;
  background-color: #f5f5f5;
  min-height: 3.6rem;

  .title {
    margin: 0.266667rem 0rem;
    font-size: 0.48rem;
    color: #343434;
    font-family: PingFang SC;
    font-weight: 700;
    color: rgba(52, 52, 52, 1);
  }

  .title::after {
    // content: attr(data-brief);
    content: '1';
    display: block;
    background: red;
  }

  .page_status {
    margin: 0.266667rem 0rem;
    height: 0.533333rem;

    .status {
      font-size: 0.266667rem;
      padding: 0.133333rem;
      text-align: center;
      color: #5792FD;
      background: #eef4ff;
      border-radius: 0.053333rem;
    }

    .end {
      color: #969696;
      background: #f4f4f4;
    }

    .finish {
      color: #06C764;
      background: #e6f9ef;
    }
  }

  .time {
    color: #FF4C10;
    font-size: 0.346667rem;
    // line-height: 3;
    margin: 0.266667rem 0rem;
    font-weight: 600;

    .inner_title {
      color: #999;
      margin-top: 0.266667rem;
    }
  }

  .releaseTime {
    color: #969696;
    font-size: 0.346667rem;
    line-height: 2;
  }

  .releaseEndTime {
    color: #FFC000;
    font-size: 0.373333rem;

    img {
      width: 0.386667rem;
      height: 0.386667rem;
    }
  }

  >>>.van-step__icon--active {
    background: rgb(51, 136, 255) !important;
    border-radius: 50%;
  }
}
</style>