/*
	首页js
 */
require(['config'],function(){
	require(['jquery','text!head','jacklunbo','text!foot'],function($,head,jacklunbo,foot){
		$('header').html(head);

		

		//头部Js代码
		var phone = $('.phonebox').find('i');
		var phonehidediv = $('.phonehidediv');
		var phonediv = $('.phonediv');
		$('.phonebox').hover(function(){
			//先向上跑在变色
			// phone.animate({'top':'0'})
			phone.css('color','#FF5c00');
			phonehidediv.show();
			phonediv.css({'border':'1px solid #FF5c00','background-color':'#fff'})
  			
			},
			function(){
				phone.css('color','#');
				phonehidediv.hide();
				phonediv.css({'border':'','background-color':''})	
		});

		var ssn_home = $('.ssn_home');
		var ssn_hover_div = $('.ssn-hover-div');
		var Theader_down01 = $('.Theader_down01');
		// console.log(ssn_home.find('b'));
		ssn_home.hover(function(){
			ssn_home.css({'border':'1px solid #FF5c00','background-color':'#fff'});
			ssn_home.find('b').css("border-color", "#FF5c00 transparent transparent");
			Theader_down01.show();
		},function(){
			ssn_home.css({'border':'','background-color':''});
			ssn_home.find('b').css({'border-color': "#666 transparent transparent","background-color":"#F5F4F6"});
			Theader_down01.hide();
		}) 


		//轮播图
		$('.banner').JackCarousel({
				imgs:['img/banner01.jpg','img/banner02.jpg'],
				width:1090,
				height:350,
				page:true,
				autoPlay:true,
				buttons:false,
				type:'horizontal'
			})
			
		//special商品数据请求
		var sgoodlist = $('.sgoodlist');
		$.ajax({
			url:'./api/sgoods.php',

			// 设定返回数据类型
			dataType:'json',

			success:function(res){console.log(res);
				var html = res.map(function(item){
					return `
						<div class='sitem wrap' data-guid='${item.id}'>
							<div class='lt'>
								<a href="html/list.html"><img src="${item.imgurl}" alt="" /></a>
							</div>
							<div class='rt'>
								<h2 class='site-hot-row-two'>
									<a href="html/list.html">${item.title}</a>
								</h2>
								<div class='site-hot-row-three'>
									<span class='product-words'>${item.description}</span>
								</div>
								<div class='site-hot-row-four'>
									<div class='fl'>
										<div class='price'>
											<p><b>￥</b>${item.price} <b>起</b></p>
										</div>

									</div>
									<a href="html/list.html" class='viewbtn'>点击进入</a>
								</div>
							</div>
						</div>
					`
				}).join('');

				sgoodlist.html(html);
			}
		})
		
		var hgoodslist = $('.hgoodslist')
		//hotgoods商品数据请求
		$.ajax({
			url:'./api/hotgoods.php',

			// 设定返回数据类型
			dataType:'json',

			success:function(res){console.log(res);
				var html2 = res.map(function(item){
					return `
						<div class='sitem wrap' data-guid='${item.id}'>
							<div class='lt'>
								<a href=""><img src="${item.imgurl}" alt="" /></a>
							</div>
							<div class='rt'>
								<h2 class='site-hot-row-two'>
									<a href="">${item.title}</a>
								</h2>
								<div class='site-hot-row-three'>
									<span class='product-words'>${item.description}</span>
								</div>
								<div class='site-hot-row-four'>
									<div class='fl'>
										<div class='price'>
											<p><b>￥</b>${item.price} <b></b></p>
										</div>

									</div>
									<a href="" class='viewbtn'>点击进入</a>
								</div>
							</div>
						</div>
					`
				}).join('');

				hgoodslist.html(html2);
			}
		})

		//尾部
		$('footer').html(foot);
	})
})



















