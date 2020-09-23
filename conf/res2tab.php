<?php
include("dbconfig.php");

if (isset($_REQUEST['table']) && $_REQUEST['table'] != ""){
	$connection = mysql_connect(DBSERV, DBUSER, DBPASS);
    if (!$connection) { 
      echo "Ошибка подключения к базе данных. Код ошибки: ".mysqli_connect_error(); 
      exit; 
    } 

    mysql_select_db(DBNAME) or die(mysql_error());  

    $query = "SET names UTF8";
    $result = mysql_query($query) or die(mysql_error());
	
	$query = "show tables";
	$result = mysql_query($query, $connection) or die(mysql_error());
    
	$table = "";
	for ($x = 0; $x < mysql_num_rows($result); $x++){
		if ($_REQUEST['table'] == mysql_result($result, $x, 0))
			$table = mysql_result($result, $x, 0);
	}
	if ($table != ""){
		
      $case = "1 = 1";
		
	  if (isset($_REQUEST['case']) && $_REQUEST['case'] != ""){
		  $case = $_REQUEST['case'];
		  $case = str_replace("exit", "", $case);
		  $case = str_replace("quit", "", $case);
		  $case = str_replace(";", "", $case);
		  $case = str_replace("drop", "", $case);
		  $case = str_replace("delete", "", $case);
		  $case = str_replace("alter", "", $case);
		  $case = str_replace("_lteq_", "<=", $case);
		  $case = str_replace("_gteq_", ">=", $case);
		  $case = str_replace("_eq_", "=", $case);
		  $case = str_replace("_lt_", "<", $case);
		  $case = str_replace("_gt_", ">", $case);
		  $case = str_replace("_and_", " AND ", $case);
		  $case = str_replace("_or_", " OR ", $case);
		  $case = str_replace("_not_", " NOT ", $case);
	  }	  
	  $query = "SELECT * FROM $table WHERE $case LIMIT 1";
      if (isset($_REQUEST['column0']) && $_REQUEST['column0'] == "*") {
		  $column0 = $_REQUEST['column0']; 
		  $query = "SELECT * FROM $table WHERE $case";
	  }
      if (isset($_REQUEST['column0']) && $_REQUEST['column0'] != "" && $_REQUEST['column0'] != "*") {
		  $column0 = $_REQUEST['column0']; 
		  $query = "SELECT $column0 FROM $table WHERE $case";
	  }
      if (isset($_REQUEST['number']) && $_REQUEST['number'] != "" && $_REQUEST['number'] != "''") {
		  $num = $_REQUEST['number']; 
		  $case = "$case OR number=$num";
	  }

	  if (isset($_REQUEST['column0']) && $_REQUEST['column0'] != "" && isset($_REQUEST['column1']) && $_REQUEST['column1'] != "") {
		  $column0 = $_REQUEST['column0']; 
		  $column1 = $_REQUEST['column1'];
		  $query = "SELECT $column0,$column1 FROM $table WHERE $case";
		  if (isset($_REQUEST['column2']) && $_REQUEST['column2'] != "") {
		  	$column2 = $_REQUEST['column2'];
			$query0 = "SELECT DISTINCT object FROM $table WHERE $case";
			  
			$result0 = mysql_query($query0, $connection) or die(mysql_error());
			  
		  	$query = "SELECT t1.$column0,t1.$column1,t1.$column2,t2.name,t2.id,t1.able,t1.time,t1.coast,t1.id,t1.session_id,t1.inn,t1.object,t1.date_in, t1.date_out FROM $table t1 LEFT JOIN status_prep t2 ON t1.status = t2.id WHERE $case";			  
		  }
	  }
//echo $query0;
	  $result = mysql_query($query, $connection) or die(mysql_error());

	  $colors = array('red', 'orange', 'yellow', 'orange', 'orange', 'yellow', 'yellow', 'olive', 'olive', 'green', 'green', 'darkgreen');

	for ($i = 0; $i < mysql_num_rows($result0); $i++){
		
        echo '<tr>';
		echo '<td style="font-weight:bold;text-align:right;background:lightgray;vertical-alig:middle;">Объект:</td><td colspan="3" style="font-weight:bold;text-align:center;background:lightgray;"><input type="text" id="object'.$i.'" value="'.mysql_result($result0, $i, 0).'" class="inputbox1" style="width:400px;" disabled /></td><td colspan="3" style="font-weight:bold;text-align:right;background:lightgray;"></td>';
        echo '</tr>';
	  for ($j = 0; $j < mysql_num_rows($result); $j++){
		if (mysql_result($result, $j, 11) == mysql_result($result0, $i, 0)){
		$pod = ((mysql_result($result, $j, 8) == $id) || (mysql_result($result, $j, 12) != mysql_result($result, $j, 13)))?('class="proundgn_">&radic;</p>'):('class="proundgn" onclick="safezakaz('.mysql_result($result, $j, 8).',\''.mysql_result($result, $j, 9).'\');">Подтвердить</p>');
		$selab = '';
		$col = $colors[mysql_result($result, $j, 4)-1];
		$selab = (mysql_result($result, $j, 5) == 1)?'checked':'';
		//$selab .= (mysql_result($result, $j, 4) == 1)?' disabled':'';
		$selab .= ' disabled';
		$selab = (mysql_result($result, $j, 4) == 12)?' disabled':$selab;
		$seltm = (mysql_result($result, $j, 6) == 1)?'checked':'';  
		$selct = (mysql_result($result, $j, 7) == 1)?'checked':'';
        echo '<tr>';
		echo '<td id="srt-'.mysql_result($result, $j, 8).'" style="padding:2px;vertical-align:top;">'.htmlspecialchars(mysql_result($result, $j, 0)).'</td>';
		echo '<td style="padding-right:0;"><input id="count-'.mysql_result($result, $j, 8).'" type="text" class="inputbox1"  style="width:64px;" value="'.mysql_result($result, $j, 1).'"/></td>';
		echo '<td><input id="prim-'.mysql_result($result, $j, 8).'" type="text" class="inputbox1" style="width:250px;" value="'.htmlspecialchars(mysql_result($result, $j, 2)).'"/></td>';
		echo '<td style="vertical-align:top;"><p style="color:'.$col.';">'.mysql_result($result, $j, 3).'</p></td>';
		echo '<td class="tdsmaltxt"><p class="check"><input id="able-'.mysql_result($result, $j, 8).'" type="checkbox" '.$selab.'/>  Возможность</p><p class="check"><input id="time-'.mysql_result($result, $j, 8).'" type="checkbox" '.$seltm.'/>  Сроки</p><p class="check"><input id="coast-'.mysql_result($result, $j, 8).'" type="checkbox" '.$selct.'/>  Стоимость</p></td>';
		echo '<td style="text-align:center;"><p '.$pod.'</td>';
		echo '<td style="text-align:center;"><p class="pround" onclick="delzakaz('.mysql_result($result, $j, 8).',\''.mysql_result($result, $j, 9).'\');">X</p></td>';
        echo "</tr>";
			
		}
			
	  }
		
	}
	}
mysql_close($connection);	 
}

?>