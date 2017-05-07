window.onload = function(){
    $("#wechat-pay").click(function(){
        $(".wechat-pay-box").css("display","block");	
    })	
    $(".cha-we").click(function(){
        $(".wechat-pay-box").css("display","none");	
    })
    $(".qita-pay a").click(function(){
        $(".wechat-pay-box").css("display","none");	
    })	
}