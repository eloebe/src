<template>
	<div>
		<h2 class="page-title"><span></span>订单详情</h2>
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
		
		
		
	</div>
</template>

<script>

	export default {
		name: "register",
		data() {
			return {
			}
		},
		mounted(){
			var that = this;
			// console.log(that.userid)
			 /* that.$axios.post(that.$store.state.Api3+'/getDetails/getDetails', that.userid)
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
							elem: '#date2' //指定元素
						});

			//监听提交
			form.on('submit(formStep1)', function(data) {
					
				console.log(data)
				 // layer.closeAll();
				 parent.layer.closeAll();
				parent.layui.table.reload('articleList');
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
