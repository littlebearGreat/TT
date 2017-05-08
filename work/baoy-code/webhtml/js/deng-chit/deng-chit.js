$(function(){
	$(".cont-list-left-choose").click(function(){
		$(this).parent().siblings().children("ul").hide();
		$(this).siblings().show();
		$(this).parent().siblings().children().children('img').hide();
		$(this).children("img").show();
	})

	    /*select模拟：
		clickClass:点击对象的class名称
		contClass:点击后要展现的内容的class名称
	*/
	function selectT(clickClass,contClass){

		var n = 0; /*定义n，来控制内容的展开与隐藏*/

		$(clickClass).hover(function(){
			$(contClass).slideDown(200);
		});

		function nOn(){
			n = 1;
		};

		function nOff(){
			n = 0;
			setTimeout(function(){
				if(n == 0){
					$(contClass).slideUp(200);
				};
			},300);
		};

		$(clickClass).hover(
			function(){nOn()},
			function(){nOff()}
		);

		$(contClass).hover(
			function(){nOn()},
			function(){nOff()}
		);

		// 如果是select，下面是文字替换，点击后消失，注意选择器
		// $(contClass).children().click(function(){
		// 	$(clickClass).children('.checked').text($(this).text());
		// 	$(contClass).hide();
		// });
	};

	selectT('.myAccount','.zhanghu-tan'); /*我的账户*/
	selectT('.myOrder','.zhanghu-tan1'); /*我的订单*/
	selectT('.kehujingli','.khjlInfor'); /*客户经理*/
	/*代金券切换*/
	$('.wei-chit-btn').click(function(){
		$(this).siblings('ul').css('display','none');
		$(this).siblings('a').css('background-color','rgba(0,130,203,.15)');
		$('.wei-chit').css('display','block');
		$(this).css('background-color','#0082cb');
		$(this).css('color','#fff');
	})
	$('.yi-chit-btn').click(function(){
		$(this).siblings('ul').css('display','none');
		$(this).siblings('a').css('background-color','rgba(0,130,203,.15)');
		$('.yi-chit').css('display','block');
		$(this).css('background-color','#0082cb');
		$(this).css('color','#fff');
	})
	$('.no-result-btn').click(function(){
		$(this).siblings('ul').css('display','none');
		$(this).siblings('a').css('background-color','rgba(0,130,203,.15)');
		$('.no-result').css('display','block');
		$(this).css('background-color','#0082cb');
		$(this).css('color','#fff');
	})
})