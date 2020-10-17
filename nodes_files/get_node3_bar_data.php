<?php 
include '../config/config.php';
$sql="select date,totalwater from nodes where node='Node_3' order by id desc limit 1";
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




