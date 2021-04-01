<template>
<div>
    <div class="inner_row">
        {{this.inner}}
    </div>
    <span class="isShow" @click="isShow()" v-if="showExchangeButton">
        {{isShowMore ? '展开' : '收起'}}
    </span>
</div>
    
    
</template>

<script>
export default {
    data(){
        return{
             // 是否显示更多
            isShowMore:true,
            // 是否显示展开
            showExchangeButton:true,
            inner:"哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈>>>>"
        }
    },
     filters: {
        capitalize(value){
            if (value.length > 25) {
                return value.substr(0,25) + "...";
            } else {
                this.isShowMore = false
                return value;
            }
        }
     },
     methods:{
         isShow(){
             if(this.isShowMore){
                 return this.inner.substr(0,25) + "...";
             }
             else{
                 return this.inner;
             }
         }
     }
}
</script>

<style>
    .inner_row{
        width: 100px;
        white-space:pre-line;
        overflow: hidden;
        -webkit-line-clamp: 4;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        }
</style>