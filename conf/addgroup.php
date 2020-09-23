<?php
include("dbconfig.php");
$connection = mysql_connect(DBSERV, DBUSER, DBPASS);
if (!$connection) { 
      echo "Ошибка подключения к базе данных. Код ошибки: ".mysqli_connect_error(); 
      exit; 
} 

mysql_select_db(DBNAME) or die(mysql_error());  

$query = "SET names UTF8";
$result = mysql_query($query, $connection) or die(mysql_error());

if (isset($_REQUEST["groupname"]) && $_REQUEST["groupname"] != ""){
	$groupname = $_REQUEST["groupname"];
	$query = "INSERT INTO mangroups VALUES (NULL, $groupname, 0)";
	$result = mysql_query($query, $connection) or die(mysql_error());
}

echo '<tr><th style="border: 1px solid #a0a0a0;background:#f0f0e0;">Название</th><th colspan="2" style="border: 1px solid #a0a0a0;background:#f0f0e0;">Управление</th></tr>';
	
	$query = "SELECT * FROM mangroups";
	$result = mysql_query($query, $connection) or die(mysql_error());
	$group = "";
	$group_id = 0;
	for ($x = 0; $x < mysql_num_rows($result); $x++){
		echo '<tr style="border: 1px solid #a0a0a0;line-height:14px;font-size:12px;">';
		$group_id = mysql_result($result, $x, 0);
		$group = mysql_result($result, $x, 1);
		echo '<td style="font-size:12px;line-height:14px;padding: 2px 0;width:140px;">'.$group.'</td><td style="font-size:12px;line-height:14px;padding: 2px 0;width:60px;background:red;cursor:pointer;color:white;" onclick="delgroup('.$group_id.');"> Удалить</td><td style="font-size:12px;line-height:14px;padding: 2px 0;width:60px;background:darkorange;cursor:pointer;color:white;" onclick="selgroup('.$group_id.');">Выбрать</td>';
		echo '</tr>';
	}
	
//echo '</table>';

mysql_close($connection);	 	


?>