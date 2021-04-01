<template>
  <div class="footer_bar">
    <div class="footer-left">
      <!-- <div class="footer_inquiry am-flex-col-center">
        <img src="" alt="img" class="c-img am-block" />
        交流
      </div>
      <div class="footer_inquiry am-flex-col-center">
        <img src="" alt="img" class="c-img am-block" />
        函迅
      </div> -->
    </div>
    <div class="footer-right">
      <van-button
        color="#FF2928"
        class="footer_btn"
        plain
        @click="showDialogNo = true"
        >不同意</van-button
      >
      <van-dialog
        v-model="showDialogNo"
        overlay
        :beforeClose="beforeClose"
        show-cancel-button
      >
        <div class="text_area">
          <!-- <textarea style="width:100%" maxlength="300" @input="textInput" v-model="textleng" class="textarea_inner" placeholder="请输入拒绝理由"></textarea>
            <span>已输入{{textnum}}/300</span> -->
          <van-field
            v-model="message"
            rows="2"
            autosize
            type="textarea"
            maxlength="300"
            placeholder="请输入拒绝理由"
            show-word-limit
            border
            class="textarea"
          />
        </div>
      </van-dialog>
      <van-button
        class="footer_btn"
        color="linear-gradient(270deg, #79A2FF 0%, #6B78FF 100%)"
        @click="showDialogYes = true"
        >同意</van-button
      >
      <van-dialog
        v-model="showDialogYes"
        :beforeClose="scoreConfirm"
        show-cancel-button
      >
        <div class="text_score">
          <div class="score-start" v-if="customer === '0'">请输入会员星级</div>
          <van-rate v-model="scorenum" v-if="customer === '0'"/>
          <div class="score-status">请输入会员类型</div>
          <van-field
            readonly
            clickable
            is-link
            :value="value"
            placeholder="会员类型"
            @click="showPicker = true"
          />
        </div>
      </van-dialog>
      <van-popup v-model="showPicker" overlay position="bottom">
        <van-picker
          title="会员类型"
          show-toolbar
          :columns="columns"
          @cancel="showPicker = false"
          @confirm="onConfirm"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
import { CouponList, Overlay, Rate, Dialog, Picker, Toast } from "vant";
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
  data() {
    return {
      showDialogNo: false,
      showDialogYes: false,
      textleng: "",
      // 星星数
      scorenum: 0,
      // 星星对应会员等级
      scoretxt:["一星会员","二星会员","三星会员","四星会员","五星会员"],
      // 文本框文字
      message: "",
      // 下拉选择框文字
      value: "",
      // 企业或者客户,0客戶1企业
      customer:"1",
      showPicker: false,
      columns: ["杭州", "宁波", "温州", "绍兴", "湖州", "嘉兴", "金华", "衢州"],
    };
  },
  methods: {
    // textarea字数
    // textInput(){
    //     let txtval = this.textleng.length
    //     this.textnum = 0 + txtval
    // },
    // 评分确定事件
    async scoreConfirm(action,done) {
      let obj = {}
      if(action == "confirm"){
        if(!this.value){
          Toast("请选择会员类型!");
          return done(false)
        }
        if(this.customer == "0"){
            if(!this.scorenum){
              Toast("请选择会员星级")
              return done(false)
            }
            // 可以给后端发送请求了,客户的请求
            obj = {
              memberType: this.value,
              no: this.$route.query.no,
              status:2,
              level:this.scoretxt[this.scorenum-1],
              title:"客户的"
            }
        }
        else{
          // 可以给后端发送请求了,企业的请求
           obj = {
              memberType: this.value,
              no: this.$route.query.no,
              status:2,
              title:"企业的"
            }
        } 
        // 可以给后端发送请求了
        console.log(this.value)
        console.log(this.scoretxt[this.scorenum-1]);
        console.log("可以发请求了---------")
        console.log(obj)
        // let res = await http.approv(obj)
        // this.$router.go(0)
      }else{
        return done()
      }
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    // textarea的关闭事件
    async beforeClose(action, done) {
      let obj = {}
      if (action == "confirm") {
        if (!this.message) {
          Toast("请输入拒绝原因");
          return done(false);
        }
        // 可以给后端发送请求了
        console.log(this.message)
        obj = {
          // no:this.$route.query.no,
          reson: this.message,
          status: 3
        }
        console.log(obj)
        // let result = await http.approve(obj)
        // if(result.code == 200){
        //   this.$router.go(0)
        // }
        console.log("可以发请求了---------")
        this.$router.go(0)
      }
      else{
        return done();
      }
    },
  },
};
</script>

<style scoped lang="stylus">
@import url('../../am-common.styl');
.footer_bar {
  position: fixed;
  height: 1.6rem;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 80;
  display: flex;
  justify-content: space-center;
  align-items: center;
  background: #fff;
  border-top: 0.03rem solid #F5F5F5;
  @picker-option-text-color:@blue;
  .footer_btn {
    width: 2.03rem;
    height: 0.8rem;
    text-align: center;
    margin-right: 0.53rem;
  }
  .footer-right{
    display flex
    width 100%
    justify-content space-around
  }

  .footer-left {
    display: flex;
    font-size: 0.32rem;
    line-height: 0.45rem;
    color: #666666;

    .footer_inquiry {
      margin-left: 1.12rem;
    }
  }

  .text_area {
    margin: 0.533rem;
    position: relative;
    // .textarea{
    // width: 6.45rem;
    // border: 0.03rem solid #EDEDED;
    // border-radius: 0.11rem;
    // height: 4.59rem;
    // }
  }

  .text_score {
    padding: 0.51rem 0.64rem 0.69rem 0.4rem;
    font-size: 0.4rem;
    color: #666666;
    line-height: 0.56rem;
    font-weight: 400;

    .score-start {
      margin-bottom: 0.21rem;
    }

    .score-status {
      margin-top: 0.56rem;
      margin-bottom: 0.21rem;
    }
  }
}
</style>