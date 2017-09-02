// 配置
// 依赖
require.config({
	urlArgs:'v=' +Date.now(),
	// baseUrl:''
	paths:{
		jquery:'../lib/jquery-3.2.1',
		// gdszoom:'../lib/jquery-gdsZoom/jquery.gdsZoom',
		text:'../lib/text',
		head:'../html/header.html',
		jacklunbo:'../lib/new.carousel/new.carousel',
		foot:'../html/footer.html',
		//common:'common'
	},
	shim:{
		// gdszoom依赖jquery
		gdszoom:['jquery'],
		jacklunbo:['jquery'],
	// 	lunbo:['jquery'],
	// 	lunbo02:['jquery']
	}
});