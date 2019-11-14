<template>
	<div>
		<form class="layui-form" style="height: 100%;">
			<div class="layui-form-item">
				<label for="L_pass" class="layui-form-label">
					标段名称
				</label>
				<div class="layui-input-inline">
					{{blockName}}	
				</div>
			</div>
			<div class="layui-form-item">
				<label for="L_pass" class="layui-form-label">
					标段编号
				</label>
				<div class="layui-input-inline">
					{{blockCode}}	
				</div>
			</div>
			<div class="layui-form-item">
				<label for="L_pass" class="layui-form-label">
					投标人名称
				</label>
				<div class="layui-input-inline">
					{{applyUser}}	
				</div>
			</div>
			<div class="layui-form-item">
				<label for="L_pass" class="layui-form-label">
					开标时间
				</label>
				<div class="layui-input-inline">
					<input lay-verify="required" name="bidOpenTime" type="text" placeholder="请填写项目开标时间" class="layui-input" id="date3">
				</div>
			</div>
			<div class="layui-form-item">
				<label for="L_pass" class="layui-form-label">
					企业中标状态
				</label>
				<div class="layui-input-inline">
					<select lay-verify="required" name="isWinBidding" lay-filter="status">
						<option value="">请选择企业中标状态</option>
						<option value="1">已中标</option>
						<option value="2">未中标</option>
					</select>
				</div>
			</div>
			
			<div class="layui-form-item bottom-btn">
				<div class="layui-input-block">
					<button type="button" class="layui-btn formStep1">
						&emsp;取消&emsp;
					</button>
					<button type="button" class="layui-btn" lay-submit lay-filter="formStep2">
						&emsp;更新中标记录&emsp;
					</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	var index;
	import Lay from "@/assets/js/layui_method.js";

	export default {
		name: "register",
		props:{
			fullName:{
				type:''
			},
			blockName:{
				type:''
			},
			applyUser:{
				type:''
			},
			blockCode:{
				type:''
			}
		},
		data() {
			return {
				childrenMessage:''
			}
		},
		 mounted(){
			var that = this;
			

			/* that.$axios.post(that.$store.state.Api3+'/baohanOrderList/data', params,
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
				.then(res => {
					console.log(res)
				})
				.catch(error => {
					// console.log(res.data.data.url,that.field1.applyUser)
				}) */
				
				
				
			/* that.$axios.post(that.$store.state.Api3+'/baohanOrderList/updateBid', params,
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
				.then(res => {
					console.log(res)
				})
				.catch(error => {
					// console.log(res.data.data.url,that.field1.applyUser)
				}) */
			layui.use(['jquery', 'element', 'step', 'form', 'laydate', 'layer', 'table'], function() {
						var $ = layui.jquery,
						form = layui.form,
						step = layui.step,
						element = layui.element,
						table = layui.table,
						layer = layui.layer,
						laydate = layui.laydate;
						
						laydate.render({
							elem: '#date3' //指定元素
						});
						form.render();
						// that.list()
						/* var data2 ={};
						 that.$axios.post(that.$store.state.Api3+'/baohanOrderList/updateBid',data2,
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
							}) */
			//监听取消
			$('.formStep1').click(function(){
				layer.closeAll();
			});
			//监听提交
			form.on('submit(formStep2)', function(data) {
				that.childrenMessage = data.field;
				that.list();
				 // layer.closeAll();
				 // parent.layer.closeAll();
				// parent.layui.table.reload('articleList');
				return false;
			});
			
			});

		},
		beforeCreate() {
			// console.group('beforeCreate 创建前状态===============》');
		},
		created() {
			// loadingInstance.close();
		},
		methods: {
			 async list(){
				var that = this;
				var params = {
					"applyId": that.fullName
				};
				var obj = Object.assign(that.childrenMessage,params);
				var resualt2 = await that.$fun.fn("post",that.$store.state.Api3+'/baohanOrderList/updateBid',obj,that,that.$store.state.tokenId);
				console.log(resualt2)
				layer.closeAll();
				parent.layui.table.reload('articleList');

				// alert(params)

				// var resualt2 = await that.$fun.fn("post","http://10.0.0.14:8088/baohanOrderList/updateBid",params,that,that.$store.state.tokenId);

				// console.log(resualt2)

			}
		}
		
	}
</script>

<style>
	.layui-form-label{
		width: 87px;
	}
	.layui-input-inline{
		width: 382px !important;
		line-height:40px;
	}
	
</style>
