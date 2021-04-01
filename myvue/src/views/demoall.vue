<template>
  <div>
    <el-input-number
      v-model="num"
      @change="handleChange"
      :min="1"
      :max="10"
      label="描述文字"
    ></el-input-number>
    <div>
      <a :class="{ active: true }">1111</a>
    </div>
    <div>
      <a :class="{ active: false }">2222</a>
    </div>
    <div>
      <a :class="{ active: true }">3333</a>
    </div>
    <div>
      <a :class="{ active: false }">4444</a>
    </div>
    <div>
      {{ time() }}
    </div>
    <van-icon name="map-marked" @click="fun()" />
    <van-tabs>
      <van-tab v-for="index in 8" :title="'标签 ' + index" :key="{ index }">
        内容 {{ index }}
      </van-tab>
    </van-tabs>

    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div>
    <!-- 我是练习使用 -->
    <div class="tab-test">
      <van-tabs type="line">
        <van-tab title="我的">
          <div>我是内容化1</div>
          <div>我是内容化11</div>
          <div>我是内容化111</div>
          <div>我是内容化1111</div>
        </van-tab>
        <van-tab title="你的">
          <div>我是内容化2</div>
          <div>我是内容化11</div>
          <div>我是内容化111</div>
          <div>我是内容化1111</div>
        </van-tab>
        <van-tab title="他的">
          <div>我是内容化3</div>
          <div>我是内容化11</div>
          <div>我是内容化111</div>
          <div>我是内容化1111</div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      num: 1,
    };
  },
  created() {
    Toast.loading({
      message: "正在进入...",
      forbidClick: false,
    });
  },
  methods: {
    fun() {
      console.log("bbbb");
    },
    handleChange(value, oldname) {
      console.log(value);
      console.log(oldname);
    },
    time() {
      // 时间
      let date = new Date();
      console.log(date);
      let year = date.getFullYear();
      console.log(year);
      let month = date.getMonth() + 1; // js从0开始取
      console.log(month);
      let date1 = date.getDate();
      console.log(date1);
      return year + "-" + month + "-" + date1;
    },
  },
};
</script>

<style lang="stylus" scoped>
.active {
  color: aquamarine;
}

.amap-wrapper {
  width: 300px;
  height: 300px;
}

>>>.tab-test {
  .van-tab {
    margin: 0.133rem;
  }

  .van-tab--active {
    color: blue;
    border: 1px solid #999;
  }

  .van-tabs__line {
    display: none;
  }
}
</style>