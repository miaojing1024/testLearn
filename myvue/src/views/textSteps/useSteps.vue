<template>
  <div class="main">
    <Steps :stepInfo="stepInfo"></Steps>
  </div>
</template>

<script>
import Steps from "./components/textSteps";
export default {
  components: { Steps },
  data() {
    return {
      stepInfo: {
        list: [
          {
            status: "提现申请提交成功，令额冻结",
            statusTime: "2019-11-8 12:12:12",
          },
          {
            status: "审核通过",
            statusTime: "2019-11-8 12:12:12",
          },
        ],
        step: 1
      },
    };
  },
};
</script>
