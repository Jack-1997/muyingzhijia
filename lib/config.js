// 配置
// 依赖
require.config({
	urlArgs:'v=' +Date.now(),
	// baseUrl:''
	paths:{
		jquery:'../lib/jquery3.2.1',
		// gdszoom:'../lib/jquery-gdsZoom/jquery.gdsZoom',
		text:'../lib/text',
		head:'../html/header.html',
		// lunbo:'../lib/jquery.lxCarousel/jquery.lxCarousel',
		// lunbo02:'../lib/jquery.lxCarousel/jquery.lx02Carousel',
		// foot:'../html/footer.html',
		//common:'common'
	},
	shim:{
		// gdszoom依赖jquery
		gdszoom:['jquery'],
	// 	lunbo:['jquery'],
	// 	lunbo02:['jquery']
	}
});