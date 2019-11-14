<template>
	<div>
		<div class="logobody">
			<!-- 公用头部 -->
			<div class="publicHeader">
				<div class="PageCenter">
					<h1><a href=""><img class="logoImg" src="@/assets/logo.png" ><span class="logoName">电子保函系统</span></a></h1>
				</div>
			</div>
			<div class="naLoginContent clear">
				<div class="nalcLeft">
					<h2>免责声明</h2>
					<h3>您在接受本网站服务之前，请务必仔细阅读本声明。若您对本声明的任何条款有异议，请停止使用本网站所提供的全部服务。</h3>
					<p>本网站提供技术服务，保函服务费由担保机构收取，不介入资金流转，也不承担任何投标人与担保机构之间的纠纷。</p>
					<p>您在本网站输入的企业信息、投标项目信息，将用于第三方担保机构审核投标人的申请资格，您已确认将信息授权与本网站并对信息的真实性负责，本网站承诺不会将您的信息使用在其它地方。</p>
					<p>电子保函申请有可能审核不通过，由于审核不通过而造成的投标失效本网站不负任何责任，请及时确认好您的项目投标截止日期，以免错过投标机会。</p>
					<p>互联网传输可能会受到干扰，中断、延迟或数据错误，本网站对于非本网站能控制的通讯设施故障可能引致的数据及交易之准确性或及时性不负任何责任。</p>
					<p>当您的企业相关信息发生变更请及时更新您的企业相关信息，由于您未及时更新信息而导致的数据错误，本网站概不负责。请确保你的企业相关信息是最新信息。</p>
				</div>
				<div class="nalcRight">
					<h3>欢迎登录</h3>
					<h2>电子保函系统</h2>
					<div class="layui-form nalcFrom">
						<div class="nalcTabs">
							<ul class="clear">
								<li class="active">账号登录</li><li>验证码登录</li>
							</ul>
						</div>
						<div class="nalcFromList">
							<div class="item">
								<input type="text" class="nalcFromipt phonetxt" name="" id="" value="" placeholder="请输入您的手机号" />
							</div>
							<div class="item switchPsdCode">
								<input type="password" class="nalcFromipt psdtxt" name="" id="" value="" placeholder="请输入密码" />
							</div>
							<div class="item switchPsdCode" style="display: none;">
								<input type="text" class="nalcFromipt codetxt" name="" id="" value="" placeholder="请输入验证码" />
								<button type="button" class="GetCodeBtn">获取验证码</button>
							</div>
							<div class="item">
								<input type="checkbox" name="" title="我已同意" lay-skin="primary" checked><a class="xieyi" href="">《电子保函用户信息授权协议》</a>
								
							</div>
							<div class="item">
						        	<a href="http://47.99.121.153:82/" target="_self">
								<button class="nalcSubmitBtn" type="button">立即登录</button>
								</a>
							</div>
						</div>
						<div class="nalcFromFoot">
							<span class="fl">忘记密码?<a href="">立即找回</a></span><span class="fr"><a href="">注册账号<i class="layui-icon">&#xe65c;</i> </a></span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer">
			
		</div>
	</div>
</template>

<script>
	 import '@/assets/css/common.css';
	 import '@/assets/css/style.css';
	 	// var loading;
	export default {
		name: "login",
		data() {
			return {
				checked: true,
				js:'kj'
			}
		},
		/* beforeCreate() {
			loading = this.$loading({
				lock: true,
				text: 'Loading',
				spinner: 'el-icon-loading',
				background: '#67a9bf'
			});
			
		},
		created() {
			var value1 = sessionStorage.getItem("tokenId");
				 // if(value1!=null||value3!=null){
					 if(value1!=null){
					this.$router.push({path: '/baohansystem',params:{参数名:参数值,参数名:参数值}})
					return false;
				}else{
					window.location.href='http://47.99.121.153:18085/login?from=http://47.99.121.153:82/#/baohansystem&to=from';
					return false;
				}
			loading.close();
			
			// loadingInstance.close();
		}, */
		mounted() {
			layui.use(['form','jquery'], function(){
			  var form = layui.form,$ = layui.jquery;
			  $(".nalcTabs li").on("click",function(){
				  $(this).addClass("active").siblings('li').removeClass("active");
				  $(".switchPsdCode").eq($(this).index()).show().siblings(".switchPsdCode").hide();
			  })
			});
		}
	
	}
</script>

<style>
</style>
