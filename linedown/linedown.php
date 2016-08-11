<?php
$con = mysql_connect("localhost:","root","root");
if(!$con){
  die("数据库连接失败");
}
mysql_query("SET NAMES UTF8");
mysql_select_db("hhh");
$type = $_REQUEST["type"];
if($type == 'all'){
  $sql = "SELECT * FROM lesson";
}else if($type == 'ios'){
  $sql = "SELECT * FROM lesson WHERE class LIKE '%$type%'";
}else if($type == 'android'){
  $sql = "SELECT * FROM lesson WHERE class LIKE '%$type%'";
}else if($type == 'html5'){
  $sql = "SELECT * FROM lesson WHERE class LIKE '%$type%'";
}else if($type == 'u3d'){
  $sql = "SELECT * FROM lesson WHERE class LIKE '%$type%'";
}else if($type == 'manager'){
  $sql = "SELECT * FROM lesson WHERE class LIKE '%产品经理%'";
}
$res = mysql_query($sql);
$arr = array();
while($row = mysql_fetch_assoc($res)){
  array_push($arr,$row);
}
echo json_encode($arr);
mysql_close($con);
 ?>
