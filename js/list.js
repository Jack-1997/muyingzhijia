/*
	列表页JS
 */
require(['config'],function(){
	require(['jquery','text!head','text!foot'],function($,head,foot){
		$('header').html(head);

		//加载数据
		var pageNo = 1;
		var qty = 12;
		var pageLast;
		var length;
		var goodslist = $('.goodsList');
		
		function creatgoods(){
			$.ajax({
				url:'./api/list.php',
				data:{pageNo:pageNo,qty:qty},

				// 设定返回数据类型
				dataType:'json',
				
				success:function(res){console.log(pageNo);
					length = Math.ceil(res.total/qty);
					//利用数据生成html
					var ul = $('<ul/>');
					
					var html = res.data.map(function(item){
						return `
							<li name='${item.id}'>
								<div class='list-con'>
									<div class='goods-box'>
										<div class='goods-pic'>
											<a href="">
												<img src="${item.imgurl}" alt="" class='onloadingBg lazy'/>
											</a>
										</div>
										<div class='goods-info'>
											<p>${item.title}</p>
											<p><a href="">${item.description}</a></p>
										</div>
									</div>
									<div class='price-box clearfix'>
										<span class='price fl'>
											<i>￥</i>
											<em>${item.price}</em>
										</span>
										<span class='buyBtn'><a href=""></a></span>
										
									</div>
								</div>
							</li>
						`
					})

					ul.html(html);

					//ul写入页面
					goodslist.append(ul);
					pageNo++;
				}
			})
		}
		creatgoods();

		//实现懒加载
		$(window).on('scroll',function(){
			
			var scrollTop = $(this).scrollTop();
			
			if(pageNo>length){
				return
			}
			
			
			console.log(scrollTop,document.documentElement.scrollHeight-window.innerHeight)
			if(scrollTop==document.documentElement.scrollHeight-window.innerHeight&& pageNo!=pageLast){

				creatgoods();

				pageLast = pageNo;
			}
		}) 

		$('footer').html(foot);
	})
})