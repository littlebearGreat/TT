window.onload = function(){
    function active(hoverClassName,activeClassName){
    	$(hoverClassName).hover(function(){
    		$(this).addClass(activeClassName);
    	},function(){
    		$(this).removeClass(activeClassName);
    	})
    };  
    	active('.Cxin','Cxin1')
    	active('.Zye','Zye1')
    	active('.Gxiao','Gxiao1')
    	active('.Gying','Gying1')
}