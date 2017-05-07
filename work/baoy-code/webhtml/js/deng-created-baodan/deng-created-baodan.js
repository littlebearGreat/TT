window.onload = function(){
	/*选择目的地弹窗*/
	$(".area-ipt-box").click(function(){
		$(".alert").css("display","block");
	})
	$(".close").click(function(){
		$(".alert").css("display","none");
	});
	$(".cancel").click(function(){
		$(".alert").css("display","none");
	})
	$(".tit-no").click(function(){
		$(".all-area").css("display","none");
		$(".all-no-area").css("display","block");
		$(".tit-no").css({
			"background-color":"#0082cb",
			"color":"#fff"
		})
		$(".tit-all").css({
			"background-color":"rgba(0,130,203,.15)",
			"color":"#333"
		})
	})
	$(".tit-all").click(function(){
		$(".all-area").css("display","block");
		$(".all-no-area").css("display","none");
		$(".tit-all").css({
			"background-color":"#0082cb",
			"color":"#fff"
		})
		$(".tit-no").css({
			"background-color":"rgba(0,130,203,.15)",
			"color":"#333"
		})
	})
	/*订单备注*/
	$(".tit-btn1").click(function(){
		$(".orderRemark .ipt").css("display","block");
		$(".tit-btn1").css("display","none");
		$(".tit-btn2").css("display","block");
	})
	$(".tit-btn2").click(function(){
		$(".orderRemark .ipt").css("display","none");
		$(".tit-btn2").css("display","none");
		$(".tit-btn1").css("display","block");
	})

	// 创建保单
	var doom = $('#table').children('tbody').eq(0).clone();
	$('#addList').click(function(){
		var dom = doom.clone();
		$('#table').append(dom);
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
}