<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/3/18
 * Time: 17:36
 */
//$name = iconv('utf-8', 'gbk', $_POST['musicname']);
$name=$_POST['musicname'];
$f_str=file_get_contents($name);
//$f_str=iconv('gbk', 'utf-8', $f_str);
if(empty($f_str))echo "暂无歌词！";
echo $f_str;