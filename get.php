
<?php
error_reporting(0);
$link = mysql_connect("localhost", 'root', '');
mysql_select_db("test") or die("error select db");
$type = $_POST['type'];
$order = $_POST['order'];
$num = $_POST['num'];

if(is_string($order)&&is_numeric($num))
{    if(!is_numeric($type))
	  {$whe = "";}
	  else{
	  	$whe="where type =".$type;
	  }
	$sql = "SELECT * FROM music {$whe} ORDER BY {$order} desc limit {$num}";
}
else{
	die("die");
}


mysql_query("set names utf8");
$result = mysql_query($sql);
$arr = array();
while ($row = mysql_fetch_assoc($result)) {
    $arr[] = $row;
}
 echo json_encode($arr); 