$(function(){
	/*翻页*/
	$('#pagination-demo').twbsPagination({
        totalPages: 35,
        visiblePages:7,
        first:'首页',
        prev:'上一页',
        next:'下一页',
        last:'末页',
        onPageClick: function (event, page) {
            $('#page-content').text('Page ' + page);
        }
    });
    $('.protectDate-btn').click(function(){
    	$(this).parent().siblings().children('div').css('display','none');
    	$(this).parent().siblings().children('.protectDate').css('display','block');
    	$(this).siblings('a').css('color','#333');
    	$(this).css('color','#0082cb');
    })
    $('.protectDate-B-btn').click(function(){
    	$(this).parent().siblings().children('div').css('display','none');
    	$(this).parent().siblings().children('.protectDate-B').css('display','block');
    	$(this).siblings('a').css('color','#333');
    	$(this).css('color','#0082cb');
    })
})