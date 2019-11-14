<template>
	<div>
		<form class="layui-form">
		<div id="u1" class="ax_default" data-left="348" data-top="163" data-width="972" data-height="600">
		
			<!-- Unnamed (矩形) -->
			<div id="u2" class="ax_default box_1">
				<div id="u2_div" class=""></div>
				<div id="u2_text" class="text ">
					<p><span>电子保函申请须知</span></p>
				</div>
			</div>
		
			<!-- Unnamed (矩形) -->
			<div id="u3" class="cursor"  lay-submit lay-filter="into">
				<div id="u3_div" class=""></div>
				<div id="u3_text" class="text ">
					<p><span>进入电子保函系统</span></p>
				</div>
			</div>
		
			<!-- Unnamed (矩形) -->
			<div id="u4" class="cursor">
				<div id="u4_div" class=""></div>
				<div id="u4_text" class="text ">
					<p><span>取消</span></p>
				</div>
			</div>
		
			<!-- Unnamed (动态面板) -->
			<div id="u5" class="ax_default">
				<div id="u5_state0" class="panel_state" data-label="State1" style="">
					<div id="u5_state0_content" class="panel_state_content">
		
						<!-- Unnamed (矩形) -->
						<div id="u6" class="ax_default box_2">
							<div id="u6_div" class=""></div>
							<div id="u6_text" class="text " style="display:none; visibility: hidden">
								<p></p>
							</div>
						</div>
		
						<!-- Unnamed (动态面板) -->
						<div id="u7" class="ax_default">
							<div id="u7_state0" class="panel_state" data-label="State1" style="">
								<div id="u7_state0_content" class="panel_state_content">
		
									<!-- Unnamed (矩形) -->
									<div id="u8" class="ax_default _文本段落">
										<div id="u8_div" class=""></div>
										<div id="u8_text" class="text ">
											<p><span>1、本网站仅提供技术服务，保函服务费由担保机构收取，本网站不承担任何投标人与担保机构之间的费用纠纷。</span></p>
											<p><span>2、本网站将在您授权的前提下获取您在交易平台的企业基础信息、投标项目部分信息、历史投标和中标次数记录，用于第三方担保机构审核投标人的申请资格，您已确认将信息授权与本网站，本网站承诺不会将您的信息使用在其他地方。</span></p>
											<p><span>3、当您的企业相关信息发生变更请及时到主体库变更您的企业相关信息，由于您未及时更改信息而导致的数据错误，本网站概不负责。请确保你的企业相关信息在主体库是最新信息。</span></p>
											<p><span>4、电子保函申请审核结果以担保机构审核结果通知为准，审核周期为2个工作日，由于审核不通过而造成的投标失效本网站不负任何责任，请及时确认好您的项目投标截止日期，以免错过投标机会。</span></p>
											<p><span>5、互联网传输可能会受到干扰，中断、延迟或数据错误，本网站对于非本网站能控制的通讯设施故障可能引致的数据及交易之准确性或及时性不负任何责任。</span></p>
											<p><span><br></span></p>
											<p><span><br></span></p>
											<p><span><br></span></p>
											<p><span><br></span></p>
											<p><span><br></span></p>
										</div>
									</div>
		
									<!-- Unnamed (矩形) -->
									<div id="u9" class="ax_default _文本段落">
										<div id="u9_div" class=""></div>
										<div id="u9_text" class="text ">
											<p><span>为了确保您在电子保函申请过程中流程顺利，在使用本网站服务之前，请务必仔细阅读本声明。若您对本声明的任何条款有异议，请停止使用本网站所提供的全部服务。</span></p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		
			<!-- Unnamed (复选框) -->
			<div id="u10" class="ax_default checkbox">
				<label id="u10_input_label" for="u10_input" style="position: absolute; left: 0px;">
					<!-- <img id="u10_img" class="img " src="images/页面_1/u10.svg" /> -->
					<input class="zy" lay-verify="checkboxmustbe2" type="checkbox" name="chance" title="我已阅读并知晓电子保函申请须知" lay-skin="primary">
					<!-- <div id="u10_text" class="text ">
						<p><span>我已阅读并知晓电子保函申请须知</span></p>
					</div> -->
				</label>
				<!-- <input id="u10_input" type="checkbox" value="checkbox" /> -->
			</div>
		</div>
		</form>
		
	</div>
</template>

<script>
	import $ from 'jquery'

	import '@/assets/applyneedknow/axure_rp_page.css';
	import '@/assets/applyneedknow/styles.css';
	import '@/assets/applyneedknow/styles2.css';

	export default {
		name: "register",
		props:{
			konwlayer2:{
				type:''
			}
		},
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
						$('#u4').click(function(){
							 var userAgent = navigator.userAgent;
    if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") != -1) {
        location.href = "about:blank";
    } else {
        window.opener = null;
        window.open('', '_self');
    }
    window.close();
						})
						//表单验证
							form.verify({
							checkboxmustbe2: function(value) {
								if (!$(".zy").is(":checked")) {
									return "请勾选已阅读申请须知";
								}
							},
						    // chinese:[/[^\u4E00-\u9FA5]/g,'hanzi'],
						    content: function(value) {
						        layedit.sync(editIndex);
						    }
						}); 
						
						 //监听提交
					  form.on('submit(into)', function(data){
						var index = layer.getFrameIndex(window.name); //先得到当前iframe层的索引
						/* parent.layer.close(index); //再执行关闭 
						console.log(that.href3_4)
						layer.close(index);
						parent.layer.close(index);
						parent.parent.layer.close(index); */
						// $('#needknow').hide();
						// $('#layui-layer-shade1').hide();
						// $('#layui-layer2').hide();
						// $('#layui-layer4').hide();
						sessionStorage.setItem('agreed',true);
						layer.close(that.konwlayer2);
						

						return false;
					  });
					   //监听取消
					  form.on('submit(cancel)', function(data){
					  	return false;
					  });
					  form.render();
			
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

<style>
</style>
