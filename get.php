<?php
error_reporting(0);
$link = mysql_connect("localhost", 'root', '');
mysql_select_db("test") or die("error select db");
$type = $_POST['type'];
$sql = "SELECT * FROM music WHERE type = {$type}";

mysql_query("set names utf8");
$result = mysql_query($sql);
$arr = array();
while ($row = mysql_fetch_assoc($result)) {
    $arr[] = $row;
}
echo json_encode($arr);