<?php
$con = mysql_connect("localhost:8889","root","root");
if(!$con){
  die("数据库连接失败");
}
mysql_query("SET NAMES UTF8");
mysql_select_db("super");
$type = $_REQUEST["type"];
if($type == "all"){
  $sql = "SELECT * FROM hehe";
  $res = mysql_query($sql);
  $arr = array();
  while($row = mysql_fetch_assoc($res)){
    array_push($arr,$row);
  }
  echo json_encode($arr);
}else if($type == "waiting"){
  $keyword = $_REQUEST["keyword"];
  $sql = "SELECT * FROM hehe WHERE state='$keyword'";
  $res = mysql_query($sql);
  $arr = array();
  while($row = mysql_fetch_assoc($res)){
    array_push($arr,$row);
  }
  echo json_encode($arr);
}else if($type == "payment"){
  $time = $_REQUEST["time"];
  $infor = $_REQUEST["infor"];
  $txt = $_REQUEST["txt"];
  $state = $_REQUEST["state"];
  $ntxt = $_REQUEST["ntxt"];
  $sql = "UPDATE hehe SET state='$state',operation='$ntxt' WHERE timer='$time' and information='$infor' and state='$txt'";
  $res = mysql_query($sql);
  echo $res;
}



 ?>
