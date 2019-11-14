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
								<option value="1">待审核</option>
								<option value="2">待上传</option>
								<option value="2">已驳回</option>
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
						<button type="button" class="layui-btn" lay-submit lay-filter="sreach">
							&emsp;查询&emsp;
						</button>
					</div>
				</div>
			</form>
		</div>
		<div id="articleList" lay-filter="articleList"></div>
	</div>
		<layerUpdata id="layer110" style="display:none;height: 100%;"></layerUpdata>
		<Details v-bind:kk="kk" id="detail" style="display:none;height: 100%;"></Details>
		<div v-if="sh === false">
		<h2 class="page-title"><span></span>详情页面</h2>
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
							<input v-model="order" name="orderNo" type="text" placeholder="请输入要查询的项目名称" class="layui-input" lay-verify="" />
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
								<option value="1">待审核</option>
								<option value="2">待上传</option>
								<option value="2">已驳回</option>
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
						<button type="button" class="layui-btn" lay-submit lay-filter="sreach">
							&emsp;查询&emsp;
						</button>
					</div>
				</div>
			</form>
		</div>
		</div>
	</div>
</template>


<script>
	// var url = 'http://10.0.0.30';
	var index;
	import Lay from "@/assets/js/layui_method.js";
	
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
				hh:''
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
				var userid = {
					"userId":"036366bd2b1946a3b3667540306b6d8d"
				};
				
				// userid = JSON.stringify(userid);
				var table1 = table.render({
					elem: '#articleList',
					id: 'articleList',
					url: that.$store.state.Api3+'/baohanOrderList/data',
					/* headers: {
						TOKEN: value1
					}, */
					    headers: {
							'tokenId':that.$store.state.tokenId
						},
					// headers:userid,
					totalRow: true,
					where: {"userId":"036366bd2b1946a3b3667540306b6d8d"},
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
					// limit:10
					page: { //支持传入 laypage 组件的所有参数（某些参数除外，如：jump/elem） - 详见文档
						layout: ['limit', 'count', 'prev', 'page', 'next', 'skip'] //自定义分页布局
							//,curr: 5 //设定初始在第 5 页
							,
						groups: 1 //只显示 1 个连续页码
							,
						first: true //不显示首页
							,
						last: true //不显示尾页
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
										return '<span class="layui-btn layui-btn-normal layui-btn-xs">未支付</span>'
									} else if (d.status == 1) {
										return '<span class="layui-btn layui-btn-normal layui-btn-xs">待审核</span>'
									} else if (d.status == 2) {
										return ' <span class="layui-btn-xs" style="color:#FFB800;">待上传</span>'
									} else if (d.status == 3) {
										return '<span class="layui-btn-xs" style="color:#FF5722;">已驳回</span>'
									} else if (d.status == 5) {
										return '<span class="layui-btn-xs" lay-event="examine">已完成</span>'
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
								return	'<span lay-event="details" class="layui-btn-xs" style="">详情</span><span class="layui-btn layui-btn-normal layui-btn-xs">立即支付</span>'
									  }
									  else if (d.status == 8) {
								return '<span lay-event="details" class="layui-btn-xs" style="">详情</span><span class="layui-btn-xs" style="color:#FF5722;">重新申请</span>'
									  }
									  else if (d.status == 1) {
									  return '<span lay-event="details" class="layui-btn-xs" style="">详情</span><span class="layui-btn-xs" style="">取消</span>'
									  	  }
										  else if (d.status == 5||d.status == 3) {
										  return '<span lay-event="details" class="layui-btn-xs" style="">详情</span><span  lay-event="updata" class="layui-btn-xs" style="">更新中标记录</span>'
										  	  }
									  }
							}
						]
					],
					page: true,
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
				
				//监听提交
				 form.on('submit(sreach)', function(data){
					 console.log(JSON.stringify(data.field));
					var data2 = data.field;
					data2.userId = "036366bd2b1946a3b3667540306b6d8d";
					// console.log(data2)

					 that.$axios.post(that.$store.state.Api3+'/baohanOrderList/data', data2,
					 {
					     headers: {
					 		'content-type':'application/json',
					 		'tokenId':that.$store.state.tokenId
					 	}
					 }
					 )
					 	.then(res => {
					 		console.log(res)
							layer.msg(res.data.msg);
							table1.reload({
								parseData: function(res2) {
									return {
										"code": res.data.status, //解析接口状态
										"msg": res.data.msg, //解析提示文本
										"count": res.data.total_count, //解析数据长度
										"data": res.data.data.data_list.list //解析数据列表
									};
								}
							});
					 	})
					 	.catch(error => {
					 		// console.log(res.data.data.url,that.field1.applyUser)
					 	})
						
					 
					 
									/* console.log(JSON.stringify(data.field));
									var data2 = data.field;
									data2.page_no = 1;
									data2.page_size = 10;
									var resault = jax(url+'/baohanOrderList/data',data2,'POST');
									layer.msg(resault.msg);
									table1.reload({
										parseData: function(res) {
											return {
												"code": resault.status, //解析接口状态
												"msg": resault.msg, //解析提示文本
												"count": resault.data.total_count, //解析数据长度
												"data": resault.data.data_list.list //解析数据列表
											};
										}
									}); */
									// layui.table.reload('user_list');
									return false;
				 });
				var index5;

				layui.table.on('tool(articleList)', function(obj) {
				//注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
									var data = obj.data; //获得当前行数据
									console.log(data)
									var kk = data['orderNo']; //获取属性编号的值
									var layEvent = obj.event; //获得 lay-event 对应的值
									if(layEvent ==='updata'){
										kk = that.hh;
										// Lay.Layer('#layer110','更新项目中标记录',600,400)
										Lay.WeAdminEdit('更新项目中标记录','#layer110',kk,600,400)
									}
									else if(layEvent === 'details'){ //详情
										// Lay.WeAdminEdit('订单详情','#detail',kk,0,0)
										that.sh = false;
										/* var data = {
											orderNo :kk
										}; */
										// data = JSON.stringify(data);
										that.$axios.get('/getDetails/getDetails/1664',{
											 headers:{
											          'content-type':'application/json'
											    }
												/* params: {
													ID:12345
													} */
												
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
											}) 
										
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
		methods: {}
	}
</script>

<style scoped="scoped" lang="less">
	.page-title {
		height: 50px;
		background: #FAFBFC;
		// border: 1px solid #E1E8EC;
		border-left: 1px solid #E1E8EC;
		border-right: 1px solid #E1E8EC;
		border-bottom: 1px solid #E1E8EC;

		line-height: 52px;
		font-size: 16px;
		color: #3C4F57;
		font-weight: bold;

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
