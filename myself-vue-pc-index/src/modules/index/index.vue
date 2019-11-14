<template>
    <div id="console" v-wechat-title="$route.meta.title">
        <router-view></router-view>
    </div>
</template>

<script>
	// import 'swiper/dist/idangerous.swiper.css';
	import $ from 'jquery';
	 
	// import '@/assets/layui/css/layui.css';
	// import lazy from '@/assets/js/lazy.js';
	// import jquery from '@/assets/js/jquery.min.js';
	// import datePicker_min from '@/assets/js/jquery.datePicker-min.js';
	// import jqcookie from '@/assets/js/jquery.cookie.js';
	// import TopCertKit from '@/assets/js/TopCertKit3.0.1.101.3.js';
    export default {
        name: "console",
		data() {
			return {
				loading:'',
				loadingend:''
			}
		},
		beforeCreate() {
			var that = this;

			that.loading = this.$loading({
				lock: true,
				text: 'Loading',
				spinner: 'el-icon-loading',
				background: 'white'
			});
			that.loading.close();


			function getQueryString(name) {
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
				var r = window.location.search.substr(1).match(reg);
				if (r != null) return decodeURI(r[2]);
				return null;
			};
			
			/* var tokenId2 = sessionStorage.getItem("tokenId2");

			  if(tokenId2=="undefined"||tokenId2=="null"||tokenId2==null||tokenId2==undefined){
				  console.log('第一步1.没有token')
					
					var Value = getQueryString("tokenId");
					if(Value=="undefined"||Value=="null"||Value==null||Value==undefined){
						console.log(Value)
						console.log('第一步2.没有接受到传参')
						window.location.href='http://47.99.121.153:18085/login?from=http://47.99.121.153:82&to=from';
					}else{
						 that.$store.state.tokenId = Value;
						sessionStorage.setItem('tokenId2',Value);
					that.loading.close();
					}
				  console.log(tokenId22)
			console.log(typeof(tokenId22))
			  }else{
				   that.$store.state.tokenId = tokenId2;
				  console.log('第二步本地有token')
				  console.log(tokenId2)
				console.log(typeof(tokenId2))
				that.loading.close();
			  } */
			 
			  
			/* function getQueryString(name) {
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
				var r = window.location.search.substr(1).match(reg);
				if (r != null) return decodeURI(r[2]);
				return null;
			};
			var value = getQueryString("tokenId2");
			// alert(value)
			 if(value=="undefined"||value=="null"||value==null){
				var tokenId2 = sessionStorage.getItem("tokenId2");
				console.log(tokenId2)
				// alert("has looked"+tokenId2)
				 if(tokenId2=="undefined"||tokenId2=="null"||tokenId2==null){
					 window.location.href='http://47.99.121.153:18085/login?from=http://47.99.121.153:82/#&to=from';
					 return false;
					}else{
						// this.$router.push({path: '/baohansystem',params:{}})
						// return false;
					}
			 }else{
				  sessionStorage.setItem('tokenId2',value);
				  that.$store.state.tokenId2 = value;
				  // alert("has save"+value)
			 } */
			
			
			
			/* var tokenId2 = sessionStorage.getItem("tokenId2");
			console.log(tokenId2)
			 if(tokenId2=="undefined"||tokenId2=="null"||tokenId2==null){
				 window.location.href='http://47.99.121.153:18085/login?from=http://47.99.121.153:82/#/baohansystem&to=from';
				 return false;
					
				}else{
					this.$router.push({path: '/baohansystem',params:{}})
					return false;
				} */
			/* function refreshCertList(val) {
			  try {
				var certs = filterCert(val);
				initCertList(certs);
				if( certs.size()==0 ){
				  alert("没有找到符合License的证书");
				  return;
				}
				var cert = getSelectedCert();
				displayCertInfo(cert);
			
			  } catch (e) {
				if (e instanceof TCACErr) {
				  alert(e.toStr());
				} else {
				  alert("Here is Error !!3!");
				}
			  }
			} */
		},
		created() {
			var that = this;
			/* $(function(){
pushHistory();
window.addEventListener("popstate", function(e) {
    alert("监听到返回按钮事件啦");
	$('.div1').hide();
    //根据自己的需求实现自己的功能
    //window.location.href = 'https://www.baidu.com'
}, false);
function pushHistory() {
var state = {
title: "title",
url: "#"
};
window.history.pushState(state, "title", "#");
}
}); */
		},
		 mounted() {
			 var that = this;

			 var odiv=document.querySelector('body');
			odiv.style.cssText="background-color:#FAFBFC;"
			+"min-width:1200px";

			},
		  beforeDestroy() {
			that.loading.close();
			document.querySelector('body').removeAttribute('style')
		  },
		  methods: {
			  
		  }

		
    }
</script>

<style lang="less">
	#layui-layer1{
		z-index: 200 !important;
	}
	.layui-layer-shade{
		z-index: 190 !important;

	}
	 .cursor{
		  cursor: pointer;
	 }
	.clear{
		clear:both;
	}
	.overflow{
		overflow: hidden;
	};
	.left{
		float:left;
	}
	.right{
		float:right;
	}
	.layui-icon-right{
		position: absolute;
		left: 50%;
	}
	.step-item-tail i{
		background: none;
		// display: none;
	}
	.lay-step{
		height: 88px;
		line-height: 88px;
		background: #FAFBFC;
		padding-left: 0;
		border-bottom: 1px solid #E1E8EC;
	}
	.layui-fluid{
		padding: 0;
	}
	.layui-card-body{
		padding: 0;
	}
	.step-item{
		height: 100%;
	}
	.step-item{
		left: 17%;
		top:21%;
	}
	.layui-input, .layui-textarea{
		font-size: 12px;
	}
	.layui-form-select dl dd{
		font-size: 12px;
	}
	.layui-text ul li{
		list-style: none;
	}
	.layui-btn{
		background: #19AECF;
		border-radius: 4px;
	}
	.layui-btn-primary{
		background: #ffffff;
	}
	.layui-layer-page .layui-layer-content{
		overflow: hidden;
	}
</style>