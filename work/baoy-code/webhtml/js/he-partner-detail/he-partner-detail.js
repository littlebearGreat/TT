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
})