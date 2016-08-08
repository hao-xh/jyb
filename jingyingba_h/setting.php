<?php
$con = mysql_connect("localhost:8889","root","root");
if(!$con){
  die("数据库连接失败");
}
mysql_query("SET NAMES UTF8");
mysql_select_db("super");
$name = $_REQUEST["name"];
$newPwd = $_REQUEST["newPwd"];
$oldPwd = $_REQUEST["oldPwd"];
$sql = "SELECT * FROM userinfo WHERE username='$name' and password='$oldPwd'";
$res = mysql_query($sql);
if(mysql_num_rows($res) == 1){
  $sql = "UPDATE userinfo SET password='$newPwd' WHERE username='$name'";
  $res = mysql_query($sql);
  echo "success";
}else{
  echo "error";
}
mysql_close($con);
 ?>
