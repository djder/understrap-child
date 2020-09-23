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

	$group_id = 0;
	$man_id = 0;

if (isset($_REQUEST["selfirstname"])  && $_REQUEST["selfirstname"]  != ""){ $selfirstname = $_REQUEST["selfirstname"]; }
if (isset($_REQUEST["selmiddlename"]) && $_REQUEST["selmiddlename"] != ""){ $selmiddlename = $_REQUEST["selmiddlename"]; }
if (isset($_REQUEST["sellastname"])   && $_REQUEST["sellastname"]   != ""){ $sellastname = $_REQUEST["sellastname"]; }
if (isset($_REQUEST["selemail1"])     && $_REQUEST["selemail1"]     != ""){ $selemail1 = $_REQUEST["selemail1"]; }
if (isset($_REQUEST["selemail2"])     && $_REQUEST["selemail2"]     != ""){ $selemail2 = $_REQUEST["selemail2"]; }
if (isset($_REQUEST["group_id"])      && $_REQUEST["group_id"]      != ""){ $groups_id = $_REQUEST["group_id"]; }
if (isset($_REQUEST["man_id"])        && $_REQUEST["man_id"]        != ""){ $manager_id = $_REQUEST["man_id"]; }
	
	if ($group_id*1 == 0 && $man_id*1 == 0) {
		$query = "INSERT INTO managers VALUES (NULL, $selfirstname, $selmiddlename, $sellastname, 1, $selemail1,  $selemail2, CURDATE())";
		$result = mysql_query($query, $connection) or die(mysql_error());
	}
	else {
		if ($group_id*1 != 0 && $man_id*1 == 0){
			$query = "INSERT INTO managers VALUES (NULL, $selfirstname, $selmiddlename, $sellastname, 1, $selemail1,  $selemail2, CURDATE())";
			$result = mysql_query($query, $connection) or die(mysql_error());
			$query = "SELECT id FROM managers WHERE firstname=$selfirstname AND middlename=$selmiddlename AND lastname=$sellastname AND type=1 ADN email1=$selemail1  AND email2=$selemail2";
			$result = mysql_query($query, $connection) or die(mysql_error());
			if ( mysql_num_rows($result) > 0 ) { 
				$manager_id = mysql_result($result, $x, 0); 
				$query = "INSERT INTO mangroupsref VALUES (NULL, $groups_id, $manager_id, CURDATE(), NULL)";
				$result = mysql_query($query, $connection) or die(mysql_error());
			}
		}
		if ($man_id*1 != 0 && $group_id*1 == 0){
			$query = "UPDATE managers SET firstname=$selfirstname, middlename=$selmiddlename, lastname=$sellastname, type=1, email1=$selemail1, email2=$selemail2 WHERE id=$manager_id";
			$result = mysql_query($query, $connection) or die(mysql_error());
		}
	}
//echo $query;
?>
<table class="setka" style="width:100%;max-width:100%;border-collapse:collapse;border-color:#a0a0a0;line-height:12px;font-size:10px;margin:4px;">
<tr style="line-height:14px;font-size:12px;">
<td style="line-height:14px;font-size:12px;padding:2px 0;">	
 Выбрана группа: 
</td>	
<td style="line-height:14px;font-size:12px;padding:2px 0;">
<input id="selgroupname" type="text" value="<?php echo $groupname; ?>" name="selgroupname" style="border-color:#a0a0a0;height:14px;line-height:14px;font-size:12px;margin:0;" disabled />
<input id="group_id" type="hidden" value="<?php echo $groups_id; ?>" name="group_id" />
</td>
</tr>	
<tr style="line-height:14px;font-size:12px;">	
<td colspan="2" style="line-height:14px;font-size:12px;padding:2px 0;">	
<table class="setka" style="width:100%;max-width:100%;border-collapse:collapse;line-height:12px;font-size:10px;">
<tbody style="line-height:14px;font-size:12px;">
<tr>
<th style="border: 1px solid #a0a0a0;background:#f0f0e0;">Имя менеджера в данной группе</th><th colspan="2" style="border: 1px solid #a0a0a0;background:#f0f0e0;">Управление</th>	
</tr>	
<?php
	$query = "SELECT * FROM managers";
	if ($groups_id*1 != 0) {
		$query = "SELECT * FROM managers M1 LEFT JOIN mangroupsref M2 ON M1.id = M2.manager_id WHERE M2.group_id = $groups_id";
	}	
	$result = mysql_query($query, $connection) or die(mysql_error());
	$group = "";
	for ($x = 0; $x < mysql_num_rows($result); $x++){
echo '<tr style="border: 1px solid #a0a0a0;line-height:14px;font-size:12px;">';
		$man_id = mysql_result($result, $x, 0);
		$firstname = mysql_result($result, $x, 1);
		$middlename = mysql_result($result, $x, 2);
		$lastname = mysql_result($result, $x, 3);
echo '<td style="border: 1px solid #a0a0a0;font-size:12px;line-height:14px;padding: 2px 0;width:140px;">'.$lastname.' '.$firstname.' '.$middlename.'</td><td style="border: 1px solid #a0a0a0;font-size:12px;line-height:14px;padding: 2px 0;width:60px;background:red;cursor:pointer;color:white;" onclick="delgroup('.$man_id.');"> Удалить</td><td style="border: 1px solid #a0a0a0;font-size:12px;line-height:14px;padding: 2px 0;width:60px;background:darkorange;cursor:pointer;color:white;" onclick="selgroup('.$man_id.');">Выбрать</td>';
echo '</tr>';
	}

?>	
</tbody>
</table>
</td>
</tr>	
</table>	
<?php

mysql_close($connection);	 	

?>