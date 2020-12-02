import Vue from "vue";
import Vuex from "vuex";
//import footer_store from "./modules/footer_store.js";

Vue.use(Vuex);
const storeHomeData ={
	navs: [],
	headBanner: [],
	swiperImg: [],
	activityList: [],
	defaultHeaderBg:'',
	defaultGifBg:'',
	defaultGoodsBg:'',
	defaultVip298List:[],
	defaultDiscountList:[],
	defaultFreeConvertibilityList:[],
	defaultGroupBuyingList:[],
	defaultRushTopurchaseLsit:[],
	
};
const phoneInfo = {
				client: {
					id: '',
					clientid: '',
					appid: '',
					appkey: ''
				},
				app: {},
				system: {},
				device: {
					imei: '',
					imsi: [],
					uuid: ''
				}
			};

const store = new Vuex.Store({
	state: {
		userId: '',
		
	},

	getters: {
		
	},
	mutations: {
		
	
	},
	actions: {
	},
	modules: {
		//footer_store
	}
})

export default store;
