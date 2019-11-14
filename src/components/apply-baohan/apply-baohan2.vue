<template>
	<div>
		<div class="layui-fluid">
			<div class="layui-card">
				<div class="layui-card-body" style="height: 665px;">
					<div class="layui-carousel" id="stepForm" lay-filter="stepForm" style="margin: 0 auto;">
						<div class="Box" carousel-item>
							<div style="height:665px;">
								<form class="layui-form" style="margin: 0 auto;width: 640px;padding-top: 40px;">
									<div class="Box-1" style="height:492px;overflow-y:auto;">
										<div class="layui-form-item">
											<label>投标企业名称 <span> *</span></label>
											<!-- <label id="dian" @click="dian">投标企业名称click</label> -->

											<div class="layui-block">
												<input name="applyUser" lay-verify="" v-model="companyname" type="text" placeholder="请填写申请电子保函的招标企业全称"
												 class="layui-input" />
											</div>
										</div>
										<div class="layui-form-item">
											<div class="layui-inline">
												<label>招标信息发布平台:<span> *</span></label>
												<div style="width:300px;" class="layui-input-block">
													<select lay-verify="" name="tradingPlatformName" lay-filter="aihao">
														<option value="">请选择招标信息发布平台</option>
														<option value=""></option>
														<option value="兰州市公共资源交易中心">兰州市公共资源交易中心</option>
													</select>
												</div>
											</div>
											<div class="layui-inline right">
												<label>项目招标人<span> *</span></label>
												<div style="width:300px;" class="layui-input-block">
													<input name="projectTenderer" lay-verify="" type="text" placeholder="请输入您要申请保函的项目招标人" class="layui-input" />
												</div>
											</div>
											<div class="clear"></div>
										</div>

										<!-- <div class="layui-form-item">
										<div class="layui-inline">
											<label>招标项目名称:<span> *</span></label>
											<div style="width:300px;" class="layui-input-block">
												<input lay-verify="" type="text" placeholder="请填写投标报名项目名称" class="layui-input"  />
											</div>
										</div>
										<div class="layui-inline right">
											<label>招标项目编号:<span> *</span></label>
											<div style="width:300px;" class="layui-input-block">
												<input lay-verify="" type="text" placeholder="请输入您要慎勤保函的投标项目编号" class="layui-input"  />
											</div>
										</div>
										<div class="clear"></div>
									</div> -->

										<div class="layui-form-item">
											<div class="layui-inline">
												<label>项目标段（包）名称:<span> *</span></label>
												<div style="width:300px;" class="layui-input-block">
													<input name="blockName" lay-verify="" type="text" placeholder="请输入您要申请保函的投标项目标段(包)名称" class="layui-input" />
												</div>
											</div>
											<div class="layui-inline right">
												<label>项目标段（包）编号:<span> *</span></label>
												<div style="width:300px;" class="layui-input-block">
													<input name="blockCode" lay-verify="" type="text" placeholder="请输入您要申请保函的投标项目标段(包)编号" class="layui-input" />
												</div>
											</div>
											<div class="clear"></div>
										</div>

										<div class="layui-form-item">
											<div class="layui-inline">
												<label>投标截止时间<span> *</span></label>
												<div style="width:300px;" class="layui-input-block">
													<input name="bidOpenTime" lay-verify="" type="text" placeholder="请输入您要申请保函的投标项目投标截止时间" class="layui-input"
													 id="date">
												</div>
											</div>
											<div class="layui-inline right">
												<label>投标保证金金额<span> *</span></label>
												<div style="width:300px;" class="layui-input-block">
													<input name="marginAmount" type="text" placeholder="请输入您要申请保函的投标项目保证金金额" class="layui-input" />
												</div>
											</div>
											<div class="clear"></div>
										</div>

										<div class="layui-form-item">
											<div class="layui-inline">
												<label>投标联系人姓名<span> *</span></label>
												<div style="width:300px;" class="layui-input-block">
													<input name="applyContactName" lay-verify="" type="text" placeholder="请输入您申请要保函的投标联系人姓名" class="layui-input" />
												</div>
											</div>
											<div class="layui-inline right">
												<label>投标联系人电话<span> *</span></label>
												<div style="width:300px;" class="layui-input-block">
													<input name="applyContactMobile" autocomplete="on" type="text" placeholder="请输入您要申请保函的投标报名人联系电话" class="layui-input" />
												</div>
											</div>
											<div class="clear"></div>
										</div>
									</div>

									<div class="layui-form-item bottom-btn">
										<div class="layui-input-block">
											<button type="button" class="layui-btn" lay-submit lay-filter="formStep1">
												&emsp;下一步&emsp;
											</button>
										</div>
									</div>
								</form>
							</div>
							<div style="height: 665px;">
								<form class="layui-form" style="overflow:visible;margin: 0 auto;width: 640px;padding-top: 40px;">
									<div class="Box-1" style="overflow-x:visible;padding-left:149px;height:492px;overflow-y:auto;width:550px;">
										<ul class="layui-timeline">
											<li class="layui-timeline-item">
<!--												<i class="layui-icon layui-timeline-axis"></i>-->
												<div class="layui-timeline-content layui-text">
													<div class="timeline-title-div">
														<h3 class="layui-timeline-title">申请人：</h3>
													</div>
													<p>
														{{companyname}}
													</p>
												</div>
											</li>
											<li class="layui-timeline-item">
<!--												<i class="layui-icon layui-timeline-axis"></i>-->
												<div class="layui-timeline-content layui-text">
													<div class="timeline-title-div">
														<h3 class="layui-timeline-title">项目名称：</h3>
													</div>
													<p>{{field1.blockName}}</p>
												</div>
											</li>
											<li class="layui-timeline-item">
<!--												<i class="layui-icon layui-timeline-axis"></i>-->
												<div class="layui-timeline-content layui-text">
													<div class="timeline-title-div">
														<h3 class="layui-timeline-title">项目招标人</h3>
													</div>
													<p>
														{{field1.projectTenderer}}
													</p>
												</div>
											</li>
											<li class="layui-timeline-item">
<!--												<i class="layui-icon layui-timeline-axis"></i>-->
												<div class="layui-timeline-content layui-text">
													<div class="timeline-title-div">
														<h3 class="layui-timeline-title">保证金金额(担保金额)：</h3>
													</div>
													<p>
														{{field1.marginAmount}}元
													</p>
												</div>
											</li>
											<li style="height: 120px;" class="layui-timeline-item">
<!--												<i class="layui-icon layui-timeline-axis"></i>-->
												<div class="layui-timeline-content layui-text">
													<div class="timeline-title-div">
														<h3 class="layui-timeline-title">担保方</h3>
													</div>
													<p>
														<div class="guarantee-div">
															<div v-for="(cate, index) in categories" :key="index" :data-index="index" @click="changeBorder">
																<div :class="[cateCurrentIndex == index ? 'changed' : 'unchanged']"></div>
																<img :src="cate.img" />
																<div class="rate">2%<span>费率</span></div>
																<div class="look-details">查看担保方详情</div>
															</div>
														</div>
													</p>
												</div>
											</li>
											<li class="layui-timeline-item">
<!--												<i class="layui-icon layui-timeline-axis"></i>-->
												<div class="layui-timeline-content layui-text">
													<div class="timeline-title-div">
														<h3 class="layui-timeline-title">开票选择：</h3>
													</div>
													<p>
														<input lay-filter="invoice-type" type="radio" name="invoiceStatus" value="0" title="不开票" checked>
														<input lay-filter="invoice-type" type="radio" name="invoiceStatus" value="1" title="增值税普通发票">
														<input lay-filter="invoice-type" type="radio" name="invoiceStatus" value="2" title="增值税专用发票">
													</p>
												</div>
											</li>
											<li v-if="open" class="layui-timeline-item">
<!--												<i class="layui-icon layui-timeline-axis"></i>-->
												<div class="layui-timeline-content layui-text">
													<div class="timeline-title-div">
														<h3 class="layui-timeline-title"><span>*</span>{{address}}地址：</h3>
													</div>
													<div class="layui-input-block" style="width: 300px;">
														<input name="mailAddress" type="text" placeholder="请输入您的发票邮寄地址" class="layui-input" />
													</div>
												</div>
											</li>
											<li v-if="open" class="layui-timeline-item">
<!--												<i class="layui-icon layui-timeline-axis"></i>-->
												<div class="layui-timeline-content layui-text">
													<div class="timeline-title-div">
														<h3 class="layui-timeline-title"><span>*</span>联系方式：</h3>
													</div>
													<div class="layui-input-block">
														<input name="contactMobile" style="width: 300px;" type="text" placeholder="请输入您的联系电话" class="layui-input" />
														<p>
															1、开票信息将与您的企业信息一致<br>
															2、担保机构发票开具时间为固定时间，有疑问请电话联系担保机构：010-2345-1234
														</p>
													</div>
												</div>
											</li>
											<li class="layui-timeline-item">
<!--												<i class="layui-icon layui-timeline-axis"></i>-->
												<div class="layui-timeline-content layui-text">
													<div class="timeline-title-div">
														<h3 class="layui-timeline-title"><span>*</span>企业从业人数：</h3>
													</div>
													<div class="layui-input-block" style="width: 300px;">

														<input name="employeesNumber" type="text" placeholder="请输入企业从业人数" class="layui-input" />
													</div>
												</div>
											</li>
											<li class="layui-timeline-item">
<!--												<i class="layui-icon layui-timeline-axis"></i>-->
												<div class="layui-timeline-content layui-text">
													<div class="timeline-title-div">
														<h3 class="layui-timeline-title"><span>*</span>企业营业收入(万元)：</h3>
													</div>
													<div class="layui-input-block" style="width: 300px;">
														<input name="turnover" type="text" placeholder="请输入企业营业收入" class="layui-input" />
													</div>
												</div>
											</li>
											<li class="layui-timeline-item">
<!--												<i class="layui-icon layui-timeline-axis"></i>-->
												<div class="layui-timeline-content layui-text">
													<div class="timeline-title-div">
														<h3 class="layui-timeline-title"><span>*</span>企业资产总额(万元)：</h3>
													</div>
													<div class="layui-input-block" style="width: 300px;">
														<input name="totalAssets" type="text" placeholder="请输入企业资产总额" class="layui-input" />
													</div>
												</div>
											</li>
											<li class="layui-timeline-item">
<!--												<i class="layui-icon layui-timeline-axis"></i>-->
												<div class="layui-timeline-content layui-text">
													<div class="timeline-title-div">
														<h3 class="layui-timeline-title">保函费用：</h3>
													</div>
													<p>
														<span class="count" v-if="guaranteeAmount === ''">*</span>
														<span class="count" v-else>{{guaranteeAmount}}</span>
														元
													</p>
												</div>
											</li>
										</ul>
									</div>
									<div class="layui-form-item bottom-btn2">
										<div class="layui-input-block">
											<button type="button" class="layui-btn layui-btn-primary pre">上一步</button>
											<button class="layui-btn" lay-submit lay-filter="formStep2">
												&emsp;下一步&emsp;
											</button>
										</div>
									</div>
								</form>
							</div>
							<div style="">
								<!-- <iframe src="https://mozilla.github.io/pdf.js/web/viewer.html" width="100%" height="99%"></iframe> -->

								<div class="main3 overflow">
									<div class="left">
										<h2 class="h2-title">请使用您的UKey为以下文件签章：</h2>
										<p class="small-title"></p>
										<ul class="ul1">
											<li>
												<h2>
													<img src="@/assets/a.png" />
													《出具投标保函申请书》
													<a href="@/components/pdfjs/web/viewer.html" target="blank"><span class="preview">预览</span></a>
													<div data-cateid="0" @click="signOnline" class="signatrue">
														<span class="cursor">在线签章</span>
													</div>
												</h2>
												<span class="look-instance">查看示例</span>
											</li>
											<li>
												<h2>
													<img src="@/assets/a.png" />
													《企业征信授权书》
													<span class="preview">预览</span>
													<div data-cateid="1" @click="signOnline" class="signatrue">
														<span class="cursor">在线签章</span>
													</div>
												</h2>
												<span class="look-instance">查看示例</span>
											</li>
											<li>
												<h2>
													<img src="@/assets/a.png" />
													请上传《企业资质证书》
													<span class="preview">预览</span>
													<el-upload style="width:94px;height:30px;" class="upload-demo signatrue" action="http://47.99.121.153:8088/file/upload" :on-success="aftersuccess" :limit="1">
														<el-button style="line-height:0;background: #19AECF;width:94px;height:30px;border-radius:none;border:none;"
														 size="" type="primary">点击上传</el-button>
													</el-upload>
												</h2>
												<span class="look-instance">查看示例</span>
											</li>
										</ul>
									</div>
									<hr />
									<div class="right">
										<h2>常见问题</h2>
										<ul>
											<li>
												<h3><img src="@/assets/b.png" />为什么必须使用Ukey进行在线签章？</h3>
												<p>使用电子签章可以有效避免外部人员冒充公司进行电子保函申请。</p>
											</li>
											<li>
												<h3><img src="@/assets/b.png" />可以使用哪些UkeyY对文件进行在线签章？</h3>
												<p>当前只支持使用甘肃省省局认可的USBKEY（文锐锁/成兴锁）对文件进行在线签章。</p>
											</li>
											<li>
												<h3><img src="@/assets/b.png" />没有企业资质证书怎么办？</h3>
												<p>根据担保机构要求，建筑行业企业必须上传企业资质证书，非建筑商业选择性上传。</p>
											</li>
										</ul>
									</div>
								</div>

								<div class="layui-form-item bottom-btn3">
									<div class="layui-input-block">
										<button type="button" class="layui-btn layui-btn-primary pre">上一步</button>
										<button class="layui-btn" lay-submit lay-filter="formStep4">
											&emsp;提交&emsp;
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div id="layer122" style="display: none;">
			<div class="layer-div">
				<h3 class="">电子保函申请须知</h3>
				<div class="square">
				</div>
				<p>为确保申请企业信息准确无误，请插入甘肃省公共资源交易主体共享平台认证通过的数字证书（Ukey）进行企业信息校验。</p>
                <p><a>*</a>特别说明：保函申请暂只支持甘肃文锐、成兴颁发的数字证书。</p>
				<div class="layui-input-inline btn1" style="width: 100%;">
					<button @click="_href1" type="button" class="layui-btn">没有数字证书，立即办理</button>
					<button @click="load_layer" type="button" class="layui-btn">已插入Ukey，前往申请保函</button>
				</div>
				<div class="AGFooter">
					无法识别数字证书？请先下载
					<a href="http://interlinknew.oss-cn-hangzhou.aliyuncs.com/guarantee_letter/test/2019-07-12/guarantee_pdf/9c92567794634cb38d476748de9246d8.exe" target="_back">Ukey驱动</a>
					安装后重新插入Ukey重试。
				</div>
			</div>
		</div>
		<div id="layer110" style="display: none;">
			I LOVE YOU !
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'

	import img_url from '@/assets/logo2.png'
	import img_url2 from '@/assets/logo3.png'
	import '@/assets/css/viewer.min.css';
	import viewerjs from '@/assets/js/viewer.min.js'
	import online from "@/assets/js/sign_online.js";
	import Lay from "@/assets/js/layui_method.js";
	var upload_file;
	export default {
		data() {
			return {
				num: 'number',
				open: false,
				cateCurrentIndex: 'number',
				categories: [{
						cateid: 0,
						img: img_url
					},
					{
						cateid: 1,
						img: img_url2
					}
				],
				changed: false,
				layer122: '',
				field1: '',
				guaranteeAmount: '',
				companyname:'',
				address: '邮寄',
				fif:true
				// fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
			}
		},
		created(){
			
		},
		mounted() {
			var newurl;
			this.login();
			var that = this;
			
			// var layer122;
			layui.use(['jquery', 'element', 'step', 'form', 'laydate', 'layer'], function() {
				var $ = layui.jquery,
					form = layui.form,
					step = layui.step,
					element = layui.element,
					layer = layui.layer;

				var laydate = layui.laydate;
				//执行一个laydate实例
				laydate.render({
					elem: '#date' //指定元素
				});
				/* if(that.fif){
				that.layer122 = layer.open({
					type: 1,
					title: false,
					closeBtn: 0,
					area: '520px',
					skin: 'layui-layer-nobg', //没有背景色
					content: $('#layer122')
				});
				$('.layui-layer').css('box-shadow', 'none');
				} */
				 var timer = setInterval(
				 ()=>{
				if(com=='null'||com==null){
				 }else{
					 that.$store.state.companyname = sessionStorage.getItem('companyname');
					  var conmpany = com.split(';');
					  that.$store.state.companyname = conmpany[0];
					  that.companyname = that.$store.state.companyname;
					  // layer.close(that.layer122);
					  // $('#layer122').hide();
					   // that.jj();
				 }
				 }
				 ,500); 

				laydate.render();
				step.render({
					elem: '#stepForm',
					filter: 'stepForm',
					width: '100%', //设置容器宽度
					stepWidth: '100%',
					height: '500px',
					stepItems: [{
						title: '填写项目报名信息'
					}, {
						title: '选择保函申请机构'
					}, {
						title: '上传申请材料'
					}]
				});
				//创建弹层
				// var layer122;
				var com = sessionStorage.getItem('companyname');
				

				/* var timer = setInterval(
				 ()=>{
				if(com=='null'||com==null){
					 var isShow = $('#layer122').is(":visible");
					 if(isShow){
					 }else{
						 that.jj();
					 }
				 }else{
					 that.$store.state.companyname = sessionStorage.getItem('companyname');
					  var conmpany = com.split(';');
					  that.$store.state.companyname = conmpany[0];
					  that.companyname = that.$store.state.companyname;
					  layer.close(that.layer122);
					  $('#layer122').hide();
					   // that.jj();
				 }
				 }
				 ,500); */
				
		
		
				
				form.on('radio(invoice-type)', function(data) {
					console.log(data.value); //被点击的radio的value值
					if (data.value == '1' || data.value == '2') {
						that.open = true;
					} else {
						that.open = false;
					}
				});
				form.render();

				form.on('submit(formStep1)', function(data) {
					console.log(data.field)
					that.field1 = data.field;
					step.next('#stepForm');
					return false;
				});

				form.on('submit(formStep2)', function(data) {
					that.field1 = Object.assign(that.field1, data.field);
					that.field1.guaranteeFee = that.guaranteeAmount;
					step.next('#stepForm');
					return false;
				});
				form.on('submit(formStep4)', function(data) {
					// alert(20)
					// var opp = online.initEventHandle();
					// console.log(opp)
					var applyurl = localStorage.getItem('applyurl');
					var allowpowerurl = localStorage.getItem('allowpowerurl');
					console.log(that.field1)
					var apply = {
						"applyAttachments": [{
								"type": "0",
								"url": applyurl
							},
							{
								"type": "1",
								"url": allowpowerurl
							},
							{
								"type": "2",
								"url": upload_file
							}
						],
						"applyInfo": {
							"applyContactMobile": that.field1.applyContactMobile,
							"applyContactName": that.field1.applyContactName,
							"applyUser": that.field1.applyUser,
							"guaranteeFee": that.field1.guaranteeFee,
							"guaranteeType": "",
							"guarantor": that.field1.guarantor,
							"invoiceStatus": that.field1.invoiceStatus,
							"mailAddress": that.field1.mailAddress,
							"marginAmount": that.field1.marginAmount,
							"projectTenderer": that.field1.projectTenderer,
							"contactMobile": that.field1.contactMobile,
                            "bidOpenTime": that.field1.bidOpenTime,
							"remark": "",
							"searchValue": "",
							"status": "",
							"tradingPlatformName": that.field1.tradingPlatformName,
						},
						"biddingResult": {
							"blockCode": that.field1.blockCode,
							"blockName": that.field1.blockName,
							"tenderer": "",
						},
						"dzbhCompanyInfo": {
							"companyPopulation": 0,
							"totalAssets": that.field1.totalAssets,
							"turnover": that.field1.turnover,
							"employeesNumber": that.field1.employeesNumber,
						}
					};

					// apply = JSON.stringify(apply);
					console.log(apply)
					
					/* var wurl = that.HOST+"/pay/toPayPage?jsonStr=%7B%27orderNo%27%3A%27BH1008015629276072503651%27%2C%27sign%27%3A%27aa7e7a9b74d197977706394f272442be%27%2C%27returnUrl%27%3A%27http%3A%2F%2F47.99.121.153%3A8088%2Fe%2Fapply%2Fsuccess%27%2C%27platformCode%27%3A%271008%27%2C%27timestamp%27%3A%271562927613709%27%7D";
					 window.location.href = wurl; */
					that.$axios.post(that.$store.state.Api3+'/ApplyInfo/toApply', apply)
						.then(res => {
							console.log(res);
							// this.$router.replace(aurl)
							// 'http://47.99.121.153:18086/pay/toPayPage?jsonStr=%7B%27orderNo%27%3A%27BH1008015629251732362294%27%2C%27sign%27%3A%27e5b0895d891a22442e9d5377e8469659%27%2C%27returnUrl%27%3A%27payPlatformNotityUrl%27%2C%27platformCode%27%3A%271008%27%2C%27timestamp%27%3A%271562925173668%27%7D';
							if(res.status==200){
								window.location.href = res.data.data;
							}
							// console.log(newurl2)
						})
						.catch(error => {
							console.log(res);
							// console.log(res.data.data.url,that.field1.applyUser)
						})
					return false;
				});
				$('.pre').click(function() {
					step.pre('#stepForm');
				});

				$('.next').click(function() {
					step.next('#stepForm');
				});
				form.render();

			})
			//签章
		},
		methods: {
			aftersuccess(file) {
				upload_file = file.body.url_0;
				console.log(file.body.url_0);
			},
			dian() {
				var that = this;
				Lay.Layer('#layer110')
				/* 	layui.use(['jquery', 'element', 'step', 'form', 'laydate', 'layer'], function() {
									var $ = layui.jquery,
										layer = layui.layer;
									layer.open({
									  type: 1,
									  title: false,
									  closeBtn: 0,
										area: '520px',
										skin: 'layui-layer-nobg', //没有背景色
									  content:$('#layer122')
									});
									$('.layui-layer').css('box-shadow','none');
								}) */
			},
			jj() {
				var that = this;
				that.layer122 = layer.open({
					type: 1,
					title: false,
					closeBtn: 0,
					area: '520px',
					skin: 'layui-layer-nobg', //没有背景色
					content: $('#layer122')
				});
				$('.layui-layer').css('box-shadow', 'none');
			},
			async load_layer() {
				var that = this;
				var params;
				 var com = sessionStorage.getItem('companyname')
				  that.$store.state.companyname = sessionStorage.getItem('companyname');
				  var conmpany = com.split(';');
				  that.$store.state.companyname = conmpany[0];
				  that.companyname = that.$store.state.companyname;
				var resualt2 = await this.$fun.fn("get", that.$store.state.Api3+"/ApplyInfo/companyNameForMore?companyName="+that.companyname, params, that)
				console.log(resualt2)
				layui.use(['layer'], function() {
					var layer = layui.layer;
				 // window.location.href = "https://excashier.alipay.com/standard/auth.htm?payOrderId=b9a419c2bfae4d549a5c0a3e0671e3e4.40"
					console.log(resualt2.data.status)
					if (resualt2.data.status == 1){
						$('.layui-layer-shade').hide();

						// location.reload();
						layer.close(that.layer122);
						$('#layer122').hide();
						// console.log()
						// ;
						// console.log()
						// layer.close(layer122);
						// that.jj()
					}else {
						layer.msg('未查询到企业信息，请插入Ukey重试或更新驱动');
					}
				})

			},
			preview() {
				 window.location.href = ""
			},
			_href1() {
				window.location.href = "http://101.37.134.104/Operators/OperatorRegister"
			},
			async changeBorder(e) {
				var that = this;

				var index = e.currentTarget.dataset.index;
				if (index == 0) {
					that.address = '邮寄'
				} else if (index == 1) {
					that.address = '邮箱'
				}
				that.field1.guarantor = index;
				index = Number(index);
				that.cateCurrentIndex = index;
				
				var params;
				console.log(that.field1.marginAmount)
				var resualt2 = await this.$fun.fn("get", that.$store.state.Api3+"/ApplyInfo/dzbhMoney?marginAmount=" + that.field1.marginAmount, params,
					that)
				console.log(resualt2.data.data)
				that.guaranteeAmount = resualt2.data.data;
//				that.changed = true;
			},
			login() {},
			signOnline(e) {
				var that = this;
				var cateid = e.currentTarget.dataset.cateid;
				cateid = parseInt(cateid);
				var params2 = {
					"applyInfo": {
						"applyContactMobile": that.field1.applyContactMobile,
						"applyContactName": that.field1.applyContactName,
						"applyUser": that.field1.applyUser,
                        "guarantor": that.field1.guarantor,
						"contactMobile": that.field1.contactMobile,
						"guaranteeFee": that.field1.guaranteeFee,
						"guaranteeNumber": that.field1.guaranteeNumber,
						"invoiceStatus": that.field1.invoiceStatus,
						"mailAddress": that.field1.mailAddress,
						"marginAmount": that.field1.marginAmount,
						"projectTenderer": that.field1.projectTenderer,
						"tradingPlatformName": that.field1.tradingPlatformName,
					},
					"mark": cateid,
					"blockCode":that.field1.blockCode,
					"blockName":that.field1.blockName
				};

				this.$axios.post(that.$store.state.Api3+'/ApplyInfo/createPDF', params2)
					.then(res => {
						console.log(res);
						// console.log(res.data.data.url);
						online.sign(res.data.data.url, that.field1.applyUser,cateid);
						online.initEventHandle(cateid)

					})
					.catch(error => {

					})
			},
			signatrue() {
				layui.use(['upload', 'jquery'], function() {
					var layer = layui.layer,
						$ = layui.jquery,
						upload = layui.upload;
					upload.render();
					var uploadInst = upload.render({
						elem: '#signatrue2' //绑定元素
							,
						url: that.$store.state.Api3+'/file/upload' //上传接口
							,
						data: {
							module: 3
						} //可选项。额外的参数，如：{id: 123, abc: 'xxx'}
						,
						accept: 'file'
							// ,auto:false,//选择图片后不自动上传
							,
						choose: function(obj) {
								obj.preview(function(index, file, result) {
									console.log(result)
									// $('#demo1').attr('src', result); //图片链接（base64）
								});
							} //选择后回调，设置显示图片
							// bindAction:'#ds'//绑定元素点击再上传
							,
						before: function(obj) {
							//预读本地文件示例，不支持ie8
						},
						done: function(res) {
							console.log(res)
							layer.msg(resault.msg);
							//上传完毕回调
						},
						error: function(error) {
							console.log(error)
						}
					});

				})
			}
		}

	}
</script>

<style scoped="scoped" lang="less">
	.bottom-btn {
		margin-bottom: 0;
		margin-top: 70px;
		text-align: center;
	}

	.bottom-btn2 {
		margin-top: 72px;
		text-align: center;
	}

	.layui-form label span {
		font-size: 12px;
		color: #FF5555;
	}

	.layui-input-block {
		margin-left: 0;
	}

	.layui-carousel {
		height: 100% !important;
		// max-height: 665px !important;
		// overflow: hidden !important;
	}

	//时间树
	.timeline-title-div {
		width: 155px;
		text-align: right;
		position: relative;
		left: -196px;
		z-index: 100000;

		.layui-timeline-title {
			width: 100%;
			font-size: 14px;
			position: static;
			display: inline-block;

			&>span {
				color: #FF5555;
			}
		}
	}

	.layui-timeline-content>p {
		margin-top: -32px;
		font-size: 14px;
		color: #3C4F57;
	}

	.layui-timeline {
		padding-left: 23px;
	}

	.layui-form-radio {
		margin: 0 !important;
	}

	#stepForm .layui-timeline .layui-input-block p {
		font-size: 11px;
		color: #3C4F57;
		opacity: 0.5;
		line-height: 18px;
	}

	#stepForm .layui-timeline .layui-timeline-content>p {
		font-size: 14px;
		color: #3C4F57;
	}

	.count {
		font-size: 24px;
		color: #FF5900;
	}

	.layui-card {
		box-shadow: none;
	}

	.main3 {
		position: relative;
		padding: 40px 40px 0 40px;

		hr {
			position: absolute;
			right: 369px;
			top: 40px;
			height: 352px;
			width: 1px;
			background: #E1E8EC;
		}

		&>.left {
			width: 540px;

			.h2-title {
				font-size: 18px;
				color: #3C4F57;
				letter-spacing: 0;
				font-weight: bold;
			}
		}

		&>.right {
			width: 298px;
			padding-left: 30px;

			&>h2 {
				font-size: 18px;
				color: #3C4F57;
				margin-bottom: 40px;
				font-weight: bold;
			}

			&>ul li {
				h3 {
					margin-bottom: 14px;
					font-size: 14px;
					font-weight: bold;
					color: #3C4F57;

					&>img {
						margin-right: 8px;
					}
				}

				p {
					opacity: 0.7;
					font-size: 13px;
					color: #3C4F57;
					line-height: 20px;
					margin-bottom: 32px;
				}
			}
		}
	}

	.small-title {
		margin-bottom: 40px;
		font-size: 14px;
		color: #95B3BE;
		letter-spacing: 0;

		// line-height: px;
		span {
			color: #19AECF;
		}
	}

	.ul1 {
		width: 100%;
	}

	.ul1 li {
		position: relative;
		height: 50px;
		margin-bottom: 24px;

		h2 {
			position: relative;
			font-size: 14px;
			color: #3C4F57;
			width: 468px;
			height: 100%;
			line-height: 50px;
			border: 1px solid #E1E8EC;
			background: #FBFCFD;

			img {
				margin: -5px 0 0 24px;
			}

			.preview {
				font-size: 14px;
				color: #19AECF;
				position: absolute;
				right: 132px;
				top: 17px;
				line-height: initial;
			}

			.signatrue {
				position: absolute;
				top: 50%;
				right: 24px;
				margin-top: -14px;
				background: #19AECF;
				border: 1px solid #E1E8EC;
				border-radius: 2px;
				width: 92px;
				height: 28px;
				text-align: center;
				line-height: 28px;

				span {
					color: #ffffff;
					font-size: 14px;
				}
			}
		}

		.look-instance {
			position: absolute;
			right: 0;
			top: 50%;
			font-size: 14px;
			margin-top: -12px;
			text-decoration: underline;
			color: #19AECF;
		}
	}

	.bottom-btn3 {
		margin-top: 169px;
		text-align: center;
	}

	.guarantee-div {
		overflow: hidden;

		&>div {
			position: relative;
			width: 120px;
			height: 120px;
			float: left;
			margin-right: 20px;

			&>img {
				position: absolute;
				left: 50%;
				top: 15px;
				width: 104px;
				margin-left: -52px;
				vertical-align: top;
			}

			.unchanged {
				background: url(~@/assets/unchanged.png) no-repeat;
				background-size: 120px 120px;
				width: 100%;
				height: 100%;
			}

			.changed {
				background: url(~@/assets/changed.png) no-repeat;
				background-size: 120px 120px;
				width: 100%;
				height: 100%;
			}

			.rate {
				font-size: 12px;
				position: absolute;
				top: 50px;
				left: 37px;
			}

			.look-details {
				font-size: 12px;
				position: absolute;
				top: 82px;
				left: 18px;
				color: skyblue;
			}
		}
	}

	#layer122 {
		background: transparent;
		position: relative;
		height: 429px;

		.layer-div {
			width: 100%;
			height: 369px;
			position: absolute;
			bottom: 0;
			left: 0;
			background: #ffffff;

			&>h3 {
				margin-top: 90px;
				text-align: center;
				font-size: 18px;
				color: #3C4F57;
			}
			&>p {
				font-size: 13px;
				color: #3C4F57;
				padding: 0px 60px;
				margin-bottom: 13px;
				margin-top: 20px;
				line-height: 30px;
			}
			.btn1 {
				margin-top: 22px;
				text-align: center;
				margin-left: auto;
				margin-right:auto;
				display: block;
                width: 520px !important;
			}
			.AGFooter{
				height: 40px;
				line-height: 42px;
				background-color: #FAFBFC;
				border-top: 1px solid #E1E8EC;
			position: absolute;
				left: 0px;
			bottom: 0px;
			width: 100%;
    z-index: 1;
    text-align: center;
		a{
			text-decoration: underline;
			color: #19AECF;
		}
			}
			.square {
				width: 152px;
				height: 133px;
				background: url(~@/assets/img1.png) no-repeat;
				background-size: 152px 133px;
				position: absolute;
				left: 50%;
				margin-left: -76px;
				top: -67px;
			}
		}
	}

	.el-upload {
		width: 94px !important;
		height: 30px !important;
	}
</style>
