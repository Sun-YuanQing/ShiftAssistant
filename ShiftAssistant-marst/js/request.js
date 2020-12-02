import store from '@/store/index.js'

var request = {
	devIP: 'http://gw.shijiyunshang.com',
	testIP: 'http://gw.shijiyunshang.com',
	service : 'http://shop.shijiyunshang.com',
	header: {},
	server: function(options) {
		var service = this.service;
		var header = this.header;
		uni.getStorage({
			key: 'sucessToken',
			success: function(res) {
				var token = res.data;
				var userId = store.state.userId;
				if (!token) {
					header = {
						'content-type': 'application/json;charset=UTF-8',
						'client_id': 'webApp',
						'client_secret': 'webApp',
					}
				} else {
					header = {
						'Authorization': "Bearer " + token,
						'userId': userId,
						'content-type': 'application/json;charset=UTF-8',
						'client_id': 'webApp', 
						'client_secret': 'webApp',
					}
				}
				//console.log("header-------",header);
				//---uni.request----开始请求------
				// console.log(options.header?1:2)
				var newheader = {
					...header,
					...options.header
				}
				// console.log("newheader------",newheader)
				// console.log("header-------",header,'options-----------',options) 
				//http://shop.shijiyunshang.com
				// shop.shijiyunshang.com
				//192.168.1.107：10010
				uni.request({
					url: options.url.indexOf('http://') >= 0 ? options.url : service + options.url, //String	是		开发者服务器接口地址	' || options.url, //String	是		开发者服务器接口地址	
					params: options.params,
					data: options.data, //Object/String/ArrayBuffer	否		请求的参数	App（自定义组件编译模式）不支持ArrayBuffer类型
					header: options.header ? newheader : header, //Object	否		设置请求的 header，header 中不能设置 Referer。	H5端会自动带上cookie不可手动覆盖
					method: options.method, //String	否	GET	有效值详见下方说明	
					timeout: options.timeout, //Number	否	30000	超时时间，单位 ms	微信小程序（2.10.0）、支付宝小程序
					dataType: options.dataType, //String	否	json	如果设为 json，会尝试对返回的数据做一次 JSON.parse	
					responseType: options.responseType, //String	否	text	设置响应的数据类型。合法值：text、arraybuffer	App和支付宝小程序不支持
					sslVerify: options.sslVerify, //Boolean	否	true	验证 ssl 证书	仅App安卓端支持（HBuilderX 2.3.3+）
					withCredentials: options.withCredentials, //Boolean	否	false	跨域请求时是否携带凭证（cookies）	仅H5支持（HBuilderX 2.6.15+）
					success: options.success, //Function	否		收到开发者服务器成功返回的回调函数	
					fail: options.fail, //Function	否		接口调用失败的回调函数	
					complete(complete) { 
						// console.log(complete,'ccccc')
						if (complete.statusCode == 401) {
							// uni.hideLoading();
							setTimeout(()=>{
									uni.hideLoading();
							},0)
							if (options.url == '/api-auth/oauth/check/token') {
								console.log('   options.url---', options.url);
								uni.removeStorage('sucessToken');
								store.commit('outLogin');
							} else {
								console.log('   options.url---', options.url);
								
								uni.removeStorage('sucessToken');
								store.commit('outLogin');
								uni.navigateTo({
									url: '/pages/login/login.vue'
								})
							}
						}
						if (complete.statusCode != 200) {
							console.log('-有Token-options.url---报错了---------', options.url, complete);
						}
						if (options.complete) {
							options.complete(complete) //	Function	否		接口调用结束的回调函数（调用成功、失败都会执行）
						}
					}
				})
				//--uni.request---结束
			},
			fail(reeor) {
				var newheader = {
					...header,
					...options.header
				}
				if (newheader.Authorization) {
					delete newheader.Authorization;
				}
				if (header.Authorization) {
					delete header.Authorization;
				}
				if (options.header) {
					if (options.header.Authorization) {
						delete options.header.Authorization;
					}
				}


				// console.log('reeor----', reeor,newheader)
				// console.log("newheader------",newheader)
				// console.log("header-------",header,'options-----------',options) http://shop.shijiyunshang.com
				uni.request({
					url: options.url.indexOf('http://') >= 0 ? options.url : service + options.url, //String	是		开发者服务器接口地址	' || options.url, //String	是		开发者服务器接口地址	
					params: options.params,
					data: options.data, //Object/String/ArrayBuffer	否		请求的参数	App（自定义组件编译模式）不支持ArrayBuffer类型
					header: options.header ? newheader : header, //Object	否		设置请求的 header，header 中不能设置 Referer。	H5端会自动带上cookie不可手动覆盖
					method: options.method, //String	否	GET	有效值详见下方说明	
					timeout: options.timeout, //Number	否	30000	超时时间，单位 ms	微信小程序（2.10.0）、支付宝小程序
					dataType: options.dataType, //String	否	json	如果设为 json，会尝试对返回的数据做一次 JSON.parse	
					responseType: options.responseType, //String	否	text	设置响应的数据类型。合法值：text、arraybuffer	App和支付宝小程序不支持
					sslVerify: options.sslVerify, //Boolean	否	true	验证 ssl 证书	仅App安卓端支持（HBuilderX 2.3.3+）
					withCredentials: options.withCredentials, //Boolean	否	false	跨域请求时是否携带凭证（cookies）	仅H5支持（HBuilderX 2.6.15+）
					success: options.success, //Function	否		收到开发者服务器成功返回的回调函数	
					fail: options.fail, //Function	否		接口调用失败的回调函数	
					complete(complete) {
						// console.log(complete,'ccccc')
						if (complete.statusCode == 401) {
							// uni.hideLoading();
							setTimeout(()=>{
									uni.hideLoading();
							},0)
							
							if (options.url == '/api-auth/oauth/check/token') {
								console.log('   options.url---', options.url);
								uni.removeStorage('sucessToken');
								store.commit('outLogin');
							} else {
								console.log('   options.url---', options.url);
								uni.removeStorage('sucessToken');
								store.commit('outLogin');
								uni.navigateTo({
									url: '/pages/login/login.vue'
								})
							}
						}

						if (complete.statusCode != 200) {
							console.log('-没有Token-options.url---报错了---------', options.url, complete);
						}
						if (options.complete) {
							options.complete(complete) //	Function	否		接口调用结束的回调函数（调用成功、失败都会执行）
						}
					}
				})
			}
		});
	}

}
module.exports = request;
