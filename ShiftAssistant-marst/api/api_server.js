// http://192.168.1.8:9200/commodity-center/v1/classify/classifyIndexList
import store from "@/store/index.js";
var restOption = {
	method: 'post',
	timeout: 5000
}

//请求地址
import request from '@/js/request.js'

// --首页  pages/index/pages/home_page--
//@description 获取用户优惠券列表
//@param {string}   userId 
var api_server = {
	/**
	 * @description 本机token验证
	 */
	check_token: function(options) {
		var check_options = options ? options : {};
		check_options.url = '/api-auth/oauth/check/token';
		check_options.method = 'post';
		check_options.data = {};
		check_options.timeout = 5000;
		request.server(check_options);
	},
	/**
	 * @description 升级APP1
	 */
	updata_wgt: function(options) {
		if (request.service == 'http://shop.shijiyunshang.com') {
			options.url = 'http://devdeploy.shijiyunshang.com/appdeploy/updata_wgt.json';
		} else {
			options.url = 'http://deploy.shijiyunshang.com/appdeploy/updata_wgt.json';
		}
		request.server(options);

	},
	// /**
	//  * @description 升级APP2
	//  */
	// updata_wgt_my: function(options) {
	// 	if (request.service == 'http://shop.shijiyunshang.com') {
	// 		options.url = 'http://192.168.1.103/upData_wgt.json';
	// 		options.method = 'get';
	// 		options.timeout =2200;
	// 		// options['Access-Control-Allow-Origin'] = '*';
	// 		// options['Access-Control-Allow-Methods'] = 'OPTIONS,POST,GET';
	// 		// options['Access-Control-Allow-Headers'] = 'x-requested-with,content-type';
	// 	}
	// 	request.server(options);
	// },
	/**
	 * @description 登录发送验证码
	 * @param {string}  phone  手机号
	 */
	loginSendSms: function(options) {
		options.url = '/agency-center/v1/agency/loginSendSms';
		options = { ...restOption,
			...options
		};
		request.server(options);
	},
	/**
	 * @description 无验证码登陆
	 */
	securityCodeLogin: function(options) {
		options.url = '/agency-center/v1/agency/securityCodeLogin';
		options = { ...restOption,
			...options
		};
		request.server(options);
	},
	/**
	 * @description 发送验证码
	 * @param {string} mobile
	 */
	registerSendSms: function(options) {
		options.url = '/agency-center/v1/agency/registerSendSms';
		options = { ...restOption,
			...options
		};
		request.server(options);
	},
	/**
	 * @description 注册登陆
	 * param {string} mobile
	 * password: that.create.inputPwd1,
	 * secondPassword: that.create.inputPwd2,
	 * // userInviteCode: that.create.Invitation
	 * parentInviteCode: that.create.Invitation,
	 * deviceId: that.create.inputPhone,
	 * phone: that.create.inputPhone,
	 * validCode: that.create.smsKey
	 */
	registUser: function(options) {
		options.url = '/agency-center/v1/agency/registUser';
		options = { ...restOption,
			...options
		};
		request.server(options);
	},
	/**
	 * /page/wo/zhenmy_page
	 * @description 获取用户账户各项收益信息(vpi会员收益信息)
	 */
	findByUserIdAccount: function(options) {
		var token = uni.getStorageSync('sucessToken');
		if (!token) {
			console.log('获取用户账户各项收益信息(vpi会员收益信息)findByUserIdAccount  token:', token)
			uni.hideLoading();
			return;
		}
		options.url = '/agency-center/v1/agency/findByUserIdAccount';
		request.server(options);
	},

	/**
	 * @description 首页活动图
	 */
	activity_list: function(options) {
		options.url = '/market-center/v1/activity/list';
		request.server(options);
	},
	/**
	 * @description 获取用户优惠券列表
	 * @param {string}   userId 
	 */
	findByConditionsCouponRecords: function(options) {
		options.url = '/agency-center/v1/agency/findByConditionsCouponRecords';
		request.server(options);
	},
	/**
	 * @description 获取优惠券总表
	 */
	findByConditionsCouponModel: function(options) {
		options.url = '/agency-center/v1/agency/findByConditionsCouponModel';
		request.server(options);
	},
	/**
	 * @description 298
	 * post
	 * @param {int}  
	 */
	// classifySingleList: function(options) {
	// 	options.url = '/commodity-center/v1/classify/classifySingleList';
	// 		request.server(options);
	// },
	specialpricegoods_list: function(options) {
		options.url = '/market-center/v1/specialpricegoods/list';
		options.data = options.data ? options.data : {};
		request.server(options);
	},





	/**
	 * @description 导航列表 多级
	 * post
	 * @param {int}   classifyCode 首页分类点击选中code
	 * @param {int}   nums  大于1多级
	 */
	classifySingleList: function(options) {
		options.url = '/commodity-center/v1/product/classifySingleList';
		request.server(options);
	},


	/**
	 * @description 商品分类列表查询
	 * post
	 * @param {int}  
	 */
	classifyGoodsList: function(options) {
		options.url = '/commodity-center/v1/product/classifyGoodsList';
		request.server(options);
	},
	/**
	 * @description 免费兑换列表
	 * page	 {int} 是	int	当前页码
	 * limit {int}	是	int	分页数量
	 */
	freeexchangegoods_list: function(options) {
		options.url = '/market-center/v1/freeexchangegoods/list';
		options.method = 'post';
		options.timeout = 3000;
		request.server(options);
	},


	// /commodity-center/v1/product/productOptions

	/**
	 * @description 商品分类推荐商品列表
	 * post 
	 * @param {int}   classifyCode 首页分类点击选中code
	 * 
	 */
	findGoodsList: function(options) {
		options.url = '/commodity-center/v1/product/findGoodsList';
		request.server(options);
	},
	/**
	 * @description 拼团推荐列表
	 * http://192.168.1.107:7087/v1/spellfightgoods/list
	 * market-center/v1/spellfightgoods/list
	 */
	spellfightgoods_list: function(options) {
		options.url = '/market-center/v1/spellfightgoods/list';
		request.server(options);
	},
	// 首页拼团推荐列表
	spellfightgoods_getlist: function(options) {
		options.url = '/market-center/v1/spellfightgoods/getlist';
		request.server(options);
	},
	
	
	
	

	/**
	 * @description 获取用户购物车数量
	 * @param {int} customerId 
	 * 
	 */
	carSum: function(options) {
		options.url = '/order-center/v1/car/sum';
		request.server(options);
	},
	//用户代理中心
	/**
	 * @description 根据用户ID以及收益类型获取收益列表
	 */
	findUserIdEarnings: function(options) {
		options.url = '/agency-center/v1/agency/findUserIdEarnings';
		request.server(options);
	},


	/**
	 * @description 分享海报图片获取
	 */
	userNap: function(options) {
		options.url = '/market-center/v1/user/nap';
		request.server(options);
	},



	/**
	 * @description 首页商品推荐列表
	 */
	recommandgoods_list: function(options) {
		options.url = '/market-center/v1/recommandgoods/list';
		request.server(options);
	},
	
	/**
	 * @description 首页商品推荐列表新
	 */
	productIndexList: function(options) {
		options.url = '/commodity-center/v1/product/productIndexList';
		request.server(options);
	},
	
	
	
	
	
	


	/**
	 * @description 轮播
	 */
	napfindList: function(options) {
		options.url = '/market-center/v1/nap/find/list';
		request.server(options);
	},


	/**
	 * @description 查找相似商品
	 * @param {int} classifyId 
	 */
	productSimilarity: function(options) {
		options.url = '/commodity-center/v1/product/productSimilarity';
		request.server(options);
	},


	/**
	 * @description 查找抢购商品推荐列表
	 */
	falshsalegoodsGetlist: function(options) {
		options.url = '/market-center/v1/falshsalegoods/getlist';
		request.server(options);
	},
	/**
	 * @description 判断是否开过该商品团
	 */
	falshsalegoodsCheckHaven: function(options) {
		options.url = '/market-center/v1/falshsalegoods/checkHaven';
		request.server(options);
	},

	/**
	 * @description 将满团列表
	 */
	falshsalegoodsFullgrouplist: function(options) {
		options.url = '/market-center/v1/falshsalegoods/fullgrouplist';
		request.server(options);
	},
	/**
	 * @description 查找正在拼团列表
	 */
	falshsalegoodsGrouplist: function(options) {
		options.url = '/market-center/v1/falshsalegoods/grouplist';
		// options.url = 'http://192.168.1.112:10400/v1/falshsalegoods/grouplist';
		request.server(options);
	},
	/**
	 * @description 查找抢购商品推荐列表
	 */
	falshsalegoodsList: function(options) {
		options.url = '/market-center/v1/falshsalegoods/list';
		request.server(options);
	},
	/**
	 * @description 发起抢购拼团
	 */
	falshsalegoodsSponsorGroup: function(options) {
		options.url = '/market-center/v1/falshsalegoods/sponsorGroup';
		request.server(options);
	},

	/**
	 * @description 加入抢购团
	 */
	falshpartakepartsAdd: function(options) {
		options.url = '/market-center/v1/falshpartakeparts/add';
		options.method = 'post';
		options.timeout = 5000;
		request.server(options);
	},



	/**
	 * @description 判断用户是否已经参与该团抢购
	 */
	falshpartakepartsCheckHaven: function(options) {
		options.url = '/market-center/v1/falshpartakeparts/checkHaven';
		options.method = 'post';
		options.timeout = 5000;
		request.server(options);
	},

	/**
	 * @description 获取抢购团详情
	 * @param {int} groupId 团id 
	 */
	falshsalegoodsGroupDetail: function(options) {
		options.url = '/market-center/v1/falshsalegoods/groupDetail';
		options.method = 'post';
		options.timeout = 5000;
		request.server(options);
	},

	/**
	 * @description 获取抢购商品详情
	 * @param {int} id 活动商品id 
	 */
	falshsalegoodsFalshDetail: function(options) {
		options.url = '/market-center/v1/falshsalegoods/falshDetail';
		options.method = 'post';
		options.timeout = 5000;
		request.server(options);
	},

	/**
	 * @description 获取抢购商品详情下推荐列表
	 * @param {int} id 活动商品id 
	 * @param {int} classIfyid 
	 */
	falshsalegoodsRecomlist: function(options) {
		options.url = '/market-center/v1/falshsalegoods/recomlist';
		options.method = 'post';
		options.timeout = 5000;
		request.server(options);
	},
	/**
	 * @description 查询商品状态
	 * @param {int} goodsId 商品id 
	 */
	productIndexDetail: function(options) {
		options.url = '/commodity-center/v1/product/productIndexDetail';
		request.server(options);
	},
	/**
	 * @description  修改/设置支付密码以及登录密码
	 * /agency-center/v1/agency/retrievePassword
	 */
	retrievePassword: function(options) {
		// options.url = 'http://192.168.1.110:10333/v1/agency/retrievePassword';
		options.url = '/agency-center/v1/agency/retrievePassword';
		options.method = 'post';
		options.timeout = 5000;
		request.server(options);
	},


	/**
	 * @description  提现明细
	 * 
	 */
	withdrawList: function(options) {
		options.url = '/agency-center/v1/withdraw/list';
		request.server(options);
	},
	/**
	 * @description  推荐团列表
	 */
	spell_proSpell: function(options) {
		//options.url = 'http://192.168.1.107:10400/v1/spell/proSpell';
		options = { ...restOption,
			...options
		};
		options.url = '/market-center/v1/spell/proSpell';
		request.server(options);
	},
	/**
	 * @description  拼团 拼购 列表
	 * market-center
	 */
	spellfightgoods_list: function(options) {
		//options.url = 'http://192.168.1.107:10400/v1/spellfightgoods/list';
		options.method = 'post';
		options.url = '/market-center/v1/spellfightgoods/list';
		request.server(options);
	},
	/**
	 * @description   拼购 商品详情
	 * market-center
	 */
	spellfightgoods_detail: function(options) {
		//options.url = 'http://192.168.1.107:10400/v1/spellfightgoods/detail';
		options = { ...restOption,
			...options
		};
		options.url = '/market-center/v1/spellfightgoods/detail';
		request.server(options);
	},
	/**
	 * @description   拼购 团的详情
	 * market-center
	 */
	spellfight_detail_detail: function(options) {
		//options.url = 'http://192.168.1.107:10400/v1/spellfight/detail/detail';
		options = { ...restOption,
			...options
		};
		options.url = '/market-center/v1/spellfight/detail/detail';
		request.server(options);
	},



	/**
	 * @description   折扣优享列表
	 * market-center
	 */
	findGoodsFindgoodsList: function(options) {
		options = { ...restOption,
			...options
		};
		options.url = '/market-center/v1/findGoods/findgoodslist';
		request.server(options);
	},

	// 192.168.1.107:10400/v1/spellFights/shareSepll
	// 拼团分享查询接口
	spellFightsShareSepll: function(options) {
		options = { ...restOption,
			...options
		};
		options.url = '/market-center/v1/spellFights/shareSepll';
		request.server(options);
	},
	/**
	 * @description   更新cid
	 * agency-center
	 */
	userLoginCURD: function(options) {
		options = { ...restOption,
			...options
		};
		//options.url = 'http://192.168.1.110:10333/v1/agency/userLoginCURD';

		options.url = '/agency-center/v1/agency/userLoginCURD';
		request.server(options);
	},
	/**
	 * @description   更新头像
	 * agency-center
	 */
	uploadUserHeadImg: function() {
		// options = { ...restOption,
		// 	...options
		// };
		//options.url = 'http://8.129.162.11:9200/agency-center/v1/agency/uploadUserHeadImg';
		//options.url = http://192.168.1.110:10333/v1/agency/uploadUserHeadImg
		return request.service + '/agency-center/v1/agency/uploadUserHeadImg';
		
		// return request.service + '/agency-center/v1/agency/updateUserHeadImg';
		
		//request.server(options);
	},




	/**
	 * @description 合伙人套餐列表
	 * agency-center
	 */
	partnerpackageList: function(options) {
		options = { ...restOption,
			...options
		};
		options.url = '/market-center/v1/partnerpackage/list';
		request.server(options);
	},


	/**
	 * @description 合伙人套餐商品列表
	 * agency-center
	 */
	packagegoodsList: function(options) {
		options = { ...restOption,
			...options
		};
		options.url = '/market-center/v1/packagegoods/list';
		request.server(options);
	},

	/**
	 * @description id查询套餐详情
	 * agency-center
	 */
	partnerpackageFindone: function(options) {
		options = { ...restOption,
			...options
		};
		options.url = '/market-center/v1/partnerpackage/findone';
		request.server(options);
	},

	/**
	 * @description   权益列表
	 * agency-center
	 */
	findByConditionsInterest: function(options) {
		options = { ...restOption,
			...options
		};
		//options.url = 'http://192.168.1.110:10333/v1/agency/findByConditionsInterest';
		options.url = '/agency-center/v1/agency/findByConditionsInterest';
		request.server(options);
	},
	/**
	 * @description 获取合伙人权益信息（等级）
	 * agency-center
	 */
	findByUserIdHonor: function(options) {
		options = { ...restOption,
			...options
		};
		//options.url = 'http://192.168.1.110:10333/v1/agency/findByUserIdHonor';
		options.url = '/agency-center/v1/agency/findByUserIdHonor';
		request.server(options);
	},
	/**
	 * @description 产品权益商品相关接口（等级商品）
	 * agency-center
	 */
	medalgoodslist: function(options) {
		options = { ...restOption,
			...options
		};
		//options.url = 'http://192.168.1.8:9200/market-center/v1/medalgoods/list';
		options.url = '/market-center/v1/medalgoods/list';
		request.server(options);
	},

	/**
	 * @description 根据条件查询合伙人任务列表（赚取荣誉值）
	 * agency-center
	 */
	findByConditionHonorMission: function(options) {
		options = { ...restOption,
			...options
		};
		//options.url = 'http://192.168.1.110:10333/v1/agency/findByConditionHonorMission';
		options.url = '/agency-center/v1/agency/findByConditionHonorMission';
		request.server(options);
	},
	
	/**
	 * @description 根据id查兑换商品详情
	 * agency-center
	 */
	medalgoodsDetail: function(options) {
		options = { ...restOption,
			...options
		};
		//options.url = 'http://192.168.1.110:10333/v1/agency/findByConditionHonorMission';
		options.url = '/market-center/v1/medalgoods/detail';
		request.server(options);
	},
	
	

	
	
}

module.exports = api_server;
