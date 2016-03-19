<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/3/18
 * Time: 17:36
 */
$name = iconv('utf-8', 'gbk', $_POST['musicname']);
$f_str=file_get_contents($name);
echo iconv('gbk', 'utf-8', $f_str);