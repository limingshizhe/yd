/*$(function(){
	var tim=null;
	var i=0;
	$('#ols').on('click','li',function(){
		var s=$(this).index();
		ou(s);
	})
	
	function ov(){
		$('#uls').children().eq(i-1).animate({left:-50+'%'},1000);
		$('#uls').children().eq(i).css('left','49%').animate({left:0},1000);
		$('#ols').children().eq(i).addClass('lisl').siblings('li').removeClass('lisl')
	}
	function ou(s){
	    if(s==i){
	    	return;
	    }
	    $('#uls').children().eq(i).animate({left:50+'%'},1000);
		$('#uls').children().eq(s).css('left','-49%').animate({left:0},1000);
		$('#ols').children().eq(s).addClass('lisl').siblings('li').removeClass('lisl')
	    i=s;
	    
	}
	
	tim=setInterval(po,3000);
	function po(){
		i++;
		if(i==8){
			i=0
		}
		ov()
	}
	
	
	
	
	
	
	
	
})*/


 
