$(function(){
    $('.anli1').hover(function(){
    	$(this).siblings().children(".anli-cont").removeClass('anli3');
    	$(this).children(".anli-cont").addClass('anli3');
    })
})