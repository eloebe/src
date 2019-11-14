var lockReconnect = false;  //避免ws重复连接
var ws = null;          // 判断当前浏览器是否支持WebSocket
var wsUrl = "ws://localhost:29191/sign"
createWebSocket(wsUrl);   //连接ws
var count=0;
	import $ from 'jquery'
 

function createWebSocket(url) {
    try{
        if('WebSocket' in window){
            ws = new WebSocket(url);
        }else if('MozWebSocket' in window){  
            ws = new MozWebSocket(url);
        }else{
            alert("您的浏览器不支持websocket协议,建议使用新版谷歌、火狐等浏览器，请勿使用IE10以下浏览器，360浏览器请使用极速模式，不要使用兼容模式！");
        }
        initEventHandle();
		count=0;
    }catch(e){
        //reconnect(url);
		var result=callSignService();
		if(result){
		   createWebSocket(url);
		}
        console.log(e);
    }
    count++;	
}
function send(data){
	ws.send(data);
}

//通过url Protocol调用本地程序
function callSignService(){
	//document.getElementById('signService').click();
	document.getElementById('signService').click();
}


function initEventHandle(d) {
    ws.onclose = function () {
        reconnect(wsUrl);
        console.log("llws连接关闭!"+new Date().toUTCString());
    };
    ws.onerror = function () {
        //reconnect(wsUrl);
		var result=createWebSocket();
		if(result){
		   createWebSocket(wsUrl);
		}
        console.log("llws连接错误!");
    };
    ws.onopen = function () {
        heartCheck.reset().start();      //心跳检测重置
        console.log("llws连接成功!"+new Date().toUTCString());
		setInterval(function(){
			var data = { 'action':'check'};
		    var jsData = JSON.stringify(data);
			send(jsData);
		},2000)
    };
    var gg = ws.onmessage = function (event) {    //如果获取到消息，心跳检测重置
        heartCheck.reset().start();      //拿到任何消息都说明当前连接是正常的
		var result=JSON.parse(event.data);
		if(result.code==0&&result.action=="sign")
		{
			console.log(result)
		   // alert(result.data);
			if(d==0){
				sessionStorage.setItem('applyurl',result.data);
				$('.preview1').attr('href',result.data);
				 $('.preview1').show();
				 $('.preview1').next().find('span').text('重新签章');

			}else{
				sessionStorage.setItem('allowpowerurl',result.data);
				$('.preview2').attr('href',result.data);
				$('.preview2').show();
				$('.preview2').next().find('span').text('重新签章');
			}
			/* $('.preview').each(function(i){
				var disPlay = $(this).attr("href").indexOf("null");
   if(disPlay != (-1)){
	  // $(this).addClass('layui-btn-disabled')
	  $(this).hide();
	   }else{
		   // $(this).removeClass('layui-btn-disabled');
		   $(this).show();

	   }
			}); */
		   
		}
		if(result.code==0&&result.action=='check')
		{
			console.log(result.data);
			sessionStorage.setItem('companyname',result.data);
		}
		
    };
}
// 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
window.onbeforeunload = function() {
    ws.close();
}  

function reconnect(url) {
    if(lockReconnect) return;
    lockReconnect = true;
    setTimeout(function () {     //没连接上会一直重连，设置延迟避免请求过多
        createWebSocket(url);
        lockReconnect = false;
    }, 2000);
}
function sign(pdfFile,b,cateid){
// var pdfFile = document.getElementById("txtArea").value;
/* $.ajax(
 sucess:function(res){
	 
	   var data = { 'action':'sign','pdfFile':res.data,'companyName':res.message};
	 var jsData = JSON.stringify(data);
	 send(jsData);
 }
) */
		// 甘肃文锐电子交易网络有限公司
             var data = { 'action':'sign','pdfFile':pdfFile,'companyName':b};
             var jsData = JSON.stringify(data);
			 send(jsData);
}
function ping(){
  var data={"action":'ping'};
  send(JSON.stringify(data));
}

//心跳检测
var heartCheck = {
    timeout: 540000,        //9分钟发一次心跳
    timeoutObj: null,
    serverTimeoutObj: null,
    reset: function(){
        clearTimeout(this.timeoutObj);
        clearTimeout(this.serverTimeoutObj);
        return this;
    },
    start: function(){
        var self = this;
        this.timeoutObj = setTimeout(function(){
            //这里发送一个心跳，后端收到后，返回一个心跳消息，
            //onmessage拿到返回的心跳就说明连接正常
            ws.send("ping");
            console.log("ping!")
            self.serverTimeoutObj = setTimeout(function(){//如果超过一定时间还没重置，说明后端主动断开了
                ws.close();     //如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
            }, self.timeout)
        }, this.timeout)
    }
}

 export default {  
     sign,
	 initEventHandle
 }  