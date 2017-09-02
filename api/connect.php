<?php 
	// 配置信息
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'muyingzhijia';

	// 连接数据库
	$conn = new mysqli($servername,$username,$password,$database);

	//检测连接
	if($conn->connect_errno){
		die('连接失败'.$conn->connect_errno);
	}

	//设置编码格式
	$conn->set_charset('utf8')
 ?>