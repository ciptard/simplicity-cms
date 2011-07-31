<?php
$conn=mysql_connect("localhost", "shedali_vet", "7ea78je4") or die ('database wont connect because:'. mysql_error());
$db = mysql_select_db ("shedali_vet_cms", $conn) or die("Couldn't open database");

$contentValue = $_POST['contentValue'];
$field = $_POST['field'];

$query= "UPDATE content set contentValue = '$contentValue' where field = '$field'";
print $query;
$result= mysql_query($query, $conn) or die (mysql_error());


if($result)
	print 'success';
?>