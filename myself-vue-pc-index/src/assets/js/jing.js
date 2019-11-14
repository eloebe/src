	const fn = function (a,b,c,that,tokenId){
		var or;
		if(a=="get"){
			or = "params";
		}else if(a=="post"){
			or = "data";
			c = JSON.stringify(c);
		}
		 var resault = 1;
		 return new Promise((resolve, reject) => {
			 that.$axios({
				method: a,
				url:b,
				//baseURL:baseURL,
				headers: {
					// 'content-type': 'application/x-www-form-urlencoded'
					'content-type':'application/json',
					'tokenId':tokenId
				},
				xhrFields: {
						       withCredentials: true
						   },
				[or]:c
			}) 
			 .then((res) => {
				 if(res.data.status==1){
					 resolve(res)
					 // resault = res;
					 // console.log(resault)
				 }
			})
			.catch(error => {
				reject(error)
				console.log(error)
			}) 
			})


		};  
		const WeAdminEdit = function(title, url, id, w, h,change) {
			if(title == null || title == '') {
				title = false;
			};
			if(url == null || url == '') {
				url = "404.html";
			};
			if(w == null || w == '') {
				w = ($(window).width() * 0.9);
			};
			if(h == null || h == '') {
				h = ($(window).height() - 50);
			};
			var index = layer.open({
				type: 2,
				area: [w + 'px', h + 'px'],
				fix: false, //不固定
				maxmin: true,
				shadeClose: true,
				shade: 0.4,
				title: title,
				content: url,
				success: function(layero, index) {
					//向iframe页的id=house的元素传值  // 参考 https://yq.aliyun.com/ziliao/133150
					var body = layer.getChildFrame('body', index);
					// body.contents().find(".flag").val(id);//设置打开页面某元素的值
					// body.contents().idd=id;
					// body.find('.flag').val('555');
					// console.log(body.contents())

				},
				error: function(layero, index) {
				},
				
				end: function () {
		            // window.location.reload();
		
		        }
			});
			/* if(full){
				layer.full(index);
			} */
		};

export default {  
    fn,
	WeAdminEdit
}  
	
// import fetch from '@/axios'

/* export function login(params) {
    return fetch({
        url: '/admin/login/doLogin',
        method: 'post',
        data: params
    })
} */