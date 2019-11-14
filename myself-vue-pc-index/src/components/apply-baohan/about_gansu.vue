<template>
	<div>
		
		<div class="wBh_PhoneLayer">
			<div class="gs_GuaranteeLayer">
				<span class="wBh_Close"><img src="@/assets/bh_close.png" /></span>
				<h5 class="gs_GuaranteeLayer_Title">关于甘肃担保</h5>
				<div class="gs_Guarantee_Wrap clear">
					<!--第一页                 **************          开始-->
					<div class="gs_GuaranteeMain gs_GuaranteeMain_Active">
						<h3 class="gs_GuaranteeTitle"><i></i>企业简介</h3>
						<h5 class="gs_GuaranteeTitleBto">甘肃省融资担保集团股份有限公司成立于2012年2月，是由甘肃省公路航空旅游投资集团有限公司发起设立的股份有限公司，目前注册资本50亿元人民币，被联合资信权威评级机构授予AAA级主体信用评级，是甘肃省内规模最大、信用等级最高的国有信用担保机构之一。</h5>
						<ol class="gs_GuaranteeList clear">
							<li>
								<img src="@/assets/guarantee1.png" />
								<h3>认可优</h3>
								<h6>公航旅集团成员，省内认可程度高，与省内多家业主单位签订战略合作协议。</h6>
							</li>
							<li>
								<img src="@/assets/guarantee2.png" />
								<h3>效率高</h3>
								<h6>全程线上操作，手续简便快捷，企业足不出户即可申请保函，彻底告别线下申请的繁琐流程。</h6>
							</li>
							<li>
								<img src="@/assets/guarantee3.png" />
								<h3>成本低</h3>
								<h6>用电子保函替代保证金降低了投标企业资金成本，释放投标企业资金压力，实现资金资源的优化配置，增添市场经济活力。</h6>
							</li>
							<li>
								<img src="@/assets/guarantee4.png" />
								<h3>查验快</h3>
								<h6>保函平台与公共资源交易平台的无缝对接，支持在线查询保函真伪，确保保函真实有效。</h6>
							</li>
						</ol>
						<h3 class="gs_GuaranteeTitle"><i></i>申请便捷、线上操作、秒速出函、免保证金、信用保障、投标无忧。</h3>
						<ol class="gs_GuaranteeStep clear">
							<li>申请便捷：简化申请流程，企业足不出户即可在线申请保函。</li>
							<li>线上操作：全程在线操作，手续简便快捷，无需提交任何纸质资料。</li>
							<li>秒速出函：秒速出函，满足投标企业时效需求。</li>
							<li>免保证金：纯信用担保，无需企业缴纳保证金，释放企业资金压力。</li>
							<li>信用保障：在线查询保函真伪，让假保函无处遁形。</li>
							<li>投标无忧：采用区块链三方存证等技术，充分保障招投标信息安全。</li>
						</ol>
					</div>
					<!--第一页                 **************          结束-->
		
					<!--第一页                 **************          开始-->
					<div class="gs_GuaranteeMain ">
						<h3 class="gs_GuaranteeTitle"><i></i>用户常见问题解答 ?</h3>
						<div class="wBh_QuestionWrap">
							<dl class="wBh_Question clear">
								<dd>Q: 电子投标保函跟纸质投标保函有什么区别？</dd>
								<dt>A：电子投标保函是担保人以电子化文档为介质通过计算机网络向招标人开立的投标担保凭证，与纸质投标保函具有同等法律效力，但比纸质投标保函操作更简便，时效性更高。</dt>
							</dl>
							<dl class="wBh_Question clear">
								<dd>Q: 需要提供纸质资料吗？</dd>
								<dt>A：电子投标保函申请流程全程线上操作，资料在线提交电子档即可，无需纸质资料。</dt>
							</dl>
							<dl class="wBh_Question clear">
								<dd>Q: 是否需要提供抵押？</dd>
								<dt>A：纯信用担保，无需提供抵押物，公共资源交易中心合格投标企业均可申请。</dt>
							</dl>
							<dl class="wBh_Question clear">
								<dd>Q: 是否需要授信及出函时间？</dd>
								<dt>A：企业无需授信，首次申请一个工作日内出函，半年内二次申请企业支付保费后即刻出函，实现秒速出函保障高效率。</dt>
							</dl>
							<dl class="wBh_Question clear">
								<dd>Q: 保函有效期是多久？</dd>
								<dt>A：保函有效期覆盖投标有效期全流程。</dt>
							</dl>
							<dl class="wBh_Question clear">
								<dd>Q: 保函有效期是多久？</dd>
								<dt>A：保函有效期覆盖投标有效期全流程。</dt>
							</dl>
							<dl class="wBh_Question clear">
								<dd>Q: 保函怎么收费？</dd>
								<dt>A：单笔计费，费率2%/笔。</dt>
							</dl>
						</div>
					</div>
					<!--第一页                 **************          结束-->
				</div>
				<!--分页                 **************          开始-->
				<div class="gs_GuaranteePage clear">
					<ol class="clear">
						<li class="gs_PageBtn gs_PageLeft"><span><img src="@/assets/pageLeft.png" /></span></li>
						<ul class="pageNumWrap clear">
							<li class="pageNum active"><span>1</span></li>
							<li class="pageNum"><span>2</span></li>
						</ul>
						<li class="gs_PageBtn gs_PageRight"><span><img src="@/assets/pageRight.png" /></span></li>
					</ol>
				</div>
				<!--分页                 **************          结束-->
			</div>
		</div>
		
	</div>
</template>

<script>
	import $ from 'jquery'

	import '@/assets/css/about_danbao.css';

	export default {
		name: "register",
		data() {
			return {
			}
		},
		mounted(){
			var that = this;
			var $li = $(".pageNumWrap li");
			var len = $li.length-1;
			var _index = 0; //li的索引
			var $img = $(".gs_GuaranteeMain");
			
			//点击事件
			$li.click(function() {
				_index = $(this).index();
				play();
			});
			
			function play() {
				//获取li的下标，改变样式
				$li.eq(_index).addClass("active").siblings().removeClass("active");
				//获取图片的下标，实现淡入淡出
				$img.eq(_index).slideDown().siblings().slideUp();
			}
			
			//两边耳朵的点击事件
			$(".gs_PageBtn").click(function() {
				var index = $(this).index();
				if(index) {
					_index++;
					if(_index > len) {
						_index = 0;
					}
					play();
				} else {
					_index--;
					if(_index < 0) {
						_index = len;
					}
					play();
				}
			});
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
