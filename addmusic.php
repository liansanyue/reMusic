<?php
error_reporting(0);
$musicname = $_POST['musicname'];
$singername = $_POST['singername'];
$type = $_POST['type'];
$link = mysql_connect("localhost",'root','');
mysql_select_db("test");
$sql = "INSERT INTO music(musicname,singername,type) VALUES('{$musicname}','{$singername}','{$type}')"; 
mysql_query("set names utf8");
$str=mysql_query($sql);
if ($str) {
	echo json_encode("插入成功！");
} else {
	echo json_encode("插入失败！");
}
// echo json_encode("test");
// echo json_encode("sjdkfjsdkljflajsdlfk");
