<!--个人中心的邀请记录和申请记录可以共用改顶部-->
<template>
      <div class="appTitle">
          <div class="column">
              <div class="item_col">邀请状态</div>
              <div class="inner_col">{{content.id | itemStatus}}</div>
          </div>
          <div class="column" v-if="content.data">
              <div class="item_col">审核时间</div>
              <div class="inner_col">{{content.data}}</div>
          </div>
          <div class="column" v-if="content.reson">
              <div class="item_col">拒绝原因</div>
              <div class="inner_col">{{content.reson}}</div>
          </div>
      </div>
</template>

<script>
export default {
    props:["content"],
    filters:{
        itemStatus(val){
            //状态(1:待审核;2:已完成;3:已拒绝)
            // private Integer status = 1;
            switch (val) {
                case 1:
                return "待审核";
                case 2:
                return "已完成";
                case 3:
                return "已拒绝";
            }
        }
    }
}
</script>

<style scoped lang="stylus">
.appTitle{
    padding 0.266667rem;
    background-color: #fff;
    .column{
      line-height 2
      .item_col{
        color #999
      }
    }
}
</style>