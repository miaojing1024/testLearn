<template>
	<div>
		<div class="plr bgFFF" style="color: #FF2928;">
			不通过原因：
		</div>
		<div style="height: .2rem;"></div>
		<div style="position: relative;">
			<div class="jPic">
				<img src="" width="100%">
				<!-- <img src="@/assets/user/s8.png" width="100%" v-else-if="info.reviewState == 1">
				<img src="@/assets/user/s1.png" width="100%" v-else-if="info.reviewState == 2"> -->
			</div>
			<div class="plr titName bgFFF">
				<div style="width: .1rem;margin-right: .1rem;">
					<!-- <img src="@/assets/image/tit.png" width="100%"> -->
				</div>
				<div>报名信息</div>
			</div>
			<div style="padding: 0 .3rem;" class="bgFFF">
				<div class="jCell">
					<div class="jTit">投标人名称</div>
					<div class="jInfo">info.bidderName</div>
				</div>
				<div class="jCell">
					<div class="jTit">联系人</div>
					<div class="jInfo">info.contacts</div>
				</div>
				<div class="jCell">
					<div class="jTit">联系电话</div>
					<div class="jInfo">info.tel</div>
				</div>
				<div class="jCell">
					<div class="jTit">报名时间</div>
					<div class="jInfo">info.updated </div>
				</div>
				<div class="jCell" >
					<div class="jTit">说明</div>
					<div class="jInfo">info.remark</div>
				</div>
				<div class="jCell" >
					<div class="jTit">附件名称</div>
					<!-- <div class="jInfo">
						<div class="jInfo" @click="download(item.path)" style="color: #5792FD;" v-for="(item,ind) in info.files">
							<van-icon name="description" size=".4rem"/>{{item.name}}
						</div>
					</div> -->
				</div>
			</div>
		</div>
		
		<div style="display: flex;position: fixed;bottom: 0;width: 100%;">
			<van-button color="#FF2927" block plain style="border: none;" @click="jShow = true">不通过</van-button>
			<van-button color="linear-gradient(to right, #6B78FF, #79A2FF)" block @click="jPass()">通过</van-button>
		</div>
		
		<van-action-sheet v-model="jShow" :round="false">
			<div style="display: flex;align-items: center;padding: .3rem;">
				<div style="width: 8rem;">
					<van-field
						style="border: 1px solid #E4E7ED;"
					  v-model="reason"
					  rows="3"
					  autosize
					  type="textarea"
					  placeholder="请输入不通过原因，最多输入200字"
					/>
				</div>
				<div style="color: #79A2FF;font-size: .4rem;width: 3rem;text-align: center;" @click="jNoPass()">提 交</div>
			</div>
		</van-action-sheet>
	</div>
</template>

<script>
import {Dialog,ActionSheet,Toast} from 'vant';
import Vue from 'vue';
// Vue.use(ActionSheet);
Vue.use(Toast);
// import api from "@/api/apiUserBid";
export default {
	components: {
		
	},
  data() {
		return {
			jShow: false,
			info: {},
			reason: ''
		}
	},
	mounted() {},
	created(){
		// this.$hybrid.sendTitle({"title": this.$route.query.name}, function(data) {})
		// this.getInfo();
	},
	methods: {
		// 不通过
		// jNoPass(){
		// 	if(!reason){
		// 		Toast.fail('请输入原因');
		// 		return false;
		// 	}
		// 	this.reviewApply(2);
		// 	this.jShow = false;
		// },
		// 通过
		// jPass(){
		// 	Dialog.confirm({
		// 		messageAlign: 'left',
		// 	  message: '通过后将不能修改，确定要通过该企业的报名资质吗？',
		// 	}).then(() => {
		// 		this.reviewApply(1);
		// 	}).catch(() => {
		// 		console.log('取消');
		// 	});
		// },
		// 审批
		// async reviewApply(e,s){
		// 	let data = {
		// 		id: this.info.id,
		// 		reviewState: e,
		// 		reason: this.reason
		// 	}
		// 	let res = await api.reviewApply(data);
		// 	if(res.code == 0){
		// 		window.location.reload();
		// 	}
		// },
		// 下载
		// download(e){
		// 	this.$hybrid.accessory({name: '',url: e},function(data) {});
		// },
		// 获取详情
		// async getInfo(){
		// 	let res = await api.findApplyCompanyDetail(this.$route.query.id);
		// 	if(res.code == 0){
		// 		this.info = res.result;
		// 	}
		// }
	}
}

</script>

<style scoped>
.jPic{
	position: absolute;
	top: 0;
	right: 0;
	width: 1.5rem;
}
.plr{
	padding: .32rem;
}
.titName{
	display: flex;
	align-items: center;
	font-size: .36rem;
	font-weight: bold;
}
.bgFFF{
	background-color: #FFFFFF;
}
.jCell{
	display: flex;
	padding: .2rem;
	font-size: .34rem;
}
.jTit{
	color: #666666;
	width: 3rem;
}
.jInfo{
	color: #333333;
	width: 6rem;
	display: flex;
	align-items: center;
}
.jPrice{
	color: #FF4B10;
}
</style>
