<?php 
	include 'connect.php';

	//所在的表
	$sql = "select * from hotgoods";

	//获取查询结果
	$result = $conn->query($sql);

	//使用查询结果
	$row = $result->fetch_all(MYSQLI_ASSOC);

	//输出数据
	echo json_encode($row,JSON_UNESCAPED_UNICODE);
 ?>