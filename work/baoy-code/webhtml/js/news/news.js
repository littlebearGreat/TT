$(function(){
	$('.qiehuan-btn a').click(function(){
		console.log($(this).index())
		$(this).parent().siblings().css('left',$(this).index()*(-1200))
	})
})