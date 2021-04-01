
<template>
  <div class="show-box">
    <span v-if="data.length < maxLen">
      <span class="tj">{{ data }}</span>
    </span>
    <span v-else>
      <div :class="showBtn ? 'tj-big' : 'tj-big-all'">
        {{ showBtn ? sliceStr : data }}
        <span class="btnWord" @click="showBtn = !showBtn" v-if="showBtn">{{
          showBtn ? "展开" : "收起"
        }}</span>
      </div>
      <div class="tj-btn" v-if="!showBtn">
        <span class="btnWord" @click="showBtn = !showBtn">{{
          showBtn ? "展开" : "收起"
        }}</span>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: "unfold",
  data() {
    return {
      showBtn: true,
    };
  },
  props: {
    // 数据
    data: {
      type: String,
      default: "",
    },
    // 最大长度
    maxLen: {
      type:Number,
      default: 80,
    },
  },
  computed: {
    sliceStr() {
      if (this.data != null) {
        return this.data.substring(0, this.maxLen) + "...";
      }
      return "";
    },
  },
};
</script>

<style lang="stylus" scoped>
.show-box {
  .tj {
    text-align: justify;
  }

  .tj-big {
    position: relative;
    // height: 2.3rem;
  }

  .tj-big-all {
    height: auto;
  }

  .tj-btn {
    position: relative;
    height: 0.3rem;
  }

  .btnWord {
    position: absolute;
    right: 0.133rem;
    color: cornflowerblue;
    cursor: pointer;
    word-break: keep-all;
  }
}
</style>

