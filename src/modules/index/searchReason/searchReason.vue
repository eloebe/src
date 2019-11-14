<template>
	<div>
		<top></top>
		<div class="container">
			<div class="title-div1">
				<span class="span1">返回</span>
				<b> > </b>
				<span>查询结果</span>
			</div>
			<div class="content-div">
				<h3>
					<img src="@/assets/sousuo_icon.png"/>
					电子保函查询结果
				</h3>
				<div class="overflow">
					<div class="bh_Results_l">
						<div class="bh_Results_l_Title">
							<img src="images/resulTitle.png">
							<h5>保函信息如下显示：</h5>
						</div>
						<ul class="bh_ResultsXianshi">
							<li><span>保函编号：</span>GHJ123456789009871</li>
							<li><span>保函开具日期：</span>2019--4-13</li>
							<li><span>投标有效期到期后延续天数：</span>30天</li>
							<li><span>保函最晚失效日期：</span>2019--5-15</li>
						</ul>
					</div>

					<div class="bh_Results_r">
						<img src="images/Pdf.png" class="bh_ResultsPdf_Pic" />
						<h6>瀚华投标保函电子版.pdf</h6>
						<div class="bh_ResultsClickWrap">
							<button>
								<img src="images/resultDown.png"/>立即下载
							</button>
							<button class="preview">
								<img src="images/yulan_icon.png"/>在线预览
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	// import $ from 'jquery';
	import top from '@/components/Head/Head.vue';
	import applybaohan from '@/components/apply-baohan/apply-baohan';
	import applyrecord from '@/components/apply-record/apply-record';
	import companymessage from '@/components/company-message/company-message';
	// import Details from '@/components/apply-record/details.vue';


	export default {
		components: {
			top,
			applybaohan,
			applyrecord,
			// Details,
			companymessage
		},
		name: "baohansystem",
		data() {
			return {
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
				heh:Object
				
			}
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
		.title-div1{
			margin-bottom: 14px;
			.span1{
				color: #999999;
			}
		}
		.content-div{
			width: 1200px;
			background: #ffffff;
		text-align: center;
		font-weight: 500;
    padding: 66px 0px 60px 0px;
    height: 28px;
    line-height: 28px;
    font-size: 28px;
    color: #1AAECF;
		}
		
	}
	
	
	@charset "utf-8";
* {
  margin: 0px;
  padding: 0px;
}
body {
  font-family: Microsoft YaHei;
  font-size: 14px;
  color: #989898;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  font-size: inherit;
}
/**清除浮动**/
.clear:after {
  display: block;
  clear: both;
  content: '';
}
.clear {
  zoom: 1;
}
/***    公共方法     **************开始***/
.fzBorder {
  border: none;
  outline: none;
  font-family: "微软雅黑";
  font-size: 14px;
  letter-spacing: 0.6px;
  cursor: pointer;
}
.inlineBlock {
  display: inline-block;
  *display: inline;
  *zoom: 1;
}
.imgBlock {
  display: block;
  border: none;
}
.w_position {
  position: absolute;
  left: 0px;
  top: 0px;
}
.center100 {
  width: 100%;
  text-align: center;
}
.wBh_fixed {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.2);
}
.position50 {
  position: absolute;
  left: 50%;
  top: 50%;
}
.bh_SearchTextWrap input::-webkit-input-placeholder {
  font-size: 14px;
  color: #999999;
}
.bh_SearchTextWrap input:-moz-placeholder {
  font-size: 14px;
  color: #999999;
}
.bh_SearchTextWrap input::-moz-placeholder {
  font-size: 14px;
  color: #999999;
}
.bh_SearchTextWrap input:-ms-input-placeholder {
  font-size: 14px;
  color: #999999;
}
/***    公共方法     **************结束***/
.w_HeaderLayer {
  height: 70px;
  width: 100%;
  overflow: hidden;
}
.w_Header {
  height: 70px;
  width: 100%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 6px 10px 0px rgba(173, 174, 174, 0.16);
  position: relative;
  z-index: 1;
}
.w_HeaderMain {
  width: 1200px;
  margin: auto;
  height: 70px;
  overflow: hidden;
}
.yr_logo {
  float: left;
  display: block;
  border: none;
  width: 130px;
  margin-top: 15px;
}
h3.yr_logoName {
  float: left;
  font-size: 22px;
  color: #666;
  font-weight: 500;
  padding-left: 30px;
  border-left: 1px solid #EDEFF0;
  margin-left: 30px;
  height: 70px;
  line-height: 70px;
}
img.yr_logoPeople {
  display: block;
  border: none;
  float: right;
  width: 44px;
  height: 44px;
  margin-top: 15px;
}
.w_Footer {
  width: 100%;
  height: 80px;
  padding: 18px 0px 0px 0px;
  background: #333333;
}
.w_Footer ul li {
  width: 100%;
  text-align: center;
  color: #999;
  margin-top: 6px;
}
.w_Footer ul li:first-child {
  margin-top: 0px;
}
.wBh_container {
  background: #f6f8f9;
  position: relative;
  overflow: hidden;
}
.wBh_i_Bg {
  width: 100%;
  height: 220px;
}
.wBh_InspectionTopBg {
  width: 100%;
  height: 220px;
  position: relative;
}
img.wBh_InspectionTopBg {
  display: block;
  border: none;
  width: 100%;
  height: 220px;
}
.bh_InspectionSearchWrap {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 220px;
}
.bh_i_SearchContent {
  width: 100%;
  height: 220px;
  width: 1200px;
  margin: auto;
}
.bh_i_SearchContent h2 {
  width: 100%;
  text-align: center;
  font-weight: normal;
  font-size: 30px;
  height: 30px;
  line-height: 30px;
  padding: 49px 0px 47px 0px;
  color: #1AAECF;
}
.bh_i_SearchContent h2 img {
  display: block;
  border: none;
  display: inline-block;
  *display: inline;
  *zoom: 1;
  width: 34px;
  margin-right: 5px;
  vertical-align: top;
}
.bh_SearchTextWrap li {
  float: left;
  list-style: none;
  margin-left: 21px;
}
.bh_SearchTextWrap li:first-child {
  margin-left: 0px;
}
.bh_SearchTextWrap input,
.bh_SearchTextWrap b {
  float: left;
}
.bh_SearchTextWrap input {
  border: none;
  outline: none;
  font-family: "微软雅黑";
  font-size: 14px;
  letter-spacing: 0.6px;
  cursor: pointer;
  width: 366px;
  padding: 0px 16px;
  height: 53px;
  line-height: 53px;
  background: #fff;
  border: 1px solid #1AAECF;
  box-shadow: 0px 3px 5px 0px rgba(49, 160, 200, 0.25);
  border-radius: 4px;
  cursor: text;
}
.bh_SearchTextWrap b {
  font-weight: normal;
  font-style: normal;
  color: #1AAECF;
  font-size: 20px;
  margin-right: 18px;
  line-height: 55px;
}
.bh_SearchTextWrap button {
  border: none;
  outline: none;
  font-family: "微软雅黑";
  font-size: 14px;
  letter-spacing: 0.6px;
  cursor: pointer;
  width: 120px;
  text-align: center;
  height: 55px;
  line-height: 55px;
  background: #1AAECF;
  border-radius: 3px;
  color: #fff;
  font-size: 18px;
}
.bh_SearchTextWrap button img {
  display: block;
  border: none;
  display: inline-block;
  *display: inline;
  *zoom: 1;
  vertical-align: top;
  margin-top: 19.5px;
  width: 20px;
}
.bh_SearchTextWrap button:hover {
  opacity: 0.85;
}
.bh_Banner_wh {
  width: 100%;
  height: 430px;
  overflow: hidden;
}
.bh_BannerWrap {
  width: 100%;
  height: 430px;
  overflow: hidden;
  position: relative;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  width: 100%;
  height: 100%;
}
.swiper-pagination {
  width: 100%;
  text-align: center;
  bottom: 15px;
  left: 0px;
}
.swiper-pagination span {
  width: 16px;
  height: 16px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  margin: 0px 5px;
}
.swiper-pagination .swiper-pagination-bullet-active {
  background: #fff;
  opacity: 1;
}
.wBh_QualityWrap {
  width: 100%;
  height: 200px;
  padding: 70px 0px;
  position: relative;
  background: #f9fbfc;
}
.wBh_QualityWrap ol {
  width: 1200px;
  overflow: hidden;
  margin: auto;
  height: 100%;
  text-align: center;
}
.wBh_QualityWrap li {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  height: 100%;
  list-style: none;
  border-left: 1px solid #EEF2F5;
  padding: 0px 90px;
  width: 210px;
  text-align: center;
  cursor: default;
}
.wBh_QualityWrap li:hover i {
  display: block;
}
.wBh_QualityWrap li:first-child {
  border-left: none;
}
.wBh_QualityWrap h2,
.wBh_QualityWrap h6 {
  font-weight: normal;
}
.wBh_QualityWrap h2 {
  width: 100%;
  text-align: center;
  height: 24px;
  color: #333333;
  font-size: 23px;
  line-height: 24px;
  position: relative;
  margin: 20px 0px 30px 0px;
}
.wBh_QualityWrap h2 i {
  display: block;
  width: 60px;
  height: 2px;
  position: absolute;
  left: 50%;
  bottom: -8px;
  margin-left: -30px;
  background: #1AAECF;
  display: none;
}
.wBh_QualityWrap h6 {
  font-size: 14px;
  line-height: 20px;
  color: #7B8A97;
}
.wbh_advantagesWrap {
  padding: 48px 0px 52px 0px;
}
.wbh_advantagesWrap ol {
  width: 1200px;
  overflow: hidden;
  margin: auto;
}
.wbh_advantagesWrap ol li {
  float: left;
  list-style: none;
  background: #fff;
  width: 258px;
  height: 298px;
  background: #ffffff;
  border: 1px solid transparent;
  box-shadow: 0px 3px 5px 0px rgba(143, 148, 150, 0.17);
  margin-left: 53px;
  text-align: center;
}
.wbh_advantagesWrap li:hover {
  border: 1px solid #3db9db;
  box-shadow: 0px 4px 8px 0px rgba(49, 200, 160, 0.35);
}
.wbh_advantagesWrap ol li:first-child {
  margin-left: 0px;
}
.wbh_advantagesWrap i {
  display: block;
  width: 90px;
  height: 90px;
  margin: 42px auto 25px 0px;
  display: inline-block;
  *display: inline;
  *zoom: 1;
}
.wbh_advantagesWrap h3,
.wbh_advantagesWrap h5 {
  font-weight: normal;
}
.wbh_advantagesWrap h3 {
  width: 100%;
  text-align: center;
  font-size: 23px;
  color: #6A7884;
  margin-bottom: 29px;
}
.wbh_advantagesWrap h5 {
  padding: 0px 50px;
  color: #7B8A97;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
}
.bh_headerlinkwrap {
  width: 1200px;
  margin: auto;
  padding: 30px 0px 14px 0px;
  height: 14px;
  line-height: 14px;
}
.bh_headerlinkwrap a,
.bh_headerlinkwrap b {
  float: left;
  font-weight: normal;
  font-style: normal;
  height: 14px;
  line-height: 14px;
}
.bh_headerlinkwrap a {
  text-decoration: none;
  color: #999999;
}
.bh_headerlinkwrap b {
  padding: 0px 3px;
}
.bh_headerlinkwrap .black {
  color: #333;
}
.bh_ResultsWrap {
  margin: auto;
  width: 1198px;
  height: 548px;
  border: 1px solid #EBEEF0;
  text-align: center;
  background: #fff;
  margin-bottom: 31px;
}
.bh_ResultsWrap h3 {
  width: 100%;
  text-align: center;
  font-weight: 500;
  padding: 66px 0px 60px 0px;
  height: 28px;
  line-height: 28px;
  font-size: 28px;
  color: #1AAECF;
}
.bh_ResultsWrap h3 img {
  display: block;
  border: none;
  display: inline-block;
  *display: inline;
  *zoom: 1;
  width: 26px;
  vertical-align: top;
  margin: 4px 7px 0px 0px;
}
.bh_ResultsWrap h6 {
  font-size: 16px;
  height: 16px;
  line-height: 16px;
  color: #666666;
  font-weight: normal;
  padding: 10px 0px 20px 0px;
}
img.bh_ResultsPdf_Pic {
  width: 58px;
  height: 60px;
}
.bh_ResultsClickWrap {
  width: 100%;
  text-align: center;
}
.bh_ResultsClickWrap button {
  border: none;
  outline: none;
  font-family: "微软雅黑";
  font-size: 14px;
  letter-spacing: 0.6px;
  cursor: pointer;
  width: 140px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background: #3AB69E;
  border-radius: 3px;
  color: #fff;
  margin-top: 10px;
}
.bh_ResultsClickWrap button:first-child{
  margin-top: 0px;
}
.bh_ResultsClickWrap button img {
  display: block;
  border: none;
  display: inline-block;
  *display: inline;
  *zoom: 1;
  width: 14px;
  vertical-align: top;
  margin: 13px 6px 0px 0px;
}
.bh_ResultsClickWrap .preview {
  background: #1AAECF;
}
.bh_ResultsClickWrap .preview img {
  margin: 16px 6px 0px 0px;
}
ol.bh_No_Results {
  padding: 107px 0px 0px 0px ;
  width: 290px;
  margin: auto;
}
ol.bh_No_Results li {
  list-style: none;
  font-size: 14px;
  text-align: left;
  color: #666666;
  line-height: 22px;
}
ol.bh_No_Results li img {
  display: block;
  border: none;
  display: inline-block;
  *display: inline;
  *zoom: 1;
  width: 76px;
}
ol.bh_No_Results li h4 {
  padding: 0px 0px 28px 0px;
  width: 100%;
  text-align: center;
  font-weight: normal;
  color: #1AAECF;
  font-size: 26px;
}
ol.bh_No_Results .bh_No_ResultsFaj {
  text-align: center;
  margin-bottom: 20px;
}
ol.bh_No_Results .why {
  margin-bottom: 15px;
}
.bh_Results_l{
  width: 346px;
  height: 206px;
  margin-left: 266px;
}
.bh_Results_r{
  margin-left: 88px;
  width: 180px;
}
.bh_Results_l,.bh_Results_r{
  position: relative;
  float: left;
  overflow: hidden;
}
.bh_Results_l_Title{
  position: relative;
}
.bh_Results_l_Title img{
  display: block;
  border:none;
  width: 100%;
}
.bh_Results_l_Title h5{
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  text-align: center;
  height: 35px;
  line-height: 35px;
  font-size: 14px;
  font-weight: normal;
  color: #fff;
  letter-spacing: 1px;
}
ul.bh_ResultsXianshi{
  width: 290px;
  height: 125px;
  position: absolute;
  top: 35px;
  left: 5px;
  padding: 22px;
  border: 1px solid #568DCE;
  background-color: #fff;
  z-index: 2;
}
ul.bh_ResultsXianshi li{
  list-style: none;
  font-size: 14px;
  line-height: 14px;
  color: #333333;
  margin-top: 20px;
  text-align: right;
}
ul.bh_ResultsXianshi li:first-child{
  margin-top: 0px;
}
ul.bh_ResultsXianshi li span{
  float: left;
  display: block;
  text-align: left;
}
@media (min-width: 0px) and (max-width: 1200px) {
  a.payChooseLink {
    margin: 0px 15px 15px;
  }
}
</style>
