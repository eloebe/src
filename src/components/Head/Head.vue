<template>
	<div>
		<div class="top-box">
			<div class="top-box2 overflow">
				<div class="top-img left">
					<img src="@/assets/logo.png"/>
				</div>
				<div class="left toptitle">
					<h2>电子保函系统</h2>
				</div>
				<div class="right top-rightimg">
					<img src="@/assets/touxiang_s.png"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
	}
</script>

<style scoped="scoped" lang="less">
	.block-center{
		margin: 0 auto;
	}
	.top-box{
		border-bottom:1px solid #e1e8ec;
		height: 70px;
		width: 100%;
		margin-bottom: 20px;
		background: #ffffff;
		.top-box2{
			width: 1200px;
			height: 100%;
			.block-center;
		}
	}
	.top-img{
		width: 150px;
		height: 48px;
		margin-top: 11px;
		display: inline-block;
	}
	.toptitle{
		letter-spacing: 2px;
		font-size: 24px;
		height: 48px;
		line-height:50px;
		margin-top: 10px;
		color: #3C4F57;
		padding-left: 30px;
		margin-left: 30px;
		border-left:1px solid #EFF4F7;
	}
	.top-rightimg{
		width: 50px;
		height: 50px;
		margin-top: 10px;
	}
</style>
