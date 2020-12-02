export default {
	state: {
		footer_nav: [
			{
				name: "商城",
				name_code: "home",
				icon: "/static/image/tab/tab_home_nor.png",
				select_icon: "/static/image/tab/tab_home_pre.png",
				size: "small"
			},
			
		],
		now_page_index: 0, // 默认显示哪页
	},
	
	mutations: {
		change_nav_list(state, data) {
			state.footer_nav = data;
		},
		change_page(state, index) {
			state.now_page_index = index;
		}
	},
	
	actions: {
		menu_3(ctx) {
			let menu_list = [
				{
					name: "商城",
					name_code: "home",
					icon: "/static/image/tab/tab_home_nor.png",
					select_icon: "/static/image/tab/tab_home_pre.png",
					size: "small"
				}
			]
			ctx.commit("change_nav_list", menu_list)
		},
		
		menu_4(ctx) {
			let menu_list = [
				{
					name: "商城",
					name_code: "home",
					icon: "/static/image/tab/tab_home_nor.png",
					select_icon: "/static/image/tab/tab_home_pre.png",
					size: "small"
				}
			]
			ctx.commit("change_nav_list", menu_list)
		},
		
		menu_5(ctx) {
			let menu_list = [
				{
					name: "商城",
					name_code: "home",
					icon: "/static/image/tab/tab_home_nor.png",
					select_icon: "/static/image/tab/tab_home_pre.png",
					size: "small"
				}
			]
			ctx.commit("change_nav_list", menu_list)
		}
	}
}