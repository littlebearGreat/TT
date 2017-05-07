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
}