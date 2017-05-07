window.onload = function(){
	/*导航浮于顶部*/
	$(window).scroll(function(){
		var n = $(window).scrollTop();
		if (n>80) {
			$('nav').addClass('bg-show');
		}else{
			$('nav').removeClass('bg-show');
		}
	})
	/*翻页效果*/
	$('#pagination-demo').twbsPagination({
        totalPages: 35,
        visiblePages:7,
        first:'首页',
        prev:'上一页',
        last:'末页',
        next:'下一页',
        onPageClick: function (event, page) {
            $('#page-content').text('Page ' + page);
        }
    });
    // A款高亮
	$('.choose-tiao-box li').click(function(){
		$(this).siblings().children('a').removeClass('kActive');
		$(this).children('a').addClass('kActive');
	})
}