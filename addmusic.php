<?php
error_reporting(0);
$musicname = $_POST['musicname'];
$singername = $_POST['singername'];
$type = $_POST['type'];
$publish = $_POST['publish'];
$count = $_POST['count'];
$link = mysql_connect("localhost",'root','');
mysql_select_db("test");
$sql = "INSERT INTO music(musicname,singername,type,publish,count) VALUES('{$musicname}','{$singername}','{$type}','{$publish}','{$count}')"; 
mysql_query("set names utf8");
$str=mysql_query($sql);
if ($str) {
	echo json_encode("插入成功！");
} else {
	echo json_encode("插入失败！");
}
// echo json_encode("test");
// echo json_encode("sjdkfjsdkljflajsdlfk");
