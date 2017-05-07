$(function(){
    $(".cont-list-left-choose").click(function(){
        $(this).parent().siblings().children("ul").hide();
        $(this).siblings().show();
        $(this).parent().siblings().children().children('img').hide();
        $(this).children("img").show();
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
    /*table高亮*/
    $(".toubao-message1").hover(function(){
		$(this).addClass("toubao-message2");
	},function(){
		$(this).removeClass("toubao-message2")
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
        //  $(clickClass).children('.checked').text($(this).text());
        //  $(contClass).hide();
        // });
    };

    selectT('.myAccount','.zhanghu-tan'); /*我的账户*/
    selectT('.myOrder','.zhanghu-tan1'); /*我的订单*/
    selectT('.kehujingli','.khjlInfor'); /*客户经理*/
})