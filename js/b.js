$(function(){
	$('.wjm').on('click',function(){
		/*alert("不要点了，目前出了一点小故障，等我修护好了再告诉你")*/
		var usva=$('#username').val();
		var pava=$('#psssword').val();
		  if(usva=='1137846162'&&pava=='199713'){
		  	$('.mask').css('display','none');
		  	$('#hid').css('display','block');
		  }else{
		  	alert('登录失败');
		  }
	})
		
		
		
	
	
	
	
	
	
})
/*$.ajax({
		   	type:"post",
		   	url:"b.php",
		   	data:{usva:username,pava:psssword},
		   	success:function(data){
		   		alert('您'+data);
		   	}
		   });*/