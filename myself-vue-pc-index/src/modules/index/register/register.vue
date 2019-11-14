/**
*
* @author louie
* @date created in 2018-10-9 10:41
*/
<template>
	<div>
		<router-link to="/">this is console register</router-link>
		<img src="@/assets/logo.png" />
		<el-button type="primary">主要按钮</el-button>
		<el-checkbox v-model="checked">备选项</el-checkbox>
		<el-switch v-model="checked" active-color="#13ce66" inactive-color="#ff4949" @change="handleCheckedCitiesChange">
		</el-switch>
		<div class="yop">
		<div class="banner">
			<img class="img" src="@/assets/logo.png" />
		</div>
		</div>
		<p @click="login">aahjisasi</p>
		
		<div class="demo-image__lazy">
			<el-image v-for="url in urls" :key="url" :src="url" lazy fit="contain"></el-image>
		</div>
	</div>

</template>

<script>
	// import Footer from '@/components/footer.vue';

	var loading;
	export default {
		name: "register",

		data() {
			return {
				 urls: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ],
				checked: true
			}
		},
		mounted(){
			console.log(this.$route.query.name)
		},
		beforeCreate() {
			loading = this.$loading({
				lock: true,
				text: 'Loading',
				spinner: 'el-icon-loading',
				background: 'rgba(0, 0, 0, 0.7)'
			});
			// console.group('beforeCreate 创建前状态===============》');
		},
		created() {
			loading.close();
			
			// loadingInstance.close();
		},
		methods: {
			handleCheckedCitiesChange(e) {
				console.log(this.checked)
			},
			async login(){
				var that = this;
				  var params = {
						mobile:'18280308249',
						pwd:'123456',
						deviceId:'123456',
						deviceName:'test'
					};
					var resualt2 =await this.$fun.fn("post","https://api.it120.cc/4d5c85aa214e44192ef7672ed624541b/user/m/login",params,that)
					console.log(resualt2)
			}
		}
	}
</script>

<style lang="less" scoped>
	.yop{
		width: 100%;
		height: auto;
	}
	.banner{
		width: 100%;

	}
	.demo-image__lazy{
		height: 400px;width: 100%;
	}
	.demo-image__lazy .el-image{
	height: 400px;
	width: 200px;
		margin: 0 auto;
	display: block;
}
</style>
