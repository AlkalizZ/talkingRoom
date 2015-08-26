<?php
	header("Content-Type:text/html;charset=utf-8");  
	$content = $_POST['content'];
	$responseArray = array(
		"status" => 200,
		"data" => $content
	);
	echo json_encode($responseArray);
 ?>