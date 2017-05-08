window.onload = function(){
	$(window).scrollTop(0);
	/*登录框切换*/
	$('.index-login>span').click(function(){
		$(this).addClass('index-login-active').siblings().removeClass('index-login-active');
		$('.index-login-tab > div').hide().eq($('.index-login>span').index(this)).show();
	})
	/*优势鼠标悬停事件*/
	$(function(){
		$('.index-advantage li span').hover(function(){
			$(this).children().eq(0).css('display','none').siblings().css('display','block');
		},function(){
			$(this).children().eq(0).css('display','block').siblings().css('display','none');
		    })
	})
	// 最新公告效果
	var $noticeCont = $('.notice-cont-box li');
	var noticeTimer = null;

	// 最新公告自动播放
	function noticeAnimate(obj,top,speed) {
		obj.stop().animate({
			top: top
		},speed,function () {
			$(this).find('li').first().appendTo(this);
			$(this).css({top: -34});
		});
	}

	noticeTimer = setInterval(function () {
		noticeAnimate($('.notice-cont-box'),-68,700);
	},2000);

	$('.notice-box').hover(function () {
		clearInterval(noticeTimer);
	},function () {
		noticeTimer = setInterval(function () {
			noticeAnimate($('.notice-cont-box'),-68,700);
		},2000);
	});

	$('.next-notice-btn').click(function () {
		noticeAnimate($('.notice-cont-box'),-68,500);
	});
	$('.prev-notice-btn').click(function () {
		$('.notice-cont-box').stop().animate({
			top: 0 
		},700,function () {
			$(this).css({top: -34});
			$(this).find('li').last().prependTo(this);
		});
	});
	/*导航浮于顶部*/
	$(window).scroll(function(){
		var n = $(window).scrollTop();
		if (n>80) {
			$('nav').addClass('bg-show');
		}else{
			$('nav').removeClass('bg-show');
		}
	})

	/*合作伙伴*/
	$('.friendR').click(function(){
		var ul = $(this).siblings('ul');
		ul.children('li').eq(0).appendTo(ul);
	})
	$('.friendL').click(function(){
		var ul = $(this).siblings('ul');
		var len = ul.children('li').length;
		/*console.log(len);*/
		ul.children('li').eq(len-1).prependTo(ul);
	})

	var friendInt = setInterval(function(){
		var ul = $('.friendR').siblings('ul');
		ul.children('li').eq(0).appendTo(ul);
	},3000);
	$('.friends').hover(function(){
		clearInterval(friendInt);
	},function(){
		friendInt = setInterval(function(){
			var ul = $('.friendR').siblings('ul');
			ul.children('li').eq(0).appendTo(ul);
		},3000);
	})
	/*注册弹窗关闭*/
	$(".tui").click(function(){
		$(".alert").css("display","none");
		$('.zhuce-right-cont').css('display','none');
	})
	// 免费注册
	$(".index-login-register").click(function(){
		$(".alert").css("display","block");
		$('.zhuce-right-cont').eq(0).css('display','block');
	})
	// 注册确认按钮
	$('#register').click(function(){
		$('.zhuce-right-cont').eq(0).css('display','none');
		$('.zhuce-right-cont').eq(1).css('display','block');
	})

	// 找回密码
	$('.index-find-mima').click(function(){
		$(".alert").css("display","block");
		$('.zhuce-right-cont').eq(2).css('display','block');
	})

	// 找回密码确认按钮
	$('#submit').click(function(){
		$('.zhuce-right-cont').eq(2).css('display','none');
		$('.zhuce-right-cont').eq(3).css('display','block');
	})

	// 底部注册按钮
	$(".Register-now").click(function(){
		$(".alert").css("display","block");
		$('.zhuce-right-cont').eq(0).css('display','block');
	})

}