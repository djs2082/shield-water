<?php 
include '../config/config.php';
$sql="select time,waterflow,totalwater from nodes where node='Node_4' order by id desc";
//echo $sql;
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




