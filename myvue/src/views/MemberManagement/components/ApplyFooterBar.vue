<template>
  <div class="footer_bar">
    <footer class="item-bottomUpDown am-flex-rc-around">
      <div class="button-box agree-button" @click="approvalAgree">同意</div>
      <div class="button-box reject-button" @click="reject">拒绝</div>
      <div class="button-box more-button" @click="approvalMore">更多</div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  mounted() {},
  methods: {
    approvalAgree() {
      this.$emit("approvalAgree");
    },
    reject() {
      this.$emit("reject");
    },
    approvalMore() {
      this.$emit("approvalMore");
    },
  },
};
</script>

<style scoped lang="stylus">
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

  .button-box {
    flex: 1;
    font-size: 0.43rem;
    border-left: 1px solid #EDEDED;
    color: #5792FD;
  }

  .button-box:first-child {
    border: none;
  }

  .reject-button {
    color: #FF2928;
  }
}

.text_area {
  margin: 0.533rem 0.37rem;
  font-size: 0.37rem;

  .textarea {
    border: 0.03rem solid #EDEDED;
    border-radius: 0.11rem;
    height: 4.59rem;
  }
}

>>>.inputDilaog {
  .van-dialog__content {
    .van-cell__value {
      height: 3.4rem;

      .van-field__body {
        height: 100%;
        overflow-y: auto;
      }
    }
  }
}
</style>