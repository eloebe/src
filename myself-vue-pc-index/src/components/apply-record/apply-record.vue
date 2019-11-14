<template>
	<div>
		<div v-if="sh === true" class="hide">
		<h2 class="page-title"><span></span>保函订单列表</h2>
		<div class="box2">
			<form class="layui-form layui-form1">
				<div class="layui-form-item">
					<div class="layui-inline">
						<label>标段名称</label>
						<div style="width:300px;" class="layui-input-block">
							<input name="blockName" type="text" placeholder="请输入要查询的项目名称" class="layui-input" lay-verify="" />
						</div>
					</div>
					<div class="layui-inline ">
						<label>订单编号</label>
						<div style="width:300px;" class="layui-input-block">
							<input name="orderNo" type="text" placeholder="请输入要查询的项目名称" class="layui-input" lay-verify="" />
						</div>
					</div>
					<div class="layui-inline">
						<label>订单申请时间<span> *</span></label>
						<div style="width:300px;" class="layui-input-block">
							<input name="createTime" type="text" placeholder="" class="layui-input" id="date">
						</div>
					</div>
					<div class="clear"></div>
				</div>

				<div class="layui-form-item">
					<div class="layui-inline">
						<label>保函状态:</label>
						<div style="width:300px;" class="layui-input-block">
							<select name="status" lay-filter="aihao">
								<option value="">全部</option>
								<!-- <option value=""></option> -->
								<option value="0">待支付</option>
								<option value="1">待审核</option>
								<option value="2">待上传</option>
								<option value="3">已驳回</option>
								<option value="5">已完成</option>
								<option value="8">已取消</option>
								<option value="9">推送保函信息失败</option>
							</select>
						</div>
					</div>
					<div class="layui-inline">
						<label>保函类型:</label>
						<div style="width:300px;" class="layui-input-block">
							<select name="guaranteeType" lay-filter="aihao">
								<option value="">请选择保函类型</option>
								<option value=""></option>
								<option value="0">投标保函</option>
							</select>
						</div>
					</div>
					<div class="layui-inline ">
						<label>投标登记号</label>
						<div style="width:300px;" class="layui-input-block">
							<input name="registerNumber" type="text" placeholder="请输入您要申请保函的投标项目招标人" class="layui-input" lay-verify="" />
						</div>
					</div>
					<div class="clear"></div>
				</div>

				<div style="text-align: center;margin-bottom: 20px;margin-top:10px;" class="layui-form-item bottom-btn2">
					<div class="layui-input-block">
						<button type="button" class="layui-btn search" lay-submit lay-filter="sreach">
							&emsp;查询&emsp;
						</button>
					</div>
				</div>
			</form>
		</div>
		<div id="articleList" lay-filter="articleList"></div>
	</div>
	<div id="layer110" style="height: 100%;display: none;">
		<layerUpdata v-if="update === true" :applyUser="applyUser" :blockCode="blockCode" :fullName="fullName" :blockName="blockName"></layerUpdata>
	</div>
		<!-- <Details v-bind:kk="kk" id="detail" style="display:none;height: 100%;"></Details> -->
		<div v-if="sh === false">
		<h2 class="page-title"><span></span>详情页面
		<div class="right back cursor">返回</div>
		</h2>
		<div class="box2">
			<form class="layui-form layui-form1">
				<div class="layui-form-item">
					<div class="layui-inline" style="margin-left: 41px;">
						<label>标段名称</label>
					</div>
				</div>
				<ul class="ul1">
					<li>
						<div class="order-text">订单编号</div>
						<div class="order-number">{{orderOverview[0].orderno}}</div>
					</li>
					<li>
						<div class="order-text">订单金额</div>
						<div class="order-number">{{orderOverview[0].guaranteeFee}}</div>
					</li>
					<li>
						<div class="order-text">订单时间</div>
						<div class="order-number">{{orderOverview[0].createTime}}</div>
					</li>
					<li>
						<div class="order-text">订单状态</div>
						<div v-if="orderOverview[0].status==0" style="color:blue;" class="order-number">未支付</div>
						<div v-else-if="orderOverview[0].status==1" style="color:blue;" class="order-number">待审核</div>
						<div v-else-if="orderOverview[0].status==2" style="color:blue;" class="order-number">待上传</div>
						<div v-else-if="orderOverview[0].status==3" style="color:blue;" class="order-number">已驳回</div>
						<div v-else-if="orderOverview[0].status==5" style="color:blue;" class="order-number">已完成</div>

					</li>
				</ul>
				<div class="layui-form-item">
					<div class="layui-inline" style="margin-left: 41px;">
						<label>标段名称</label>
					</div>
				</div>
				
				
			</form>
<table lay-filter="demo" lay-data="{id:'idTest'}" class="table2"  border="1" cellspacing="1" cellpadding="0">
  <thead>
    <tr>
      <th>交易中心</th>
      <th>项目名称</th>
      <th>标段编号</th>
	  <th>保函类型</th>
	  <th>保证金金额</th>
	  <th>投标登记号</th>
	  <th>支付方式</th>
	  <th>担保机构</th>
	  <th>电子保函原件</th>
    </tr> 
  </thead>
  <tbody>
    <tr>
      <td>{{orderOverview[0].tradingPlatformName}}</td>
      <td>{{orderOverview[0].blockName}}</td>
      <td>{{orderOverview[0].blockCode}}c</td>
	  <td>
	  <div v-if="orderOverview[0].guaranteeType==0">
	  投标保函
	  </div>
	  </td>
	  <td>{{orderOverview[0].marginAmount}}</td>
	  <td>{{orderOverview[0].registerNumber}}</td>
	  <td>
	  <div v-if="orderOverview[0].payMode==4">
	  银行转账
	  </div>
	   <div v-if="orderOverview[0].payMode==2">
	  支付宝
	  </div>
	   <div v-if="orderOverview[0].payMode==1">
	  微信
	  </div>
	  </td>
	  <td>
	  <div v-if="orderOverview[0].guarantor==0">
	  甘肃担保
	  </div>
	  <div v-if="orderOverview[0].guarantor==1">
	 瀚华担保
	  </div>
	  </td>
	  <td>
		<!-- <div style="position: relative; overflow: hidden;display:inline-block;width:79px; height:70px;vertical-align: middle;"> -->
		  <a href="http://125.35.91.158:8099/group1/M00/02/AF/wKgAplxrloqAdR6NAAcOcVILFv0518.pdf" type="button" style="" class="layui-btn layui-btn-xs">&emsp;下载&emsp;</a>
		  <!-- <img style="display: none;" id="a1" src="" class="ez" href="http://125.35.91.158:8099/group1/M00/02/AF/wKgAplxrloqAdR6NAAcOcVILFv0518.pdf" alt=""> -->
		  <!-- <iframe src="http://125.35.91.158:8099/group1/M00/02/AF/wKgAplxrloqAdR6NAAcOcVILFv0518.pdf" style="" frameborder="0" scrolling="no"></iframe> -->
		<!-- </div> -->
	  <!-- {{orderOverview[0].guarantee_url}} -->
	  </td>
    </tr>
  </tbody>
</table>

		</div>
		</div>
	</div>
</template>


<script>
	// var url = 'http://10.0.0.30';
	var index;
	// import $ from "@/assets/js/jquery-1.11.0.min.js";

	import Lay from "@/assets/js/layui_method.js";
	// import EZView from "@/assets/js/EZView.js";
	// import draggable from "@/assets/js/draggable.js";
	import layerUpdata from '@/components/apply-record/layerUpdata.vue';

	import Details from '@/components/apply-record/details.vue';

	export default {
		components: {
			layerUpdata,
			Details
		},
		data() {
			return {
				kk:'',
				cateCurrentIndex: 0,
				sh:true,
				order:'',
				hh:'',
				normal:false,
				update:false,
				blockName:'',
				blockCode:'',
				applyUser:'',
				orderOverview:'',
				curr:'1',
				tabledata:''
			}
		},
		 computed:{
        fullName(){
            return this.hh    
        },
		blockName(){
			return this.blockName    
		},
		applyUser(){
			return this.applyUser    
		},
		blockCode(){
			return this.blockCode    
		},
		tabledata2(){
			return this.tabledata    
		}
   },
		 mounted() {
			var that = this;
			/* var data = {
				page_no: 1,
				page_size: 10,
				userId: "036366bd2b1946a3b3667540306b6d8d"
			}
			 data = JSON.stringify(data);
			console.log(data)
			that.$axios.post('/baohanOrderList/data',data,{
				 headers:{
				          'content-type':'application/json'
				    }
			})
				.then(res => {
					console.log(res);
					if(res.status==200){
						// console.log(res.data.data)
						// window.open(res.data.data);
						// window.location.href = res.data.data;
					}
					// console.log(newurl2)
				})
				.catch(error => {
					console.log(res);
					// console.log(res.data.data.url,that.field1.applyUser)
				}) */
				/* var tableparams={
					"page_no":1,
					page_size: 10
				};
				var resualt5 = await this.$fun.fn("post",that.$store.state.Api3+"/getDetails/data", tableparams,that,that.$store.state.tokenId)
				console.log(resualt5)
				resualt5.data.data_list.list */
				
			layui.use(['jquery', 'element', 'step', 'form', 'laydate', 'layer', 'table'], function() {
				var $ = layui.jquery,
					form = layui.form,
					step = layui.step,
					element = layui.element,
					table = layui.table,
					layer = layui.layer;
				var laydate = layui.laydate;
				laydate.render({
					elem: '#date' //指定元素
				});
				form.render();
				that.form2 = form;
				var userid = {
					"userId":"036366bd2b1946a3b3667540306b6d8d"
				};
				// userid = JSON.stringify(userid);
				function creattable(){
					var firsttable = table.render({
						elem: '#articleList',
						id: 'articleList',
						url: that.$store.state.Api3+'/getDetails/data',
						headers: {
							'tokenId':that.$store.state.tokenId
						},
						// headers:userid,
						totalRow: true,
						where: that.tabledata,
						// headers: {userid:"036366bd2b1946a3b3667540306b6d8d"},
						request: {
							pageName:'page_no' //页码的参数名称，默认：page
								,
							limitName:'page_size' //每页数据量的参数名，默认：limit
						},
						/* request: {
											page_index:0,
											page_size:10
						}, */
						title: '会员数据表',
						contentType: 'application/json',
						method: 'post',
						// loading:false,
						// limit:10
						/* page: { //支持传入 laypage 组件的所有参数（某些参数除外，如：jump/elem） - 详见文档
							layout: ['page_size', 'count', 'prev', 'page_no', 'next', 'skip'] //自定义分页布局
								,curr: 5 //设定初始在第 5 页
								,
							groups: 1 //只显示 1 个连续页码
								,
							first: true //不显示首页
								,
							last: true //不显示尾页
						}, */
						 page: {
							curr: that.curr //重新从第 1 页开始
						},
						cols: [
							[{
									field: 'orderNo',
									title: '订单编号'
								}, {
									field: 'createTime',
									title: '订单申请时间'
								}, {
									field: 'blockName',
									title: '标段名称'
								}, {
									field: 'guaranteeType',
									title: '保函类型',
									templet: function(d) {
										if (d.guaranteeType = "0") {
									return	'<span class="layui-btn-xs">投标保函</span>'
										  }
										  }
								},
								{
									field: 'guaranteeFee',
									title: '保函金额(元)'
								},
								{
									field: 'status',
									title: '保函状态',
									unresize: true,
									templet: function(d) {
										if (d.status == 0) {
											return '<span class="layui-btn-xs">未支付</span>'
										} else if (d.status == 1) {
											return '<span class="layui-btn-xs">待审核</span>'
										} else if (d.status == 2) {
											return ' <span class="layui-btn-xs" style="color:#FFB800;">待上传</span>'
										} else if (d.status == 3) {
											return '<span class="layui-btn-xs" style="color:#FF5722;">已驳回</span>'
										} else if (d.status == 5) {
											return '<span class="layui-btn-xs">已完成</span>'
										} else if (d.status == 6) {
											return '<span class="layui-btn layui-btn-normal layui-btn-xs">推送申请给瀚华失败</span>'
										} else if (d.status == 7) {
											return '<span class="layui-btn layui-btn-normal layui-btn-xs">给瀚华推送开标结果失败</span>'
										} else if (d.status == 8) {
											return '<span class="layui-btn-xs" style="color:#FF5722;">已取消</span>'
										} else if (d.status == 9) {
											return '<span class="layui-btn layui-btn-normal layui-btn-xs">给服务系统推送保函信息失败</span>'
										}
									}
								},
								{
									field: 'automate',
									title: '操作',
									templet: function(d) {
										if(d.status == 0){
									return	'<span lay-event="details" class="layui-btn-xs cursor" style="">详情</span><span class="layui-btn-xs cursor" lay-event="pay">立即支付</span>'
										  }
										  else if (d.status == 2) {
										  return '<span lay-event="details" class="layui-btn-xs cursor" style="">详情</span>'
										  	  }
										  else if (d.status == 3) {
									return '<span lay-event="details" class="layui-btn-xs cursor" style="">详情</span>'
										  }
										  else if (d.status == 1) {
										  return '<span lay-event="details" class="layui-btn-xs cursor" style="">详情</span>'
										  	  }
											  else if (d.status == 5) {
											  return '<span lay-event="details" class="layui-btn-xs cursor" style="">详情</span><span  lay-event="updata" class="cursor layui-btn-xs" style="">更新中标记录</span>'
											  	  }
										  }
								}
							]
						],
						response: {
							// countName:'total_rows',
							// dataName: 'data',
							statusCode: 1 //重新规定成功的状态码为 200，table 组件默认为 0
						},
						parseData: function(res) {
							console.log(res)
							return {
								"code": res.status, //解析接口状态
								"msg": res.msg, //解析提示文本
								"count": res.data.total_count, //解析数据长度
								"data": res.data.data_list.list //解析数据列表
							};
						}
					});
					return firsttable;
				}
				var table1 = creattable();
				//监听返回
				$("body").on("click", ".back", function() {
					that.sh = true;
					var val = $('.layui-laypage-skip').find('input').val();
					that.curr = val;
					setTimeout(function(){
						form.render();
						laydate.render({
							elem: '#date' //指定元素
						});
						 table1 = creattable();
						 console.log(that.tabledata)
						// table.render('articleList');
						// that.table2.reload();
						// table.reload('articleList');
						
				},100)
				})
				//预览pdf
				/* $('.viewpdf').click(function(){
					$('img.ez').EZView();
					document.getElementById('a1').click();
				
				}) */
				//监听提交
				form.on('submit(sreach)', function(data){
					 console.log(JSON.stringify(data.field));
					var data2 = data.field;
					 that.tabledata = data2;
					var am = true;
					// data2.userId = "fbf93e39c0b342aab042407b0cbbb905";
					// console.log(data2)
					/* that.tabledata = data2;
					 that.$axios.post(that.$store.state.Api3+'/getDetails/data', data2,
					 {
					     headers: {
					 		'content-type':'application/json',
					 		'tokenId':that.$store.state.tokenId
					 	},
						xhrFields: {
								       withCredentials: true
								   }
					 }
					 )
					 	.then(res => { */
							table1.reload({
								url: that.$store.state.Api3+'/getDetails/data',
								 page: {
									curr: 1 //重新从第 1 页开始
								},
								where:data2,
								parseData: function(res2) {
									if(am===true){
										layer.msg(res2.msg);
										am = false;
									};
									console.log(res2)
									return {
										"code": res2.status, //解析接口状态
										"msg": res2.msg, //解析提示文本
										"count": res2.data.total_count, //解析数据长度
										"data": res2.data.data_list.list //解析数据列表
									};
								}
							});
					 	/* })
					 	.catch(error => {
					 		// console.log(res.data.data.url,that.field1.applyUser)
					 	}) */
									return false;
				 });
				
				layui.table.on('tool(articleList)', function(obj) {
				//注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
									var data = obj.data; //获得当前行数据
									var kk = data['id']; //获取属性id的值
									var blockname = data['blockName']; //获取属性id的值
									var blockcode = data['blockCode']; //获取属性id的值
									var orderNo = data['orderNo']; //获取属性编码的值

									var layEvent = obj.event; //获得 lay-event 对应的值
									if(layEvent ==='updata'){
										that.hh = kk;
										that.blockName = blockname;
										that.blockCode = blockcode;
										that.applyUser = data['applyUser'];
										that.update = true;
										// Lay.Layer('#layer110','更新项目中标记录',600,400)
										Lay.WeAdminEdit('更新项目中标记录','#layer110',kk,600,400,that,that.update)
									}
									else if(layEvent === 'details'){ //详情
										// Lay.WeAdminEdit('订单详情','#detail',kk,0,0)
										that.sh = false;
										 
										// data = JSON.stringify(data);
										that.$axios.get('/getDetails/getDetails/'+kk,{
											 headers:{
											          'content-type':'application/json',
													  'tokenId':that.$store.state.tokenId
											    },
												xhrFields: {
														       withCredentials: true
														   }
												/* params: {
													ID:12345
													} */
										})
											.then(res => {
												console.log(res);
												if(res.data.status==1){
												 that.orderOverview=res.data.data;
												

												}
												
											})
											.catch(error => {
												console.log(res);
											});
									}
									else if(layEvent === 'pay'){ //详情
										// Lay.WeAdminEdit('订单详情','#detail',kk,0,0)
										that.pay(orderNo);
									}
									
									
									 // var title = "申请信息审核";
									 // var status = data['status']; //获取属性uid的值
									/* if(layEvent === 'details'){ //编辑
									* 
									* 
									if(status ==='3'){
										WeAdminEdit(title,'./yibohui.html',kk,0,0)
									}
									if(status ==='8'){
										WeAdminEdit(title,'./cancelled.html',kk,0,0)
									}
									if(status ==='5'){
										WeAdminEdit(title,'./finished.html',kk,0,0)
									}
									  } 
									  else if(layEvent === 'examine'){ //审核
											WeAdminEdit(title,'./examine.html',kk,0, 0)
									  }
									  else if(layEvent === 'upload'){ //上传
									  WeAdminEdit(title,'./upload.html',kk,0,0)
										  //向服务端发送删除指令
									  }
									   else if(layEvent === 'restpassword'){ //重置密码
										reset_ueserpassword(this,kk)
										  //向服务端发送删除指令
									  }else if(layEvent === 'start'){ //重置密码
										member_stop(this,kk)
										  //向服务端发送删除指令
									  } */
									  
									  
								})

			});
			/* laydate.render({
				elem: '#date' //指定元素
			});
			laydate.render(); */
		},
		methods: {
			 async pay(orderNo){
				var that = this;
				var params2 = {
					'orderNo':orderNo
				};
				var resualt2 = await that.$fun.fn("get",that.$store.state.Api3+'/ApplyInfo/againPayMoney',params2,that,that.$store.state.tokenId);
				console.log(resualt2)
				layer.msg(resualt2.data.msg);
				window.location.href = resualt2.data.data;
				// alert(params)
				// var resualt2 = await that.$fun.fn("post","http://10.0.0.14:8088/baohanOrderList/updateBid",params,that,that.$store.state.tokenId);
				// console.log(resualt2)
			},
			larer_method(title, url, id, w, h,update){
				var full = true;
							if(w==600&&h==400){
								full = false;
							};
							layui.use(['jquery', 'element', 'step', 'form', 'laydate', 'layer', 'table'], function(a) {
										var $ = layui.jquery,
										form = layui.form,
										step = layui.step,
										element = layui.element,
										table = layui.table,
										layer = layui.layer,
										laydate = layui.laydate;
										
										laydate.render({
											elem: '#date2' //指定元素
										});
						
							if(title == null || title == '') {
								title = false;
							};
							if(url == null || url == '') {
								url = "404.html";
							};
							 var index5 = layer.open({
								type: 1,
								area: [w + 'px', h + 'px'],
								fix: false, //不固定
								maxmin: true,
								shadeClose: true,
								shade: 0.4,
								title: title,
								content: $(url),
								success: function(layero, index) {
									var body = layer.getChildFrame('body', index);
								},
								cancel: function(index, layero){ 
									alert(20)
									update = false;
								},
								error: function(layero, index) {
								},
								end: function () {
					              // window.location.reload();
					          }
							});
							if(full){
								layer.full(index5);
							}
							})
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.table2{
		width: 91%;
		margin: 0 auto;
		td{text-align: center; border-left: 1px solid #E1E8EC;padding:12px 8px;border-bottom: 1px solid #E1E8EC;font-size: 12px;}
		th{text-align: center; border: 1px solid #E1E8EC;font-size: 12px;padding:5px 8px;}
	}
	thead{
		background: #FAFBFC;

	}
	.table-flex-head{
		 display: -webkit-flex; /* Safari */
		display: flex;
		 flex-direction: row;
		  flex-wrap: nowrap;
		   justify-content:space-between;
		   margin: 0 auto;
		   overflow: hidden;
		   border: 1px solid #E1E8EC;
		   border-bottom:none;
		   margin-bottom: 30px;
		   height: 40px;
		   width: 91%;
		   background: #FAFBFC;
		
	}
	.page-title {
		height: 50px;
		background: #FAFBFC;
		// border: 1px solid #E1E8EC;
		border-left: 1px solid #E1E8EC;
		border-right: 1px solid #E1E8EC;
		border-bottom: 1px solid #E1E8EC;
		overflow: hidden;
		line-height: 52px;
		font-size: 16px;
		color: #3C4F57;
		font-weight: bold;
		.back{
			font-size:14px; 
			margin-right: 24px;
		}
		span {
			height: 8px;
			width: 8px;
			display: inline-block;
			border-radius: 50%;
			background: #19AECF;
			margin-top: -2px;
			margin-left: 24px;
			margin-right: 8px;
			vertical-align: middle;
		}
	}

	.box2 {
		width: 100%;
		background: #ffffff;
		margin-bottom: 20px;
		.ul1{
			display: table;
			margin: 0 auto;
			overflow: hidden;
			border: 1px solid #E1E8EC;
			border-bottom:none;
			margin-bottom: 30px;
			width: 91%;
			li{
				width:49%;
				height:44px;
				line-height: 45px;
				float: left;
				border-bottom: 1px solid #E1E8EC;
				overflow: hidden;
				.order-text{
					width: 20%;
					height: 100%;
					float: left;
					text-align:center;
					background: #FAFBFC;
					border-right: 1px solid #E1E8EC;
				}
				.order-number{
					width: 79%;
					float: left;
					 text-indent:20px;
				}
			}
			li:nth-child(2n-1){
				// border-bottom:none;
				border-right:1px solid #E1E8EC;
			}
			
		}
	}

	.layui-input-block {
		margin-left: 0;
	}

	.layui-form1 {
		margin-top: 30px;

		.layui-inline {
			margin-left: 16px;
		}

		label {
			color: #3C4F57;
			span {
				font-size: 12px;
				color: #FF5555;
			}
		}
	}
</style>
