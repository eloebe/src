<template>
	<div>
		<header>
			<div class="center">
				<nav class="first-nav">
					<div v-for="(item, index) in categories" :key="index" :data-index="index" @mouseenter="mouseover" @mouseleave="mouseLeave">
						{{item.name}}
						<transition name="el-zoom-in-center">
							<nav v-show="index==num" v-if="item.children.length > 0" class="second-nav">
								<div v-for="(da, index2) in item.children" :key="index2">{{da.name}}</div>
							</nav>
						</transition>
					</div>
				</nav>
			</div>
		</header>
	</div>
</template>

<script>
	export default {
		name: "homepage",
		data() {
			return {
	num: Number,
	categories: [{
			cateid: 1,
			name: "申请电子保函",
			children: [{
					name: "子页面1",
					url: "../../static/index-img_06.jpg"
				},
				{
					name: "子页面2",
					url: "../../static/index-img_06.jpg"
				},
				{
					name: "子页面2",
					url: "../../static/index-img_06.jpg"
				},
				{
					name: "子页面3",
					url: "../../static/index-img_06.jpg"
				}
			]
		},
		{
			cateid: 2,
			name: "申请电子保函2",
			children: [{
					name: "子页面1",
					url: "../../static/index-img_06.jpg"
				},
				{
					name: "子页面2",
					url: "../../static/index-img_06.jpg"
				},
				{
					name: "子页面2",
					url: "../../static/index-img_06.jpg"
				},
				{
					name: "子页面3",
					url: "../../static/index-img_06.jpg"
				}
			]
		},
		{
			cateid: 3,
			name: "申请电子保函3",
			children: [{
					name: "子页面1",
					url: "../../static/index-img_06.jpg"
				},
				{
					name: "子页面2",
					url: "../../static/index-img_06.jpg"
				},
				{
					name: "子页面3",
					url: "../../static/index-img_06.jpg"
				}
			]
		}
	
	],
	}
	},
	methods: {
		mouseover(e) {
			var cateid = e.currentTarget.dataset.index;
			this.num = cateid;
			this.verified = true;
		},
		mouseLeave() {
			this.verified = false;
			this.num = Number;
		}
	}
	}
</script>

<style scoped="scoped" lang="less">
	header {
		height: 70px;
		width: 100%;
	
		.center {
			width: 1200px;
			height: 100%;
			margin: 0 auto;
			background: lightgrey;
			position: relative;
		}
	
		.first-nav {
			position: absolute;
			bottom: 0;
			left: 0;
	
			&>div {
				width: ;
				display: inline-block;
				text-align: center;
				position: relative;
	
				&>.second-nav {
					position: absolute;
					top: 24px;
					left: 0;
					z-index: 100;
					background: #475669;
	
					div {
						width: 80px;
						line-height: 30px;
						height: 30px;
					}
				}
			}
		}
	}
</style>
