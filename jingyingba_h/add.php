<?php
$con=mysql_connect("localhost:8889","root","root");
 if(!$con){
    die("数据库连接失败");
};
mysql_query("SET NAMES UTF8");
mysql_select_db("super");   //做好数据库连接
$name = $_REQUEST["name"];
$password = $_REQUEST["password"];  //获取账号密码

$sql = "SELECT * FROM userinfo WHERE username='$name'";
$res = mysql_query($sql); //查询数据库中有没有此账号

if(mysql_num_rows($res) == 0){
  $sql = "INSERT INTO userinfo (username,password) VALUES ('$name','$password')";
  $res = mysql_query($sql);
  echo "success";
}else{
  echo "error";
}
mysql_close($con);
?>
