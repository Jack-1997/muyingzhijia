<?php 
	include 'connect.php';

	//获取前端传来的数据
	$page_no = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;
	$qty = isset($_GET['qty']) ? $_GET['qty'] : 12;

	//所在的表
	$sql = "select * from listgoods";

	$startIdx = $qty*($page_no-1);
	$sql .= " limit $startIdx,$qty";

	//获取查询结果
	$result = $conn->query($sql);
	
	//使用查询结果
	$row = $result->fetch_all(MYSQLI_ASSOC);

	//格式化数据
	$res = array(
		'page_no'=>$page_no,
		'qty'=>$qty,
		'total'=>$conn->query('select count(*) from listgoods')->fetch_row()[0],
		'data'=>$row,
		'status'=>200,
		'msg'=>'success'
	);

	//输出数据
	echo json_encode($res,JSON_UNESCAPED_UNICODE);
 ?>