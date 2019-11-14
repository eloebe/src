var Layuiuse = function (that){
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
				
				
				form.on('radio(invoice-type)', function(data){
					console.log(data.value); //被点击的radio的value值
					if(data.value=='1'||data.value=='2'){
						that.open = true;
					}else{
						that.open = false;
					}
				});
				form.render();

				form.on('submit(formStep1)', function(data) {
					console.log(data.field)
					that.field1=data.field;
					step.next('#stepForm');
					return false;
				});

				form.on('submit(formStep2)', function(data) {
					that.field1 = Object.assign(that.field1,data.field);
					that.field1.guaranteeFee = that.guaranteeAmount;
					step.next('#stepForm');
					return false;
				});
				form.on('submit(formStep4)', function(data) {
					var opp = online.initEventHandle();
					console.log(opp)
					return false;
				});
				$('.pre').click(function() {
					step.pre('#stepForm');
				});

				$('.next').click(function() {
					step.next('#stepForm');
				});
			});
			};
	var Layer = function (a){
			layui.use(['jquery','layer'], function() {
							var $ = layui.jquery,
								layer = layui.layer;
							
							layer.open({
							  type: 1,
							  title: false,
							  closeBtn: 0,
								area:  ['500px', '300px'],
								btn:  ['明白了', '知道了'],
								btnAlign: 'c',
								skin: 'layui-layer-molv', //没有背景色
							  content:$(a)
							});
							$('.layui-layer').css('box-shadow','none');
						})
						};
	var Layer2 = function (a,title,w,h){
			layui.use(['jquery','layer'], function(a) {
							var $ = layui.jquery,
								layer = layui.layer;
							
						 layer.open({
							  type: 1,
							  // area: [w + 'px', h + 'px'],
							  title: false,
							  closeBtn: 0,
								area: '520px',
								skin: 'layui-layer-nobg', //没有背景色
							  content:$(a)
							});
							$('.layui-layer').css('box-shadow','none');
						})
						};
						/*弹出层+传递ID参数*/
				var WeAdminEdit = function (title, url, id, w, h,that,thatupdate,closeBtn) {
					
								if(w==1&&h==1){
									var full = true;
								};
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
									// fix: false, //不固定
									//maxmin: true,
									shadeClose: true,
									closeBtn:closeBtn,
									shade: 0.4,
									title: title,
									content: $(url),
									success: function(layero, index) {
										// that.index = parent.layer.getFrameIndex(window.name);
										var body = layer.getChildFrame('body', index);
									},
									cancel: function(index, layero){ 
										thatupdate = false;
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
			
	export default {  
			    Layer,
				Layer2,
				WeAdminEdit,
				Layuiuse
				
			}