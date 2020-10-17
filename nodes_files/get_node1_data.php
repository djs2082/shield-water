<?php 
include '../config/config.php';
$sql='select time as label, ph as y,turbidity from tank order by id desc limit 12';
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




