$(function(){
	var a=true;
	$('.nav-name').click(function(){
	
		if(a==true){
			    $('.nav-name').children().eq(0).css({"transform":"rotate(45deg)",'transform-origin':'left top','transition':'all 0.4s'});
			    $('.nav-name').children().eq(1).fadeToggle();
			    $('.nav-name').children().eq(2).css({"transform":"rotate(-45deg)",'transform-origin':'left bottom','transition':'all 0.4s'});
			    a=false;
		    }else{
		      	$('.nav-name').children().eq(0).css({"transform":"rotate(0deg)",'transform-origin':'left top','transition':'all 0.4s'});
		      	$('.nav-name').children().eq(1).fadeToggle();
		      	$('.nav-name').children().eq(2).css({"transform":"rotate(0deg)",'transform-origin':'left bottom','transition':'all 0.4s'});
		      	a=true;
		    }
	})
	
	$('#ml-uls').on('click','li',function(){
		$(this).addClass('ml-lis').siblings('li').removeClass('ml-lis');
		/*if($(this)==0){
			$('.ml-lis').after.css({'background':'red'})
		}*/
	})
	
	
	
	
	
})
	
	
	
