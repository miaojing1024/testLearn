<template>
  <div class="footer_bar">
      <van-button color="linear-gradient(161deg, #565656 0%, #A19457 33%, #46453D 66%, #373737 100%)" disabled>五星会员</van-button>
    <div class="footer_comm">
        交流
    </div>
    <div class="footer_inquiry">
        函迅
    </div> 
    <div class="footer_disagree"  @click="showDialogNo = true"> 
        不同意
        <!-- <van-overlay :show="show" @click="show = false">
            <div class="wrapper" @click.stop>
                <div class="block">
                    <div class="block_inner">
                        <textarea  cols="30" rows="10" class="textarea_inner" placeholder="请输入拒绝理由"></textarea>
                    </div>
                    <div class="select">
                        <span class="select_no">取消</span>
                        <span class="select_yes">确认</span>
                    </div>
                </div>
            </div>
         </van-overlay> -->
    </div>
    <van-dialog v-model="showDialogNo" overlay @confirm="areaConfirm" show-cancel-button>
        <div class="text_area">
            <textarea style="width:100%" maxlength="300" @input="textInput" v-model="textleng" class="textarea_inner" placeholder="请输入拒绝理由"></textarea>
            <span>已输入{{textnum}}/300</span>
            <van-field
                v-model="message"
                rows="2"
                autosize
                type="textarea"
                maxlength="300"
                placeholder="请输入拒绝理由"
                show-word-limit
                border
            />
        </div>  
    </van-dialog>
    <!-- <van-button plain type="info" text="不同意" @click="show = true" />
    <van-overlay :show="show" @click="show = false">
        <div class="wrapper" @click.stop>
            <div class="block" >里面的</div>
        </div>
    </van-overlay> -->
    <!-- <div class="footer_agree" @click="agree()">
        同意
    </div> -->
    <van-button type="info" @click="showDialogYes = true">
        同意
        <!-- <van-overlay :show="show1" @click="show1 = false">
            <div class="wrapper" @click.stop>
                <div class="block">
                    <div class="block_inner">
                        <textarea  cols="30" rows="10" class="textarea_inner" placeholder="请输入拒绝理由"></textarea>
                    </div>
                    <div class="select">
                        <span class="select_no">取消</span>
                        <span class="select_yes">确认</span>
                    </div>
                </div>
            </div>
         </van-overlay> -->
    </van-button>
    <van-dialog v-model="showDialogYes" @confirm="scoreConfirm" show-cancel-button>
        <div class="text_score">
            <div>请输入会员星级</div>
            <van-rate v-model="scorenum" />
            <div>请输入会员类型</div>
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
    <van-popup v-model="showPicker" overlay position="bottom"  >
                <van-picker
                    title="会员类型"
                    show-toolbar
                    :columns="columns"
                    @cancel="showPicker = false"
                    @confirm="onConfirm"
                />
    </van-popup>
  </div>
</template>

<script>
import { CouponList, Overlay ,Rate ,Dialog ,Picker } from 'vant';
export default {
    components: {
        [Dialog.Component.name]: Dialog.Component
    },
    data() {
        return {
            showDialogNo: false,
            showDialogYes:false,
            textnum:0,
            textleng:"",
            scorenum:0,
            message:"",
            value: '',
            showPicker: false,
            columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
        }
    },
    methods:{
        // textarea字数
        textInput(){
            let txtval = this.textleng.length
            this.textnum = 0 + txtval
        },
        // textarea下确定事件
        areaConfirm(){
            console.log(this.textleng)
        },
        // 评分确定
        scoreConfirm(){
            console.log(this.scorenum)
        },
        onConfirm(value) {
            this.value = value;
            this.showPicker = false;
        },
    },
   

    
}
</script>

<style scoped lang="stylus">
.footer_bar{
    position fixed
    left 0
    bottom 0
    width 100%
    z-index 80
    display flex
    justify-content space-evenly
    align-items center
    padding .266667rem 0
    background #fff
    border-top 1px solid #999
    .footer_disagree{
        padding .133333rem
        border 1px solid blue
    }
    .footer_agree{
        padding .133333rem .4rem
        background blue
        color #fff
    }
    // .wrapper {
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     height: 100%;
    //     .block {
    //         background-color: #fff;
    //         border-radius 5px
    //         .textarea_inner{
    //             margin  .266667rem .133333rem
    //         }
    //         .select{
    //             border-top 1px solid #ccc 
    //             margin-top .266667rem
    //             display flex
    //             span{
    //                 flex 1
    //                 text-align center
    //                 line-height .8rem
    //                 color #000
    //             }
    //             .select_no{
    //                 border-right 1px solid #ccc 
    //             }
    //         }
    //     }
    // }
    .text_area{
        margin  .533rem
        position relative
        textarea{
            border-color #999 
            width 100%
            height 4rem
        }
        span{
            position absolute
            right .133rem
            bottom .133rem
        }
    }
    
}
</style>