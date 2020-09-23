<?php
include("dbconfig.php");

global $current_user;

$login = ($current_user->user_login)?$current_user->user_login:'';

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
		
		$name = "";
		$objectt = "";
		$manager = "";
		$address = "";
		$mail = "";
		$phone = "";
		$prim = "";
		$config = "data=''";

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

/*	if (isset($_REQUEST["objectt"]) && $_REQUEST["objectt"] != ""){
	  $objectt = $_REQUEST["objectt"];
	  $objectt = str_replace("exit", "", $objectt);
	  $objectt = str_replace("quit", "", $objectt);
	  $objectt = str_replace(";", "", $objectt);
	  $objectt = str_replace("drop", "", $objectt);
	  $objectt = str_replace("delete", "", $objectt);
	  $objectt = str_replace("alter", "", $objectt);
	  $objectt = str_replace("_eq_", "=", $objectt);
	  $objectt = str_replace("__", " ", $objectt);
	  $objectt = 'object='.$objectt.',';
	}

	if (isset($_REQUEST["address"]) && $_REQUEST["address"] != ""){
	  $address = $_REQUEST["address"];
	  $address = str_replace("exit", "", $address);
	  $address = str_replace("quit", "", $address);
	  $address = str_replace(";", "", $address);
	  $address = str_replace("drop", "", $address);
	  $address = str_replace("delete", "", $address);
	  $address = str_replace("alter", "", $address);
	  $address = str_replace("_eq_", "=", $address);
	  $address = str_replace("__", " ", $address);
	  $address = 'address='.$address.',';
	}
	if (isset($_REQUEST["mail"]) && $_REQUEST["mail"] != ""){
	  $mail = $_REQUEST["mail"];
	  $mail = str_replace("exit", "", $mail);
	  $mail = str_replace("quit", "", $mail);
	  $mail = str_replace(";", "", $mail);
	  $mail = str_replace("drop", "", $mail);
	  $mail = str_replace("delete", "", $mail);
	  $mail = str_replace("alter", "", $mail);
	  $mail = str_replace("_eq_", "=", $mail);
	  $mail = str_replace("__", " ", $mail);
	  $mail = 'mail='.$mail.',';
	}
*/
	if (isset($_REQUEST["phone"]) && $_REQUEST["phone"] != ""){
	  $phone = $_REQUEST["phone"];
	  $phone = str_replace("exit", "", $phone);
	  $phone = str_replace("quit", "", $phone);
	  $phone = str_replace(";", "", $phone);
	  $phone = str_replace("drop", "", $phone);
	  $phone = str_replace("delete", "", $phone);
	  $phone = str_replace("alter", "", $phone);
	  $phone = str_replace("_eq_", "=", $phone);
	  $phone = str_replace("__", " ", $phone);
	  $phone = 'phone='.$phone.',';
	}

	if (isset($_REQUEST["prim"]) && $_REQUEST["prim"] != ""){
	  $prim = $_REQUEST["prim"];
	  $prim = str_replace("exit", "", $prim);
	  $prim = str_replace("quit", "", $prim);
	  $prim = str_replace(";", "", $prim);
	  $prim = str_replace("drop", "", $prim);
	  $prim = str_replace("delete", "", $prim);
	  $prim = str_replace("alter", "", $prim);
	  $prim = str_replace("_eq_", "=", $prim);
	  $prim = str_replace("__", " ", $prim);
	  $prim = 'prim='.$prim.',';
	}

	if (isset($_REQUEST["count"]) && $_REQUEST["count"] != ""){
		$count = 'count='.$_REQUEST["count"].',';
	}	  
	if (isset($_REQUEST["number"]) && $_REQUEST["number"] != ""){
	  	$number = 'number='.$_REQUEST["number"].',';
	}

	if (isset($_REQUEST["sesid"]) && $_REQUEST["sesid"] != ""){
		$sesid = 'session_id='.$_REQUEST["sesid"].',';
	}	  
	if (isset($_REQUEST["able"]) && $_REQUEST["able"] != ""){
	  	$able = 'able='.$_REQUEST["able"].',';
	}
	if (isset($_REQUEST["time"]) && $_REQUEST["time"] != ""){
	  	$time = 'time='.$_REQUEST["time"].',';
	}
	if (isset($_REQUEST["coast"]) && $_REQUEST["coast"] != ""){
	  	$coast = 'coast='.$_REQUEST["coast"].',';
	}

	if (isset($_REQUEST["inn"]) && $_REQUEST["inn"] != "" && $_REQUEST["inn"] != "''"){
	  	$inn = 'inn='.$_REQUEST["inn"].',';
	}
	if (isset($_REQUEST["config"]) && $_REQUEST["config"] != ""){
	  $config = 'data='.$_REQUEST["config"].',';
	}

	$query = "UPDATE $table SET $objectt $count $address $mail $phone $sesid $number $prim $able $time $coast $inn $config date_out=ADDDATE(CURDATE(), INTERVAL 3 DAY) WHERE $case";

	  if (isset($_REQUEST['id']) && $_REQUEST['id'] != "") {
		  $id = $_REQUEST['id']; 
		  $query = "UPDATE $table SET $objectt $count $address $mail $phone $sesid $number $prim $able $time $coast $inn $config date_out=ADDDATE(CURDATE(), INTERVAL 3 DAY) WHERE id=$id AND $case";
		  
		  //echo '<h3>'.$query.'</h3>';
	  }
	  $result = mysql_query($query, $connection) or die(mysql_error());

	if (isset($_REQUEST["number"]) && $_REQUEST["number"] != "" && $_REQUEST["number"] != "''"){
		$num = $_REQUEST["number"];
	  	$case = "$case OR number=$num";
	}

		$query0 = "SELECT DISTINCT object FROM $table WHERE $case";

		  //echo '<h3>'.$query0.'</h3>';
		$result0 = mysql_query($query0, $connection) or die(mysql_error());

	if (isset($_REQUEST["number"]) && $_REQUEST["number"] != "" && $_REQUEST["number"] != "''"){
	  	$num = $_REQUEST["number"];
		$case = "$case OR number=$num";
	}
	$query = "SELECT t1.name,t1.count,t1.prim,t2.name,t2.id,t1.able,t1.time,t1.coast,t1.id,t1.session_id,t1.inn,t1.object, t1.date_in, t1.date_out FROM proba t1 LEFT JOIN status_prep t2 ON t1.status = t2.id WHERE $case";			  

			  //echo '<h3>'.$query.'</h3>';
	$result = mysql_query($query, $connection) or die(mysql_error());

	$colors = array('red', 'orange', 'yellow', 'orange', 'orange', 'yellow', 'yellow', 'olive', 'olive', 'green', 'green', 'darkgreen');
	for ($i = 0; $i < mysql_num_rows($result0); $i++){
		
      echo '<tr>';
	  echo '<td style="font-weight:bold;text-align:right;background:lightgray;vertical-alig:middle;">Объект:</td><td colspan="3" style="font-weight:bold;text-align:center;background:lightgray;"><input type="text" id="object'.$i.'" value="'.mysql_result($result0, $i, 0).'" class="inputbox1" style="width:400px;" disabled /></td><td colspan="3" style="font-weight:bold;text-align:right;background:lightgray;"></td>';
      echo '</tr>';
	  for($j = 0; $j < mysql_num_rows($result); $j++){
		if (mysql_result($result, $j, 11) == mysql_result($result0, $i, 0)){
		$selab = ''; 
		$pod = ((mysql_result($result, $j, 8) == $id) || (mysql_result($result, $j, 12) != mysql_result($result, $j, 13)))?('class="proundgn_">&radic;</p>'):('class="proundgn" onclick="safezakaz('.mysql_result($result, $j, 8).',\''.mysql_result($result, $j, 9).'\');">Подтвердить</p>');
		$col = $colors[mysql_result($result, $j, 4)-1];
		$selab = (mysql_result($result, $j, 5) == 1)?'checked':'';
		$selab = (mysql_result($result, $j, 4) == 12)?' disabled':$selab;
		$selab .= ((mysql_result($result, $j, 4) == 1) || (mysql_result($result, $j, 8) == $id) || (mysql_result($result, $j, 12) != mysql_result($result, $j, 13)))?' disabled':'';
		$seltm = (mysql_result($result, $j, 6) == 1)?'checked':'';  
		$seltm .= ((mysql_result($result, $j, 8) == $id) || (mysql_result($result, $j, 12) != mysql_result($result, $j, 13)))?' disabled':'';
		$selct = (mysql_result($result, $j, 7) == 1)?'checked':'';
		$selct .= ((mysql_result($result, $j, 8) == $id) || (mysql_result($result, $j, 12) != mysql_result($result, $j, 13)))?' disabled':'';
        echo '<tr>';
		echo '<td id="srt-'.mysql_result($result, $j, 8).'">'.htmlspecialchars(mysql_result($result, $j, 0)).'</td><td><input id="count-'.mysql_result($result, $j, 8).'" type="text" class="inputbox1"  style="width:36px;" value="'.mysql_result($result, $j, 1).'"/></td>';
		echo '<td><input id="prim-'.mysql_result($result, $j, 8).'" type="text" class="inputbox1" style="width:250px;" value="'.htmlspecialchars(mysql_result($result, $j, 2)).'"/></td>';
		echo '<td><p style="color:'.$col.'">'.mysql_result($result, $j, 3).'</p></td>';
		echo '<td class="tdsmaltxt"><p class="check"><input id="able-'.mysql_result($result, $j, 8).'" type="checkbox" '.$selab.'/>  Возможность</p><p class="check"><input id="time-'.mysql_result($result, $j, 8).'" type="checkbox" '.$seltm.'/>  Сроки</p><p class="check"><input id="coast-'.mysql_result($result, $j, 8).'" type="checkbox" '.$selct.'/>  Стоимость</p></td><td style="text-align:center;"><p '.$pod.'</td>';
		echo '<td style="text-align:center;"><p class="pround" onclick="delzakaz('.mysql_result($result, $i, 8).',\''.mysql_result($result, $j, 9).'\');">X</p></td>';
        echo '</tr>';		
		}
	  }
	}	
      //echo '</table';
	}
mysql_close($connection);	 
	
}

?>