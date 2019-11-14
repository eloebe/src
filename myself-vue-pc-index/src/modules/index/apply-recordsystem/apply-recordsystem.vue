<template>
	<div>
		<top></top>
		<div class="container">
			<div class="left">
				<div class="imgdiv">
					<img src="@/assets/touxiang.png"/>
				</div>
				<h3>易融互联用户</h3>
				<hr style="background: #E1E8EC;width:160px;margin-left: auto;margin-right: auto;margin:0 auto 30px auto;">
				<!-- <ul>
					<li v-for="(cate, index) in categories" :key="index" :data-cateid="cate.cateid" :data-index="index" :class="[cateCurrentIndex == index ? 'grace-tab-current' : '']"
					 @click="tabChange"><img style="margin-right:5px;margin-top: -5px;" src="@/assets/1.png" />{{cate.name}}</li>
				</ul> -->
				<connomtab :class="{'applyrecord':isnowpage}"></connomtab>
			</div>
			<div class="right">
				<applybaohan></applybaohan>
				<!-- <applyrecord  v-else-if="num === 1"></applyrecord> -->
				<!-- <Details  v-else-if="num === 'detail'"></Details> -->
				<!-- <Details v-else></Details> -->
			</div>
			<div class="clear"></div>
		</div>
		
		
	</div>
</template>

<script>
	var loading;
	// import $ from 'jquery';
	import top from '@/components/Head/Head.vue';
	import applybaohan from '@/components/apply-baohan/apply-baohan';
	import applyrecord from '@/components/apply-record/apply-record';
	import companymessage from '@/components/company-message/company-message';
	
	import connomtab from '@/components/connom_tab/connom_tab';

	// import Details from '@/components/apply-record/details.vue';


	export default {
		components: {
			top,
			applybaohan,
			applyrecord,
			connomtab,
			// Details,
			companymessage
		},
		name: "baohansystem",
		data() {
			return {
				isnowpage:true,
				categories: [{
						cateid: 0,
						name: "申请电子保函"
					},
					{
						cateid: 1,
						name: "保函申请记录"
					},
					{
						cateid: 2,
						name: "企业信息管理"
					}
				],
				num:0,
				cateCurrentIndex: 0,
				heh:Object,
				second:Number,
				yes:false
				
			}
		},
		 computed:{
		},
		beforeCreate() {
		},
		created(){
		},
		mounted() {
			
			
		},
		methods: {
// 			myevent2(e){
// 				var that = this;
// 		that.heh = e;
// 		that.num = that.heh.name;
// 		return false;
// 
// 		},
			tabChange(e) {
				// 选中的索引
				var index = e.currentTarget.dataset.index;
				index = Number(index);
				this.num = index;
				
				// 具体的分类id
				var cateid = e.currentTarget.dataset.cateid;
				this.cateCurrentIndex = index;
				// 动态替换内容
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	
	.block-center{
		margin: 0 auto;
	}
	.container{
		width: 1200px;
		.block-center;
		&>div.left{
			width: 200px;
			background: #ffffff;
			border: 1px solid #e1e8ec;
			.imgdiv{
				width: 100px;
				height: 100px;
				background: #19aecf;
				margin: 50px auto 14px auto;
			};
			h3{
				font-size: 14px;
				color: #3C4F57;
				letter-spacing: 0;
				text-align: center;
				margin-bottom: 28px;
			}
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
		};
		&>div.right{
			width: 978px;
			background: #ffffff;
			// border-left:  1px solid #e1e8ec;
			// border-right:  1px solid #e1e8ec;
			border: 1px solid #e1e8ec;
			// border-top: 1px solid #e1e8ec;
		}
		
	}
</style>
