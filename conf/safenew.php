<?php
global $current_user;

$login = ($current_user->user_login)?$current_user->user_login:'';

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
		
		$name = "";
		$objectt = "";
		$manager = "";
		$address = "";
		$mail = "";
		$phone = "";
		$prim = "";
		$config = "";

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

	if (isset($_REQUEST["manager"]) && $_REQUEST["manager"] != ""){
	  $manager = $_REQUEST["manager"];
	  $manager = str_replace("exit", "", $manager);
	  $manager = str_replace("quit", "", $manager);
	  $manager = str_replace(";", "", $manager);
	  $manager = str_replace("drop", "", $manager);
	  $manager = str_replace("delete", "", $manager);
	  $manager = str_replace("alter", "", $manager);
	  $manager = str_replace("_eq_", "=", $manager);
	  $manager = str_replace("__", " ", $manager);
	  $manager = 'manager='.$manager.',';
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
*/
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
	if (isset($_REQUEST["inn"]) && $_REQUEST["inn"] != ""){
	  $inn = $_REQUEST["inn"];
	  $inn = str_replace("exit", "", $inn);
	  $inn = str_replace("quit", "", $inn);
	  $inn = str_replace(";", "", $inn);
	  $inn = str_replace("drop", "", $inn);
	  $inn = str_replace("delete", "", $inn);
	  $inn = str_replace("alter", "", $inn);
	  $inn = str_replace("_eq_", "=", $inn);
	  $inn = str_replace("__", " ", $inn);
	  $inn = 'inn='.$inn.',';
	}

//	if (isset($_REQUEST["number"]) && $_REQUEST["number"] != ""){
//	  	$number = 'number='.$_REQUEST["number"].',';
//	}

	if (isset($_REQUEST["sesid"]) && $_REQUEST["sesid"] != ""){
		$sesid = 'session_id='.$_REQUEST["sesid"].',';
	}	  
	if (isset($_REQUEST["mail"]) && $_REQUEST["mail"] != ""){
	  	$mail = 'mail='.$_REQUEST["mail"].',';
	}

	if (isset($_REQUEST["org"]) && $_REQUEST["org"] != ""){
	  $org = $_REQUEST["org"];
	  $org = str_replace("exit", "", $org);
	  $org = str_replace("quit", "", $org);
	  $org = str_replace(";", "", $org);
	  $org = str_replace("drop", "", $org);
	  $org = str_replace("delete", "", $org);
	  $org = str_replace("alter", "", $org);
	  $org = str_replace("_eq_", "=", $org);
	  $org = str_replace("__", " ", $org);
	  $org = 'org='.$org;
	}
	if (isset($_REQUEST["config"]) && $_REQUEST["config"] != ""){
	  $config = ',data='.$_REQUEST["config"];
	}

	setcookie("session_id", $_REQUEST["sesid"], time()+60*60*24*1100, "/", "intzv.ru", 1);

	$query = "SELECT max(id)+1 FROM vsezakaz"; 
	
	$result = mysql_query($query, $connection) or die(mysql_error());
		
	$last = mysql_result($result, 0);
		
	//echo $last;
	
	if (isset($_REQUEST["number"]) && $_REQUEST["number"] != "" && $_REQUEST["number"] != "''"){
		$number = $_REQUEST["number"];
		$flag = 0;
	//echo '<h3>'.$number.'</h3>';
		$query = "SELECT number FROM vsezakaz";
		$result = mysql_query($query, $connection) or die(mysql_error());
		for ($x = 0; $x < mysql_num_rows($result); $x++){
	//echo "<h3>".mysql_result($result, $x, 0)." - ".$number."</h3>";
			if ($number == "'".mysql_result($result, $x, 0)."'") {
				$number = "'".mysql_result($result, $x, 0)."' ";
				$flag = 1;
				break;
			}
		}
		if ($flag == 0){
			$number = "";
		}
	}
	
	if ($number == "") {
		$query = "SELECT CONCAT('V', LPAD(MONTH(CURDATE()), 2,'0'), RIGHT(YEAR(CURDATE()), 2), LPAD(CONCAT($last),6,'0') )";
		$result = mysql_query($query, $connection) or die(mysql_error());
		$number = mysql_result($result, 0, 0);
		$number = "'".$number."'";
		$query = "INSERT INTO vsezakaz VALUES (NULL, $number, 'Заказ сохранён', CURDATE(), CURDATE(), 0, 0)";
	//echo '<h3>'.$query.'</h3>';
		$result = mysql_query($query, $connection) or die(mysql_error());
	}

	$number = "number=".$number.",";
		
	$query = "UPDATE $table SET $manager $objectt $address $mail $phone $sesid $number $inn $org $config WHERE $case";
		
	if ($login == 'ntz-volhov') echo '<h3>'.$query.'</h3>';
	
	$result = mysql_query($query, $connection) or die(mysql_error());
		
//	$query = "SELECT t1.name,t1.count,t1.prim,t2.name,t2.id,t1.able,t1.time,t1.coast,t1.id,t1.session_id,t1.manager,t1.object,t1.address,t1.mail,t1.phone,t1.inn t3.naimen FROM $table t1 LEFT JOIN status_prep t2 ON t1.status = t2.id LEFT JOIN nomenklatura t3 ON t1.name = t3.naimenovanie WHERE $case";			  


	}
mysql_close($connection);	 
	
}
?>