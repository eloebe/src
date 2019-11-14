<template>
	<div>
		<ul class="footer fixed">
			<li><router-link to="/">首页</router-link></li>
			<li @click="handleCheckedCitiesChange"><router-link  to="/manage">列表</router-link></li>
		</ul>
	</div>
</template>

<script>
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

<style scoped>
	.footer{
		height: 50px;
		line-height: 50px;
		width: 10rem;
		bottom: 0;
		left: 0;
		display: flex;
	}
	.footer li{
		width: 100%;
		height: 100%;
	}
	.footer li a{
		display: inline-block;
		width: 100%;
		height: 100%;
		font-size: 0.32rem;
		background: #f1f1f1;
	}
	.isindex li:first-child{
		background: #d3d3d3;
	}
	.isindex li:first-child a{
		color: #41b883;
	}
	.ismanage li:last-child{
		background: #d3d3d3;
	}
	.ismanage li:last-child a{
		color: #41b883;
	}
</style>
