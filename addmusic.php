<?php
error_reporting(0);
$musicname = $_POST['musicname'];
$singername = $_POST['singername'];
$type = $_POST['language'];
$publish = $_POST['publish'];
$count = $_POST['count'];
$md5name=md5($_FILES['music']['name']);
$link = mysql_connect("localhost",'root','');
mysql_select_db("test");
$sql = "INSERT INTO music(musicname,singername,type,publish,count,md5name) VALUES('{$musicname}','{$singername}','{$type}','{$publish}','{$count}','{$md5name}')";
mysql_query("set names utf8");
$str=mysql_query($sql);
if(!empty($_FILES['music'])){
	move_uploaded_file($_FILES['music']['tmp_name'],"music/".md5($_FILES['music']['name']).".mp3" );
}
if(!empty($_FILES['lrc'])){
	move_uploaded_file($_FILES['lrc']['tmp_name'],"music/".md5($_FILES['music']['name']).".lrc" );
}
if(!empty($_FILES['img'])){
	move_uploaded_file($_FILES['img']['tmp_name'],"music/".md5($_FILES['music']['name']).".jpg" );
}
if ($str) {
	echo  ("success！");
} else {
	echo ("error！");
}
// echo json_encode("test");
// echo json_encode("sjdkfjsdkljflajsdlfk");
