<template>
	<div>
		<topnav></topnav>
		
		<el-carousel :height="bannerheight+'px'" :autoplay='false'>
			<el-carousel-item class="" v-for="item in 4" :key="item">
				<!-- <h3 class="hh3">{{ item }}</h3> -->
				<img ref="bannerheight" src="@/assets/big-2.jpg" />

			</el-carousel-item>
		</el-carousel>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				
				<div class="swiper-slide">
					<router-link :to="{ path: '/homechild1' }">
					Slide 1
					</router-link>
					</div>
				<div class="swiper-slide">
					<router-link :to="{ path: '/homechild2' }">
					Slide 2
					</router-link>
					</div>
				<div class="swiper-slide">Slide 3</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>
			<!-- 如果需要导航按钮 -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
			<!-- 如果需要滚动条 -->
			<div class="swiper-scrollbar"></div>
		</div>
		<router-view></router-view>

	</div>
</template>

<script>
	/* import Swiper from 'swiper';*/

	import Swiper from 'swiper';
	import 'swiper/dist/idangerous.swiper.css';
	import topnav from '@/components/Head/header';

	export default {
		components: {
			topnav
		},
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
				items: [],
				shop: 'shop',
				showCart: false,
				verified: false,
				bannerheight: ''
			}
		},
		mounted() {
			var mySwiper = new Swiper('.swiper-container', {})

		},
		computed: {},
		methods: {
		}
	}
</script>

<style scoped="scoped" lang="less">
	/* @import "../../../../node_modules/swiper/dist/idangerous.swiper.css"; */
	.el-carousel__item img {
		width: 100%;
		height: auto;
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	.swiper-container {
		width: 600px;
		height: 300px;
	}

	
</style>
