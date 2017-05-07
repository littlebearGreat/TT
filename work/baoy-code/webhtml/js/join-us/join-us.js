$(function(){
	$('.zhiwei-list-td a').click(function(){
		$('.join-us-cont').css('display','none');
		$('.join-detail-box').css('display','block');
	})
	$('.join-btn').click(function(){
		$('.join-us-cont').css('display','block');
		$('.join-detail-box').css('display','none');
	})
})