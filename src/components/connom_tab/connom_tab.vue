<template>
	<div>
		<!-- <ul class="footer fixed">
			<li><router-link to="/">首页</router-link></li>
			<li @click="handleCheckedCitiesChange"><router-link  to="/manage">列表</router-link></li>
		</ul> -->
		<ul>
			<li v-for="(cate,index) in categories" :key="index">
				<router-link :to="cate.path">
				<img style="margin-right:5px;margin-top: -5px;" src="@/assets/1.png" />{{cate.name}}
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "connomtab",
	
		data() {
			return {
				categories: [{
						cateid: 0,
						name: "申请电子保函",
						path:'/'
					},
					{
						cateid: 1,
						name: "保函申请记录",
						path:'/apply-recordsystem'
					},
					{
						cateid: 2,
						name: "企业信息管理",
						path:''

					}
				]
			}
		},
		mounted(){
		},
		beforeCreate() {
			// console.group('beforeCreate 创建前状态===============》');
		},
		created() {
			
			// loadingInstance.close();
		},
		methods: {
			handleCheckedCitiesChange(e) {
				alert(22)
				console.log(this.checked)
			}
		}
	}
</script>

<style lang="less" scoped>
	ul{
		width:160px;
		margin: 0 auto;
		li{
			line-height:40px;
			text-align: center;
			font-size: 14px;
			letter-spacing: 0;
			margin-bottom: 10px;
			border: 1px solid #ffffff;
		}
		li.grace-tab-current{
			color: #19aecf;
			background:rgba(25,174,207,0.03);
			border: 1px solid #19AECF;
		}
	}
	.baohansystem li:first-child{
		color: #19aecf;
		background:rgba(25,174,207,0.03);
		border: 1px solid #19AECF;
	}
	.applyrecord li:nth-child(2){
		color: #19aecf;
		background:rgba(25,174,207,0.03);
		border: 1px solid #19AECF;
	}
	
</style>
