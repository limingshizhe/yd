<?php  header("Content-type:text/html;charset='utf-8'"); 
	
	
	
$username=$_POST["username"];
$password=$_POST["password"];
if($username=="1137846162"&&$password=='199713'){
	echo '登录成功';
}else{
	echo '登录失败';
};



?>