<?php 
include '../config/config.php';
// $sql="select time,waterflow,totalwater,(select waterflow from nodes where node='node3' order by id desc limit 1)+(select waterflow from nodes where node='node4' order by id desc limit 1) as ans from nodes;";
$sql="select time,waterflow,totalwater from nodes where node='Node_2' order by id desc";

$result=mysqli_query($con,$sql);
$output=array();
$len=mysqli_num_rows($result);
$i=0;
for($i=0;$i<$len;$i++)
{
$output[$i]=mysqli_fetch_array($result);
}
echo json_encode($output);
?>




