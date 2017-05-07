$(function(){
	$(".toubao-message1").hover(function(){
		$(this).addClass("toubao-message2");
	},function(){
		$(this).removeClass("toubao-message2")
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
})